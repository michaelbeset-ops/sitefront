import type { APIRoute } from 'astro';

// In voorstelmodus mag niets geindexeerd worden.
export const GET: APIRoute = ({ site }) => {
  const voorstel = import.meta.env.PUBLIC_VOORSTEL === '1';
  const sitemap = new URL(`${import.meta.env.BASE_URL.replace(/\/$/, '')}/sitemap-index.xml`, site).href;
  const body = voorstel ? 'User-agent: *\nDisallow: /\n' : `User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain' } });
};
