// Feiten (bekeken 12-13 oktober 2026), bronnen in bron/:
// - Google-profiel "Wereld Bike 🚲", Fietsenmaker, Korvelseweg 207, 5025 JE Tilburg, 06 40232583, 4,6 uit 127 reviews,
//   websiteknop = facebook.com. Tijden: ma-vr 10:00-18:00, za 10:00-17:00, zo gesloten. Bericht van de eigenaar 20-07-2026
//   (vakantie), nieuwste review "10 uur geleden" (bron/google/reviews-zoek.txt).
// - Facebook "Wereld Bike" (facebook.com/WereldBike): "Inkoop, Verkoop en Reparatie van Fietsen", "Verschillend van student- tot
//   topkwaliteit Gazelle's en B" (intro, afgekapt), wereldbike@live.nl, website http://www.wereldbike.nl/ = domein bestaat niet
//   (SIDN RDAP status "free", bron/web). Etalage (eigen foto's): "Inkoop Verkoop Reparatie" en "Buying Selling Repair".
// - Eigenaarsnaam staat niet in een eigen bron: niet gebruikt.
export const site = {
  naam: 'Wereld Bike',
  plaats: 'Tilburg',
  straat: 'Korvelseweg 207',
  postcode: '5025 JE',
  tel: '06 40 23 25 83',
  telHref: 'tel:+31640232583',
  wa: 'https://wa.me/31640232583',
  mail: 'wereldbike@live.nl',
  fb: 'https://www.facebook.com/WereldBike',
  route: 'https://www.google.com/maps/dir/?api=1&destination=Korvelseweg+207%2C+5025+JE+Tilburg',
  reviews: 'https://www.google.com/maps/place/Wereld+Bike/@51.5507251,5.071879,17z/data=!4m6!3m5!1s0x47c6be471b5d4453:0x6e3ef36f6322acaa!8m2!3d51.5507251!4d5.071879!16s%2Fg%2F11bz2k3q1w',
  google: { score: '4,6', aantal: 127 },
  themeColor: '#0f1113',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Openingstijden volgens Google (index 0 = zondag). null = gesloten. [open, dicht] in uren.
export const tijden: { dag: string; open: number | null; dicht: number | null }[] = [
  { dag: 'Zondag', open: null, dicht: null },
  { dag: 'Maandag', open: 10, dicht: 18 },
  { dag: 'Dinsdag', open: 10, dicht: 18 },
  { dag: 'Woensdag', open: 10, dicht: 18 },
  { dag: 'Donderdag', open: 10, dicht: 18 },
  { dag: 'Vrijdag', open: 10, dicht: 18 },
  { dag: 'Zaterdag', open: 10, dicht: 17 },
];
export const uur = (h: number) => `${String(h).padStart(2, '0')}:00`;

// Letterlijk van Google (allemaal 5 sterren). Naam: voornaam + initiaal. Ingekort met "…".
export const reviews = [
  { naam: 'Dirk S.', tekst: 'Top service, ookal liep de fietsenmaker tegen meer werk aan dan aanvankelijk verwacht kostte het me geen cent extra en was mijn fiets de volgende dag keurig gerepareerd.' },
  { naam: 'Daan d.', tekst: 'Tweedehands fiets(en) gekocht en mijn oude fiets verkocht. Eerlijke prijs en top-service. Fijne eigenaar. Aanrader.' },
  { naam: 'Gerrit v.', tekst: 'Al jaren mijn vaste fietsenmaker. Repareert waar het kan, vervangt waar nodig. Altijd goede service. Ook goed voor het kopen van 2e hands fietsen voor een zacht prijsje' },
  { naam: 'Linda v.', tekst: 'Snelle service met een eerlijk advies. Voor een kleine beurt aan mijn fiets ook echt gedaan wat nodig was. Ik kom weer terug voor groot onderhoud' },
  { naam: 'Eetshop B.', tekst: 'Onze bezorgfiets supersnel gemaakt. Wat een top kerel.' },
  { naam: 'Joris w.', tekst: 'Hele aardige vent met veel kennis. Eerlijke prijs, goede en snelle service. Altijd goed geholpen vandaag ook weer.' },
];

// Letterlijk van Google, in de taal waarin ze geschreven zijn (5 sterren).
export const wereld = [
  { taal: 'English', naam: 'Neo C.', tekst: 'Good prices, great quality bikes for internationals. He also fixes bikes super fast, it’s a lifesaver.' },
  { taal: 'Polski', naam: 'Michał H.', tekst: 'Bardzo fajne miejsce, spory wybór w przystępnych cenach, profesjonalna obsługa' },
  { taal: 'English', naam: 'Aleks Z.', tekst: 'The guy was super polite, explained everything, affordable prices - just the best place to repair your bike!' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Wereld Bike, ik heb een vraag over mijn fiets.');
