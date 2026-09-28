// Feiten van dechinesemuuralphen.nl (home, restaurant, afhaal menu, catering, contact, gelezen 28-09-2026)
// en het Google-profiel (4,0 uit 5, 305 reviews). Online bestellen via hun eigen Foodticket-pagina.
export const site = {
  naam: 'De Chinese Muur',
  straat: 'Van Nesstraat 3',
  postcode: '2404 AV',
  plaats: 'Alphen aan den Rijn',
  tel: '0172 475 787',
  telHref: 'tel:+31172475787',
  mobiel: '06 383 995 72',
  mobielHref: 'tel:+31638399572',
  bestellen: 'https://chinesemuuralphenaandenrijn.foodticket.nl/',
  facebook: 'https://www.facebook.com/chinesemuuralphen',
  maps: 'https://www.google.com/maps/search/?api=1&query=Chinese+Muur+Van+Nesstraat+3+Alphen+aan+den+Rijn',
  themeColor: '#3d0d1a',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

export const tijden = [
  { dag: 'Maandag t/m vrijdag', open: '16:00', dicht: '21:30' },
  { dag: 'Zaterdag, zondag en feestdagen', open: '16:00', dicht: '22:00' },
];

export const staffel = [
  { grens: '€35', krijgt: 'gratis kroepoek' },
  { grens: '€65', krijgt: 'gratis 10 miniloempia’s en kroepoek' },
  { grens: '€100', krijgt: 'gratis 20 miniloempia’s en kroepoek' },
];

export const hapmenu = {
  prijs: '€27,50',
  voor: ['Tomatensoep', 'Mini loempia’s (8 stuks)'],
  hoofd: ['Foe Yong Hai kip', 'Babi pangang', 'Saté ajam', 'Indisch rundvlees met kerriesaus'],
};

export const rijsttafels = [
  'Chinese rijsttafel “De Chinese Muur”',
  'Chinese rijsttafel',
  'Indische rijsttafel',
  'Rijsttafel Wen Zhou',
  'Chinees-Indisch speciale rijsttafel',
  'Szechuan rijsttafel',
  'Seafood rijsttafel',
];

export const catering = [
  { naam: 'Menu A', prijs: '€13', voor: ['Mini loempia’s', 'Saté ajam', 'Kerry tosti’s', 'Kroepoek'], hoofd: ['Babi pangang', 'Tjap tjoy kip', 'Foe yong hai', 'Kipfilet met pikante saus'] },
  { naam: 'Menu B', prijs: '€16', voor: ['Mini loempia’s', 'Kroepoek', 'Saté ajam', 'Kerry tosti’s'], hoofd: ['Babi pangang', 'Foe yong hai', 'Babi ketjap', 'Kong po kai (kip met noten en licht pikante saus)', 'Ossenhaas met oestersaus'] },
  { naam: 'Menu C', prijs: '€18', voor: ['Mini loempia’s', 'Kerry driehoekjes', 'Kroepoek', 'Chinese pangsit', 'Saté ajam'], hoofd: ['Kip in kingduo-saus (zoet-pikant)', 'Babi pangang', 'Foe yong hai', 'Indisch rundvlees', 'Visfilet in gongbao-saus'] },
];
