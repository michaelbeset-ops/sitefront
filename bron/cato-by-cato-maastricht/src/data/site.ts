// Bron: Google-bedrijfsprofiel van Cato by cato (content/b17/ALLE.md, 01-10-2026): adres, 06, openingstijden,
// Google 4,8 uit 479 reviews en de samengevatte review-thema's. Geen website, geen menukaart, geen prijzen bekend.
// De Google-omschrijving over dameskleding klopt niet en is genegeerd. Straathoek Stenenbrug / St. Pieterstraat Z.O.
// staat op de straatnaambordjes op de eigen pandfoto (google-3.jpg).
export const site = {
  naam: 'Cato by cato',
  straat: 'Stenenbrug 9A',
  postcode: '6211 HP',
  plaats: 'Maastricht',
  hoek: 'hoek Stenenbrug en St. Pieterstraat',
  tel: '06 51 09 86 19',
  telHref: 'tel:+31651098619',
  wa: 'https://wa.me/31651098619',
  maps: 'https://www.google.com/maps/search/?api=1&query=Cato+by+cato+Stenenbrug+9A+Maastricht',
  google: { score: '4,8', aantal: 479 },
  themeColor: '#0e2f33',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;


// Wat gasten noemen: samengevat uit de Google-reviews (geen citaten).
export const noemen = [
  { kop: 'Gezond en betaalbaar', tekst: 'Gezond, betaalbaar comfortfood.' },
  { kop: 'Veel vega', tekst: 'Veel vega en vegetarisch, en veel keuze.' },
  { kop: 'Goed gekruid', tekst: 'Linzen, couscous en bulgur, goed gekruid.' },
  { kop: 'Zelf je base kiezen', tekst: 'Je kiest zelf je base.' },
  { kop: 'Studentenplek', tekst: 'Dé plek voor (UM-)studenten.' },
  { kop: 'Ook voor thuis', tekst: 'Ook om mee te nemen en thuis op te warmen.' },
  { kop: 'Lieve eigenaar', tekst: 'Een lieve eigenaar en een fijne sfeer.' },
];
export const themas = [
  ['studenten', 28], ['vega', 14], ['keuze', 14], ['gezond eten', 8], ['linze', 7],
  ['couscous', 7], ['bulgur', 6], ['gekruid', 6], ['vegetarisch eten', 6], ['base', 5],
] as const;
