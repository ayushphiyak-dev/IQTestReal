export type ArticleSection = {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  callout?: string;
};

export type Article = {
  title: string;
  slug: string;
  description: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  category: string;
  categorySlug: string;
  tags: string[];
  featuredImage: string;
  featured: boolean;
  editorPick: boolean;
  readingTime: number;
  status: 'draft' | 'review' | 'published';
  references: { label: string; url: string }[];
  sections: ArticleSection[];
};

// DEMO CONTENT: These original samples exist to demonstrate the editorial system.
// Replace or formally review and adopt them before a public publisher launch.
export const articles: Article[] = [
  {
    title: 'The evidence ladder: a calmer way to make consequential decisions',
    slug: 'the-evidence-ladder',
    description: 'A practical method for moving from observation to action without pretending uncertainty has disappeared.',
    author: 'The editorial desk',
    publishedAt: '2026-09-06', updatedAt: '2026-09-06', category: 'Research practice', categorySlug: 'research-practice',
    tags: ['evidence', 'decision-making', 'research'], featuredImage: '/images/research-system.png', featured: true, editorPick: true, readingTime: 11, status: 'published',
    references: [{ label: 'The Open Science Framework', url: 'https://www.cos.io/products/osf' }],
    sections: [
      { id: 'why-ladders', heading: 'Why a ladder, not a verdict', paragraphs: ['Good decisions rarely begin with certainty. They begin with observations of uneven quality: a customer report, a measured outcome, a repeated pattern, a plausible explanation. Trouble starts when these different signals are flattened into one bucket called “evidence.”', 'The evidence ladder is a small discipline for keeping those signals distinct. It does not tell you what to believe. It tells you how much weight a claim can responsibly carry—and what would need to change before you ask it to carry more.'], callout: 'A decision can be urgent without its evidence being strong. Name both conditions.' },
      { id: 'rungs', heading: 'The five useful rungs', paragraphs: ['Start with an observation, then record a pattern only when it recurs under comparable conditions. A hypothesis explains the pattern. A test tries to break that explanation. A decision combines what survived with the cost of waiting and the cost of being wrong.'], bullets: ['Observation — what happened, without a theory attached.', 'Pattern — what recurred, and under which conditions.', 'Hypothesis — the smallest explanation that could be tested.', 'Test — evidence designed to reveal where the explanation fails.', 'Decision — a bounded commitment with a review date.'] },
      { id: 'confidence', heading: 'Write confidence separately', paragraphs: ['Teams often hide uncertainty inside confident prose. A better record pairs every material claim with a confidence label and the reason for it. “Medium confidence: consistent in three interviews, not yet visible in usage data” is more operational than a polished paragraph that implies consensus.', 'Confidence is not a percentage pulled from instinct. It is a compact explanation of source quality, agreement, recency, and relevance. When one of those changes, the label should change too.'] },
      { id: 'decision-record', heading: 'Make the decision reversible on paper', paragraphs: ['A decision record should name the chosen action, alternatives considered, evidence used, assumptions still exposed, and the date for review. This turns disagreement into a future check instead of an endless present argument.', 'The result is not bureaucracy. It is memory. Six weeks later, the team can distinguish a poor decision from a reasonable decision made with information that later changed.'] },
      { id: 'practice', heading: 'A 20-minute practice', paragraphs: ['Put the strongest claim at the top of a page. Under it, list each supporting signal and assign it to a rung. Circle the gaps between rungs. Then ask which gap matters enough to delay action.', 'Most decisions do not require climbing to the top. They require knowing where you are, what risk remains, and when you will look again.'] },
    ],
  },
  {
    title: 'Designing defaults that do not quietly become policy', slug: 'defaults-become-policy',
    description: 'Default settings shape behaviour at scale. Treating them as policy decisions makes products safer and easier to trust.',
    author: 'The editorial desk', publishedAt: '2026-08-27', updatedAt: '2026-09-02', category: 'Responsible systems', categorySlug: 'responsible-systems',
    tags: ['product design', 'governance', 'defaults'], featuredImage: '/images/research-system.png', featured: false, editorPick: true, readingTime: 8, status: 'published', references: [],
    sections: [
      { id: 'invisible', heading: 'The invisible recommendation', paragraphs: ['A default is presented as a neutral starting point, but it is also a recommendation delivered at the moment of least attention. Most people accept it because changing it costs time, confidence, or both.', 'That makes a default a product decision with policy consequences. The question is not only what improves activation. It is whose interests the starting state protects.'] },
      { id: 'audit', heading: 'Audit the asymmetry', paragraphs: ['List who benefits when the default is accepted and who bears the downside. Then compare the effort required to accept, understand, and reverse it. Large asymmetries are a signal that the interface is doing more than reducing friction.'], bullets: ['Is the consequence visible before acceptance?', 'Can the choice be reversed without loss?', 'Does refusal require more effort than agreement?', 'Would a reasonable person expect this starting state?'] },
      { id: 'sensitive', heading: 'Use conservative defaults for sensitive outcomes', paragraphs: ['Data sharing, public visibility, recurring payment, and irreversible publication deserve a different threshold from typography or layout preferences. Begin from the state that preserves agency while the user learns the consequences.', 'This may add one deliberate step. That is not automatically bad friction. Sometimes a pause is the feature that makes a decision real.'] },
      { id: 'measure', heading: 'Measure comprehension, not only conversion', paragraphs: ['A higher acceptance rate can indicate convenience or confusion. Pair funnel metrics with short comprehension checks, reversal rates, support contacts, and qualitative review.', 'The objective is not to make every choice slow. It is to make consequential choices legible.'] },
    ],
  },
  {
    title: 'A maintenance budget for digital products', slug: 'maintenance-budget',
    description: 'A simple operating model for keeping small product decisions from accumulating into expensive fragility.',
    author: 'The editorial desk', publishedAt: '2026-08-14', updatedAt: '2026-08-14', category: 'Durable software', categorySlug: 'durable-software',
    tags: ['maintenance', 'engineering', 'operations'], featuredImage: '/images/research-system.png', featured: false, editorPick: false, readingTime: 9, status: 'published', references: [],
    sections: [
      { id: 'cost', heading: 'Maintenance is a design input', paragraphs: ['Every feature creates a future obligation: dependencies to update, promises to preserve, edge cases to explain, and interfaces to keep coherent. Teams get into trouble when those obligations are recorded only after something breaks.', 'A maintenance budget makes the obligation visible while scope is still negotiable. It is not a single number. It is a recurring share of attention reserved for the health of the product.'] },
      { id: 'four-ledgers', heading: 'Keep four small ledgers', paragraphs: ['Track operational risk, dependency age, content accuracy, and interaction debt separately. They move at different speeds and need different owners. A combined “tech debt” list is easy to ignore because it says too little about consequence.'], bullets: ['Operational: failure modes, recovery paths, and observability.', 'Dependencies: security, support windows, and upgrade distance.', 'Content: stale claims, broken references, and unclear ownership.', 'Interaction: accessibility defects, inconsistency, and avoidable friction.'] },
      { id: 'rhythm', heading: 'Choose a rhythm that can survive pressure', paragraphs: ['A quarterly cleanup week is memorable but fragile. A smaller recurring allocation—reviewed every cycle—survives busy periods because it is part of the operating model, not a special event.', 'Tie each item to a user or business consequence. “Upgrade library” competes poorly with feature work. “Restore supported security updates for authentication” explains the trade.'] },
      { id: 'retire', heading: 'Retirement is maintenance too', paragraphs: ['Products become durable partly by getting smaller. Record whether a feature has an owner, active use, and a defensible reason to continue. When those disappear, deprecation should be an ordinary option.', 'The healthiest maintenance budget funds subtraction as readily as repair.'] },
    ],
  },
  {
    title: 'The useful disagreement protocol', slug: 'useful-disagreement-protocol',
    description: 'A short format for separating facts, forecasts, values, and preferences before a debate gets stuck.',
    author: 'The editorial desk', publishedAt: '2026-07-30', updatedAt: '2026-07-30', category: 'Research practice', categorySlug: 'research-practice',
    tags: ['teams', 'decisions', 'communication'], featuredImage: '/images/research-system.png', featured: false, editorPick: true, readingTime: 7, status: 'published', references: [],
    sections: [
      { id: 'four-claims', heading: 'Four claims hiding in one argument', paragraphs: ['Many disagreements persist because participants are answering different questions. One person disputes a fact, another predicts an outcome, a third protects a value, and a fourth simply prefers a direction.', 'Labeling the claim type lowers the temperature without flattening the substance.'] },
      { id: 'protocol', heading: 'Run the protocol', paragraphs: ['Write the decision in one sentence. Give each participant two minutes to sort their concerns into facts, forecasts, values, and preferences. Resolve factual conflicts with evidence, turn forecasts into testable expectations, state value conflicts openly, and treat preferences as preferences.'], callout: 'Do not use the protocol to disguise power. The decision owner and constraints should be visible at the start.' },
      { id: 'close', heading: 'Close with a condition', paragraphs: ['A useful conclusion includes the chosen path, the strongest dissenting view, and the condition that would trigger reconsideration. That preserves disagreement as information rather than forcing artificial consensus.', 'Teams do not need to agree forever. They need to know what they are trying, why, and when the question opens again.'] },
    ],
  },
];

export const publishedArticles = articles.filter((article) => article.status === 'published');
export const categories = [
  { slug: 'research-practice', name: 'Research practice', description: 'Methods for asking better questions and weighing evidence.' },
  { slug: 'responsible-systems', name: 'Responsible systems', description: 'Product choices examined through agency, incentives, and impact.' },
  { slug: 'durable-software', name: 'Durable software', description: 'Technical practices for products intended to last.' },
];

export function getArticle(slug: string) { return publishedArticles.find((article) => article.slug === slug); }
export function getCategory(slug: string) { return categories.find((category) => category.slug === slug); }
export function formatDate(value: string) { return new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(`${value}T00:00:00Z`)); }
