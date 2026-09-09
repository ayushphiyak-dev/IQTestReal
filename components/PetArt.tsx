'use client';

import { useId } from 'react';

export type PetActivity = 'idle' | 'call' | 'play' | 'stretch' | 'catch';
type Props = {
  pet: { id: 'cat' | 'dog' | 'frog'; species: string };
  dragging: boolean; reacting: boolean; landing: boolean; sleeping: boolean;
  activity?: PetActivity; size?: 'large' | 'small'; gaze?: { x: number; y: number };
};

// Every moving feature lives under its anatomical parent. Joint origins are
// expressed in the shared viewBox; no independent translating body fragments.
export function PetArt({ pet, dragging, reacting, landing, sleeping, activity = 'idle', size = 'large', gaze = { x: 0, y: 0 } }: Props) {
  const id = useId();
  const frog = pet.id === 'frog';
  const cat = pet.id === 'cat';
  const state = dragging ? 'lift' : landing ? 'land' : sleeping ? 'sleep' : reacting ? 'greet' : activity;
  const coat = `url(#${id}-coat)`;
  const cream = `url(#${id}-cream)`;
  const eye = (x: number, y: number) => {
    const shiftX = Math.max(-1, Math.min(1, gaze.x)) * 2;
    const shiftY = Math.max(-1, Math.min(1, gaze.y)) * 1.5;
    return <g>
      <defs><clipPath id={`${id}-eye-${x}`}><ellipse cx={x} cy={y} rx={frog ? 9 : 6} ry={frog ? 10 : 8}/></clipPath></defs>
      <g className="animal-eye" style={{ transformOrigin: `${x}px ${y}px` }}>
        <ellipse cx={x} cy={y} rx={frog ? 9 : 6} ry={frog ? 10 : 8} fill={frog ? '#e7cc68' : '#98734e'}/>
        <g clipPath={`url(#${id}-eye-${x})`}>
          <g className="animal-pupil" style={{ transform: `translate(${shiftX}px, ${shiftY}px)` }}>
            <ellipse cx={x + 1} cy={y + 1} rx={frog ? 4 : 4.5} ry={frog ? 7 : 6} fill="#202a2c"/>
            <circle cx={x - 1} cy={y - 3} r="2" fill="#fff"/>
            <circle cx={x + 2} cy={y + 3} r=".8" fill="#fff" opacity=".45"/>
          </g>
        </g>
      </g>
      <path className="animal-sleep-eye" d={`M${x - 5} ${y} q5 4 10 0`} fill="none" stroke="#514333" strokeWidth="2" strokeLinecap="round"/>
    </g>;
  };
  return <svg className={`animal animal-${pet.id} animal-${size}`} data-activity={state} viewBox="0 0 160 160" role="img" aria-label={`${pet.species} companion${state === 'sleep' ? ', sleeping' : state === 'lift' ? ', picked up' : ''}`} focusable="false">
    <defs>
      <radialGradient id={`${id}-coat`} cx="32%" cy="20%" r="85%"><stop stopColor={frog ? '#c3df68' : '#ffe4b9'}/><stop offset=".5" stopColor={frog ? '#80b746' : cat ? '#edac69' : '#d9a461'}/><stop offset="1" stopColor={frog ? '#3b824f' : '#aa6742'}/></radialGradient>
      <radialGradient id={`${id}-cream`} cx="40%" cy="20%" r="90%"><stop stopColor="#fff9eb"/><stop offset="1" stopColor={frog ? '#c7d995' : '#dec7a7'}/></radialGradient>
    </defs>
    <ellipse className="animal-shadow" cx="80" cy="149" rx="43" ry="5" fill="#172326" opacity=".15"/>
    <g className="animal-pose">
      <g className="animal-breath">
        {frog ? <>
          <g className="animal-haunches" fill={coat}><path d="M48 101 C16 96 13 135 37 143 L66 140Z"/><path d="M111 101 C143 96 148 136 121 144 L95 140Z"/></g>
          <path d="M43 88 C49 68 111 67 119 92 L123 121 Q117 145 80 146 Q43 145 36 124Z" fill={coat}/>
          <ellipse cx="80" cy="120" rx="29" ry="23" fill={cream}/><path d="M63 116 Q80 108 97 116" fill="none" stroke="#fffbe1" strokeWidth="3" opacity=".35" strokeLinecap="round"/>
          <path d="M46 104 Q38 120 47 138 M113 104 Q125 122 114 138" fill="none" stroke="#86b946" strokeWidth="13" strokeLinecap="round"/>
          <path d="M47 136 l-12 8 m12-8 -1 11 m1-11 10 9 M114 136 l-10 9 m10-9 2 11 m-2-11 12 8" fill="none" stroke="#d1b653" strokeWidth="5" strokeLinecap="round"/>
          <g className="animal-head">
            <path d="M35 74 C29 49 50 38 63 53 Q80 44 97 53 C111 38 133 50 126 74 Q139 100 81 105 Q22 100 35 74Z" fill={coat}/>
            <path d="M40 88 Q81 108 123 88 Q115 110 80 113 Q45 108 40 88Z" fill={cream}/>
            <path d="M40 61 Q48 47 60 58 M102 58 Q113 47 122 61" fill="none" stroke="#eff6bf" strokeWidth="3" opacity=".45" strokeLinecap="round"/>{eye(51, 68)}{eye(111, 68)}<ellipse cx="46" cy="87" rx="7" ry="3" fill="#e5bd7e" opacity=".32"/><ellipse cx="116" cy="87" rx="7" ry="3" fill="#e5bd7e" opacity=".32"/>
            <path className="animal-frog-neutral" d="M57 96 Q80 99 103 96" fill="none" stroke="#35583e" strokeWidth="2.5" strokeLinecap="round"/>
            <path className="animal-smile animal-frog-smile" d="M53 91 Q80 102 108 91" fill="none" stroke="#35583e" strokeWidth="2.5" strokeLinecap="round"/>
            <path className="animal-worried" d="M56 96 Q80 86 105 96 M43 54 l13-4 M106 50 l13 4" fill="none" stroke="#35583e" strokeWidth="3" strokeLinecap="round"/>
            <path className="animal-tongue" d="M85 95 L139 47" stroke="#e59196" strokeWidth="5" strokeLinecap="round"/>
          </g>
          <g fill="#4d8c49" opacity=".5"><circle cx="36" cy="122" r="4"/><circle cx="124" cy="119" r="5"/><circle cx="116" cy="128" r="3"/></g>
        </> : <>
          <g className="animal-tail" style={{ transformOrigin: cat ? '48px 126px' : '115px 114px' }}>
            <path d={cat ? 'M48 126 C15 140 14 110 29 94 Q40 82 28 77' : 'M113 115 C144 125 152 93 138 87 Q133 100 120 98'} fill={cat ? 'none' : coat} stroke={cat ? '#b97b52' : '#c08b53'} strokeWidth={cat ? 13 : 3} strokeLinecap="round"/>
            {cat && <path d="M24 104 Q17 93 29 88" fill="none" stroke="#f8e5cc" strokeWidth="13" strokeLinecap="round"/>}
          </g>
          <path d="M53 85 C38 97 32 127 46 141 Q79 154 111 142 C131 130 120 101 105 85Z" fill={coat}/>
          <path d="M62 85 Q81 96 99 86 L102 130 Q80 148 58 130Z" fill={cream}/>
          {cat && <path d="M43 111 Q38 132 54 135 L61 107Z" fill="#54443c"/>}
          <g className="animal-foreleg animal-foreleg-left" style={{ transformOrigin: '62px 101px' }}><path d="M62 101 Q55 119 57 141" fill="none" stroke={cat ? '#f8eedc' : '#e4b87e'} strokeWidth="14" strokeLinecap="round"/><ellipse cx="58" cy="142" rx="12" ry="6" fill={cream}/><path d="M54 141 v4 m5-4 v4" stroke="#b49b80" strokeWidth="1.3"/></g>
          <g className="animal-foreleg animal-foreleg-right" style={{ transformOrigin: '98px 101px' }}><path d="M98 101 Q105 120 101 141" fill="none" stroke={cat ? '#f8eedc' : '#e4b87e'} strokeWidth="14" strokeLinecap="round"/><ellipse cx="102" cy="142" rx="12" ry="6" fill={cream}/><path d="M98 141 v4 m5-4 v4" stroke="#b49b80" strokeWidth="1.3"/></g>
          <g className="animal-head">
            {cat && <><path d="M43 64 L42 25 Q57 28 65 48 M95 47 Q104 29 118 26 L116 67" fill={coat}/><path d="M47 36 L50 58 L60 48 M102 49 L110 37 L111 59" fill="#d89490"/></>}
            <path d="M44 56 Q55 39 80 43 Q110 39 121 62 L124 80 Q118 103 80 105 Q42 101 37 79Z" fill={cat ? cream : coat}/>
            {cat ? <><path d="M43 55 Q52 42 70 44 L72 73 Q59 86 41 75Z" fill="#51453e"/><path d="M87 43 Q113 43 121 64 L105 75 L89 61Z" fill="#d99654"/></> : <><g className="animal-ear animal-ear-left" style={{ transformOrigin: '46px 55px' }}><path d="M48 51 Q27 41 28 69 Q29 100 44 88 L55 57Z" fill="#a5744a"/><path d="M40 57 Q33 76 40 83" fill="none" stroke="#d3a477" strokeWidth="5" strokeLinecap="round"/></g><g className="animal-ear animal-ear-right" style={{ transformOrigin: '113px 55px' }}><path d="M111 51 Q132 41 132 70 Q131 100 117 88 L105 57Z" fill="#a5744a"/><path d="M122 57 Q129 76 122 83" fill="none" stroke="#d3a477" strokeWidth="5" strokeLinecap="round"/></g></>}
            <path d="M54 60 Q62 54 69 59 M92 59 Q101 55 108 62" fill="none" stroke="#fff4dc" strokeWidth="3" opacity=".45" strokeLinecap="round"/>{eye(63, 73)}{eye(99, 73)}
            <ellipse cx="73" cy="88" rx="13" ry="9" fill={cream}/><ellipse cx="88" cy="88" rx="13" ry="9" fill={cream}/>
            <path d="M74 83 Q80 80 86 83 Q83 91 80 89 Q76 88 74 83Z" fill={cat ? '#b77778' : '#343033'}/>
            <path className="animal-smile" d="M80 89 v4 m0-1 q-6 7-12 1 m12-1 q6 7 12 1" fill="none" stroke="#665244" strokeWidth="1.7" strokeLinecap="round"/>
            <g className="animal-happy"><path d="M69 92 Q81 108 93 92Z" fill="#664446"/><path d="M76 98 Q81 104 87 98" fill="none" stroke="#e79f9d" strokeWidth="5" strokeLinecap="round"/></g>
            {cat && <path d="M53 87 l-18-3 m19 9-19 3 M108 87 l18-3 m-19 9 19 3" fill="none" stroke="#d6c7ab" strokeWidth="1.6" strokeLinecap="round"/>}
            <path d="M72 49 l3 5 m5-6 1 5 m5-4 1 5" stroke={cat ? '#fff7e8' : '#efca95'} strokeWidth="2.5" strokeLinecap="round"/>
          </g>
        </>}
      </g>
      {frog && <g className="animal-fly"><ellipse cx="137" cy="42" rx="6" ry="3" fill="#e1edf2" transform="rotate(-30 137 42)"/><ellipse cx="144" cy="43" rx="6" ry="3" fill="#e1edf2" transform="rotate(25 144 43)"/><ellipse cx="140" cy="47" rx="4" ry="3" fill="#34383d"/></g>}
    </g>
    {!frog && <g className="animal-toy"><circle cx="131" cy="140" r="8" fill={cat ? '#d9989c' : '#94b867'}/><path d="M125 135 q11 1 10 11 m-10-8 q6 6 13 1" fill="none" stroke="#fff4cf" strokeWidth="1.4"/></g>}
    <g className="animal-call" aria-hidden="true"><rect x="40" y="4" width="81" height="22" rx="11" fill="var(--surface)" stroke="var(--border)"/><text x="80" y="19" textAnchor="middle" fill="var(--ink)">{cat ? 'meow meow!' : 'bow wow!'}</text></g>
    <g className="animal-zzz" aria-hidden="true"><text x="111" y="35">z</text><text x="127" y="22">z</text></g>
  </svg>;
}

