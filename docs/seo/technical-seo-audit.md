# IQTestReal technical SEO audit

Reviewed: 23 September 2026  
Canonical origin: `https://iqtestreal.com`

## Executive summary

The application is a server-rendered Next/Vinext site with a stable canonical origin, a root `robots.txt` route, a generated sitemap, and visible HTML content for the main assessment and learning pages. The Search Console screenshot showing “Page with redirect”, “Excluded by noindex”, and “Discovered - currently not indexed” is consistent with the current route design: legacy aliases redirect, personal/search pages are intentionally private, and discovery is not the same as a crawl or quality decision.

The highest-impact implementation issues were metadata consistency and presentation quality, not a missing indexing switch. Child pages inherited the homepage Open Graph URL, the global keyword list repeated too many close variants, and editorial Article JSON-LD did not identify a publisher logo or a useful author URL. These are now corrected without changing the product’s non-clinical claims or private-route behavior.

## Findings and fixes

| Area             | Finding                                                                                                                            | Action                                                                                                                                                                   |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Canonical origin | `config/site.ts`, metadata base, sitemap, robots, manifest, and schema use `https://iqtestreal.com`.                               | Preserved this as the only public origin.                                                                                                                                |
| Crawlability     | `robots.ts` allows normal crawling and blocks only `/api/`; sitemap points to `/sitemap.xml`.                                      | Preserved; verify the deployed response in Search Console after release.                                                                                                 |
| Redirects        | `/index.html`, `/home`, `/iq-test`, `/results`, `www`, and the generated Vercel host redirect permanently to the preferred origin. | Preserved; these are expected “Page with redirect” URLs and should not be added to the sitemap.                                                                          |
| Private routes   | `/search`, `/dashboard`, `/login`, and `/404` are not useful search landing pages.                                                 | Preserved intentional `noindex`; they remain usable to visitors.                                                                                                         |
| Metadata         | Many pages had only title/description/canonical, so the layout’s homepage `og:url` could be inherited.                             | Added a shared `pageMetadata` helper and page-specific Open Graph/Twitter URLs and images for the homepage, test, learning pages, article index, and editorial articles. |
| Keywords         | Root metadata contained many repeated exact-match variations.                                                                      | Reduced it to a small descriptive set; page copy and headings carry intent naturally.                                                                                    |
| Structured data  | Organization/WebSite schema was present; Article schema lacked a publisher logo, author URL, language, and free-access signal.     | Added those non-controversial fields and kept Article markup on visible editorial pages only. FAQ markup remains limited to visible FAQ content.                         |
| Sitemap          | Sitemap contains absolute canonical URLs and excludes query/search URLs.                                                           | Preserved the route list and canonical host; re-submit `/sitemap.xml` after deployment.                                                                                  |
| Images           | The brand image already has descriptive alt text and is used in metadata.                                                          | Reused the existing brain mark rather than adding decorative image weight.                                                                                               |
| JavaScript       | The test and search are interactive, but the main explanatory content is rendered in the page tree.                                | No client-only SEO content was introduced.                                                                                                                               |

## Route review

Indexable content routes: `/`, `/test`, `/how-it-works`, `/score-guide`, `/articles`, the seven article pages, `/faq`, `/about`, `/contact`, `/methodology`, `/product`, `/docs`, and the policy pages. Each has a canonical path in route metadata and is included in the sitemap where appropriate.

Excluded by design: `/search` (query-dependent utility), `/dashboard` (device-local history), `/login` (no account flow), `/404`, and `/api/*`. These are not SEO failures.

## Content and intent map

- **Free online IQ-style test:** `/` and `/test` — transactional/practice intent.
- **How the assessment works:** `/how-it-works` and `/methodology` — process and trust intent.
- **Score meaning:** `/score-guide`, `/articles/understanding-iq-scores`, and `/articles/online-iq-test-results` — separate model, literacy, and review intents.
- **Reasoning practice:** `/articles/reasoning-categories-explained`, `/articles/logic-puzzles-for-beginners`, and `/articles/number-sequences-explained` — worked examples and beginner intent.
- **Common questions:** `/faq` — visible, concise answers with FAQPage JSON-LD.

Avoid publishing near-duplicates for “real IQ test”, “free IQ test”, and “online IQ test”. Improve the existing page that best answers the question and link to the relevant guide instead.

## Competitor/search landscape observations

Current search results include broad quiz products (for example Psychology Today’s free reasoning quiz), specialist score explainers, and puzzle/education resources such as Math Is Fun. The differentiator available to IQTestReal is not a clinical claim: it is a transparent, free practice experience with randomized questions, explanations, a visible formula, local-only history, and clear limits. Competitors commonly win with a direct answer above the fold, strong topic depth, recognizable trust signals, and links from education/puzzle resources. IQTestReal should compete on usefulness and clarity, not on “most accurate” claims.

Search references checked during this audit: [Google canonicalization guidance](https://developers.google.com/search/docs/crawling-indexing/canonicalization), [Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap), [Google breadcrumb structured data guidance](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb), [Math Is Fun logic puzzles](https://www.mathsisfun.com/puzzles/logic-puzzles-index.html), [Psychology Today IQ test](https://psychology.com/tests/iq-test), and [IQ Revealed’s “how IQ tests work” explainer](https://iqrevealed.com/learn/how-iq-tests-work).

## Search Console/analytics limitation

No Search Console or Analytics connector was available in this workspace. The supplied screenshot is useful evidence of the current indexing buckets, but it does not provide query, CTR, Core Web Vitals, or URL Inspection data. After deployment, use Search Console to inspect the homepage and article URLs, submit the sitemap, and export queries with impressions but low CTR for the next content decisions.

## Manual verification checklist

- [ ] Confirm `https://iqtestreal.com/robots.txt` returns the sitemap URL and allows `/`.
- [ ] Confirm `https://iqtestreal.com/sitemap.xml` contains only `https://iqtestreal.com/...` URLs.
- [ ] Inspect the homepage and one article with URL Inspection; request indexing only after the production response is live.
- [ ] Test `www.iqtestreal.com`, the Vercel host, and legacy aliases for one-hop HTTPS redirects without loops.
- [ ] Run PageSpeed Insights on mobile and desktop; address measured bottlenecks rather than guessing.
- [ ] Keep ads and analytics consent-gated and review any future ad placement against the test controls.
