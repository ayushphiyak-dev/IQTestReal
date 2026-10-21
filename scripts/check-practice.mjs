import assert from 'node:assert/strict';

const handler = (await import('../dist/server/index.js')).default;
const origin = 'https://iqtestreal.com';
const request = (path) => handler.fetch(new Request(new URL(path, origin)));
const pages = [
  '/practice',
  '/practice/spatial-reasoning',
  '/practice/pattern-recognition',
];
const sitemap = await (await request('/sitemap.xml')).text();
assert.doesNotMatch(sitemap, /<lastmod>2026-09-10/);

for (const path of pages) {
  const response = await request(path);
  assert.equal(response.status, 200, path);
  const html = await response.text();
  assert.ok(
    sitemap.includes(`${origin}${path}</loc>`),
    `Missing sitemap entry: ${path}`,
  );
  assert.ok(html.includes(`rel="canonical" href="${origin}${path}"`), path);
  assert.ok(
    html.includes(`property="og:url" content="${origin}${path}"`),
    path,
  );
  assert.doesNotMatch(html.split('</head>')[0], /noindex|vercel\.app/);
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, path);
  if (path !== '/practice') {
    assert.equal(
      (html.match(/<details\b/g) || []).length,
      7,
      'Six solutions plus the site mobile menu',
    );
    const schemas = [
      ...html.matchAll(
        /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
      ),
    ].flatMap((match) => JSON.parse(match[1]));
    const quiz = schemas.find((schema) => schema['@type'] === 'Quiz');
    assert.equal(quiz.url, `${origin}${path}`);
    assert.equal(quiz.hasPart.length, 6);
    assert.equal(new Set(quiz.hasPart.map((q) => q['@id'])).size, 6);
    assert.ok(schemas.some((schema) => schema['@type'] === 'BreadcrumbList'));
    assert.match(html, /practice-print-key/);
    for (const question of quiz.hasPart) {
      assert.ok(question.acceptedAnswer.text.length > 80, question.name);
      assert.ok(
        html.includes(`id="${question['@id'].split('#')[1]}"`),
        question.name,
      );
    }
  }
  // Check all local destinations on each new page, including related resources.
  const paths = new Set(
    [...html.matchAll(/href="(\/[^"#?]*)/g)].map((match) => match[1]),
  );
  for (const href of paths) {
    if (/\.(css|js|png|svg|ico|woff2?)$/.test(href) || href.startsWith('//'))
      continue;
    const linked = await request(href);
    assert.ok(
      linked.status < 400,
      `${path} links to broken ${href}: ${linked.status}`,
    );
  }
}
for (const path of [
  '/',
  '/articles',
  '/articles/logic-puzzles-for-beginners',
  '/articles/number-sequences-explained',
]) {
  const html = await (await request(path)).text();
  assert.match(
    html,
    /href="\/practice(?:\/|")/,
    `Practice discovery missing: ${path}`,
  );
}
assert.equal((await request('/practice/not-a-category')).status, 404);
console.log(
  'Practice checks passed: 3 routes, 12 worked questions, canonical/OG/schema, sitemap, internal links and unknown-slug 404.',
);
