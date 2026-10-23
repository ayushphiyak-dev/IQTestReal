'use client';

import { useEffect, useState } from 'react';
import { SafeLink as Link } from '@/components/SafeLink';

type Choice = 'granted' | 'denied';

export function ConsentBanner() {
  // Keep the server and first client render identical; localStorage is only
  // available after hydration and should never decide the initial markup.
  // Render the banner in the initial HTML so crawlers and users without a saved
  // preference can see the consent controls immediately. Hydration then hides
  // it for visitors who have already made a choice on this device.
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const timer = window.setTimeout(
      () => setVisible(localStorage.getItem('iqtestreal-consent') === null),
      0,
    );
    const reopen = () => setVisible(true);
    window.addEventListener('iqtestreal:open-consent-settings', reopen);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('iqtestreal:open-consent-settings', reopen);
    };
  }, []);
  function choose(choice: Choice) {
    localStorage.setItem('iqtestreal-consent', choice);
    window.dispatchEvent(
      new CustomEvent('iqtestreal:consent', { detail: choice }),
    );
    setVisible(false);
  }
  if (!visible) return null;
  return (
    <aside className="consent-banner" aria-label="Privacy choices">
      <div>
        <strong>Your privacy matters</strong>
        <p>
          Essential storage keeps your theme and local result history. If
          enabled, optional Google and Vercel analytics and Google advertising
          load only after you allow them. This choice banner is not a certified
          regional advertising CMP.{' '}
          <Link href="/privacy-policy">Read the Privacy Policy</Link>.
        </p>
      </div>
      <div className="consent-actions">
        <button
          type="button"
          className="button"
          onClick={() => choose('denied')}
        >
          Essential only
        </button>
        <button
          type="button"
          className="button primary"
          onClick={() => choose('granted')}
        >
          Allow optional
        </button>
      </div>
    </aside>
  );
}
