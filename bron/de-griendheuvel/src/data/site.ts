// Alle feiten komen uit openbare bronnen van het bedrijf zelf:
// degriendheuvel.nl, het Google-profiel, boerenvandordt.nl en dordrecht.net (1 juni 2026).
export const site = {
  naam: 'Shirestal De Griendheuvel',
  kort: 'De Griendheuvel',
  familie: 'Familie Komejan',
  straat: 'Nieuwe Merwedeweg 2',
  postcode: '3329 KK',
  plaats: 'Dordrecht',
  tel: '06 25 06 03 15',
  telHref: 'tel:+31625060315',
  telPaarden: '06 55 88 59 31',
  telPaardenHref: 'tel:+31655885931',
  whatsappPaarden: 'https://wa.me/31655885931',
  mail: 'info@degriendheuvel.nl',
  maps: 'https://www.google.com/maps/search/?api=1&query=Shirestal+De+Griendheuvel+Nieuwe+Merwedeweg+2+Dordrecht',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

/** Pad binnen de submap op GitHub Pages; werkt ook als base later "/" wordt. */
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
