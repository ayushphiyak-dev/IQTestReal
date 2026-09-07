import type { Metadata } from 'next';
import { SafeLink as Link } from '@/components/SafeLink';
import { BrandMark } from '@/components/BrandMark';
export const metadata: Metadata = { title: 'Account access', description: 'IQTestReal results work without an account.', robots: { index: false, follow: false } };
export default function LoginPage() { return <main id="main-content" className="auth-page"><section className="auth-card"><BrandMark /><span className="eyebrow">Account access</span><h1>No sign-in needed.</h1><p>IQTestReal keeps your results on this device. Cloud accounts are not required for the free test.</p><Link className="button primary" href="/test">Take the IQ test</Link><Link className="text-link" href="/dashboard">View local results</Link></section></main>; }

