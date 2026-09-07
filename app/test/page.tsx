import type { Metadata } from 'next';
import { IQAssessment } from '@/components/IQAssessment';
export const metadata: Metadata = { title: 'Free IQ test', description: 'Take the free randomized IQTestReal reasoning assessment and receive an Estimated IQ.', alternates: { canonical: '/test' } };
export default function TestPage() { return <main id="main-content" className="test-page"><IQAssessment /></main>; }
