'use client';

import { useState } from 'react';
import { ArrowRight, Check, RotateCcw, X } from 'lucide-react';
import { SafeLink as Link } from '@/components/SafeLink';

const samples = [
  {
    category: 'Numerical reasoning',
    prompt: 'If 15% of 200 is x, what is x?',
    options: ['15', '20', '30', '35'],
    answer: '30',
    explanation: '15% is 0.15, and 0.15 × 200 = 30.',
  },
  {
    category: 'Pattern reasoning',
    prompt: 'What number comes next: 2, 4, 8, 16, …?',
    options: ['18', '24', '32', '34'],
    answer: '32',
    explanation: 'Each number doubles, so 16 × 2 = 32.',
  },
  {
    category: 'Analogy reasoning',
    prompt: 'Bird is to nest as bee is to …?',
    options: ['Web', 'Hive', 'Pond', 'Den'],
    answer: 'Hive',
    explanation: 'A nest is a bird’s home; a hive is a bee’s home.',
  },
] as const;

export function AssessmentPreview() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const sample = samples[current];
  const answered = selected !== null;
  const correct = selected === sample.answer;

  function choose(option: string) {
    if (!answered) setSelected(option);
  }

  function next() {
    if (!answered) return;
    if (current === samples.length - 1) return;
    setCurrent((value) => value + 1);
    setSelected(null);
  }

  function restart() {
    setCurrent(0);
    setSelected(null);
  }

  return (
    <div className="assessment-preview sample-preview" aria-label="Try a sample question">
      <div className="preview-top">
        <span>SAMPLE {String(current + 1).padStart(2, '0')} / 03</span>
        <span className={`status ${answered ? (correct ? 'is-correct' : 'is-wrong') : ''}`}>
          <i /> {answered ? (correct ? 'CORRECT' : 'REVIEW') : 'TRY IT'}
        </span>
      </div>

      <div className="question-stage">
        <span className="domain">{sample.category}</span>
        <h2>{sample.prompt}</h2>
        <div className="sample-options" role="group" aria-label="Sample answer choices">
          {sample.options.map((option, index) => {
            const isSelected = selected === option;
            const isAnswer = option === sample.answer;
            const state = answered && isAnswer ? ' correct' : answered && isSelected ? ' wrong' : isSelected ? ' selected' : '';
            return (
              <button type="button" className={`sample-answer${state}`} key={option} onClick={() => choose(option)} aria-pressed={isSelected}>
                <span>{String.fromCharCode(65 + index)}</span>{option}
              </button>
            );
          })}
        </div>

        <div className={`sample-feedback${answered ? ' visible' : ''}`} aria-live="polite">
          {answered ? <><strong>{correct ? 'Nice work.' : `The answer is ${sample.answer}.`}</strong><span>{sample.explanation}</span></> : <span>Choose an answer to see the reasoning.</span>}
        </div>
      </div>

      <div className="preview-bottom sample-controls">
        {answered && current === samples.length - 1 ? <button type="button" className="button primary" onClick={restart}><RotateCcw size={15} /> Try again</button> : <button type="button" className="button" onClick={next} disabled={!answered}>{current === samples.length - 1 ? 'Next' : 'Next sample'} <ArrowRight size={15} /></button>}
        {answered && (correct ? <Check size={18} aria-label="Correct answer" /> : <X size={18} aria-label="Incorrect answer" />)}
        {current === samples.length - 1 && answered && <Link className="text-link" href="/test">Start full test <ArrowRight size={15} /></Link>}
      </div>
    </div>
  );
}

