import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page not found',
  description: 'The requested IQTestReal page was not found. Return to the free IQ test or browse the learning centre.',
  robots: { index: false, follow: true },
};

export { default } from '../not-found';

