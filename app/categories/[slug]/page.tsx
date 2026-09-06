import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArticleCard } from '@/components/ArticleCard';
import { categories, getCategory, publishedArticles } from '@/lib/content';

export function generateStaticParams() { return categories.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const category = getCategory(slug); if (!category) return {}; return { title: category.name, description: category.description, alternates: { canonical: `/categories/${slug}` } }; }
export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const category = getCategory(slug); if (!category) notFound(); const matches = publishedArticles.filter(a => a.categorySlug === slug); return <main id="main-content"><header className="page-header shell"><span className="eyebrow">Category / {String(matches.length).padStart(2, '0')} notes</span><h1>{category.name}</h1><p>{category.description}</p></header><section className="shell archive-grid">{matches.map((article, index) => <ArticleCard article={article} index={index} key={article.slug}/>)}</section></main>; }
