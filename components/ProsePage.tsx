export function ProsePage({ kicker, title, intro, children }: { kicker: string; title: string; intro: string; children: React.ReactNode }) {
  const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: title, description: intro, author: { '@type': 'Organization', name: 'IQTestReal editorial team' }, publisher: { '@type': 'Organization', name: 'IQTestReal' }, mainEntityOfPage: { '@type': 'WebPage' } };
  return <main id="main-content"><header className="page-header shell"><span className="eyebrow">{kicker}</span><h1>{title}</h1><p>{intro}</p></header><article className="policy-prose shell">{children}</article><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, '\\u003c') }} /></main>;
}

