import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { extname, join, relative, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const dist = join(root, 'dist');
const site = 'https://www.nintek.com';
const expectedIndexedRoutes = new Set([
  '/',
  '/about',
  '/cortex',
  '/ios',
  '/salvo',
  '/sortie',
]);

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

for (const file of htmlFiles) {
  const route = routeForHtml(file);
  const html = readFileSync(file, 'utf8');
  const expectedCanonical = `${site}${route === '/' ? '/' : route}`;
  const isIndexed = expectedIndexedRoutes.has(route);

  assert(canonical(html) === expectedCanonical, `${route}: incorrect canonical URL`);
  assert(/<title>[^<]+<\/title>/i.test(html), `${route}: missing title`);
  assert(meta(html, 'name="description"'), `${route}: missing description`);
  assert(meta(html, 'property="og:title"'), `${route}: missing og:title`);
  assert(meta(html, 'property="og:description"'), `${route}: missing og:description`);
  assert(meta(html, 'property="og:url"') === expectedCanonical, `${route}: incorrect og:url`);
  assert(meta(html, 'property="og:image"'), `${route}: missing og:image`);
  assert(meta(html, 'property="og:image:alt"'), `${route}: missing og:image:alt`);
  assert(meta(html, 'name="twitter:card"') === 'summary_large_image', `${route}: wrong Twitter card`);

  if (isIndexed) {
    assert(!meta(html, 'name="robots"')?.includes('noindex'), `${route}: indexable route is noindex`);
  } else {
    assert(meta(html, 'name="robots"') === 'noindex, follow', `${route}: non-sitemap route must be noindex, follow`);
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
  'Ceasefire talks resume',
  'Europa Clipper returns',
];
for (const value of forbidden) {
  assert(!allHtml.includes(value), `Rendered site contains forbidden or stale value: ${value}`);
}

const homepage = readFileSync(routeFile('/'), 'utf8');
assert(homepage.includes('data-portfolio-home'), 'Homepage is not marked as the portfolio route.');
assert(
  /<h1[^>]*>\s*Small, thoughtful software/i.test(homepage),
  'Homepage first heading is not the Nintek portfolio message.',
);

const pageAssertions = {
  '/tare': ['Automatic after you opt in', 'No public App Store listing or announced price'],
  '/workshop': ['Withdrawn for rework', 'Current iPhone Simulator capture'],
  '/shopkeep': ['Apple or Microsoft', 'Synthetic UI study', 'No public App Store listing'],
  '/shopkeep/support': ['Delete ShopKeep Account', 'no public App Store listing'],
  '/cairn': ['Version 3.0 build', 'Full Exam Library · $14.99', 'still in review'],
  '/pulsewire': ['317', 'Synthetic interface diagram', 'PostgreSQL · pgvector'],
  '/tabloom': ['Archive &amp; Restore', 'Offline Reading', 'identity-scoped IndexedDB'],
  '/cortex': ['TestFlight beta · iPhone only', 'no public App Store'],
  '/sortie': ['Pre-release', 'Not available yet'],
  '/salvo': ['In development', 'Not available yet'],
};
for (const [route, values] of Object.entries(pageAssertions)) {
  const html = readFileSync(routeFile(route), 'utf8');
  const normalized = html.replace(/\s+/g, ' ');
  for (const value of values) {
    assert(normalized.includes(value), `${route}: missing required evidence text "${value}"`);
  }
}

const sitemap = readFileSync(join(dist, 'sitemap.xml'), 'utf8');
const sitemapRoutes = new Set(
  [...sitemap.matchAll(/<loc>https:\/\/www\.nintek\.com(\/[^<]*)<\/loc>/g)].map((match) => {
    const value = match[1];
    return value === '/' ? '/' : value.replace(/\/$/, '');
  }),
);
assert(
  JSON.stringify([...sitemapRoutes].sort()) === JSON.stringify([...expectedIndexedRoutes].sort()),
  'Sitemap routes do not match the index policy.',
);

const robots = readFileSync(join(dist, 'robots.txt'), 'utf8');
assert(robots.includes('Allow: /'), 'robots.txt must allow crawling so page-level noindex can be read.');
assert(!robots.includes('Disallow:'), 'robots.txt must not conflict with page-level index policy.');
assert(robots.includes(`${site}/sitemap.xml`), 'robots.txt has the wrong sitemap URL.');

const expectedHashes = {
  'apps/tare.png': '457bbf0e4b1fbb66e7e95a298ed0ce49393b759d296bfbde2803e366df225a87',
  'apps/workshop.png': 'cdf1ceedf57c10f71d543cae9aa0688683fb17d01dd503a5f9ebd275f0b8cc3e',
  'apps/shopkeep.png': '1da578d78344b7d4a6b3dd68e261fa52590186b52ba6b8efc54cb40808370025',
  'apps/cairn.png': 'f2195c75597a8f3fe94d5f57d6e1445ce59b8a9773d14bf9778d480ba798efb5',
  'apps/cortex.png': 'b48d58b783ce57bd83522935c1d818211a493f43202a268f5e0f7ce9baa83d5e',
  'apps/pulsewire.png': 'c9c139e99a4477d09ef2e9bd6c52234cebd085f8fcdd1d3237e10101567c6cdd',
  'apps/tabloom.png': '10012328cd4ad77c1a588f929a879b90a9a8e996156d7b900376653d655e1bce',
  'apps/sortie.png': '6ffc68d514b6dc94555e3481086951c70bf0bab43ed7deb34621558ed8d43e06',
  'apps/salvo.png': 'ec67b89f1c333d957464266117ffa66162abe37bd58be99827bc9e1aebbb3792',
};
for (const [asset, expected] of Object.entries(expectedHashes)) {
  const file = join(dist, asset);
  assert(existsSync(file), `Missing canonical icon ${asset}`);
  const actual = createHash('sha256').update(readFileSync(file)).digest('hex');
  assert(actual === expected, `${asset}: canonical icon hash drifted`);
}

console.log(`Verified ${htmlFiles.length} HTML routes, ${sitemapRoutes.size} indexed routes, and ${Object.keys(expectedHashes).length} canonical icons.`);
