import Link from 'next/link';
import { ArrowRight, BrainCircuit, Clock3, ShieldCheck } from 'lucide-react';

export default function Home() {
  return <main id="main-content">
    <section className="home-hero shell">
      <div className="hero-copy">
        <span className="kicker"><i/> Introducing Arc IQ / Beta</span>
        <h1>See how you<br/><em>reason.</em></h1>
        <p>A focused 12-question assessment across pattern, verbal, quantitative, and logical reasoning. Get a clear skills profile—not a clinical label.</p>
        <div className="hero-actions"><Link className="button primary" href="/test">Begin assessment <ArrowRight size={17}/></Link><Link className="button" href="/methodology">How scoring works</Link></div>
        <div className="trust-line"><span><Clock3/> About 10 minutes</span><span><ShieldCheck/> No account required</span></div>
      </div>
      <div className="assessment-preview" aria-label="Assessment preview">
        <div className="preview-top"><span>QUESTION 04 / 12</span><span className="status"><i/> IN PROGRESS</span></div>
        <div className="question-stage"><span className="domain">PATTERN REASONING</span><h2>Which value completes the sequence?</h2><div className="sequence"><span>3</span><b>→</b><span>6</span><b>→</b><span>12</span><b>→</b><span>?</span></div><div className="choice-grid"><button>18</button><button>20</button><button className="active">24</button><button>30</button></div></div>
        <div className="preview-bottom"><span>04:38 elapsed</span><div><i/><i/><i/><i className="active"/><i/><i/><i/><i/><i/><i/><i/><i/></div><ArrowRight size={16}/></div>
      </div>
    </section>
    <section className="signal-strip"><div className="shell"><span><BrainCircuit size={16}/> Four reasoning domains</span><span>12 carefully authored questions</span><span>Private by default</span><span>Immediate skill profile</span></div></section>
  </main>;
}
