// Feiten (bekeken 15 oktober 2026), bronnen in bron/:
// - Google-profiel "Polak Parket", Hout- en laminaatvloerenleverancier, Wittemstraat 97, 5036 AL Tilburg (woonstraat: alleen
//   "Tilburg" tonen), 06 45060696, website-knop = facebook.com. 4,3 uit 31 (niet tonen). Tijden: ma-vr 08:00-17:00, za 08:00-13:00,
//   zo gesloten. Eigen omschrijving: "Wij zijn een familiebedrijf met 16 jaar ervaring ... Wij verkopen houten en parketvloeren,
//   evenals renoveren oude vloeren".
// - Werkspot (bron/werkspot/profiel.txt): eigen bedrijfsomschrijving (diensten letterlijk hieronder), "Nederlands Kampioen
//   Parketleggen 2025-2026", "gratis offerte", KVK 70678871, 4.7 uit 25 reviews. Eigen reactie ondertekend "Lukasz Polak".
// - Facebook: intro "Nederlands Kampion Parketleggen 2025 !!!", polakparket@gmail.com, post Nassaukade Amsterdam.
// - Instagram @polakparket bio: "NK Parketleggen 2023 5e Prijs / 2024 3e Prijs / 2025 1e Prijs", "bend en bies".
export const site = {
  naam: 'Polak Parket',
  eigenaar: 'Lukasz Polak',
  plaats: 'Tilburg',
  regio: 'Tilburg en omgeving',
  tel: '06 45 06 06 96',
  telHref: 'tel:+31645060696',
  wa: 'https://wa.me/31645060696',
  mail: 'polakparket@gmail.com',
  kvk: '70678871',
  insta: 'https://www.instagram.com/polakparket/',
  fb: 'https://www.facebook.com/profile.php?id=100063589930344',
  werkspot: 'https://www.werkspot.nl/profiel/polak-parket/reviews',
  google: 'https://www.google.com/maps/place/Polak+Parket/@51.5701641,5.0000151,17z/data=!4m6!3m5!1s0x47c6bdbf23251337:0x46844efc8725e1df!8m2!3d51.5701641!4d5.0000151!16s%2Fg%2F11s2q869l2',
  werkspotScore: { score: '4,7', aantal: 25 },
  themeColor: '#161513',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Maandag = 1 ... zondag = 0. Bron: Google-profiel.
export const tijden: { dag: string; nr: number; open: [number, number] | null }[] = [
  { dag: 'Maandag', nr: 1, open: [8, 17] },
  { dag: 'Dinsdag', nr: 2, open: [8, 17] },
  { dag: 'Woensdag', nr: 3, open: [8, 17] },
  { dag: 'Donderdag', nr: 4, open: [8, 17] },
  { dag: 'Vrijdag', nr: 5, open: [8, 17] },
  { dag: 'Zaterdag', nr: 6, open: [8, 13] },
  { dag: 'Zondag', nr: 0, open: null },
];

// Letterlijk (alleen ingekort met "…"). Google: 5 sterren. Werkspot: 5 van 5.
export const reviews = [
  { naam: 'Majkel C.', bron: 'Google', tekst: 'Wij zijn echt enorm tevreden over het werk dat Lucas van Polak Parket bij ons heeft geleverd. Vanaf de plaatsing van de parketvloer tot het schuren, behandelen, lakken en de afwerking met de mooie sierlijke plinten, alles is tot in de puntjes verzorgd. … Hij neemt de tijd, werkt heel nauwkeurig en streeft duidelijk naar perfectie.' },
  { naam: 'Ferry', plaats: 'Rilland', bron: 'Werkspot', tekst: 'Hij is heel precies, heel secuur, heel serieus in zijn werk. Het is niet zomaar goed, het moet voor hem heel goed zijn. … Het is een hele serieuze jongeman die liefde heeft voor het werken met hout.' },
  { naam: 'Wiktoria', bron: 'Google', tekst: 'De vloer ziet er prachtig uit en is met veel zorg en precisie gelegd. De samenwerking verliep van begin tot eind soepel: professioneel, stipt en met veel aandacht voor detail.' },
  { naam: 'Werkspot-gebruiker', plaats: 'Velp', bron: 'Werkspot', tekst: 'Hij heeft een bijzonder mooie houten visgraat vloer in ons jaren 30 huis gelegd, met dubbele bies in twee kleuren. Rondom twee openhaarden, netjes bij de serre deuren, en zelfs een ronde afwerking.' },
  { naam: 'Pieter V.', bron: 'Google', tekst: 'Lucas van Polak Parket heeft in ons huis in Eindhoven een houten vloer in visgraat patroon gelegd. We zijn zeer tevreden over het werk dat hij heeft geleverd. Zowel de prijs als kwaliteit waren top.' },
  { naam: 'Stella', plaats: 'Tilburg', bron: 'Werkspot', tekst: 'Lucas neemt de tijd om alles goed uit te leggen. Ze werken heel hard en gingen door tot zelfs de moeilijke (bijna onzichtbare) hoekjes ook perfect waren.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Lukasz, ik wil graag een offerte voor een houten vloer.');
