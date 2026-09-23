import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

const socialImage = {
  url: '/iqtestreal-brain.png',
  width: 512,
  height: 512,
  alt: 'IQTestReal brain logo',
};

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
};

/** Keep title, canonical, Open Graph, and Twitter URLs in one place. */
export function pageMetadata({
  title,
  description,
  path,
  type = 'website',
}: PageMetadataOptions): Metadata {
  const url = new URL(path, siteConfig.siteUrl).toString();
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      siteName: siteConfig.siteName,
      title,
      description,
      url,
      images: [socialImage],
    },
    twitter: {
      card: 'summary',
      title,
      description,
      images: [socialImage.url],
    },
  };
}
