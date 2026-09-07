import type { Metadata } from 'next';
import { Faq, faqs } from '@/components/Faq';
export const metadata: Metadata = { title: 'FAQ', description: 'Frequently asked questions about IQTestReal.', alternates: { canonical: '/faq' } };
export default function FaqPage() { const schema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })) }; return <main id="main-content"><header className="page-header centered shell"><span className="eyebrow">FAQ / Clear answers</span><h1>Questions worth asking.</h1><p>Learn what the free test measures, how the estimate works, and where its limits are.</p></header><section className="faq-section shell"><Faq /></section><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} /></main>; }

