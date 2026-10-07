// Feiten (bekeken 7 oktober 2026), ruwe bronnen in ../../bron:
// - Eigen site kermul.nl (home, contact, twee dienstpagina's, referenties): teksten, opgericht 1980 door dhr. Van Kerkhof en
//   dhr. Mulder, Keiweg 162, 4902 PG Oosterhout, 0162-490082, GSM 06-21250861, info@kermul.nl, KvK Breda 20104845,
//   leveringsvoorwaarden (PDF), Facebook. Projectfoto's uit de mediabibliotheek (2022).
// - Google-bedrijfsprofiel: reparatiebedrijf, ma-vr 07:30-17:00, za-zo gesloten. Geen reviews. Eén foto "Van eigenaar".
export const site = {
  naam: 'Kermul Oosterhout BV',
  kort: 'Kermul',
  straat: 'Keiweg 162',
  postcode: '4902 PG',
  plaats: 'Oosterhout',
  tel: '0162 490 082',
  telHref: 'tel:+31162490082',
  gsm: '06 21 25 08 61',
  wa: 'https://wa.me/31621250861',
  mail: 'info@kermul.nl',
  kvk: '20104845',
  voorwaarden: 'https://kermul.nl/wp-content/uploads/2022/04/Leveringsvoorwaarden-Kermul.pdf',
  facebook: 'https://www.facebook.com/Kermul',
  maps: 'https://www.google.com/maps/search/?api=1&query=Kermul+Oosterhout+B.V.+Keiweg+162+Oosterhout',
  themeColor: '#00403f',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Google, stand 7 oktober 2026. Index 0 = zondag.
export const tijden: [string, string | null][] = [
  ['zondag', null],
  ['maandag', '07:30-17:00'],
  ['dinsdag', '07:30-17:00'],
  ['woensdag', '07:30-17:00'],
  ['donderdag', '07:30-17:00'],
  ['vrijdag', '07:30-17:00'],
  ['zaterdag', null],
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Goedendag, ik heb een vraag over inspectie of onderhoud.');
