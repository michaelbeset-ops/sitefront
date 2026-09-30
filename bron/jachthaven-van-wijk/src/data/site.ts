// Feiten van jachthavenvanwijk.nl (home, te koop + losse verkooppagina's, contact) en de aparte domeinen
// sloepenhaven.nl (jachthaven), drogejachthaven.nl, winterstalling-jachthaven.nl, fullservicejachthaven.nl (jachtwerf)
// en bouwvanwijk.nl (over ons). Google-profiel: 4,2 uit 26 reviews (bewust niet in de hero).
export const site = {
  naam: 'Jachthaven van Wijk',
  juridisch: 'Jachthaven van Wijk B.V.',
  contactpersoon: 'Bouw van Wijk',
  straat: 'Boddens Hosangweg 80',
  postcode: '2481 LA',
  plaats: 'Woubrugge',
  tel: '0172 517 127',
  telHref: 'tel:+31172517127',
  mail: 'info@jachthavenvanwijk.nl',
  maps: 'https://www.google.com/maps/search/?api=1&query=Jachthaven+van+Wijk+Boddens+Hosangweg+80+Woubrugge',
  google: '4,2',
  reviews: 26,
  kvk: '99319977',
  themeColor: '#0a1f2e',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
