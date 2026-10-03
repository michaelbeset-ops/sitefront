// Feiten: trimsalonbarendrecht.nl (alle 6 pagina's, bekeken 3 oktober 2026) en het Google-bedrijfsprofiel
// "Trimsalon "Van de Witte Rekeltjes"" (4,8 uit 19 reviews, Dierentrimmer, "Gerund door een vrouwelijke ondernemer").
// Noldijk 97, 2991 VH Barendrecht. 06 44 36 64 23. KvK 73880752. Eigenaar: Jolanda Mudde, gediplomeerd hondentrimster,
// trimsalon aan huis. Ma t/m vr 08.30-17.00 uur, alleen op afspraak. Geen Facebook, Instagram of e-mail gevonden.
// Geen prijzen gepubliceerd ("vrijblijvend contact ... voor vragen of een prijsopgave").
export const site = {
  naam: 'Trimsalon Van de Witte Rekeltjes',
  kort: 'Van de Witte Rekeltjes',
  eigenaar: 'Jolanda Mudde',
  straat: 'Noldijk 97',
  postcode: '2991 VH',
  plaats: 'Barendrecht',
  tel: '06 44 36 64 23',
  telHref: 'tel:+31644366423',
  wa: 'https://wa.me/31644366423',
  kvk: '73880752',
  maps: 'https://www.google.com/maps/search/?api=1&query=Trimsalon+Van+de+Witte+Rekeltjes+Noldijk+97+Barendrecht',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Trimsalon+Van+de+Witte+Rekeltjes+Barendrecht',
  google: { score: '4,8', aantal: 19 },
  themeColor: '#121a2e',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay).
export const tijden = [
  { dag: 1, naam: 'Maandag', kort: 'Ma', open: '08.30', dicht: '17.00' },
  { dag: 2, naam: 'Dinsdag', kort: 'Di', open: '08.30', dicht: '17.00' },
  { dag: 3, naam: 'Woensdag', kort: 'Wo', open: '08.30', dicht: '17.00' },
  { dag: 4, naam: 'Donderdag', kort: 'Do', open: '08.30', dicht: '17.00' },
  { dag: 5, naam: 'Vrijdag', kort: 'Vr', open: '08.30', dicht: '17.00' },
  { dag: 6, naam: 'Zaterdag', kort: 'Za', open: '', dicht: '' },
  { dag: 0, naam: 'Zondag', kort: 'Zo', open: '', dicht: '' },
];

// Technieken letterlijk van hun pagina Behandelingen ("Afhankelijk van het ras en uw wensen wordt uw hond: ...").
export const technieken = ['Knippen', 'Effileren', 'Plukken', 'Strippen', 'Ontwollen', 'Scheren'];
export const chips = ['Volledige trimbeurt', 'Wassen en föhnen', 'Puppybeurt', ...technieken, 'Nagels knippen', 'Oorverzorging'];

// Letterlijk van Google (stand 3 oktober 2026). Alleen de positieve reviews die zonder inloggen volledig leesbaar zijn.
// Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Johaila V.', wanneer: '2 jaar geleden', tekst: 'Een top trimsalon, vriendelijke trimster, denkt met je mee. Het allerbelangrijkste is dat zij 1 op 1 werkt. Niet met meerdere honden tegelijk. Ze geeft aandacht en liefde aan je hond. Je hond komt niet gestrest terug na haar behandeling' },
  { naam: 'Dianne L.', wanneer: '5 jaar geleden', tekst: 'Wij zijn voor de eerste keer geweest, en wij zijn heel erg tervreden. Baloo de Golden Retriever zag er weer tot tip top uit. Gelijk een vervolg afspraak gemaakt. Een echte aanrader!!!' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waAfspraak = waMet('Hallo Jolanda, ik wil graag een afspraak maken voor mijn hond.');
