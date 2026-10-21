import type { Metadata } from 'next';
import { ProsePage } from '@/components/ProsePage';
import { pageMetadata } from '@/config/seo';
import { SafeLink as Link } from '@/components/SafeLink';
export const metadata: Metadata = pageMetadata({
  title: 'Score Guide: Practice Accuracy, Estimates & Limitations',
  description:
    'See how IQTestReal converts practice accuracy into an estimate, why its percentile is not a population ranking, and how to use answer explanations to practise.',
  path: '/score-guide',
});
export default function ScoreGuidePage() {
  return (
    <ProsePage
      kicker="Score guide / Transparent model"
      title="Understand your IQTestReal practice results"
      intro="IQTestReal uses a simple, visible conversion so you can understand what your result represents."
    >
      <h2>Estimated IQ</h2>
      <p>
        We begin with accuracy and map it to an IQ-style estimate centered
        around 100: <code>100 + (accuracy − 50) × 0.6</code>, bounded between 70
        and 130. This is a practice model, not a clinical or standardized IQ
        conversion.
      </p>
      <h2>Percentile</h2>
      <p>
        The percentile is an approximate reference point for the Estimated IQ
        bands. It is not calculated from a representative IQTestReal population
        sample and should not be treated as a normative ranking.
      </p>
      <h2>Classification</h2>
      <p>
        Results are described as Below average, Low average, Average, High
        average, or Above average. These labels describe this practice estimate
        only.
      </p>
      <h2>Accuracy and category strengths</h2>
      <p>
        Accuracy is the share of answers you got right. Category bars show
        accuracy across logic, pattern, numerical, spatial, and analogy
        questions. With only three items per category, a single answer can move
        a bar substantially.
      </p>
      <h2>What it cannot tell you</h2>
      <p>
        The test does not measure creativity, judgment, knowledge, personality,
        learning potential, or medical conditions. Never use it for employment,
        admissions, diagnosis, treatment, or legal decisions.
      </p>
      <h2>A worked score example</h2>
      <p>
        With 12 correct answers out of 15, accuracy is 80%. The conversion gives
        100 + (80 − 50) × 0.6 = 118. That number describes this model; it does
        not establish a professional IQ of 118 or your rank among people of the
        same age. A different question set or a familiar question can change the
        result.
      </p>
      <h2>Choose a useful next step</h2>
      <p>
        Start with the explanation for one missed question and identify the step
        you would change. Try{' '}
        <Link href="/practice/spatial-reasoning">
          spatial reasoning practice
        </Link>{' '}
        for rotations and reflections, or{' '}
        <Link href="/practice/pattern-recognition">
          pattern recognition practice
        </Link>{' '}
        for sequences and repeated rules. These sets focus on solutions rather
        than an IQ label.
      </p>
      <p>
        Read the{' '}
        <Link href="/methodology">
          complete scoring methodology and limitations
        </Link>
        , or{' '}
        <Link href="/articles/online-iq-test-results">
          how to review an online practice result
        </Link>{' '}
        for a step-by-step review routine.
      </p>
    </ProsePage>
  );
}
