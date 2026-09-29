// Feiten van stellophoeve.nl (home, Activiteiten, Appartementen, Faciliteiten, Prijzen, Route, Wist-u-dat, contact)
// en het Google-profiel (4,7 uit 5, 56 reviews). Tarieven: pagina Prijzen, "Tarieven 2026".
export const site = {
  naam: 'Camping De Stellop Hoeve',
  eigenaren: 'Jan en Bertha Smits',
  straat: 'Oirschotseweg 50',
  postcode: '5066 CJ',
  plaats: 'Moergestel',
  tel: '(013) 513 22 05',
  telHref: 'tel:+31135132205',
  mobiel1: '06-13 56 67 00',
  mobiel1Href: 'tel:+31613566700',
  mobiel2: '06-21 69 52 41',
  mobiel2Href: 'tel:+31621695241',
  whatsapp: 'https://wa.me/31621695241',
  mail: 'info@stellophoeve.nl',
  maps: 'https://www.google.nl/maps/place/De+Stellop+Hoeve/@51.5423523,5.2094227,17z/data=!3m1!4b1!4m5!3m4!1s0x47c6c1bc0389612d:0x96bc8862b781d7a4!8m2!3d51.5423523!4d5.2116114',
  google: '4,7',
  reviews: 56,
  themeColor: '#1d3527',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

// Tarieven 2026, exact van de pagina Prijzen (incl. toeristenbelasting).
export const tarieven = {
  kamperen: [
    { t: '2 personen per nacht (SVR-lid)', p: 24.5 },
    { t: '2 personen per nacht (geen SVR-lid)', p: 27.5 },
    { t: '1 persoon per nacht (SVR-lid)', p: 20 },
    { t: '1 persoon per nacht (geen SVR-lid)', p: 22.5 },
    { t: 'Elke persoon meer (incl. toeristenbelasting)', p: 6.5 },
    { t: 'Toeristenbelasting p.p.p.n.', p: 2.15 },
    { t: 'Tent (klein)', p: 1.5 },
    { t: 'Bezoekers p.p.', p: 1.5 },
    { t: 'Douche per douchebeurt', p: 0.5 },
    { t: 'Emmer warm water', p: 0.2 },
    { t: 'Huisdieren per dag', p: 1.5 },
    { t: 'Overnachtende caravan', p: 7 },
  ],
  verblijf: [
    { t: 'Voor 2 personen per nacht', p: 47.5 },
    { t: 'Voor 1 persoon per nacht', p: 37.5 },
    { t: '1 week 2 personen (7 nachten)', p: 325 },
    { t: 'Lakenset (verplicht)', p: 5 },
  ],
};
export const euro = (n: number) => '€ ' + n.toLocaleString('nl-NL', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
