// Feiten (bekeken 7 oktober 2026), ruwe bronnen in ../../bron:
// - Eigen site industrialfieldservices.nl (home, algemene voorwaarden): teksten diensten, "Over mij" van Fred Kool,
//   "sinds 2000" in de elektrotechnische sector, IFS opgericht oktober 2018, VCA VOL, info@industrialfieldservices.nl,
//   06-28465185, KvK 72715022 (algemene voorwaarden), LinkedIn Fred Kool.
// - Google-bedrijfsprofiel: Westbaan 225, 2841 MC Moordrecht, elektrotechnisch installatiebedrijf, openingstijden,
//   21 foto's "Van eigenaar". Geen reviews.
export const site = {
  naam: 'Industrial Field Services',
  kort: 'IFS',
  eigenaar: 'Fred Kool',
  straat: 'Westbaan 225',
  postcode: '2841 MC',
  plaats: 'Moordrecht',
  tel: '06 28 46 51 85',
  telHref: 'tel:+31628465185',
  wa: 'https://wa.me/31628465185',
  mail: 'info@industrialfieldservices.nl',
  kvk: '72715022',
  linkedin: 'https://www.linkedin.com/in/fred-kool-a71ab553/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Industrial+Field+Services+IFS+Westbaan+225+Moordrecht',
  themeColor: '#141a45',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Google, stand 7 oktober 2026. Index 0 = zondag.
export const tijden: [string, string | null][] = [
  ['zondag', null],
  ['maandag', '07:00-17:00'],
  ['dinsdag', '07:00-17:00'],
  ['woensdag', '07:00-17:00'],
  ['donderdag', '07:00-17:00'],
  ['vrijdag', '07:00-12:00'],
  ['zaterdag', null],
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Fred, ik heb een vraag over een machine of besturing.');
