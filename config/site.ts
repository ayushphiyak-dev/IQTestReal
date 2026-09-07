export const siteConfig = {
  siteName: 'IQTestReal',
  siteDescription: 'A free, transparent IQ-style reasoning test with Estimated IQ, percentile, and category insights.',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://iqtestreal.phiyakanil.chatgpt.site',
  ownerName: 'IQTestReal',
  contactEmail: process.env.CONTACT_EMAIL || 'help@iqtestreal.com',
  socialLinks: {} as Record<string, string>,
  defaultAuthor: 'IQTestReal editorial team',
  adsenseEnabled: process.env.NEXT_PUBLIC_ADSENSE_ENABLED === 'true',
  analyticsEnabled: Boolean(process.env.NEXT_PUBLIC_GA_ID),
};
