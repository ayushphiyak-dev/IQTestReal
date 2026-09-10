import type { Metadata } from 'next';
import { Faq } from '@/components/Faq';
import { faqs } from '@/components/faq-data';
export const metadata: Metadata = { title: 'IQ Test FAQ: Free Online Results and Accuracy', description: 'Learn how to take a real IQ test online for free, understand Estimated IQ and instant results, and know when professional testing is appropriate.', alternates: { canonical: '/faq' } };
export default function FaqPage() { const schema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })) }; return <main id="main-content"><header className="page-header centered shell"><span className="eyebrow">FAQ / Clear answers</span><h1>Questions worth asking.</h1><p>Learn what the free test measures, how the estimate works, and where its limits are.</p></header><section className="faq-section shell"><Faq /></section><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} /></main>; }


