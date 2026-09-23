# IQTestReal content growth system

- **Site:** [IQTestReal](https://iqtestreal.com)
- **Audience:** people who want free, non-clinical reasoning practice and clear explanations
- **Reviewed:** 2026-09-15

## Scope and audit notes

The public site could not be fetched through the available web search/open tool during this audit (the domain was rejected by the tool's safe-open policy and returned no indexed search results). The audit therefore uses the checked-in application routes, question bank, article source, metadata, sitemap, robots file, and navigation as the source of truth. Any URL in this document is either a verified local route or is marked for confirmation; no guessed IQTestReal URL is used.

IQTestReal currently has:

- Five reasoning domains in `lib/questions.ts`: Logic, Pattern, Numerical, Spatial, and Analogy. The bank contains six questions per domain; a normal attempt selects three from each domain (15 questions total).
- Five existing article pages: `understanding-iq-scores`, `practice-and-cognitive-performance`, `reasoning-categories-explained`, `online-iq-test-results`, and `how-to-prepare-for-reasoning-test`.
- A useful pillar page at `/articles/reasoning-categories-explained` with ten worked practice puzzles. It is already the best linkable learning resource and should be improved before adding another puzzle article.
- Verified supporting routes: `/test`, `/how-it-works`, `/score-guide`, `/faq`, `/docs`, `/articles`, `/about`, `/contact`, `/dashboard`, `/search`, `/privacy-policy`, `/cookie-policy`, `/terms`, `/disclaimer`, `/editorial-policy`, and `/methodology`.
- Canonical origin configuration at `https://iqtestreal.com` in `config/site.ts`, with the same origin used by the sitemap, robots route, manifest, Open Graph metadata, and organization schema.

## Findings

### Strengths to preserve

1. The product is explicit that results are estimates for practice, not clinical diagnoses. Keep that language in article introductions and calls to action.
2. The test has a clear five-domain model, randomized questions, answer explanations, a score guide, and local-only result history. Those are useful editorial differentiators.
3. The articles already link readers to the score guide and test. Keep navigation human-first rather than adding keyword-heavy footer links.
4. The site has privacy, cookie, terms, disclaimer, editorial-policy, methodology, contact, and FAQ routes. Link these where trust or data questions arise.
5. The article index is small enough to curate. Do not turn it into a thin archive of near-duplicates.

### Gaps and risks

- Four supporting articles are roughly 470–516 source words, while the reasoning-category pillar is substantially longer. Word count is not a quality target by itself, but the shorter pieces need stronger examples, answer checks, and distinct search intent before promotion.
- `understanding-iq-scores`, `online-iq-test-results`, and `/score-guide` can cannibalize one another. Give each a distinct job: model limitations, result-reading workflow, and the exact IQTestReal formula respectively.
- `how-to-prepare-for-reasoning-test` and `/docs` overlap around setup and test-taking. Keep `/docs` as a quick-start reference and make the article a deeper preparation and reflection guide.
- The existing JSON-LD is useful but should be reviewed before adding more schema. Use `Article` only for editorial pages, `FAQPage` only where the visible page contains the same questions and answers, and always include the canonical `mainEntityOfPage` URL.
- Every new article needs a descriptive image alt suggestion, one clear H1, scannable H2/H3 structure, short paragraphs, and a visible last-reviewed date or editorial note where factual claims may change.
- Search is already a route in the application. It should remain a navigation aid, not an indexable landing-page factory; query URLs should stay out of the sitemap.

## Recommended on-site changes

### 1. Strengthen the existing pillar before publishing another puzzle page

Use `/articles/reasoning-categories-explained` as the cornerstone for the first quarter. Add a short “How to use these examples” section, an answer-check table or summary, links to `/score-guide` and `/how-it-works`, and a final invitation to try `/test`. Keep all ten puzzles original and explain the reasoning, not just the answer.

### 2. Separate the three score-intent pages

- `/score-guide`: the transparent IQTestReal formula, score bands, percentile caveats, and what the model cannot measure.
- `/articles/online-iq-test-results`: a practical workflow for reading a completed attempt (accuracy, category strengths, conditions, and review notes).
- `/articles/understanding-iq-scores`: a broader literacy piece about estimates, reference groups, uncertainty, and why a short online result is not a diagnosis.

Use one canonical page for each intent and cross-link them with descriptive anchors such as “read the score guide” and “how to review a result.”

### 3. Add a small, deliberate learning path

Link the following sequence from relevant articles and the article index:

`/articles/reasoning-categories-explained` → `/how-it-works` → `/test` → `/score-guide` → `/articles/online-iq-test-results`.

This gives a reader a reason to move through the site without forcing a test start. Use `/faq` for common objections and `/contact` for question or accessibility feedback.

### 4. Improve article templates, not page count

For every future article, include a direct answer near the top, one worked example, one “common mistake” callout, a relevant internal link, and a modest call to action. Add a source list only when the article makes a factual or psychological claim; do not manufacture statistics or credentials.

### 5. Trust and accessibility checks

- Keep the non-clinical disclaimer close to claims about score meaning.
- Use descriptive link text and image alt text; do not use “click here.”
- Keep headings in order (one H1, then H2/H3), and make interactive examples keyboard accessible.
- Do not hide links, add reciprocal-link blocks, publish spun copy, or create pages solely for keywords.
- Review mobile spacing and tap targets before promoting any article. The article pages should remain readable at 320px without horizontal scrolling.

## Internal-link map

| Reader need            | Verified destination                   | Natural anchor examples                              |
| ---------------------- | -------------------------------------- | ---------------------------------------------------- |
| Try the assessment     | `/test`                                | free reasoning practice, start a fresh practice test |
| Understand the product | `/how-it-works`                        | how the assessment works                             |
| Interpret a result     | `/score-guide`                         | score guide, how the estimate is calculated          |
| Read related learning  | `/articles`                            | reasoning articles, learning guides                  |
| Find answers quickly   | `/faq`                                 | common questions                                     |
| Prepare fairly         | `/docs`                                | quick-start guide                                    |
| Review local history   | `/dashboard`                           | results saved on this device                         |
| Send feedback          | `/contact`                             | contact the IQTestReal team                          |
| Understand privacy     | `/privacy-policy` and `/cookie-policy` | privacy policy, cookie policy                        |

Use the destination that answers the reader's current question. Do not link every page to every other page.

## Calls to action

Use one primary CTA per article and one optional next step:

- Beginner or worked-example page: “Try a fresh set of reasoning questions” → `/test`.
- Score-literacy page: “Read the IQTestReal score guide” → `/score-guide`.
- Preparation page: “See how the assessment works” → `/how-it-works`.
- Privacy or data page: “Read the privacy policy” → `/privacy-policy`.

The CTA should describe the next action, not promise a higher IQ or a guaranteed score.

## Content production rules

The topic database in `topic-database.csv` contains 200 distinct ideas. It is a planning queue, not a mandate to publish 200 pages. Select topics only after checking the article index for overlap. Start at one high-quality article per week, with a monthly review and one interactive or family-friendly challenge only when it has a real learning purpose.

The 12-month schedule in `editorial-calendar.md` prioritizes a small number of pillar pages, supporting explainers, beginner practice, advanced reasoning, classroom resources, and interactive challenges. A topic can be deferred if the needed source review, illustration, accessibility work, or question writing is not ready.

## Measurement without overclaiming

Track helpful signals rather than vanity targets: impressions and clicks by intent, article-to-test navigation, completion of the first question, return visits to the same guide, scroll depth, and contact feedback. Compare periods only after enough time for indexing and normal seasonality. Do not promise rankings, traffic, engagement, or AdSense approval.

## Editorial review checklist

- [ ] The page answers a specific reader question in the opening section.
- [ ] The topic does not duplicate an existing article or route.
- [ ] All examples and solutions are original and checked by hand.
- [ ] Any factual or psychological claim has a credible source or is removed.
- [ ] The article says that IQTestReal is non-clinical when score interpretation is discussed.
- [ ] Exactly one H1 is used, with logical H2/H3 headings.
- [ ] Internal links use verified IQTestReal paths and helpful anchor text.
- [ ] Metadata, canonical URL, Open Graph copy, and alt text are specific to the page.
- [ ] The page works with keyboard navigation and at narrow mobile widths.
- [ ] The article is useful even if the reader never starts the test.
