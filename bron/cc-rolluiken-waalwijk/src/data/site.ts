// Feiten (bekeken 7 oktober 2026), ruwe bronnen in ../../bron:
// - Oude site ccrolluiken.nl (JouwWeb), webarchief 25-02-2025 (bron/web/home-20250225001055.u.html): rolluiken volledig op maat,
//   rolluiken voor ramen en roldeuren voor garages en winkels, gereviseerde rolluiken op maat, elektrisch (met afstandsbediening)
//   of handmatig, nieuwe motoren ook met solartechniek, bestaand rolluik laten aanpassen (langskomen met het rolluik), afhalen en
//   zelf monteren met duidelijke handleiding, inkoop gebruikte rolluiken, inruil, losse onderdelen nieuw en gebruikt, showroom,
//   hulp bij opmeten ("Het is eenvoudiger dan u denkt."), "De koffie staat voor u klaar!", tijden di-vr 9:30-16:30, za 9:30-12:00,
//   ma gesloten, buiten deze tijden op afspraak, 7 dagen per week bereikbaar, ccrolluiken@gmail.com, KvK 71490485, © 2017-2025.
// - Domein ccrolluiken.nl: SIDN-status "free" (rdap.sidn.nl, 7-10-2026), DNS lost niet op. Google-websiteknop wijst er nog naar.
// - Google-profiel "Cc rolluiken": 4,9 uit 63, Leverancier van zonwering, Sluisweg 2z, 5145 PE Waalwijk, 06 23842720,
//   winkelbezoek mogelijk, ophalen in de winkel, di-vr 09:30-16:30, za 09:30-12:00, zo/ma gesloten.
// - Facebook "CC Rolluiken | Waalwijk": "In en verkoop, nieuwe en gebruikte rolluiken op maat gemaakt."
// - Marktplaats "Cc rolluiken" (15 jaar actief, eigen advertenties okt 2026): "onze rolluiken zijn nagekeken schoon en gepolijst
//   als nieuw", half jaar garantie op gereviseerde rolluiken, nieuwe rolluiken met 4 jaar garantie, "Voor reparaties of op maat
//   maken kunt u bij ons terecht", "Mocht uw langskomen bel of app even t kan zijn dat we even weg zijn", maten/kleuren hieronder.
// - Gevelbord op eigen foto: "CC ROLLUIKEN / IN EN VERKOOP / NIEUWE EN GEBRUIKTE ROLLUIKEN / Op Maat gemaakt / 06-23842720".
export const site = {
  naam: 'CC Rolluiken',
  vol: 'CC Rolluiken Waalwijk',
  straat: 'Sluisweg 2z',
  postcode: '5145 PE',
  plaats: 'Waalwijk',
  tel: '06 23 84 27 20',
  telHref: 'tel:+31623842720',
  wa: 'https://wa.me/31623842720',
  mail: 'ccrolluiken@gmail.com',
  kvk: '71490485',
  marktplaats: 'https://www.marktplaats.nl/u/cc-rolluiken/17877010/',
  facebook: 'https://www.facebook.com/people/CC-Rolluiken/100089813504293/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Cc+rolluiken+Sluisweg+2z+Waalwijk',
  google: { score: '4,9', aantal: 63 },
  themeColor: '#0b2f63',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay). o/d in minuten. Bron: Google-profiel (gelijk aan oude site en Marktplaats).
export const tijden = [
  { dag: 2, naam: 'Dinsdag', open: '9.30', dicht: '16.30', o: 570, d: 990 },
  { dag: 3, naam: 'Woensdag', open: '9.30', dicht: '16.30', o: 570, d: 990 },
  { dag: 4, naam: 'Donderdag', open: '9.30', dicht: '16.30', o: 570, d: 990 },
  { dag: 5, naam: 'Vrijdag', open: '9.30', dicht: '16.30', o: 570, d: 990 },
  { dag: 6, naam: 'Zaterdag', open: '9.30', dicht: '12.00', o: 570, d: 720 },
  { dag: 0, naam: 'Zondag', open: '', dicht: '', o: 0, d: 0 },
  { dag: 1, naam: 'Maandag', open: '', dicht: '', o: 0, d: 0 },
];

// Uit eigen Marktplaats-advertenties, 13 september t/m 7 oktober 2026. Zonder prijzen: voorraad wisselt.
export const voorraad = [
  { maat: '267 × 255', wat: 'Elektrisch, roomwit RAL 9001' },
  { maat: '104 × 166,5', wat: 'Elektrisch, demo, roomwit RAL 9001' },
  { maat: '133 × 265', wat: 'Roldeur, elektrisch, zwart' },
  { maat: '288,5 × 220', wat: 'Elektrisch, wit RAL 9016' },
  { maat: '396,5 × 260', wat: 'Roldeur, antraciet, Somfy-motor' },
  { maat: '181 × 217', wat: 'Elektrisch, ivoor RAL 1015' },
  { maat: '91 × 232', wat: 'Elektrisch, nieuw, antraciet RAL 7016' },
  { maat: '423 × 288', wat: 'Roldeur, groen RAL 6009' },
  { maat: '109 × 265', wat: 'Handmatig, nieuw, lichtgrijs RAL 7038' },
  { maat: '205,5 × 250', wat: 'Transparant, voor serre of overkapping' },
];

// Letterlijk van Google (5 sterren, stand 7 oktober 2026), ingekort met "…". Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Map v.', tekst: 'Zeer prettige vakkundige eigenaar (denkt erg goed mee en goede advisering) en snelle service. Scherpe prijs en afspraak is afspraak. Zaterdag’s besteld en maandags’ rolluik al gereed om af te halen.' },
  { naam: 'Andrius K.', tekst: 'Snel geregeld\nKant en klaar\nVeel rolluiken op voorraad (kan snel aangepast worden)' },
  { naam: 'Dijo S.', tekst: 'Onlangs elektrisch rolluik op maat laten maken. Week later opgehaald. … Iemand die nog met je meedenkt,je bent zeker geen nummer bij hem.' },
  { naam: 'John S.', tekst: 'Na een rit van 2 uur was ik aangekomen en werd vriendelijk ontvangen met een bak koffie. Ondanks dat CC rolluiken geen schuld betreft hebben ze alles keurig kosteloos hersteld!!!' },
  { naam: 'Callie', tekst: 'Super snelle en goede service. Zeer tevreden en erg blij met de nieuwe rolluiken!' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo CC Rolluiken, ik heb een vraag over een rolluik.');
