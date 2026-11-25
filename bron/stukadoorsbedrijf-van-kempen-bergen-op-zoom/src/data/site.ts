// Alle feiten komen uit het dagbestand van 25-11-2026 (lead stukadoorsbedrijf-van-kempen-bergen-op-zoom), met als
// bronnen de eigen site stukadoorsbedrijflvankempen.nl, Klantenvertellen, Facebook en Trustoo.
// Openingstijden en prijzen zijn niet gevonden en staan daarom niet op de site.
export const site = {
  naam: 'Stukadoorsbedrijf L. van Kempen',
  kort: 'Van Kempen',
  eigenaar: 'Luciën van Kempen',
  straat: 'Röntgenstraat 8',
  postcode: '4624 XG',
  plaats: 'Bergen op Zoom',
  vast: '0164-247050',
  vastHref: 'tel:+31164247050',
  mobiel: '06-13539915',
  mobielHref: 'tel:+31613539915',
  whatsapp: 'https://wa.me/31613539915',
  mail: 'stukadoorsbedrijfvankempen@gmail.com',
  kvk: '55183204',
  facebook: 'https://www.facebook.com/p/Stukadoorsbedrijf-LvKempen-100053255965585/',
  reviews: 'https://www.klantenvertellen.nl/reviews/1001105/stukadoorsbedrijf-l-van-kempen-bv',
  route: 'https://www.google.com/maps/search/?api=1&query=R%C3%B6ntgenstraat+8+4624+XG+Bergen+op+Zoom',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Diensten zoals de eigen site ze noemt. Geen uitleg erbij verzonnen.
export const diensten = [
  { naam: 'Raapwerk' },
  { naam: 'Pleisterwerk' },
  { naam: 'Sierpleisters', soorten: ['Granol', 'Spachtelputz', 'Barokpleister', 'Metallics', 'Marmerstuc'] },
  { naam: 'Schuurwerk' },
  { naam: 'Beton ciré' },
  { naam: 'Lijsten en ornamenten' },
  { naam: 'Buitenwerk' },
];

// Letterlijk van Klantenvertellen, met naam en woonplaats zoals daar vermeld.
export const reviews = [
  { tekst: 'Onze wanden zijn keurig gestuukt, strak en netjes afgewerkt.', naam: 'Ilja', plaats: 'Ossendrecht', datum: 'november 2026' },
  { tekst: 'Het hele huis laten stucen en het ziet er weer top uit!!!', naam: 'Nicky', plaats: 'Woensdrecht', datum: 'september 2026' },
  { tekst: 'Al het werk netjes uitgevoerd zoals besproken.', naam: 'Erik', plaats: 'Bergen op Zoom', datum: 'oktober 2026' },
  { tekst: 'Alleen maar positief, zeer goed stucwerk.', naam: 'Patrick', plaats: 'Roosendaal', datum: 'september 2026' },
];

// Wat klanten in de reviews steeds noemen (samenvatting uit het dagbestand).
export const genoemd = [
  'Netjes en schoon gewerkt, de werkplek schoon achtergelaten',
  'Snelle en duidelijke communicatie',
  'Strak stucwerk en vakmanschap',
  'Afspraken nagekomen en op tijd klaar',
];

// Sfeerbeelden van Unsplash. Nooit als eigen werk van Van Kempen presenteren.
const u = (id: string, w: number) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;
export const foto = {
  hero: (w: number) => u('photo-1625585598750-3535fe40efb3', w),
  pleister: (w: number) => u('photo-1604147706283-d7119b5b822c', w),
  beton: (w: number) => u('photo-1617713965103-9fda56c89fad', w),
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
