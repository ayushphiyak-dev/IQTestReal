# Signal & Craft

A production-minded independent publication for field notes, practical frameworks, and responsible technology analysis. It uses the Next.js App Router model through the Sites/Vinext runtime, React, TypeScript, Tailwind CSS, Geist, and a structured article system.

## Requirements

- Node.js 22.13 or newer
- npm

## Installation

```bash
git clone <repository-url>
cd <repository-directory>
npm install
cp .env.example .env.local
npm run dev
```

## Environment setup

Set `NEXT_PUBLIC_SITE_URL` to the canonical production origin. Keep AdSense off until approval and CMP setup. Configure `CONTACT_EMAIL` and a server-side `CONTACT_WEBHOOK_URL` that accepts the validated JSON contact payload. Never commit `.env.local`.

## Development and validation

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
npm run start
```

Server components are the default. Client code is limited to theme preference, consent state, advertising activation, and the contact submission experience.

## Production deployment

Push `main` to GitHub and import it in Vercel for automatic production deployments, or use the included Sites configuration. See `docs/DEPLOYMENT.md` for the domain, DNS, HTTPS, canonical, robots, and sitemap checklist.

## Vercel and custom domain

Choose one hostname as canonical, redirect the alternative, and set that exact origin in `NEXT_PUBLIC_SITE_URL`. Preview deployments receive `noindex` when `VERCEL_ENV=preview`.

## AdSense and ads.txt

Read `docs/ADSENSE.md`. Advertising is optional and invisible while disabled. Add the exact account-provided line as `public/ads.txt` only after AdSense supplies it; do not rename the example prematurely.

## CMP / consent setup

Read `components/consent/README.md`. Connect a Google-certified CMP before serving personalised advertising where publisher consent requirements apply. The included abstraction is not a fake banner and makes no compliance claim.

## Content publishing

Read `docs/CONTENT_GUIDELINES.md`. The structured sample articles are marked as demo content in code and must be replaced or formally reviewed and adopted before a public launch. Draft and review statuses are excluded from public article queries and the sitemap.

## SEO checklist

Confirm the canonical production URL, unique metadata, JSON-LD, valid dates, article references, internal links, sitemap, robots rules, redirect policy, and Search Console ownership. Never add review or rating schema without real supporting data.

## License

No licence has been selected. Add one only when the publisher chooses the terms for source and editorial content.
