// Feiten van yuelangrestaurant.nl (home, over ons, menu/all you can eat, afhaal, contact) en het Google-profiel
// (4,3 uit 5, 387 reviews). Bezorgen loopt via yuelangbezorgen.nl. E-mail en KvK onbekend.
export const site = {
  naam: 'Yue Lang Japans Restaurant',
  kort: 'Yue Lang',
  straat: 'Tollenstraat 8',
  postcode: '4101 BE',
  plaats: 'Culemborg',
  tel: '0345 779 159',
  telHref: 'tel:+31345779159',
  bezorgen: 'http://www.yuelangbezorgen.nl/',
  menukaart: 'http://yuelangrestaurant.nl/assets/menu_yl.pdf',
  maps: 'https://www.google.com/maps/search/?api=1&query=Yue+Lang+Japans+Restaurant+Tollenstraat+8+Culemborg',
  themeColor: '#141414',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

export const prijzen = [
  { wanneer: 'Dinsdag t/m donderdag', prijs: '€ 37,50' },
  { wanneer: 'Vrijdag t/m zondag en feestdagen', prijs: '€ 39,50' },
  { wanneer: 'Kinderen van 4 t/m 11 jaar', prijs: '€ 18,50' },
];
