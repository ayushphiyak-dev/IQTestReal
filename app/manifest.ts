import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: siteConfig.siteUrl,
    name: siteConfig.siteName,
    short_name: siteConfig.siteName,
    description: siteConfig.siteDescription,
    start_url: siteConfig.siteUrl,
    display: 'standalone',
    background_color: '#fbf8f3',
    theme_color: '#d95d45',
    icons: [{ src: `${siteConfig.siteUrl}/iqtestreal-brain.png`, sizes: '512x512', type: 'image/png' }],
  };
}

