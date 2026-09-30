import assert from 'node:assert/strict';

// Run after npm run build, or pass an origin to verify a deployed version.
// Test actual rendered responses: source metadata alone missed the previous
// comma-joined Google verification token regression.
const origin = process.argv[2];
const canonicalOrigin = 'https://iqtestreal.com';
const handler = origin
  ? null
  : (await import('../dist/server/index.js')).default;
const request = (path) =>
  origin
    ? fetch(new URL(path, origin), { redirect: 'manual' })
    : handler.fetch(new Request(new URL(path, canonicalOrigin)));

const robots = await request('/robots.txt');
assert.equal(robots.status, 200);
assert.match(
  await robots.text(),
  /Sitemap: https:\/\/iqtestreal\.com\/sitemap\.xml/,
);
const sitemap = await request('/sitemap.xml');
assert.equal(sitemap.status, 200);
const urls = [...(await sitemap.text()).matchAll(/<loc>(.*?)<\/loc>/g)].map(
  (m) => m[1],
);
assert.ok(urls.length > 0, 'Sitemap must contain pages');
assert.equal(new Set(urls).size, urls.length, 'Duplicate sitemap entries');

for (const url of urls) {
  assert.equal(new URL(url).origin, canonicalOrigin);
  const response = await request(new URL(url).pathname);
  assert.equal(response.status, 200, url);
  assert.doesNotMatch(
    response.headers.get('x-robots-tag') || '',
    /noindex/i,
    url,
  );
  const html = await response.text();
  const head = html.split('</head>')[0];
  assert.doesNotMatch(head, /<meta[^>]+content="[^"]*noindex/i, url);
  const canonicals = [
    ...head.matchAll(/<link rel="canonical" href="([^"]+)"/g),
  ];
  assert.equal(canonicals.length, 1, url);
  assert.equal(new URL(canonicals[0][1]).href, new URL(url).href, url);
  assert.doesNotMatch(head, /vercel\.app/, url);
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, url);
  const verification = [
    ...head.matchAll(
      /<meta name="google-site-verification" content="([^"]+)"/g,
    ),
  ];
  assert.deepEqual(
    verification.map((m) => m[1]),
    ['Cn5T0YkVtbMC5CvNIYIszEbK7ATrrM_wjMxVbphm8xc'],
    url,
  );
  if (new URL(url).pathname === '/') {
    assert.match(
      head,
      /<title>IQTestReal — Free IQ Test &amp; Reasoning Practice<\/title>/,
    );
    assert.match(
      head,
      /property="og:title" content="IQTestReal — Free IQ Test &amp; Reasoning Practice"/,
    );
    assert.match(
      head,
      /name="twitter:image" content="https:\/\/iqtestreal.com\/iqtestreal-brain.png"/,
    );
    const schemas = [
      ...html.matchAll(
        /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
      ),
    ].flatMap((m) => JSON.parse(m[1]));
    const website = schemas.find((s) => s['@type'] === 'WebSite');
    assert.equal(website.name, 'IQTestReal');
    assert.equal(website.alternateName, 'iqtestreal.com');
    assert.equal(website.publisher['@id'], `${canonicalOrigin}/#organization`);
  }
}
const missing = await request('/__seo-check-missing-page');
assert.equal(missing.status, 404);
const search = await request('/search');
assert.match(await search.text(), /name="robots" content="noindex, follow"/);
console.log(
  `SEO response checks passed: ${urls.length} indexable pages, verification, brand schema, 404 and search exclusions.`,
);
