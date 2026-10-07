// Feiten (bekeken 7 oktober 2026), bronnen in bron/:
// - delaatkachels.nl (home, Over ons, Showroom, Onderhoud, Nieuws, Contact, Magazijnuitverkoop, Algemene voorwaarden):
//   Kailakkers 2c, 5095 AD Hooge Mierde, T 06 489 830 79 en 06 207 456 95, info@delaatkachels.nl, KvK 51835568,
//   handelsnaam van Trendstore online V.O.F. Showroom: vrijdag 10-17, elke eerste zaterdag van de maand 10-13.
//   Over ons: gebroeders Paul en Frank de Laat; pelletkachels, houtkachels, inbouwhaarden en gastoestellen; complete
//   systemen op CV (hout of pellets); "de verkoop gebeurt door onszelf, evenals de plaatsing van de kachel";
//   "Op uw verzoek komen wij bij u thuis om de situatie ter plaatse te komen bekijken en u geheel vrijblijvend te adviseren."
//   (Over ons noemt nog Reusel: sinds 1 maart 2026 Hooge Mierde, nieuwsbericht 8 januari 2026.)
//   Nieuws 6 sep 2026 "Seizoensopener", 17 aug 2026 "Plan nu uw onderhoud" (maakafspraakonline.nl/de-laat-kachels/new).
// - Facebook facebook.com/delaatkachels.nl: intro "Vuur is onze passie!", posts 15 en 23 september 2026.
// - Google-profiel: 62 reviews (score niet tonen), vr 10-17 en za 10-13 (Google mist "eerste zaterdag").
export const site = {
  naam: 'De Laat Kachels & Haarden',
  kort: 'De Laat',
  straat: 'Kailakkers 2c',
  postcode: '5095 AD',
  plaats: 'Hooge Mierde',
  tel: '06 48 98 30 79',
  telHref: 'tel:+31648983079',
  tel2: '06 20 74 56 95',
  tel2Href: 'tel:+31620745695',
  wa: 'https://wa.me/31648983079',
  mail: 'info@delaatkachels.nl',
  kvk: '51835568',
  facebook: 'https://www.facebook.com/delaatkachels.nl',
  shop: 'https://delaatkachels.nl/',
  uitverkoop: 'https://delaatkachels.nl/Category.aspx?onsale=1&mid=12',
  onderhoud: 'https://maakafspraakonline.nl/de-laat-kachels/new',
  maps: 'https://www.google.com/maps/search/?api=1&query=De+Laat+Kachels+%26+Haarden+Kailakkers+2c+Hooge+Mierde',
  reviews: 'https://www.google.com/maps/search/?api=1&query=De+Laat+Kachels+%26+Haarden+Kailakkers+2c+Hooge+Mierde',
  google: { aantal: 62 },
  themeColor: '#141311',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

const cat = (cid: number) => `https://delaatkachels.nl/Category.aspx?cid=${cid}`;

// Hun eigen productcategorieën (menu op delaatkachels.nl), elke regel linkt naar hun bestaande pagina.
export const assortiment = [
  { titel: 'Pelletkachels', href: cat(1), merken: [['Austroflamm', cat(55)], ['EcoForest', cat(81)], ['Edilkamin', cat(17)], ['MCZ', cat(16)], ['Rika', cat(18)], ['Saey', cat(82)]] },
  { titel: 'Houtkachels', href: cat(2), merken: [['Austroflamm', cat(46)], ['Charnwood', cat(23)], ['Norsk Kleber', cat(45)], ['Rika', cat(19)], ['Saey', cat(57)]] },
];
export const overig = [
  ['Speksteenkachels', cat(20)],
  ['Houtpellets', cat(5)],
  ['Stookhout', cat(84)],
  ['Onderhoud pelletkachel', cat(61)],
  ['Magazijnuitverkoop', 'https://delaatkachels.nl/Category.aspx?onsale=1&mid=12'],
];

// Letterlijk van Google (5 sterren, stand 7 oktober 2026). Naam: voornaam + initiaal.
export const reviews = {
  tinne: { naam: 'Tinne P.', wanneer: '4 maanden geleden', tekst: 'Gisteren een pelletkachel komen installeren bij ons zeer vriendelijk mannen heel proper afgewerkt en goeie uitleg gekregen. Vanaf de eerste keer in de toonzaal tot de plaatsing een goei contact en duidelijke afspraken' },
  jimmy: { naam: 'Jimmy G.', wanneer: '10 maanden geleden', tekst: '… Zeer tevreden over het advies, service, plaatsing, ... Dit zijn mensen die weten waarover ze spreken en denken met je mee. Geen enkele vraag is te moeilijk of te veel. De plaatsing is ook door frank en Paul zelf gebeurt.' },
  tom: { naam: 'Tom J.', wanneer: '7 maanden geleden', tekst: '… Elk jaar laten we ook het onderhoud door hen uitvoeren. Overlaatst kregen we een foutmelding waardoor onze kachel niet meer werkte (op een zaterdag, tijdens het weekend van Carnaval!!). Ik heb Frank gebeld en uitgelegd dat de kachel onze enige verwarming is en dat we met een baby van drie weken zitten. Diezelfde dag zijn ze ons probleem nog komen oplossen.' },
  l: { naam: 'L.', wanneer: '5 maanden geleden', tekst: 'We hebben een prachtige kachel, geplaatst door de Laat. … Super service. Het personeel heeft kennis, denkt mee en is vriendelijk.' },
  toon: { naam: 'Toon P.', wanneer: '6 jaar geleden', tekst: '… Goede informatieve uitleg. Mooie en ordelijke installatie van de kachel. Komt afspraken na. Echt een aanrader' },
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Paul en Frank, ik heb een vraag over een kachel.');
