import type { Metadata } from 'next';
import { SafeLink as Link } from '@/components/SafeLink';
import { ProsePage } from '@/components/ProsePage';
import { pageMetadata } from '@/config/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Editorial policy',
  description:
    'Read how IQTestReal creates, reviews and corrects its educational content.',
  path: '/editorial-policy',
});
export default function EditorialPolicyPage() {
  return (
    <ProsePage
      kicker="Policy / Editorial"
      title="How IQTestReal earns trust."
      intro="IQTestReal is a small, independently maintained educational project. This page describes who maintains it, how practice material is checked, and what kind of review is not claimed."
    >
      <h2>Editorial ownership</h2>
      <p>
        IQTestReal is maintained as an independent educational project. The
        project maintainer decides which reasoning topics are useful, writes the
        examples, and keeps the question bank aligned with the free practice
        experience. IQTestReal is not staffed by an editorial team and does not
        claim review by a licensed psychologist, psychometrician, university, or
        independent research group. We do not publish anonymous advertorials or
        accept payment in exchange for a score, ranking, or recommendation. A
        clear separation between learning guidance and commercial messages helps
        readers understand what they are reading.
      </p>

      <h2>Original question writing</h2>
      <p>
        Questions, explanations, guides, and interface messages are prepared for
        IQTestReal. The maintainer begins with a learning goal, such as
        comparing conditions, spotting a sequence, estimating a quantity,
        rotating a shape, or transferring a relationship. The maintainer then
        writes an answer key and a short explanation before an item is added to
        the bank. This process keeps the wording, difficulty, and explanation
        connected instead of treating a quiz as a collection of disconnected
        prompts.
      </p>

      <h2>Accuracy and review</h2>
      <p>
        Answers are checked against their stated reasoning and tested in the
        assessment flow. The maintainer checks for ambiguous wording, more than
        one defensible answer, arithmetic mistakes, and clues that rely on
        specialist cultural knowledge rather than the stated reasoning task.
        This is an internal editorial check, not validated psychometric review.
        Published pages are also checked for readable language, accessible
        headings, useful links, and responsible claims. We describe the result
        as an Estimated IQ because this is an online practice model, not a
        professionally normed or diagnostic instrument. It should never be used
        for admissions, employment, health, legal, or other high-stakes
        decisions.
      </p>

      <h2>Research and references</h2>
      <p>
        Articles explain reasoning habits in plain language and distinguish an
        observation from a claim that needs evidence. When an external reference
        adds useful background, we link to the original publisher and make the
        destination clear. We do not reproduce another publisher’s article,
        rewrite it sentence by sentence, or present a generated summary as
        reporting. Our examples are written for this audience, and updates are
        made when a source, interface, or scoring explanation changes.
      </p>

      <h2>Safe, useful publishing</h2>
      <p>
        IQTestReal aims to keep the learning environment suitable for a broad
        audience. We do not publish adult, hateful, violent, dangerous, or
        pirated material; promote illegal drugs or weapons; or use excessive
        profanity. We also avoid fabricated testimonials, medical or financial
        promises, and claims that a short online result can change a person’s
        life. We focus on curiosity, practice, accessibility, and honest limits.
        If advertising is enabled in a deployment, the publisher must disclose
        active vendors and configure the appropriate consent controls. Ads must
        never sit beside answer choices, navigation controls, or submission
        controls.
      </p>

      <h2>Corrections and feedback</h2>
      <p>
        If you find an unclear question, broken link, accessibility issue, or
        factual error, please <Link href="/contact">contact us</Link>
        with the page and a description of the problem. We review reports,
        record material corrections, and update affected explanations. Feedback
        about language or mobile usability is welcome too; a useful practice
        tool should work for people with different devices, backgrounds, and
        ways of reading.
      </p>

      <h2>Commercial independence</h2>
      <p>
        IQTestReal is free to use. The score model is not changed to sell a
        product, and we do not require an account to read educational pages or
        complete the practice test. Privacy, cookie, and advertising details are
        documented in the linked policies so readers can make informed choices
        about the site.
      </p>
    </ProsePage>
  );
}
