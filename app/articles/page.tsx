import type { Metadata } from 'next';
import { SafeLink as Link } from '@/components/SafeLink';
import { pageMetadata } from '@/config/seo';
export const metadata: Metadata = pageMetadata({
  title: 'Reasoning Guides, Logic Puzzles & Score Explanations',
  description:
    'Original IQTestReal blog articles about logic, patterns, numerical reasoning, practice, and responsible score interpretation.',
  path: '/articles',
});
const articles = [
  {
    href: '/articles/understanding-iq-scores',
    title: 'Understanding IQ-style scores without overreading them',
    intro:
      'What a practice-score conversion can communicate—and why it is not a professionally normed IQ score.',
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
  {
    href: '/articles/pattern-recognition-spatial-reasoning',
    title: 'The science behind pattern recognition and spatial reasoning',
    intro:
      'A practical guide to noticing visual relationships, testing a rule, and thinking carefully about what a puzzle can measure.',
  },
  {
    href: '/articles/memory-processing-speed',
    title: 'How memory and processing speed influence test performance',
    intro:
      'See how holding information in mind, pace, attention, and test conditions can affect a short reasoning task.',
  },
  {
    href: '/articles/online-vs-clinical-iq-tests',
    title: 'Online IQ tests vs. clinical evaluations: what is different?',
    intro:
      'Compare informal practice quizzes with standardized assessments, including what each can and cannot tell you.',
  },
];
export default function ArticlesPage() {
  return (
    <main id="main-content">
      <header className="page-header shell">
        <span className="eyebrow">Blog / Learning centre</span>
        <h1>Reasoning guides and worked puzzles</h1>
        <p>
          Original, practical reading to help you understand reasoning tests and
          use their results responsibly.
        </p>
        <p>
          <Link href="/practice">
            Try focused practice with answers and printable worksheets
          </Link>
          , or choose a guide below to learn a method before starting.
        </p>
      </header>
      <section className="policy-prose shell">
        <h2>Choose a guide for the question you have</h2>
        <p>
          If you want to solve a puzzle more carefully, begin with the{' '}
          <Link href="/articles/logic-puzzles-for-beginners">
            logic puzzle guide
          </Link>
          ,{' '}
          <Link href="/articles/number-sequences-explained">
            number sequence walkthrough
          </Link>
          , or{' '}
          <Link href="/articles/pattern-recognition-spatial-reasoning">
            visual reasoning guide
          </Link>
          . Each focuses on observable steps—write down a condition, compare
          transitions, or test a rotation—instead of asking you to accept a
          score label. To understand a result, read{' '}
          <Link href="/articles/understanding-iq-scores">
            the score interpretation article
          </Link>{' '}
          and the <Link href="/methodology">published scoring method</Link>.
        </p>
        <p>
          If you are deciding whether to take a quick online quiz or seek a
          formal evaluation, start with{' '}
          <Link href="/articles/online-vs-clinical-iq-tests">
            the online-versus-clinical comparison
          </Link>
          . For practical exercise sheets, use the separate{' '}
          <Link href="/practice">untimed reasoning practice hub</Link>. These
          resources are written for low-stakes learning; none presents
          IQTestReal results as diagnosis, professional testing, or a
          population-based ranking.
        </p>
      </section>
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
