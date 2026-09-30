// Feiten uit het Google-bedrijfsprofiel "Autocleaningzwijndrecht" (bekeken 30-09-2026): adres, 06-nummer, openingstijden,
// 4,8 uit 26 reviews, samenvatting van reviewfragmenten. "Uw auto gratis ophalen en brengen" staat op hun eigen gevelbord
// (eigen foto op Google). Geen website, geen e-mail, geen KvK, geen behandelingen of prijzen bekend.
export const site = {
  naam: 'Autocleaning Zwijndrecht',
  straat: 'H.A. Lorentzstraat 116',
  postcode: '3331 EE',
  plaats: 'Zwijndrecht',
  tel: '06 81 76 60 08',
  telHref: 'tel:+31681766008',
  whatsapp: 'https://wa.me/31681766008',
  maps: 'https://www.google.com/maps/search/?api=1&query=Autocleaningzwijndrecht+H.A.+Lorentzstraat+116+3331+EE+Zwijndrecht',
  google: '4,8',
  reviews: 26,
  // 0 = zondag ... 6 = zaterdag; null = gesloten
  tijden: [null, ['08:00', '17:30'], ['08:00', '17:30'], ['08:00', '17:30'], ['08:00', '17:30'], ['08:00', '17:30'], ['09:00', '13:00']] as (null | [string, string])[],
  themeColor: '#0d1015',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
