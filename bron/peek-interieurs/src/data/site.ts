// Feiten (bekeken 12 oktober 2026), bronnen in bron/:
// - Eigen site peekinterieurs.nl (WordPress/Enfold, "(c) Copyright 2019-2024"; alle pagina's in bron/site/*.txt):
//   home: "Voor complete interieurprojecten van vloeren tot raamdecoratie", 100% tevredenheidsgarantie, "Ons advies is altijd
//   kosteloos", "In totaal 66 jaar ervaring", "Een familiebedrijf waarbij de kennis van vader op zoon is overgebracht".
//   over-ons: sinds 1983 (Kees), familiebedrijf sinds 2004, vader en zoon; Paleis op de Dam 4000 m2 tapijt; motto
//   "Je kan het maar een keer goed doen". werkwijze: showroom op afspraak, overdag/avond/weekend, koffie, stalen mee.
//   Othellolaan 36, 3438 VP Nieuwegein, "Bezoeken op afspraak", 06 12600591, info@peekinterieurs.nl.
// - Google: Vloerenwinkel, 5,0 uit 132 reviews, reviews 3 tot 8 maanden oud. Tijden volgens Google (bron/google/uren.json).
//   Zoon heet in reviews "Rowan": staat niet op eigen site, dus niet getoond (reviews daar ingekort met "…").
export const site = {
  naam: 'Peek Interieurs',
  plaats: 'Nieuwegein',
  straat: 'Othellolaan 36',
  postcode: '3438 VP',
  tel: '06 12 60 05 91',
  telHref: 'tel:+31612600591',
  wa: 'https://wa.me/31612600591',
  mail: 'info@peekinterieurs.nl',
  insta: 'https://www.instagram.com/peekinterieurs/',
  reviews: 'https://www.google.com/maps/place/Peek+interieurs/@52.0419766,5.0896464,17z/data=!4m6!3m5!1s0x47c6658cb1d86b27:0x16b1ea69dc9ff56b!8m2!3d52.0419766!4d5.0896464!16s%2Fg%2F11j8pl349g',
  route: 'https://www.google.com/maps/dir/?api=1&destination=Othellolaan+36+3438+VP+Nieuwegein',
  google: { score: '5,0', aantal: 132 },
  themeColor: '#1e2223',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Maandag = 1 ... zondag = 0. Bron: Google-profiel. Showroom alleen op afspraak (eigen site).
export const tijden: { dag: string; nr: number; open: [number, number] }[] = [
  { dag: 'Maandag', nr: 1, open: [7, 21] },
  { dag: 'Dinsdag', nr: 2, open: [7, 21] },
  { dag: 'Woensdag', nr: 3, open: [7, 21] },
  { dag: 'Donderdag', nr: 4, open: [7, 21] },
  { dag: 'Vrijdag', nr: 5, open: [7, 21] },
  { dag: 'Zaterdag', nr: 6, open: [9, 18] },
  { dag: 'Zondag', nr: 0, open: [10, 16] },
];

// Letterlijk van Google (5 sterren), ingekort met "…". Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Robin H.', wanneer: '5 maanden geleden', tekst: 'Peek interieurs zijn echt vakmensen met passie. Dat straalde er van de eerste kennismaking al vanaf. Na afloop bleek dat we ook echt een goede keuze hadden gemaakt. Goed advies, goede communicatie en mooi eind resultaat. Zeker een aanrader.' },
  { naam: 'Paul S.', wanneer: '4 maanden geleden', tekst: 'Heel tevreden over de diensten van Peek Interieurs. Van het adviesgesprek tot aan het leggen van de PVC vloer: … De prettige communicatie en de eerlijke prijs maakten het compleet. Echt een aanrader om hier je vloer te kopen en te laten leggen!' },
  { naam: 'Hans', wanneer: '8 maanden geleden', tekst: '… een mooie Therdex vloer gelegd, in een prachtig gemeleerd visgraat motief. En als afwerking mooie plinten geplaatst.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Peek Interieurs, ik wil graag een afspraak in de showroom maken.');
