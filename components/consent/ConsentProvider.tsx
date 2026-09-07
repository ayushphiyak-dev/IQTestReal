'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type ConsentState = 'unknown' | 'granted' | 'denied';
const ConsentContext = createContext<{ consent: ConsentState; setConsent: (value: ConsentState) => void }>({ consent: 'unknown', setConsent: () => undefined });

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsentState] = useState<ConsentState>('unknown');
  useEffect(() => {
    const handler = (event: Event) => setConsentState((event as CustomEvent<ConsentState>).detail);
    window.addEventListener('iqtestreal:consent', handler);
    return () => window.removeEventListener('iqtestreal:consent', handler);
  }, []);
  function setConsent(value: ConsentState) { setConsentState(value); }
  return <ConsentContext.Provider value={{ consent, setConsent }}>{children}</ConsentContext.Provider>;
}

export function useConsent() { return useContext(ConsentContext); }
