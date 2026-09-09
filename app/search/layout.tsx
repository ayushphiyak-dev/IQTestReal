import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search',
  description: 'Search IQTestReal guides, explanations and pages.',
  robots: { index: false, follow: true },
};

export default function SearchLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}

