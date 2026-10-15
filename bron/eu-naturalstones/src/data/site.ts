// Feiten (bekeken 15 oktober 2026), bronnen in bron/:
// - Eigen site eu-naturalstones.com (teksten bron/site/*.txt, beelden bron/site/img): import uit India, Italie en Spanje,
//   keukenbladen (graniet, marmer, terrazzo, keramiek, hardsteen, composiet), tegels, steenstrips, maatwerk, eigen monteurs,
//   eigen transport, showroom, mail "Wij reageren altijd binnen 24 uur", FAQ.
// - Google-profiel (bron/google): Tegelwinkel, 4,8 uit 44 reviews, tijden, telefoon. Geen website gekoppeld.
// - Instagram @eunaturalstones (bron/extern.txt): "Complete badkamer en wc renovaties", laatste post juli 2026.
// - KvK 77118448 (EU Naturalstones B.V., opgericht 2020; via Creditsafe-uittreksel, zie bron/extern.txt).
// - Geen eigenaarsnaam in eigen bron (alleen "Rohit" in reviews), dus niet als eigenaar getoond.
// - Ingenieur Herman de Grootweg 8 is een winkelpand (eigen gevelfoto), dus het volledige adres mag.
export const site = {
  naam: 'EU Naturalstones',
  bedrijf: 'EU Naturalstones B.V.',
  kvk: '77118448',
  plaats: 'Spijkenisse',
  straat: 'Ingenieur Herman de Grootweg 8',
  postcode: '3201 AB',
  tel: '06 40 85 68 23',
  telHref: 'tel:+31640856823',
  wa: 'https://wa.me/31640856823',
  mail: 'info@eu-naturalstones.com',
  insta: 'https://www.instagram.com/eunaturalstones/',
  route: 'https://www.google.com/maps/dir/?api=1&destination=Ingenieur+Herman+de+Grootweg+8%2C+3201+AB+Spijkenisse',
  reviews: 'https://www.google.com/maps/place/Eu+Naturalstones+B.V/@51.8545834,4.3306081,17z/data=!4m6!3m5!1s0x47c449897882d71d:0xd5921b146c463a5e!8m2!3d51.8545834!4d4.3306081!16s%2Fg%2F11j2yq3m02',
  google: { score: '4,8', aantal: 44 },
  themeColor: '#121110',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Openingstijden volgens Google (0 = zondag). null = gesloten.
export const tijden: { dag: string; kort: string; open: number | null; dicht: number | null }[] = [
  { dag: 'Zondag', kort: 'zo', open: null, dicht: null },
  { dag: 'Maandag', kort: 'ma', open: 9, dicht: 18 },
  { dag: 'Dinsdag', kort: 'di', open: 9, dicht: 18 },
  { dag: 'Woensdag', kort: 'wo', open: 9, dicht: 18 },
  { dag: 'Donderdag', kort: 'do', open: 9, dicht: 19 },
  { dag: 'Vrijdag', kort: 'vr', open: 9, dicht: 18 },
  { dag: 'Zaterdag', kort: 'za', open: 10, dicht: 17 },
];

// Letterlijk van Google (alle 5 sterren). Naam: voornaam + initiaal. "…" = ingekort.
export const reviews = [
  { naam: 'Roos L.', wanneer: '10 maanden geleden', tekst: 'Via onze aannemer (Tebar Group) zijn wij in contact gekomen met Rohit en hebben we een afspraak gemaakt in de showroom. Het klikte meteen en wat hebben we onze ogen uitgekeken. Zoveel keus aan tegels en hij geeft goed en eerlijk advies. We hebben onze tegels uitgekozen voor de badkamer, toilet en beneden vloer. We zijn ontzettend trots op wat er geleverd is!' },
  { naam: 'Taregh Z.', wanneer: '3 maanden geleden', tekst: 'Zij hebben bij ons zowel de voor- als achtertuin volledig aangelegd en daarnaast een prachtige betonnen schutting geplaatst. Alles is netjes, vakkundig en met oog voor detail uitgevoerd.' },
  { naam: 'Urmila D.', wanneer: '5 maanden geleden', tekst: 'Wij zijn erg tevreden over de badkamerverbouwing die Rohit en de medewerkers bij ons heeft uitgevoerd. Goede communicatie, afspraken na gekomen en netjes gewerkt.' },
  { naam: 'Arjan', wanneer: '3 maanden geleden', tekst: 'Je hebt van tevoren een verwachting hoe het gaat worden maar ik had niet verwacht dat het zo mooi zou worden. Dit zijn echt vaklui. Ze werken hard en netjes.' },
  { naam: 'Wartan', wanneer: '2 maanden geleden', tekst: 'Erg blij met onze nieuwe tuin. De heren hier hebben verstand van zaken en zijn altijd bereid mee te denken en te helpen.' },
];

// Veelgestelde vragen: letterlijk van hun eigen homepage (accordeon).
export const vragen = [
  { v: 'Wat onderscheidt EU Naturalstones van een ander tegelbedrijf?', a: 'Bij ons hoeft u niet verder te zoeken. Wij bieden u een compleet pakket aan, van vloer eruit halen tot tegels leggen. Alles wordt voor u geregeld.' },
  { v: 'Wat is de gemiddelde levertijd van tegels?', a: 'We importeren grotendeels onze eigen tegels, waardoor we beschikken over een uitgebreide voorraad. Daarnaast fungeren we als groothandel voor tegels, waarbij het merendeel direct leverbaar is uit onze voorraad.' },
  { v: 'Leggen jullie ook tegels?', a: 'Jazeker. U kunt de tegels los bij ons kopen, maar u kunt ook gebruikmaken van onze legservice.' },
  { v: 'Kan ik ook mijn oude vloer laten weghalen?', a: 'U kunt er ook voor kiezen dat wij uw oude vloer eruit halen.' },
  { v: 'Kan ik tegels ook op een later moment bijbestellen?', a: 'De tegels zijn, zolang wij ze in het assortiment hebben, na te bestellen.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo EU Naturalstones, ik heb een vraag over tegels of natuursteen.');
