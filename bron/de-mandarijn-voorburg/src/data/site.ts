// Feiten van demandarijn.com (home, de mandarijn, reserveren, afhalen, prijzen) en het Google-profiel
// (4,0 uit 5, 209 reviews, 28-09-2026). Tapasmenu/all you can eat bestaat niet meer en staat er bewust niet in.
export const site = {
  naam: 'De Mandarijn',
  soort: 'Chinees Indisch restaurant',
  straat: 'Klaverweide 64-66',
  postcode: '2272 BV',
  plaats: 'Voorburg',
  tel: '070 320 0741',
  telHref: 'tel:+31703200741',
  mail: 'info@demandarijn.com',
  maps: 'https://www.google.com/maps/search/?api=1&query=De+Mandarijn+Klaverweide+64+Voorburg',
  afhaalkaart: 'https://demandarijn.com/wp-content/uploads/2025/12/afhaal-2025-12.pdf',
  glutenvrij: 'https://demandarijn.com/wp-content/uploads/2024/07/Glutenvrij-afhaalmenu.pdf',
  themeColor: '#14332b',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const tijden: [string, string | null][] = [
  ['Maandag', '16:00 tot 21:00'],
  ['Dinsdag', null],
  ['Woensdag', '16:00 tot 21:00'],
  ['Donderdag', '16:00 tot 21:00'],
  ['Vrijdag', '16:00 tot 21:00'],
  ['Zaterdag', '16:00 tot 21:00'],
  ['Zondag', '16:00 tot 21:00'],
];
