// Feiten uit het Google-bedrijfsprofiel van Umut Barbershop (bekeken 2 oktober 2026): Paul Krugerstraat 52,
// 3312 ES Dordrecht, 06 36450435, categorie Barbier, 4,7 uit 136 reviews, geen website ("Website toevoegen"),
// openingstijden ma 13:00-19:00, di t/m za 09:00-19:00, zo gesloten (ook op hun eigen poster in het profiel).
// Diensten: de "Services" die reviewers aanvinken (knippen met schaar, haar millimeteren, haar opscheren, scheren,
// hoofd scheren, wenkbrauwen knippen, kinderkapsels, shampoo en conditioner) en reviewteksten (baard, oor- en neushaar
// met wax of weggebrand, hoofdmassage, geen afspraak nodig, aansluiten in de rij, koffie/thee/frisdrank/water,
// betaald parkeren in de straat). Wax: Abzehk zichtbaar op hun eigen foto's; Novon volgens opdracht Michael.
// KvK 64672255: bedrijvenregister.nl (Umut Barbershop, Paul Krugerstraat 52, eenmanszaak).
export const site = {
  naam: 'Umut Barbershop',
  straat: 'Paul Krugerstraat 52',
  postcode: '3312 ES',
  plaats: 'Dordrecht',
  tel: '06 36 45 04 35',
  telHref: 'tel:+31636450435',
  wa: 'https://wa.me/31636450435',
  kvk: '64672255',
  google: '4,7',
  googleAantal: 136,
  maps: 'https://www.google.com/maps/search/?api=1&query=Umut+Barbershop+Paul+Krugerstraat+52+Dordrecht',
  themeColor: '#f3f3f1',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Openingstijden, index = Date.getDay() (0 = zondag). Tijden in minuten na middernacht.
export const tijden: { dag: string; open?: number; dicht?: number }[] = [
  { dag: 'zondag' },
  { dag: 'maandag', open: 13 * 60, dicht: 19 * 60 },
  { dag: 'dinsdag', open: 9 * 60, dicht: 19 * 60 },
  { dag: 'woensdag', open: 9 * 60, dicht: 19 * 60 },
  { dag: 'donderdag', open: 9 * 60, dicht: 19 * 60 },
  { dag: 'vrijdag', open: 9 * 60, dicht: 19 * 60 },
  { dag: 'zaterdag', open: 9 * 60, dicht: 19 * 60 },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent('Hallo Umut Barbershop, ' + tekst)}`;
