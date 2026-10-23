import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { SafeLink as Link } from '@/components/SafeLink';
import { siteConfig } from '@/config/site';
import { pageMetadata } from '@/config/seo';
export const metadata: Metadata = pageMetadata({
  title: 'Contact',
  description:
    'Contact the IQTestReal project maintainer with questions or feedback.',
  path: '/contact',
});
export default function ContactPage() {
  return (
    <main id="main-content">
      <header className="page-header shell">
        <span className="eyebrow">Contact / IQTestReal</span>
        <h1>Send a clear note.</h1>
        <p>
          Use this form for question feedback, accessibility issues, privacy
          requests, or editorial questions.
        </p>
      </header>
      <section className="contact-layout shell">
        <div>
          <h2>Before you send</h2>
          <p>
            For a direct reply, email{' '}
            <a className="text-link" href={`mailto:${siteConfig.contactEmail}`}>
              {siteConfig.contactEmail}
            </a>
            . You can also use the form; it validates your message and sends it
            to the IQTestReal contact workflow.
          </p>
          <p>
            Please do not send passwords, payment details, or other sensitive
            material.
          </p>
          <p>
            IQTestReal is an independently maintained online project and does
            not have a public walk-in office. Messages are generally reviewed
            within three business days; complex reports may take longer. Do not
            include assessment answers or other sensitive personal information
            in your message.
          </p>
        </div>
        <ContactForm />
        <p className="contact-privacy-note">
          Submitting the form sends the details you provide through the contact
          delivery workflow. See the{' '}
          <Link href="/privacy-policy">Privacy Policy</Link> for the data
          handled and how to make a privacy request.
        </p>
      </section>
    </main>
  );
}
