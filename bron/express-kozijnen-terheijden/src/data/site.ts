// Feiten (bekeken 8 oktober 2026), bronnen in bron/:
// - expresskozijnen.nl (Wix): home (laatste projecten, "Gratis offerte en meting", "Thuisbezorgd of ophalen", "Alles op 1 plek"),
//   kunststof/aluminium/hout/deuren/rolluiken/extra's (systeemnamen), contact: expresskozijnen@outlook.com, KvK 64380076,
//   bereikbaar ma t/m vr 09:00 tot 17:30, afhalen alleen op afspraak. Footer: Molenpad, 4844 AG Terheijden.
// - Google-profiel: "Leverancier van ramen", 4,8 uit 63, 06 19339210, reviews tot een maand oud; eigenaarsreacties
//   ondertekend met "Marius". Foto's "Van eigenaar".
// GEEN prijzen, percentages of acties overnemen.
export const site = {
  naam: 'Express Kozijnen',
  plaats: 'Terheijden',
  straat: 'Molenpad',
  postcode: '4844 AG Terheijden',
  tel: '06 19 33 92 10',
  telHref: 'tel:+31619339210',
  wa: 'https://wa.me/31619339210',
  mail: 'expresskozijnen@outlook.com',
  kvk: '64380076',
  route: 'https://www.google.com/maps/dir/?api=1&destination=Express+Kozijnen%2C+Molenpad%2C+4844+AG+Terheijden',
  reviews: 'https://www.google.com/maps/place/Express+Kozijnen/@51.6486679,4.7467567,17z/data=!4m8!3m7!1s0x47c69fef8cf13c5b:0x1e4f7a7f6d1e7ce6!8m2!3d51.6486679!4d4.7467567!9m1!1b1!16s%2Fg%2F11fd8gj_jv',
  insta: 'https://www.instagram.com/expresskozijnen/',
  fb: 'https://www.facebook.com/profile.php?id=61589494914996',
  google: { score: '4,8', aantal: 63 },
  themeColor: '#2f3438',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Bereikbaarheid van hun contactpagina (dag: 0 = zondag).
export const bereikbaar = { dagen: [1, 2, 3, 4, 5], van: 9 * 60, tot: 17 * 60 + 30, tekst: 'ma t/m vr, 09:00 tot 17:30' };

// Letterlijk van Google (5 sterren, stand 8 oktober 2026), ingekort met "…". Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Michelle', tekst: 'Hij kwam snel inmeten, hij dacht heel erg mee en alles word duidelijk verteld. … Binnen 4 dagen overal nieuwe kozijnen en voordeur, en alles netjes afgewerkt en al het puin afgevoerd.' },
  { naam: 'Peter d.', tekst: 'Gezien het bouwjaar van ons huis was niets standaard, maar het team van Express Kozijnen heeft alles zeer vakkundig en netjes uitgevoerd. Ook het vele stucwerk dat hierbij kwam kijken is prachtig en strak afgewerkt.' },
  { naam: 'Shirley V.', tekst: 'Eerste kennismaking met Mario, alles doorgenomen, opgemeten, advies en de volgende dag offerte al binnen. Nog geen 4 weken later gingen ze aan het werk.' },
  { naam: 'Anke', tekst: 'Marius werkt netjes en is heel vriendelijk en denkt met je mee. …' },
  { naam: 'Oscar B.', tekst: 'Marius heeft zes kunststof kozijnen en 45m2 Keralit geplaatst. Netjes gewerkt en niet afgeraffeld.' },
  { naam: 'Kaj Z.', tekst: 'Een harde werker maar die ook oog voor detail heeft.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Express Kozijnen, ik heb een vraag over kozijnen.');
