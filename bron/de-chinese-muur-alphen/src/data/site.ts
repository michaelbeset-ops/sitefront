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

// Catering: wat in alle drie de menu's zit apart, per menu alleen wat erbij komt (zelfde gerechten als op /catering/).
export const cateringBasis = ['mini loempia’s', 'kroepoek', 'saté ajam', 'babi pangang', 'foe yong hai', 'nasi, bami en witte rijst'];
export const catering = [
  { naam: 'Menu A', prijs: '€13', extra: ['Kerry tosti’s', 'Tjap tjoy kip', 'Kipfilet met pikante saus'] },
  { naam: 'Menu B', prijs: '€16', extra: ['Kerry tosti’s', 'Babi ketjap', 'Kong po kai (kip met noten en licht pikante saus)', 'Ossenhaas met oestersaus'] },
  { naam: 'Menu C', prijs: '€18', extra: ['Kerry driehoekjes', 'Chinese pangsit', 'Kip in kingduo-saus (zoet-pikant)', 'Indisch rundvlees', 'Visfilet in gongbao-saus'] },
];
