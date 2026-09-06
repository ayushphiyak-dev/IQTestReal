import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { type Article, formatDate } from '@/lib/content';

export function ArticleCard({ article, index }: { article: Article; index: number }) {
  return <article className="article-card"><div className="card-top"><span>0{index + 1}</span><span>{article.category}</span></div><h2><Link href={`/articles/${article.slug}`}>{article.title}</Link></h2><p>{article.description}</p><div className="card-meta"><span>{formatDate(article.publishedAt)}</span><span>{article.readingTime} min</span><Link href={`/articles/${article.slug}`} aria-label={`Read ${article.title}`}><ArrowUpRight size={18}/></Link></div></article>;
}
