# Content guidelines

## Publication gate

An article may use `status: "published"` only after a human editor confirms that it has a clear reader purpose, substantial original value, accurate metadata, a valid author identity, meaningful headings, a real category, and no placeholder copy. Draft and review items are excluded from public queries and the sitemap.

The sample articles in `lib/content.ts` are marked as demo content in code. Before a public launch, replace them with publisher-owned work or formally review, fact-check, and adopt them. Never automate arbitrary generated copy directly into production.

## Editorial expectations

- Contribute analysis, expertise, experiments, comparisons, tutorials, firsthand insight, research synthesis, or original tools and data.
- Prefer primary sources and link claims to the source closest to the evidence.
- Quote sparingly; do not reproduce external articles.
- Record uncertainty, conflicts of interest, substantive updates, and corrections.
- Use descriptive alt text when an image adds meaning; use empty alt text for purely decorative assets.
- Review Google Publisher Policies before publishing material that may be sensitive or restricted. Policies change, so use Google's current documentation rather than this repository as the authority.

## Adding an article

Add a validated object to `lib/content.ts`, provide a clean slug and real dates, add a category if needed, reserve image dimensions, and run lint, typecheck, and build. Check the article page, category page, sitemap, references, related links, and both colour themes before merging.
