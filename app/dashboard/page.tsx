import type { Metadata } from 'next';
import { DashboardHistory } from '@/components/DashboardHistory';
export const metadata: Metadata = { title: 'My results', description: 'View IQTestReal Estimated IQ history stored on this device.', robots: { index: false, follow: false } };
export default function DashboardPage() { return <main id="main-content"><header className="page-header shell"><span className="eyebrow">My results / This device</span><h1>Your Estimated IQ history.</h1><p>Attempts are stored locally in this browser. They are not synced to an account.</p></header><section className="dashboard-shell shell"><DashboardHistory /></section></main>; }
