import type { Metadata } from 'next';
import { ArticleCard } from '@/components/ArticleCard';
import { publishedArticles } from '@/lib/content';

export const metadata: Metadata = { title: 'Articles', description: 'Field notes and practical frameworks from Signal & Craft.', alternates: { canonical: '/articles' } };
export default function ArticlesPage() { return <main id="main-content"><header className="page-header shell"><span className="eyebrow">Archive / {publishedArticles.length} notes</span><h1>Ideas built to be used.</h1><p>Methods, arguments, and operating practices for making better decisions around technology.</p></header><section className="shell archive-grid" aria-label="Published articles">{publishedArticles.map((article, index) => <ArticleCard article={article} index={index} key={article.slug}/>)}</section></main>; }
