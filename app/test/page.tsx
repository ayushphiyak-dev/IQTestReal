import type { Metadata } from 'next';
import { IQAssessment } from '@/components/IQAssessment';
export const metadata: Metadata = { title: 'Free IQ test', description: 'Take the free randomized IQTestReal reasoning assessment and receive an Estimated IQ.', alternates: { canonical: '/test' } };
export default function TestPage() {
  return (
    <main id="main-content" className="test-page">
      <div className="test-ambient" aria-hidden="true">
        <span className="ambient-orb ambient-orb-one" />
        <span className="ambient-orb ambient-orb-two" />
        <span className="ambient-line ambient-line-one" />
        <span className="ambient-line ambient-line-two" />
      </div>
      <IQAssessment />
    </main>
  );
}

