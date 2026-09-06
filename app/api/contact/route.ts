const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json() as Record<string, unknown>;
    const readString = (value: unknown) => typeof value === 'string' ? value.trim() : '';
    const name = readString(body.name); const email = readString(body.email); const subject = readString(body.subject); const message = readString(body.message); const website = readString(body.website); const startedAt = typeof body.startedAt === 'number' ? body.startedAt : 0;
    if (website || Date.now() - startedAt < 2500) return Response.json({ message: 'Message rejected.' }, { status: 400 });
    if (name.length < 2 || name.length > 80 || !emailPattern.test(email) || email.length > 160 || subject.length < 3 || subject.length > 120 || message.length < 20 || message.length > 5000) return Response.json({ message: 'Check each field and try again.' }, { status: 400 });
    const endpoint = process.env.CONTACT_WEBHOOK_URL;
    if (!endpoint) return Response.json({ message: 'Message delivery is not configured yet. Use the published contact email instead.' }, { status: 503 });
    const response = await fetch(endpoint, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ name, email, subject, message }) });
    if (!response.ok) return Response.json({ message: 'Delivery failed. Please try again later.' }, { status: 502 });
    return Response.json({ ok: true });
  } catch { return Response.json({ message: 'Invalid request.' }, { status: 400 }); }
}
