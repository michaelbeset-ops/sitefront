// Feiten (bekeken 11 oktober 2026), bronnen in bron/:
// - Eigen site leupenelectro.nl (statische HTML uit 2013/2014, alle pagina's in bron/site/*.html):
//   "Leupen Electro is een erkend elektrotechnisch installatiebureau." Opgericht door Franz Leupen, eenmanszaak sept. 2000.
//   Erkend elektrotechnisch installateur, erkend beveiligingsinstallateur, erkend brandmeldinstallateur.
//   Contact: Everdenberg 145, 4902 TT Oosterhout, 06 23 227 635, info@leupenelectro.nl.
// - Google: "Franz Leupen Service", Beveiligingsservice, 5,0 uit 11 reviews, nieuwste 6 en 10 maanden oud. Geen foto's, geen tijden.
// - Everdenberg 145 ligt op bedrijventerrein Everdenberg (OSM), dus het volledige adres mag.
export const site = {
  naam: 'Leupen Electro',
  plaats: 'Oosterhout',
  straat: 'Everdenberg 145',
  postcode: '4902 TT',
  tel: '06 23 22 76 35',
  telHref: 'tel:+31623227635',
  wa: 'https://wa.me/31623227635',
  mail: 'info@leupenelectro.nl',
  route: 'https://www.google.com/maps/dir/?api=1&destination=Everdenberg+145%2C+4902+TT+Oosterhout',
  reviews: 'https://www.google.com/maps/place/Franz+Leupen+Service/@51.6293696,4.8809523,17z/data=!4m6!3m5!1s0x47c6991c9f69c961:0x82ae9a7f358f331d!8m2!3d51.6293696!4d4.8809523!16s%2Fg%2F1vp6zdg8',
  google: { score: '5,0', aantal: 11 },
  themeColor: '#111a15',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Letterlijk van Google (5 sterren, met tekst). Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Ad A.', wanneer: '2 jaar geleden', tekst: 'Meterkast vernieuwd/uitgebreid, installatie werkzaamheden in de keuken. Mooi uitgevoerd, echte vakman.' },
  { naam: 'Rien', wanneer: '6 maanden geleden', tekst: 'We hadden een onverwachte stroomstoring die vakkundig en heel snel werd opgelost. Super vriendelijk en top service. Dit bedrijf is echt een aanrader.' },
  { naam: 'Mitchell V.', wanneer: '10 maanden geleden', tekst: 'Zeer vriendelijk geholpen door deze 2 heren! Met zeer veel vakkennis, mocht ik weer een klus hebben dan zijn jullie de eerste' },
  { naam: 'Ron v.', wanneer: '6 jaar geleden', tekst: 'Absoluut een goed bedrijf. Vriendelijk en behulpzaam. Ook goed geholpen bij een ander probleem. Geheel onder service en nog dezelfde dag. … Zeker een aanrader.' },
];

// De groepen in de aanvraag: alleen vakken die op hun eigen site een pagina of opsomming hebben.
export const groepen = [
  { id: 'electra', naam: 'Electra' },
  { id: 'groepenkast', naam: 'Groepenkast' },
  { id: 'data', naam: 'Data / wifi' },
  { id: 'alarm', naam: 'Alarm' },
  { id: 'camera', naam: 'Camera' },
  { id: 'toegang', naam: 'Toegang' },
  { id: 'brand', naam: 'Brandmelding' },
  { id: 'geluid', naam: 'Geluid' },
  { id: 'keuring', naam: 'Keuring' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Leupen Electro, ik heb een vraag over een klus.');
