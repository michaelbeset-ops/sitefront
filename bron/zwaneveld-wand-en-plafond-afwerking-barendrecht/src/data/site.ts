// Alle feiten komen uit het dagbestand van 28-11-2026 (lead zwaneveld-wand-en-plafond-afwerking-barendrecht), met als
// bronnen de eigen site stucadoorsbedrijfzwaneveld.com (naam, diensten, telefoon, mail, "Mijn naam is Rodney"),
// stukadoorgids.nl (KvK, oprichting, adres, reviews, Top Score 2026) en stucmanager.nl (werkgebied, plafonds,
// garantie, tijden, review over de hal). Prijzen zijn niet gevonden en staan er daarom niet op.
export const site = {
  naam: 'R. Zwaneveld Wand & Plafond afwerking',
  eigenaar: 'Rodney Zwaneveld',
  voornaam: 'Rodney',
  straat: 'Hulstwede 10',
  postcode: '2993 GL',
  plaats: 'Barendrecht',
  mobiel: '06 51121087',
  mobielHref: 'tel:+31651121087',
  mail: 'rzwaneveld@outlook.com',
  kvk: '24303396',
  opgericht: 'april 2000',
  score: '9,6',
  aantalReviews: 24,
  reviewsBron: 'https://stukadoorgids.nl/barendrecht/r-zwaneveld-wand-en-plafond-afwerking/',
  route: 'https://www.google.com/maps/search/?api=1&query=Hulstwede+10+2993+GL+Barendrecht',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// stucmanager.nl noemt 8.30 tot 19.00 uur. stukadoorgids.nl zegt 17.00 uur, maar dat lijkt de standaardinvulling van de gids.
export const tijden = [
  { dag: 'Maandag t/m vrijdag', tijd: '8.30 tot 19.00 uur' },
  { dag: 'Zaterdag en zondag', tijd: 'Gesloten' },
];

// De diensten zoals zijn eigen site ze noemt, plus plafonds (stucmanager.nl). De uitleg is algemeen en waar voor elke
// stukadoor, er staan geen technieken of beloftes in die niet in de bronnen staan.
export const diensten = [
  { naam: 'Stucwerk binnen', uitleg: 'Een gladde pleisterlaag op de muren, zodat ze strak en vlak worden.' },
  { naam: 'Plafonds', uitleg: 'Stucwerk of spuitwerk op het plafond, ook in hoge ruimtes.' },
  { naam: 'Spackspuitwerk', uitleg: 'Een fijne structuurlaag die met de machine op wand of plafond wordt gespoten.' },
  { naam: 'Latex spuiten', uitleg: 'Latex gespoten in plaats van gerold. Egaal, ook op grote vlakken.' },
  { naam: 'Sauswerk', uitleg: 'De laatste laag kleur op muren en plafonds.' },
];

// Wat reviewers op stukadoorgids.nl beschrijven, in eigen woorden samengevat (geen citaat). Achternaam afgekort.
export const ook = [
  { titel: 'Daarna ook schilderen', tekst: 'Eerst alle muren gestuukt, daarna ook geschilderd.', wie: 'Marja van D.', datum: '25 februari 2025' },
  { titel: 'Keukenmuren klaar voor de keuken', tekst: 'De muren klaargemaakt, zodat de keuken geplaatst kon worden.', wie: 'Henk W.', datum: '12 oktober 2025' },
];

// Letterlijke citaten uit de reviews. Achternaam afgekort tot een letter.
export const reviews = [
  { tekst: 'Rodney is een man met gouden handen.', wie: 'Saskia O.', datum: '3 juni 2025', bron: 'stukadoorgids.nl' },
  { tekst: 'Alles is strak, glad, perfect afgewerkt en opgeruimd.', wie: 'Ilse B.', datum: '', bron: 'stucmanager.nl' },
  { tekst: 'Werken heel netjes.', wie: 'Henk W.', datum: '12 oktober 2025', bron: 'stukadoorgids.nl' },
  { tekst: 'Een perfectionist.', wie: 'Jasper H., voor wiens familie Rodney al jaren werkt', datum: '22 september 2025', bron: 'stukadoorgids.nl' },
];

// Sfeerbeelden van Unsplash. Nooit als eigen werk van Rodney presenteren.
const u = (id: string, w: number) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;
export const foto = {
  // "A long hallway with white walls and a white staircase"
  hero: (w: number) => u('photo-1728209120161-98ba323862ea', w),
  // "white decorative ceiling"
  plafond: (w: number) => u('photo-1573233216827-cdc6a3dd01fa', w),
  // "A minimalist staircase with white concrete steps leading to a landing with a vase"
  trap: (w: number) => u('photo-1601993957728-1e56ab70c5a8', w),
  // "A kitchen under renovation with white cabinets covered in plastic and brown paper"
  afgeplakt: (w: number) => u('photo-1618832515490-e181c4794a45', w),
};
export const srcset = (f: (w: number) => string, ws: number[]) => ws.map((w) => `${f(w)} ${w}w`).join(', ');

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
