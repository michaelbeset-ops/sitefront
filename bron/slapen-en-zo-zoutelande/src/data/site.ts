// Feiten van slapenenzo.com (Wayback, oktober 2020: kamers, vakantiewoningen, contact) en het Google-profiel
// (4,9 uit 28 reviews). De eigen site geeft nu een serverfout.
// Prijzen en toeristenbelasting (2017-2020) bewust NIET overgenomen. Welke woning voor hoeveel personen is,
// staat niet in de bron: alleen "voor 2, 4 en 6 personen" in het algemeen.
export const site = {
  naam: 'Bed & Breakfast Slapen & Zo',
  kort: 'Slapen & Zo',
  straat: 'Majoorwerf 17A',
  postcode: '4374 CA',
  plaats: 'Zoutelande',
  tel: '0118 562 257',
  telHref: 'tel:+31118562257',
  mail: 'info@slapenenzo.com',
  maps: 'https://www.google.com/maps/search/?api=1&query=Bed+%26+Breakfast+Slapen+%26+Zo+Majoorwerf+17A+Zoutelande',
  google: '4,9',
  reviews: 28,
  woningen: ['Ankertje', 'Aster', 'Barbara', 'Lelie'],
  themeColor: '#0e2f3a',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

export const icoon = {
  tel: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>`,
  pijl: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`,
};
