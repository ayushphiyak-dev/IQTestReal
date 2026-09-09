export function GET() {
  return new Response('google-site-verification: google36462d346c58fefd.html\n', {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
