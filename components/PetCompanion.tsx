'use client';

import { ExternalLink, Lightbulb, PawPrint, Sparkles, X } from 'lucide-react';
import { useEffect, useRef, useState, type CSSProperties, type PointerEvent as ReactPointerEvent } from 'react';

type PetId = 'cat' | 'dog' | 'frog' | 'parrot' | 'rabbit' | 'panda';
type Position = { x: number; y: number };
type Fact = { category: string; title: string; body: string; source?: string; sourceLabel?: string };
type DragState = { pointerId: number; startX: number; startY: number; originX: number; originY: number; moved: boolean };
type Pet = { id: PetId; name: string; species: string; color: string; reactions: string[] };

const pets: Pet[] = [
  { id: 'cat', name: 'Mochi', species: 'Cat', color: '#f0a36b', reactions: ['Purrfect focus!', 'Tiny steps still count.', 'You have got this, whiskers-first.'] },
  { id: 'dog', name: 'Biscuit', species: 'Dog', color: '#d48b5d', reactions: ['Tail-wagging progress!', 'Great work, clever pup.', 'One more question? Let us go!'] },
  { id: 'frog', name: 'Moss', species: 'Frog', color: '#65b77b', reactions: ['Hop into the next idea.', 'A calm mind spots patterns.', 'Ribbit! That was a smart move.'] },
  { id: 'parrot', name: 'Pico', species: 'Parrot', color: '#e07058', reactions: ['Say it aloud to remember it.', 'Bright ideas like a little repetition.', 'You are learning in full color.'] },
  { id: 'rabbit', name: 'Clover', species: 'Rabbit', color: '#d9a8c7', reactions: ['Soft focus is still focus.', 'Your curiosity is hopping along.', 'Those ears heard a clever idea.'] },
  { id: 'panda', name: 'Bamboo', species: 'Panda', color: '#91a7a3', reactions: ['Slow and steady is a strategy.', 'A calm puzzle is a friendly puzzle.', 'Stretch, breathe, then try again.'] },
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
function getPetSize() { return typeof window === 'undefined' ? 96 : Math.min(126, Math.max(76, window.innerWidth * 0.11)); }
function clampPosition(position: Position): Position { if (typeof window === 'undefined') return position; const size = getPetSize(); return { x: Math.min(Math.max(8, position.x), Math.max(8, window.innerWidth - size - 12)), y: Math.min(Math.max(78, position.y), Math.max(78, window.innerHeight - size - 12)) }; }
function loadPosition(): Position { if (typeof window === 'undefined') return defaultPosition; try { const stored = JSON.parse(window.localStorage.getItem('iqtestreal-pet-position') || 'null') as Position | null; return stored && Number.isFinite(stored.x) && Number.isFinite(stored.y) ? clampPosition(stored) : clampPosition(defaultPosition); } catch { return clampPosition(defaultPosition); } }
function loadPetId(): PetId { if (typeof window === 'undefined') return 'cat'; const stored = window.localStorage.getItem('iqtestreal-pet') as PetId | null; return stored && pets.some((pet) => pet.id === stored) ? stored : 'cat'; }
function loadHidden() { return typeof window !== 'undefined' && window.localStorage.getItem('iqtestreal-pet-hidden') === 'true'; }

function PetArt({ pet, dragging, reacting, landing, sleeping, size = 'large' }: { pet: Pet; dragging: boolean; reacting: boolean; landing: boolean; sleeping: boolean; size?: 'large' | 'small' }) {
  const classes = `pet-art pet-art-${pet.id} pet-art-${size}${dragging ? ' is-dragging' : ''}${reacting ? ' is-reacting' : ''}${landing ? ' is-landing' : ''}${sleeping ? ' is-sleeping' : ''}`;
  const eye = <g className="pet-eyes"><ellipse className="pet-eye" cx="60" cy="61" rx="3.1" ry="4.5" fill="#192326"/><ellipse className="pet-eye" cx="83" cy="61" rx="3.1" ry="4.5" fill="#192326"/></g>;
  const smile = <path className="pet-mouth" d="M68 72 Q72 77 76 72" fill="none" stroke="#192326" strokeWidth="2" strokeLinecap="round"/>;
  return <svg className={classes} viewBox="0 0 140 150" role="img" aria-label={`${pet.species} companion`} focusable="false">
    <ellipse className="pet-ground-shadow" cx="70" cy="137" rx="35" ry="5" fill="currentColor" opacity=".12"/>
    {pet.id === 'cat' && <><g className="pet-tail"><path d="M38 105 C13 104 10 74 33 69" fill="none" stroke={pet.color} strokeWidth="10" strokeLinecap="round"/><path d="M38 105 C13 104 10 74 33 69" fill="none" stroke="#fff" strokeOpacity=".18" strokeWidth="3" strokeLinecap="round"/></g><g className="pet-body"><ellipse cx="70" cy="102" rx="35" ry="31" fill={pet.color}/><path d="M48 111 Q70 130 92 111" fill="none" stroke="#fff" strokeOpacity=".2" strokeWidth="4" strokeLinecap="round"/></g><g className="pet-limbs"><path d="M52 119v14M88 119v14" stroke={pet.color} strokeWidth="10" strokeLinecap="round"/></g><g className="pet-head"><path d="M42 64 L42 30 L59 45 Q70 40 81 45 L99 30 L98 66" fill={pet.color}/><ellipse cx="70" cy="61" rx="31" ry="27" fill={pet.color}/>{eye}<path d="M67 67 L70 70 L73 67" fill="none" stroke="#192326" strokeWidth="2" strokeLinecap="round"/>{smile}<path d="M40 68 L22 64M40 75 L21 77M100 68 L118 64M100 75 L119 77" stroke={pet.color} strokeWidth="2" strokeLinecap="round"/></g></>}
    {pet.id === 'dog' && <><g className="pet-tail"><path d="M101 104 C128 108 126 78 109 78" fill="none" stroke={pet.color} strokeWidth="11" strokeLinecap="round"/></g><g className="pet-body"><ellipse cx="70" cy="104" rx="37" ry="32" fill={pet.color}/><ellipse cx="71" cy="108" rx="17" ry="15" fill="#fff" opacity=".3"/></g><g className="pet-limbs"><path d="M51 120v13M90 120v13" stroke={pet.color} strokeWidth="11" strokeLinecap="round"/></g><g className="pet-head"><ellipse cx="70" cy="59" rx="34" ry="30" fill={pet.color}/><path d="M44 45 Q28 28 34 72 Q41 80 51 66M96 45 Q112 28 106 72 Q99 80 89 66" fill={pet.color}/><ellipse cx="70" cy="70" rx="19" ry="13" fill="#f7dfc7"/>{eye}<ellipse cx="70" cy="68" rx="5" ry="4" fill="#192326"/>{smile}</g></>}
    {pet.id === 'frog' && <><g className="pet-limbs"><ellipse cx="38" cy="111" rx="23" ry="13" fill={pet.color}/><ellipse cx="102" cy="111" rx="23" ry="13" fill={pet.color}/></g><g className="pet-body"><ellipse cx="70" cy="99" rx="38" ry="32" fill={pet.color}/><ellipse cx="70" cy="108" rx="22" ry="16" fill="#c9ef9d" opacity=".65"/></g><g className="pet-head"><ellipse cx="54" cy="50" rx="16" ry="17" fill={pet.color}/><ellipse cx="86" cy="50" rx="16" ry="17" fill={pet.color}/><ellipse cx="70" cy="64" rx="33" ry="25" fill={pet.color}/><circle className="pet-eye" cx="54" cy="48" r="5" fill="#192326"/><circle className="pet-eye" cx="86" cy="48" r="5" fill="#192326"/><path d="M54 76 Q70 87 86 76" fill="none" stroke="#192326" strokeWidth="3" strokeLinecap="round"/></g></>}
    {pet.id === 'parrot' && <><path className="pet-perch" d="M30 130 H110" stroke="#9a6a3a" strokeWidth="6" strokeLinecap="round"/><g className="pet-body"><ellipse cx="71" cy="91" rx="29" ry="40" fill={pet.color}/><path className="pet-wing" d="M58 80 Q42 105 63 119 Q81 110 83 91" fill="#f6c64f"/></g><g className="pet-limbs"><path d="M60 119v9M80 119v9" stroke="#d48e32" strokeWidth="4" strokeLinecap="round"/></g><g className="pet-head"><path d="M51 39 Q70 17 89 39 L83 50 Q70 43 57 50Z" fill="#f6c64f"/><ellipse cx="70" cy="60" rx="28" ry="27" fill={pet.color}/><path d="M93 58 L116 67 L94 76Z" fill="#f6c64f"/><ellipse className="pet-eye" cx="77" cy="56" rx="3.5" ry="4.5" fill="#192326"/><path d="M53 38 Q70 28 89 39" fill="none" stroke="#f6c64f" strokeWidth="5" strokeLinecap="round"/></g></>}
    {pet.id === 'rabbit' && <><g className="pet-limbs"><path d="M51 117v14M89 117v14" stroke={pet.color} strokeWidth="10" strokeLinecap="round"/></g><circle className="pet-tail" cx="103" cy="102" r="12" fill="#fff"/><g className="pet-body"><ellipse cx="70" cy="103" rx="34" ry="31" fill={pet.color}/></g><g className="pet-head"><path className="pet-ear pet-ear-one" d="M48 43 Q36 4 52 8 Q65 14 62 49Z" fill={pet.color}/><path className="pet-ear pet-ear-two" d="M78 44 Q81 4 96 12 Q105 25 88 52Z" fill={pet.color}/><ellipse cx="70" cy="62" rx="30" ry="27" fill={pet.color}/>{eye}<path d="M66 72 Q70 76 74 72" fill="none" stroke="#192326" strokeWidth="2" strokeLinecap="round"/>{smile}</g></>}
    {pet.id === 'panda' && <><g className="pet-limbs"><ellipse cx="39" cy="104" rx="12" ry="20" fill="#1d282a"/><ellipse cx="101" cy="104" rx="12" ry="20" fill="#1d282a"/><path d="M53 119v13M87 119v13" stroke="#1d282a" strokeWidth="12" strokeLinecap="round"/></g><g className="pet-body"><ellipse cx="70" cy="102" rx="34" ry="33" fill="#f6f4ef"/><ellipse cx="70" cy="109" rx="17" ry="16" fill="#d8e0dc"/></g><g className="pet-head"><circle cx="49" cy="41" r="13" fill="#1d282a"/><circle cx="91" cy="41" r="13" fill="#1d282a"/><ellipse cx="70" cy="61" rx="32" ry="29" fill="#f6f4ef"/><ellipse className="pet-eye-patch" cx="57" cy="60" rx="9" ry="12" fill="#1d282a" transform="rotate(28 57 60)"/><ellipse className="pet-eye-patch" cx="83" cy="60" rx="9" ry="12" fill="#1d282a" transform="rotate(-28 83 60)"/><circle className="pet-eye" cx="59" cy="61" r="3" fill="#fff"/><circle className="pet-eye" cx="81" cy="61" r="3" fill="#fff"/><ellipse cx="70" cy="72" rx="7" ry="5" fill="#1d282a"/>{smile}</g></>}
    {sleeping && <text className="pet-sleep" x="105" y="28">z</text>}
  </svg>;
}

function nextReaction(current: number, count: number) { return (current + 1) % count; }

export function PetCompanion() {
  const [open, setOpen] = useState(false);
  const [showSelector, setShowSelector] = useState(false);
  const [selectedId, setSelectedId] = useState<PetId>(loadPetId);
  const [position, setPosition] = useState<Position>(loadPosition);
  const [hidden, setHidden] = useState(loadHidden);
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
  function endDrag(event: ReactPointerEvent<HTMLButtonElement>) { const drag = dragRef.current; if (!drag || drag.pointerId !== event.pointerId) return; dragRef.current = null; setDragging(false); if (drag.moved) { clampAndSave(position); setLanding(true); window.setTimeout(() => setLanding(false), 520); } else reactToTap(); }
  function onPetKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); reactToTap(); } }
  if (hidden) return <button type="button" className="pet-restore" onClick={restorePet}><PawPrint size={14}/> Show pet</button>;

  const bubbleSide = typeof window !== 'undefined' && position.x > window.innerWidth / 2 ? 'bubble-left' : 'bubble-right';
  const bubbleVertical = typeof window !== 'undefined' && position.y < 220 ? 'bubble-down' : 'bubble-up';
  const style = { left: position.x, top: position.y } as CSSProperties;
  const artState = { pet: selected, dragging, reacting, landing, sleeping };

  return <aside className={`pet-companion ${dragging ? 'is-dragging' : ''}`} style={style} aria-label="Interactive animal companion">
    {open && <div className={`pet-bubble ${bubbleSide} ${bubbleVertical}`} role="dialog" aria-label="Pet companion menu"><div className="pet-bubble-tail" aria-hidden="true"/><div className="pet-bubble-head"><span><Sparkles size={14}/> {selected.name} says</span><button type="button" className="pet-close" onClick={() => setOpen(false)} aria-label="Close pet menu"><X size={16}/></button></div>{fact ? <div className="pet-fact" aria-live="polite"><span className="pet-fact-category"><Lightbulb size={13}/> {fact.category}</span><h2>{fact.title}</h2><p>{fact.body}</p>{fact.source && <a href={fact.source} target="_blank" rel="noopener noreferrer">Source: {fact.sourceLabel} <ExternalLink size={12}/></a>}</div> : <p className="pet-speech" aria-live="polite">“{selected.reactions[reaction]}”</p>}<div className="pet-actions"><button type="button" onClick={chooseFact}>Tell me a fact</button><button type="button" onClick={chooseFact}>Another fact</button><button type="button" onClick={() => { setShowSelector((value) => !value); setFact(null); }}>Change pet</button><button type="button" onClick={hidePet}>Hide pet</button></div>{showSelector && <div className="pet-selector" aria-label="Choose an animal">{pets.map((pet) => <button type="button" key={pet.id} className={pet.id === selectedId ? 'is-selected' : ''} onClick={() => selectPet(pet.id)} aria-pressed={pet.id === selectedId}><PetArt pet={pet} dragging={false} reacting={false} landing={false} sleeping={false} size="small"/><span>{pet.species}</span></button>)}</div>}<small className="pet-disclaimer">Facts are for curiosity and learning—not a promise of a higher IQ.</small></div>}
    <button type="button" className="pet-stage" onPointerDown={beginDrag} onPointerMove={moveDrag} onPointerUp={endDrag} onPointerCancel={endDrag} onKeyDown={onPetKeyDown} aria-label={`Interact with ${selected.species} ${selected.name}`} aria-expanded={open}><PetArt {...artState}/></button>
  </aside>;
}

