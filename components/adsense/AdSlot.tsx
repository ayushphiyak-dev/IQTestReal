'use client';

import { useEffect } from 'react';
import { useConsent } from '../consent/ConsentProvider';

export function AdSlot({ slot, format = 'auto', responsive = true, className = '' }: { slot: string; format?: string; responsive?: boolean; className?: string }) {
  const { consent } = useConsent();
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
  const enabled = process.env.NEXT_PUBLIC_ADSENSE_ENABLED === 'true' && Boolean(client) && consent === 'granted';
  useEffect(() => { if (enabled) { try { ((window as Window & { adsbygoogle?: unknown[] }).adsbygoogle ||= []).push({}); } catch { /* Ad blockers may prevent initialization. */ } } }, [enabled]);
  if (!enabled) return null;
  return <aside className={`ad-frame ${className}`} aria-label="Advertisement"><span>Advertisement</span><ins className="adsbygoogle" style={{ display: 'block' }} data-ad-client={client} data-ad-slot={slot} data-ad-format={format} data-full-width-responsive={responsive ? 'true' : 'false'} /></aside>;
}
