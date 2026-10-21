import { PracticeResource } from '@/components/PracticeResource';
import { practiceResources } from '@/config/practice';
import { pageMetadata } from '@/config/seo';

const resource = practiceResources.find(
  (item) => item.slug === 'pattern-recognition',
)!;
export const metadata = pageMetadata({
  title: resource.title,
  description: resource.description,
  path: `/practice/${resource.slug}`,
});

export default function PatternRecognitionPractice() {
  return <PracticeResource resource={resource} />;
}
