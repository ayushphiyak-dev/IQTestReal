import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
export default function NotFound() { return <main id="main-content" className="not-found shell"><span className="error-code">404 / Not found</span><h1>This path ends here.</h1><p>The page may have moved, or the address may be incomplete. Continue with the publication instead.</p><div><Link className="button primary" href="/">Go home <ArrowUpRight size={17}/></Link><Link className="button quiet" href="/search">Search articles</Link></div></main>; }
