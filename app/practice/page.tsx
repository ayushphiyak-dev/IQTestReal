import { SafeLink as Link } from '@/components/SafeLink';
import { pageMetadata } from '@/config/seo';
import { practiceResources } from '@/config/practice';

export const metadata = pageMetadata({
  title: 'Free Reasoning Practice With Worked Answers',
  description:
    'Choose spatial reasoning or pattern recognition practice. Try original questions, reveal step-by-step solutions and print a worksheet with answers. No signup.',
  path: '/practice',
});

export default function PracticeHub() {
  return (
    <main id="main-content">
      <header className="page-header shell">
        <span className="eyebrow">Learn one skill at a time</span>
        <h1>Free reasoning practice with worked answers</h1>
        <p>
          Choose a focused, untimed set. Work through the questions, compare
          your method with the explanations, and use the checking steps on your
          next attempt. No account, payment or IQ label is needed.
        </p>
      </header>
      <section className="article-list shell" aria-label="Practice collections">
        {practiceResources.map((resource) => (
          <Link
            className="article-card"
            key={resource.slug}
            href={`/practice/${resource.slug}`}
          >
            <span className="eyebrow">
              {resource.questions.length} questions · Worked answers
            </span>
            <h2>{resource.skill}</h2>
            <p>{resource.description}</p>
            <span className="text-link">Start this practice set →</span>
          </Link>
        ))}
      </section>
      <section className="policy-prose shell">
        <h2>Choose the right starting point</h2>
        <p>
          Use spatial practice when tracking a corner through a turn or
          reflection feels difficult. Choose patterns when you want to compare
          changes across a sequence. If you are unsure, start with the{' '}
          <Link href="/articles/reasoning-categories-explained">
            five reasoning categories and ten worked puzzles
          </Link>{' '}
          to see how the skills differ.
        </p>
        <h2>Practise for understanding, not a label</h2>
        <p>
          Write a short explanation before revealing the answer. A correct guess
          is a chance to learn a method; a wrong answer is a chance to find the
          exact step that failed. These small sets have no population norms and
          cannot diagnose ability or predict a clinical IQ score.
        </p>
        <h2>Use a printable worksheet</h2>
        <p>
          Each collection has a print layout: use your browser’s Print command
          to create a worksheet, with answers on a separate page. No download
          account or email address is required. Keep the source attribution when
          sharing the worksheet.
        </p>
        <h2>Read a guide or try a mixed session</h2>
        <ul>
          <li>
            <Link href="/articles/logic-puzzles-for-beginners">
              Logic puzzles: facts, possibilities and necessary conclusions
            </Link>
          </li>
          <li>
            <Link href="/articles/number-sequences-explained">
              Number sequences: differences, ratios and alternating rules
            </Link>
          </li>
          <li>
            <Link href="/test">Mixed reasoning practice</Link> and{' '}
            <Link href="/score-guide">how to interpret its results</Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
