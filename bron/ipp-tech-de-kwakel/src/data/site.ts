// Feiten (bekeken 7 oktober 2026), ruwe bronnen in ../../bron:
// - Eigen site ipp-tech.nl (home, overons, services, onderdelen, verkoop): teksten, 25 jaar ervaring, Baoli dealer,
//   NEN 3140-keuringen, verhuur minimaal 1 maand, occasions met specificaties, onderdelen, info@ipp-tech.nl, KvK 65000331.
// - Google-bedrijfsprofiel: Noorddammerweg 45, 1424 NW De Kwakel, heftruckdealer, 06 42047596, openingstijden. Geen reviews.
// - LinkedIn: Ed Boersma, algemeen directeur en eigenaar van IPP-Tech B.V.
export const site = {
  naam: 'IPP-Tech B.V.',
  kort: 'IPP-Tech',
  straat: 'Noorddammerweg 45',
  postcode: '1424 NW',
  plaats: 'De Kwakel',
  tel: '06 42 04 75 96',
  telHref: 'tel:+31642047596',
  wa: 'https://wa.me/31642047596',
  mail: 'info@ipp-tech.nl',
  kvk: '65000331',
  maps: 'https://www.google.com/maps/search/?api=1&query=IPP-Tech+Noorddammerweg+45+De+Kwakel',
  themeColor: '#1d1d1b',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Google, stand 7 oktober 2026. Index 0 = zondag.
export const tijden: [string, string | null][] = [
  ['zondag', null],
  ['maandag', '08:00-17:00'],
  ['dinsdag', '08:00-17:00'],
  ['woensdag', '08:00-17:00'],
  ['donderdag', '08:00-17:00'],
  ['vrijdag', '08:00-17:00'],
  ['zaterdag', '09:00-14:00'],
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Ed, ik heb een vraag over een heftruck.');
