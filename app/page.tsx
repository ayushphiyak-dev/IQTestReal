import type { Metadata } from 'next';
import { SafeLink as Link } from '@/components/SafeLink';
import {
  ArrowRight,
  BrainCircuit,
  ChartNoAxesCombined,
  CheckCircle2,
  Clock3,
  ShieldCheck,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free IQ Test Online',
  description:
    'Take a free IQ-style test online with logic, pattern, numerical, spatial, and analogy questions. Get an Estimated IQ with clear explanations.',
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <main id="main-content">
      <section className="home-hero shell">
        <div className="hero-copy">
          <span className="kicker">
            <i /> IQTestReal / Free assessment
          </span>

          <h1>
            Find your
            <br />
            <em>reasoning signal.</em>
          </h1>

          <p>
            Find your reasoning signal with a carefully authored, free IQ-style
            test across logic, pattern, numerical, spatial, and analogy
            questions. Receive an Estimated IQ, percentile, and category
            strengths in minutes.
          </p>

          <div className="hero-actions">
            <Link className="button primary" href="/test">
              Start free IQ test <ArrowRight size={17} />
            </Link>
            <Link className="button" href="/how-it-works">
              How it works
            </Link>
          </div>

          <div className="trust-line">
            <span>
              <Clock3 /> 10–12 minutes
            </span>
            <span>
              <ShieldCheck /> No account required
            </span>
            <span>
              <ChartNoAxesCombined /> Results explained
            </span>
          </div>
        </div>

        <div className="assessment-preview" aria-label="Interactive assessment preview">
          <div className="preview-top">
            <span>QUESTION 07 / 15</span>
            <span className="status">
              <i /> ESTIMATING
            </span>
          </div>

          <div className="question-stage">
            <span className="domain">NUMERICAL REASONING</span>
            <h2>If 15% of 200 is x, what is x?</h2>

            <div className="sequence">
              <span>15%</span>
              <b>×</b>
              <span>200</span>
              <b>=</b>
              <span>?</span>
            </div>

            <div