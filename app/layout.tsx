import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { AdSenseScript } from '@/components/adsense/AdSenseScript';
import { ConsentProvider } from '@/components/consent/ConsentProvider';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { CommandMenu } from '@/components/CommandMenu';
import { siteConfig } from '@/config/site';
import './globals.css';
import './product.css';
import './command-fix.css';
import './iqtest.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: { default: 'IQTestReal — Free IQ Test', template: '%s — IQTestReal' },
  description: siteConfig.siteDescription,
  alternates: { canonical: '/' },
  openGraph: { type: 'website', siteName: siteConfig.siteName, title: 'IQTestReal — Free IQ Test', description: siteConfig.siteDescription, url: '/' },
  twitter: { card: 'summary', title: 'IQTestReal — Free IQ Test', description: siteConfig.siteDescription },
  icons: { icon: '/favicon.svg' },
  robots: process.env.VERCEL_ENV === 'preview' ? { index: false, follow: false } : { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const websiteSchema = { '@context': 'https://schema.org', '@type': 'WebSite', name: siteConfig.siteName, url: siteConfig.siteUrl, description: siteConfig.siteDescription };
  return <html lang="en" className="dark"><body className={`${geistSans.variable} ${geistMono.variable}`}><a className="skip-link" href="#main-content">Skip to content</a><ConsentProvider><AdSenseScript /><SiteHeader />{children}<SiteFooter /><CommandMenu /></ConsentProvider><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema).replace(/</g, '\\u003c') }} /></body></html>;
}
