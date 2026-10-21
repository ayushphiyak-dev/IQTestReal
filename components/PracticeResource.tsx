import { SafeLink as Link } from '@/components/SafeLink';
import { siteConfig } from '@/config/site';
import type { PracticeResource as Resource } from '@/config/practice';
import './practice.css';

export function PracticeResource({ resource }: { resource: Resource }) {
  const url = `${siteConfig.siteUrl}/practice/${resource.slug}`;
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'Quiz',
      '@id': `${url}#quiz`,
      url,
      name: resource.title,
      description: resource.description,
      inLanguage: 'en',
      isAccessibleForFree: true,
      educationalUse: 'Practice',
      about: { '@type': 'Thing', name: resource.skill },
      hasPart: resource.questions.map((question) => ({
        '@type': 'Question',
        '@id': `${url}#${question.id}`,
        name: question.title,
        text: [question.prompt, question.diagramDescription]
          .filter(Boolean)
          .join(' '),
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${question.answer} ${question.explanation}`,
        },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'IQTestReal',
          item: siteConfig.siteUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Reasoning practice',
          item: `${siteConfig.siteUrl}/practice`,
        },
        { '@type': 'ListItem', position: 3, name: resource.skill, item: url },
      ],
    },
  ];
  return (
    <main id="main-content" className="practice-resource">
      <header className="page-header shell">
        <nav aria-label="Breadcrumb">
          <Link href="/practice">Reasoning practice</Link> / {resource.skill}
        </nav>
        <h1>{resource.title}</h1>
        <p>{resource.introduction}</p>
      </header>
      <article className="policy-prose shell">
        <h2>How to use this practice set</h2>
        <p>
          Answer on paper or in your own notes, then open each worked solution.
          Answers are not collected or saved. There is no time limit. If you
          want a worksheet, print this page from your browser: questions appear
          first and the answer key follows on a separate page.
        </p>
        <ol>
          {resource.method.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <nav aria-label="Practice questions">
          <ul>
            {resource.questions.map((q) => (
              <li key={q.id}>
                <a href={`#${q.id}`}>{q.title}</a>
              </li>
            ))}
          </ul>
        </nav>
        {resource.questions.map((q) => (
          <section key={q.id} id={q.id} className="practice-question">
            <h2>{q.title}</h2>
            <p>{q.prompt}</p>
            {q.diagram && (
              <figure>
                <pre className="practice-diagram" aria-hidden="true">
                  {q.diagram}
                </pre>
                <figcaption>{q.diagramDescription}</figcaption>
              </figure>
            )}
            <details className="practice-solution">
              <summary>Show answer and explanation: {q.title.slice(3)}</summary>
              <p>
                <strong>{q.answer}</strong>
              </p>
              <p>{q.explanation}</p>
              <p>
                <strong>Check your method:</strong> {q.check}
              </p>
            </details>
          </section>
        ))}
        <section className="practice-next">
          <h2>Turn an answer into a reusable method</h2>
          <p>
            After each question, write the step that made the solution clear. If
            you missed one, identify whether you misread the instruction, lost
            track of a position, or applied an inconsistent rule. Retry with
            that step visible. These six examples are not a calibrated test, and
            your total cannot establish an IQ, age ranking or population
            percentile.
          </p>
          <h2>Continue practising</h2>
          <ul>
            {resource.related.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
          <p>
            For a mixed session, try the{' '}
            <Link href="/test">free reasoning practice test</Link>. Read{' '}
            <Link href="/methodology">how its estimate works</Link> before
            interpreting the result.
          </p>
          <p>
            Published by IQTestReal.{' '}
            <Link href="/editorial-policy">Editorial policy</Link> ·{' '}
            <Link href="/contact">Report an unclear question</Link>. Include the
            question title so we can reproduce the issue. This is non-clinical
            educational practice, not an assessment for admissions, employment
            or diagnosis.
          </p>
        </section>
        <section
          className="practice-print-key"
          aria-label="Printable answer key"
        >
          <h2>Answer key: {resource.skill}</h2>
          {resource.questions.map((q) => (
            <section key={q.id}>
              <h3>{q.title}</h3>
              <p>
                <strong>{q.answer}</strong> {q.explanation}
              </p>
              <p>Check: {q.check}</p>
            </section>
          ))}
          <p>
            Source: {url}. Free non-clinical reasoning practice from IQTestReal.
          </p>
        </section>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemas).replace(/</g, '\\u003c'),
        }}
      />
    </main>
  );
}
