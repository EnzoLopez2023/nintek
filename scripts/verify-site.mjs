import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { extname, join, relative, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const dist = join(root, 'dist');
const site = 'https://www.nintek.com';
const releaseVisuals = JSON.parse(
  readFileSync(join(root, 'docs', 'release-visuals.json'), 'utf8'),
);
const expectedAuthorities = new Map([
  ['tare', ['EnzoLopez2023/Tare-for-iOS', '9154a7e061fe9be31426741ee94ba09da5a4c050', 'app-store/release-visuals.json', '2a63f42b0953585543e0d65d81170f25c5153e97c861e0734a9af58b86e2ab2f']],
  ['workshop', ['EnzoLopez2023/Workshop-for-iOS', '32248fcfec06195f847aaaa56e036f5b92d2981a', 'AppStore/RELEASE_VISUAL_MANIFEST.json', '89615b9c298415591e180ea629424663b8af5b5c73acab8322064daa6ab3e4b2']],
  ['shopkeep', ['EnzoLopez2023/ShopKeepNative', 'b1a757b84500fc7b051b0c0b7599b9f7906a0a1e', 'AppStorePreview/release-visual-manifest.json', '6de1f3573886c0cfd1947197c54f4842f5e1290dcb538ff8d87ac81b71b3df03']],
  ['cairn', ['EnzoLopez2023/CairnNative', '07f2ecea7e31bddb0b66612571010ac1514ac14f', 'AppStore/ReleaseVisuals/manifest.json', '607e525f9efbb8c64cb59b345538cf3ec7c3b6ac1eaa927233186e7f443b63d4']],
  ['tabloom', ['EnzoLopez2023/tabloom', 'acfa8a95d1b9e39b995c9e34549f638aafd77352', 'docs/release-visuals/manifest.json', 'e26df22695e3bf0fb41c0c2beb2837401955200c1646555c654db6b394474c85']],
  ['pulsewire', ['EnzoLopez2023/PulseWire', '6b4c1c79e5158ad1d1ec8b89195751e469e7310e', 'docs/release-visuals/manifest.json', 'e490a4664ced9cf06e1334178ff28ee402c17296176b8968d1b3f3469c345fe7']],
]);
const expectedCanonicalIcons = new Map([
  ['prism', ['EnzoLopez2023/Prism', '2168818ffa0661f5d1cad72085e0214cdca3d6b3', 'public/prism-icon-1024.png', '669b93ec6763a8ceec51434911dfa1c6fe31c9152c335f8468b3a973119942ce']],
  ['watchtower', ['EnzoLopez2023/Watchtower', '3c84ef87d14f16806a96c097798346cc69ac56eb', 'public/watchtower-icon-1024.png', 'a49c72aad165d0537ecd6475f079f8b31af63fc8e3b70d13986dd071262031a3']],
  ['lantern', ['EnzoLopez2023/Lantern', 'e40c9d8b679057989380ab053fcbdbc2d784f17d', 'public/lantern-icon-1024.png', '91e58c529d5bb58c42d559961ed0285a7516ed00c756a5be557f2e1d47615847']],
  ['marquee', ['EnzoLopez2023/Marquee', '35750f9401da5a34267030a2c316624790977587', 'public/marquee-icon-1024.png', '552a6bc58780ef9e597642445c40faccfbbff356729e30cfdfc34de7bad0cd54']],
  ['shapepilot', ['EnzoLopez2023/ShapePilot', 'f15cbf25dc63817ba25cf9098d0d014398b7a736', 'public/shapepilot-icon-1024.png', '974b1eeb5ce0d0049233d112f3ddf2b52a7b637c52376a30dfb02c81d9283534']],
  ['hearth', ['EnzoLopez2023/Hearth-v2', '6c9a7922884c41813acd918b3fba395f8c447e9b', 'src/client/public/app-icon-1024.png', 'acafb62175cd3742a2b8c988249b62934e3d5de7a192a9732248b4fcff8ebdf7']],
  ['shopkeep', ['EnzoLopez2023/ShopKeep', '939d5ae35b81cd6e93eb464b1f03cf90add1be18', 'app-store/AppIcon-1024.png', '4480365dd4c267e02e5c75a914dd949c8a996dea01111d63ff83dae0f7f04679']],
  ['workshop', ['EnzoLopez2023/workshop', 'a99aa780267b95795327dd24fb5609867b8f6603', 'app-store/AppIcon-1024.png', '66fe71c864f0353b473f9c14d89be9aa1c683df045d48bb4b8f479086b834172']],
  ['tare', ['EnzoLopez2023/Tare-for-iOS', '7ffd2c56e874a162523fa7dcf3ef51a9d3aedfce', 'app-store/AppIcon-1024.png', '600e44cbff4f01be6ba42f3d137a81308e378c83310681995f52e1db302d6b71']],
  ['tabloom', ['EnzoLopez2023/tabloom', '761fa9899e7f986b5f1d8302fe4d3d399ec31d15', 'app-store/AppIcon-1024.png', 'e42e6418274facec1a1d828effd9897254cd59e49e6bd30e7f375c0b07804ec5']],
  ['pulsewire', ['EnzoLopez2023/PulseWire', '93b76357c3642087a17ba05ad571797832db14de', 'app-store/AppIcon-1024.png', '7869a547fac45c2376ed4353109267eff6717c88c5b89374878cfd0a0d014a3a']],
  ['cairn', ['EnzoLopez2023/Cairn', 'a343f3e8862fd0be8d5eac1039ec2ad88b737a5f', 'app-store/AppIcon-1024.png', '530fb62a43737f9503d5364b9e1ea5406a6d48b9198afda54d2532bb901362ac']],
]);
const expectedIndexedRoutes = new Set([
  '/',
  '/about',
  '/cairn',
  '/ios',
  '/tare',
  '/terms',
  '/workshop',
]);
const indexedSoftwareRoutes = new Set([
  '/cairn',
  '/tare',
  '/workshop',
]);
const expectedSocialImages = new Map([
  ['/cairn', `${site}/social/cairn.png`],
  ['/shopkeep', `${site}/social/shopkeep.png`],
  ['/tare', `${site}/social/tare.png`],
  ['/workshop', `${site}/social/workshop.png`],
]);
const reviewedLegalApps = ['tare', 'workshop', 'shopkeep', 'cairn', 'tabloom', 'pulsewire'];
const lifecycleTableApps = new Set(reviewedLegalApps);

function fail(message) {
  throw new Error(message);
}

function assert(condition, message) {
  if (!condition) fail(message);
}

function walk(directory) {
  return readdirSync(directory).flatMap((name) => {
    const path = join(directory, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

function routeForHtml(file) {
  const path = relative(dist, file).replaceAll('\\', '/');
  if (path === 'index.html') return '/';
  if (path.endsWith('/index.html')) return `/${path.slice(0, -'/index.html'.length)}`;
  return `/${path.slice(0, -'.html'.length)}`;
}

function routeFile(route) {
  if (route === '/') return join(dist, 'index.html');
  const clean = route.replace(/^\/|\/$/g, '');
  return join(dist, clean, 'index.html');
}

function meta(html, selector) {
  const tag = html.match(new RegExp(`<meta[^>]+${selector}[^>]*>`, 'i'))?.[0];
  return tag?.match(/content="([^"]*)"/i)?.[1];
}

function canonical(html) {
  return html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i)?.[1];
}

function title(html) {
  return html.match(/<title>([^<]+)<\/title>/i)?.[1];
}

function imageTypeForPath(path) {
  const extension = extname(new URL(path, site).pathname).toLowerCase();
  if (extension === '.png') return 'image/png';
  if (extension === '.webp') return 'image/webp';
  if (extension === '.jpg' || extension === '.jpeg') return 'image/jpeg';
  fail(`Unsupported social image type: ${path}`);
}

function inspectImage(file) {
  const data = readFileSync(file);

  if (data.length >= 24 && data.subarray(0, 8).toString('hex') === '89504e470d0a1a0a') {
    return {
      width: data.readUInt32BE(16),
      height: data.readUInt32BE(20),
      type: 'image/png',
    };
  }

  if (
    data.length >= 30 &&
    data.toString('ascii', 0, 4) === 'RIFF' &&
    data.toString('ascii', 8, 12) === 'WEBP'
  ) {
    let offset = 12;
    while (offset + 8 <= data.length) {
      const chunk = data.toString('ascii', offset, offset + 4);
      const size = data.readUInt32LE(offset + 4);
      const payload = offset + 8;

      if (chunk === 'VP8X' && payload + 10 <= data.length) {
        return {
          width: data.readUIntLE(payload + 4, 3) + 1,
          height: data.readUIntLE(payload + 7, 3) + 1,
          type: 'image/webp',
        };
      }

      if (chunk === 'VP8L' && payload + 5 <= data.length && data[payload] === 0x2f) {
        const bits = data.readUInt32LE(payload + 1);
        return {
          width: (bits & 0x3fff) + 1,
          height: ((bits >>> 14) & 0x3fff) + 1,
          type: 'image/webp',
        };
      }

      if (
        chunk === 'VP8 ' &&
        payload + 10 <= data.length &&
        data[payload + 3] === 0x9d &&
        data[payload + 4] === 0x01 &&
        data[payload + 5] === 0x2a
      ) {
        return {
          width: data.readUInt16LE(payload + 6) & 0x3fff,
          height: data.readUInt16LE(payload + 8) & 0x3fff,
          type: 'image/webp',
        };
      }

      offset = payload + size + (size % 2);
    }
  }

  if (data.length >= 4 && data[0] === 0xff && data[1] === 0xd8) {
    const startOfFrameMarkers = new Set([
      0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7,
      0xc9, 0xca, 0xcb, 0xcd, 0xce, 0xcf,
    ]);
    let offset = 2;

    while (offset + 4 <= data.length) {
      if (data[offset] !== 0xff) {
        offset += 1;
        continue;
      }

      const marker = data[offset + 1];
      offset += 2;
      if (marker === 0xd8 || marker === 0xd9 || marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) {
        continue;
      }
      if (offset + 2 > data.length) break;

      const length = data.readUInt16BE(offset);
      if (length < 2 || offset + length > data.length) break;
      if (startOfFrameMarkers.has(marker) && length >= 7) {
        return {
          width: data.readUInt16BE(offset + 5),
          height: data.readUInt16BE(offset + 3),
          type: 'image/jpeg',
        };
      }
      offset += length;
    }
  }

  fail(`Cannot inspect image: ${relative(root, file)}`);
}

function localFileForSiteUrl(value) {
  const url = new URL(value);
  assert(url.origin === site, `Social image must use the canonical origin: ${value}`);
  return join(dist, decodeURIComponent(url.pathname).replace(/^\/+/, ''));
}

function routeExists(route) {
  if (route === '/' || route === '/index.html') return existsSync(join(dist, 'index.html'));
  const clean = route.replace(/^\/|\/$/g, '');
  return (
    existsSync(join(dist, clean, 'index.html')) ||
    existsSync(join(dist, clean)) ||
    existsSync(join(dist, `${clean}.html`))
  );
}

function assertLocalLinks(html, route) {
  for (const match of html.matchAll(/(?:href|src)="(\/[^"#?]*)/g)) {
    const value = match[1];
    if (value.startsWith('//')) continue;
    const extension = extname(value);
    if (extension) {
      assert(existsSync(join(dist, value)), `${route}: missing asset ${value}`);
    } else {
      assert(routeExists(value), `${route}: missing local route ${value}`);
    }
  }

  for (const match of html.matchAll(/(?:srcset|content)="([^"]+)"/g)) {
    for (const asset of match[1].matchAll(/(\/[^ ,"]+\.(?:png|svg|jpe?g|webp|mp4|css|js|woff2))/g)) {
      if (asset[1].startsWith('//')) continue;
      assert(existsSync(join(dist, asset[1])), `${route}: missing referenced asset ${asset[1]}`);
    }
  }
}

assert(existsSync(dist), 'dist/ does not exist; run the Astro build first.');

const htmlFiles = walk(dist).filter((file) => file.endsWith('.html'));
assert(htmlFiles.length > 0, 'No rendered HTML files found.');
const indexedTitles = new Map();
const indexedDescriptions = new Map();

for (const file of htmlFiles) {
  const route = routeForHtml(file);
  const html = readFileSync(file, 'utf8');
  const expectedCanonical = `${site}${route === '/' ? '/' : route}`;
  const isIndexed = expectedIndexedRoutes.has(route);
  const pageTitle = title(html);
  const pageDescription = meta(html, 'name="description"');
  const socialImage = meta(html, 'property="og:image"');
  const socialImageAlt = meta(html, 'property="og:image:alt"');
  const socialWidth = Number(meta(html, 'property="og:image:width"'));
  const socialHeight = Number(meta(html, 'property="og:image:height"'));

  assert(canonical(html) === expectedCanonical, `${route}: incorrect canonical URL`);
  assert(pageTitle, `${route}: missing title`);
  assert(pageTitle.length <= 65, `${route}: title exceeds 65 characters`);
  assert(pageDescription, `${route}: missing description`);
  assert(meta(html, 'property="og:type"') === 'website', `${route}: wrong og:type`);
  assert(meta(html, 'property="og:site_name"') === 'Nintek', `${route}: wrong og:site_name`);
  assert(meta(html, 'property="og:locale"') === 'en_US', `${route}: wrong og:locale`);
  assert(meta(html, 'property="og:title"') === pageTitle, `${route}: og:title differs from title`);
  assert(
    meta(html, 'property="og:description"') === pageDescription,
    `${route}: og:description differs from description`,
  );
  assert(meta(html, 'property="og:url"') === expectedCanonical, `${route}: incorrect og:url`);
  assert(socialImage, `${route}: missing og:image`);
  assert(
    meta(html, 'property="og:image:secure_url"') === socialImage,
    `${route}: incorrect og:image:secure_url`,
  );
  assert(socialImageAlt, `${route}: missing og:image:alt`);
  assert(Number.isInteger(socialWidth) && socialWidth > 0, `${route}: invalid og:image:width`);
  assert(Number.isInteger(socialHeight) && socialHeight > 0, `${route}: invalid og:image:height`);
  assert(
    meta(html, 'property="og:image:type"') === imageTypeForPath(socialImage),
    `${route}: incorrect og:image:type`,
  );

  const socialFile = localFileForSiteUrl(socialImage);
  assert(existsSync(socialFile), `${route}: missing social image ${socialImage}`);
  const actualImage = inspectImage(socialFile);
  assert(
    actualImage.type === imageTypeForPath(socialImage),
    `${route}: social image extension does not match its file signature`,
  );
  assert(
    meta(html, 'property="og:image:type"') === actualImage.type,
    `${route}: social image MIME metadata does not match its file signature`,
  );
  assert(
    actualImage.width === socialWidth && actualImage.height === socialHeight,
    `${route}: social image metadata ${socialWidth}x${socialHeight} does not match ${actualImage.width}x${actualImage.height}`,
  );
  const expectedTwitterCard =
    actualImage.width / actualImage.height >= 1.5
      ? 'summary_large_image'
      : 'summary';
  assert(
    meta(html, 'name="twitter:card"') === expectedTwitterCard,
    `${route}: wrong Twitter card`,
  );
  assert(meta(html, 'name="twitter:title"') === pageTitle, `${route}: wrong twitter:title`);
  assert(
    meta(html, 'name="twitter:description"') === pageDescription,
    `${route}: wrong twitter:description`,
  );
  assert(meta(html, 'name="twitter:image"') === socialImage, `${route}: wrong twitter:image`);
  assert(
    meta(html, 'name="twitter:image:alt"') === socialImageAlt,
    `${route}: wrong twitter:image:alt`,
  );

  if (isIndexed) {
    assert(
      meta(html, 'name="robots"') === 'index, follow, max-image-preview:large',
      `${route}: indexable route has the wrong robots policy`,
    );
    assert(
      pageDescription.length >= 50 && pageDescription.length <= 180,
      `${route}: indexed description must be 50-180 characters`,
    );
    assert(!indexedTitles.has(pageTitle), `${route}: duplicate indexed title`);
    assert(!indexedDescriptions.has(pageDescription), `${route}: duplicate indexed description`);
    indexedTitles.set(pageTitle, route);
    indexedDescriptions.set(pageDescription, route);
  } else {
    assert(meta(html, 'name="robots"') === 'noindex, follow', `${route}: non-sitemap route must be noindex, follow`);
  }

  const structuredData = [...html.matchAll(
    /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi,
  )].map((match) => {
    try {
      return JSON.parse(match[1]);
    } catch (error) {
      fail(`${route}: invalid JSON-LD (${error.message})`);
    }
  });
  if (isIndexed) {
    assert(structuredData.length > 0, `${route}: indexed route is missing JSON-LD`);
    assert(
      structuredData.every((entry) => entry['@context'] === 'https://schema.org'),
      `${route}: JSON-LD must use schema.org context`,
    );
    const serialized = JSON.stringify(structuredData);
    assert(serialized.includes(expectedCanonical), `${route}: JSON-LD omits canonical URL`);
    if (indexedSoftwareRoutes.has(route)) {
      assert(serialized.includes('SoftwareApplication'), `${route}: missing SoftwareApplication JSON-LD`);
    }
  }

  for (const match of html.matchAll(/<img\b[^>]*>/gi)) {
    const tag = match[0];
    assert(/\balt="[^"]*"/i.test(tag), `${route}: image is missing alt text`);
    assert(/\bwidth="\d+"/i.test(tag), `${route}: image is missing an intrinsic width`);
    assert(/\bheight="\d+"/i.test(tag), `${route}: image is missing an intrinsic height`);
  }

  if (expectedSocialImages.has(route)) {
    assert(
      socialImage === expectedSocialImages.get(route),
      `${route}: does not use its reviewed social preview`,
    );
    assert(
      actualImage.width === 1200 && actualImage.height === 630,
      `${route}: reviewed social preview must be 1200x630`,
    );
  }

  assertLocalLinks(html, route);
}

const allHtml = htmlFiles.map((file) => readFileSync(file, 'utf8')).join('\n');
const forbidden = [
  'apps.apple.com',
  'testflight.apple.com',
  'azurewebsites.net',
  'workshop.enzolopez.net',
  'pulsewire.nintek.com',
  'tare.nintek.com/relay',
  'Request TestFlight access',
  '6-feed demo',
  '237 vetted feeds',
  '237 unique feeds',
  '317 unique feeds',
  'Ceasefire talks resume',
  'Europa Clipper returns',
  'Tare is replacing its browser interface',
  'and play',
  'daily games',
  'daily puzzle',
];
for (const value of forbidden) {
  assert(!allHtml.includes(value), `Rendered site contains forbidden or stale value: ${value}`);
}
assert(!/<link[^>]+rel="manifest"/i.test(allHtml), 'Portfolio must not register a PWA manifest.');
const emittedFiles = walk(dist);
const emittedCode = emittedFiles
  .filter((file) => ['.html', '.js', '.mjs'].includes(extname(file)))
  .map((file) => readFileSync(file, 'utf8'))
  .join('\n');
assert(
  !/serviceWorker\s*\.\s*register/i.test(emittedCode),
  'Portfolio must not register a service worker.',
);
for (const file of emittedFiles) {
  const outputPath = relative(dist, file).replaceAll('\\', '/');
  assert(
    !/(^|\/)(?:manifest(?:\.webmanifest|\.json)|sw\.js|service-worker\.js|workbox-[^/]+\.js)$/i.test(outputPath),
    `Portfolio must not ship PWA runtime artifact ${outputPath}.`,
  );
}

const homepage = readFileSync(routeFile('/'), 'utf8');
assert(homepage.includes('data-portfolio-home'), 'Homepage is not marked as the portfolio route.');
assert(
  /<h1[^>]*>\s*Small, thoughtful software/i.test(homepage),
  'Homepage first heading is not the Nintek portfolio message.',
);

const pageAssertions = {
  '/tare': [
    'Automatic after you opt in',
    'Recorded release views',
    'iOS 26.5 Simulator',
    'No public App Store listing or announced price',
    'there is no installable PWA, offline web mode, or browser background-reminder claim',
  ],
  '/workshop': [
    'Open Workshop',
    'Current web capture',
    'Online and account-backed',
    'Read-only demo available',
    'not an installable or offline PWA',
    'permanently delete the current workspace from Settings',
  ],
  '/shopkeep': ['2.0.1 (35)', 'Apple or Microsoft', 'does not substitute synthetic UI', 'no App Review submission'],
  '/shopkeep/support': ['Delete ShopKeep Account', 'public beta, public App Store listing'],
  '/cairn': [
    'Version 3.0 build',
    'Full Exam Library · $14.99',
    'still in review',
    'Two products, no shared progress.',
    'not an installable or offline PWA',
  ],
  '/pulsewire': ['controlled fictional fixture', 'PostgreSQL · pgvector', 'count intentionally omitted'],
  '/tabloom': ['Archive &amp; Restore', 'Offline Reading', 'fictional local fixture'],
  '/prism': ['Spreadsheet conversion runs in the browser.', 'publishes no launch link', 'View audited source'],
  '/watchtower': ['private iOS companion', 'publishes no launch link', 'View audited source'],
  '/lantern': ['Cairn remains the separate IT-certification product', 'publishes no launch link'],
  '/marquee': ['Plex, Tautulli, and Sonarr', 'publishes no launch link'],
  '/shapepilot': ['native C modules protect SQLite file identity', 'publishes no launch link'],
  '/hearth': ['current household and property fieldbook', 'superseded legacy runtime'],
  '/terms': ['Terms of Use', 'Your content and your responsibility', 'AI output and professional-advice limits'],
  '/about': [
    'Web and native are not the same promise.',
    'Production web traffic is relay-only',
    'never share progress or account data',
    'Tools that escaped the original household hub.',
  ],
  '/ios': [
    'Native is a relationship, not a release claim.',
    'Watchtower has a private companion',
    'Workshop’s native client remains archived',
  ],
};
for (const [route, values] of Object.entries(pageAssertions)) {
  const html = readFileSync(routeFile(route), 'utf8');
  const normalized = html.replace(/\s+/g, ' ');
  const normalizedLower = normalized.toLowerCase();
  for (const value of values) {
    assert(normalizedLower.includes(value.toLowerCase()), `${route}: missing required evidence text "${value}"`);
  }
}

const workshopPublicHtml = ['/workshop', '/workshop/privacy', '/workshop/support']
  .map((route) => readFileSync(routeFile(route), 'utf8'))
  .join('\n');
for (const stale of [
  'Internal TestFlight',
  'App Store',
  'Workshop-for-iOS',
  'com.nintek.workshop',
  'iPhone',
  'iPad',
  'native app',
  'native build',
  'Live Activity',
  'WidgetKit',
  '/ios#workshop',
  'leaves the data intact',
  'leaves the account data intact',
]) {
  assert(!workshopPublicHtml.includes(stale), `Workshop public routes contain retired client claim: ${stale}`);
}
const iosCatalogue = readFileSync(routeFile('/ios'), 'utf8');
for (const stale of [
  'id="workshop"',
  'href="#workshop"',
  'href="/ios#workshop"',
  'src="/apps/workshop.png"',
  'Nintek Workshop',
  'Build 13',
  'Tools, projects, cut lists',
  'cut-plan optimiser',
]) {
  assert(!iosCatalogue.includes(stale), `The iOS catalogue still includes retired Workshop content: ${stale}`);
}

const legalAssertions = {
  '/tare/privacy': [
    'no account or sign-in',
    'stateless relay',
    'Legacy databases have <strong>not</strong> been represented as deleted',
    '14 days',
  ],
  '/tare/support': [
    'no web login',
    'no in-app erase-all',
    'former web database is separate and has not yet been destructively removed',
  ],
  '/workshop/privacy': [
    'web workspace signs in with Microsoft',
    'Existing Apple-backed identities remain isolated',
    'online-only for account data',
    'does not report success until provider, database, media, and filesystem cleanup completes',
    'manual deletion reconciliation',
  ],
  '/workshop/support': [
    'sole supported Workshop client',
    'Settings → Account',
    'separate existing Apple-backed workspace',
    'does not report success until provider, database, media, and filesystem cleanup completes',
    'project-list summary',
    'not automated by the restore code',
  ],
  '/shopkeep/privacy': [
    'SQLite BLOBs',
    'generation matches an active account',
    'physical-device Apple and Microsoft sign-in and deletion checks',
  ],
  '/shopkeep/support': [
    'no offline inventory mode',
    'Location-label CSV',
    'Delete ShopKeep Account',
  ],
  '/tabloom/privacy': [
    'not end-to-end encrypted',
    'most recent 50 versions',
    'no self-service Tabloom account export-and-delete flow',
  ],
  '/tabloom/support': [
    'bounded, and read only',
    'Trash is retained for up to 30 days',
    'Current account-deletion gap',
  ],
  '/pulsewire/privacy': [
    '24-hour, read-only demo',
    'Azure AI Foundry',
    'no self-service account export, account deletion',
  ],
  '/pulsewire/support': [
    'no public account registration',
    'Sign out all devices',
    'not end-to-end encrypted',
  ],
  '/cairn/privacy': [
    'no account, no login',
    'Private iCloud progress copy',
    'Full Exam Library',
  ],
  '/cairn/support': [
    'combined app-and-IAP submission remains unresolved',
    'do not require a purchase',
    'Independent study material',
  ],
  '/hearth/privacy': [
    'This notice covers Hearth-v2',
    'Hearth-v2 data lifecycle and current control boundaries',
    'does not establish a public self-service account export',
    'superseded runtime is not marketed here as the current product',
  ],
};

for (const [route, values] of Object.entries(legalAssertions)) {
  assert(routeExists(route), `${route}: required legal route is missing`);
  const html = readFileSync(routeFile(route), 'utf8');
  const normalized = html.replace(/\s+/g, ' ');
  const expectedLegalDate = route.startsWith('/workshop/')
    ? 'August 31, 2026'
    : route.startsWith('/hearth/')
      ? 'September 3, 2026'
      : 'August 23, 2026';
  assert(
    normalized.includes(expectedLegalDate),
    `${route}: missing the current effective or updated date`,
  );
  for (const value of values) {
    assert(normalized.includes(value), `${route}: missing required legal evidence "${value}"`);
  }
}

for (const app of reviewedLegalApps) {
  const product = readFileSync(routeFile(`/${app}`), 'utf8');
  const privacy = readFileSync(routeFile(`/${app}/privacy`), 'utf8');
  const support = readFileSync(routeFile(`/${app}/support`), 'utf8');

  assert(product.includes(`href="/${app}/privacy"`), `/${app}: missing privacy link`);
  assert(product.includes(`href="/${app}/support"`), `/${app}: missing support link`);
  assert(product.includes('href="/terms"'), `/${app}: missing terms link`);

  assert(privacy.includes(`href="/${app}/support"`), `/${app}/privacy: missing support link`);
  assert(privacy.includes('href="/terms"'), `/${app}/privacy: missing terms link`);
  if (lifecycleTableApps.has(app)) {
    assert(
      privacy.includes('lifecycle-table'),
      `/${app}/privacy: missing data lifecycle table`,
    );
  }

  assert(support.includes(`href="/${app}/privacy"`), `/${app}/support: missing privacy link`);
  assert(support.includes('href="/terms"'), `/${app}/support: missing terms link`);
}

const terms = readFileSync(routeFile('/terms'), 'utf8');
for (const app of reviewedLegalApps) {
  assert(terms.includes(`href="/${app}/privacy"`), `/terms: missing ${app} privacy link`);
  assert(terms.includes(`href="/${app}/support"`), `/terms: missing ${app} support link`);
}

const reviewedLegalHtml = Object.keys(legalAssertions)
  .map((route) => readFileSync(routeFile(route), 'utf8'))
  .join('\n');
for (const stale of [
  'DRAFT',
  'Tare on the web is in maintenance',
  'While it remains available',
  'not a public reader or demo entry point',
  'per-user SQLite database hosted on Microsoft Azure. Media may use account-scoped Azure storage',
]) {
  assert(!reviewedLegalHtml.includes(stale), `Reviewed legal routes contain stale claim: ${stale}`);
}

const homepageTermsLink = homepage.includes('href="/terms"');
assert(homepageTermsLink, 'Global site footer is missing the terms link.');
const evidenceLedger = readFileSync(join(root, 'docs', 'MARKETING_EVIDENCE.md'), 'utf8');
assert(
  evidenceLedger.includes('**Portfolio verification:** September 3, 2026') &&
    evidenceLedger.includes('9029446de5fc04c550753b6de8819f668e0d78e9') &&
    evidenceLedger.includes('336527ddeb39d6808963f471708559b23913dd9bb3ccca48813710550bb54dcd'),
  'Marketing evidence ledger does not carry the final portfolio audit.',
);
for (const phrase of [
  'The former browser product is retired',
  'Workshop-for-iOS is archived',
  'Hearth-v2 only',
  'private iOS companion',
]) {
  assert(evidenceLedger.includes(phrase), `Evidence ledger is missing platform/host decision: ${phrase}`);
}
for (const route of ['/terms', ...Object.keys(legalAssertions)]) {
  assert(evidenceLedger.includes(`\`${route}\``), `Evidence ledger is missing legal route ${route}`);
}

const sitemap = readFileSync(join(dist, 'sitemap.xml'), 'utf8');
const sitemapLocations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
assert(sitemapLocations.length > 0, 'Sitemap contains no locations.');
const sitemapRoutes = new Set();
for (const location of sitemapLocations) {
  const url = new URL(location);
  assert(url.origin === site, `Sitemap location uses a noncanonical origin: ${location}`);
  assert(!url.search && !url.hash, `Sitemap location must not contain search or hash: ${location}`);
  const route = url.pathname === '/' ? '/' : url.pathname.replace(/\/$/, '');
  const expectedLocation = `${site}${route}`;
  assert(location === expectedLocation, `Sitemap location is not canonical: ${location}`);
  assert(!sitemapRoutes.has(route), `Sitemap contains duplicate route ${route}`);
  sitemapRoutes.add(route);
}
assert(
  JSON.stringify([...sitemapRoutes].sort()) === JSON.stringify([...expectedIndexedRoutes].sort()),
  'Sitemap routes do not match the index policy.',
);

const robots = readFileSync(join(dist, 'robots.txt'), 'utf8');
assert(robots.includes('Allow: /'), 'robots.txt must allow crawling so page-level noindex can be read.');
assert(!robots.includes('Disallow:'), 'robots.txt must not conflict with page-level index policy.');
assert(robots.includes(`${site}/sitemap.xml`), 'robots.txt has the wrong sitemap URL.');

assert(releaseVisuals.schemaVersion === 1, 'Unsupported release visual manifest schema.');
assert(releaseVisuals.verifiedAt === '2026-09-03', 'Release visual verification date is stale.');
assert(
  JSON.stringify(releaseVisuals.portfolioAudit) ===
    JSON.stringify({
      repository: 'EnzoLopez2023/azure-infra',
      commit: '9029446de5fc04c550753b6de8819f668e0d78e9',
      evidenceDigestSha256: '336527ddeb39d6808963f471708559b23913dd9bb3ccca48813710550bb54dcd',
      result: '16/16 sealed',
    }),
  'Final portfolio audit evidence drifted.',
);
assert(
  Object.keys(releaseVisuals.products).length === 6,
  'Release visual manifest must cover the six retained release-visual products.',
);
assert(
  JSON.stringify(Object.keys(releaseVisuals.products).sort()) ===
    JSON.stringify([...expectedAuthorities.keys()].sort()),
  'Release visual manifest product set drifted.',
);

assert(
  JSON.stringify(Object.keys(releaseVisuals.canonicalIcons).sort()) ===
    JSON.stringify([...expectedCanonicalIcons.keys()].sort()),
  'Canonical product icon manifest drifted.',
);
const appIconDirectory = join(root, 'public', 'apps');
const actualAppIconSlugs = readdirSync(appIconDirectory, { withFileTypes: true })
  .filter((entry) => entry.isFile() && entry.name.endsWith('.png'))
  .map((entry) => entry.name.slice(0, -'.png'.length))
  .sort();
assert(
  JSON.stringify(actualAppIconSlugs) === JSON.stringify([...expectedCanonicalIcons.keys()].sort()),
  'Top-level public app icon census must be exactly the authorized twelve products.',
);
for (const [slug, expected] of expectedCanonicalIcons) {
  const icon = releaseVisuals.canonicalIcons[slug];
  assert(icon, `${slug}: canonical icon evidence is missing`);
  assert(
    JSON.stringify([icon.repository, icon.commit, icon.sourcePath, icon.sha256]) ===
      JSON.stringify(expected),
    `${slug}: canonical icon authority drifted`,
  );
  const file = join(appIconDirectory, `${slug}.png`);
  const bytes = readFileSync(file);
  const actualHash = createHash('sha256').update(bytes).digest('hex');
  assert(actualHash === icon.sha256, `${slug}: canonical app icon hash drifted`);
  const image = inspectImage(file);
  assert(image.width === 1024 && image.height === 1024, `${slug}: canonical app icon is not 1024x1024`);
  const emitted = join(dist, 'apps', `${slug}.png`);
  assert(existsSync(emitted), `${slug}: canonical app icon was not emitted`);
  const emittedHash = createHash('sha256').update(readFileSync(emitted)).digest('hex');
  assert(emittedHash === icon.sha256, `${slug}: emitted canonical app icon hash drifted`);
  assert(homepage.includes(`/apps/${slug}.png`), `${slug}: canonical icon is absent from the registry`);
}
for (const staleSlug of ['cortex', 'sortie', 'salvo', 'puzzlebox']) {
  assert(!homepage.includes(`/apps/${staleSlug}.png`), `${staleSlug}: stale product icon remains in the registry`);
}

const releaseAssets = Object.entries(releaseVisuals.products).flatMap(([slug, product]) => {
  const expected = expectedAuthorities.get(slug);
  assert(expected, `${slug}: unexpected release authority`);
  assert(
    JSON.stringify([
      product.repository,
      product.authorityCommit,
      product.manifestPath,
      product.manifestSha256,
    ]) === JSON.stringify(expected),
    `${slug}: immutable release authority drifted`,
  );
  assert(/^[0-9a-f]{40}$/.test(product.authorityCommit), `${product.repository}: invalid authority commit`);
  assert(/^[0-9a-f]{64}$/.test(product.manifestSha256), `${product.repository}: invalid manifest hash`);
  assert(product.release.public === false, `${product.repository}: public release is not authorized`);
  return product.assets;
});

const seenReleaseAssets = new Set();
for (const asset of releaseAssets) {
  assert(!seenReleaseAssets.has(asset.path), `Duplicate release visual path ${asset.path}`);
  seenReleaseAssets.add(asset.path);
  assert(asset.captureClass, `${asset.path}: missing capture classification`);
  if (asset.sourceSha256) {
    assert(/^[0-9a-f]{64}$/.test(asset.sourceSha256), `${asset.path}: invalid source hash`);
  }

  const sourceFile = join(root, asset.path);
  assert(existsSync(sourceFile), `Missing release visual ${asset.path}`);
  const sourceBytes = readFileSync(sourceFile);
  const actualHash = createHash('sha256').update(sourceBytes).digest('hex');
  assert(actualHash === asset.sha256, `${asset.path}: release visual hash drifted`);

  if (asset.width && asset.height) {
    const actualImage = inspectImage(sourceFile);
    assert(
      actualImage.width === asset.width && actualImage.height === asset.height,
      `${asset.path}: release visual dimensions drifted`,
    );
  }

  if (asset.path.startsWith('public/')) {
    const publicPath = asset.path.slice('public/'.length);
    const emitted = join(dist, publicPath);
    assert(existsSync(emitted), `Missing emitted release visual ${publicPath}`);
    const emittedHash = createHash('sha256').update(readFileSync(emitted)).digest('hex');
    assert(emittedHash === asset.sha256, `${publicPath}: emitted release visual hash drifted`);
  }

  if (asset.path.startsWith('public/social/')) {
    assert(sourceBytes.length < 500_000, `${asset.path}: social preview exceeds 500 KB`);
  }
}

for (const expectedSocialImage of expectedSocialImages.values()) {
  const path = `public/${new URL(expectedSocialImage).pathname.replace(/^\/+/, '')}`;
  assert(seenReleaseAssets.has(path), `${path}: social route is not in the release visual manifest`);
}

for (const stalePath of [
  'public/apps/tabloom/editor-navigation-960.webp',
  'public/apps/tabloom/editor-navigation.webp',
  'public/apps/tabloom/page-editor-960.webp',
  'public/apps/tabloom/page-editor.webp',
  'public/apps/workshop/ipad-project-detail-focus.webp',
  'public/apps/workshop/ipad-project-detail.webp',
  'public/apps/workshop/ipad-projects.webp',
  'public/apps/workshop/ipad-shaper-focus.webp',
  'public/apps/workshop/ipad-shaper.webp',
  'public/apps/workshop/iphone-projects.webp',
  'public/apps/workshop/iphone-shopping.webp',
  'public/apps/workshop/iphone-tables.webp',
  'src/assets/cortex',
  'src/assets/salvo',
  'src/assets/sortie',
  'src/components/CortexScreen.astro',
  'src/components/SalvoReleaseVisual.astro',
  'src/components/ShopKeepMark.astro',
  'src/components/mocks/ShopKeep.astro',
  'src/components/mocks/Puzzlebox.astro',
  'src/components/mocks/ios/Cortex.astro',
  'src/components/mocks/ios/ShopKeep.astro',
  'src/components/mocks/ios/Sortie.astro',
  'src/layouts/CortexLegalLayout.astro',
  'src/styles/cortex-landing.css',
  'src/styles/cortex-legal.css',
  'src/styles/puzzlebox-landing.css',
  'public/apps/cortex.png',
  'public/apps/puzzlebox.png',
  'public/apps/salvo.png',
  'public/apps/sortie.png',
  'public/apps/tabloom.svg',
  'public/social/cortex.png',
  'public/social/pulsewire.png',
  'public/social/sortie.png',
  'public/social/source/cortex.svg',
  'public/social/source/sortie.svg',
  'src/pages/cortex',
  'src/pages/puzzlebox',
  'src/pages/salvo',
  'src/pages/sortie',
]) {
  assert(!existsSync(join(root, stalePath)), `Superseded product artifact remains: ${stalePath}`);
}

console.log(
  `Verified ${htmlFiles.length} HTML routes, ${sitemapRoutes.size} indexed routes, ${actualAppIconSlugs.length} canonical app icons, and ${releaseAssets.length} release assets.`,
);
