// Feiten van ganzengors.nl (home, over ons, week/theatermenu en kaart, kookcursussen, wijncursus SDEN-2 en SDEN-3,
// DelVino wijnclub, afhaal, nieuws, adres en contact, routebeschrijving) en het Google-profiel (4,5 uit 5, 116 reviews).
// Naamspelling: de bron schrijft Kleyburg en Kleijburg; hier consequent Kleyburg.
export const site = {
  naam: "Restaurant 't Ganzengors",
  kort: "'t Ganzengors",
  straat: 'Oostkade 4',
  postcode: '3201 AM',
  plaats: 'Spijkenisse',
  tel: '0181 612 578',
  telHref: 'tel:+31181612578',
  mail: 'info@ganzengors.nl',
  maps: 'https://www.google.com/maps/search/?api=1&query=Restaurant+Ganzengors+Oostkade+4+Spijkenisse',
  google: { score: '4,5', aantal: 116 },
  themeColor: '#161313',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

export const delvino = {
  naam: 'DelVino, delicatessen en wijn',
  straat: 'Kaaistraat 1',
  postcode: '3201',
  plaats: 'Spijkenisse',
  tel: '0181 610 723',
  telHref: 'tel:+31181610723',
  mail: 'info@delvino.eu',
  web: 'http://www.delvino.eu/',
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

// dag = JavaScript getDay() (0 = zondag)
export const openingstijden = [
  { dag: 1, naam: 'Maandag', tijd: 'Gesloten', lunch: '', diner: '', noot: 'open in overleg voor groepen' },
  { dag: 2, naam: 'Dinsdag', tijd: 'Gesloten', lunch: '', diner: '', noot: 'open in overleg voor groepen' },
  { dag: 3, naam: 'Woensdag', tijd: 'Diner vanaf 17.30', lunch: '', diner: '17.30' },
  { dag: 4, naam: 'Donderdag', tijd: 'Lunch vanaf 12.00, diner vanaf 17.30', lunch: '12.00', diner: '17.30' },
  { dag: 5, naam: 'Vrijdag', tijd: 'Lunch vanaf 12.00, diner vanaf 17.30', lunch: '12.00', diner: '17.30' },
  { dag: 6, naam: 'Zaterdag', tijd: 'Lunch vanaf 12.00, diner vanaf 17.30', lunch: '12.00', diner: '17.30' },
  { dag: 0, naam: 'Zondag', tijd: 'Diner vanaf 17.30', lunch: '', diner: '17.30' },
];

export const weekmenu = {
  periode: '23 t/m 26 september',
  gangen: [
    'Huisgemaakte reeham, salade van witlof, sinaasappel, kappertjes',
    'Zeeduivelfilet, stamppotje van sugar snaps, jus van rivierkreeft',
    'Dessert van rood fruit met sorbetijs',
  ],
  prijs: '€ 42,50',
};

export const kaart = [
  {
    titel: 'Voorgerechten',
    items: [
      ['Krokante focaccia', 'tartaar van tomaat, mozzarella, olijven', '€ 20,50'],
      ['Krokante sushi', 'gebrande runderlende, gember, teriyaki, mango', '€ 24,50'],
      ['Dungesneden runderhaas', 'linzen, truffeldressing, gamba', '€ 26,50'],
      ['Getoaste brioche', 'gerookte paling, ansjovis, eendenlever, tomaat', '€ 27,50'],
      ['Tartaar van langoustine', 'limoen, gekarameliseerde sjalot, avocado', '€ 29,50'],
      ['Kreeftensoep', 'rivierkreeft, crème fraîche', '€ 15,95'],
    ],
  },
  {
    titel: 'Hoofdgerechten',
    items: [
      ['Piepkuiken', 'salieboter, garnituur bonne femme, truffeljus', '€ 27,50'],
      ['Kabeljauw', 'gestoofde prei, ragout van bospaddenstoelen', '€ 29,50'],
      ["Grote gamba's", 'kreeftenjus, peultjes, dikke friet', '€ 37,50'],
      ['Ossenhaas', 'krokante aardappel met sjalot', '€ 39,50'],
      ['Kalfszwezerik', 'aardappel met citroen, tuinboontjes, rodewijnjus', '€ 39,50'],
    ],
  },
  {
    titel: 'Nagerechten',
    items: [
      ['Hangop', 'yoghurtijs, advocaat, krokante walnoten', '€ 11,50'],
      ['Rood fruit', 'sabayon van marsala, vanille-ijs', '€ 12,50'],
      ['Dessert van framboos', 'witte chocolade, sorbet van framboos', '€ 13,50'],
      ['Assortiment kaas', 'Rinze appelstroop met pijnboompitjes', '€ 16,50'],
    ],
  },
] as const;

export const agenda = [
  { dag: '14', maand: 'nov', wanneer: 'Zaterdag 14 november', titel: 'Grote wijnproeverij: zwoele winterwijnen', tekst: 'In de bar staan ongeveer 45 tot 50 zwoele winterwijnen open om te proeven. De proeverij is doorlopend.' },
  { dag: '11', maand: 'dec', wanneer: 'Vrijdag 11 december', titel: 'Truffeldiner', tekst: 'Een diner rond truffel, met onder meer een terrine van gerookte eend, eendenlever en truffel, en een krachtige gevogeltebouillon.' },
  { dag: '24', maand: 'dec', wanneer: '24, 25 en 26 december', titel: 'Kerstdiner', tekst: 'Op alle drie de kerstdagen serveren we een kerstdiner in het restaurant.' },
];

export const najaarsreeks = [
  { onderwerp: 'Zomerse gerechten', g1: '23 aug', g2: '16 aug' },
  { onderwerp: 'Europees / Aziatisch', g1: '20 sept', g2: '30 aug' },
  { onderwerp: 'Gevogelte met schaaldieren', g1: '18 okt', g2: '25 okt' },
  { onderwerp: 'Wildgerechten', g1: '15 nov', g2: '22 nov' },
  { onderwerp: 'Kerstgerechten', g1: '6 dec', g2: '13 dec' },
];

export const eenmalig = [
  { datum: '13 sept', onderwerp: 'Italiaanse keuken', prijs: '€ 74,50', vol: true },
  { datum: '4 okt', onderwerp: 'Spaanse keuken', prijs: '€ 74,50', vol: false },
  { datum: '11 okt', onderwerp: 'Luxe gerechten met wild en truffel', prijs: '€ 89,50', vol: false },
  { datum: '1 nov', onderwerp: 'Verfijnde amusegerechtjes voor de feestdagen', prijs: '€ 89,50', vol: true },
  { datum: '8 nov', onderwerp: 'Kerstgerechten', prijs: '€ 89,50', vol: true },
  { datum: '29 nov', onderwerp: 'Kerstgerechten', prijs: '€ 89,50', vol: false },
  { datum: '7 feb 2027', onderwerp: 'Kleine gerechten met het ibericovarken', prijs: '€ 74,50', vol: false },
  { datum: '7 mrt 2027', onderwerp: 'Mooie kleine voorjaarsgerechten', prijs: '€ 74,50', vol: false },
];

export const wijncursusData = [
  'Woensdag 20 januari 2027',
  'Woensdag 17 februari 2027',
  'Woensdag 17 maart 2027',
  'Woensdag 14 april 2027',
  'Woensdag 12 mei 2027',
];
