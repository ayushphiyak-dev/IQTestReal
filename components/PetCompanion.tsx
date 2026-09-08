'use client';

import { ExternalLink, PawPrint, X } from 'lucide-react';
import './pet-companion.css';
import { PetArt, type PetActivity } from './PetArt';
import { useEffect, useRef, useState, type CSSProperties, type PointerEvent as ReactPointerEvent } from 'react';

type PetId = 'cat' | 'dog' | 'frog';
type Position = { x: number; y: number };
type Fact = { category: string; title: string; body: string; source?: string; sourceLabel?: string };
type DragState = { pointerId: number; startX: number; startY: number; originX: number; originY: number; moved: boolean };
type Pet = { id: PetId; name: string; species: string; color: string; reactions: string[] };

const pets: Pet[] = [
  { id: 'cat', name: 'Mochi', species: 'Cat', color: '#d88955', reactions: ['Purrfect focus!', 'Tiny steps still count.', 'You have got this, whiskers-first.'] },
  { id: 'dog', name: 'Biscuit', species: 'Dog', color: '#d9a15e', reactions: ['Tail-wagging progress!', 'Great work, clever pup.', 'One more question? Let us go!'] },
  { id: 'frog', name: 'Moss', species: 'Frog', color: '#7dbb42', reactions: ['Hop into the next idea.', 'A calm mind spots patterns.', 'Ribbit! That was a smart move.'] },
];

const facts: Fact[] = [
  { category: 'Science', title: 'Your brain predicts', body: 'The brain constantly compares incoming information with predictions. When a pattern breaks, the mismatch helps you pay attention and update your model.', source: 'https://www.nature.com/articles/nrn2787', sourceLabel: 'Nature review' },
  { category: 'History', title: 'A very old calculator', body: 'The Antikythera mechanism, built more than 2,000 years ago, used geared dials to model astronomical cycles. It is an early example of mechanical scientific computation.', source: 'https://www.britannica.com/technology/Antikythera-mechanism', sourceLabel: 'Encyclopaedia Britannica' },
  { category: 'Technology', title: 'The first website', body: 'The first website explained the World Wide Web project and went live at CERN in 1991. It described how people could share information through linked documents.', source: 'https://home.cern/science/computing/birth-web', sourceLabel: 'CERN' },
  { category: 'Geography', title: 'A country in two continents', body: 'Turkey spans southeastern Europe and western Asia. The Bosporus strait separates its European and Asian land, making it a natural bridge between regions.', source: 'https://www.britannica.com/place/Turkey', sourceLabel: 'Encyclopaedia Britannica' },
  { category: 'Logic', title: 'Constraints shrink the search', body: 'A logic puzzle gets easier when you write down what cannot change. Each constraint removes impossible options before you spend effort testing the remaining ones.', source: 'https://plato.stanford.edu/entries/logic-classical/', sourceLabel: 'Stanford Encyclopedia of Philosophy' },
  { category: 'Science', title: 'Bees share directions', body: 'Honey bees use a waggle dance to communicate the direction and distance of a food source. The angle of the dance relates to the sun’s position.', source: 'https://royalsocietypublishing.org/doi/10.1098/rstb.2012.0206', sourceLabel: 'Royal Society' },
];


const defaultPosition = { x: 16, y: 0 };
function getPet(id: PetId) { return pets.find((pet) => pet.id === id) ?? pets[0]; }
function pickFact(pool: Fact[]) { return pool[Math.floor(Math.random() * pool.length)]; }
function viewport() {
  const v = window.visualViewport;
  return { x: v?.offsetLeft ?? 0, y: v?.offsetTop ?? 0, width: v?.width ?? window.innerWidth, height: v?.height ?? window.innerHeight };
}
function petSize() { return window.innerWidth <= 760 ? 58 : 78; }
function clampPosition(p: Position): Position {
  const v = viewport(), size = petSize();
  return { x: Math.max(v.x + 4, Math.min(p.x, v.x + v.width - size - 4)), y: Math.max(v.y + 4, Math.min(p.y, v.y + v.height - size - 4)) };
}
function floorPosition(p: Position): Position {
  const v = viewport();
  return clampPosition({ x: p.x, y: v.y + v.height - petSize() - 4 });
}
function save(key: string, value: string) { try { localStorage.setItem(key, value); } catch { /* Preferences are optional when storage is unavailable. */ } }
export function PetCompanion() {
  const [ready, setReady] = useState(false);
  const [selectedId, setSelectedId] = useState<PetId>('cat');
  const [position, setPosition] = useState(defaultPosition);
  const [mode, setMode] = useState<'rest' | 'drag' | 'fall' | 'land'>('rest');
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [selector, setSelector] = useState(false);
  const [sleeping, setSleeping] = useState(false);
  const [activity, setActivity] = useState<PetActivity>('idle');
  const [interaction, setInteraction] = useState(0);
  function wake() { setSleeping(false); setActivity('idle'); setInteraction(n => n + 1); }
  const [reacting, setReacting] = useState(false);
  const [fact, setFact] = useState<Fact | null>(null);
  const [bubble, setBubble] = useState<CSSProperties>({});
  const positionRef = useRef(defaultPosition);
  const dragRef = useRef<DragState | null>(null);
  const frame = useRef(0);
  const landingTimer = useRef(0);
  const reactionTimer = useRef(0);
  const recent = useRef<string[]>([]);
  const root = useRef<HTMLElement>(null);
  const petButton = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const selected = getPet(selectedId);
  function place(p: Position) { positionRef.current = p; setPosition(p); }
  function stopMotion() { cancelAnimationFrame(frame.current); clearTimeout(landingTimer.current); }
  function settle() {
    stopMotion();
    const start = clampPosition(positionRef.current), target = floorPosition(start);
    const distance = target.y - start.y;
    setSleeping(false);
    setMode('fall');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || distance < 2) {
      place(target); setMode('rest'); save('iqtestreal-pet-position', JSON.stringify(target)); return;
    }
    const duration = Math.min(750, Math.max(180, Math.sqrt(distance / 1800) * 1000));
    let began: number | undefined;
    const tick = (now: number) => {
      began ??= now;
      const progress = Math.min(1, (now - began) / duration);
      place({ x: target.x, y: start.y + distance * progress * progress });
      if (progress < 1) frame.current = requestAnimationFrame(tick);
      else { setMode('land'); save('iqtestreal-pet-position', JSON.stringify(target)); landingTimer.current = window.setTimeout(() => setMode('rest'), 260); }
    };
    frame.current = requestAnimationFrame(tick);
  }
  useEffect(() => {
    const timer = window.setTimeout(() => {
      let x = 16;
      try {
        const id = localStorage.getItem('iqtestreal-pet');
        if (pets.some(p => p.id === id)) setSelectedId(id as PetId);
        const stored = JSON.parse(localStorage.getItem('iqtestreal-pet-position') || 'null');
        if (Number.isFinite(stored?.x)) x = stored.x;
        setHidden(localStorage.getItem('iqtestreal-pet-hidden') === 'true');
      } catch { /* Use defaults if saved preferences cannot be read. */ }
      place(floorPosition({ x, y: 0 })); setReady(true);
    }, 0);
    const resize = () => { stopMotion(); dragRef.current = null; setMode('rest'); place(floorPosition(positionRef.current)); };
    window.addEventListener('resize', resize);
    window.visualViewport?.addEventListener('resize', resize);
    window.visualViewport?.addEventListener('scroll', resize);
    return () => { clearTimeout(timer); stopMotion(); clearTimeout(reactionTimer.current); window.removeEventListener('resize', resize); window.visualViewport?.removeEventListener('resize', resize); window.visualViewport?.removeEventListener('scroll', resize); };
  }, []);
  useEffect(() => {
    if (!ready || open || mode !== 'rest' || hidden) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let next = 0, finish = 0;
    let previous: PetActivity = 'idle';
    const schedule = () => {
      next = window.setTimeout(() => {
        if (document.hidden || reduced.matches) return;
        const choices: PetActivity[] = selectedId === 'frog' ? ['catch', 'play', 'stretch'] : ['call', 'play', 'stretch'];
        const pool = choices.filter(value => value !== previous);
        previous = pool[Math.floor(Math.random() * pool.length)];
        setActivity(previous);
        finish = window.setTimeout(() => { setActivity('idle'); schedule(); }, 3600);
      }, 6500 + Math.random() * 6000);
    };
    const sleep = window.setTimeout(() => {
      clearTimeout(next); clearTimeout(finish);
      setActivity('idle'); setSleeping(true);
    }, 45000);
    const pause = () => {
      clearTimeout(next); clearTimeout(finish); setActivity('idle');
      if (!document.hidden && !reduced.matches) schedule();
    };
    if (!reduced.matches && !document.hidden) schedule();
    document.addEventListener('visibilitychange', pause);
    reduced.addEventListener('change', pause);
    return () => {
      clearTimeout(next); clearTimeout(finish); clearTimeout(sleep);
      document.removeEventListener('visibilitychange', pause);
      reduced.removeEventListener('change', pause);
    };
  }, [ready, open, mode, selectedId, hidden, interaction]);
  useEffect(() => {
    if (!open || !panel.current) return;
    const update = () => {
      const v = viewport(), width = Math.min(264, v.width - 16), height = Math.min(panel.current?.scrollHeight ?? 220, v.height - 24);
      const left = Math.max(v.x + 8, Math.min(positionRef.current.x, v.x + v.width - width - 8));
      const top = Math.max(v.y + 8, Math.min(positionRef.current.y - height - 10, v.y + v.height - height - 8));
      setBubble({ left, top, width, maxHeight: v.height - 24 });
    };
    const observer = new ResizeObserver(update);
    observer.observe(panel.current); update();
    const escape = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(false); petButton.current?.focus(); } };
    const outside = (e: PointerEvent) => { if (!root.current?.contains(e.target as Node)) setOpen(false); };
    window.addEventListener('keydown', escape); window.addEventListener('pointerdown', outside);
    window.visualViewport?.addEventListener('resize', update);
    return () => { observer.disconnect(); window.removeEventListener('keydown', escape); window.removeEventListener('pointerdown', outside); window.visualViewport?.removeEventListener('resize', update); };
  }, [open, fact, selector, position]);
  function react() {
    wake(); setReacting(true); setOpen(value => !value);
    clearTimeout(reactionTimer.current); reactionTimer.current = window.setTimeout(() => setReacting(false), 700);
  }
  function begin(e: ReactPointerEvent<HTMLButtonElement>) {
    if (dragRef.current || (e.pointerType === 'mouse' && e.button !== 0)) return;
    stopMotion(); wake();
    const p = positionRef.current;
    dragRef.current = { pointerId: e.pointerId, startX: e.clientX, startY: e.clientY, originX: p.x, originY: p.y, moved: false };
    e.currentTarget.setPointerCapture(e.pointerId);
  }
  function move(e: ReactPointerEvent<HTMLButtonElement>) {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== e.pointerId) return;
    const dx = e.clientX - drag.startX, dy = e.clientY - drag.startY;
    if (Math.hypot(dx, dy) > 5) drag.moved = true;
    if (!drag.moved) return;
    e.preventDefault(); setOpen(false); setMode('drag');
    place(clampPosition({ x: drag.originX + dx, y: drag.originY + dy }));
  }
  function release(e: ReactPointerEvent<HTMLButtonElement>, cancelled = false) {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== e.pointerId) return;
    dragRef.current = null;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId);
    if (drag.moved || cancelled) settle();
    else { settle(); if (!cancelled) react(); }
  }
  function chooseFact() {
    const available = facts.filter(item => !recent.current.includes(item.title));
    const picked = pickFact(available.length ? available : facts);
    recent.current = [...recent.current, picked.title].slice(-3); setFact(picked); setSelector(false); wake();
  }
  if (!ready) return null;
  if (hidden) return <button className="command-hint critter-restore" onClick={() => { place(floorPosition(positionRef.current)); setHidden(false); wake(); save('iqtestreal-pet-hidden', 'false'); }}><PawPrint size={15}/> Show pet</button>;
  return <aside ref={root} className="critter-companion" data-mode={mode} style={{ left: position.x, top: position.y }} aria-label="Animal companion">
    <button ref={petButton} type="button" className="critter-stage" aria-label={`Interact with ${selected.species} ${selected.name}`} aria-expanded={open}
      onPointerDown={begin} onPointerMove={move} onPointerUp={release} onPointerCancel={e => release(e, true)} onLostPointerCapture={e => release(e, true)}
      onClick={e => { if (e.detail === 0) react(); }}
      onKeyDown={e => { if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { e.preventDefault(); place(floorPosition({ x: positionRef.current.x + (e.key === 'ArrowLeft' ? -24 : 24), y: 0 })); save('iqtestreal-pet-position', JSON.stringify(positionRef.current)); } }}>
      <PetArt pet={selected} dragging={mode === 'drag'} landing={mode === 'land'} reacting={reacting} sleeping={sleeping} activity={activity}/>
    </button>
    {open && <div ref={panel} className="critter-chat" role="dialog" aria-label="Pet companion menu" style={bubble}>
      <div className="critter-chat-head"><span>{selected.name}</span><button aria-label="Close pet menu" onClick={() => { setOpen(false); petButton.current?.focus(); }}><X size={16}/></button></div>
      {fact ? <div aria-live="polite"><h2>{fact.title}</h2><p>{fact.body}</p><a href={fact.source} target="_blank" rel="noopener noreferrer">{fact.sourceLabel} <ExternalLink size={12}/></a></div> : <p>Hi, I’m {selected.name}. Curious about something new?</p>}
      <div className="critter-actions"><button onClick={chooseFact}>{fact ? 'Another fact' : 'Get a fact'}</button><button onClick={() => setSelector(v => !v)} aria-expanded={selector}>Change pet</button><button onClick={() => { stopMotion(); setHidden(true); setOpen(false); save('iqtestreal-pet-hidden', 'true'); }}>Hide pet</button></div>
      {selector && <div className="critter-selector">{pets.map(p => <button key={p.id} aria-label={p.species} aria-pressed={p.id === selectedId} onClick={() => { setSelectedId(p.id); save('iqtestreal-pet', p.id); setSelector(false); wake(); }}>
        <PetArt pet={p} dragging={false} reacting={false} landing={false} sleeping={false} size="small"/><span>{p.species}</span>
      </button>)}</div>}
    </div>}
  </aside>;
}

