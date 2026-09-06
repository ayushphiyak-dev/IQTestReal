export const siteConfig = {
  siteName: 'Signal & Craft',
  siteDescription: 'Independent field notes and practical frameworks for responsible technology and durable digital practice.',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://signal-and-craft-journal.gentle-bard-7583.chatgpt.site',
  ownerName: 'SITE_OWNER_NAME',
  contactEmail: process.env.CONTACT_EMAIL || 'SITE_CONTACT_EMAIL',
  socialLinks: {} as Record<string, string>,
  defaultAuthor: 'The editorial desk',
  adsenseEnabled: process.env.NEXT_PUBLIC_ADSENSE_ENABLED === 'true',
  analyticsEnabled: Boolean(process.env.NEXT_PUBLIC_GA_ID),
};
