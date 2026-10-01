// Feiten uit het Google-bedrijfsprofiel van Louffee Coffee (bekeken 01-10-2026): Koffiehuis, Dalsteindreef 2037,
// 1112 XC Diemen, 06 25 15 74 97, 4,8 uit 420 reviews, ma t/m vr 08:00-18:00, za en zo 09:30-18:00.
// Instagram @louffeecoffee: "Enjoy a delicious cup of Louffee coffee next to our vintage cash register".
// Uit reviews: espresso, cappuccino, latte, matcha (sterkte en zoetheid naar keuze), chai; ruimte binnen en buiten (terras);
// fijne plek om met laptop te werken of te studeren. Oude site louffee.com: alleen een WordPress-onderhoudspagina.
export const site = {
  naam: 'Louffee Coffee',
  soort: 'Espressobar',
  straat: 'Dalsteindreef 2037',
  postcode: '1112 XC',
  plaats: 'Diemen',
  tel: '06 25 15 74 97',
  telHref: 'tel:+31625157497',
  wa: 'https://wa.me/31625157497',
  instagram: 'https://www.instagram.com/louffeecoffee/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Louffee+Coffee+Dalsteindreef+2037+Diemen',
  google: { score: '4,8', aantal: 420 },
  themeColor: '#f3f2ef',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const wa = `<svg class="h-[1.1em] w-[1.1em] shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"/></svg>`;

/** Het gevelhart als pad (viewBox 0 0 100 100). */
export const hart = 'M50 92C24 74 6 58 6 36 6 19 18 8 32 8c8 0 14 4 18 10 4-6 10-10 18-10 14 0 26 11 26 28 0 22-18 38-44 56Z';

/** Begroeting in elk vooraf ingevuld WhatsApp-bericht. */
export const groet = 'Hoi Louffee, ';
/** WhatsApp-link met een vooraf ingevuld bericht. */
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(groet + tekst)}`;
