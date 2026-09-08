'use client';

import { ExternalLink, PawPrint, X } from 'lucide-react';
import './pet-companion.css';
import { useEffect, useId, useRef, useState, type CSSProperties, type PointerEvent as ReactPointerEvent } from 'react';

type PetId = 'cat' | 'dog' | 'frog' | 'parrot' | 'snake';
type Position = { x: number; y: number };
type Fact = { category: string; title: string; body: string; source?: string; sourceLabel?: string };
type DragState = { pointerId: number; startX: number; startY: number; originX: number; originY: number; moved: boolean };
type Pet = { id: PetId; name: string; species: string; color: string; reactions: string[] };

const pets: Pet[] = [
  { id: 'cat', name: 'Mochi', species: 'Cat', color: '#d88955', reactions: ['Purrfect focus!', 'Tiny steps still count.', 'You have got this, whiskers-first.'] },
  { id: 'dog', name: 'Biscuit', species: 'Dog', color: '#d9a15e', reactions: ['Tail-wagging progress!', 'Great work, clever pup.', 'One more question? Let us go!'] },
  { id: 'frog', name: 'Moss', species: 'Frog', color: '#7dbb42', reactions: ['Hop into the next idea.', 'A calm mind spots patterns.', 'Ribbit! That was a smart move.'] },
  { id: 'parrot', name: 'Pico', species: 'Parrot', color: '#e44e3e', reactions: ['Say it aloud to remember it.', 'Bright ideas like a little repetition.', 'You are learning in full color.'] },
  { id: 'snake', name: 'Sage', species: 'Snake', color: '#77a843', reactions: ['Stay curious and follow the pattern.', 'A patient mind notices small changes.', 'Slide into the next idea.'] },
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
function PetArt({ pet, dragging, reacting, landing, sleeping, size = 'large' }: { pet: Pet; dragging: boolean; reacting: boolean; landing: boolean; sleeping: boolean; size?: 'large' | 'small' }) {
  const classes = `critter-art critter-art-${pet.id} critter-art-${size}${dragging ? ' is-dragging' : ''}${reacting ? ' is-reacting' : ''}${landing ? ' is-landing' : ''}${sleeping ? ' is-sleeping' : ''}`;
  const shades: Record<PetId, { body: string; dark: string; light: string }> = {
    cat: { body: '#e7a05f', dark: '#a94f3d', light: '#ffd4a1' },
    dog: { body: '#e5ad67', dark: '#ad693d', light: '#ffe1ad' },
    frog: { body: '#83bf45', dark: '#367a45', light: '#d4eb92' },
    parrot: { body: '#e54e43', dark: '#a72e3e', light: '#f7c84d' },
    snake: { body: '#79a945', dark: '#3d713f', light: '#d4df8b' },
  };
  const palette = shades[pet.id];
  const gradientId = useId();
  return <svg className={classes} viewBox="0 20 140 120" role="img" aria-label={`${pet.species} companion`} focusable="false">
    <defs><linearGradient id={gradientId} x1="0" x2="1" y1="0" y2="1"><stop offset="0" stopColor={palette.light}/><stop offset=".48" stopColor={palette.body}/><stop offset="1" stopColor={palette.dark}/></linearGradient></defs>
    <ellipse className="critter-ground-shadow" cx="70" cy="137" rx="34" ry="5" fill="currentColor" opacity=".12"/>
    <g className="critter-rig">
    {pet.id === 'cat' && <><g className="critter-tail"><path d="M42 112 C13 110 11 73 37 66" fill="none" stroke={palette.dark} strokeWidth="13" strokeLinecap="round"/><path d="M42 112 C13 110 11 73 37 66" fill="none" stroke={palette.body} strokeWidth="8" strokeLinecap="round"/></g><g className="critter-body"><ellipse cx="70" cy="103" rx="36" ry="32" fill={`url(#${gradientId})`}/><ellipse cx="70" cy="108" rx="18" ry="22" fill="#fff5e6"/><path d="M37 95 Q42 73 58 78 L54 96Z" fill="#503c32"/><path d="M52 124 Q70 133 88 124" fill="none" stroke={palette.dark} strokeOpacity=".55" strokeWidth="3" strokeLinecap="round"/></g><g className="critter-limbs"><ellipse cx="51" cy="127" rx="10" ry="7" fill={palette.dark}/><ellipse cx="89" cy="127" rx="10" ry="7" fill={palette.dark}/></g><g className="critter-head"><path d="M41 62 L43 27 L61 43 Q70 39 79 43 L98 27 L99 64" fill={`url(#${gradientId})`}/><path d="M48 42 L47 34 L56 45Z M92 42 L95 34 L84 45Z" fill={palette.light}/><ellipse cx="70" cy="61" rx="32" ry="27" fill="#fff5e6"/><path d="M40 51 Q44 33 63 35 L66 63 Q50 77 40 61Z" fill="#503c32"/><path d="M73 36 Q93 34 100 54 L85 65Z" fill="#e7a05f"/><ellipse className="critter-eye" cx="59" cy="61" rx="4" ry="5" fill="#172326"/><ellipse className="critter-eye" cx="82" cy="61" rx="4" ry="5" fill="#172326"/><circle cx="58" cy="59" r="1.4" fill="#fff"/><circle cx="81" cy="59" r="1.4" fill="#fff"/><path d="M66 70 Q70 74 74 70" fill="none" stroke="#172326" strokeWidth="2" strokeLinecap="round"/><path d="M40 68 L20 63M40 75 L19 77M100 68 L120 63M100 75 L121 77" stroke={palette.light} strokeWidth="2" strokeLinecap="round"/></g></>}
    {pet.id === 'dog' && <><g className="critter-tail"><path d="M100 106 C128 112 128 78 108 76" fill="none" stroke={palette.dark} strokeWidth="14" strokeLinecap="round"/><path d="M100 106 C128 112 128 78 108 76" fill="none" stroke={palette.body} strokeWidth="8" strokeLinecap="round"/></g><g className="critter-body"><ellipse cx="70" cy="104" rx="38" ry="32" fill={`url(#${gradientId})`}/><ellipse cx="70" cy="108" rx="17" ry="15" fill={palette.light} opacity=".7"/><path d="M53 121 Q70 130 88 121" fill="none" stroke={palette.dark} strokeOpacity=".45" strokeWidth="3" strokeLinecap="round"/></g><g className="critter-limbs"><ellipse cx="51" cy="127" rx="11" ry="7" fill={palette.dark}/><ellipse cx="90" cy="127" rx="11" ry="7" fill={palette.dark}/></g><g className="critter-head"><ellipse cx="70" cy="60" rx="34" ry="30" fill={`url(#${gradientId})`}/><path d="M45 45 Q25 25 32 70 Q39 84 53 66Z" fill={palette.dark}/><path d="M95 45 Q115 25 108 70 Q101 84 87 66Z" fill={palette.dark}/><ellipse cx="70" cy="71" rx="20" ry="14" fill={palette.light}/><ellipse className="critter-eye" cx="58" cy="59" rx="4" ry="5" fill="#172326"/><ellipse className="critter-eye" cx="82" cy="59" rx="4" ry="5" fill="#172326"/><ellipse cx="70" cy="68" rx="6" ry="4" fill="#172326"/><path d="M65 78 Q70 84 75 78" fill="none" stroke="#d75c63" strokeWidth="3" strokeLinecap="round"/></g></>}
    {pet.id === 'frog' && <><g className="critter-limbs"><ellipse cx="38" cy="112" rx="24" ry="14" fill={palette.dark}/><ellipse cx="102" cy="112" rx="24" ry="14" fill={palette.dark}/></g><g className="critter-body"><ellipse cx="70" cy="100" rx="39" ry="33" fill={`url(#${gradientId})`}/><ellipse cx="70" cy="109" rx="23" ry="17" fill={palette.light}/><circle cx="48" cy="98" r="5" fill={palette.dark} opacity=".55"/><circle cx="94" cy="105" r="5" fill={palette.dark} opacity=".55"/></g><g className="critter-head"><ellipse cx="53" cy="50" rx="17" ry="18" fill={palette.body}/><ellipse cx="87" cy="50" rx="17" ry="18" fill={palette.body}/><circle className="critter-eye" cx="53" cy="48" r="6" fill="#172326"/><circle className="critter-eye" cx="87" cy="48" r="6" fill="#172326"/><circle cx="51" cy="46" r="1.8" fill="#fff"/><circle cx="85" cy="46" r="1.8" fill="#fff"/><path d="M54 76 Q70 87 86 76" fill="none" stroke={palette.dark} strokeWidth="3" strokeLinecap="round"/></g></>}
    {pet.id === 'parrot' && <><path className="critter-perch" d="M29 131 H111" stroke="#8a5b39" strokeWidth="6" strokeLinecap="round"/><g className="critter-body"><path d="M67 119 L48 130 L55 106Z M78 119 L101 130 L91 104Z" fill="#3269b8"/><ellipse cx="70" cy="91" rx="30" ry="40" fill={`url(#${gradientId})`}/><path className="critter-wing" d="M58 78 Q40 100 61 120 Q80 111 85 88Z" fill={palette.light}/><path d="M61 87 Q51 100 65 111" fill="none" stroke="#2f75c9" strokeWidth="7" strokeLinecap="round"/></g><g className="critter-limbs"><path d="M60 119v10M80 119v10" stroke="#d48e32" strokeWidth="5" strokeLinecap="round"/></g><g className="critter-head"><path d="M51 42 Q70 16 89 42 L83 52 Q70 45 57 52Z" fill={palette.light}/><ellipse cx="70" cy="60" rx="29" ry="28" fill={`url(#${gradientId})`}/><path d="M93 57 L118 67 L94 77 Q100 67 93 57Z" fill="#f0d19b"/><ellipse cx="77" cy="56" rx="9" ry="11" fill="#fff"/><ellipse className="critter-eye" cx="79" cy="56" rx="3.5" ry="4.5" fill="#172326"/><path d="M54 40 Q70 29 88 40" fill="none" stroke="#f7c84d" strokeWidth="5" strokeLinecap="round"/></g></>}
    {pet.id === 'snake' && <><g className="critter-body"><path className="critter-snake-body" d="M25 113 C43 91 60 123 78 106 C91 95 101 102 108 91" fill="none" stroke={palette.dark} strokeWidth="18" strokeLinecap="round"/><path d="M25 111 C43 91 60 119 78 103 C91 93 101 100 108 89" fill="none" stroke={`url(#${gradientId})`} strokeWidth="13" strokeLinecap="round"/><path className="critter-snake-highlight" d="M31 107 C45 97 60 116 76 101" fill="none" stroke={palette.light} strokeOpacity=".75" strokeWidth="4" strokeLinecap="round"/><circle cx="48" cy="105" r="3" fill={palette.dark} opacity=".6"/><circle cx="70" cy="108" r="3" fill={palette.dark} opacity=".6"/></g><g className="critter-head"><path d="M96 77 C98 58 116 47 130 58 C140 66 135 84 121 89 C109 93 98 87 96 77Z" fill={`url(#${gradientId})`}/><ellipse className="critter-eye" cx="118" cy="67" rx="4" ry="5" fill="#172326"/><circle cx="117" cy="65" r="1.4" fill="#fff"/><path d="M121 84 Q132 84 139 89" fill="none" stroke={palette.light} strokeWidth="2" strokeLinecap="round"/><path d="M104 84 C99 91 93 94 87 95" fill="none" stroke="#e65a57" strokeWidth="2" strokeLinecap="round"/><path d="M87 95 l-5 -3 M87 95 l-4 4" stroke="#e65a57" strokeWidth="1.5" strokeLinecap="round"/></g></>}
    </g>
    {sleeping && <text className="critter-sleep" x="105" y="28">z</text>}
  </svg>;
}


export function PetCompanion() {
  const [ready, setReady] = useState(false);
  const [selectedId, setSelectedId] = useState<PetId>('cat');
  const [position, setPosition] = useState(defaultPosition);
  const [mode, setMode] = useState<'rest' | 'drag' | 'fall' | 'land'>('rest');
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [selector, setSelector] = useState(false);
  const [sleeping, setSleeping] = useState(false);
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
    if (open || mode !== 'rest' || hidden) return;
    const timer = window.setTimeout(() => setSleeping(true), 18000);
    return () => clearTimeout(timer);
  }, [open, mode, selectedId, hidden, reacting]);
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
    setSleeping(false); setReacting(true); setOpen(value => !value);
    clearTimeout(reactionTimer.current); reactionTimer.current = window.setTimeout(() => setReacting(false), 700);
  }
  function begin(e: ReactPointerEvent<HTMLButtonElement>) {
    if (dragRef.current || (e.pointerType === 'mouse' && e.button !== 0)) return;
    stopMotion(); setSleeping(false);
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
    recent.current = [...recent.current, picked.title].slice(-3); setFact(picked); setSelector(false); setSleeping(false);
  }
  if (!ready) return null;
  if (hidden) return <button className="button critter-restore" onClick={() => { place(floorPosition(positionRef.current)); setHidden(false); save('iqtestreal-pet-hidden', 'false'); }}> <PawPrint size={16}/> Show pet</button>;
  return <aside ref={root} className="critter-companion" data-mode={mode} style={{ left: position.x, top: position.y }} aria-label="Animal companion">
    <button ref={petButton} type="button" className="critter-stage" aria-label={`Interact with ${selected.species} ${selected.name}`} aria-expanded={open}
      onPointerDown={begin} onPointerMove={move} onPointerUp={release} onPointerCancel={e => release(e, true)} onLostPointerCapture={e => release(e, true)}
      onClick={e => { if (e.detail === 0) react(); }}
      onKeyDown={e => { if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { e.preventDefault(); place(floorPosition({ x: positionRef.current.x + (e.key === 'ArrowLeft' ? -24 : 24), y: 0 })); save('iqtestreal-pet-position', JSON.stringify(positionRef.current)); } }}>
      <PetArt pet={selected} dragging={mode === 'drag'} landing={mode === 'land'} reacting={reacting} sleeping={sleeping}/>
    </button>
    {open && <div ref={panel} className="critter-chat" role="dialog" aria-label="Pet companion menu" style={bubble}>
      <div className="critter-chat-head"><span>{selected.name}</span><button aria-label="Close pet menu" onClick={() => { setOpen(false); petButton.current?.focus(); }}><X size={16}/></button></div>
      {fact ? <div aria-live="polite"><h2>{fact.title}</h2><p>{fact.body}</p><a href={fact.source} target="_blank" rel="noopener noreferrer">{fact.sourceLabel} <ExternalLink size={12}/></a></div> : <p>Hi, I’m {selected.name}. Curious about something new?</p>}
      <div className="critter-actions"><button onClick={chooseFact}>{fact ? 'Another fact' : 'Get a fact'}</button><button onClick={() => setSelector(v => !v)} aria-expanded={selector}>Change pet</button><button onClick={() => { stopMotion(); setHidden(true); setOpen(false); save('iqtestreal-pet-hidden', 'true'); }}>Hide pet</button></div>
      {selector && <div className="critter-selector">{pets.map(p => <button key={p.id} aria-label={p.species} aria-pressed={p.id === selectedId} onClick={() => { setSelectedId(p.id); save('iqtestreal-pet', p.id); setSelector(false); setSleeping(false); }}>
        <PetArt pet={p} dragging={false} reacting={false} landing={false} sleeping={false} size="small"/><span>{p.species}</span>
      </button>)}</div>}
    </div>}
  </aside>;
}

