import type { Metadata } from 'next';
import { SafeLink as Link } from '@/components/SafeLink';
export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Original IQTestReal blog articles about logic, patterns, numerical reasoning, practice, and responsible score interpretation.',
  alternates: { canonical: '/articles' },
};
const articles = [
  {
    href: '/articles/understanding-iq-scores',
    title: 'Understanding IQ-style scores without overreading them',
    intro:
      'What a normalized estimate can communicate—and why context matters more than a single number.',
  },
  {
    href: '/articles/practice-and-cognitive-performance',
    title: 'Practice, familiarity, and cognitive performance',
    intro:
      'Why retakes can help learning while making score comparisons less simple.',
  },
  {
    href: '/articles/reasoning-categories-explained',
    title: 'Reasoning categories and 10 practice puzzles',
    intro:
      'A plain-language guide to logic, pattern, numerical, spatial, and analogy questions with worked examples.',
  },
  {
    href: '/articles/online-iq-test-results',
    title: 'How to read online IQ test results',
    intro:
      'Understand Estimated IQ, percentile, accuracy, and strengths without turning practice into a label.',
  },
  {
    href: '/articles/how-to-prepare-for-reasoning-test',
    title: 'How to prepare for a reasoning test',
    intro:
      'Practical ways to improve focus and familiarity without memorising answers.',
  },
  {
    href: '/articles/logic-puzzles-for-beginners',
    title: 'Logic puzzles for beginners: a step-by-step method',
    intro:
      'Learn how to sort facts, test conditions, and identify conclusions that must follow.',
  },
  {
    href: '/articles/number-sequences-explained',
    title: 'Number sequences: find the rule without guessing',
    intro:
      'Use differences, ratios, alternating rules, and simple checks to solve sequence questions.',
  },
];
export default function ArticlesPage() {
  return (
    <main id="main-content">
      <header className="page-header shell">
        <span className="eyebrow">Blog / Learning centre</span>
        <h1>Better questions about thinking.</h1>
        <p>
          Original, practical reading to help you understand reasoning tests and
          use their results responsibly.
        </p>
      </header>
      <section className="article-list shell">
        {articles.map((article) => (
          <Link className="article-card" href={article.href} key={article.href}>
            <span className="eyebrow">IQTestReal guide</span>
            <h2>{article.title}</h2>
            <p>{article.intro}</p>
            <span className="text-link">Read article →</span>
          </Link>
        ))}
      </section>
    </main>
  );
}

