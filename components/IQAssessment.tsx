'use client';

import { SafeLink as Link } from '@/components/SafeLink';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, Clock3, RotateCcw, Share2 } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { createTestSet, domains, type Question } from '@/lib/questions';

export type Attempt = { id: string; completedAt: string; iq: number; percentile: number; accuracy: number; correct: number; total: number; duration: number; domains: Record<string, number> };
type Phase = 'intro' | 'test' | 'result';

function formatTime(total: number) { return `${String(Math.floor(total / 60)).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}`; }
function percentileFor(iq: number) { if (iq >= 130) return 98; if (iq >= 120) return 91; if (iq >= 115) return 84; if (iq >= 110) return 75; if (iq >= 105) return 63; if (iq >= 100) return 50; if (iq >= 95) return 37; if (iq >= 90) return 25; if (iq >= 85) return 16; return 2; }
function classificationFor(iq: number) { if (iq >= 120) return 'Above average'; if (iq >= 110) return 'High average'; if (iq >= 90) return 'Average'; if (iq >= 80) return 'Low average'; return 'Below average'; }

export function IQAssessment() {
  const [phase, setPhase] = useState<Phase>('intro');
  const [test, setTest] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>([]);
  const [seconds, setSeconds] = useState(0);
  const [shared, setShared] = useState(false);
  const [shareMessage, setShareMessage] = useState('');

  useEffect(() => { if (phase !== 'test') return; const timer = window.setInterval(() => setSeconds((value) => value + 1), 1000); return () => window.clearInterval(timer); }, [phase]);

  const result = useMemo(() => {
    const correct = test.reduce((sum, question, index) => sum + (answers[index] === question.correct ? 1 : 0), 0);
    const accuracy = test.length ? Math.round((correct / test.length) * 100) : 0;
    const iq = test.length ? Math.max(70, Math.min(130, Math.round(100 + (accuracy - 50) * 0.6))) : 100;
    const breakdown = Object.fromEntries(domains.map((domain) => { const items = test.map((question, index) => ({ question, answer: answers[index] })).filter(({ question }) => question.domain === domain); const right = items.filter(({ question, answer }) => answer === question.correct).length; return [domain, items.length ? Math.round((right / items.length) * 100) : 0]; }));
    return { correct, accuracy, iq, percentile: percentileFor(iq), classification: classificationFor(iq), breakdown };
  }, [answers, test]);

  function startTest() { const next = createTestSet(3); setTest(next); setAnswers(next.map(() => null)); setCurrent(0); setSeconds(0); setShared(false); setPhase('test'); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  function restart() { setPhase('intro'); setTest([]); setAnswers([]); setCurrent(0); setSeconds(0); setShared(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  function finish() { const attempt: Attempt = { id: crypto.randomUUID(), completedAt: new Date().toISOString(), iq: result.iq, percentile: result.percentile, accuracy: result.accuracy, correct: result.correct, total: test.length, duration: seconds, domains: result.breakdown }; const stored = JSON.parse(localStorage.getItem('iqtestreal-attempts') || '[]') as Attempt[]; localStorage.setItem('iqtestreal-attempts', JSON.stringify([attempt, ...stored].slice(0, 30))); window.dispatchEvent(new Event('iqtestreal-history')); setPhase('result'); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  async function shareResult() { const text = `My estimated IQ on IQTestReal is ${result.iq} (${result.classification}), at the ${result.percentile}th percentile.`; try { if (navigator.share) await navigator.share({ title: 'My IQTestReal result', text, url: window.location.origin }); else await navigator.clipboard.writeText(text); setShared(true); setShareMessage('Result copied'); } catch { setShared(false); setShareMessage('Sharing was cancelled'); } }

  if (phase === 'intro') return <section className="test-shell intro-card"><span className="eyebrow">Free IQ test / 15 questions</span><h1>Measure your reasoning with a broader question set.</h1><p>Each test draws three unique questions from five categories: logic, pattern, numerical, spatial, and analogy. Questions and answer choices are randomized on every new attempt.</p><div className="instruction-grid"><div><b>15</b><span>questions per test</span></div><div><b>05</b><span>reasoning categories</span></div><div><b>10–12 min</b><span>typical completion</span></div></div><div className="notice"><strong>Important:</strong> Your result is an Estimated IQ based on this practice set. It is not a clinical diagnosis, standardized assessment, or measure of your personal worth.</div><button className="button primary" onClick={startTest}>Start free test <ArrowRight size={17}/></button></section>;

  if (phase === 'result') return <section className="test-shell result-card"><span className="eyebrow">Your result / Practice estimate</span><div className="result-head"><div><h1>Estimated IQ</h1><p>Normalized around a population mean of 100 for this practice model.</p></div><div className="score-ring"><strong>{result.iq}</strong><span>Estimated IQ</span></div></div><div className="result-summary"><span><b>{result.percentile}th</b><small>percentile</small></span><span><b>{result.classification}</b><small>classification</small></span><span><b>{result.accuracy}%</b><small>accuracy</small></span><span><b>{formatTime(seconds)}</b><small>time taken</small></span></div><h2 className="result-section-title">Category strengths</h2><div className="domain-results">{domains.map((domain) => <div key={domain}><div><span>{domain}</span><b>{result.breakdown[domain]}%</b></div><span className="meter"><i style={{ width: `${result.breakdown[domain]}%` }}/></span></div>)}</div><div className="notice"><strong>How to read this:</strong> The Estimated IQ is a transparent conversion of accuracy into an IQ-style range. It is useful for reflection and practice only; it has not been normed or clinically validated.</div><div className="hero-actions"><button type="button" className="button primary" onClick={startTest}><RotateCcw size={16}/> Retake</button><button type="button" className="button" onClick={shareResult}><Share2 size={16}/> {shared ? 'Copied' : 'Share result'}</button><Link className="button" href="/dashboard">View history</Link>{shareMessage && <span className="form-status success" role="status">{shareMessage}</span>}</div><details className="answer-review"><summary>Review explanations</summary>{test.map((question, index) => <div key={question.id} className={answers[index] === question.correct ? 'correct' : 'incorrect'}><span>{answers[index] === question.correct ? <Check size={15}/> : '×'}</span><p><strong>{question.prompt}</strong><br/><span>Your answer: {answers[index] || 'Skipped'} · Correct answer: {question.correct}</span><br/>{question.explanation}</p></div>)}</details></section>;

  const question = test[current]; const selected = answers[current];
  return <section className="test-shell assessment-card"><div className="test-top"><span>Question {current + 1} of {test.length}</span><span><Clock3 size={14}/> {formatTime(seconds)}</span><button type="button" className="test-restart" onClick={restart}><RotateCcw size={14}/> Restart</button></div><div className="progress"><i style={{ width: `${((current + 1) / test.length) * 100}%` }}/></div><AnimatePresence mode="wait"><motion.div key={question.id} className="live-question" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .18 }}><span className="domain">{question.domain} reasoning</span><h1>{question.prompt}</h1><div className="answer-options">{question.options.map((option, index) => <button type="button" key={option} className={selected === option ? 'selected' : ''} onClick={() => setAnswers((items) => items.map((value, itemIndex) => itemIndex === current ? option : value))}><span>{String.fromCharCode(65 + index)}</span>{option}</button>)}</div></motion.div></AnimatePresence><div className="test-actions"><button type="button" className="button" disabled={current === 0} onClick={() => setCurrent((value) => value - 1)}><ArrowLeft size={16}/> Previous</button>{current === test.length - 1 ? <button type="button" className="button primary" disabled={selected === null} onClick={finish}>Submit answers <Check size={16}/></button> : <button type="button" className="button primary" disabled={selected === null} onClick={() => setCurrent((value) => value + 1)}>Next question <ArrowRight size={16}/></button>}</div></section>;
}

