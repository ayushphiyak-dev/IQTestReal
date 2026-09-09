import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
export default function sitemap(): MetadataRoute.Sitemap {
  // Search results are intentionally excluded: query URLs are non-canonical and
  // should not compete with the site's editorial pages in search results.
  const paths = ['', '/test', '/how-it-works', '/score-guide', '/articles', '/articles/understanding-iq-scores', '/articles/practice-and-cognitive-performance', '/articles/reasoning-categories-explained', '/articles/online-iq-test-results', '/articles/how-to-prepare-for-reasoning-test', '/faq', '/about', '/contact', '/privacy-policy', '/cookie-policy', '/terms', '/disclaimer', '/editorial-policy', '/methodology', '/product', '/docs'];
  return paths.map((path) => ({ url: `${siteConfig.siteUrl}${path}`, lastModified: new Date('2026-09-10'), changeFrequency: path === '' ? 'weekly' as const : 'monthly' as const, priority: path === '' ? 1 : path === '/test' ? .95 : .7 }));
}

