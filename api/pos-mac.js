// Edge function placeholder para la versión macOS (aún no compilada).

export const config = { runtime: 'edge' };

export default async function handler(request) {
  return new Response('La versión macOS aún no está disponible. Próximamente.', {
    status: 503,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Retry-After': '604800',
    },
  });
}
