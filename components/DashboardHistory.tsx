'use client';
import { SafeLink as Link } from '@/components/SafeLink';
import { useSyncExternalStore } from 'react';
import type { Attempt } from './IQAssessment';
function subscribe(callback: () => void) { window.addEventListener('storage', callback); window.addEventListener('iqtestreal-history', callback); return () => { window.removeEventListener('storage', callback); window.removeEventListener('iqtestreal-history', callback); }; }
function getSnapshot() { return localStorage.getItem('iqtestreal-attempts') || '[]'; }
function getServerSnapshot() { return '[]'; }
export function DashboardHistory() { const attempts = JSON.parse(useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)) as Attempt[]; if (!attempts.length) return <div className="empty-dashboard"><span>0 attempts</span><h2>Your score history starts here.</h2><p>Complete the free IQ test once and your Estimated IQ results will appear on this device.</p><Link className="button primary" href="/test">Start IQ test</Link></div>; return <div className="history-list"><div className="history-head"><span>Date</span><span>Estimated IQ</span><span>Percentile</span><span>Accuracy</span></div>{attempts.map((attempt) => <div className="history-row" key={attempt.id}><span>{new Intl.DateTimeFormat('en', { dateStyle: 'medium' }).format(new Date(attempt.completedAt))}</span><strong>{attempt.iq}</strong><span>{attempt.percentile}th</span><span>{attempt.accuracy}%</span></div>)}</div>; }
