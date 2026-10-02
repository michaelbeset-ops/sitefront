// Feiten van vloerfix.nl (alle hoofdpagina's bekeken 2 oktober 2026: Home, Over ons, Werkwijze, Advies & prijs,
// Fotogallerij, Contact; de ruim 380 plaatsnaampagina's hebben allemaal dezelfde tekst als Over ons) en het
// Google-bedrijfsprofiel (5,0 uit 8 reviews, Dennenhof 23, 3355 RJ Papendrecht, 06 53190711, vrijdag 10.00-16.00).
// Namen Wim de Man en Cock Vielvoije, "klein bedrijf", "meer dan 25 jaar ervaring", aannemers en particulieren: Home/Over ons.
// KvK 23075872, info@vloerfix.nl: footer en Contact. Werkgebied: hun eigen pagina's per provincie (Zuid-Holland, Utrecht,
// Noord-Brabant, Zeeland).
export const site = {
  naam: 'Vloerfix',
  straat: 'Dennenhof 23',
  postcode: '3355 RJ',
  plaats: 'Papendrecht',
  tel: '06 53 19 07 11',
  telHref: 'tel:+31653190711',
  wa: 'https://wa.me/31653190711',
  mail: 'info@vloerfix.nl',
  kvk: '23075872',
  google: '5,0',
  googleAantal: 8,
  maps: 'https://www.google.com/maps/search/?api=1&query=Vloerfix+Dennenhof+23+Papendrecht',
  themeColor: '#f2f1ee',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent('Hallo Vloerfix, ' + tekst)}`;
