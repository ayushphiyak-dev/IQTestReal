import type { Metadata } from 'next';
import { SafeLink as Link } from '@/components/SafeLink';
import { ProsePage } from '@/components/ProsePage';
import { pageMetadata } from '@/config/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Terms of Service',
  description:
    'Terms for using IQTestReal’s free educational reasoning practice tools and content.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <ProsePage
      kicker="Policy / Terms of Service"
      title="Terms of Service"
      intro="Last reviewed 23 October 2026. By accessing IQTestReal, you agree to use the site in accordance with these terms."
    >
      <h2>Educational service—not a clinical assessment</h2>
      <p>
        IQTestReal provides free reasoning exercises and educational
        explanations. The assessment and its Estimated IQ conversion are not
        professionally normed, validated, or administered under clinical
        conditions. They do not diagnose a condition or measure a person’s full
        intelligence. The service is not medical, psychological, educational,
        legal, employment, or admissions advice. Do not use a result to make
        high-stakes decisions about yourself or another person. If you need a
        formal evaluation, consult a qualified professional.
      </p>

      <h2>Use of the site</h2>
      <p>
        You may use the public exercises and articles for personal learning and
        practice. You agree not to disrupt the service, attempt unauthorized
        access, probe or circumvent security, introduce malicious code, submit
        abusive or unlawful material through the contact form, or misrepresent
        an IQTestReal practice result as a clinical or standardized score. Do
        not use automated requests in a way that degrades access for other
        visitors.
      </p>

      <h2>Site materials and attribution</h2>
      <p>
        Unless a page says otherwise, IQTestReal’s original text, question
        prompts, explanations, graphics, and site design are provided for
        personal use and remain subject to applicable copyright and other
        intellectual-property laws. You may link to public pages and quote brief
        excerpts with clear attribution and a link to the source. Do not
        republish full pages, redistribute the question bank, or present site
        material as your own without written permission. Third-party names and
        materials remain the property of their respective owners.
      </p>

      <h2>Availability, changes, and accuracy</h2>
      <p>
        The site may be updated, interrupted, or changed as the independent
        project develops. We take care when writing and checking content, but
        cannot promise that every item will always be free of error or that the
        service will be continuously available or suitable for every purpose. If
        you find an unclear question or factual issue, report it through the
        <Link href="/contact">contact page</Link>.
      </p>

      <h2>Third-party services and advertising</h2>
      <p>
        The site may use hosting, contact-form delivery, analytics, or
        advertising providers as described in the{' '}
        <Link href="/privacy-policy">Privacy Policy</Link>. Third-party sites
        and services are governed by their own terms and privacy notices. Their
        availability or actions are outside IQTestReal’s control.
      </p>

      <h2>Liability and updates to these terms</h2>
      <p>
        To the extent permitted by applicable law, the site is provided without
        warranties beyond those that cannot lawfully be excluded. Nothing in
        these terms limits rights that applicable consumer-protection law does
        not allow us to limit. We may revise these terms when the service or
        legal requirements change; the review date above identifies the current
        version. Continued use after a revision means the updated terms apply to
        future use.
      </p>

      <h2>Questions</h2>
      <p>
        For questions about these terms, content permissions, or a correction,
        use the <Link href="/contact">IQTestReal contact page</Link>.
      </p>
    </ProsePage>
  );
}
