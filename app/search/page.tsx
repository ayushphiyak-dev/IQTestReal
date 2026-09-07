'use client';

import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { SafeLink as Link } from '@/components/SafeLink';

const destinations = [
  { href: '/test', title: 'Free IQ Test', description: 'Start the online IQ-style reasoning assessment.' },
  { href: '/how-it-works', title: 'How It Works', description: 'Understand the five categories, timer, and scoring model.' },
  { href: '/score-guide', title: 'Score Guide', description: 'Learn how Estimated IQ, percentile, and strengths are calculated.' },
  { href: '/articles', title: 'Articles', description: 'Read practical guides about reasoning and test interpretation.' },
  { href: '/faq', title: 'FAQ', description: 'Find clear answers about the free assessment.' },
  { href: '/contact', title: 'Contact', description: 'Send feedback or a privacy question.' },
  { href: '/about', title: 'About IQTestReal', description: 'Read about the project and its editorial principles.' },
];

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const results = useMemo(() => { const term = query.trim().toLowerCase(); return term ? destinations.filter((item) => `${item.title} ${item.description}`.toLowerCase().includes(term)) : destinations; }, [query]);
  return <main id="main-content"><header className="page-header shell"><span className="eyebrow">Search / IQTestReal</span><h1>Find a useful page.</h1><p>Search the test, guides, articles, policies, and contact information.</p><form className="site-search" role="search" onSubmit={(event) => { event.preventDefault(); const url = new URL(window.location.href); url.searchParams.set('q', query); window.history.replaceState({}, '', url); }}><Search size={19} aria-hidden="true"/><input type="search" name="q" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search IQTestReal" aria-label="Search IQTestReal" /><button type="submit" className="sr-only">Search</button></form></header><section className="search-results shell" aria-live="polite">{results.map((item) => <Link className="article-card" href={item.href} key={item.href}><span className="eyebrow">IQTestReal page</span><h2>{item.title}</h2><p>{item.description}</p><span className="text-link">Open page →</span></Link>)}{results.length === 0 && <p className="search-empty">No matching page. Try “test”, “score”, “privacy”, or “articles”.</p>}</section></main>;
}

