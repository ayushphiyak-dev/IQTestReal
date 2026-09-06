import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { categories, publishedArticles } from '@/lib/content';

export const metadata: Metadata = { title: 'Categories', description: 'Explore Signal & Craft by line of inquiry.', alternates: { canonical: '/categories' } };
export default function CategoriesPage() { return <main id="main-content"><header className="page-header shell"><span className="eyebrow">Index / 03 categories</span><h1>Lines of inquiry.</h1><p>Three connected areas for people who research, design, build, and maintain consequential systems.</p></header><section className="category-directory shell">{categories.map((category, index) => <Link href={`/categories/${category.slug}`} key={category.slug}><span className="category-number">0{index + 1}</span><div><h2>{category.name}</h2><p>{category.description}</p><span>{publishedArticles.filter(a => a.categorySlug === category.slug).length} articles</span></div><ArrowUpRight size={25}/></Link>)}</section></main>; }
