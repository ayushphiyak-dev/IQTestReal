import type { Metadata } from 'next';
import { Faq } from '@/components/Faq';
export const metadata: Metadata = { title: 'FAQ', description: 'Frequently asked questions about IQTestReal.', alternates: { canonical: '/faq' } };
export default function FaqPage() { return <main id="main-content"><header className="page-header centered shell"><span className="eyebrow">FAQ / Clear answers</span><h1>Questions worth asking.</h1><p>Learn what the free test measures, how the estimate works, and where its limits are.</p></header><section className="faq-section shell"><Faq /></section></main>; }
