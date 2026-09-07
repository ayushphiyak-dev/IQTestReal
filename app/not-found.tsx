import { SafeLink as Link } from '@/components/SafeLink';
import { ArrowUpRight } from 'lucide-react';
export default function NotFound() { return <main id="main-content" className="not-found shell"><span className="error-code">404 / Not found</span><h1>This path ends here.</h1><p>The page may have moved, or the address may be incomplete.</p><div><Link className="button primary" href="/">Go home <ArrowUpRight size={17}/></Link><Link className="button" href="/test">Start assessment</Link></div></main>; }
