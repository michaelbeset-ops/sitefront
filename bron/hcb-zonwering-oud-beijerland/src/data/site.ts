// Feiten (bekeken 7 oktober 2026), bronnen in bron/:
// - hcbzonwering.nl (home, contact, reparatie-en-onderhoud, 10 productpagina's): "meer dan 25 jaar ervaring",
//   "klein familiebedrijf", "huiselijke showroom", "Showroom op afspraak: Zinkweg 97, 3262 BD Oud-Beijerland",
//   "Werkplaats : Anthony Fokkerstraat 5 (Unit 9), Oud-Beijerland", administratie/planning 0186 - 617817,
//   monteur/expert GSM 06 - 50534895, henkdebacker@hotmail.com. Eigen productie, RAL-kleuren poedercoaten, stalenboek.
//   Levertijden letterlijk op de productpagina's (zie producten hieronder).
// - Google-profiel "HCB zonwering": 4,5 uit 12 reviews, niet geclaimd, geen openingstijden. Foto van klant Ray (jun 2022).
export const site = {
  naam: 'HCB Zonwering',
  plaats: 'Oud-Beijerland',
  showroom: 'Zinkweg 97',
  postcode: '3262 BD',
  werkplaats: 'Anthony Fokkerstraat 5 (unit 9)',
  tel: '0186 617 817',
  telHref: 'tel:+31186617817',
  gsm: '06 50 53 48 95',
  gsmHref: 'tel:+31650534895',
  wa: 'https://wa.me/31650534895',
  mail: 'henkdebacker@hotmail.com',
  maps: 'https://www.google.com/maps/search/?api=1&query=HCB+zonwering+Zinkweg+97+Oud-Beijerland',
  google: { score: '4,5', aantal: 12 },
  themeColor: '#1b3f9e',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

const p = (s: string) => `https://www.hcbzonwering.nl/producten/${s}.html`;

// Hun eigen productmenu. Levertijd alleen waar die letterlijk op hun pagina staat.
export const producten = [
  { naam: 'Rolluiken', href: p('rolluiken'), tijd: '4 à 5 weken', soort: 'buiten' },
  { naam: 'Knikarmschermen', href: p('knikarm-zonneschermen'), tijd: '5 à 6 weken', soort: 'buiten' },
  { naam: 'Uitvalschermen', href: p('uitval-zonneschermen'), tijd: '5 à 6 weken', soort: 'buiten' },
  { naam: 'Zipscreens', href: p('zipscreens'), tijd: '', soort: 'buiten' },
  { naam: 'Markiezen', href: p('markiezen'), tijd: '', soort: 'buiten' },
  { naam: 'Verandazonwering', href: p('verandazonwering'), tijd: '', soort: 'buiten' },
  { naam: 'Horren voor raam en deur', href: p('horren-voor-raam-en-deur'), tijd: 'hordeuren 2 weken', soort: 'binnen' },
  { naam: 'Rolgordijnen, plissés en jaloezieën', href: p('rolgordijnen'), tijd: '', soort: 'binnen' },
  { naam: 'Velux-rolluiken op zonne-energie', href: p('velux-raamdecoratie'), tijd: '4 weken', soort: 'binnen' },
  { naam: 'Somfy-bediening met de app', href: p('somfy'), tijd: '', soort: 'binnen' },
];

// Letterlijk van hun pagina reparatie-en-onderhoud.
export const reparaties = [
  'Doek zonwering vervangen',
  'Doek markiezen vervangen',
  'Repareren van rolluiken',
  'Zonnescherm afstellen wanneer deze niet goed sluit',
  'Armen van zonnescherm vervangen',
  'Repareren of vervangen defecte motor',
  'Repareren of vervangen gaas in hor',
  'Repareren jaloezieën',
];

// Letterlijk van Google (5 sterren, stand 7 oktober 2026). Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Bianca K.', wanneer: '3 jaar geleden', tekst: 'Vakmensen! Kwamen netjes op de afgesproken tijd mijn 4,5m lange elektrisch bedienbaar zonnescherm plaatsen. Vlot en precies. Na afloop van de klus werd er nog keurig schoongemaakt.' },
  { naam: 'K. P.', wanneer: 'een jaar geleden', tekst: 'Zonnescherm hier aangeschaft, hele goede prijs, goede en snelle service en een prachtig scherm. Ik kan iedereen dit bedrijf aanraden.' },
];

export const url = (q = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${q.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo HCB Zonwering, ik heb een vraag over zonwering.');
