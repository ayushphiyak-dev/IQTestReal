import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { AdSenseScript } from '@/components/adsense/AdSenseScript';
import { ConsentProvider } from '@/components/consent/ConsentProvider';
import { ConsentBanner } from '@/components/consent/ConsentBanner';
import { AnalyticsScript } from '@/components/analytics/AnalyticsScript';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { CommandMenu } from '@/components/CommandMenu';
import { siteConfig } from '@/config/site';
import './globals.css';
import './product.css';
import './command-fix.css';
import './iqtest.css';
import './theme.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: { default: 'IQTestReal — Free IQ Test', template: '%s — IQTestReal' },
  description: siteConfig.siteDescription,
  keywords: ['free IQ test', 'IQ test online', 'IQ-style test', 'reasoning test', 'logic test', 'pattern recognition test', 'numerical reasoning', 'spatial reasoning', 'analogy questions', 'Estimated IQ', 'percentile score'],
  authors: [{ name: siteConfig.defaultAuthor }],
  creator: siteConfig.ownerName,
  publisher: siteConfig.ownerName,
  category: 'education',
  alternates: { canonical: '/' },
  openGraph: { type: 'website', siteName: siteConfig.siteName, title: 'IQTestReal — Free IQ Test', description: siteConfig.siteDescription, url: '/' },
  twitter: { card: 'summary', title: 'IQTestReal — Free IQ Test', description: siteConfig.siteDescription },
  icons: { icon: '/iqtestreal-brain.png?v=3', shortcut: '/iqtestreal-brain.png?v=3', apple: '/iqtestreal-brain.png?v=3' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const websiteSchema = { '@context': 'https://schema.org', '@type': 'WebSite', name: siteConfig.siteName, url: siteConfig.siteUrl, description: siteConfig.siteDescription };
  const organizationSchema = { '@context': 'https://schema.org', '@type': 'Organization', name: siteConfig.siteName, url: siteConfig.siteUrl, email: siteConfig.contactEmail, logo: `${siteConfig.siteUrl}/iqtestreal-brain.png` };
  return <html lang="en" className="dark"><body className={`${geistSans.variable} ${geistMono.variable}`}><a className="skip-link" href="#main-content">Skip to content</a><ConsentProvider><AdSenseScript /><AnalyticsScript /><SiteHeader />{children}<SiteFooter /><CommandMenu /><ConsentBanner /></ConsentProvider><Analytics /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([websiteSchema, organizationSchema]).replace(/</g, '\\u003c') }} /></body></html>;
}

