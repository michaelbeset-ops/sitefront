// Feiten: Google-bedrijfsprofiel van Effe Anders (Surinaams restaurant, Markt 6, 4651 BC Steenbergen, 06 25 35 32 87,
// 4,5 uit 197 reviews, do/vr/za 12:00-21:00, zo t/m wo gesloten), Instagram @eethuis_effe_anders, en hun eigen site
// effeanderssteenbergen.nl ("WEBSITE ONDER CONSTRUCTIE!", logo "Effe Anders · Warme surinaamse belegde broodjes",
// menukaart-PDF van 2022). Gerechten van die menukaart; prijzen bewust niet getoond (verouderd). Bronnen bekeken 01-10-2026.
export const site = {
  naam: 'Effe Anders',
  soort: 'Surinaams eethuis',
  straat: 'Markt 6',
  postcode: '4651 BC',
  plaats: 'Steenbergen',
  tel: '06 25 35 32 87',
  telHref: 'tel:+31625353287',
  wa: 'https://wa.me/31625353287',
  instagram: 'https://www.instagram.com/eethuis_effe_anders/',
  insta: '@eethuis_effe_anders',
  maps: 'https://www.google.com/maps/search/?api=1&query=Effe+Anders+Markt+6+Steenbergen',
  google: { score: '4,5', aantal: 197 },
  themeColor: '#fdfdfb',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const wa = `<svg class="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"/></svg>`;

/** Kort, vooraf ingevuld WhatsApp-bericht. */
export const groet = 'Hoi Effe Anders, ik wil graag een bestelling doorgeven om op te halen: ';
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;

/** De Surinaamse vlagbaan zoals bovenaan hun menukaart: groen, wit, rood met een gele ster aan beide kanten, wit, groen. */
export const ster = `<svg viewBox="0 0 20 20" aria-hidden="true"><path fill="#f2c919" d="M10 1.5l2.4 6h6.4l-5.2 3.9 2 6.3L10 13.9l-5.6 3.8 2-6.3L1.2 7.5h6.4z"/></svg>`;
