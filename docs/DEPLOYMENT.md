# Production deployment

## Vercel

1. Push the repository to GitHub.
2. Import it in Vercel and select the Next.js framework.
3. Add the environment variables from `.env.example` with production values.
4. Deploy from `main` and connect the custom domain.
5. Configure DNS, select one primary hostname, and redirect the alternate host to it.
6. Verify HTTPS, canonical URLs, `/sitemap.xml`, and `/robots.txt`.
7. Keep preview deployments out of search results; the metadata layer uses `VERCEL_ENV=preview` to set `noindex`.

Merges to `main` are suitable for Vercel's connected Git production flow. Use one canonical `NEXT_PUBLIC_SITE_URL` without a trailing slash.

## Git workflow

```bash
git init
git add .
git commit -m "feat: initial production website"
git branch -M main
git remote add origin <repository-url>
git push -u origin main
```

Do not put tokens in Git remotes or committed environment files.
