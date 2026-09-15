import type { Metadata } from 'next';
import { SafeLink as Link } from '@/components/SafeLink';
import { ProsePage } from '@/components/ProsePage';

export const metadata: Metadata = {
  title: 'Number Sequences: How to Find the Rule Without Guessing',
  description:
    'Learn a practical way to solve number-sequence questions using differences, ratios, alternating rules, cycles, and simple checks.',
  alternates: { canonical: '/articles/number-sequences-explained' },
};

export default function NumberSequencesArticle() {
  return (
    <ProsePage
      kicker="Blog / Numerical reasoning"
      title="Number sequences: find the rule without guessing"
      intro="A good sequence rule explains every visible step. Start with the simplest change, then test it before reaching for a complicated formula."
    >
      <p>
        Number-sequence questions ask you to predict what comes next or fill a
        missing value. The useful skill is not memorising a list of patterns; it
        is learning how to inspect the changes between terms. Begin with
        subtraction, then try multiplication or division, and only after that
        consider alternating or layered rules. Estimate the expected size of the
        next number so that arithmetic mistakes are easier to catch.
      </p>

      <h2>Start with consecutive differences</h2>
      <p>
        Subtract each term from the next. For <strong>4, 9, 14, 19</strong>, the
        differences are
        <strong>+5, +5, +5</strong>, so the next term is 24. This is an
        arithmetic sequence: the same amount is added each time. Differences are
        a strong first check because they are quick and do not require you to
        guess the name of a pattern.
      </p>

      <h2>Try ratios when the numbers grow quickly</h2>
      <p>
        If subtraction does not reveal a fixed change, divide one term by the
        previous term when the division is exact or easy to recognise. In{' '}
        <strong>3, 6, 12, 24</strong>, each value is doubled, so the next term
        is 48. A ratio pattern can also use a fixed fraction, such as halving,
        or a repeated multiplier followed by a simple adjustment. Always check
        more than one transition; a rule that fits only the last pair is not
        enough.
      </p>

      <h2>Look for alternating rules</h2>
      <p>
        Some sequences use two simple rules in turn. In{' '}
        <strong>2, 5, 10, 13, 26</strong>, the operations alternate between “add
        3” and “multiply by 2”: 2 + 3 = 5, 5 × 2 = 10, 10 + 3 = 13, and 13 × 2 =
        26. The next operation is “add 3,” giving 29. If a sequence looks
        inconsistent, split it into odd-position and even-position terms and
        inspect each smaller sequence.
      </p>

      <h2>Recognise common families carefully</h2>
      <p>
        Squares and cubes are frequent because they are easy to explain. The
        sequence
        <strong>1, 4, 9, 16</strong> contains 1², 2², 3², and 4², so the next
        term is 25. Triangular numbers grow by consecutive differences: 1, 3, 6,
        10, 15 has differences +2, +3, +4, and +5. Familiar families are useful
        clues, but do not choose one just because it looks familiar. Confirm
        that it accounts for every term shown.
      </p>

      <h2>Worked example: a rule with an adjustment</h2>
      <p>
        Consider <strong>2, 5, 11, 23</strong>. The differences are 3, 6, and
        12, which double each time. Another description is “multiply by 2, then
        add 1”: 2 × 2 + 1 = 5, 5 × 2 + 1 = 11, and 11 × 2 + 1 = 23. Applying the
        same rule gives 23 × 2 + 1 = 47. The second description is useful
        because it shows exactly how to calculate the next term and makes the
        check easy.
      </p>

      <h2>When two rules seem possible</h2>
      <p>
        Short sequences can support more than one mathematical rule. In a
        practice question, prefer the simplest rule that fits every term and
        matches the answer choices. Do not invent a hidden condition solely to
        force one option. If the prompt provides a visual layout, row and column
        relationships may matter more than reading the numbers in one line.
        Write down the proposed rule and test it from the first transition to
        the last one.
      </p>

      <h2>Common mistakes and useful checks</h2>
      <ul>
        <li>
          <strong>Checking only the first two terms:</strong> a rule must
          explain the whole sequence.
        </li>
        <li>
          <strong>Mixing operations:</strong> write the operation between every
          pair so you do not skip a step.
        </li>
        <li>
          <strong>Ignoring scale:</strong> an answer that is larger than
          expected may signal a multiplication error.
        </li>
        <li>
          <strong>Overfitting:</strong> prefer a short, repeatable rule over a
          custom formula for each term.
        </li>
        <li>
          <strong>Forgetting position:</strong> alternate rules often become
          clear when odd and even terms are separated.
        </li>
      </ul>

      <h2>Use explanations to build a reusable habit</h2>
      <p>
        After solving a sequence, explain the rule in one sentence and calculate
        the next term again without looking at your first result. That second
        pass checks both the method and the arithmetic. You can explore more
        category examples in the
        <Link href="/articles/reasoning-categories-explained">
          {' '}
          reasoning categories guide
        </Link>
        , read
        <Link href="/how-it-works"> how the assessment works</Link>, or try a
        fresh
        <Link href="/test"> randomized reasoning practice test</Link>.
        IQTestReal reports an Estimated IQ for this question set as an
        educational result, not a clinical or definitive measure of ability.
      </p>

      <h2>Key takeaway</h2>
      <p>
        Inspect differences first, ratios second, and alternating or familiar
        families next. The best sequence solution is the one you can state
        clearly and verify across every term—not the one that merely produces a
        plausible next number.
      </p>
    </ProsePage>
  );
}

