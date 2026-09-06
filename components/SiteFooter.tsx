import Link from 'next/link';
import { ConsentSettingsButton } from './consent/ConsentSettingsButton';

export function SiteFooter() {
  return (
    <footer className="site-footer" id="about"><div className="shell footer-grid"><div><span className="mark">S/C</span><p>Independent notes for careful work.</p></div><div><h2>Publication</h2><Link href="/articles">Articles</Link><Link href="/categories">Categories</Link><Link href="/editorial-policy">Editorial policy</Link><Link href="/about">About</Link></div><div><h2>Information</h2><Link href="/contact">Contact</Link><Link href="/privacy-policy">Privacy</Link><Link href="/cookie-policy">Cookies</Link><Link href="/terms">Terms</Link><Link href="/disclaimer">Disclaimer</Link></div></div><div className="shell footer-base"><span>© 2026 SITE_OWNER_NAME</span><ConsentSettingsButton /><span>Built for considered reading.</span></div></footer>
  );
}
