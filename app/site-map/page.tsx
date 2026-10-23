import type { Metadata } from 'next';
import { SafeLink as Link } from '@/components/SafeLink';
import { pageMetadata } from '@/config/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Site map',
  description:
    'Browse IQTestReal tests, reasoning practice, articles, score guides, and site policies from one page.',
  path: '/site-map',
});

const sections = [
  {
    title: 'Assessment and learning tools',
    links: [
      ['Free IQ-style reasoning test', '/test'],
      ['How the practice assessment works', '/how-it-works'],
      ['Scoring methodology and limitations', '/methodology'],
      ['Estimated score guide', '/score-guide'],
      ['Reasoning practice and worksheets', '/practice'],
      ['Pattern recognition practice', '/practice/pattern-recognition'],
      ['Spatial reasoning practice', '/practice/spatial-reasoning'],
    ],
  },
  {
    title: 'Articles and answers',
    links: [
      ['All articles and reasoning guides', '/articles'],
      ['Understanding IQ-style scores', '/articles/understanding-iq-scores'],
      [
        'Practice and cognitive performance',
        '/articles/practice-and-cognitive-performance',
      ],
      [
        'Reasoning categories and worked puzzles',
        '/articles/reasoning-categories-explained',
      ],
      ['Reading online IQ test results', '/articles/online-iq-test-results'],
      [
        'Preparing for a reasoning practice test',
        '/articles/how-to-prepare-for-reasoning-test',
      ],
      ['Logic puzzles for beginners', '/articles/logic-puzzles-for-beginners'],
      ['How number sequences work', '/articles/number-sequences-explained'],
      [
        'Pattern recognition and spatial reasoning',
        '/articles/pattern-recognition-spatial-reasoning',
      ],
      ['Memory and processing speed', '/articles/memory-processing-speed'],
      [
        'Online tests compared with clinical evaluations',
        '/articles/online-vs-clinical-iq-tests',
      ],
      ['Frequently asked questions', '/faq'],
    ],
  },
  {
    title: 'About and policies',
    links: [
      ['About IQTestReal', '/about'],
      ['Contact the project maintainer', '/contact'],
      ['Privacy policy', '/privacy-policy'],
      ['Cookie policy and privacy choices', '/cookie-policy'],
      ['Terms of service', '/terms'],
      ['Assessment disclaimer', '/disclaimer'],
      ['Editorial policy', '/editorial-policy'],
    ],
  },
];

export default function SiteMapPage() {
  return (
    <main id="main-content">
      <header className="page-header shell">
        <span className="eyebrow">IQTestReal / Site navigation</span>
        <h1>Find a page or guide.</h1>
        <p>
          Browse the free reasoning practice tools, explanations, and policies.
          IQTestReal provides educational practice and Estimated IQ results; it
          is not a clinical assessment.
        </p>
      </header>
      <nav className="policy-prose shell" aria-label="Site map">
        {sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            <ul>
              {section.links.map(([label, href]) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </nav>
    </main>
  );
}
