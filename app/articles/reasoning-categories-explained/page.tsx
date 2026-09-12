import type { Metadata } from 'next';
import { ProsePage } from '@/components/ProsePage';
import { SafeLink as Link } from '@/components/SafeLink';

const title = 'Reasoning Categories Explained: 10 Practice Puzzles';
const description =
  'Learn how logic, pattern, numerical, spatial, and analogy questions work with ten original practice puzzles and clear answer explanations.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/articles/reasoning-categories-explained' },
  openGraph: {
    type: 'article',
    title,
    description,
    url: '/articles/reasoning-categories-explained',
  },
  twitter: { card: 'summary', title, description },
};

export default function ArticlePage() {
  return (
    <ProsePage
      kicker="Article / Reasoning practice"
      title={title}
      intro="Different question types invite different kinds of attention. Use these examples to practise explaining a rule, not to chase a label."
    >
      <p>
        IQTestReal groups its practice questions into five familiar categories.
        The categories are a way to describe the kind of reasoning an item
        invites; they are not separate measures of a person&apos;s intelligence.
        A careful attempt starts by identifying the relationship, writing down
        the evidence, and checking the answer against every part of the prompt.
      </p>

      <h2>Logic</h2>
      <p>
        Logic questions ask what must follow from a set of statements. Track
        only what is given and avoid adding assumptions. Separate facts from
        possibilities: if a statement says that every blue card is large, it
        does not say that every large card is blue. Translate the wording into a
        small list or diagram, then test each answer against the complete set of
        conditions. The correct option is the one that must be true, not merely
        the one that could be true.
      </p>
      <h2>Pattern recognition</h2>
      <p>
        Pattern questions look for a repeatable transformation. Compare adjacent
        steps and ask whether the change is a movement, a count, an alternation,
        a rotation, or a combination of rules. Check the rule across the entire
        sequence. A rule that explains the first two transitions but fails on
        the last one is not a reliable rule. When symbols are involved, describe
        their position and orientation in words before looking at the choices.
      </p>
      <h2>Numerical reasoning</h2>
      <p>
        Numerical questions use arithmetic, ratios, averages, percentages, and
        simple equations. Estimate the likely size of the answer before
        calculating so that an accidental decimal or sign error is easier to
        spot. Keep units visible and write the relationship before substituting
        numbers. For a percentage, decide whether it is a part of a whole or a
        percentage-point change. For an average, remember that a total divided
        by a count is different from adding the values.
      </p>
      <h2>Spatial thinking</h2>
      <p>
        Spatial questions ask you to imagine rotation, symmetry, folding, or
        three-dimensional structure. Slow down and picture the transformation
        one step at a time. Pick a distinctive corner or mark and track where it
        moves. For rotations, keep the direction consistent; for reflections,
        remember that the order reverses. A quick sketch is often more reliable
        than holding every detail in working memory.
      </p>
      <h2>Analogy</h2>
      <p>
        Analogy questions compare relationships, not just words. First describe
        the relationship in the opening pair, then find the option that
        preserves it. “A is used to cut B” is more precise than simply saying
        the two words are related. Check grammar and direction: if the first
        relationship is an action performed by one object on another, the second
        pair should preserve that direction. The best strategy across all five
        categories is to make the rule explicit, test it, and reject answers
        that require an extra assumption.
      </p>

      <h2>Ten practice puzzles with answers</h2>
      <p>
        These short examples are deliberately transparent. Try each one before
        reading its explanation, then write down the rule in your own words. The
        goal is to make your checking process clearer, not to claim that a
        puzzle score measures your full ability.
      </p>

      <h3>1. A necessary conclusion</h3>
      <p>
        <strong>Puzzle:</strong> Every red card is large. This card is red. What
        must be true?
      </p>
      <p>
        <strong>Answer:</strong> This card is large. The conclusion follows
        directly from the first statement and does not require any extra
        information about other large cards.
      </p>

      <h3>2. Ordering conditions</h3>
      <p>
        <strong>Puzzle:</strong> Mina arrives before Noor, and Noor arrives
        before Ravi. Who arrives last?
      </p>
      <p>
        <strong>Answer:</strong> Ravi. Combining the two conditions gives the
        order Mina, Noor, Ravi. No assumption about arrival times is needed.
      </p>

      <h3>3. Doubling pattern</h3>
      <p>
        <strong>Puzzle:</strong> What comes next: 2, 4, 8, 16, ___?
      </p>
      <p>
        <strong>Answer:</strong> 32. Each term is twice the previous term.
        Checking every transition avoids choosing a rule that only fits the
        first pair.
      </p>

      <h3>4. Rotating direction</h3>
      <p>
        <strong>Puzzle:</strong> An arrow points up. The page is rotated 90
        degrees clockwise. Which way does the arrow point?
      </p>
      <p>
        <strong>Answer:</strong> Right. Imagine the top edge moving to the right
        side; the arrow follows the same rotation.
      </p>

      <h3>5. Percentage of a whole</h3>
      <p>
        <strong>Puzzle:</strong> What is 15% of 80?
      </p>
      <p>
        <strong>Answer:</strong> 12. Ten percent of 80 is 8 and five percent is
        4, so the two parts add to 12. Estimating those parts also provides a
        quick check.
      </p>

      <h3>6. A simple average</h3>
      <p>
        <strong>Puzzle:</strong> What is the average of 6, 10, and 14?
      </p>
      <p>
        <strong>Answer:</strong> 10. Add the values to get 30, then divide by
        the three values. The middle value is also 10 here, but the
        sum-and-count method is the dependable rule.
      </p>

      <h3>7. Folding and layers</h3>
      <p>
        <strong>Puzzle:</strong> A square sheet is folded in half, then folded
        in half again. One hole is punched away from the fold edges. How many
        holes appear when the sheet is opened?
      </p>
      <p>
        <strong>Answer:</strong> Four. The two folds make four layers at the
        punch location, so the single punch is copied once per layer.
      </p>

      <h3>8. Symmetry check</h3>
      <p>
        <strong>Puzzle:</strong> A perfectly symmetrical circle is reflected in
        a mirror. What changes about its outline?
      </p>
      <p>
        <strong>Answer:</strong> Nothing about the outline changes. A circle
        looks the same after reflection; noticing that no orientation clue
        exists is the important step.
      </p>

      <h3>9. Relationship in an analogy</h3>
      <p>
        <strong>Puzzle:</strong> Thermometer is to temperature as clock is to
        ___?
      </p>
      <p>
        <strong>Answer:</strong> Time. A thermometer measures temperature, while
        a clock measures time. The relationship is “instrument used to measure a
        quantity.”
      </p>

      <h3>10. Action and object</h3>
      <p>
        <strong>Puzzle:</strong> Book is to read as song is to ___?
      </p>
      <p>
        <strong>Answer:</strong> Listen. Reading is the usual action applied to
        a book, and listening is the corresponding action for a song. Keeping
        the direction of the relationship consistent prevents a vague answer
        such as “music.”
      </p>

      <h2>How to use this practice</h2>
      <p>
        Review the explanation even when your answer was correct. Ask whether
        you found the rule, made a lucky guess, or used a shortcut that would
        fail on a changed example. For numerical items, check units and
        arithmetic. For spatial items, sketch the movement. For logic and
        analogy items, state the relationship in a complete sentence. This
        creates a useful learning note without turning a practice result into a
        permanent label.
      </p>
      <p>
        For the assessment&apos;s scoring model and limitations, read the{' '}
        <Link href="/score-guide">Score Guide</Link>. To see how question
        selection and explanations work, visit{' '}
        <Link href="/how-it-works">How It Works</Link>. When you are ready, you
        can try a fresh <Link href="/test">free reasoning practice test</Link>.
        IQTestReal is not a clinical or diagnostic instrument, and an online
        practice result should not be used for admissions, employment, medical,
        legal, or other high-stakes decisions.
      </p>
    </ProsePage>
  );
}
