// Edge function: proxy del .exe desde GitHub Releases.
// El cliente solo ve downloads.modotab.com/pos-windows — nunca la URL final.
//
// Para actualizar la versión, cambiar GITHUB_URL abajo y push. El edge runtime
// hace streaming directo (no carga 76 MB en memoria).

export const config = { runtime: 'edge' };

const GITHUB_URL = 'https://github.com/fedehinojosa95/pos-app/releases/download/v1.0.0/TODO-Empanadas-POS-Setup-1.0.0.exe';

export default async function handler(request) {
  const upstream = await fetch(GITHUB_URL, { redirect: 'follow' });

  if (!upstream.ok || !upstream.body) {
    return new Response('No se pudo obtener el instalador. Reintenta en un momento.', {
      status: 502,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  }

  return new Response(upstream.body, {
    status: 200,
    headers: {
      'Content-Type': 'application/x-msdownload',
      'Content-Disposition': 'attachment; filename="ModoTab POS Setup.exe"',
      'Content-Length': upstream.headers.get('Content-Length') || '',
      'Cache-Control': 'public, max-age=300, s-maxage=300',
    },
  });
}
