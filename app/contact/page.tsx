import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { siteConfig } from '@/config/site';
export const metadata: Metadata = { title: 'Contact', description: 'Contact the Arc IQ team.', alternates: { canonical: '/contact' } };
export default function ContactPage() { return <main id="main-content"><header className="page-header shell"><span className="eyebrow">Contact / Arc IQ</span><h1>Send a clear note.</h1><p>Use this form for product feedback, accessibility issues, privacy requests, or partnership questions.</p></header><section className="contact-layout shell"><div><h2>Before you send</h2><p>The public contact address is currently <code>{siteConfig.contactEmail}</code>. The form reports an honest configuration error until a secure delivery webhook is configured.</p><p>Please do not send passwords, payment details, health information, or other sensitive material.</p></div><ContactForm /></section></main>; }
