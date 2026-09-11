export const siteConfig = {
  siteName: 'IQTestReal',
  siteDescription: 'Take a free IQ-style test online with logic, pattern, numerical, spatial, and analogy questions. Get an Estimated IQ with clear explanations.',
  // Keep one canonical origin for metadata, structured data, sitemap and robots.
  // The Vercel deployment remains an implementation detail and must not be indexed.
  siteUrl: 'https://iqtestreal.com',
  ownerName: 'IQTestReal',
  contactEmail: process.env.CONTACT_EMAIL || 'ayushphiyakgdg@gmail.com',
  socialLinks: {
    x: 'https://x.com/Placementdo/status/2097791441212932427?s=20',
    linkedin: 'https://lnkd.in/p/gdq-sWMb',
    instagram: 'https://www.instagram.com/iqtestreal/',
  },
  defaultAuthor: 'IQTestReal editorial team',
  adsenseEnabled: process.env.NEXT_PUBLIC_ADSENSE_ENABLED === 'true',
  analyticsEnabled: Boolean(process.env.NEXT_PUBLIC_GA_ID),
};


