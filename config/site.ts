export const siteConfig = {
  siteName: 'Arc IQ',
  siteDescription: 'A focused practice assessment across pattern, verbal, quantitative, and logical reasoning.',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://arc-iq.chatgpt.site',
  ownerName: 'SITE_OWNER_NAME',
  contactEmail: process.env.CONTACT_EMAIL || 'SITE_CONTACT_EMAIL',
  socialLinks: {} as Record<string, string>,
  defaultAuthor: 'Arc IQ research desk',
  adsenseEnabled: process.env.NEXT_PUBLIC_ADSENSE_ENABLED === 'true',
  analyticsEnabled: Boolean(process.env.NEXT_PUBLIC_GA_ID),
};
