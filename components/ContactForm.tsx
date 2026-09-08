'use client';

import { useEffect, useRef, useState } from 'react';

export function ContactForm() {
  const [sending, setSending] = useState(false);
  const [response, setResponse] = useState('');
  const [success, setSuccess] = useState(false);
  const startedAt = useRef(0);
  useEffect(() => { startedAt.current = Date.now(); }, []);

  async function submit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = { name: (form.elements.namedItem('nameInput') as HTMLInputElement).value, email: (form.elements.namedItem('emailInput') as HTMLInputElement).value, subject: (form.elements.namedItem('subjectInput') as HTMLInputElement).value, message: (form.elements.namedItem('messageInput') as HTMLTextAreaElement).value, website: (form.elements.namedItem('website') as HTMLInputElement).value, startedAt: startedAt.current };
    setSending(true); setResponse('Sending...'); setSuccess(false);
    try {
      const result = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
      const payload = await result.json() as { ok?: boolean; message?: string };
      if (!result.ok || !payload.ok) throw new Error(payload.message || 'Contact service unavailable');
      setResponse(payload.message || 'Message sent successfully!'); setSuccess(true); form.reset();
    } catch (error) {
      console.error('Error:', error); setResponse('Failed to send message. Please try again.'); setSuccess(false);
    } finally { setSending(false); }
  }

  return <div className="contact-form-wrap"><form id="contactForm" className="contact-form" onSubmit={submit}><div className="form-row"><label><span>Name</span><input type="text" id="nameInput" name="name" placeholder="Your name" autoComplete="name" required /></label><label><span>Email</span><input type="email" id="emailInput" name="email" placeholder="you@example.com" autoComplete="email" required /></label></div><label><span>Subject</span><input type="text" id="subjectInput" name="subject" placeholder="What can we help with?" required /></label><label><span>Message</span><textarea id="messageInput" name="message" placeholder="Write your message" rows={6} required /></label><input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="honeypot" /><button type="submit" className="button primary contact-submit" disabled={sending}>{sending ? 'Sending...' : 'Send message'}</button></form><p id="responseMessage" className={`form-status ${success ? 'success' : ''}`} aria-live="polite">{response}</p></div>;
}

