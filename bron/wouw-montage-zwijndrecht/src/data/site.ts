// Feiten (bekeken 7 oktober 2026), bronnen in bron/:
// - wouwmontage.nl (home, diensten, contact): Contactpersoon Paul van de Wouw, Marsmanstraat 2, 3333VC Zwijndrecht,
//   06 1611 9996, pvdwmontage@hotmail.com, KVK 51555220. "Wouw Montage richt zich helemaal op het leveren, onderhouden en
//   monteren van garagedeuren, industriële deuren en zonwering." "Wij zijn officiële dealer van Verano®".
//   "Wij werken voor particulieren en bedrijven in Zeeland, Noord-Brabant, Utrecht en Zuid-Holland."
// - wouwzonwering.nl (home, aanbod, fotoalbum, referenties, contact): productcategorieën en -teksten, werkgebied met plaatsen,
//   referenties (letterlijk), projectfoto's (fotoalbum).
// - Google "Wouwgaragedeuren en Wouwzonwering.": 4,9 uit 57, ma-vr 08:00-18:00, za-zo gesloten; snippet over WhatsApp.
//   Foto's van het profiel (bus voor vijf garagedeuren, deuren, rolluik).
// - Trustoo-profiel: zelfde tijden; Google-review Rita Teeboom 18 sep. 2025.
// - Instagram @wouwmontage: "Uw totale bedrijf voor leveringen en montage van garage/industriedeuren en alle soorten zonweringen."
export const site = {
  naam: 'Wouw Montage',
  eigenaar: 'Paul van de Wouw',
  straat: 'Marsmanstraat 2',
  postcode: '3333 VC',
  plaats: 'Zwijndrecht',
  tel: '06 1611 9996',
  telHref: 'tel:+31616119996',
  wa: 'https://wa.me/31616119996',
  mail: 'pvdwmontage@hotmail.com',
  kvk: '51555220',
  instagram: 'https://www.instagram.com/wouwmontage/',
  facebook: 'https://www.facebook.com/wouwmontage/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Wouwgaragedeuren+en+Wouwzonwering+Marsmanstraat+2+Zwijndrecht',
  google: { score: '4,9', aantal: 57 },
  themeColor: '#121a2c',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Werkgebied, letterlijk van de contactpagina van wouwzonwering.nl.
export const plaatsen = ['Zwijndrecht', 'Dordrecht', 'Papendrecht', 'Sliedrecht', 'Rotterdam', 'Den Haag', 'Nieuwegein', 'Gorinchem', 'Breda', 'Bergen op Zoom', 'Goes'];

// Zoals op de zijkant van de bus (Google-foto).
export const bus = ['Garagedeuren', 'Industriedeuren', 'Zonneschermen', 'Rolluiken', 'Screens', "Veranda's"];

// Aanbod van wouwzonwering.nl (categorie > items), teksten letterlijk ingekort.
export const zonwering = [
  { id: 'zonneschermen', titel: 'Zonneschermen', items: 'Knikarmscherm, uitvalscherm, losse zonweringsdoeken', foto: 'knikarm', product: 'een knikarmscherm' },
  { id: 'screens', titel: 'Screens', items: 'Ritsscreen, standaard screen, screen solar met afstandsbediening', foto: 'screens', product: 'screens' },
  { id: 'rolluiken', titel: 'Rolluiken', items: 'Handbediend of elektrisch, rolluik solar met afstandsbediening', foto: 'rolluiken', product: 'rolluiken' },
  { id: 'markiezen', titel: 'Markiezen', items: 'Markies los, markies met ombouw', foto: '', product: 'een markies' },
  { id: 'overkappingen', titel: 'Overkappingen', items: 'Veranda, veranda glas', foto: 'veranda', product: 'een veranda of overkapping' },
  { id: 'binnen', titel: 'Binnenzonwering', items: 'Jaloezieën, plissés, rolgordijnen, vouwgordijnen', foto: '', product: 'binnenzonwering' },
  { id: 'diversen', titel: 'Diversen', items: 'Losse motoren, windschermen', foto: '', product: '' },
  { id: 'onderdelen', titel: 'Onderdelen', items: 'Onderdelen voor alle merken en soorten zonwering', foto: '', product: '' },
];

// Letterlijk. Bron: Google (via Trustoo "Reviews van andere bronnen") of de referentiepagina op wouwzonwering.nl.
export const reviews = {
  rita: { naam: 'Rita T.', bron: 'Google review, september 2025', tekst: 'Onze rolluiken zijn van nieuwe Io Somfy motoren voorzien. Er waren problemen met de koppeling naar de connectivity box. Paul heeft dit keurig opgelost en kunnen we nu onze rolluiken met Apple Woning besturen. We zijn er heel blij mee.' },
  aart: { naam: 'Aart S.', bron: 'Referentie op wouwzonwering.nl', tekst: 'Wat ben ik blij met die prachtige elektrische garage deur. En alles netjes afgetimmerd. De oude garage muur eruit gesloopt, en netjes afgevoerd en opgeruimd. Alles keurig volgens gemaakte afspraken, en op tijd.' },
  jorrit: { naam: 'Jorrit B.', bron: 'Referentie op wouwzonwering.nl', tekst: 'Keurig alles uitgelegd, keurig op tijd en klantvriendelijk. Voor onderhoud-/reparatie of nieuwe klussen ga ik zeker Dhr de Wouw bellen.' },
  cock: { naam: 'Cock v. E.', bron: 'Referentie op wouwzonwering.nl', tekst: 'Samen met zijn monteur heeft van der Wouw het scherm netjes gemonteerd en de stroomkabel door één van de geleiders strak aangelegd naar de buitenlamp. De boel afgesteld en even uitgelegd, een vakman met topservice!' },
  cockMerken: { naam: 'Cock v. E.', bron: 'Referentie op wouwzonwering.nl', tekst: 'Paul heeft wel die instelling; aardige kerel en doet álle merken.' },
  winnie: { naam: 'Winnie D.', bron: 'Referentie op wouwzonwering.nl', tekst: 'Hij adviseerde een nieuw motortje, ondanks de schaarste van vele onderdelen. … Na een paar wkn liep t zonnescherm weer als een zonnetje' },
  angela: { naam: 'Angela P.', bron: 'Referentie op wouwzonwering.nl', tekst: 'Veel keus, goed advies, maar vooral goed gemonteerd! Ook binnen is het heel netjes afgewerkt.' },
  charlotte: { naam: 'Charlotte A.', bron: 'Referentie op wouwzonwering.nl', tekst: 'Echte vakman! … Het nieuwe rolluik is opgehangen, waarbij er vooral ook aandacht was voor de veiligheid.' },
  niels: { naam: 'Niels v.d. B.', bron: 'Referentie op wouwzonwering.nl', tekst: 'Mocht er iets zijn mogen we hem altijd even bellen voor nazorg. Dit geeft vertrouwen.' },
  ellen: { naam: 'Ellen v. H.', bron: 'Referentie op wouwzonwering.nl', tekst: 'Bij ons heeft Paul een zonnenscherm en 5 screens gemonteerd. Goede kwaliteit materialen. Paul is een top vakman. En de keuze is reuze!' },
  whatsapp: { naam: 'Google review', bron: 'uit het reviewoverzicht op Google', tekst: 'Antwoord snel via whatsapp en levert goed werk af voor een prima prijs.' },
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Paul, ik heb een vraag.');
