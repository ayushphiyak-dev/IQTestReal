'use client';

import Script from 'next/script';
import { useConsent } from '../consent/ConsentProvider';

export function AdSenseScript() {
  const { consent } = useConsent();
  const enabled = process.env.NEXT_PUBLIC_ADSENSE_ENABLED === 'true';
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
  if (!enabled || !client || consent !== 'granted') return null;
  return <Script id="adsense-script" async strategy="afterInteractive" crossOrigin="anonymous" src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(client)}`} />;
}
