// Alle feiten komen uit het dagbestand van 28-11-2026 (lead jurgen-krijnen-stucadoorswerken-tilburg), met als
// bronnen de eigen site jkstucadoorswerken.nl (home, soorten stucwerk, over) en stukadoorgids.nl (openingstijden,
// eenmanszaak, Google-score, Top Score 2026, reviews). Werkgebied, prijzen en KvK zijn niet gevonden en staan er niet op.
export const site = {
  naam: 'Jurgen Krijnen Stucadoorswerken',
  kort: 'JK Stucadoorswerken',
  eigenaar: 'Jurgen Krijnen',
  voornaam: 'Jurgen',
  straat: 'Herwijnenstraat 14',
  postcode: '5045 GS',
  plaats: 'Tilburg',
  mobiel: '06 14692490',
  mobielHref: 'tel:+31614692490',
  mail: 'jurgenkrijnen@home.nl',
  score: '10',
  aantalReviews: 22,
  reviewsBron: 'https://stukadoorgids.nl/tilburg/stucadoorsbedrijf-j-krijnen/',
  route: 'https://www.google.com/maps/search/?api=1&query=Herwijnenstraat+14+5045+GS+Tilburg',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

export const openingstijden = [
  { dag: 'Maandag t/m vrijdag', tijd: '8.30 tot 17.00 uur' },
  { dag: 'Zaterdag en zondag', tijd: 'Gesloten' },
];

// Waar klanten het over hebben, samengevat uit de Google-reviews op stukadoorgids.nl. Bewust geen letterlijke
// citaten met aanhalingstekens: die staan pas op de echte site na akkoord van de klant.
export const klanten = [
  { naam: 'Mariska W.', datum: '1 december 2025', over: 'Netjes en glad werk.' },
  { naam: 'Rems vd B.', datum: '13 oktober 2025', over: 'Een goed netwerk, en afspraken worden nagekomen.' },
  { naam: 'Tim D.', datum: '13 oktober 2025', over: 'Een goed eerste contact, voor een appartement in nieuwbouw.' },
  { naam: 'Sylvia van H.', datum: '17 september 2025', over: 'Duidelijke communicatie. De keuken is gestuct.' },
  { naam: 'RMH', datum: '17 juni 2025', over: 'De communicatie en het werk.' },
];

// De soorten stucwerk met de uitleg van Jurgen zelf (jkstucadoorswerken.nl/soorten-stucwerk.html), ingekort.
export const soorten = [
  { naam: 'Pleisterwerk', foto: 'glad', uitleg: 'Een gipslaag voor binnen, van 2 tot 20 mm dik, over metselwerk of oud pleisterwerk. Meestal afgewerkt met een gladde laag.' },
  { naam: 'Schuurwerk', foto: 'schuur', uitleg: 'Gips met heel fijn zand, op wand of plafond. Dat geeft een wolkjeslook. Sauzen haalt een deel van de structuur weer weg.' },
  { naam: 'Spachtelputz', foto: 'spachtel', uitleg: 'Sierpleister op kunststofbasis, voor binnen en buiten. Kleurvast, ademend en afwasbaar, in meer dan duizend kleuren. Met de spaan aangebracht.' },
  { naam: 'Granol', foto: 'granol', uitleg: 'Een van de oudste sierpleisters. Voor binnen en buiten, in meer dan duizend kleuren, en over te schilderen met latex.' },
  { naam: 'Raapwerk', foto: 'raap', uitleg: 'Een dikke gipslaag, van 7 mm tot 5 cm, om ruwe muren en plafonds recht te zetten. Ook voor rondingen. Regelt vocht en vertraagt brand.' },
] as const;

// De diensten zoals de eigen site ze noemt.
export const diensten = [
  { naam: 'Plafonds en wanden', uitleg: 'Afwerking van eenvoudig tot traditioneel en bijzonder stucwerk.' },
  { naam: 'Schuurwerk', uitleg: 'Fijne structuur op wand of plafond.' },
  { naam: 'Pleisterwerk en sierpleisterwerk', uitleg: 'Gladde lagen binnen, sierpleister binnen en buiten.' },
  { naam: 'Airless spuiten', uitleg: 'Wanden en plafonds met latex spuiten, na het gladpleisterwerk.' },
  { naam: 'Kooflijsten', uitleg: 'Jurgen maakt kooflijsten aan wand en plafond.' },
  { naam: 'Sierpleisters van SPS en Strikolith', uitleg: 'Jurgen werkt met de sierpleisters van deze twee merken.' },
];

export const werkvelden = ['Nieuwbouw, houtskelet en steen', 'Woningbouw', 'Particulieren', 'Renovatie', 'Verbouw', 'Restauratie'];

// Sfeerbeelden van Unsplash, gekozen op alt-tekst. Nooit als eigen werk van Jurgen presenteren.
const u = (id: string, w: number) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;
export const foto = {
  // "Hands applying plaster to a wall with trowels"
  hero: (w: number) => u('photo-1768839725085-829e6ac7ac26', w),
  // "white painted ceiling"
  plafond: (w: number) => u('photo-1550932372-3080d57e4e74', w),
  // "A plain white textured background"
  glad: (w: number) => u('photo-1776278515675-0e880f952583', w),
  // "A light grey wall with a mottled plaster texture"
  schuur: (w: number) => u('photo-1639430257115-f63af9eab97d', w),
  // "a close up of a white stucco wall"
  spachtel: (w: number) => u('photo-1523878288860-7ad281611901', w),
  // "white textured plaster wall surface"
  granol: (w: number) => u('photo-1533628635777-112b2239b1c7', w),
  // "Rough textured wall with exposed bricks below"
  raap: (w: number) => u('photo-1760073643328-88547b90611a', w),
};
export const srcset = (f: (w: number) => string, ws: number[]) => ws.map((w) => `${f(w)} ${w}w`).join(', ');

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
