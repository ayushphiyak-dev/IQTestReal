# AdSense low-value-content response

Reviewed 2 October 2026 for IQTestReal.

The AdSense Sites screen reports `Low value content` while `ads.txt` is
authorized. That is a content-quality review, not a DNS or ads.txt failure.
Google does not publish a guaranteed word count or an approval formula. The
site should be useful to a person even if no advertisement is displayed.

## Changes in this patch

- Expanded `/methodology` into a reader-first explanation of the five
  categories, randomized 15-question assembly, scoring example, limitations,
  question review, privacy, and next steps.
- Added a visible editorial-review line to article pages and linked the public
  editorial policy.
- Replaced repeated “real IQ test” FAQ variants with distinct questions and
  fuller answers about categories, timing, score changes, local storage,
  responsible use, and formal assessment.
- Added maintainer, review, and correction details to `/about`.

These changes improve substance and trust without publishing thin keyword pages,
inventing credentials, or changing the product’s non-clinical claims.

## Ad implementation safety

AdSense loading remains controlled by `NEXT_PUBLIC_ADSENSE_ENABLED`, the
configured publisher client ID, and explicit consent. `public/ads.txt` contains
the authorized publisher record. Do not place ad units beside answer choices,
the timer, navigation controls, consent controls, or a result submission action.
Keep ads off pages that contain no meaningful publisher content.

## Manual review steps

1. Deploy this branch and verify the production homepage, `/methodology`,
   `/articles`, `/faq`, `/about`, and legal pages in a logged-out browser.
2. In AdSense, open the site’s issue details and check whether it names a
   particular page. Review that URL and the same page type across the site.
3. In Search Console, inspect the homepage and the methodology/article URLs;
   confirm they are crawlable, indexable, and served on `https://iqtestreal.com`.
4. Allow time for the new pages to be crawled. Request a review only after the
   production response is live and the site is genuinely ready.

Approval is not guaranteed. Google can reach a different conclusion based on
its review, the site's history, user experience, traffic quality, or policy
signals. Do not buy traffic, publish spun content, or repeatedly resubmit
without making a meaningful change.

References: [Google Publisher Policies](https://support.google.com/adsense/answer/10502938), [Google helpful content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content), and [Google's review guidance](https://support.google.com/adsense/answer/1378153).
