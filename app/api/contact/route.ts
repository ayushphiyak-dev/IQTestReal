const fallbackWebAppUrl = 'https://script.google.com/macros/s/AKfycbxir1Qtdqh2DlH_DXkLM3PwTuiaAJKH3023Bb1UPYI1sRj0mpODpVFmC_XwkbCL8EaRSg/exec';
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const runtime = 'edge';

function readString(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

export async function POST(request: Request) {
  try {
    const payload = await request.json() as Record<string, unknown>;
    const name = readString(payload.name);
    const email = readString(payload.email);
    const subject = readString(payload.subject);
    const message = readString(payload.message);
    const website = readString(payload.website);
    const startedAt = typeof payload.startedAt === 'number' ? payload.startedAt : 0;
    if (website || (startedAt > 0 && Date.now() - startedAt < 1500)) return Response.json({ ok: false, message: 'Message rejected.' }, { status: 400 });
    if (name.length < 2 || name.length > 80 || !emailPattern.test(email) || email.length > 160 || subject.length < 3 || subject.length > 120 || message.length < 20 || message.length > 5000) {
      return Response.json({ ok: false, message: 'Check each field and try again.' }, { status: 400 });
    }

    const webAppUrl = process.env.CONTACT_WEB_APP_URL || process.env.CONTACT_WEBHOOK_URL || fallbackWebAppUrl;
    const upstream = await fetch(webAppUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
      }),
    });

    if (!upstream.ok) {
      return Response.json({ ok: false, message: 'The contact service is unavailable right now.' }, { status: 502 });
    }
    return Response.json({ ok: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Contact submission failed:', error);
    return Response.json({ ok: false, message: 'Failed to send message. Please try again.' }, { status: 500 });
  }
}

