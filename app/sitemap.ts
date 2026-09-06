import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
export default function sitemap(): MetadataRoute.Sitemap { const paths = ['', '/product', '/test', '/methodology', '/pricing', '/docs', '/about', '/contact', '/privacy-policy', '/cookie-policy', '/terms', '/disclaimer']; return paths.map((path) => ({ url: `${siteConfig.siteUrl}${path}`, lastModified: new Date('2026-09-07'), changeFrequency: path === '' ? 'weekly' as const : 'monthly' as const, priority: path === '' ? 1 : path === '/test' ? .9 : .7 })); }
