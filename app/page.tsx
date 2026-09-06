import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ArticleCard } from '@/components/ArticleCard';
import { articles, categories } from '@/lib/content';

export default function Home() {
  return (
      <main id="main-content">
        <section className="hero shell">
          <div className="eyebrow"><span /> Independent publication · 2026</div>
          <h1>Better questions for<br />a noisier <em>world.</em></h1>
          <div className="hero-bottom">
            <p>Field notes, practical frameworks, and clear-eyed analysis for people shaping technology—and the systems around it.</p>
            <div className="hero-actions"><Link className="button primary" href="/articles">Explore articles <ArrowUpRight size={17} /></Link><Link className="button quiet" href="/categories">Browse categories</Link></div>
          </div>
        </section>
        <section className="featured shell" id="featured" aria-labelledby="featured-title">
          <div className="section-index"><span>01</span><span>Featured inquiry</span></div>
          <Link href="/articles/the-evidence-ladder" className="feature-grid">
            <div className="feature-visual"><Image src="/images/research-system.png" alt="Abstract system of connected research signals and evidence" fill priority sizes="(max-width: 800px) 100vw, 58vw" /><span className="image-code">FIELD NOTE / 001</span></div>
            <div className="feature-copy">
              <span className="category">Research practice</span>
              <h2 id="featured-title">The evidence ladder: a calmer way to make consequential decisions</h2>
              <p>Not every claim deserves equal weight. A practical method for moving from observation to action without pretending uncertainty has disappeared.</p>
              <div className="meta"><span>By The editorial desk</span><span>11 min read</span><span>06 Sep 2026</span></div>
              <span className="read-link">Read the field note <ArrowUpRight size={18} /></span>
            </div>
          </Link>
        </section>
        <section className="latest shell section-space" aria-labelledby="latest-title">
          <div className="section-heading"><span>02 / Latest</span><h2 id="latest-title">Recent field notes</h2><Link href="/articles">View the archive <ArrowUpRight size={16}/></Link></div>
          <div className="article-grid">{articles.slice(1, 4).map((article, index) => <ArticleCard key={article.slug} article={article} index={index}/>)}</div>
        </section>
        <section className="category-band" id="categories"><div className="shell section-space"><div className="section-heading"><span>03 / Index</span><h2>Choose a line of inquiry</h2></div><div className="category-list">{categories.map((category, index) => <Link href={`/categories/${category.slug}`} key={category.slug}><span>0{index + 1}</span><div><h3>{category.name}</h3><p>{category.description}</p></div><ArrowUpRight/></Link>)}</div></div></section>
        <section className="principle shell section-space"><span className="eyebrow">Editorial principle</span><blockquote>“Useful writing should leave the reader with a better question, a clearer decision, or a method they can use.”</blockquote><Link className="button quiet" href="/editorial-policy">How we work</Link></section>
      </main>
  );
}
