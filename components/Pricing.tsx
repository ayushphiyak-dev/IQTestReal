'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Check } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

export function Pricing() {
  const [yearly, setYearly] = useState(true);
  return <><div className="billing-toggle"><span className={!yearly ? 'active' : ''}>Monthly</span><Switch checked={yearly} onCheckedChange={setYearly} aria-label="Use annual billing"/><span className={yearly ? 'active' : ''}>Annual <small>Save 20%</small></span></div><div className="pricing-grid">
    <article><span className="eyebrow">Free</span><h2>$0</h2><p>A clean baseline, with no account required.</p><ul><li><Check/> 12-question assessment</li><li><Check/> Four domain scores</li><li><Check/> Local attempt history</li></ul><Link className="button" href="/test">Start free</Link></article>
    <article className="featured"><span className="plan-badge">Planned</span><span className="eyebrow">Insight</span><h2>${yearly ? '7' : '9'}<small>/ month</small></h2><p>Deeper practice sets and longitudinal insights.</p><ul><li><Check/> Everything in Free</li><li><Check/> Expanded question sets</li><li><Check/> Trend comparisons</li></ul><Link className="button primary" href="/contact">Join the interest list</Link></article>
    <article><span className="eyebrow">Teams</span><h2>Custom</h2><p>Responsible skill practice for learning groups.</p><ul><li><Check/> Shared administration</li><li><Check/> Aggregate reporting</li><li><Check/> Privacy controls</li></ul><Link className="button" href="/contact">Contact us</Link></article>
  </div><p className="pricing-note">Paid plans are a product preview and are not currently available for purchase.</p></>;
}
