# Brand search and traffic audit — 30 September 2026

## What was actually checked

- PR #54 was merged on 23 September; GitHub CI and Vercel checks succeeded.
- Live homepage returns 200 with server-rendered content, an index/follow directive and the production canonical. No X-Robots-Tag block was returned.
- All 23 sitemap pages return 200, have matching self-canonicals and no noindex directive.
- robots.txt allows normal crawling and references the production sitemap.
- HTTP, www and the legacy generated Vercel hostname redirect permanently (308), preserving `/articles?test=1`.
- `/articles/logic-puzzles-for-beginners` works. An unknown path returns a real 404. Internal search intentionally remains noindex.
- These fetches do not establish Googlebot's access history, Google's selected canonical, indexing status or ranking. Search Console is required for those facts.

## Verified defects and focused changes

1. Live HTML combined two Google verification values into one comma-separated meta tag. Replace the framework's array serialization with an explicit URL-prefix verification tag. The Domain-property token is a DNS TXT record; HTML cannot substitute for it. Verification enables reporting, not a ranking boost.
2. Homepage title/description differed from its inherited social metadata. Use the shared metadata helper and one brand-first homepage title, without duplicating the title-template suffix. Intro copy now immediately explains IQTestReal and its non-clinical limitations.
3. Root social previews and Apple icon referenced SVG despite an existing PNG. Use the PNG for wider consumer support; preserve the SVG favicon. Correct shared Open Graph dimensions from 512 to the verified 1254 × 1254 pixels.
4. Organization sameAs included promotional post URLs rather than identity pages. Keep the known Instagram profile and official GitHub project; preserve promotional links elsewhere. Give WebSite and Organization stable IDs and connect the publisher; add the domain as the site's alternative name.
5. Add rendered-response regression checks, not just source-file checks, so malformed verification/canonical/indexing output is detected.

No redesign, clinical claims, purchased links, new thin pages, DNS, advertising or analytics configuration changes are part of this patch.

## What the screenshots do NOT prove

The search screenshot is Brave, not Google. Different indexes can return different results. A third-party tool reporting zero estimated organic traffic or keywords is not proof of zero visits. Domain Authority is not a Google metric. We have no authenticated Search Console or analytics report here, so the reason for low impressions/rank remains unconfirmed.

## Manual work after the patch is deployed

1. In Google Search Console, inspect `https://iqtestreal.com/`: capture indexed status, last crawl, crawl allowed, page fetch, user canonical and Google-selected canonical. Run Test Live URL, then request indexing once if appropriate. Do not repeatedly resubmit.
2. Submit/check `https://iqtestreal.com/sitemap.xml`. Inspect the seven previously discovered-but-not-indexed URLs individually; export the actual URLs rather than removing intentional redirects or noindex pages.
3. Export Performance for the last 28 and 90 days with query, page, country and device dimensions. Filter brand queries separately from non-brand queries. Record impressions, clicks, CTR and position weekly. Do not equate an external estimate with this first-party data.
4. Verify/import the site into Bing Webmaster Tools and submit the sitemap. Check Brave separately; a Google recrawl request does not update Brave's independent index.
5. Ensure the GitHub repository About website and owned social profiles link to `https://iqtestreal.com`, not an old deployment hostname. Updating those external profiles requires a separate manual action.
6. If Domain-property verification is still missing, add the previously supplied TXT token at the authoritative DNS provider without replacing email/SPF records. This patch only repairs the separate URL-prefix HTML verification method.
7. Use the existing backlink outreach documents for selective, personalized outreach to relevant resources. No messages were sent. Do not buy links or demand exact-match anchors.

Prioritize an actual crawl/indexing error if Search Console reveals one. Otherwise build useful resources and genuine awareness rather than repeatedly changing titles. Track first-party data over several weeks; no traffic or rank outcome is guaranteed.

## Repeatable checks

`npm run lint`, `npm run typecheck`, `npm run build`, then `node scripts/check-seo.mjs`.
After deployment: `node scripts/check-seo.mjs https://iqtestreal.com`.
The response checker deliberately fails against the pre-patch site's malformed verification tag.

References: [Google site names](https://developers.google.com/search/docs/appearance/site-names), [request a recrawl](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl), [Google's crawling and indexing FAQ](https://developers.google.com/search/help/crawling-index-faq).
