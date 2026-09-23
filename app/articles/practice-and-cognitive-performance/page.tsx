import type { Metadata } from 'next';
import { ProsePage } from '@/components/ProsePage';
import { SafeLink as Link } from '@/components/SafeLink';
import { pageMetadata } from '@/config/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Practice and cognitive performance',
  description:
    'Learn how practice, familiarity and testing conditions affect online reasoning performance.',
  path: '/articles/practice-and-cognitive-performance',
  type: 'article',
});
export default function ArticlePage() {
  return (
    <ProsePage
      kicker="Article / Practice"
      title="Practice, familiarity, and cognitive performance"
      intro="Retaking a test can teach you something, but not always what you think."
      path="/articles/practice-and-cognitive-performance"
      schemaType="article"
    >
      <h2>Practice changes the task</h2>
      <p>
        When you see a format more than once, you learn its conventions. You may
        recognize how a sequence is usually presented, how answer choices are
        worded, or where a distractor is likely to appear. That can improve
        performance through familiarity even if the underlying skill has not
        changed by the same amount. This is not a problem; learning how to
        approach a problem is one of the reasons to practise. It does mean that
        scores from repeated attempts should not be treated as independent
        measurements.
      </p>
      <p>
        Performance also changes with ordinary conditions. A quiet room,
        adequate sleep, a familiar keyboard, and enough time can make it easier
        to show your reasoning. Stress, illness, interruptions, language load,
        or an unfamiliar visual format can make the same reasoning feel harder.
        Record those conditions when reviewing a result so that you do not
        mistake context for a permanent ability.
      </p>
      <h2>Use retakes for learning</h2>
      <p>
        Review explanations before starting another set. For each missed item,
        write down the rule you overlooked and the check that would have caught
        the mistake. In a numerical problem, that might be estimating the answer
        before calculating. In a pattern problem, it might be checking whether
        the rule works on every transition rather than only the first two. In an
        analogy, it might be stating the relationship in a complete sentence.
      </p>
      <p>
        Wait long enough that you are solving new problems rather than
        remembering answers. A randomized assessment helps, but it cannot remove
        every familiarity effect. Compare category patterns and methods instead
        of chasing a single larger number. A short reflection is often more
        useful than an immediate retake.
      </p>
      <h2>Worked reflection: name the changed step</h2>
      <p>
        Suppose you miss a number sequence because you checked only the first
        pair of terms. A useful review note is: “I assumed addition after one
        change; next time I will write every difference and test the rule from
        the first term to the last.” That note describes a method you can carry
        into a new question instead of preserving the answer to an old one.
      </p>
      <h2>Build transferable habits</h2>
      <p>
        Good practice makes strategies portable. Ask what changes, what stays
        constant, and what evidence would disprove your first idea. Sketch a
        rotation, create a small table, or eliminate an option that violates the
        prompt. Explain the solution in your own words. These habits support
        everyday reasoning because they encourage checking assumptions and
        communicating evidence, not because they train a particular quiz.
      </p>
      <h2>Keep the stakes low</h2>
      <p>
        Short online practice tests are educational tools. They can help you
        notice preferences, practise attention, and find topics to explore, but
        they do not replace a qualified professional assessment when a formal
        evaluation is needed. Avoid using an online estimate for school
        placement, hiring, medical decisions, or legal claims. A healthy retake
        leaves you with one clear next step and a realistic understanding of
        what the result can and cannot say.
      </p>
      <p>
        Practise with the{' '}
        <Link href="/articles/reasoning-categories-explained">
          reasoning categories guide
        </Link>{' '}
        and then try a fresh <Link href="/test">randomized practice set</Link>.
      </p>
    </ProsePage>
  );
}
