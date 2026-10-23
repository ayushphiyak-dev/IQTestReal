import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

// This is a small quality regression check, not an AdSense approval test.
// It protects the indexable pages that provide the site's publisher content
// from accidentally becoming empty, duplicate, or keyword-stuffed in a later
// change. It deliberately checks rendered HTML after the production build.
const handler = (await import('../dist/server/index.js')).default;
const origin = 'https://iqtestreal.com';
const contentPaths = [
  '/',
  '/test',
  '/how-it-works',
  '/score-guide',
  '/articles',
  '/faq',
  '/about',
  '/methodology',
  '/articles/understanding-iq-scores',
  '/articles/practice-and-cognitive-performance',
  '/articles/reasoning-categories-explained',
  '/articles/online-iq-test-results',
  '/articles/how-to-prepare-for-reasoning-test',
  '/articles/logic-puzzles-for-beginners',
  '/articles/number-sequences-explained',
  '/articles/pattern-recognition-spatial-reasoning',
  '/articles/memory-processing-speed',
  '/articles/online-vs-clinical-iq-tests',
];

function rendered(path) {
  return handler.fetch(new Request(`${origin}${path}`));
}

const homeHtml = await (await rendered('/')).text();
assert.match(homeHtml, /Your privacy matters/);
assert.match(homeHtml, /Essential only/);
assert.match(homeHtml, /Allow optional/);
assert.doesNotMatch(
  homeHtml,
  /adsbygoogle\.js|googletagmanager\.com\/gtag|va\.vercel-scripts\.com/,
  'Optional advertising and analytics must not load before a consent choice',
);

const articleWordCounts = [];

function visibleText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[^;]+;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

for (const path of contentPaths) {
  const response = await rendered(path);
  assert.equal(response.status, 200, path);
  const html = await response.text();
  const text = visibleText(html);
  assert.ok(
    text.length >= 500,
    `${path} has unexpectedly little visible content`,
  );
  assert.equal(
    (html.match(/<h1(?:\s|>)/g) || []).length,
    1,
    `${path} must have one H1`,
  );
  assert.ok(
    (html.match(/href="\//g) || []).length >= 2,
    `${path} needs useful internal navigation`,
  );
  assert.ok(
    (text.match(/real IQ test/gi) || []).length <= 2,
    `${path} repeats a keyword phrase`,
  );
  if (path.startsWith('/articles/')) {
    assert.match(html, /Written by the IQTestReal project maintainer/);
    const articleBody = html.match(/<article\b[^>]*>[\s\S]*?<\/article>/)?.[0];
    assert.ok(articleBody, `${path} must render an article body`);
    articleWordCounts.push(visibleText(articleBody).split(' ').length);
  }
}

const averageArticleWords = Math.round(
  articleWordCounts.reduce((sum, count) => sum + count, 0) /
    articleWordCounts.length,
);
assert.ok(
  averageArticleWords >= 600,
  `Articles average ${averageArticleWords} words; review thin pages before expanding the index`,
);

const ads = await readFile(
  new URL('../public/ads.txt', import.meta.url),
  'utf8',
);
assert.match(
  ads,
  /^google\.com, pub-3817850058008403, DIRECT, f08c47fec0942fa0$/m,
);

console.log(
  `AdSense readiness checks passed: ${contentPaths.length} content pages, ${articleWordCounts.length} articles averaging ${averageArticleWords} words, and ads.txt.`,
);
