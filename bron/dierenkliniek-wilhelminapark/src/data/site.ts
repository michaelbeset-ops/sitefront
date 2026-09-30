// Feiten van dierenkliniekwilhelminapark.nl (frames-site, 30 pagina's: home, kliniekinfo, faciliteiten, medewerkers met
// eigen pagina's, hond/kat/konijn/knaagdier/fret, contact, route) en het Google-profiel (4,7 uit 325 reviews, 29-09-2026).
// Het 06-nummer op hun site hoort bij een kattenoppas, NIET bij de kliniek. Oude nieuwsberichten, acties en de vacature
// bewust niet overgenomen.
export const site = {
  naam: 'Dierenkliniek Wilhelminapark',
  straat: 'J.W. Frisostraat 1',
  postcode: '3583 JR',
  plaats: 'Utrecht',
  tel: '030 210 9000',
  telHref: 'tel:+31302109000',
  mail: 'info@dierenkliniekwilhelminapark.nl',
  kvk: '30261788',
  dierengebit: 'https://www.dierengebit.nl',
  maps: 'https://www.google.com/maps/search/?api=1&query=Dierenkliniek+Wilhelminapark+J.W.+Frisostraat+1+Utrecht',
  google: '4,7',
  reviews: 325,
  themeColor: '#0f2e1d',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

export const icoon = {
  tel: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>`,
  pijl: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`,
};
