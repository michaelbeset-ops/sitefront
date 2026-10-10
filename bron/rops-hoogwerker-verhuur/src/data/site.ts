// Feiten (bekeken 10 oktober 2026), bronnen in bron/:
// - Eigen site ropsverhuur.nl (WordPress, Phlox-thema). Alle pagina's via de WP REST API in bron/site/pages.json.
//   Machinepagina's bijgewerkt feb-apr 2026 (dus actueel aanbod). Prijzen staan op hun site, maar tonen we bewust NIET.
//   Contactpagina: Bredendam 4, 4715 SG Rucphen, +31 (0)6 11390915, Info@ropsverhuur.nl, KvK 75152703.
//   Adres = woonhuis in buurtschap De Dood (OSM: "house"), dus alleen "Rucphen" tonen.
// - Google: "Rops hoogwerker verhuur", Verhuurbedrijf voor bouwapparatuur, 4,6 uit 22 reviews, laatste review 1 maand geleden.
//   4 foto's "Van eigenaar" (bron/google/eig-*.jpg).
// Eigenaarsnaam: NIET in eigen bron (site noemt geen naam), dus niet genoemd.
export const site = {
  naam: 'Rops Verhuur',
  plaats: 'Rucphen',
  tel: '06 11 39 09 15',
  telHref: 'tel:+31611390915',
  wa: 'https://wa.me/31611390915',
  mail: 'info@ropsverhuur.nl',
  kvk: '75152703',
  voorwaarden: 'https://www.ropsverhuur.nl/wp-content/uploads/2022/06/Algemene-voorwaarden-met-brief-achtergrond-01-07-2022.pdf',
  reviews: 'https://www.google.com/maps/place/Rops+hoogwerker+verhuur/@51.5229534,4.5678646,17z/data=!4m6!3m5!1s0x47c4194061a07a5b:0xbbf5cd4a93fbcc71!8m2!3d51.5229534!4d4.5678646!16s%2Fg%2F11fm54mg__',
  google: { score: '4,6', aantal: 22 },
  themeColor: '#1b1a19',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

export type Machine = { naam: string; model: string; h: number; bereik?: string; aandrijving: string; extra?: string };
export type Soort = { id: string; naam: string; kort: string; machines: Machine[]; noot?: string };

// Letterlijk van hun machinepagina's (titel, machine, werkhoogte, zijdelings bereik, aandrijving). Geen prijzen.
export const park: Soort[] = [
  {
    id: 'schaar-e', naam: 'Schaarhoogwerker elektrisch', kort: 'Schaarlift (accu)',
    machines: [
      { naam: 'Schaarlift 8 m smal', model: 'Genie GS-2032', h: 8, aandrijving: 'accu' },
      { naam: 'Rups schaarlift 9 m', model: 'Zoom-Lion 0610C', h: 9, aandrijving: 'accu' },
      { naam: 'Schaarlift 10 m smal', model: 'Genie GS-2632', h: 10, aandrijving: 'accu' },
      { naam: 'Schaarlift 10 m breed', model: 'Genie GS-2646', h: 10, aandrijving: 'accu' },
      { naam: 'Schaarlift 12 m breed', model: 'Genie GS-3246', h: 12, aandrijving: 'accu' },
      { naam: 'ERT schaarlift 12 m', model: 'Magni ES 1218 RT', h: 12, aandrijving: 'accu', extra: 'met stempels' },
      { naam: 'Schaarlift 14 m breed', model: 'Genie GS-4047', h: 14, aandrijving: 'accu' },
      { naam: 'ERT schaarlift 14 m', model: 'Magni ES 1418 RT', h: 14, aandrijving: 'accu', extra: 'met stempels' },
    ],
  },
  {
    id: 'schaar-d', naam: 'Schaarhoogwerker diesel', kort: 'Schaarlift (diesel)',
    machines: [
      { naam: 'RT schaarlift 10 m', model: 'Genie GS-2669 RT', h: 10, aandrijving: 'diesel' },
      { naam: 'RT schaarlift 12 m', model: 'Magni DS1218RT', h: 12, aandrijving: 'diesel' },
      { naam: 'XL schaarlift 12 m', model: 'Genie GS-3390 RT', h: 12, aandrijving: 'diesel', extra: '6 m dek' },
      { naam: 'RT schaarlift 14 m', model: 'Magni DS1418RT', h: 14, aandrijving: 'diesel' },
      { naam: 'XL schaarlift 15 m', model: 'Magni DS1523RT', h: 15, aandrijving: 'diesel', extra: '6 m dek' },
      { naam: 'XL schaarlift 18 m', model: 'Magni', h: 18, aandrijving: 'diesel', extra: '6 m dek' },
    ],
  },
  {
    id: 'knikarm', naam: 'Knikarmhoogwerker', kort: 'Knikarm',
    machines: [
      { naam: 'Knikarm 12 m', model: 'Nifty HR12 NDE', h: 12, bereik: '6 m', aandrijving: 'accu/diesel' },
      { naam: 'Knikarm 12 m', model: 'Man’go 12', h: 12, bereik: '6 m', aandrijving: 'diesel' },
      { naam: 'Knikarm 16 m', model: 'JLG 450AJ', h: 16, bereik: '8 m', aandrijving: 'diesel' },
      { naam: 'Knikarm 17 m', model: 'Nifty Lift HR 17 HJ', h: 17, bereik: '8 m', aandrijving: 'accu/diesel' },
      { naam: 'Knikarm 18 m', model: 'JLG 510AJ', h: 18, bereik: '10 m', aandrijving: 'diesel' },
      { naam: 'Knikarm 21 m', model: 'Genie Z-62', h: 21, bereik: '12 m', aandrijving: 'diesel' },
      { naam: 'Knikarm 21 m', model: 'Niftylift HR 21', h: 21, bereik: '13 m', aandrijving: 'accu/diesel' },
      { naam: 'Knikarm 28 m', model: 'Niftylift HR 28', h: 28, bereik: '19 m', aandrijving: 'diesel' },
    ],
  },
  {
    id: 'telescoop', naam: 'Telescoophoogwerker', kort: 'Telescoop',
    noot: 'Een deel is leverbaar met 4 m platform.',
    machines: [
      { naam: 'Telescoop 16 m', model: 'Genie S-45 (XC)', h: 16, bereik: '12 m', aandrijving: 'diesel', extra: 'leverbaar met 4 m platform' },
      { naam: 'Rups telescoop 16 m', model: 'Genie S-45 Trax (XC)', h: 16, bereik: '11 m', aandrijving: 'diesel', extra: 'leverbaar met 4 m platform' },
      { naam: 'Telescoop 22 m', model: 'Genie S-65 (XC)', h: 22, bereik: '17 m', aandrijving: 'diesel', extra: 'leverbaar met 4 m platform' },
      { naam: 'Rups telescoop 22 m', model: 'Genie S-65 Trax (XC)', h: 22, bereik: '17 m', aandrijving: 'diesel', extra: 'leverbaar met 4 m platform' },
      { naam: 'Rups telescoop 27 m', model: 'Genie S80J Trax', h: 27, bereik: '17 m', aandrijving: 'diesel' },
      { naam: 'Telescoop 28 m', model: 'Genie S-85 (XC)', h: 28, bereik: '24 m', aandrijving: 'diesel', extra: 'leverbaar met 4 m platform' },
      { naam: 'Telescoop 38 m', model: 'JLG 1200', h: 38, bereik: '22 m', aandrijving: 'diesel' },
      { naam: 'Telescoop 43 m', model: 'JLG 1350', h: 43, bereik: '24 m', aandrijving: 'diesel' },
    ],
  },
  {
    id: 'spin', naam: 'Spinhoogwerker', kort: 'Spin',
    noot: 'Voorzien van non-marking rupsen.',
    machines: [
      { naam: 'Spinhoogwerker 15 m', model: 'Platform Basket 15.75', h: 15, bereik: '7,4 m', aandrijving: 'diesel / 230V', extra: 'non-marking rupsen' },
      { naam: 'Spinhoogwerker 18 m', model: 'Platform Basket 18.90', h: 17.6, bereik: '9,2 m', aandrijving: 'diesel / 230V', extra: 'non-marking rupsen' },
      { naam: 'Spinhoogwerker 26 m', model: 'Hinowa 26.14', h: 26, bereik: '14 m', aandrijving: 'diesel / 230V', extra: 'non-marking rupsen' },
    ],
  },
  {
    id: 'mast', naam: 'Masthoogwerker', kort: 'Mast',
    machines: [
      { naam: 'Masthoogwerker 6 m', model: 'JLG 1230 ES', h: 6, aandrijving: 'accu' },
      { naam: 'Masthoogwerker 10 m', model: 'Haulotte Star 10', h: 10, bereik: '3 m', aandrijving: 'accu' },
      { naam: 'Masthoogwerker 12 m', model: 'JLG Toucan 12E+', h: 12, bereik: '6 m', aandrijving: 'accu' },
    ],
  },
  {
    id: 'aanhanger', naam: 'Aanhangerhoogwerker', kort: 'Aanhanger',
    machines: [
      { naam: 'Aanhangerhoogwerker 17 m', model: 'Niftylift 170', h: 17, bereik: '9 m', aandrijving: 'accu' },
    ],
  },
];

// Letterlijk van Google (positieve reviews met tekst). Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Danielle v.', wanneer: 'een jaar geleden', tekst: 'Hele fijne ervaring! Goed contact en komt afspraken na. Als ik nog eens een hoogwerker nodig heb bel ik zeker ROPS verhuur!' },
  { naam: 'Andrew O.', wanneer: '5 jaar geleden', tekst: 'Prima service, vriendelijk en komt afspraken na. Goed onderhouden en schone machines. Aanrader!!' },
  { naam: 'Q. F.', wanneer: 'een maand geleden', tekst: 'Professioneel bedrijf en goed materieel!' },
];

// Plaatsen met een eigen pagina op ropsverhuur.nl (hoogwerker-rucphen, -etten-leur, -breda, -zundert, -bergen-op-zoom).
export const plaatsen = [
  { naam: 'Rucphen', lat: 51.531, lon: 4.558, thuis: true },
  { naam: 'Etten-Leur', lat: 51.570, lon: 4.636 },
  { naam: 'Breda', lat: 51.589, lon: 4.776 },
  { naam: 'Zundert', lat: 51.471, lon: 4.656 },
  { naam: 'Bergen op Zoom', lat: 51.495, lon: 4.292 },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Rops Verhuur, ik wil graag een hoogwerker huren.');
