import type { Metadata } from 'next';
import { ProsePage } from '@/components/ProsePage';
import { siteConfig } from '@/config/site';
import { pageMetadata } from '@/config/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Privacy policy',
  description:
    'What IQTestReal stores, how optional analytics and advertising may work, and how to make a privacy request.',
  path: '/privacy-policy',
});

export default function PrivacyPage() {
  return (
    <ProsePage
      kicker="Policy / Privacy"
      title="Your data, in plain language."
      intro="Last reviewed 23 October 2026. IQTestReal is an independently maintained educational practice site. This notice describes the data handled by the current site and the choices available to visitors."
    >
      <p>
        This page is a practical description of the site, not legal advice. The
        services enabled on a deployed version can depend on its configuration
        and your region. We review this notice when those services change. If a
        vendor, data flow, or cookie is not accurately described here, please
        contact us so the notice can be corrected.
      </p>

      <h2>Assessment answers and result history</h2>
      <p>
        You can take the practice assessment without creating an account. Your
        selected answers are used in your browser to calculate the result.
        Completed scores, category feedback, attempt duration, and dates may be
        saved in local browser storage so the on-device results view can show
        your history. This history is not submitted to an IQTestReal account
        service. Anyone with access to your browser profile or device may be
        able to see local history; clear this site’s storage in your browser to
        remove it.
      </p>

      <h2>Hosting and security logs</h2>
      <p>
        The hosting and delivery providers process technical request data to
        deliver and protect the site. Depending on the request, logs may include
        an IP address, requested URL, referrer, browser or device information,
        and date and time. The site does not control the providers’ retention
        periods; consult the hosting provider’s privacy documentation for its
        current practices.
      </p>

      <h2>Contact form</h2>
      <p>
        If you submit a message, the site receives the name, email address,
        subject, and message you provide. The contact endpoint forwards those
        fields to a Google Apps Script workflow so the project maintainer can
        receive and answer your request. Do not include passwords, payment
        information, test answers, or other sensitive information. The contact
        workflow is not an account or assessment-result database. Messages are
        retained only as needed to respond, maintain correspondence, and address
        security or legal needs; the exact retention period depends on the
        connected email/workflow settings.
      </p>

      <h2>Optional analytics</h2>
      <p>
        If configured for a deployment, Google Analytics and Vercel Web
        Analytics are loaded only after a visitor chooses “Allow optional” in
        the site’s privacy banner. These services may receive information such
        as page views, device/browser details, and technical identifiers. We
        configure Google Analytics to request IP anonymization, but this is not
        a guarantee that no personal data is processed. You can choose
        “Essential only,” or change the browser’s stored choice by clearing the
        site’s local storage and reloading the page. The site’s privacy banner
        is not a substitute for a legally required consent-management platform
        or other regional privacy controls.
      </p>

      <h2>Google AdSense, advertising cookies, and identifiers</h2>
      <p>
        If AdSense is enabled in the deployed configuration and an eligible ad
        request is made, Google and other advertising technology providers may
        use cookies or similar identifiers to serve, measure, limit, and
        personalize ads. Google says its advertising cookies can be used to
        serve ads based on a visitor’s prior visits to this site or other sites.
        Which providers participate depends on the publisher’s AdSense settings
        and can change; consult the current{' '}
        <a
          href="https://support.google.com/adsense/answer/1348695?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google AdSense required-content guidance
        </a>{' '}
        and the vendor disclosures configured in the AdSense account for the
        live list.
      </p>
      <p>
        Older policy examples sometimes use the name “DART cookie.” Google’s
        current materials describe advertising cookies and identifiers more
        generally, including cookies associated with domains such as
        doubleclick.net, google.com, googlesyndication.com, or
        googleadservices.com. This notice does not claim that a cookie with any
        particular name is placed on every visit. Google’s current descriptions
        are available in its{' '}
        <a
          href="https://www.google.com/policies/technologies/ads/"
          target="_blank"
          rel="noopener noreferrer"
        >
          advertising technologies notice
        </a>
        . Visitors can manage personalized advertising in{' '}
        <a
          href="https://adssettings.google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Ads Settings
        </a>{' '}
        or use the industry opt-out at{' '}
        <a
          href="https://www.aboutads.info/choices/"
          target="_blank"
          rel="noopener noreferrer"
        >
          aboutads.info
        </a>
        . Those controls do not necessarily stop all contextual ads,
        measurement, or non-cookie processing.
      </p>
      <p>
        Google requires publishers serving personalized ads in the European
        Economic Area, United Kingdom, and Switzerland to use a Google-certified
        consent management platform integrated with the IAB Transparency and
        Consent Framework. The site’s simple optional-services banner is not
        represented as that certified platform. The publisher must configure an
        appropriate Google CMP and advertising messages in AdSense before
        serving ads to affected visitors. See Google’s current{' '}
        <a
          href="https://support.google.com/adsense/answer/13554116?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          consent-management requirements
        </a>
        .
      </p>

      <h2>Legal rights and choices</h2>
      <p>
        Depending on where you live and whether a privacy law applies, you may
        have rights to request access to, correction of, or deletion of personal
        information, or to object to or restrict certain processing. Where the
        GDPR applies, this can include rights to access, rectify, erase,
        restrict or object to processing, and data portability, subject to the
        conditions and exceptions in that law. California residents may have
        rights under the CCPA as amended by the CPRA, including rights to know,
        correct, or delete certain personal information and to opt out of sale
        or sharing for cross-context behavioural advertising, subject to legal
        definitions and exceptions. These laws may not apply to every visitor or
        every data flow. IQTestReal does not sell assessment results, and the
        project does not intentionally collect those results on its own account
        server. Advertising and analytics providers may process data under their
        own services and settings; do not interpret this statement as a blanket
        claim that no vendor processing could constitute “sharing” under a
        particular law. Send a request using the contact details below. We may
        need to verify that the request relates to you and will respond as
        required by the law that applies.
      </p>
      <p>
        To exercise a privacy choice, contact{' '}
        <a href={`mailto:${siteConfig.contactEmail}`}>
          {siteConfig.contactEmail}
        </a>
        . A browser-based opt-out signal is honored where supported by the
        connected service and applicable law; the site does not currently claim
        to provide a complete universal opt-out mechanism through its own code.
      </p>

      <h2>Children, third-party sites, and updates</h2>
      <p>
        IQTestReal is a general-audience educational practice site, not a
        service designed to collect children’s personal information. The contact
        form should not be used by children to send sensitive information. Links
        to Google, social networks, and other third parties leave this site; the
        receiving service’s own privacy notice applies there. We may update this
        policy when the site or applicable services change. The current review
        date appears at the top of this page.
      </p>
    </ProsePage>
  );
}
