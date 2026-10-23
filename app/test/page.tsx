import type { Metadata } from 'next';
import { SafeLink as Link } from '@/components/SafeLink';
import { IQAssessment } from '@/components/IQAssessment';
import { pageMetadata } from '@/config/seo';
import { siteConfig } from '@/config/site';
export const metadata: Metadata = pageMetadata({
  title: 'Free IQ test',
  description:
    'Take the free randomized IQTestReal reasoning assessment and receive an Estimated IQ.',
  path: '/test',
});
export default function TestPage() {
  const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'IQTestReal Free Reasoning Practice Test',
    url: `${siteConfig.siteUrl}/test`,
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Any device with a modern web browser',
    isAccessibleForFree: true,
    description:
      'A free, non-clinical practice assessment with randomized logic, pattern, numerical, spatial, and analogy questions and answer explanations.',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.siteName,
      url: siteConfig.siteUrl,
    },
  };
  const quizSchema = {
    '@context': 'https://schema.org',
    '@type': 'Quiz',
    name: 'IQTestReal reasoning practice assessment',
    url: `${siteConfig.siteUrl}/test`,
    educationalUse: 'practice',
    isAccessibleForFree: true,
    about: [
      'logic reasoning',
      'pattern recognition',
      'numerical reasoning',
      'spatial reasoning',
      'analogies',
    ],
    creator: {
      '@type': 'Organization',
      name: siteConfig.siteName,
      url: siteConfig.siteUrl,
    },
  };
  return (
    <main id="main-content" className="test-page">
      <div className="test-ambient" aria-hidden="true">
        <span className="ambient-orb ambient-orb-one" />
        <span className="ambient-orb ambient-orb-two" />
        <span className="ambient-line ambient-line-one" />
        <span className="ambient-line ambient-line-two" />
      </div>
      <IQAssessment />
      <article className="policy-prose shell test-education">
        <header>
          <span className="eyebrow">
            About this free reasoning practice test
          </span>
          <h2>A useful exercise, with its method and limits in view</h2>
          <p>
            IQTestReal is a browser-based practice tool for exploring several
            kinds of reasoning. It is designed to make the activity, score
            calculation, and answer explanations understandable—not to imitate a
            clinical examination or label a person with one number. Take the
            questions for curiosity and learning, then use the review to decide
            what you want to practise next.
          </p>
        </header>

        <h2>What is in one attempt?</h2>
        <p>
          A session contains 15 questions: three each in logic, pattern,
          numerical, spatial, and analogy reasoning. Logic items ask you to
          apply stated conditions without adding assumptions. Pattern items
          invite you to compare repeated changes in symbols or shapes. Numerical
          items use relationships among quantities, such as a sequence or
          proportion. Spatial questions ask you to track position, orientation,
          or a visual transformation. Analogy items ask you to transfer a
          relationship from one pair of ideas or objects to another. These are
          useful categories for varied practice, but five labels cannot cover
          every form of thinking or every influence on performance.
        </p>
        <p>
          The question bank is larger than a single session. Each new attempt
          draws a randomized selection within each category, avoids repeating
          the same question ID in that attempt, and shuffles answer choices.
          This makes practice less repetitive and means scores from different
          attempts may reflect different items. Randomization does not establish
          difficulty equivalence, population norms, or clinical validity.
        </p>

        <h2>How the Estimated IQ is calculated</h2>
        <p>
          The site counts correct answers, divides by the questions answered,
          and converts accuracy using <code>100 + (accuracy − 50) × 0.6</code>.
          The displayed estimate is bounded from 70 to 130. For example, 12
          correct answers out of 15 equals 80% accuracy; the conversion gives
          118 before display rounding. The formula is intentionally visible so
          you can check how the number was produced. It is a site-created
          practice scale, not a standardized IQ scale. Its midpoint and labels
          should not be mistaken for evidence that your result matches a
          representative population distribution.
        </p>
        <p>
          The category percentages come from only three questions apiece, so one
          answer changes a category result substantially. Treat them as a prompt
          to inspect an explanation, not a reliable ranking of your strengths.
          The timer records elapsed time but adds no speed bonus. A different
          device, reading pace, interruption, or question mix can change the
          experience. The complete calculation and limitations are on the{' '}
          <Link href="/methodology">methodology page</Link> and{' '}
          <Link href="/score-guide">Score Guide</Link>.
        </p>

        <h2>Fluid reasoning, learned knowledge, and this practice set</h2>
        <p>
          Psychological literature has used terms such as <em>fluid</em>
          reasoning for solving unfamiliar problems and <em>crystallized</em>
          ability for knowledge and skills built through learning. Horn and
          Cattell’s work is one historical source for this distinction; it is a
          theoretical framework, not a claim that all people’s thinking divides
          neatly into two boxes. See the{' '}
          <a
            href="https://doi.org/10.1037/h0023816"
            target="_blank"
            rel="noopener noreferrer"
          >
            original paper record
          </a>{' '}
          for the scholarly context. IQTestReal’s questions emphasize a few
          short reasoning formats and do not separately assess either broad
          construct. They also do not test the full range of learned knowledge,
          memory, processing speed, or other abilities represented in formal
          assessment batteries.
        </p>
        <p>
          Some standardized tests report scores using norms developed for a
          defined comparison group. IQTestReal’s site-created estimate is not
          produced from a bell-curve fit, a standard deviation, or a sample of
          test takers. Its percentile labels are simple display bands, not a
          statement that you outperformed a particular share of the population.
          This distinction is why the site publishes the arithmetic and uses the
          word “Estimated.” For more, read{' '}
          <Link href="/articles/understanding-iq-scores">
            how to read an IQ-style score
          </Link>
          .
        </p>

        <h2>Practice by explaining, not just selecting</h2>
        <p>
          One practical method works across many puzzle types. First restate the
          known information in your own words. Then identify what changes and
          what stays fixed. Test a candidate rule against all of the examples,
          not only the first pair. Finally, look for a counterexample that would
          prove your rule wrong. In a visual item, track one feature at a
          time—count, location, fill, and orientation. In a number item, write
          the differences or ratios and check every transition. In an analogy,
          phrase the relationship as a sentence before comparing the choices.
          These small steps turn an answer into a method you can use on a new
          problem.
        </p>
        <p>
          After submission, read every explanation, including those for answers
          you guessed correctly. Write one sentence about the key clue or the
          step you missed. Then practise a different example instead of
          immediately chasing a higher score on a near-identical retake. The{' '}
          <Link href="/articles/reasoning-categories-explained">
            worked puzzle guide
          </Link>
          ,{' '}
          <Link href="/articles/pattern-recognition-spatial-reasoning">
            visual reasoning article
          </Link>
          , and <Link href="/practice">untimed practice collections</Link> offer
          ways to continue at your own pace.
        </p>
        <p>
          Practice can make a format or a strategy more familiar, which may
          change how efficiently you approach later examples. A higher retake
          score does not by itself show that broad intelligence or processing
          speed has changed. Keep the goal specific—such as checking every
          transition in a sequence—and compare your reasoning notes rather than
          treating two small randomized sets as a controlled experiment. Our{' '}
          <Link href="/articles/practice-and-cognitive-performance">
            practice and performance guide
          </Link>{' '}
          discusses familiarity and retakes in more detail.
        </p>

        <h2>How to interpret a short online quiz</h2>
        <p>
          IQ tests used in formal settings are developed and administered for
          defined purposes, with specified procedures and evidence for how
          scores should be interpreted. IQTestReal has not been normed on a
          representative sample and has not been validated as a psychometric
          instrument. This short exercise does not separately measure working
          memory, processing speed, academic knowledge, creativity, emotional
          skills, or a person’s full potential. It is not a diagnosis and should
          never be used for medical, educational-placement, employment,
          insurance, legal, or other high-stakes decisions. If you need a formal
          assessment, speak with a qualified professional about the question you
          need answered. Read{' '}
          <Link href="/articles/online-vs-clinical-iq-tests">
            online practice versus clinical evaluation
          </Link>{' '}
          for a careful comparison.
        </p>

        <h2>Privacy and your choice</h2>
        <p>
          No account is required. Completed results and attempt history may be
          stored in your browser on the device you used; clear this site’s
          storage to remove the local history. If optional analytics or
          advertising are enabled for the deployment, their tags wait until you
          allow optional services. The site’s simple privacy-choice banner is
          not a certified advertising CMP for every region. Review the{' '}
          <Link href="/privacy-policy">Privacy Policy</Link> and{' '}
          <Link href="/cookie-policy">Cookie Policy</Link> to understand
          third-party services, and use the{' '}
          <Link href="/contact">contact page</Link> for a question or
          correction.
        </p>
        <p>
          For a short overview, see{' '}
          <Link href="/how-it-works">how the test works</Link>; to understand
          the project’s question-writing checks, see the{' '}
          <Link href="/editorial-policy">editorial policy</Link>. The result is
          most useful when it leaves you with a question to explore—not a fixed
          judgment about yourself.
        </p>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([appSchema, quizSchema]).replace(
            /</g,
            '\\u003c',
          ),
        }}
      />
    </main>
  );
}
