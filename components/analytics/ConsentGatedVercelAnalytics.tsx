'use client';

import { Analytics } from '@vercel/analytics/next';
import { useConsent } from '@/components/consent/ConsentProvider';

export function ConsentGatedVercelAnalytics() {
  const { consent } = useConsent();
  return consent === 'granted' ? <Analytics /> : null;
}
