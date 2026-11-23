// Feiten uit het dagbestand van 23-11-2026, met bron.
// rijschoolswets.nl: telefoon, e-mail, pluspunten, tarieven, theorie-uitleg, rijschoolnummer.
// vindjerijschool.nl en autorijschooltarieven.nl: adres Kinkelenburg 44, 3328 AG Dordrecht.
// rijschoolspecialist.nl: 57 procent geslaagd bij het eerste examen (23 examens, 2025/26), Dordrecht 39 procent.
// Geen openingstijden en geen eigenaarsnamen bekend: die staan er dus niet op.
export const site = {
  naam: 'Autorijschool Swets',
  straat: 'Kinkelenburg 44',
  postcode: '3328 AG',
  plaats: 'Dordrecht',
  tel1: '06 51 91 51 23',
  tel1Href: 'tel:+31651915123',
  tel2: '06 22 15 73 07',
  tel2Href: 'tel:+31622157307',
  wa: 'https://wa.me/31651915123',
  mail: 'info@rijschoolswets.nl',
  facebook: 'https://www.facebook.com/rijschoolswets',
  rijschoolnummer: '4893Z8',
  maps: 'https://www.google.com/maps/dir/?api=1&destination=Kinkelenburg+44+3328+AG+Dordrecht',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

export const slagen = { swets: 57, dordrecht: 39, examens: 23, jaar: '2025/26' };

export const pluspunten = [
  { kop: 'Lessen van 60 minuten', tekst: 'Een les duurt een vol uur. Genoeg tijd om echt iets onder de knie te krijgen.' },
  { kop: 'Een vaste instructeur', tekst: 'Je rijdt steeds met dezelfde instructeur. Je kiest zelf of dat een man of een vrouw is.' },
  { kop: 'Privéles', tekst: 'In de auto zitten alleen jij en je instructeur.' },
  { kop: 'Een rookvrije auto', tekst: 'In onze lesauto wordt niet gerookt.' },
  { kop: 'Blokuren kan ook', tekst: 'Liever twee uur achter elkaar? Dat kan.' },
  { kop: 'Meerdere auto’s', tekst: 'We rijden met meer dan één lesauto.' },
  { kop: 'Geld terug na slagen', tekst: 'Lessen die je na het slagen niet hebt gebruikt, krijg je terugbetaald.' },
];

export const lessen = [
  { naam: 'Losse les', sub: '60 minuten', prijs: 60 },
  { naam: '10 lessen', sub: '', prijs: 575 },
  { naam: '20 lessen', sub: '', prijs: 1125 },
  { naam: '30 lessen', sub: '', prijs: 1700 },
];

export const overig = [
  { naam: 'Theoriecursus', prijs: 60 },
  { naam: 'Pleisterpakket', prijs: 570 },
  { naam: 'Tussentijdse toets', prijs: 285 },
  { naam: 'Praktijkexamen', prijs: 285 },
];

export const euro = (n: number) => `€ ${n.toLocaleString('nl-NL')},-`;
export const url = (pad = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${pad}`;

// Sfeerbeelden van Unsplash, nooit gepresenteerd als eigen auto's of instructeurs.
const u = (id: string, w: number) => `https://images.unsplash.com/${id}?fm=jpg&q=60&w=${w}&auto=format&fit=crop&ixlib=rb-4.1.0`;
export const fotos = {
  hero: (w = 1600) => u('photo-1562877961-efcec8439f9d', w),
  weg: (w = 1200) => u('photo-1551952237-954a0e68786c', w),
  examen: (w = 1200) => u('photo-1630406144797-821be1f35d75', w),
  stad: (w = 1600) => u('photo-1652180076195-9b4c82e390a7', w),
};
