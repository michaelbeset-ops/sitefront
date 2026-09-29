// Feiten van autobedrijfdennismaas.nl (Welkom, Service, Werkplaats, Occassions, Route, Contact; overgetikt 29-09-2026),
// de tekst op hun gevelbord (images/gevel.jpg) en het Google-profiel (4,8 uit 53 reviews). Niets toegevoegd.
// De occasions-pagina is leeg: we tonen geen voorraad.
export const site = {
  naam: 'Autobedrijf Dennis Maas',
  straat: 'Ambachtlaan 22',
  postcode: '4871 ED',
  plaats: 'Etten-Leur',
  tel: '076-5013912',
  telHref: 'tel:+31765013912',
  mobiel: '06-24579863',
  mobielHref: 'tel:+31624579863',
  whatsapp: 'https://wa.me/31624579863',
  fax: '076-5011487',
  mail: 'info@autobedrijfdennismaas.nl',
  kvk: '[[AANLEVEREN: KvK-nummer]]',
  google: '4,8',
  reviews: 53,
  maps: 'https://www.google.com/maps/search/?api=1&query=Autobedrijf+Dennis+Maas+Ambachtlaan+22+Etten-Leur',
  themeColor: '#0c2a2d',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

export const tijden = [
  { dag: 'Maandag', tijd: '08:30 - 17:30' },
  { dag: 'Dinsdag', tijd: '08:30 - 17:30' },
  { dag: 'Woensdag', tijd: '08:30 - 17:30' },
  { dag: 'Donderdag', tijd: '08:30 - 17:30' },
  { dag: 'Vrijdag', tijd: '08:30 - 17:30' },
  { dag: 'Zaterdag', tijd: '09:00 - 12:00' },
];
