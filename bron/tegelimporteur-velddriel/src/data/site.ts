// Feiten (bekeken 11 oktober 2026), bronnen in bron/:
// - Eigen site tegelimporteur.nl (MyOnlineStore-webwinkel, teksten in bron/site/*.txt):
//   "Tegelimporteur.nl is de specialist op het gebied van marmerlook tegels. De meeste uiteenlopende maten hebben wij
//   uitgestald staan in onze showroom. Diverse soorten als Carrara, Calacatta, Emperador, Port Laurent, Creme Marfil,
//   zwart marmer, grijs etc." / "De Geerden 24, Velddriel, 1E ETAGE" / "Op afspraak geopend (overdag en 's avonds)" /
//   "ZATERDAGS GEOPEND VAN 10.00 TOT 16.00 UUR" / 06-18538452 / info@tegelimporteur.nl / Tegelimport Holland bv, KvK 96482052.
//   Let op: de Google-naam zegt "zaterdag van 9.30 tot 16.00 uur"; hier staat de tijd van hun eigen site.
// - Google: Tegelwinkel, 4,7 uit 26 reviews. Geen eigenaarsnaam in eigen bron (alleen in Google-antwoorden), dus niet getoond.
// - De Geerden 24 is een bedrijfspand op bedrijventerrein De Geerden (eigen foto van het pand), dus het volledige adres mag.
export const site = {
  naam: 'Tegelimporteur',
  bedrijf: 'Tegelimport Holland bv',
  kvk: '96482052',
  plaats: 'Velddriel',
  straat: 'De Geerden 24',
  postcode: '5334 LE',
  etage: '1e etage',
  tel: '06 18 53 84 52',
  telHref: 'tel:+31618538452',
  wa: 'https://wa.me/31618538452',
  mail: 'info@tegelimporteur.nl',
  route: 'https://www.google.com/maps/dir/?api=1&destination=De+Geerden+24%2C+5334+LE+Velddriel',
  reviews: 'https://www.google.com/maps/place/Tegelimporteur/@51.7573314,5.2886988,17z/data=!4m6!3m5!1s0x47c6f9b1c874e225:0xcabecad5e2ad7327!8m2!3d51.7573314!4d5.2886988!16s%2Fg%2F11h_0pbs5f',
  google: { score: '4,7', aantal: 26 },
  zaterdag: { open: 10, dicht: 16, tekst: '10.00 tot 16.00 uur' },
  themeColor: '#141111',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Letterlijk van Google (alle 5 sterren). Naam: voornaam + initiaal. "…" = ingekort.
export const reviews = [
  { naam: 'Ficary', wanneer: '4 jaar geleden', tekst: 'Stop met zoeken, dit is je tegelleverancier, echt. … Deze man echter, heeft een loods vol met alles wat je je kan bedenken, een echte \'snoepwinkel\' voor …' },
  { naam: 'Susan J.', wanneer: 'een jaar geleden', tekst: 'Geweldig geholpen en mensen weten waar ze over praten. Daar ze zelf gedeeltelijk in Spanje wonen en importeren hebben ze zeer scherpe prijzen. … Top!' },
  { naam: 'Youri M.', wanneer: 'een jaar geleden', tekst: 'Netjes en snel geholpen bij mijn aankoop van tegels ze hebben zelfs geholpen bij het regelen van transport ik ben tevreden !' },
  { naam: 'Meriam B.', wanneer: '2 jaar geleden', tekst: 'Wij zijn erg tevreden over onze marmeren tegels met daarbij behorende top service!' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Tegelimporteur, ik heb een vraag over tegels.');
