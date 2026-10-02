import type { Metadata } from 'next';
import { ProsePage } from '@/components/ProsePage';
import { SafeLink as Link } from '@/components/SafeLink';
import { pageMetadata } from '@/config/seo';
export const metadata: Metadata = pageMetadata({
  title: 'Methodology',
  description:
    'A detailed explanation of IQTestReal’s question selection, scoring formula, category feedback, privacy model, and non-clinical limitations.',
  path: '/methodology',
});
export default function MethodologyPage() {
  return (
    <ProsePage
      kicker="Methodology / Transparent by design"
      title="Know how the estimate is made."
      intro="IQTestReal uses a balanced, randomized practice set and a visible scoring model. This page explains each step so you can decide whether the result is useful for your own practice."
    >
      <p>
        IQTestReal is an educational reasoning practice tool. It is designed to
        give you a short, understandable exercise across several question types,
        then show how your answers map to the estimate used by this site. The
        method is intentionally visible: you can inspect the categories, read
        explanations, and understand why the number is called an Estimated IQ.
        It is not a professionally normed IQ examination, diagnosis, school
        placement test, or measure for employment, health, legal, or other
        high-stakes decisions.
      </p>

      <h2>Five categories</h2>
      <p>
        Every attempt includes three questions from logic, pattern, numerical,
        spatial, and analogy reasoning. Logic asks you to preserve conditions
        and identify what must follow. Pattern items ask you to compare visual
        or symbolic changes. Numerical questions use quantities, proportions,
        and sequences. Spatial items ask you to track position or rotation.
        Analogy questions ask you to transfer a relationship from one pair to
        another. A mixed set gives you more useful practice feedback than a
        single puzzle type, while still leaving room for skills this short
        format cannot cover.
      </p>

      <h2>How one attempt is assembled</h2>
      <p>
        A normal attempt contains 15 questions: three from each of the five
        categories. The question bank contains more items than a single attempt,
        so a new session can present a different combination. The selection is
        randomized within each category and duplicate question IDs are excluded
        from the same attempt. Answer choices are shuffled after an item is
        selected, while the correct answer remains attached to its explanation.
        Randomization makes practice less repetitive; it does not turn the
        exercise into a population-normed assessment.
      </p>

      <h2>How the score is calculated</h2>
      <p>
        The site counts correct answers and divides by the number of questions
        answered. It then applies a simple transparent conversion:{' '}
        <code>100 + (accuracy − 50) × 0.6</code>. The result is bounded to the
        displayed range of 70–130 so that a short practice attempt does not
        present extreme precision. For example, 12 correct answers out of 15
        gives 80% accuracy. The conversion is{' '}
        <code>100 + (80 − 50) × 0.6 = 118</code>, before display rounding.
        Showing the arithmetic is more honest than presenting a mysterious
        accuracy claim, but it does not make the estimate equivalent to a
        professionally administered IQ score.
      </p>
      <p>
        Percentile bands and category strengths are supporting feedback from the
        same model. They describe this attempt, not a representative population.
        A category with one missed question can look weaker because the sample
        is small. Review the answer explanation and the conditions of the
        attempt before deciding what to practise next.
      </p>

      <h2>Why the estimate has limits</h2>
      <p>
        A brief browser session cannot measure every form of thinking. Results
        can be affected by language, vision, device size, familiarity with the
        format, fatigue, attention, anxiety, accessibility settings, and the
        environment in which you work. The question bank is authored for
        practice rather than calibrated against a representative sample. That is
        why IQTestReal uses “Estimated IQ” and explains the limits close to the
        result. If you need an evaluation for a specific decision, ask a
        qualified professional which assessment is appropriate.
      </p>

      <h2>How to use the result well</h2>
      <ol>
        <li>
          Take the attempt under ordinary, comfortable conditions and note any
          unusual distractions or accessibility changes.
        </li>
        <li>
          Read the explanation for every item, including correct guesses. Write
          down the rule, relationship, or checking step you want to remember.
        </li>
        <li>
          Choose one category to practise rather than treating the overall
          number as a label. A later attempt may differ because the questions
          and your conditions differ.
        </li>
        <li>
          Use a qualified professional for clinical, educational, employment,
          medical, or legal decisions.
        </li>
      </ol>

      <h2>Question writing and review</h2>
      <p>
        Each question is written for the IQTestReal bank with an intended
        reasoning skill, an answer key, and an explanation. Before publication,
        the wording and arithmetic are checked for ambiguity, accidental clues,
        more than one defensible answer, and dependence on specialist cultural
        knowledge. If a question or explanation is unclear, use the{' '}
        <Link href="/contact">contact form</Link> with the page and item
        details. The <Link href="/editorial-policy">editorial policy</Link>{' '}
        explains how corrections and content reviews are handled.
      </p>

      <h2>Privacy and local history</h2>
      <p>
        No account is required. Completed attempts and dashboard history are
        stored in local browser storage on the device you use; clearing that
        storage removes the local history. Read the{' '}
        <Link href="/privacy-policy">Privacy Policy</Link> and{' '}
        <Link href="/cookie-policy">Cookie Policy</Link> for current data
        details. Advertising and analytics are consent-gated and should remain
        separate from answer choices and submission controls.
      </p>

      <h2>Continue reading</h2>
      <p>
        See <Link href="/how-it-works">how the assessment works</Link> for a
        quick-start overview, the <Link href="/score-guide">Score Guide</Link>{' '}
        for result bands, or{' '}
        <Link href="/articles/reasoning-categories-explained">
          the reasoning categories guide
        </Link>{' '}
        for worked practice puzzles. When you are ready, try a{' '}
        <Link href="/test">fresh randomized practice session</Link>.
      </p>
    </ProsePage>
  );
}
