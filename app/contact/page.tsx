import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { siteConfig } from '@/config/site';
export const metadata: Metadata = { title: 'Contact', description: 'Contact the publisher of Signal & Craft.', alternates: { canonical: '/contact' } };
export default function ContactPage() { return <main id="main-content"><header className="page-header shell"><span className="eyebrow">Contact / Publisher</span><h1>Start with a clear note.</h1><p>Use this form for editorial questions, corrections, permissions, or privacy requests.</p></header><section className="contact-layout shell"><div><h2>Before you send</h2><p>The public contact address is currently <code>{siteConfig.contactEmail}</code>. The form reports an honest configuration error until the publisher adds a secure delivery webhook.</p><p>Please do not send passwords, payment details, health information, or other sensitive material.</p></div><ContactForm /></section></main>; }
