import { SafeLink as Link } from '@/components/SafeLink';

/** Long-form, practical guidance that makes the homepage useful beyond the test itself. */
export function HomeEducation() {
  return (
    <section className="home-education" aria-labelledby="reasoning-guide-title">
      <div className="section-heading">
        <div>
          <span className="eyebrow">A practical reasoning guide</span>
          <h2 id="reasoning-guide-title">How to get more from every question</h2>
        </div>
        <p>
          A score is only the beginning. The most useful part of a short reasoning assessment is the
          habit of noticing how you think, checking an assumption, and trying a clearer method next time.
        </p>
      </div>

      <div className="learning-grid">
        <article>
          <h3>1. Start with the constraints</h3>
          <p>
            Before calculating, read the question once for its limits. Words such as “only,” “must,”
            “except,” and “at least” change what counts as a valid answer. In a logic puzzle, write down
            each definite fact and separate it from a possibility. This small pause prevents a common
            mistake: solving an easier problem that was not actually asked. If two statements appear to
            conflict, look for the exact condition that applies to both instead of guessing which one to
            ignore. Good reasoning is often less about speed than about preserving the rules while you work.
          </p>
        </article>

        <article>
          <h3>2. Compare changes in a pattern</h3>
          <p>
            Pattern questions become easier when you describe the change in plain language. Ask whether
            a shape rotates, grows, alternates, mirrors, or moves by a fixed number of places. For numbers,
            check simple differences, ratios, and alternating operations before searching for a complicated
            formula. Test a proposed rule against every visible step, not just the first two. If one step
            breaks the rule, the pattern may use two interleaved sequences or a repeating cycle. Sketching
            the sequence or marking odd and even positions can turn visual noise into a manageable set of
            observations. The goal is a rule that explains the whole sequence with the fewest assumptions.
          </p>
        </article>

        <article>
          <h3>3. Estimate before you calculate</h3>
          <p>
            Numerical reasoning does not require racing through arithmetic. First estimate the size of the
            answer: should it be closer to ten, one hundred, or one thousand? Convert familiar percentages
            into fractions, simplify numbers before multiplying, and use an answer choice to work backward
            when that is quicker. Estimation is also a useful error check. If a result is larger than both
            quantities being multiplied, or a percentage answer exceeds the original total without a reason,
            revisit the operation. Showing a short line of working in your notes makes it easier to find the
            exact step that went wrong and builds a method you can reuse outside an online test.
          </p>
        </article>

        <article>
          <h3>4. Rotate one feature at a time</h3>
          <p>
            Spatial items often combine several changes: orientation, position, colour, or the number of
            marks. Isolate them. Imagine placing a finger on one corner and follow where that corner travels
            after a quarter-turn or a reflection. If the figure is busy, label a distinctive edge or count
            the spaces between marks. Mental rotation gets more reliable when you check a second feature,
            such as the longest side, before committing to an option. You can also use the answer choices as
            evidence: eliminate figures with the wrong orientation first, then compare the remaining details.
            This turns a vague visual impression into a sequence of small, testable comparisons.
          </p>
        </article>

        <article>
          <h3>5. State the relationship in an analogy</h3>
          <p>
            An analogy is about the relationship between two things, not merely their topic. Complete the
            first pair in a sentence such as “a thermometer measures temperature,” then apply that same
            sentence structure to the second pair. Notice direction: a key opens a lock, while a lock does
            not open a key. If several answers look related, prefer the one that preserves the action,
            order, and level of specificity. This approach works for words, symbols, and everyday concepts.
            It also helps you explain an answer clearly, which is more valuable for learning than memorising
            a single choice.
          </p>
        </article>

        <article>
          <h3>Prepare a fair, calm attempt</h3>
          <p>
            Choose a quiet ten-to-twelve-minute window, close distracting tabs, and keep paper nearby for
            notes. Read each prompt fully, but do not spend several minutes defending a single guess. The
            timer is a description of this session, not a measure of your worth. If you are unsure, mark the
            best answer, continue, and return when the test allows it. Language, fatigue, screen size,
            accessibility needs, and familiarity with puzzle conventions can all influence performance. A
            fair attempt means using the support you normally need and interpreting the outcome with those
            conditions in mind.
          </p>
        </article>

        <article>
          <h3>Review mistakes as useful data</h3>
          <p>
            After submitting, read the explanation for every missed item, not only the questions that felt
            difficult. Write one sentence about the clue you overlooked or the operation you applied. Group
            those notes by category: perhaps numerical questions need slower estimation, while spatial items
            need a sketch. On a later attempt, practise one habit at a time and compare the quality of your
            reasoning, not just the headline number. Repeated practice can make a score familiar, so retakes
            should be treated as learning sessions rather than independent measurements.
          </p>
        </article>

        <article>
          <h3>Keep an Estimated IQ in perspective</h3>
          <p>
            IQTestReal reports an Estimated IQ from this question set using a transparent, normalized model.
            It is not a clinical diagnosis, a school placement decision, or a prediction of a person’s future.
            Percentile and classification labels add context to one session, but they do not capture creativity,
            persistence, communication, practical knowledge, or every way people solve problems. Use the result
            to choose a next question, article, or study habit. If you need an assessment for education,
            employment, or health decisions, speak with a qualified professional who can use a validated test
            and interpret it with your circumstances.
          </p>
        </article>

        <article>
          <h3>Continue with a clear next step</h3>
          <p>
            Learning works best as a loop: attempt, explain, practise, and reflect. Start with the
            <Link href="/score-guide"> score guide</Link> to understand accuracy and percentiles, then choose
            an <Link href="/articles">original reasoning article</Link> that matches a category you want to
            explore. You can return to the <Link href="/test">free IQ-style test</Link> whenever you are ready.
            There is no account requirement, and your local history stays on your device. Take your time,
            keep the rules visible, and let curiosity—not a label—drive the next attempt.
          </p>
        </article>
      </div>
    </section>
  );
}

