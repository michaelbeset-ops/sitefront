// Feiten: rijschoolxxl.nl (alle pagina's opgehaald 3 oktober 2026; tarieven bijgewerkt aug. 2026), Google-bedrijfsprofiel
// "Rijschool Spijkenisse XXL" (bekeken 3 oktober 2026; 4,9 uit 257 reviews, openingstijden). Daltonweg 10, 3208 KV Spijkenisse.
// 06 26 80 69 14, info@rijschoolxxl.nl, KvK 96369205, CBR-registratienummer 6569U5. Bronbestanden: bron/.
export const site = {
  naam: 'Rijschool Spijkenisse XXL',
  kort: 'Rijschool XXL',
  straat: 'Daltonweg 10',
  postcode: '3208 KV',
  plaats: 'Spijkenisse',
  tel: '06 26 80 69 14',
  telHref: 'tel:+31626806914',
  wa: 'https://wa.me/31626806914',
  mail: 'info@rijschoolxxl.nl',
  kvk: '96369205',
  cbr: '6569U5',
  facebook: 'https://www.facebook.com/Rijschool-XXL-127762867873629/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Rijschool+Spijkenisse+XXL+Daltonweg+10+Spijkenisse',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Rijschool+Spijkenisse+XXL',
  machtigen: 'https://mijn.cbr.nl',
  google: { score: '4,9', aantal: 257 },
  themeColor: '#121315',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Google-openingstijden. dag: 0 = zondag (zoals Date.getDay). open/dicht in minuten voor de live status.
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '08.00', dicht: '21.00', o: 480, d: 1260 },
  { dag: 2, naam: 'Dinsdag', open: '08.00', dicht: '21.00', o: 480, d: 1260 },
  { dag: 3, naam: 'Woensdag', open: '08.00', dicht: '21.00', o: 480, d: 1260 },
  { dag: 4, naam: 'Donderdag', open: '08.00', dicht: '21.00', o: 480, d: 1260 },
  { dag: 5, naam: 'Vrijdag', open: '08.00', dicht: '20.00', o: 480, d: 1200 },
  { dag: 6, naam: 'Zaterdag', open: '08.00', dicht: '13.00', o: 480, d: 780 },
  { dag: 0, naam: 'Zondag', open: '08.00', dicht: '13.00', o: 480, d: 780 },
];

// Tarieven letterlijk zoals op rijschoolxxl.nl/tarieven (stand 3 oktober 2026). Alle pakketten exclusief CBR-praktijkexamen.
export const pakketten = {
  auto: [
    { naam: 'Pakket A', lessen: 20, duur: '50 minuten', normaal: 980, nu: 970 },
    { naam: 'Pakket B', lessen: 28, duur: '50 minuten', normaal: 1370, nu: 1345 },
    { naam: 'Pakket C', lessen: 38, duur: '50 minuten', normaal: 1860, nu: 1800 },
    { naam: 'Pakket D', lessen: 40, duur: '50 minuten', normaal: 1960, nu: 1890 },
  ],
  motor: [
    { naam: 'Pakket A', lessen: 10, duur: '100 minuten', normaal: 980, nu: 965 },
    { naam: 'Pakket B', lessen: 15, duur: '100 minuten', normaal: 1490, nu: 1420 },
    { naam: 'Pakket C', lessen: 20, duur: '100 minuten', normaal: 1950, nu: 1890 },
  ],
  brom: [
    { naam: 'Totaalpakket', wat: '4 uur praktijkles + praktijkexamen + gebruik scooter + helm', normaal: 500, nu: 450 },
    { naam: 'Herexamen', wat: 'Herexamen + 2,5 uur rijles', normaal: 360, nu: 340 },
    { naam: 'Spoedaanvraag', wat: 'Binnen 3 weken', normaal: 0, nu: 500 },
  ],
};

export const los = {
  auto: [
    ['Intakeles van 100 minuten', 90], ['Les van 50 minuten', 49], ['Tussentijdse toets (TTT)', 245],
    ['Praktijkexamen CBR', 315], ['BNOR-praktijkexamen', 365], ['Faalangstexamen', 365],
  ],
  motor: [
    ['Intakeles van 100 minuten', 90], ['Les van 50 minuten', 49],
    ['CBR-examen voertuigbeheersing (AVB)', 215], ['CBR-examen verkeersdeelneming (AVD)', 325],
  ],
  brom: [['Bromfietsrijles van 60 minuten', 55]],
} as Record<string, [string, number][]>;

// Instructeurs zoals op hun pagina "Over Rijschool Spijkenisse XXL".
export const team = [
  { naam: 'Tony', rol: 'Motor- en bromfietsinstructeur, oprichter' },
  { naam: 'Melissa', rol: 'Autorijinstructrice' },
  { naam: 'Kevin', rol: 'Autorijinstructeur' },
  { naam: 'Cheyenne', rol: 'Autorijinstructrice' },
];

// Lesgebieden uit de footer van rijschoolxxl.nl.
export const gebieden = ['Spijkenisse', 'Nissewaard', 'Rotterdam', 'Hoogvliet', 'Hellevoetsluis', 'Rozenburg', 'Brielle', 'Geervliet', 'Zuidland', 'Abbenbroek', 'Pernis', 'Poortugaal', 'Heenvliet', 'Rhoon', 'Hekelingen', 'Ridderkerk', 'Barendrecht'];

// Letterlijk van Google (stand 3 oktober 2026), ingekort met "…". Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Fiona V.', wat: 'Auto', wanneer: '5 maanden geleden', tekst: 'Melissa is een geweldige instructrice en heeft een goed gevoel voor humor. Deze rijschool focust echt op wat belangrijk is voor de leerlingen en doet het echt goed. Begin februari dit jaar (2026) mijn rijbewijs gehaald en super blij.' },
  { naam: 'Jeroen Z.', wat: 'Motor', wanneer: '9 maanden geleden', tekst: 'Superfijne en goede rijschool. AVB en AVD in 1x gehaald. Je kan zien dat Tony van zijn hobby zijn werk heeft gemaakt! Wat een goede en enthousiaste instructeur.' },
  { naam: 'Sebastiaan T.', wat: 'Bromfiets', wanneer: '5 maanden geleden', tekst: 'Vandaag heeft onze zoon Stijn examen gedaan voor zijn brommer. Wat een goede rijschool. Super begeleiding en een thuis gevoel voor jongeren! Tony is iemand die met passie en deskundigheid zijn vak uitoefent.' },
  { naam: 'Mitchell M.', wat: 'Motor', wanneer: '6 maanden geleden', tekst: 'Met veel ervaring, geduld en nog meer humor weet Tony je de fijne kneepjes van het motorrijden aan te leren. Vanaf de proefles tot aan mijn laatste meters met Tony heb ik gelachen en genoten van het hele proces.' },
  { naam: 'Anne v.', wat: 'Scooter', wanneer: 'een jaar geleden', tekst: 'Onze dochter heeft met veel plezier bij Tony het traject gevolgd voor haar scooter rijbewijs! … Ze heeft enorme examenvrees, maar Tony stelde haar op haar gemak en bleef zo geduldig met haar én met positief resultaat!!!! Ze is in 1x geslaagd.' },
  { naam: 'John', wat: 'Motor', wanneer: 'een maand geleden', tekst: 'Motorrijbewijs in 1 keer gehaald dankzij hele goede begeleiding, geduld en hele leuke lessen … Tony, super bedankt voor je geduld, expertise en humor …' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waIntake = waMet('Hoi Rijschool XXL, ik wil graag een intakeles plannen.');
export const euro = (n: number) => '€ ' + n.toLocaleString('nl-NL');
