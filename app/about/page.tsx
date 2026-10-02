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
        The IQTestReal editorial team writes the question prompts, answer keys,
        explanations, guides, and interface copy for this project. Each item is
        checked for a clear intended rule and a single defensible answer before
        it is included in the practice bank. We review the public methodology,
        privacy details, and explanations when the product changes.
      </p>
      <p>
        This is an independent educational project, not a university, clinic,
        professional testing service, or research study. Read the{' '}
        <Link href="/methodology">methodology</Link> for the scoring model and
        the <Link href="/editorial-policy">editorial policy</Link> for
        corrections and content standards. Questions or accessibility feedback
        are welcome via <Link href="/contact">Contact</Link>.
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
