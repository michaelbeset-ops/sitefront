// Feiten van autoaalbers.nl (welkom, informatie, ons team, occasions, handige links, contact) en het Google-profiel
// (4,9 uit 46 reviews). De SEO-trefwoorden en de merkenlijst op hun site zijn bewust niet als tekst gebruikt.
export const site = {
  naam: 'Automobielbedrijf Aalbers',
  kort: 'Auto Aalbers',
  juridisch: 'Automobielbedrijf Aalbers',
  straat: 'Spoorstraat 46',
  postcode: '7261 AG',
  plaats: 'Ruurlo',
  tel: '(0573) 45 36 39',
  telHref: 'tel:+31573453639',
  fax: '(0573) 45 02 88',
  mail: 'autoaalbers@gmail.com',
  maps: 'https://www.google.com/maps/search/?api=1&query=Automobielbedrijf+Aalbers+Spoorstraat+46+Ruurlo',
  rdw: 'https://ovi.rdw.nl/',
  google: '4,9',
  reviews: 46,
  kvk: '[[AANLEVEREN: KvK-nummer]]',
  themeColor: '#181513',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

// Contactpagina: "Onze openingstijden voor de garage en verkoop zijn".
export const tijden = [
  { dag: 'Maandag t/m vrijdag', tijd: '8.00 - 17.30', noot: 'Garage en verkoop' },
  { dag: 'Zaterdag', tijd: '9.00 - 13.00', noot: 'Alleen verkoop' },
  { dag: 'Zondag', tijd: 'Gesloten', noot: '' },
];
