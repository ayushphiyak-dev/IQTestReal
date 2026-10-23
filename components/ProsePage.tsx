import { siteConfig } from '@/config/site';
import { SafeLink as Link } from '@/components/SafeLink';
import { practiceResources } from '@/config/practice';

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
            Written by the IQTestReal project maintainer. No clinical or
            psychometric expert review is claimed.{' '}
            <Link href="/editorial-policy">Read our editorial policy</Link>.
          </p>
        )}
      </header>
      <article className="policy-prose shell">
        {children}
        {schemaType === 'article' && (
          <nav aria-label="Continue learning">
            <h2>Put the explanation into practice</h2>
            <p>
              Choose an untimed set with worked solutions, or return to the
              learning centre for another guide.
            </p>
            <ul>
              {practiceResources.map((resource) => (
                <li key={resource.slug}>
                  <Link href={`/practice/${resource.slug}`}>
                    {resource.skill} questions with explained answers
                  </Link>
                </li>
              ))}
            </ul>
            <p>
              <Link href="/articles">All reasoning guides</Link> ·{' '}
              <Link href="/practice">
                Practice collections and printable worksheets
              </Link>
            </p>
          </nav>
        )}
      </article>
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
