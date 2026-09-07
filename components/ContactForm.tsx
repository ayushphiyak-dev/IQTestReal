'use client';

import { useEffect, useRef, useState } from 'react';

export function ContactForm() {
  const started = useRef(0);
  useEffect(() => { started.current = Date.now(); }, []);
  const [state, setState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  async function submit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault(); setState('sending'); setMessage('');
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ ...payload, startedAt: started.current }) });
      const data = await response.json() as { message?: string };
      if (response.status === 503) {
        const recipient = 'help@iqtestreal.com';
        const subject = encodeURIComponent(typeof payload.subject === 'string' ? payload.subject : 'IQTestReal contact');
        const body = encodeURIComponent(`Name: ${typeof payload.name === 'string' ? payload.name : ''}\nEmail: ${typeof payload.email === 'string' ? payload.email : ''}\n\n${typeof payload.message === 'string' ? payload.message : ''}`);
        window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
        setState('success'); setMessage('Your email client is ready with the message.'); return;
      }
      if (!response.ok) throw new Error(data.message || 'Message could not be sent.');
      event.currentTarget.reset(); setState('success'); setMessage('Your message was sent. We will reply using the address you provided.');
    } catch (error) { setState('error'); setMessage(error instanceof Error ? error.message : 'Message could not be sent.'); }
  }
  return <form className="contact-form" onSubmit={submit} noValidate><div className="form-row"><label>Name<input name="name" minLength={2} maxLength={80} required autoComplete="name" /></label><label>Email<input name="email" type="email" maxLength={160} required autoComplete="email" /></label></div><label>Subject<input name="subject" minLength={3} maxLength={120} required /></label><label>Message<textarea name="message" minLength={20} maxLength={5000} required rows={8}/></label><label className="honeypot" aria-hidden="true">Company website<input name="website" tabIndex={-1} autoComplete="off" /></label><button className="button primary" disabled={state === 'sending'}>{state === 'sending' ? 'Sending…' : 'Send message'}</button><output className={`form-status ${state}`}>{message}</output></form>;
}
