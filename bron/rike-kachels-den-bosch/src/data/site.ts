// Feiten (bekeken 8 oktober 2026), bronnen in bron/:
// - rikebv.nl (one-pager, © 2018; bron/site/home.html): "Rike Schoorsteenwerken BV", ruim twintig jaar ervaring in alle
//   werkzaamheden rond rookkanalen; gediplomeerd en gecertificeerd personeel; alles op maat; haarden en kachels in binnen- en
//   buitenland; diensten onderhoud, inspectie, reparatie, installatie, advies; productlijn kachels, kachelbuizen, open haarden,
//   rookkanalen, specials custom-made en design sfeerverwarmingshaarden; van schoorsteenkap tot complete open haard met
//   rookkanaal; klantenkring (8 groepen); NL, BE, LU, FR, DE; T 073-7855285, M 06-22918556, info@rikebv.nl, KvK 75100746;
//   "Wij reageren gegarandeerd binnen 24 uur" (contactformulier).
// - Google-profiel "Rike B.v.": Houtkachelwinkel, 5,0 uit 10 reviews (nieuwste 3 maanden oud), geen openingstijden,
//   20 foto's "Van eigenaar" (2020-2024), deels met bijschrift van Rike zelf.
// Adres Maarten Trompstraat 1 ligt in een woonwijk zonder showroom/openingstijden: alleen de plaats tonen.
// Eigenaarsnaam staat NIET in een eigen bron (alleen "Richard" in reviews): niet noemen buiten letterlijke reviews.
export const site = {
  naam: 'Rike B.V.',
  voluit: 'Rike Schoorsteenwerken BV',
  plaats: "'s-Hertogenbosch",
  tel: '073 785 52 85',
  telHref: 'tel:+31737855285',
  mob: '06 22 91 85 56',
  mobHref: 'tel:+31622918556',
  wa: 'https://wa.me/31622918556',
  mail: 'info@rikebv.nl',
  kvk: '75100746',
  reviews: 'https://www.google.com/maps/place/Rike+B.v./@51.6943901,5.2560851,17z/data=!4m6!3m5!1s0x47c6edcd1d9bf2ef:0xdd6a95d6394a24ec!8m2!3d51.6943901!4d5.2560851!16s%2Fg%2F11fr3l9cf5',
  google: { score: '5,0', aantal: 10 },
  themeColor: '#151515',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Letterlijk van Google (5 sterren, stand 8 oktober 2026). Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Floor W.', tekst: '… Het was even een klus, maar Richard gaf niet op en uiteindelijk met een fantastisch resultaat. En het was nog gezellig ook ;-).' },
  { naam: 'Richie W.', tekst: 'RIKE heeft bij ons 2 rookkanalen aangelegd en komt jaarlijks de schoorsteen vegen. Absoluut aanrader. …' },
  { naam: 'J. D.', tekst: 'Goede communicatie, goed advies en zeer net werk!' },
  { naam: 'Van Ommen Dakonderhoud', tekst: 'Fijne samenwerking met Richard! Goed advies en service wanneer nodig!' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Rike, ik heb een vraag over een kachel, haard of rookkanaal.');
