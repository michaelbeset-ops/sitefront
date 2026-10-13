import type { APIRoute } from 'astro';
import { site, faq, zorg, tijden } from '../data/site';

// llms.txt (llmstxt.org): een korte, platte samenvatting zodat AI-assistenten de feiten juist overnemen.
export const GET: APIRoute = ({ site: domein }) => {
  const thuis = new URL(import.meta.env.BASE_URL, domein).href;
  const open = tijden.filter((t) => t.open).map((t) => t.dag.toLowerCase());
  const tekst = `# ${site.naam}

> De opticien aan huis door ${site.werkgebied}, gevestigd in ${site.plaats}. Oogmeting en advies kosteloos bij u thuis, gemeten met een pasbril door een gediplomeerde opticien. Heeft u recht op een teruggave van uw zorgverzekering, dan dient u de factuur van Brillen bij u thuis daar in; de zorgverzekering betaalt uit.

## Contact

- Telefoon en WhatsApp: ${site.tel} (+31 6 55577424)
- E-mail: ${site.mail}
- Bereikbaar: ${open[0]} tot en met ${open[open.length - 1]}, 09:00 tot 17:00 uur.
- Werkgebied: ${site.werkgebied}, bij de klant thuis
- KvK: ${site.kvk}
- Website: ${thuis}

## Diensten

- Oogmeting aan huis: kosteloos, net als het advies dat daaruit volgt. Gemeten met een pasbril, net als bij de oogarts.
- Bril op maat: vertebril, leesbril, bifocale bril, multifocale bril of zonnebril, met een ruime keuze in monturen.
- Zorgverzekering: ${zorg.uitleg}
- Officieel samenwerkingspartner van Allemaal Aafje, Envida ledenservice, Thebe extra en Meander eXtra.

## Veelgestelde vragen

${faq.map(([v, a]) => `### ${v}\n\n${a}`).join('\n\n')}

## Pagina's

- [Homepage](${thuis}): diensten, werkwijze, afspraak maken, reviews en contact
- [Privacy en bedrijfsgegevens](${new URL('privacy/', thuis).href})
`;
  return new Response(tekst, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
