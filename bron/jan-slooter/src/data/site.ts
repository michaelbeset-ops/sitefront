// Feiten (bekeken 10 oktober 2026), bronnen in bron/:
// - janslooter.nl: "Jan Slooter Mechanisatiecentrum", "Wij zijn gevestigd in 's Gravendeel. Hiernaast ziet u een visuele
//   weergave van gebruikte machines en tractoren, welke op voorraad staan en welke u kunt komen bezichtigen.",
//   "Voor meer informatie, contact opnemen via onderstaand adres." Contact: Jan Slooter, Schenkeldijk 36a, 3295 EG
//   's Gravendeel, 0031-(0)6-53499122, info@janslooter.nl. Knoppen OCCASIONS en ROUTE. Foto's 1-11 (luchtfoto's erf, machines).
// - mc-p.nl: zelfde opzet als "MC-P Nederland", zelfde adres en contact (Jan Slooter), occasions via tractors-and-machinery.nl.
// - tractors-and-machinery.nl/occasions/1/845: "Alle aanbiedingen van MC-P Nederland", rubrieken + merken (oktober 2026),
//   bij elk item "Contactpersoon: jan slooter" en "Ook bereikbaar via Whatsapp". Foto's daar hebben een watermerk: NIET gebruikt.
// - Google: "J. Slooter", Leverancier van landbouwmachines, 4,7 uit 26, nieuwste review een week oud. Openingstijden op Google
//   ("24 uur geopend") niet betrouwbaar: geen tijden tonen.
// GEEN voorraad, prijzen of aantallen als actueel tonen. Onderhoud/werkplaats staat NIET in eigen bronnen: niet noemen.
export const site = {
  naam: 'Jan Slooter Mechanisatiecentrum',
  kort: 'Jan Slooter',
  plaats: "'s-Gravendeel",
  straat: 'Schenkeldijk 36a',
  postcode: "3295 EG 's-Gravendeel",
  tel: '06 53 49 91 22',
  telHref: 'tel:+31653499122',
  wa: 'https://wa.me/31653499122',
  mail: 'info@janslooter.nl',
  aanbod: 'https://www.tractors-and-machinery.nl/occasions/1/845//1',
  route: "https://www.google.com/maps/dir/?api=1&destination=Schenkeldijk+36A%2C+3295+EG+%27s-Gravendeel",
  reviews: 'https://www.google.com/maps/place/J.+Slooter/@51.7469024,4.5959863,17z/data=!4m8!3m7!1s0x47c42573d6932fa3:0xd73f8f2025bdf3dc!8m2!3d51.7469024!4d4.5959863!9m1!1b1!16s%2Fg%2F1tx_5jdr',
  google: { score: '4,7', aantal: 26 },
  themeColor: '#161816',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Rubrieken uit hun aanbod op tractors-and-machinery.nl (oktober 2026), in hun eigen woorden waar mogelijk.
export const rubrieken = [
  'Tractoren', 'Grondbewerking', 'Zaai-, plant- en pootmachines', 'Bemesting en verzorging', 'Oogstmachines',
  'Weidebouw', 'Beregening', 'Tuin- en parkmachines', 'Bouwmachines en grondverzet', 'Heftrucks', 'Aggregaten', 'Banden en velgen',
];

// Merken in het aanbod van oktober 2026 (selectie).
export const merken = ['New Holland', 'Fendt', 'McCormick', 'Kverneland', 'Amazone', 'Vogel & Noot', 'AVR', 'Claas', 'Cappon', 'Vicon', 'Forigo', 'Stihl'];

// Letterlijk van Google (5 sterren, stand 10 oktober 2026). Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Tygo D.', tekst: 'Duidelijk en snel geregeld' },
  { naam: 'Danny D.', tekst: 'Makkelijk bereikbaar snel antwoord op je vragen' },
  { naam: 'Joost S.', tekst: 'Zeer nette voertuigen' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Jan, ik heb een vraag over een machine.');
