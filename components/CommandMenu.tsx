'use client';

import { useEffect, useState } from 'react';
import { BarChart3, BookOpen, BrainCircuit, CircleHelp, FileText } from 'lucide-react';

const actions = [
  { label: 'Start assessment', href: '/test', icon: BrainCircuit },
  { label: 'View result history', href: '/dashboard', icon: BarChart3 },
  { label: 'How it works', href: '/how-it-works', icon: BookOpen },
  { label: 'Read score guide', href: '/score-guide', icon: FileText },
  { label: 'Get help', href: '/contact', icon: CircleHelp },
];

export function CommandMenu() {
  const [open, setOpen] = useState(false); const [query, setQuery] = useState('');
  useEffect(() => { const handler = (event: KeyboardEvent) => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); setOpen((value) => !value); } if (event.key === 'Escape') setOpen(false); }; window.addEventListener('keydown', handler); return () => window.removeEventListener('keydown', handler); }, []);
  const filtered = actions.filter((item) => item.label.toLowerCase().includes(query.toLowerCase()));
  if (!open) return <button className="command-hint" onClick={() => setOpen(true)} aria-label="Open command menu">⌘ K</button>;
  return <dialog open className="command-backdrop" aria-label="Quick navigation"><div className="command-dialog"><button type="button" className="command-close" onClick={() => setOpen(false)} aria-label="Close command menu">×</button><input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search IQTestReal" aria-label="Search navigation"/><div>{filtered.map(({ label, href, icon: Icon }) => <button type="button" key={href} onClick={() => { window.location.assign(href); }}><Icon size={17}/><span>{label}</span><kbd>↵</kbd></button>)}{filtered.length === 0 && <p>No matching destination.</p>}</div><footer><span>Navigate IQTestReal</span><span>ESC to close</span></footer></div></dialog>;
}

