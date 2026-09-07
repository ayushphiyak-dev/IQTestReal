'use client';

import { useEffect, useState } from 'react';
import { SafeLink as Link } from '@/components/SafeLink';

type Choice = 'granted' | 'denied';

export function ConsentBanner() {
  const [visible, setVisible] = useState(() => typeof window !== 'undefined' && localStorage.getItem('iqtestreal-consent') === null);
  useEffect(() => {
    const reopen = () => setVisible(true);
    window.addEventListener('iqtestreal:open-consent-settings', reopen);
    return () => window.removeEventListener('iqtestreal:open-consent-settings', reopen);
  }, []);
  function choose(choice: Choice) {
    localStorage.setItem('iqtestreal-consent', choice);
    window.dispatchEvent(new CustomEvent('iqtestreal:consent', { detail: choice }));
    setVisible(false);
  }
  if (!visible) return null;
  return <aside className="consent-banner" aria-label="Cookie consent"><div><strong>Your privacy matters</strong><p>IQTestReal uses essential storage for your theme and local result history. Optional analytics and advertising stay off until you choose otherwise. <Link href="/cookie-policy">Read the Cookie Policy</Link>.</p></div><div className="consent-actions"><button type="button" className="button" onClick={() => choose('denied')}>Use essential only</button><button type="button" className="button primary" onClick={() => choose('granted')}>Allow optional</button></div></aside>;
}

