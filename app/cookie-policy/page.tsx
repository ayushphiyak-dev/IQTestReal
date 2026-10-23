import type { Metadata } from 'next';
import { ConsentSettingsButton } from '@/components/consent/ConsentSettingsButton';
import { ProsePage } from '@/components/ProsePage';
import { pageMetadata } from '@/config/seo';
export const metadata: Metadata = pageMetadata({
  title: 'Cookie policy',
  description: 'How cookies and browser storage may be used on IQTestReal.',
  path: '/cookie-policy',
});
export default function CookiePage() {
  return (
    <ProsePage
      kicker="Policy / Cookies"
      title="Browser storage, explained."
      intro="Last reviewed 23 October 2026. Essential browser storage supports site preferences and local test history. Optional services are controlled by your privacy choice and deployment settings."
    >
      <h2>Assessment history</h2>
      <p>
        IQTestReal uses local browser storage to keep your completed Estimated
        IQ results, category scores, durations, and dates on this device. This
        data powers your local results dashboard.
      </p>
      <h2>Essential technologies</h2>
      <p>
        Essential storage may support security, accessibility, and preferences
        such as the selected colour theme.
      </p>
      <h2>Analytics and advertising</h2>
      <p>
        If enabled for this deployment, Google Analytics, Vercel Web Analytics,
        and Google AdSense are loaded only after you choose “Allow optional” in
        the privacy banner. Analytics may process page-view and technical device
        information. AdSense and participating advertising providers may use
        cookies or similar identifiers for ad delivery, measurement, and
        personalization. Provider settings and identifiers can change; see the
        Privacy Policy for Google’s current disclosures and opt-out links. The
        site’s simple choice banner is not a Google-certified consent management
        platform. Ads serving to visitors in regions requiring an IAB TCF signal
        must be configured through an appropriate certified CMP in AdSense.
      </p>
      <h2>Change your choice</h2>
      <p>
        <ConsentSettingsButton /> reopens this site’s privacy-choice banner. You
        may also clear the site’s browser storage to remove assessment history
        and the saved choice; on the next visit, optional services stay off
        until a new choice is made.
      </p>
    </ProsePage>
  );
}
