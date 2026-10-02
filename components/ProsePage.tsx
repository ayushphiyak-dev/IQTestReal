import { siteConfig } from '@/config/site';
import { SafeLink as Link } from '@/components/SafeLink';

export function ProsePage({
  kicker,
  title,
  intro,
  path,
  schemaType,
  children,
}: {
  kicker: string;
  title: string;
  intro: string;
  path?: string;
  schemaType?: 'article';
  children: React.ReactNode;
}) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: intro,
    mainEntityOfPage: path
      ? {
          '@type': 'WebPage',
          '@id': new URL(path, siteConfig.siteUrl).toString(),
        }
      : undefined,
    url: path ? new URL(path, siteConfig.siteUrl).toString() : undefined,
    inLanguage: 'en',
    isAccessibleForFree: true,
    author: {
      '@type': 'Organization',
      name: siteConfig.defaultAuthor,
      url: siteConfig.siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.siteName,
      url: siteConfig.siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.siteUrl}/iqtestreal-brain.png`,
      },
    },
  };
  return (
    <main id="main-content">
      <header className="page-header shell">
        <span className="eyebrow">{kicker}</span>
        <h1>{title}</h1>
        <p>{intro}</p>
        {schemaType === 'article' && (
          <p className="article-meta">
            Written and reviewed by the IQTestReal editorial team.{' '}
            <Link href="/editorial-policy">Read our editorial policy</Link>.
          </p>
        )}
      </header>
      <article className="policy-prose shell">{children}</article>
      {schemaType === 'article' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleSchema).replace(/</g, '\\u003c'),
          }}
        />
      )}
    </main>
  );
}
