import type { Metadata } from 'next';
import { SafeLink as Link } from '@/components/SafeLink';
import { ProsePage } from '@/components/ProsePage';
import { pageMetadata } from '@/config/seo';
export const metadata: Metadata = pageMetadata({
  title: 'About',
  description: 'Why IQTestReal exists and the principles behind it.',
  path: '/about',
});
export default function AboutPage() {
  return (
    <ProsePage
      kicker="About / IQTestReal"
      title="Reasoning tools should be clear about their limits."
      intro="IQTestReal is a free educational platform for exploring reasoning performance with honest language and useful explanations."
    >
      <h2>Why we built it</h2>
      <p>
        Online intelligence quizzes often turn uncertainty into spectacle.
        IQTestReal takes a quieter approach: original questions, visible
        scoring, immediate explanations, and no inflated claims.
      </p>
      <h2>What we value</h2>
      <p>
        We value privacy, accessibility, original educational content, and
        responsible interpretation. A result should start a conversation about
        practice—not end one with a label.
      </p>
      <h2>Current status</h2>
      <p>
        IQTestReal is a free practice platform. Its Estimated IQ is not a
        psychometric instrument and should never be used for high-stakes
        decisions.
      </p>
      <h2>How the project is maintained</h2>
      <p>
        IQTestReal is an independently maintained project. The maintainer writes
        and updates its practice questions, answer explanations, guides, and
        interface copy. Items are checked against their stated rule for
        arithmetic errors, ambiguous wording, and more than one defensible
        answer. This is an editorial quality check, not independent validation
        by a psychologist, psychometrician, university, or research team.
        Published pages are revisited when the product, sources, or policies
        change, and readers can report a suspected problem through the contact
        page.
      </p>
      <p>
        This is an independent educational project, not a university, clinic,
        professional testing service, or research study. Read the{' '}
        <Link href="/methodology">methodology</Link> for the scoring model and
        the <Link href="/editorial-policy">editorial policy</Link> for
        corrections and content standards. Questions or accessibility feedback
        are welcome via <Link href="/contact">Contact</Link>.
      </p>
      <h2>What the test is—and is not</h2>
      <p>
        The assessment is a short, randomized set of logic, pattern, numerical,
        spatial, and analogy exercises. Its Estimated IQ is a transparent
        practice conversion, not a score calibrated on a representative sample.
        It does not measure every cognitive ability, and it is not a substitute
        for a standardized evaluation administered and interpreted by a
        qualified professional. The <Link href="/methodology">methodology</Link>
        explains the item mix, calculation, storage, and limitations in detail.
      </p>
      <h2>Privacy and the project’s online presence</h2>
      <p>
        Test history is kept in local browser storage on the device used. If
        optional analytics or advertising are enabled, they are disclosed in the{' '}
        <Link href="/privacy-policy">Privacy Policy</Link> and governed by the
        on-site privacy choices. The project does not have a public office;
        support is handled online through the{' '}
        <Link href="/contact">contact form</Link> and the email listed there.
      </p>
      <h2>Project updates</h2>
      <p>
        Follow the project as it develops through these public launch posts.
        They share the product story and invite feedback from the developer
        community.
      </p>
      <p>
        <a
          href="https://x.com/Placementdo/status/2097791441212932427?s=20"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read the project update on X
        </a>{' '}
        ·{' '}
        <a
          href="https://lnkd.in/p/gdq-sWMb"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read the project update on LinkedIn
        </a>{' '}
        ·{' '}
        <a
          href="https://www.instagram.com/p/DdFNLbhTQ_c/?stkn=OG14dms5djR2aHIw"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read the project update on Instagram
        </a>{' '}
        ·{' '}
        <a
          href="https://www.instagram.com/iqtestreal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow @iqtestreal
        </a>
      </p>
    </ProsePage>
  );
}
