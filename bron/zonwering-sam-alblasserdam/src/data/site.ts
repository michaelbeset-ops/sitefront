// Feiten (bekeken 8 oktober 2026), ruwe bronnen in ../../bron:
// - sam-zonwering.nl (alle pagina's in bron/web/alle-paginas.txt): Ruigenhil 58, 2952 AR Alblasserdam, 06 11 09 25 90,
//   info@sam-zonwering.nl. "Sterk in zonwering". Leveren en monteren van zonwering en raamdecoratie op maat, binnen en buiten,
//   montage, onderhoud en reparaties. 24 uur bereikbaar voor storingen en reparaties, ook in het weekend. Alle losse onderdelen
//   verkrijgbaar. Inclusief gratis meten / gratis werkopname met advies. Voor offertes telefonisch contact.
// - BAG: Ruigenhil 58 = industriefunctie (bedrijfsadres), dus straat mag getoond worden.
// - Google-bedrijfsprofiel "Montage- en Zonweringsbedrijf Sam": 4,8 uit 26 reviews, nieuwste 2 maanden oud.
//   Openingstijden ma t/m vr 08:00-18:00, za en zo gesloten. Geen eigenaarsreacties, geen "Van eigenaar"-foto's.
// - Eigenaarsnaam: niet in eigen bron (alleen "Sam" in reviews en bedrijfsnaam); niet als persoon gebruikt.
export const site = {
  naam: 'Sam Zonwering',
  volledig: 'Montage- en Zonweringsbedrijf Sam',
  straat: 'Ruigenhil 58',
  postcode: '2952 AR',
  plaats: 'Alblasserdam',
  tel: '06 11 09 25 90',
  telHref: 'tel:+31611092590',
  wa: 'https://wa.me/31611092590',
  mail: 'info@sam-zonwering.nl',
  maps: 'https://www.google.com/maps/search/?api=1&query=Montage-+en+Zonweringsbedrijf+Sam+Ruigenhil+58+Alblasserdam',
  google: { score: '4,8', aantal: 26 },
  themeColor: '#16181b',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Google, stand 8 oktober 2026. 0 = zondag.
export const tijden: [string, string | null][] = [
  ['Zondag', null], ['Maandag', '08:00 - 18:00'], ['Dinsdag', '08:00 - 18:00'], ['Woensdag', '08:00 - 18:00'],
  ['Donderdag', '08:00 - 18:00'], ['Vrijdag', '08:00 - 18:00'], ['Zaterdag', null],
];

// Letterlijk van Google (stand 8 oktober 2026), ingekort met "…". Achternaam als initiaal.
export const reviews = {
  jaap: { naam: 'Jaap de G.', tekst: 'Ze hadden ons echt een dure vervanging kunnen “aansmeren” maar ze gaven ons een topadvies zonder een rekening te sturen.' },
  bouwman: { naam: 'R. Bouwman', tekst: 'De mannen van Sam hebben mooi werk afgeleverd door het doek te vervangen van mijn zonwering. Snel en vakkundig!' },
  karim: { naam: 'Karim M.', tekst: 'Sam heeft ons huis aan de voor en achterkant voorzien van rolluiken en zonwering! … De jongens die alles komen monteren ook heel netjes en gaan erg goed te werk.' },
  natascha: { naam: 'Natascha v.d. P.', tekst: 'Heeft onze rolluiken en scherm mooie compleet naar wens geleverd en gemonteerd. Goed advies ook.' },
  sem: { naam: 'Sem N.', tekst: 'Heeft mij enorm goed geholpen met een reparatie aan mijn luifel op een benauwd moment. … Ondanks dat de luifel niet bij hem vandaan komt heeft hij toch bijzonder goed geholpen!' },
  aad: { naam: 'Aad de K.', tekst: 'Sam heeft met zijn team mijn complete huis voorzien van 8 rolluiken en 1 enorm groot zonnescherm … Sam en team,super klus geklaard!!' },
  fenna: { naam: 'Fenna B.', tekst: 'Hij denkt goed met je mee en legt je duidelijk uit waar je op moet letten. Ook de vouwgordijnen die we hebben gekozen zijn prachtig.' },
  sonja: { naam: 'Sonja L.', tekst: 'Goede service, komt bij je thuis alles opmeten en gelijk een prijs besproken. Kundige werknemers die alles snel en secuur ophangen.' },
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo, ik heb een vraag over zonwering.');
