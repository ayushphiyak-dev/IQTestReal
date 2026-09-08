'use client';

import { Heart, PawPrint, Sparkles, X } from 'lucide-react';
import { useEffect, useState, type CSSProperties } from 'react';

type PetId = 'cat' | 'dog' | 'frog' | 'snake' | 'parrot';
type Pet = { id: PetId; name: string; species: string; emoji: string; color: string; reactions: string[] };

const pets: Pet[] = [
  { id: 'cat', name: 'Mochi', species: 'Cat', emoji: '🐱', color: '#f0a36b', reactions: ['Purrfect focus!', 'Tiny steps still count.', 'You have got this, whiskers-first.'] },
  { id: 'dog', name: 'Biscuit', species: 'Dog', emoji: '🐶', color: '#d48b5d', reactions: ['Tail-wagging progress!', 'Great work, clever pup.', 'One more question? Let us go!'] },
  { id: 'frog', name: 'Moss', species: 'Frog', emoji: '🐸', color: '#65b77b', reactions: ['Hop into the next idea.', 'A calm mind spots patterns.', 'Ribbit! That was a smart move.'] },
  { id: 'snake', name: 'Noodle', species: 'Snake', emoji: '🐍', color: '#72a879', reactions: ['Stay curious and keep sliding forward.', 'Flexible thinking wins tricky puzzles.', 'Sssmart choice!'] },
  { id: 'parrot', name: 'Pico', species: 'Parrot', emoji: '🦜', color: '#e07058', reactions: ['Say it aloud to remember it.', 'Bright ideas like a little repetition.', 'You are learning in full color.'] },
];

function getPet(id: PetId) { return pets.find((pet) => pet.id === id) ?? pets[0]; }

export function PetCompanion() {
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<PetId>(() => {
    if (typeof window === 'undefined') return 'cat';
    const stored = window.localStorage.getItem('iqtestreal-pet') as PetId | null;
    return stored && pets.some((pet) => pet.id === stored) ? stored : 'cat';
  });
  const [reaction, setReaction] = useState(0);
  const [patting, setPatting] = useState(false);
  const selected = getPet(selectedId);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  function selectPet(id: PetId) {
    setSelectedId(id);
    setReaction(0);
    window.localStorage.setItem('iqtestreal-pet', id);
  }

  function patPet() {
    setReaction((value) => (value + 1) % selected.reactions.length);
    setPatting(true);
    window.setTimeout(() => setPatting(false), 520);
  }

  return <aside className={`pet-companion${open ? ' is-open' : ''}`} aria-label="Choose your IQTestReal study pet">
    {open && <div className="pet-panel" role="dialog" aria-label="Study pet chooser">
      <div className="pet-panel-head"><span><PawPrint size={14}/> Study pet</span><button type="button" className="pet-close" onClick={() => setOpen(false)} aria-label="Close study pet"><X size={16}/></button></div>
      <div className="pet-hero" style={{ '--pet-color': selected.color } as CSSProperties}>
        <div className={`pet-avatar${patting ? ' is-patting' : ''}`} aria-hidden="true">{selected.emoji}</div>
        <div><strong>{selected.name}</strong><span>{selected.species} companion</span></div>
        <button type="button" className="pet-pat" onClick={patPet}><Heart size={14}/> Pat</button>
      </div>
      <p className="pet-reaction" aria-live="polite">“{selected.reactions[reaction]}”</p>
      <div className="pet-choices" aria-label="Choose a pet">{pets.map((pet) => <button type="button" key={pet.id} className={pet.id === selectedId ? 'is-selected' : ''} onClick={() => selectPet(pet.id)} aria-pressed={pet.id === selectedId} aria-label={`Choose ${pet.species} ${pet.name}`}><span aria-hidden="true">{pet.emoji}</span><small>{pet.species}</small></button>)}</div>
      <small className="pet-note">Your choice is saved on this device. A little encouragement, no distractions.</small>
    </div>}
    <button type="button" className="pet-toggle" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? 'Close study pet' : `Open ${selected.species} study pet`}>
      <span className={`pet-toggle-avatar${patting ? ' is-patting' : ''}`} aria-hidden="true">{selected.emoji}</span><span className="pet-toggle-copy"><b>{selected.name}</b><small>Study pet</small></span><Sparkles className="pet-toggle-spark" size={15} aria-hidden="true"/>
    </button>
  </aside>;
}

