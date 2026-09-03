import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
import { dirname, extname, join, relative, resolve } from 'node:path';
import sharp from 'sharp';

const root = resolve(import.meta.dirname, '..');
const checkOnly = process.argv.includes('--check');
const generator = 'Deterministic local SVG composition rendered with sharp 0.35.3';

if (sharp.versions.sharp !== '0.35.3') {
  throw new Error(`Expected sharp 0.35.3, received ${sharp.versions.sharp}`);
}

const previews = [
  {
    slug: 'tare',
    title: 'Tare social preview',
    prompt:
      'Create a 1200x630 Tare social preview using only the canonical Tare capsule icon and the existing Balance Room visual language: enamel ground, engraved graphite, precise calibration marks, and a single vermilion index. Keep it clearly graphic, not product UI or a device screenshot. Use the real product name and existing line Track your week. Reset to baseline. No availability button, price, rating, store badge, fabricated control, or web offline/install claim.',
  },
  {
    slug: 'workshop',
    title: 'Workshop social preview',
    prompt:
      'Create a 1200x630 Workshop social preview using only the canonical Workshop icon, approved real web-project capture, and the existing Living Plan Table language: cool vellum, deep spruce, 24px drafting grid, pencil blue, and restrained amber. Identify the capture as real and the web workspace as online and account-backed. Do not invent UI, devices, acquisition controls, pricing, ratings, or install/offline claims.',
  },
  {
    slug: 'cairn',
    title: 'Cairn social preview',
    prompt:
      'Create a 1200x630 Cairn social preview using only the canonical Cairn icon and established graphic motifs: cool drafting paper, plotted cobalt rules, flat certification stones, and one vermilion capstone. Keep it clearly graphic, never a screenshot of the synthetic Astro UI. Use only real exam codes already present on the page. No store badge, price, rating, fake control, device, or web offline/install claim.',
  },
  {
    slug: 'shopkeep',
    title: 'ShopKeep social preview',
    prompt:
      'Create a 1200x630 ShopKeep social preview using only the canonical ShopKeep icon and the approved native inventory language: white system surface, Apple blue, direct SF-style hierarchy, and no retired toolpath-arrow identity. Keep it clearly graphic and do not invent product UI, acquisition controls, pricing, ratings, screenshots, or public availability.',
  },
];

function mimeFor(path) {
  const extension = extname(path).toLowerCase();
  if (extension === '.png') return 'image/png';
  if (extension === '.webp') return 'image/webp';
  if (extension === '.jpg' || extension === '.jpeg') return 'image/jpeg';
  throw new Error(`Unsupported embedded image type: ${path}`);
}

async function inlineImages(svg, sourcePath) {
  const matches = [...svg.matchAll(/\bhref="([^"]+\.(?:png|jpe?g|webp))"/gi)];
  let inlined = svg;

  for (const match of matches) {
    const href = match[1];
    if (href.startsWith('data:')) continue;
    const file = resolve(dirname(sourcePath), href);
    const data = await readFile(file);
    const embedded =
      extname(file).toLowerCase() === '.webp'
        ? await sharp(data).png({ compressionLevel: 9 }).toBuffer()
        : data;
    const mime = extname(file).toLowerCase() === '.webp' ? 'image/png' : mimeFor(file);
    const uri = `data:${mime};base64,${embedded.toString('base64')}`;
    inlined = inlined.replace(`href="${href}"`, `href="${uri}"`);
  }

  return inlined;
}

const crcTable = Array.from({ length: 256 }, (_, value) => {
  let crc = value;
  for (let bit = 0; bit < 8; bit += 1) {
    crc = (crc & 1) === 1 ? 0xedb88320 ^ (crc >>> 1) : crc >>> 1;
  }
  return crc >>> 0;
});

function crc32(data) {
  let crc = 0xffffffff;
  for (const byte of data) crc = crcTable[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
}

function pngTextChunk(keyword, text) {
  const type = Buffer.from('tEXt', 'ascii');
  const data = Buffer.from(`${keyword}\0${text}`, 'latin1');
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length);
  const checksum = Buffer.alloc(4);
  checksum.writeUInt32BE(crc32(Buffer.concat([type, data])));
  return Buffer.concat([length, type, data, checksum]);
}

function injectTextChunks(png, entries) {
  const signatureLength = 8;
  const ihdrLength = png.readUInt32BE(signatureLength);
  const insertAt = signatureLength + 12 + ihdrLength;
  const chunks = entries.map(([keyword, text]) => pngTextChunk(keyword, text));
  return Buffer.concat([png.subarray(0, insertAt), ...chunks, png.subarray(insertAt)]);
}

for (const preview of previews) {
  const source = join(root, 'public', 'social', 'source', `${preview.slug}.svg`);
  const output = join(root, 'public', 'social', `${preview.slug}.png`);
  const svg = await inlineImages(await readFile(source, 'utf8'), source);
  const rendered = await sharp(Buffer.from(svg), { density: 144 })
    .resize(1200, 630, { fit: 'fill' })
    .png({ compressionLevel: 9, adaptiveFiltering: true, palette: false })
    .toBuffer();
  const finalPng = injectTextChunks(rendered, [
    ['Title', preview.title],
    ['Prompt', preview.prompt],
    ['Source', relative(root, source).replaceAll('\\', '/')],
    ['Generator', generator],
  ]);

  if (checkOnly) {
    const committed = await readFile(output);
    if (!committed.equals(finalPng)) {
      throw new Error(
        `${relative(root, output)} is stale: expected ${createHash('sha256').update(finalPng).digest('hex')}`,
      );
    }
  } else {
    await writeFile(output, finalPng);
    console.log(
      `${relative(root, output)} ${createHash('sha256').update(finalPng).digest('hex')}`,
    );
  }
}

if (checkOnly) {
  console.log(`Verified ${previews.length} deterministic social renders.`);
}
