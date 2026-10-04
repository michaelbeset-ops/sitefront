// Feiten: Google-bedrijfsprofiel "Abbas Autobedrijf" (bekeken 4 oktober 2026; 4,2 uit 33 reviews), hun eigen site
// autobedrijfabbas.nl (sinds mei 2013, RDW-erkend, Nationale Auto Pas, eigenaar Abbas Alkabi) en de belettering op hun bus.
// Blekerstraat 24, 2222 AN Katwijk ('t Heen 5.0 Businesscenter). 06 23594149, 071 750 18 97. KvK 57975442.
export const site = {
  naam: 'Autobedrijf Abbas',
  straat: 'Blekerstraat 24',
  postcode: '2222 AN',
  plaats: 'Katwijk',
  terrein: 'bedrijventerrein ’t Heen',
  tel: '06 23 59 41 49',
  telHref: 'tel:+31623594149',
  vast: '071 750 18 97',
  vastHref: 'tel:+31717501897',
  mail: 'autobedrijfabbas@hotmail.com',
  kvk: '57975442',
  wa: 'https://wa.me/31623594149',
  voorraad: 'https://www.autowereld.nl/api/iframe/2821353b3566/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Autobedrijf+Abbas+Blekerstraat+24+Katwijk',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Abbas+Autobedrijf+Katwijk',
  google: { score: '4,2', aantal: 33 },
  themeColor: '#0c1424',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay). Tijden van Google (zaterdag tot 17.30; hun oude site zegt 17.00).
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '08.30', dicht: '18.00', van: 510, tot: 1080 },
  { dag: 2, naam: 'Dinsdag', open: '08.30', dicht: '18.00', van: 510, tot: 1080 },
  { dag: 3, naam: 'Woensdag', open: '08.30', dicht: '18.00', van: 510, tot: 1080 },
  { dag: 4, naam: 'Donderdag', open: '08.30', dicht: '18.00', van: 510, tot: 1080 },
  { dag: 5, naam: 'Vrijdag', open: '08.30', dicht: '18.00', van: 510, tot: 1080 },
  { dag: 6, naam: 'Zaterdag', open: '10.00', dicht: '17.30', van: 600, tot: 1050 },
  { dag: 0, naam: 'Zondag', open: '', dicht: '', van: 0, tot: 0 },
];

// Diensten van hun eigen site (Diensten, Werkplaats) en de belettering op hun bus.
export const chips = ['Kleine beurt', 'Grote beurt', 'APK benzine en diesel', 'Reparatie', 'Diagnose', 'Banden', 'Vakantiebeurt', 'Occasions', 'Inkoop'];

// Letterlijk van Google (stand 4 oktober 2026). Alleen 5-sterrenreviews; ingekort met "…" waar aangegeven.
export const reviews = [
  { naam: 'Timo Z.', wanneer: '5 jaar geleden', tekst: 'Hier een Peugeot 207 gekocht rijd er intussen 1 jaar mee rond. Werd keurig afgeleverd met nieuwe banden en een interieur reiniging en wat een keurige auto heeft hij mij verkocht ! … Ik raad Abbas aan voor een betrouwbare auto en een goede service.' },
  { naam: 'Denisa', wanneer: 'een jaar geleden', tekst: 'Eind november een Hyundai Getz gekocht bij Abbas. … Al met al dus een nette auto zonder al te veel nieuwe gekke kosten gekocht bij Abbas :) … en een jaar later nog steeds veel plezier van de auto 😁' },
];
// Korte citaten die Google zelf uitlicht in het reviewoverzicht (naam niet getoond door Google).
export const citaten = [
  'Goeie en ervaren monteurs en gezellige sfeer lekker bakkie koffie',
  'M’n koppel, remschijven, banden en oliefilters zijn vervangen door Abbas.',
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waAfspraak = waMet('Hallo Abbas, ik wil graag een afspraak maken voor mijn auto.');
