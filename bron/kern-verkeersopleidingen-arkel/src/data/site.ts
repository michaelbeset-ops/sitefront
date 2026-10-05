// Feiten: kernverkeersopleidingen.nl (alle pagina's opgehaald 5 oktober 2026, tekst in bron/site-tekst.txt) en het
// Google-bedrijfsprofiel "KERN Verkeersopleidingen" (4,8 uit 20 reviews, Vlietskade 1025 Arkel, 06 19086261, lestijden).
// Eigenaar: Arjan Koppelaar (site: "Neem contact op met Arjan Koppelaar"; Google-review: "Arjan (de eigenaar)").
export const site = {
  naam: 'KERN Verkeersopleidingen',
  kort: 'KERN',
  straat: 'Vlietskade 1025',
  gps: 'Vlietskade 1078',
  postcode: '4241 WE',
  plaats: 'Arkel',
  tel: '06 19 08 62 61',
  telHref: 'tel:+31619086261',
  tel2: '06 55 16 47 83',
  tel2Href: 'tel:+31655164783',
  wa: 'https://wa.me/31619086261',
  mail: 'aanmeldingen@kernverkeersopleidingen.nl',
  mailAdmin: 'administratie@kernverkeersopleidingen.nl',
  kvk: '57272018',
  cbr: '5343N1',
  instagram: 'https://www.instagram.com/kernverkeersopleidingen/',
  facebook: 'https://www.facebook.com/kernverkeersopleidingen/',
  maps: 'https://www.google.com/maps/search/?api=1&query=KERN+Verkeersopleidingen+Vlietskade+1025+Arkel',
  reviews: 'https://www.google.com/maps/search/?api=1&query=KERN+Verkeersopleidingen+Arkel',
  google: { score: '4,8', aantal: 20 },
  themeColor: '#0f1638',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// "Rijles mogelijk" (site, contactpagina) = openingstijden op Google. dag: 0 = zondag. Minuten voor de live status.
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '07.00', dicht: '22.00', van: 420, tot: 1320 },
  { dag: 2, naam: 'Dinsdag', open: '07.00', dicht: '22.00', van: 420, tot: 1320 },
  { dag: 3, naam: 'Woensdag', open: '07.00', dicht: '22.00', van: 420, tot: 1320 },
  { dag: 4, naam: 'Donderdag', open: '07.00', dicht: '22.00', van: 420, tot: 1320 },
  { dag: 5, naam: 'Vrijdag', open: '07.00', dicht: '16.00', van: 420, tot: 960 },
  { dag: 6, naam: 'Zaterdag', open: '07.00', dicht: '13.00', van: 420, tot: 780 },
  { dag: 0, naam: 'Zondag', open: '', dicht: '', van: 0, tot: 0 },
];

// Locaties zoals op hun contactpagina.
export const locaties = [
  { t: 'Motor-oefenterrein', d: 'Bromfiets- en motorrijlessen, AVB-examen', adres: 'Vlietskade 1025 (1078 bij gebruik GPS)', pc: '4241 WE Arkel', maps: 'https://www.google.com/maps/search/?api=1&query=Vlietskade+1025+Arkel' },
  { t: 'Startlocatie aanhanger (BE)', d: 'Aanhangwagenrijlessen', adres: 'Sportlaan 1', pc: '4209 AX Schelluinen', maps: 'https://www.google.com/maps/search/?api=1&query=Sportlaan+1+Schelluinen' },
  { t: 'Kantoor administratie', d: 'Dinsdag en donderdag 09.00 tot 15.00 uur', adres: 'Loodreep 12', pc: '3372 VM Hardinxveld-Giessendam', maps: 'https://www.google.com/maps/search/?api=1&query=Loodreep+12+Hardinxveld-Giessendam' },
];

// Opleidingen per rijbewijs, met prijzen letterlijk van hun prijspagina's ("Prijzen vanaf 01-01-2026, wijzigingen voorbehouden").
// Auto-spoedopleiding staat op hun site als tijdelijk niet beschikbaar ("capaciteitsprobleem") en is daarom weggelaten.
export type Optie = { id: string; t: string; d: string; prijs?: string };
export const rijbewijzen: { id: string; t: string; code: string; dagen: string[]; opties: Optie[] }[] = [
  {
    id: 'auto', t: 'Auto', code: 'Rijbewijs B', dagen: ['Ma', 'Di', 'Wo', 'Do', 'Vr'],
    opties: [
      { id: 'start', t: 'Startpakket met RIS-boek', d: '5 uur autorijles en het RIS-boek', prijs: '€ 372,-' },
      { id: '2todrive', t: '2toDrive, vanaf 16,5 jaar', d: 'Op je 17e examen, tot je 18e rijden met een coach' },
      { id: 'automaat', t: 'Automaat leren rijden', d: 'Zonder extra kosten' },
      { id: 'aandacht', t: 'Les met ADHD, autisme of faalangst', d: 'Een instructeur die weet hoe je het beste leert' },
      { id: 'proef', t: 'Eerst een proefles', d: 'Een echte eerste les, je zit nergens aan vast' },
    ],
  },
  {
    id: 'motor', t: 'Motor', code: 'Rijbewijs A1, A2, A', dagen: ['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za'],
    opties: [
      { id: 'proef', t: 'Proefles / intakeles', d: '1,5 uur, inclusief eigen helmmuts', prijs: '€ 94,-' },
      { id: 'regulier', t: 'Reguliere motoropleiding', d: 'Op je eigen tempo, pakket van 10 uur', prijs: '€ 720,-' },
      { id: 'spoed', t: 'Motorspoed in 4 dagen', d: '21,5 uur les, AVB- en AVD-examen', prijs: '€ 2.106,50' },
      { id: 'door', t: 'Doorstromen naar A2 of A', d: 'Pakketten met les en het AVD-examen', prijs: 'vanaf € 525,-' },
    ],
  },
  {
    id: 'aanhanger', t: 'Aanhanger', code: 'Rijbewijs BE', dagen: ['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za'],
    opties: [
      { id: 'dag', t: 'Dagopleiding auto met aanhanger', d: '6,5 uur rijles en het BE-praktijkexamen', prijs: '€ 899,50' },
      { id: 'los', t: 'Losse lessen', d: 'Per uur van 60 minuten', prijs: '€ 87,-' },
    ],
  },
  {
    id: 'bromfiets', t: 'Bromfiets', code: 'Rijbewijs AM', dagen: ['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za'],
    opties: [
      { id: 'allin', t: 'ALL-IN pakket', d: 'Praktijk en theorie, op ons eigen oefenterrein' },
    ],
  },
];

// Google: de drie reviews die het profiel volledig toont (5 oktober 2026). Facebook: positieve recensies zoals ze op hun
// eigen website staan (Trustindex-blok). Letterlijk, ingekort met "…". Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Winifred R.', bron: 'Google', wanneer: '4 maanden geleden', tekst: 'Ze focussen ook echt op veiligheid en maken je bewust van de kwetsbaarheid van de motor rijder, zonder het plezier weg te nemen.' },
  { naam: 'Mike D.', bron: 'Google', wanneer: 'een jaar geleden', tekst: 'Op de dag van het examen voelde ik iets geks: bijna geen zenuwen. Ik wist dat ik het motorrijden goed onder de knie had, en dat is volledig te danken aan de kwaliteit van de lessen bij De KERN.' },
  { naam: 'Elena S.', bron: 'Facebook', wanneer: '2 juni 2025', tekst: 'Super fijne rijschool, stoppen veel moeite en tijd om te zorgen dat je zo goed mogelijk voorbereid op examen gaat!! … beide examens in 1x gehaald!!' },
  { naam: 'Dewy K.', bron: 'Facebook', wanneer: '8 januari 2025', tekst: 'Na 15 jaar geleden mijn autorijbewijs te hebben gehaald bij Arjan Koppelaar, nu ook weer gekozen voor zijn rijschool voor het behalen van mijn motor rijbewijs. … het weer een fantastische ervaring was!' },
  { naam: '85ava', bron: 'Google', wanneer: '2 jaar geleden', tekst: 'Top rijschool zeker een aanrader! Alle rij instructeurs zijn zeer bekwaam en enthousiast om jou aan je rijbewijs te helpen.' },
  { naam: 'Annette B.', bron: 'Facebook', wanneer: '12 december 2024', tekst: 'Absolute aanrader voor je motorlessen. Fijne vakbekwame instructeurs. Altijd leuke en leerzame lessen gehad. En rijbewijs in 1x gehaald!' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waVraag = waMet('Hallo KERN, ik heb een vraag over de rijlessen.');
