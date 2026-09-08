export const siteConfig = {
  siteName: 'IQTestReal',
  siteDescription: 'Take a free IQ-style test online with logic, pattern, numerical, spatial, and analogy questions. Get an Estimated IQ with clear explanations.',
  siteUrl: 'https://iqtestreal.phiyakanil.chatgpt.site',
  ownerName: 'IQTestReal',
  contactEmail: process.env.CONTACT_EMAIL || 'ayushphiyakgdg@gmail.com',
  socialLinks: {} as Record<string, string>,
  defaultAuthor: 'IQTestReal editorial team',
  adsenseEnabled: process.env.NEXT_PUBLIC_ADSENSE_ENABLED === 'true',
  analyticsEnabled: Boolean(process.env.NEXT_PUBLIC_GA_ID),
};

