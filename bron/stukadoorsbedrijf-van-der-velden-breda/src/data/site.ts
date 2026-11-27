// Alle feiten komen uit het dagbestand van 27-11-2026 (lead stukadoorsbedrijf-van-der-velden-breda), met als
// bronnen de eigen site stukadoorsbedrijfvandervelden.nl (home, over ons, stucwerk, schilderwerk, contact) en
// stukadoorgids.nl (oprichting, openingstijden, Google-reviews). Prijzen en KvK zijn niet gevonden en staan er daarom niet op.
export const site = {
  naam: 'Stukadoorsbedrijf P. van der Velden',
  kort: 'Van der Velden',
  eigenaar: 'Pascal van der Velden',
  voornaam: 'Pascal',
  straat: 'Spoorbaanstraat 16',
  postcode: '4814 AS',
  plaats: 'Breda',
  mobiel: '06-52446043',
  mobielHref: 'tel:+31652446043',
  mail: 'info@stukadoorsbedrijfvandervelden.nl',
  opgericht: '18 oktober 2004',
  score: '9,8',
  aantalReviews: 28,
  reviewsBron: 'https://stukadoorgids.nl/breda/stukadoorsbedrijf-p-v-d-velden/',
  route: 'https://www.google.com/maps/search/?api=1&query=Spoorbaanstraat+16+4814+AS+Breda',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

export const openingstijden = [
  { dag: 'Maandag t/m vrijdag', tijd: '8.30 tot 17.00 uur' },
  { dag: 'Zaterdag en zondag', tijd: 'Gesloten' },
];

// De diensten zoals de eigen site ze noemt, in groepen. De korte uitleg is algemeen en waar voor elk stukadoorsbedrijf,
// er staan geen technieken of beloftes in die niet in de bronnen staan.
export const groepen = [
  {
    titel: 'Wanden en plafonds',
    diensten: [
      { naam: 'Pleisterwerk', uitleg: 'Een gladde, strakke laag op wanden en plafonds.' },
      { naam: 'Schuurwerk', uitleg: 'Een afwerking met een fijne korrel in de pleister.' },
      { naam: 'Machinaal stucwerk', uitleg: 'Spackspuitwerk, gespoten met de machine. Handig voor grote plafonds.' },
      { naam: 'Structuurpleisters', uitleg: 'Pleister met een zichtbare structuur in de muur.' },
    ],
  },
  {
    titel: 'Oude panden',
    diensten: [
      { naam: 'Ornamenten en sierlijsten', uitleg: 'Aanbrengen van lijsten en ornamenten aan wand en plafond.' },
      { naam: 'Restauratie', uitleg: 'Herstel van oud of beschadigd stucwerk.' },
    ],
  },
  {
    titel: 'Buiten en verder',
    diensten: [
      { naam: 'Buitengevelstucwerk', uitleg: 'Stucwerk op de gevel, aan de buitenkant van het huis.' },
      { naam: 'Schilderwerk', uitleg: 'Pascal schildert ook. Na het stucwerk hoeft u niemand anders te zoeken.' },
    ],
  },
];

// Letterlijk van Google, via stukadoorgids.nl. Achternaam afgekort tot een letter.
export const reviews = [
  { tekst: 'Na een dramatische verbouwing met een prutsaannemer heeft Pascal ons in nood geholpen.', naam: 'Romy V.', datum: '8 december 2025' },
  { tekst: 'Knap hoe Pascal van een bouwval weer een paleisje weet te maken!', naam: 'Bo van de L.', datum: '19 november 2025' },
  { tekst: "Pascal heeft mijn badkamers en wc's keurig gestuct.", naam: 'Charlotte P.', datum: '3 januari 2026' },
  { tekst: 'Prima stucwerk geleverd op onze zolder.', naam: 'Martin van T.', datum: '2 december 2025' },
  { tekst: 'Pascal, fijne vent.', naam: 'Maarten B.', datum: '17 september 2025' },
];

// Sfeerbeelden van Unsplash. Nooit als eigen werk van Van der Velden presenteren.
const u = (id: string, w: number) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;
export const foto = {
  // "Old ceiling made by hand", plafond met ornamenten (Francisco de Frias)
  hero: (w: number) => u('photo-1711737876094-379f1941edd9', w),
  // "Interior room undergoing renovation with exposed walls and window"
  bouwval: (w: number) => u('photo-1768321902290-54497eeb9cf6', w),
  // "Ornate circular ceiling with geometric patterns" (Emilipothèse)
  ornament: (w: number) => u('photo-1758741596126-6440719b660d', w),
  // "white wooden shelf near white wall"
  strak: (w: number) => u('photo-1604159848821-104723525eb4', w),
};
export const srcset = (f: (w: number) => string, ws: number[]) => ws.map((w) => `${f(w)} ${w}w`).join(', ');

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
