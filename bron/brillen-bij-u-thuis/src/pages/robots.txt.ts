import type { APIRoute } from 'astro';
import { site } from '../data/site';

// Voorstel: niets indexeren. Definitief: alles open, ook voor de crawlers van AI-assistenten (die zoeken antwoorden voor hun gebruikers).
export const GET: APIRoute = ({ site: domein }) => {
  if (site.voorstel) return new Response('# Ontwerpvoorstel: niet indexeren.\nUser-agent: *\nDisallow: /\n');
  const ai = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Applebot-Extended', 'Bingbot', 'CCBot'];
  const regels = [
    'User-agent: *',
    'Allow: /',
    '',
    '# AI-assistenten en zoekmachines zijn welkom.',
    ...ai.flatMap((b) => [`User-agent: ${b}`, 'Allow: /', '']),
    `Sitemap: ${new URL('sitemap-index.xml', domein)}`,
    '',
  ];
  return new Response(regels.join('\n'));
};
