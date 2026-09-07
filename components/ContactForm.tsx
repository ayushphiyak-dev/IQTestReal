'use client';

import { useState } from 'react';

const webAppUrl = 'https://script.google.com/macros/s/AKfycbxir1Qtdqh2DlH_DXkLM3PwTuiaAJKH3023Bb1UPYI1sRj0mpODpVFmC_XwkbCL8EaRSg/exec';

export function ContactForm() {
  const [sending, setSending] = useState(false);
  const [response, setResponse] = useState('');
  const [success, setSuccess] = useState(false);
  async function submit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = { name: (form.elements.namedItem('nameInput') as HTMLInputElement).value, email: (form.elements.namedItem('emailInput') as HTMLInputElement).value, subject: (form.elements.namedItem('subjectInput') as HTMLInputElement).value, message: (form.elements.namedItem('messageInput') as HTMLTextAreaElement).value };
    setSending(true); setResponse('Sending...'); setSuccess(false);
    try {
      await fetch(webAppUrl, { method: 'POST', mode: 'no-cors', body: JSON.stringify(formData) });
      setResponse('Message sent successfully!'); setSuccess(true); form.reset();
    } catch (error) {
      console.error('Error:', error); setResponse('Failed to send message. Please try again.'); setSuccess(false);
    } finally { setSending(false); }
  }
  return <><form id="contactForm" className="contact-form" onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '600px', margin: 'auto' }}><div className="form-row" style={{ display: 'flex', gap: '10px' }}><input type="text" id="nameInput" name="nameInput" placeholder="Name" required style={{ flex: 1, padding: '10px' }} /><input type="email" id="emailInput" name="emailInput" placeholder="Email" required style={{ flex: 1, padding: '10px' }} /></div><input type="text" id="subjectInput" name="subjectInput" placeholder="Subject" required style={{ padding: '10px' }} /><textarea id="messageInput" name="messageInput" placeholder="Message" rows={5} required style={{ padding: '10px' }} /><button type="submit" disabled={sending} style={{ padding: '12px', background: '#000', color: '#fff', border: 'none', cursor: sending ? 'wait' : 'pointer' }}>{sending ? 'Sending...' : 'Send message'}</button></form><p id="responseMessage" className={`form-status ${success ? 'success' : ''}`} style={{ textAlign: 'center', marginTop: '10px', fontWeight: 'bold' }}>{response}</p></>;
}

