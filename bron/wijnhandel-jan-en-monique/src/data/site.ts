// Feiten van wijnhandeljanenmonique.nl (Home, Slijterij, Wijnhandel, Gedistilleerd, Wijn, Whisky, Speciaal bier,
// Geschenken, Wijnproeverij; overgetikt 28-09-2026) en het Google-profiel (4,8 uit 59 reviews). Niets toegevoegd.
export const site = {
  naam: 'Wijnhandel & Slijterij Jan & Monique',
  kort: 'Jan & Monique',
  straat: 'Prinses Margrietstraat 2',
  postcode: '2983 EH',
  plaats: 'Ridderkerk',
  tel: '0180 412 344',
  telHref: 'tel:+31180412344',
  mail: 'info@wijnhandeljanenmonique.nl',
  kvk: '[[AANLEVEREN: KvK-nummer]]',
  google: '4,8',
  reviews: 59,
  maps: 'https://www.google.com/maps/search/?api=1&query=Wijnhandel+Slijterij+Jan+Monique+Prinses+Margrietstraat+2+Ridderkerk',
  themeColor: '#2e0d1a',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

export const tijden = [
  { dag: 'Maandag', tijd: 'Gesloten' },
  { dag: 'Dinsdag', tijd: '10.00 - 17.30' },
  { dag: 'Woensdag', tijd: '10.00 - 17.30' },
  { dag: 'Donderdag', tijd: '10.00 - 17.30' },
  { dag: 'Vrijdag', tijd: '10.00 - 18.00' },
  { dag: 'Zaterdag', tijd: '10.00 - 16.00' },
  { dag: 'Zondag', tijd: 'Gesloten' },
];
