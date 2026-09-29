// Feiten van sbtyres.nl (home, impressum, banden technische info, winterbanden info, load/speed index info, uitgebreid zoeken),
// stand 29 september 2026, en het Google-profiel (4,8 uit 63 reviews).
export const site = {
  naam: 'SB Tyres',
  juridisch: 'Bandenservice SB Tyres',
  straat: 'Hoge Eng Oost 9a',
  postcode: '3882 TM',
  plaats: 'Putten',
  plaatsLang: 'Putten (Gld)',
  contact: 'Steven',
  tel: '06 53 97 52 34',
  telHref: 'tel:+31653975234',
  wa: 'https://wa.me/31653975234',
  mail: 'info@sbtyres.nl',
  maps: 'https://www.google.com/maps/search/?api=1&query=SB+Tyres+Hoge+Eng+Oost+9a+Putten',
  google: '4,8',
  reviews: 63,
  kvk: '[[AANLEVEREN: KvK-nummer]]',
  themeColor: '#0f1011',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

export const tijden = [
  { dag: 'Maandag t/m vrijdag', kort: 'Ma t/m vr', tijd: '10.00 - 17.30' },
  { dag: 'Dinsdagavond', kort: 'Di-avond', tijd: '19.00 - 20.30' },
  { dag: 'Zaterdag', kort: 'Zaterdag', tijd: '09.00 - 12.30' },
];

// Letterlijk van de homepage, met datum.
export const prijzen = [
  { naam: 'Wielenwissel', bedrag: '€ 40,-', per: 'per 4' },
  { naam: 'Bandenwissel', bedrag: '€ 20,-', per: 'per stuk' },
];
export const prijsDatum = '29 september 2026';
export const prijsNoot = 'Prijzen onder voorbehoud, excl. monteren/balanceren, incl. btw.';

// Impressum: A-merken en huismerken, in hun volgorde.
export const aMerken = ['Michelin', 'Continental', 'Hankook', 'Goodyear', 'Pirelli', 'Vredestein'];
export const huisMerken = ['Maxxis', 'Hifly'];
// Categorieën van hun zoekpagina.
export const categorieen = ['Banden', 'Sportvelgen', 'Aanhangwagen', 'Reservewielen', 'Diversen', 'Lekke band?'];

// Load index-tabel (kg) en speed index-tabel (km/u) van hun pagina "Banden technische info".
export const loadIndex: Record<number, number> = {
  63: 272, 64: 280, 65: 290, 66: 300, 67: 307, 68: 315, 69: 325, 70: 335, 71: 345, 72: 355, 73: 365, 74: 375, 75: 387,
  76: 400, 77: 412, 78: 425, 79: 437, 80: 450, 81: 462, 82: 475, 83: 487, 84: 500, 85: 515, 86: 530, 87: 545, 88: 560,
  89: 580, 90: 600, 91: 615, 92: 630, 93: 650, 94: 670, 95: 690, 96: 710, 97: 730, 98: 750, 99: 775, 100: 800, 101: 825,
  102: 850, 103: 875, 104: 900, 105: 925, 106: 950, 107: 975, 108: 1000, 109: 1030, 110: 1060, 111: 1090, 112: 1120,
};
export const speedIndex: Record<string, string> = {
  M: '130', N: '140', P: '150', Q: '160', R: '170', S: '180', T: '190', U: '200', H: '210', V: '240', W: '270', Y: '300', ZR: 'meer dan 240',
};
