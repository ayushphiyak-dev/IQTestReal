import type { Metadata } from 'next';
import { SafeLink as Link } from '@/components/SafeLink';
import { ProsePage } from '@/components/ProsePage';

export const metadata: Metadata = {
  title: 'Editorial policy',
  description: 'Read how IQTestReal creates, reviews and corrects its educational content.',
  alternates: { canonical: '/editorial-policy' },
};
export default function EditorialPolicyPage() { return <ProsePage kicker="Policy / Editorial" title="How IQTestReal earns trust." intro="Our educational content and question bank follow a small set of public standards."><h2>Original work</h2><p>Questions, explanations, guides, and interface copy are written for IQTestReal. We do not present copied test items as our own or fabricate research, testimonials, statistics, credentials, or outcomes. Each article is drafted for this site, checked for clarity, and revised by the editorial team before publication.</p><h2>Accuracy and review</h2><p>Question answers are checked against their stated reasoning. Pages are reviewed for clear language, accessibility, responsible claims, and useful context. We do not offer medical, educational-placement, employment, or financial decisions from an online practice score.</p><h2>Safe, useful publishing</h2><p>IQTestReal does not publish adult, hateful, violent, dangerous, pirated, or illegal material. We do not scrape or spin other sites. External references are linked when they help readers learn more, while our explanations and examples remain original and written for this audience.</p><h2>Corrections</h2><p>If you find an ambiguous question, broken link, accessibility issue, or factual error, please <Link href="/contact">contact us</Link> with the page and a description. We record material corrections and update affected explanations.</p><h2>Commercial independence</h2><p>IQTestReal is free. Advertising remains disabled until configured and reviewed. Ads must never appear beside answer choices, navigation controls, or submission controls.</p></ProsePage>; }


