// Feiten van autobedrijfrobpoot.nl (home, het-bedrijf, occasions, contact; bekeken 28-09-2026)
// en het Google-profiel (4,4 uit 5, 45 reviews). Zaterdag: home en het-bedrijf zeggen "op afspraak",
// de contactpagina zegt "gesloten"; we volgen de meerderheid (op afspraak).
export const site = {
  naam: 'Autobedrijf Rob Poot Junior',
  straat: 'Mercuriusstraat 22',
  postcode: '3133 EN',
  plaats: 'Vlaardingen',
  tel: '010 460 24 81',
  telHref: 'tel:+31104602481',
  mobiel: '06 51 96 29 09',
  mobielHref: 'tel:+31651962909',
  whatsapp: 'https://wa.me/31651962909',
  ophaal: '06 53 71 62 92',
  ophaalHref: 'tel:+31653716292',
  mail: 'rob@autobedrijfrobpoot.nl',
  maps: 'https://www.google.com/maps/search/?api=1&query=Autobedrijf+Rob+Poot+Mercuriusstraat+22+Vlaardingen',
  themeColor: '#141518',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

export const prijzen = [
  { naam: 'Groot onderhoud', extra: 'met gratis APK', prijs: '220' },
  { naam: 'Klein onderhoud', extra: '', prijs: '121' },
  { naam: 'APK-keuring', extra: '', prijs: '45' },
];

export const tijden = [
  { dag: 'Maandag', tijd: '09:00 - 18:00' },
  { dag: 'Dinsdag', tijd: '09:00 - 18:00' },
  { dag: 'Woensdag', tijd: '09:00 - 18:00' },
  { dag: 'Donderdag', tijd: '09:00 - 18:00' },
  { dag: 'Vrijdag', tijd: '09:00 - 16:00' },
  { dag: 'Zaterdag', tijd: 'Op afspraak' },
  { dag: 'Zondag', tijd: 'Gesloten' },
];
