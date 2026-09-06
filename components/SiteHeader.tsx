import Link from 'next/link';
import { Menu, Search } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Signal and Craft home"><span className="mark" aria-hidden="true">S/C</span><span>Signal &amp; Craft</span></Link>
      <nav aria-label="Primary navigation"><Link href="/">Home</Link><Link href="/articles">Articles</Link><Link href="/categories">Categories</Link><Link href="/about">About</Link></nav>
      <div className="header-actions"><Link className="icon-button" href="/search" aria-label="Search"><Search size={17} /></Link><ThemeToggle /><span className="edition">ISSUE 01</span><details className="mobile-menu"><summary aria-label="Open navigation"><Menu size={19}/></summary><div><Link href="/">Home</Link><Link href="/articles">Articles</Link><Link href="/categories">Categories</Link><Link href="/about">About</Link></div></details></div>
    </header>
  );
}
