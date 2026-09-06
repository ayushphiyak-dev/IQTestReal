import type { Metadata } from 'next';
import { Pricing } from '@/components/Pricing';
import { Faq } from '@/components/Faq';
export const metadata: Metadata = { title: 'Pricing', description: 'Arc IQ plans, including the complete free practice assessment.', alternates: { canonical: '/pricing' } };
export default function PricingPage() { return <main id="main-content"><header className="page-header centered shell"><span className="eyebrow">Pricing / Start free</span><h1>A useful baseline costs nothing.</h1><p>The complete current assessment is free. Future plans are shown transparently as planned.</p></header><section className="shell"><Pricing /></section><section className="faq-section shell"><span className="eyebrow">Questions / Answers</span><h2>Before you begin.</h2><Faq /></section></main>; }
