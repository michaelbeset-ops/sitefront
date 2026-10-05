// Feiten (bekeken 5 oktober 2026):
// - Google-bedrijfsprofiel "JH Camperverhuur": 5,0 uit 2 reviews, Noordzijde 27B, 4225 PH Noordeloos, 06 14065328,
//   vrijdag en zaterdag 09:00-17:00, overige dagen gesloten.
// - Eigen site jhcamperverhuur.nl via Wayback (snapshot 14 maart 2025): Carado V339, specificaties, voorzieningen,
//   inventaris, tarieven, vrijdag-tot-vrijdag, FAQ, Huib +316 14 06 53 28 en Jacco +316 83 39 90 49.
// - Huren.nl-profiel (zelfde tarieven, 24 jaar / 3 jaar rijbewijs, borg en eigen risico 1250, "Advies op maat" enz.).
// - Huurcontract (pdf op huren.nl): JH Camperverhuur B.V., contactpersonen J.M. de Jong / H.T. de Jong,
//   ophalen 15:00, terugbrengen 10:00, schoonmaak 125, alleen in Europa.
// - Facebook www.jhcamperverhuur.nl: laatste bericht 8 augustus 2025 ("Last-minute avontuur? Wij hebben nog plek!").
// E-mail info@jhcamperverhuur.nl bewust NIET getoond: het domein is op 14-09-2026 opnieuw geregistreerd door een derde.
export const site = {
  naam: 'JH Camperverhuur',
  straat: 'Noordzijde 27B',
  postcode: '4225 PH',
  plaats: 'Noordeloos',
  regio: 'Alblasserwaard',
  tel: '06 14 06 53 28',
  telHref: 'tel:+31614065328',
  tel2: '06 83 39 90 49',
  tel2Href: 'tel:+31683399049',
  wa: 'https://wa.me/31614065328',
  facebook: 'https://www.facebook.com/www.jhcamperverhuur.nl',
  maps: 'https://www.google.com/maps/search/?api=1&query=JH+Camperverhuur+Noordzijde+27B+Noordeloos',
  reviews: 'https://www.google.com/maps/search/?api=1&query=JH+Camperverhuur+Noordeloos',
  google: { score: '5,0', aantal: 2 },
  themeColor: '#1c1747',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay).
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '', dicht: '' },
  { dag: 2, naam: 'Dinsdag', open: '', dicht: '' },
  { dag: 3, naam: 'Woensdag', open: '', dicht: '' },
  { dag: 4, naam: 'Donderdag', open: '', dicht: '' },
  { dag: 5, naam: 'Vrijdag', open: '09.00', dicht: '17.00' },
  { dag: 6, naam: 'Zaterdag', open: '09.00', dicht: '17.00' },
  { dag: 0, naam: 'Zondag', open: '', dicht: '' },
];

// Tarieven per week, letterlijk van jhcamperverhuur.nl (stand maart 2025) en gelijk aan huren.nl.
// van/tot als [maand, dag], 1-based.
export const seizoenen = [
  { naam: 'Voordeelseizoen', periode: '1 november tot 15 april', prijs: 665, van: [11, 1], tot: [4, 15] },
  { naam: 'Voorseizoen', periode: '16 april tot 8 juli', prijs: 995, van: [4, 16], tot: [7, 8] },
  { naam: 'Hoogseizoen', periode: '9 juli tot 26 augustus', prijs: 1195, van: [7, 9], tot: [8, 26] },
  { naam: 'Naseizoen', periode: '27 augustus tot 31 oktober', prijs: 995, van: [8, 27], tot: [10, 31] },
];
export const service = 179;

// Letterlijk van Google (stand 5 oktober 2026), ingekort met "…". Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Sanne H.', wanneer: '4 jaar geleden', tekst: 'Aardige mensen die weten waarover ze praten. We hebben hier als eerste afgelopen maand een camper gehuurd. Alles was super goed geregeld. Door JH camperverhuur hebben we een top vakantie gehad! Ga zo door!' },
  { naam: 'M. N.', wanneer: '4 jaar geleden', tekst: '… Stond keurig netjes klaar, alles werd rustig en duidelijk uitgelegd … Alles wat er moet zijn is er ook. … genoten en prinsheerlijk geslapen. … Wij komen terug.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waVraag = waMet('Hallo Huib, is de Carado V339 nog vrij in de periode die ik zoek?');
