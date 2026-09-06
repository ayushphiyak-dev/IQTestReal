'use client';

import Link from 'next/link';
import { useSyncExternalStore } from 'react';
import type { Attempt } from './IQAssessment';

function subscribe(callback: () => void) { window.addEventListener('storage', callback); window.addEventListener('arc-iq-history', callback); return () => { window.removeEventListener('storage', callback); window.removeEventListener('arc-iq-history', callback); }; }
function getSnapshot() { return localStorage.getItem('arc-iq-attempts') || '[]'; }
function getServerSnapshot() { return '[]'; }

export function DashboardHistory() {
  const attempts = JSON.parse(useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)) as Attempt[];
  if (!attempts.length) return <div className="empty-dashboard"><span>00 attempts</span><h2>Your baseline starts here.</h2><p>Complete the assessment once and your results will appear on this device.</p><Link className="button primary" href="/test">Start assessment</Link></div>;
  return <div className="history-list"><div className="history-head"><span>Date</span><span>Arc Index</span><span>Correct</span><span>Time</span></div>{attempts.map((attempt) => <div className="history-row" key={attempt.id}><span>{new Intl.DateTimeFormat('en', { dateStyle: 'medium' }).format(new Date(attempt.completedAt))}</span><strong>{attempt.score}</strong><span>{attempt.correct} / 12</span><span>{Math.floor(attempt.duration / 60)}m {attempt.duration % 60}s</span></div>)}</div>;
}
