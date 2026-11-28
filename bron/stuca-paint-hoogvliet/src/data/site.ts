// Alle feiten komen uit het dagbestand van 28-11-2026 (lead stuca-paint-hoogvliet), met als bronnen stukadoorgids.nl
// (adres, telefoon, reviews, score, openingstijden), de Marktplaats-advertentie van 3 november 2026 (diensten, garantie),
// kosten-stukadoor.nl (mail) en northdata (KvK en inschrijving). Prijzen zijn niet gevonden en staan er daarom niet op.
export const site = {
  naam: 'Stuca-Paint',
  plaats: 'Hoogvliet',
  straat: 'Zalmsteek 37',
  postcode: '3192 MC',
  stad: 'Hoogvliet Rotterdam',
  mobiel: '06 25 37 59 73',
  mobielHref: 'tel:+31625375973',
  mail: 'r.stucapaint@chello.nl',
  kvk: '24304351',
  sinds: '17 april 2000',
  score: '9,4',
  aantalReviews: 85,
  reviewsBron: 'https://stukadoorgids.nl/hoogvliet-rotterdam/stuca-paint/',
  route: 'https://www.google.com/maps/search/?api=1&query=Zalmsteek+37+3192+MC+Rotterdam',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

export const openingstijden = [
  { dag: 'Maandag t/m vrijdag', tijd: '8.30 tot 17.00 uur' },
  { dag: 'Zaterdag en zondag', tijd: 'Gesloten' },
];

// De diensten zoals de Marktplaats-advertentie en de reviews ze noemen. De uitleg is algemeen en waar voor elk
// stukadoorsbedrijf, er staan geen technieken of beloftes in die niet in de bronnen staan.
export const diensten = [
  { naam: 'Glad stucwerk', extra: 'behangklaar of sausklaar', uitleg: 'Behangklaar is glad genoeg om te behangen. Sausklaar is nog strakker, daar kan de verf direct op.' },
  { naam: 'Sauswerk', extra: 'muren en plafonds', uitleg: 'Na het stucen ook de saus erop. Dan hoeft u daarna niemand anders te zoeken.' },
  { naam: 'Spack- en latexspuiten', extra: 'met de machine', uitleg: 'Gespoten afwerking, handig voor grote plafonds en wanden.' },
  { naam: 'Spachtelputz', extra: 'sierpleister', uitleg: 'Een pleister met korrel en zichtbare structuur.' },
  { naam: 'Schuurwerk', extra: 'fijne korrel', uitleg: 'Een afwerking met een fijne korrel in de pleister.' },
  { naam: 'Pleisterwerk', extra: 'wanden en plafonds', uitleg: 'Een egale laag op muren en plafonds, ook in de keuken.' },
  { naam: 'Ornamenten en lijsten', extra: 'aan wand en plafond', uitleg: 'Lijsten en ornamenten aanbrengen.' },
];

// Letterlijk van Google, via stukadoorgids.nl. Achternaam afgekort tot een letter. "leverd" is als "levert" geschreven.
export const reviews = [
  { tekst: 'Stuca-paint heeft voor ons de keuken gestuced en wij zijn zeer tevreden!', naam: 'Cyvan V.', datum: '24 april 2025' },
  { tekst: 'Ruud komt afspraken na en levert goed werk af.', naam: 'Juri van B.', datum: '29 maart 2025' },
  { tekst: 'Zeer tevreden met de mannen van Stuca-paint!', naam: 'Guillaume P.', datum: '5 maart 2025' },
];

// Wat klanten in hun eigen woorden noemen (samengevat uit reviews op stukadoorgids.nl, geen letterlijke citaten).
export const genoemd = [
  { kop: 'Snel langs voor een offerte', tekst: 'Met duidelijke uitleg wat u zelf moet voorbereiden, en concrete prijsafspraken.', wie: 'L. S., 28 maart 2025' },
  { kop: 'Flexibel en op korte termijn', tekst: 'Ruud was snel beschikbaar, zodat de deadline gehaald werd.', wie: 'Cyvan V., 24 april 2025' },
];

// Sfeerbeelden van Unsplash. Nooit als eigen werk van Stuca-Paint presenteren.
const u = (id: string, w: number) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;
export const foto = {
  // "Hands applying plaster to a wall with trowels"
  hero: (w: number) => u('photo-1768839725085-829e6ac7ac26', w),
  // "A kitchen under renovation with white cabinets covered in plastic and brown paper"
  bewoond: (w: number) => u('photo-1618832515490-e181c4794a45', w),
  // "A paint roller with a red handle in a tray of white paint"
  saus: (w: number) => u('photo-1599619585752-c3edb42a414c', w),
  // "A smooth grey concrete wall with subtle trowel marks and natural texture"
  muur: (w: number) => u('photo-1708894462826-ba3fa93b41b7', w),
};
export const srcset = (f: (w: number) => string, ws: number[]) => ws.map((w) => `${f(w)} ${w}w`).join(', ');

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
