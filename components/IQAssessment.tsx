'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, Clock3, RotateCcw } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { domains, questions } from '@/lib/questions';

export type Attempt = { id: string; completedAt: string; score: number; correct: number; duration: number; domains: Record<string, number> };

function formatTime(total: number) { return `${String(Math.floor(total / 60)).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}`; }

export function IQAssessment() {
  const [phase, setPhase] = useState<'intro' | 'test' | 'result'>('intro');
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(() => questions.map(() => null));
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (phase !== 'test') return;
    const timer = window.setInterval(() => setSeconds((value) => value + 1), 1000);
    return () => window.clearInterval(timer);
  }, [phase]);

  const result = useMemo(() => {
    const correct = questions.reduce((sum, question, index) => sum + (answers[index] === question.correctIndex ? 1 : 0), 0);
    const breakdown = Object.fromEntries(domains.map((domain) => {
      const items = questions.map((q, i) => ({ q, answer: answers[i] })).filter(({ q }) => q.domain === domain);
      return [domain, Math.round((items.filter(({ q, answer }) => answer === q.correctIndex).length / items.length) * 100)];
    }));
    return { correct, score: Math.round((correct / questions.length) * 100), breakdown };
  }, [answers]);

  function finish() {
    const attempt: Attempt = { id: crypto.randomUUID(), completedAt: new Date().toISOString(), score: result.score, correct: result.correct, duration: seconds, domains: result.breakdown };
    const stored = JSON.parse(localStorage.getItem('arc-iq-attempts') || '[]') as Attempt[];
    localStorage.setItem('arc-iq-attempts', JSON.stringify([attempt, ...stored].slice(0, 20)));
    window.dispatchEvent(new Event('arc-iq-history'));
    setPhase('result'); window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function restart() { setAnswers(questions.map(() => null)); setCurrent(0); setSeconds(0); setPhase('test'); }

  if (phase === 'intro') return <section className="test-shell intro-card">
    <span className="eyebrow">Assessment / 12 questions</span><h1>A clear snapshot of your reasoning skills.</h1>
    <p>Work at a steady pace without outside help. Most people finish in 8–12 minutes. You can move backward before submitting.</p>
    <div className="instruction-grid"><div><b>04</b><span>skill domains</span></div><div><b>12</b><span>original questions</span></div><div><b>Local</b><span>results storage</span></div></div>
    <div className="notice"><strong>Important:</strong> Arc IQ is a short practice assessment, not a standardized IQ test, medical evaluation, or measure of personal worth.</div>
    <button className="button primary" onClick={() => setPhase('test')}>Start assessment <ArrowRight size={17}/></button>
  </section>;

  if (phase === 'result') return <section className="test-shell result-card">
    <span className="eyebrow">Assessment complete</span><div className="result-head"><div><h1>Your Arc Index</h1><p>A transparent percentage of questions answered correctly.</p></div><div className="score-ring"><strong>{result.score}</strong><span>/ 100</span></div></div>
    <div className="result-summary"><span>{result.correct} of {questions.length} correct</span><span>{formatTime(seconds)} total time</span><span>{result.score >= 75 ? 'Strong overall signal' : result.score >= 50 ? 'Developing signal' : 'Early baseline'}</span></div>
    <div className="domain-results">{domains.map((domain) => <div key={domain}><div><span>{domain}</span><b>{result.breakdown[domain]}%</b></div><span className="meter"><i style={{ width: `${result.breakdown[domain]}%` }}/></span></div>)}</div>
    <div className="notice">This score is specific to this short practice set. It cannot be converted into a clinical or standardized IQ score.</div>
    <div className="hero-actions"><button className="button primary" onClick={restart}><RotateCcw size={16}/> Retake</button><Link className="button" href="/dashboard">View history</Link></div>
    <details className="answer-review"><summary>Review answers</summary>{questions.map((q, i) => <div key={q.id} className={answers[i] === q.correctIndex ? 'correct' : 'incorrect'}><span>{answers[i] === q.correctIndex ? <Check size={15}/> : '×'}</span><p><strong>{q.prompt}</strong><br/>{q.explanation}</p></div>)}</details>
  </section>;

  const question = questions[current]; const selected = answers[current];
  return <section className="test-shell assessment-card"><div className="test-top"><span>{String(current + 1).padStart(2, '0')} / {questions.length}</span><span><Clock3 size={14}/> {formatTime(seconds)}</span></div>
    <div className="progress"><i style={{ width: `${((current + 1) / questions.length) * 100}%` }}/></div>
    <AnimatePresence mode="wait"><motion.div key={question.id} className="live-question" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .18 }}>
      <span className="domain">{question.domain} reasoning</span><h1>{question.prompt}</h1>
      <div className="answer-options">{question.options.map((option, index) => <button key={option} className={selected === index ? 'selected' : ''} onClick={() => setAnswers((items) => items.map((value, itemIndex) => itemIndex === current ? index : value))}><span>{String.fromCharCode(65 + index)}</span>{option}</button>)}</div>
    </motion.div></AnimatePresence>
    <div className="test-actions"><button className="button" disabled={current === 0} onClick={() => setCurrent((value) => value - 1)}><ArrowLeft size={16}/> Back</button>{current === questions.length - 1 ? <button className="button primary" disabled={selected === null} onClick={finish}>Finish assessment <Check size={16}/></button> : <button className="button primary" disabled={selected === null} onClick={() => setCurrent((value) => value + 1)}>Continue <ArrowRight size={16}/></button>}</div>
  </section>;
}
