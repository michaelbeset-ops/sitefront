import type { APIRoute } from 'astro';
import { site } from '../../data/site';

// RFC 9116: waar iemand een beveiligingsprobleem kan melden: het bedrijf zelf.
// Expires telkens een jaar vooruit vanaf de build; elke nieuwe build ververst hem.
export const GET: APIRoute = ({ site: domein }) => {
  const verloopt = new Date(Date.now() + 365 * 864e5).toISOString().replace(/\.\d+Z$/, 'Z');
  return new Response(`Contact: mailto:${site.mail}\nExpires: ${verloopt}\nPreferred-Languages: nl, en\nCanonical: ${new URL('.well-known/security.txt', new URL(import.meta.env.BASE_URL, domein))}\n`);
};
