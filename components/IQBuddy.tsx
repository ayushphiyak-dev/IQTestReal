'use client';

import { Lightbulb, Sparkles, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const facts = [
  { title: 'Recall beats rereading', body: 'Try to remember an idea before checking your notes. That small pause makes practice more active and helps you notice what you really understand.', tip: 'After reading a paragraph, close it and explain the main point in one sentence.' },
  { title: 'Name the constraint', body: 'Many puzzles become easier when you write down what cannot change. Clear constraints reduce the number of possibilities your brain has to explore.', tip: 'Before solving, list two rules the answer must obey.' },
  { title: 'Switch perspectives', body: 'Flexible reasoning grows when you explain the same problem in more than one way. A second viewpoint can reveal an assumption the first one hid.', tip: 'Describe a solution with a drawing, then with words.' },
  { title: 'Practice with spacing', body: 'Short sessions spread across several days are usually more durable than one long cram session. Give your brain time to consolidate what you learned.', tip: 'Return to one missed question tomorrow, then again next week.' },
  { title: 'Look for the rule break', body: 'When a pattern surprises you, pause before guessing. Finding where the rule changes is often more useful than spotting the next number immediately.', tip: 'Circle the first step that does not follow the pattern.' },
  { title: 'Rest is part of practice', body: 'Sleep and breaks help attention recover and give new ideas time to settle. A rested reasoning session is more useful than an exhausted one.', tip: 'Take a two-minute reset before starting a difficult set.' },
];

function nextIndex(current: number) {
  let next = Math.floor(Math.random() * facts.length);
  while (facts.length > 1 && next === current) next = Math.floor(Math.random() * facts.length);
  return next;
}

export function IQBuddy() {
  const [open, setOpen] = useState(false);
  const [factIndex, setFactIndex] = useState(0);
  const fact = facts[factIndex];

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  function showFact() {
    setFactIndex((current) => nextIndex(current));
    setOpen(true);
  }

  return <aside className={`iq-buddy${open ? ' is-open' : ''}`} aria-label="IQ Buddy learning helper">
    {open && <div className="iq-buddy-panel" role="dialog" aria-label="Random reasoning fact" aria-live="polite">
      <div className="iq-buddy-panel-head"><span><Sparkles size={14}/> Brain spark</span><button type="button" className="iq-buddy-close" onClick={() => setOpen(false)} aria-label="Close IQ Buddy"><X size={16}/></button></div>
      <div className="iq-buddy-fact-icon" aria-hidden="true"><Lightbulb size={21}/></div>
      <h2>{fact.title}</h2>
      <p>{fact.body}</p>
      <div className="iq-buddy-tip"><span>Try this</span>{fact.tip}</div>
      <button type="button" className="iq-buddy-next" onClick={showFact}>Another brain spark <Sparkles size={15}/></button>
      <small>Helpful practice ideas, not a promise of a higher clinical IQ.</small>
    </div>}
    <button type="button" className="iq-buddy-toggle" onClick={() => (open ? setOpen(false) : showFact())} aria-expanded={open} aria-label={open ? 'Close IQ Buddy' : 'Open IQ Buddy'}>
      <span className="iq-buddy-face" aria-hidden="true">🧠</span><span className="iq-buddy-label">IQ Buddy</span><span className="iq-buddy-spark" aria-hidden="true">✦</span>
    </button>
  </aside>;
}

