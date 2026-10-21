# Reasoning-resource growth release

## Scope and evidence

Live checks on October 21, 2026 found 23 sitemap URLs returning 200 with self-canonicals, index/follow and one H1. Main public content was server-rendered. HTTP/www/the supplied Vercel alias redirected to the production domain. The sitemap used September 10 for every modification date. GSC screenshots show limited impressions and a decline around October 1, but do not identify the cause; current public responses cannot prove what Google fetched previously.

This release does not claim to solve an unverified penalty or promise traffic. It adds useful long-tail destinations and crawlable routes to them, without creating keyword or age combinations.

## Changes

- `/practice`: focused learning hub with printable worksheet instructions.
- `/practice/spatial-reasoning`: six worked spatial exercises.
- `/practice/pattern-recognition`: six worked pattern exercises.
- Server-rendered questions and answers; native disclosure controls work without JavaScript. A separate print answer key supports classroom/personal use.
- Canonical, Open Graph and Twitter metadata use the existing central helper. Quiz and breadcrumb schema describe visible resources, not an invented rich-result entitlement.
- Navigation from homepage, both header variants, footer, search, Ctrl+K and every existing article.
- Blog index and score-guide metadata/H1 better describe intent. Existing article URLs remain unchanged.
- Replace ambiguous “normalized” language with an explicit practice conversion. Scoring behavior is unchanged.
- Remove the shared sitemap modification date; do not substitute the build time. Keep existing legal pages, private-page exclusions, advertising settings and DNS unchanged.
- Add production-response regression checks and manual personalized outreach drafts. Nothing sent.

## Keyword ownership

| Intent                                         | Owner                             |
| ---------------------------------------------- | --------------------------------- |
| Brand and mixed free reasoning practice        | Homepage and `/test`              |
| Spatial reasoning practice with answers        | `/practice/spatial-reasoning`     |
| Pattern recognition practice with explanations | `/practice/pattern-recognition`   |
| Beginner deduction method                      | Existing logic-puzzles article    |
| How number-sequence rules work                 | Existing number-sequences article |
| This site's scoring conversion                 | `/score-guide` and `/methodology` |

No search volumes or difficulty scores have been invented. Expand only when original questions, correct explanations and user demand support a new resource.

## Verification

Run format checks for changed files, lint, typecheck, production build, `node scripts/check-seo.mjs`, `node scripts/check-adsense-readiness.mjs`, `node scripts/check-practice.mjs`, and `git diff --check`. The existing AdSense script is a basic content-regression guard, not a content-quality certification or approval test. Inspect desktop/mobile layouts, keyboard answer disclosure, unknown-category 404 and printing before merging.

## After approved deployment

### Local verification outcome

- Changed-file formatting, lint, TypeScript, the normal production build and `git diff --check` passed.
- The whole-repository format check reports 31 pre-existing, untouched files. They were left unchanged to avoid mixing unrelated formatting into this SEO PR.
- SEO response checks passed for 26 sitemap pages. Existing AdSense regression checks passed for 15 content pages. The new practice checks passed for three routes and twelve questions, schema, internal links and unknown-page 404 behavior.
- An initial dynamic-route implementation streamed metadata outside the initial head. It was replaced with explicit routes; the head checks now pass.
- Local runtime was Node 25.8.1; the repository requests Node 22 and CI uses Node 22. Attempts to provision Node 22 through npm encountered Windows permission errors. CI must pass before merge.
- An additional Vercel-targeted local build failed during dependency packaging with a Windows EPERM error. The normal repository build succeeded. No deployment was attempted and no deployment-limit message was received.
- Visual/mobile/print preview verification remains required: the CLI browser failed to launch and the app browser blocked localhost. Source markup and HTTP response tests are not substitutes for visual QA.

1. Verify the three resource URLs return 200 and appear in the sitemap; inspect the homepage, hub and both collections in Search Console.
2. Compare indexed and live tests: selected canonical, last crawl, rendering and indexing eligibility. Request indexing for the new substantive resources once; do not repeatedly resubmit them.
3. Export GSC queries/pages/dates/devices for the past three months. Investigate the October decline by affected URL against deployment logs and Crawl Stats. Keep private results and search noindexed.
4. Verify real attribution and claims of editorial review. A byline is not evidence of expert review. Do not invent credentials or scientific validation.
5. Measure real mobile LCP/INP/CLS when field data is sufficient. Lab scores do not prove field performance.
6. Execute the manual outreach plan only after approval. Four contact routes were rechecked; no backlinks were created by this release.
7. Review weekly non-brand impressions per landing page, indexed coverage, organic clicks and useful practice engagement. Do not infer a penalty from one zero-impression day.

## 30/60/90-day decisions

- First 30 days: validate indexing, review question feedback, verify the print resource and manually approach relevant editors.
- Days 31–60: improve the two collections based on genuine confusion and query data; add an original category only if it has a distinct use case.
- Days 61–90: deepen successful resources and educational partnerships. No mass age/score landing pages, paid link schemes or fabricated population benchmarks.

References checked October 21, 2026: [JavaScript SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics), [scaled-content policies](https://developers.google.com/search/docs/essentials/spam-policies), [education Q&A eligibility](https://developers.google.com/search/docs/appearance/structured-data/education-qa), [FAQ rich-result retirement](https://developers.google.com/search/updates).
