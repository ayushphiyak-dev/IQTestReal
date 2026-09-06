import type { Metadata } from 'next';
import { IQAssessment } from '@/components/IQAssessment';
export const metadata: Metadata = { title: 'Reasoning assessment', description: 'Take the free 12-question Arc IQ practice reasoning assessment.', alternates: { canonical: '/test' } };
export default function TestPage() { return <main id="main-content" className="test-page"><IQAssessment /></main>; }
