'use client';

import { ExternalLink, Lightbulb, PawPrint, Sparkles, X } from 'lucide-react';
import { useEffect, useRef, useState, type CSSProperties, type PointerEvent as ReactPointerEvent } from 'react';

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

const defaultPosition = { x: 18, y: 190 };
function getPet(id: PetId) { return pets.find((pet) => pet.id === id) ?? pets[0]; }
function pickFact(pool: Fact[]) { return pool[Math.floor(Math.random() * pool.length)]; }
function getPetSize() { if (typeof window === 'undefined') return 72; return window.innerWidth <= 760 ? Math.min(60, Math.max(48, window.innerWidth * 0.15)) : Math.min(80, Math.max(64, window.innerWidth * 0.055)); }
function clampPosition(position: Position): Position { if (typeof window === 'undefined') return position; const size = getPetSize(); const phone = window.innerWidth <= 760; const bottomBand = phone ? 78 : 86; const maxX = Math.min(window.innerWidth - size - 12, phone ? 90 : 120); const minY = Math.max(70, window.innerHeight - size - bottomBand); const maxY = Math.max(minY, window.innerHeight - size - 12); return { x: Math.min(Math.max(10, position.x), Math.max(10, maxX)), y: Math.min(Math.max(minY, position.y), maxY) }; }
function loadPosition(): Position { if (typeof window === 'undefined') return defaultPosition; try { const stored = JSON.parse(window.localStorage.getItem('iqtestreal-pet-position') || 'null') as Position | null; return stored && Number.isFinite(stored.x) && Number.isFinite(stored.y) ? clampPosition(stored) : clampPosition(defaultPosition); } catch { return clampPosition(defaultPosition); } }
function loadPetId(): PetId { if (typeof window === 'undefined') return 'cat'; const stored = window.localStorage.getItem('iqtestreal-pet') as PetId | null; return stored && pets.some((pet) => pet.id === stored) ? stored : 'cat'; }
function loadHidden() { return typeof window !== 'undefined' && window.localStorage.getItem('iqtestreal-pet-hidden') === 'true'; }

function PetArt({ pet, dragging, reacting, landing, sleeping, size = 'large' }: { pet: Pet; dragging: boolean; reacting: boolean; landing: boolean; sleeping: boolean; size?: 'large' | 'small' }) {
  const classes = `pet-art pet-art-${pet.id} pet-art-${size}${dragging ? ' is-dragging' : ''}${reacting ? ' is-reacting' : ''}${landing ? ' is-landing' : ''}${sleeping ? ' is-sleeping' : ''}`;
  const shades: Record<PetId, { body: string; dark: string; light: string }> = {
    cat: { body: '#e7a05f', dark: '#a94f3d', light: '#ffd4a1' },
    dog: { body: '#e5ad67', dark: '#ad693d', light: '#ffe1ad' },
    frog: { body: '#83bf45', dark: '#367a45', light: '#d4eb92' },
    parrot: { body: '#e54e43', dark: '#a72e3e', light: '#f7c84d' },
    snake: { body: '#79a945', dark: '#3d713f', light: '#d4df8b' },
  };
  const palette = shades[pet.id];
  return <svg className={classes} viewBox="0 0 140 150" role="img" aria-label={`${pet.species} companion`} focusable="false">
    <defs><linearGradient id={`pet-${pet.id}-gradient`} x1="0" x2="1" y1="0" y2="1"><stop offset="0" stopColor={palette.light}/><stop offset=".48" stopColor={palette.body}/><stop offset="1" stopColor={palette.dark}/></linearGradient></defs>
    <ellipse className="pet-ground-shadow" cx="70" cy="137" rx="34" ry="5" fill="currentColor" opacity=".12"/>
    {pet.id === 'cat' && <><g className="pet-tail"><path d="M42 112 C13 110 11 73 37 66" fill="none" stroke={palette.dark} strokeWidth="13" strokeLinecap="round"/><path d="M42 112 C13 110 11 73 37 66" fill="none" stroke={palette.body} strokeWidth="8" strokeLinecap="round"/></g><g className="pet-body"><ellipse cx="70" cy="103" rx="36" ry="32" fill={`url(#pet-${pet.id}-gradient)`}/><ellipse cx="70" cy="108" rx="18" ry="16" fill={palette.light} opacity=".55"/><path d="M52 124 Q70 133 88 124" fill="none" stroke={palette.dark} strokeOpacity=".55" strokeWidth="3" strokeLinecap="round"/></g><g className="pet-limbs"><ellipse cx="51" cy="127" rx="10" ry="7" fill={palette.dark}/><ellipse cx="89" cy="127" rx="10" ry="7" fill={palette.dark}/></g><g className="pet-head"><path d="M41 62 L43 27 L61 43 Q70 39 79 43 L98 27 L99 64" fill={`url(#pet-${pet.id}-gradient)`}/><path d="M48 42 L47 34 L56 45Z M92 42 L95 34 L84 45Z" fill={palette.light}/><ellipse cx="70" cy="61" rx="32" ry="27" fill={`url(#pet-${pet.id}-gradient)`}/><ellipse className="pet-eye" cx="59" cy="61" rx="4" ry="5" fill="#172326"/><ellipse className="pet-eye" cx="82" cy="61" rx="4" ry="5" fill="#172326"/><circle cx="58" cy="59" r="1.4" fill="#fff"/><circle cx="81" cy="59" r="1.4" fill="#fff"/><path d="M66 70 Q70 74 74 70" fill="none" stroke="#172326" strokeWidth="2" strokeLinecap="round"/><path d="M40 68 L20 63M40 75 L19 77M100 68 L120 63M100 75 L121 77" stroke={palette.light} strokeWidth="2" strokeLinecap="round"/></g></>}
    {pet.id === 'dog' && <><g className="pet-tail"><path d="M100 106 C128 112 128 78 108 76" fill="none" stroke={palette.dark} strokeWidth="14" strokeLinecap="round"/><path d="M100 106 C128 112 128 78 108 76" fill="none" stroke={palette.body} strokeWidth="8" strokeLinecap="round"/></g><g className="pet-body"><ellipse cx="70" cy="104" rx="38" ry="32" fill={`url(#pet-${pet.id}-gradient)`}/><ellipse cx="70" cy="108" rx="17" ry="15" fill={palette.light} opacity=".7"/><path d="M53 121 Q70 130 88 121" fill="none" stroke={palette.dark} strokeOpacity=".45" strokeWidth="3" strokeLinecap="round"/></g><g className="pet-limbs"><ellipse cx="51" cy="127" rx="11" ry="7" fill={palette.dark}/><ellipse cx="90" cy="127" rx="11" ry="7" fill={palette.dark}/></g><g className="pet-head"><ellipse cx="70" cy="60" rx="34" ry="30" fill={`url(#pet-${pet.id}-gradient)`}/><path d="M45 45 Q25 25 32 70 Q39 84 53 66Z" fill={palette.dark}/><path d="M95 45 Q115 25 108 70 Q101 84 87 66Z" fill={palette.dark}/><ellipse cx="70" cy="71" rx="20" ry="14" fill={palette.light}/><ellipse className="pet-eye" cx="58" cy="59" rx="4" ry="5" fill="#172326"/><ellipse className="pet-eye" cx="82" cy="59" rx="4" ry="5" fill="#172326"/><ellipse cx="70" cy="68" rx="6" ry="4" fill="#172326"/><path d="M65 78 Q70 84 75 78" fill="none" stroke="#d75c63" strokeWidth="3" strokeLinecap="round"/></g></>}
    {pet.id === 'frog' && <><g className="pet-limbs"><ellipse cx="38" cy="112" rx="24" ry="14" fill={palette.dark}/><ellipse cx="102" cy="112" rx="24" ry="14" fill={palette.dark}/></g><g className="pet-body"><ellipse cx="70" cy="100" rx="39" ry="33" fill={`url(#pet-${pet.id}-gradient)`}/><ellipse cx="70" cy="109" rx="23" ry="17" fill={palette.light}/><circle cx="48" cy="98" r="5" fill={palette.dark} opacity=".55"/><circle cx="94" cy="105" r="5" fill={palette.dark} opacity=".55"/></g><g className="pet-head"><ellipse cx="53" cy="50" rx="17" ry="18" fill={palette.body}/><ellipse cx="87" cy="50" rx="17" ry="18" fill={palette.body}/><circle className="pet-eye" cx="53" cy="48" r="6" fill="#172326"/><circle className="pet-eye" cx="87" cy="48" r="6" fill="#172326"/><circle cx="51" cy="46" r="1.8" fill="#fff"/><circle cx="85" cy="46" r="1.8" fill="#fff"/><path d="M54 76 Q70 87 86 76" fill="none" stroke={palette.dark} strokeWidth="3" strokeLinecap="round"/></g></>}
    {pet.id === 'parrot' && <><path className="pet-perch" d="M29 131 H111" stroke="#8a5b39" strokeWidth="6" strokeLinecap="round"/><g className="pet-body"><path d="M67 119 L48 130 L55 106Z M78 119 L101 130 L91 104Z" fill="#3269b8"/><ellipse cx="70" cy="91" rx="30" ry="40" fill={`url(#pet-${pet.id}-gradient)`}/><path className="pet-wing" d="M58 78 Q40 100 61 120 Q80 111 85 88Z" fill={palette.light}/><path d="M61 87 Q51 100 65 111" fill="none" stroke="#2f75c9" strokeWidth="7" strokeLinecap="round"/></g><g className="pet-limbs"><path d="M60 119v10M80 119v10" stroke="#d48e32" strokeWidth="5" strokeLinecap="round"/></g><g className="pet-head"><path d="M51 42 Q70 16 89 42 L83 52 Q70 45 57 52Z" fill={palette.light}/><ellipse cx="70" cy="60" rx="29" ry="28" fill={`url(#pet-${pet.id}-gradient)`}/><path d="M93 57 L118 67 L94 77 Q100 67 93 57Z" fill="#f0d19b"/><ellipse cx="77" cy="56" rx="9" ry="11" fill="#fff"/><ellipse className="pet-eye" cx="79" cy="56" rx="3.5" ry="4.5" fill="#172326"/><path d="M54 40 Q70 29 88 40" fill="none" stroke="#f7c84d" strokeWidth="5" strokeLinecap="round"/></g></>}
    {pet.id === 'snake' && <><g className="pet-body"><path className="pet-snake-body" d="M25 113 C43 91 60 123 78 106 C91 95 101 102 108 91" fill="none" stroke={palette.dark} strokeWidth="18" strokeLinecap="round"/><path d="M25 111 C43 91 60 119 78 103 C91 93 101 100 108 89" fill="none" stroke={`url(#pet-${pet.id}-gradient)`} strokeWidth="13" strokeLinecap="round"/><path className="pet-snake-highlight" d="M31 107 C45 97 60 116 76 101" fill="none" stroke={palette.light} strokeOpacity=".75" strokeWidth="4" strokeLinecap="round"/><circle cx="48" cy="105" r="3" fill={palette.dark} opacity=".6"/><circle cx="70" cy="108" r="3" fill={palette.dark} opacity=".6"/></g><g className="pet-head"><path d="M96 77 C98 58 116 47 130 58 C140 66 135 84 121 89 C109 93 98 87 96 77Z" fill={`url(#pet-${pet.id}-gradient)`}/><ellipse className="pet-eye" cx="118" cy="67" rx="4" ry="5" fill="#172326"/><circle cx="117" cy="65" r="1.4" fill="#fff"/><path d="M121 84 Q132 84 139 89" fill="none" stroke={palette.light} strokeWidth="2" strokeLinecap="round"/><path d="M104 84 C99 91 93 94 87 95" fill="none" stroke="#e65a57" strokeWidth="2" strokeLinecap="round"/><path d="M87 95 l-5 -3 M87 95 l-4 4" stroke="#e65a57" strokeWidth="1.5" strokeLinecap="round"/></g></>}
    {sleeping && <text className="pet-sleep" x="105" y="28">z</text>}
  </svg>;
}

function nextReaction(current: number, count: number) { return (current + 1) % count; }

export function PetCompanion() {
  const [open, setOpen] = useState(false);
  const [showSelector, setShowSelector] = useState(false);
  // Render stable defaults on the server and hydrate saved preferences after
  // mount so localStorage never causes a client/server markup mismatch.
  const [selectedId, setSelectedId] = useState<PetId>('cat');
  const [position, setPosition] = useState<Position>(defaultPosition);
  const [hidden, setHidden] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [landing, setLanding] = useState(false);
  const [reacting, setReacting] = useState(false);
  const [sleeping, setSleeping] = useState(false);
  const [reaction, setReaction] = useState(0);
  const [fact, setFact] = useState<Fact | null>(null);
  const [recentFacts, setRecentFacts] = useState<string[]>([]);
  const dragRef = useRef<DragState | null>(null);
  const selected = getPet(selectedId);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setSelectedId(loadPetId());
      setPosition(loadPosition());
      setHidden(loadHidden());
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const keepVisible = () => setPosition((current) => clampPosition(current));
    window.addEventListener('resize', keepVisible);
    return () => window.removeEventListener('resize', keepVisible);
  }, []);
  useEffect(() => { const timeout = window.setTimeout(() => setSleeping(true), 18000); return () => window.clearTimeout(timeout); }, [selectedId, open, reacting, position]);
  useEffect(() => { if (!open) return; const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); }; window.addEventListener('keydown', onKeyDown); return () => window.removeEventListener('keydown', onKeyDown); }, [open]);

  function wakePet() { setSleeping(false); }
  function reactToTap() { wakePet(); setReaction((value) => nextReaction(value, selected.reactions.length)); setReacting(true); setOpen(true); window.setTimeout(() => setReacting(false), 600); }
  function selectPet(id: PetId) { wakePet(); setSelectedId(id); setReaction(0); setFact(null); window.localStorage.setItem('iqtestreal-pet', id); }
  function chooseFact() { wakePet(); const available = facts.filter((item) => !recentFacts.includes(item.title)); const pool = available.length ? available : facts; const picked = pickFact(pool); setFact(picked); setRecentFacts((items) => [...items.filter((item) => item !== picked.title), picked.title].slice(-3)); setOpen(true); }
  function hidePet() { setHidden(true); setOpen(false); window.localStorage.setItem('iqtestreal-pet-hidden', 'true'); }
  function restorePet() { setHidden(false); wakePet(); window.localStorage.removeItem('iqtestreal-pet-hidden'); }
  function clampAndSave(next: Position) { const safe = clampPosition(next); setPosition(safe); window.localStorage.setItem('iqtestreal-pet-position', JSON.stringify(safe)); }
  function beginDrag(event: ReactPointerEvent<HTMLButtonElement>) { if (event.pointerType === 'mouse' && event.button !== 0) return; wakePet(); dragRef.current = { pointerId: event.pointerId, startX: event.clientX, startY: event.clientY, originX: position.x, originY: position.y, moved: false }; event.currentTarget.setPointerCapture(event.pointerId); }
  function moveDrag(event: ReactPointerEvent<HTMLButtonElement>) { const drag = dragRef.current; if (!drag || drag.pointerId !== event.pointerId) return; const dx = event.clientX - drag.startX; const dy = event.clientY - drag.startY; if (!drag.moved && Math.hypot(dx, dy) > 6) drag.moved = true; if (drag.moved) { event.preventDefault(); setDragging(true); setPosition(clampPosition({ x: drag.originX + dx, y: drag.originY + dy })); } }
  function endDrag(event: ReactPointerEvent<HTMLButtonElement>) { const drag = dragRef.current; if (!drag || drag.pointerId !== event.pointerId) return; const dx = event.clientX - drag.startX; const dy = event.clientY - drag.startY; const finalPosition = clampPosition({ x: drag.originX + dx, y: drag.originY + dy }); dragRef.current = null; setDragging(false); if (drag.moved) { clampAndSave(finalPosition); setLanding(true); window.setTimeout(() => setLanding(false), 520); } else reactToTap(); }
  function onPetKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); reactToTap(); } }
  if (hidden) return <button type="button" className="button pet-restore" onClick={restorePet}><PawPrint size={14}/> Show pet</button>;

  const bubbleSide = typeof window !== 'undefined' && position.x > window.innerWidth / 2 ? 'bubble-left' : 'bubble-right';
  const bubbleVertical = typeof window !== 'undefined' && position.y < 220 ? 'bubble-down' : 'bubble-up';
  const style = { left: position.x, top: position.y } as CSSProperties;
  const artState = { pet: selected, dragging, reacting, landing, sleeping };

  return <aside className={`pet-companion ${dragging ? 'is-dragging' : ''}`} style={style} aria-label="Interactive animal companion">
    {open && <div className={`pet-bubble ${bubbleSide} ${bubbleVertical}`} role="dialog" aria-label="Pet companion menu"><div className="pet-bubble-tail" aria-hidden="true"/><div className="pet-bubble-head"><span><Sparkles size={14}/> {selected.name} says</span><button type="button" className="pet-close" onClick={() => setOpen(false)} aria-label="Close pet menu"><X size={16}/></button></div>{fact ? <div className="pet-fact" aria-live="polite"><span className="pet-fact-category"><Lightbulb size={13}/> {fact.category}</span><h2>{fact.title}</h2><p>{fact.body}</p>{fact.source && <a href={fact.source} target="_blank" rel="noopener noreferrer">Source: {fact.sourceLabel} <ExternalLink size={12}/></a>}</div> : <p className="pet-speech" aria-live="polite">“{selected.reactions[reaction]}”</p>}<div className="pet-actions"><button type="button" onClick={chooseFact}>Tell me a fact</button><button type="button" onClick={chooseFact}>Another fact</button><button type="button" onClick={() => { setShowSelector((value) => !value); setFact(null); }}>Change pet</button><button type="button" onClick={hidePet}>Hide pet</button></div>{showSelector && <div className="pet-selector" aria-label="Choose an animal">{pets.map((pet) => <button type="button" key={pet.id} className={pet.id === selectedId ? 'is-selected' : ''} onClick={() => selectPet(pet.id)} aria-pressed={pet.id === selectedId}><PetArt pet={pet} dragging={false} reacting={false} landing={false} sleeping={false} size="small"/><span>{pet.species}</span></button>)}</div>}<small className="pet-disclaimer">Facts are for curiosity and learning—not a promise of a higher IQ.</small></div>}
    <button type="button" className="pet-stage" onPointerDown={beginDrag} onPointerMove={moveDrag} onPointerUp={endDrag} onPointerCancel={endDrag} onKeyDown={onPetKeyDown} aria-label={`Interact with ${selected.species} ${selected.name}`} aria-expanded={open}><PetArt {...artState}/></button>
  </aside>;
}

