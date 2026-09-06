import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = { title: 'Sign in', description: 'Arc IQ account access status.', robots: { index: false, follow: false } };
export default function LoginPage() { return <main id="main-content" className="auth-page"><section className="auth-card"><span className="mark">A</span><span className="eyebrow">Account access</span><h1>No sign-in needed.</h1><p>Arc IQ currently keeps your assessment history on this device. Cloud accounts are not enabled yet.</p><Link className="button primary" href="/test">Continue to assessment</Link><Link className="text-link" href="/dashboard">View local history</Link></section></main>; }
