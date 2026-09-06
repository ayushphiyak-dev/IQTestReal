# Arc IQ

A production-quality practice reasoning assessment built with the Next App Router model through Sites/Vinext, React, TypeScript, Tailwind CSS, Geist, Lucide, and Framer Motion.

## Local development

```bash
npm install
npm run dev
```

Quality checks:

```bash
npm run typecheck
npm run lint
npm run build
```

## Product behavior

- The assessment includes 12 original questions across pattern, verbal, quantitative, and logical reasoning.
- Scores and attempt history are stored in local browser storage under `arc-iq-attempts`.
- The Arc Index is percentage correct, not a standardized or clinical IQ score.
- Contact delivery, analytics, advertising, and a consent platform remain disabled until their environment variables are configured.

## Required launch configuration

Replace `SITE_OWNER_NAME` and `SITE_CONTACT_EMAIL` in the legal pages and configure `CONTACT_EMAIL` before public launch. Optional integrations should only be enabled after their privacy disclosures and consent behavior have been reviewed.
