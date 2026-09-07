'use client';

import Script from 'next/script';
import { useConsent } from '@/components/consent/ConsentProvider';

export function AnalyticsScript() {
  const { consent } = useConsent();
  const measurementId = process.env.NEXT_PUBLIC_GA_ID;
  if (!measurementId || consent !== 'granted') return null;
  return <><Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" /><Script id="iqtestreal-ga4" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${measurementId}',{anonymize_ip:true});`}</Script></>;
}

