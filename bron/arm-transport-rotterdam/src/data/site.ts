// Feiten (bekeken 7 oktober 2026), ruwe bronnen in ../../bron:
// - armtransport.nl (home, diensten, over-ons, portfolio, contact) en transportbedrijfinrotterdam.nl: 06 - 199 939 35,
//   a.r.m.transport@hotmail.com, "meer dan 10 jaar", spoedzending tot bulkzending van 50 ton, Euro 5 of 6, track & trace,
//   24/7 bereikbaar, ca. 100 km rond Rotterdam binnen een uur ophalen, koerier heel Europa, bulk heel Nederland,
//   opslag en overslag in eigen pand, motto "Afspraak is afspraak", pakketdiensten voor Post.nl, DHL en UPS, volledig verzekerd.
// - Google-bedrijfsprofiel: Abel Tasmanstraat 67, 3165 AM Rotterdam-Albrandswaard; ma-vr 07:00-19:00, za 09:00-16:00,
//   zo gesloten; 5,0 uit 2 reviews (zonder tekst). (Eigen sites noemen nog Europaweg 45, Zwijndrecht.)
export const site = {
  naam: 'ARM Transport B.V.',
  kort: 'ARM Transport',
  straat: 'Abel Tasmanstraat 67',
  postcode: '3165 AM',
  plaats: 'Rotterdam-Albrandswaard',
  tel: '06 19 99 39 35',
  telHref: 'tel:+31619993935',
  wa: 'https://wa.me/31619993935',
  mail: 'a.r.m.transport@hotmail.com',
  maps: 'https://www.google.com/maps/search/?api=1&query=ARM+Transport+B.V.+Abel+Tasmanstraat+67+Rotterdam',
  google: { score: '5,0', aantal: 2 },
  themeColor: '#15171b',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Google, stand 7 oktober 2026. Index = getDay() (0 = zondag).
export const tijden: [string, string][] = [
  ['Zondag', 'Gesloten'],
  ['Maandag', '07:00 - 19:00'],
  ['Dinsdag', '07:00 - 19:00'],
  ['Woensdag', '07:00 - 19:00'],
  ['Donderdag', '07:00 - 19:00'],
  ['Vrijdag', '07:00 - 19:00'],
  ['Zaterdag', '09:00 - 16:00'],
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Goedendag, ik heb een vraag over een transport.');
