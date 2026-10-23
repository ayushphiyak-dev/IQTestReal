import type { Metadata } from 'next';
import { ProsePage } from '@/components/ProsePage';
import { SafeLink as Link } from '@/components/SafeLink';
import { pageMetadata } from '@/config/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Understanding IQ-style scores',
  description:
    'Understand Estimated IQ, percentiles and uncertainty without treating an online practice result as a diagnosis.',
  path: '/articles/understanding-iq-scores',
  type: 'article',
});
export default function ArticlePage() {
  return (
    <ProsePage
      kicker="Article / Score literacy"
      title="Understanding IQ-style scores without overreading them"
      intro="A useful score explains one task. It cannot summarize an entire person."
      path="/articles/understanding-iq-scores"
      schemaType="article"
    >
      <h2>A score is a model, not a measurement of a whole person</h2>
      <p>
        An IQ-style score puts your answers on a scale. This can make a result
        easier to discuss, but a short quiz cannot measure all of a
        person&apos;s thinking. The result depends on the questions, the skills
        they cover, how many there are, and how you felt while taking the test.
        It tells you about one set of tasks at one point in time.
      </p>
      <p>
        A responsible site explains how it makes a score. IQTestReal calls its
        result <em>Estimated IQ</em>. It is a practice score, not a clinical
        diagnosis or a score tested against a large group of people. The word
        “estimated” matters. Another set of questions may give you a different
        result.
      </p>
      <h2>Why the middle is not a verdict</h2>
      <p>
        People can get different results because of sleep, focus, language, or
        how well they know the test. One hard question can also make a
        difference. The same person may do better or worse on another day. A
        high score does not promise success in every setting. A lower score does
        not set a limit on what someone can learn. Practice, knowledge, support,
        and the test conditions all matter.
      </p>
      <p>
        Percentiles need context too. A percentile places a score on a chosen
        comparison scale. It does not always show how you compare with the wider
        public. A small sample or many practice tries can make a result look
        more exact than it is. Use the explanation as a guide, not as a ranking
        of people.
      </p>
      <h2>Read the details alongside the headline</h2>
      <p>
        Start with how many questions you answered and got right. Then review
        each category. If patterns felt easier than shape problems, you could
        practise shapes next. But one unclear question or a brief distraction
        may explain the gap. Read the answer notes. Ask if you used a clear
        method or made a lucky guess. Choose one rule or check to use next time.
      </p>
      <h2>Worked review: turn a result into a question</h2>
      <p>
        Say your overall estimate stays the same, but you miss more shape
        questions. Do not treat this as a fixed ability. Read an explanation.
        Maybe you turned the shape the wrong way or missed a corner. Write down
        that step and practise it. The goal is to learn a useful habit, not to
        give yourself a label based on one try.
      </p>
      <h2>How to use a result responsibly</h2>
      <p>
        Use your result to choose what to practise. Which questions felt easy?
        Which answer note gave you a new idea? Write a short note after the
        test. Come back later and try a fresh set. Compare what you learned, not
        small changes in your score.
      </p>
      <p>
        Do not use an online practice result for admissions, employment,
        medical, legal, or other high-stakes decisions. When a formal evaluation
        is needed, choose a qualified professional and ask how the assessment is
        normed and interpreted. A careful score guide protects readers by
        explaining both what a test can offer and where its boundaries are.
      </p>
      <p>
        For the calculation details, read the{' '}
        <Link href="/score-guide">IQTestReal score guide</Link>. To review a
        complete attempt, see{' '}
        <Link href="/articles/online-iq-test-results">
          how to read online test results
        </Link>{' '}
        before trying a fresh <Link href="/test">reasoning practice test</Link>.
      </p>
    </ProsePage>
  );
}
