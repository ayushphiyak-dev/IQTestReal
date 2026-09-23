import type { Metadata } from 'next';
import { IQAssessment } from '@/components/IQAssessment';
import { pageMetadata } from '@/config/seo';
export const metadata: Metadata = pageMetadata({
  title: 'Free IQ test',
  description:
    'Take the free randomized IQTestReal reasoning assessment and receive an Estimated IQ.',
  path: '/test',
});
export default function TestPage() {
  return (
    <main id="main-content" className="test-page">
      <IQAssessment />
    </main>
  );
}
