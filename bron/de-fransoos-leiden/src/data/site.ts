// Feiten (bekeken 7 oktober 2026), ruwe bronnen in ../../bron:
// - Eigen site defransoos.nl: "De Fransoos, Doezastraat 6, Leiden", 071-5125256, "Franse, Zwitserse en Hollandse kazen",
//   "vers brood, olijven en wijnen", "ideale plek voor het samenstellen van een perfect kaasplankje",
//   productnaam "Lekkere broodjes hebben we ook". Foto's: winkel, wijn, Ed met Mont d'Or en gildemedaille, producten.
// - Ed Chavernac in de eerste persoon op winkelenleiden.nl: "Bienvenue bij De Fransoos! Ik ben Ed Chavernac, geboren en
//   getogen in de Lot-en-Garonne, Frankrijk. Sinds september 2011 ben ik de trotse eigenaar van De Fransoos. Een Franse oase
//   midden in Leiden ... Hollandse kaas vers van 't mes en een ruime keuze in belegde broodjes. Ik deel graag mijn liefde
//   voor mijn geboorteland Frankrijk met u. ... ik ben chef-kok van beroep".
// - EenVandaag 2-11-2017 en Omroep West 31-10-2017: toegetreden tot de Guilde des Maîtres Fromagers aux Pays-Bas (2017).
// - Facebook facebook.com/deFransoos: intro "Buitenlandse kazen, Hollandse kazen, Vleeswaren, Noten & Belgische Bonbons,
//   Wijnen", info@defransoos.nl, 071 512 5256. X @DeFransoos (Ed Chavernac): kerstpakketten, info@defransoos.nl.
// - Google-profiel (ongeclaimd): Doezastraat 6, 2311 HB Leiden, 06 49968124, ma-vr 09:00-18:00, za 08:00-17:00, zo gesloten.
export const site = {
  naam: 'De Fransoos',
  vol: 'De Fransoos Kaas & Delicatessen',
  eigenaar: 'Ed',
  straat: 'Doezastraat 6',
  postcode: '2311 HB',
  plaats: 'Leiden',
  tel: '071 512 52 56',
  telHref: 'tel:+31715125256',
  mobiel: '06 49 96 81 24',
  mobielHref: 'tel:+31649968124',
  wa: 'https://wa.me/31649968124',
  mail: 'info@defransoos.nl',
  facebook: 'https://www.facebook.com/deFransoos',
  maps: 'https://www.google.com/maps/search/?api=1&query=De+Fransoos+Kaas+%26+Delicatessen+Doezastraat+6+Leiden',
  themeColor: '#21102e',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay). o/d in minuten voor het script. Bron: Google-profiel (7-10-2026).
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '9.00', dicht: '18.00', o: 540, d: 1080 },
  { dag: 2, naam: 'Dinsdag', open: '9.00', dicht: '18.00', o: 540, d: 1080 },
  { dag: 3, naam: 'Woensdag', open: '9.00', dicht: '18.00', o: 540, d: 1080 },
  { dag: 4, naam: 'Donderdag', open: '9.00', dicht: '18.00', o: 540, d: 1080 },
  { dag: 5, naam: 'Vrijdag', open: '9.00', dicht: '18.00', o: 540, d: 1080 },
  { dag: 6, naam: 'Zaterdag', open: '8.00', dicht: '17.00', o: 480, d: 1020 },
  { dag: 0, naam: 'Zondag', open: '', dicht: '', o: 0, d: 0 },
];

// Letterlijk van Google (5 sterren, stand 7 oktober 2026), ingekort met "…". Naam: voornaam + initiaal.
export const reviews = {
  monique: { naam: 'Monique S.', tekst: 'Laatst een proeverij gedaan met vriendinnen. De passie straalt van Ed af! Prachtige verhalen over hoe de kazen en wijnen gemaakt worden die hij verkoopt.' },
  fleur: { naam: 'Fleur', tekst: 'Hier meermaals een broodje gehaald tijdens de lunchpauze. Lekker kazig en goed belegd. Ruime keuze (20 stuks?) en ook vega en vegan, zowel warm als koud.' },
  dave: { naam: 'Dave S.', tekst: 'Mooi assortiment, fijne service en heerlijke broodjes.' },
  ton: { naam: 'Ton v. L.', tekst: 'Als je wat met Franse specialiteiten hebt, moet je hier zijn. Als ze het hier niet hebben, moet je naar Frankrijk.' },
  birgit: { naam: 'Birgit R.', tekst: 'Heerlijke fles Port meegenomen en op advies van de eigenaar drie kaasjes. Hier smullen we nu van.' },
  jurgen: { naam: 'Jurgen H.', tekst: 'Er wordt met liefde voor het vak en de producten ingekocht. Als ik ongeveer aangeef wat ik zoek maken ze hier altijd weer een heerlijk pakketje van.' },
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Bonjour Ed, ik heb een vraag.');
