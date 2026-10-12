// Feiten (bekeken 12 oktober 2026), bronnen in bron/:
// - Eigen site pinxos.nl via webarchief (laatste opnames juni 2026; bron/archief/*.txt). Nu "Suspended Domain" (bron/web/).
//   Teksten over concept, vitrine, locatie, crew (Carlos en Willemijn Casas, medeoprichters sinds oktober 2020), paella.
// - Menukaart 2025 van hun eigen site (bron/archief/img/menukaart-*.jpg), ook als menufoto op Google. Prijzen NIET getoond.
// - Google (bron/google): Tapasbar, 4,6 uit 533 reviews, 06 48583979, tijden (uren-google.txt), afhalen.
//   Google-knoppen "Tafel reserveren" en Website wijzen naar pinxos.nl (= Suspended Domain).
// - Wegwijzer-afstanden: van hun eigen foto (Google menu-foto, bron/google/menu/02.jpg).
export const site = {
  naam: 'Pinxos',
  plaats: 'Roosendaal',
  straat: 'Raadhuisstraat 62B',
  postcode: '4701 PV',
  tel: '06 48 58 39 79',
  telHref: 'tel:+31648583979',
  wa: 'https://wa.me/31648583979',
  insta: 'https://www.instagram.com/pinxosroosendaal/',
  fb: 'https://www.facebook.com/Pinxos-110229314068218',
  route: 'https://www.google.com/maps/dir/?api=1&destination=Pinxos%2C+Raadhuisstraat+62B%2C+4701+PV+Roosendaal',
  reviews: 'https://www.google.com/maps/place/Pinxos/@51.531802,4.4591571,17z/data=!4m6!3m5!1s0x47c4178ce8300fc3:0xf5ba36a93760299b!8m2!3d51.531802!4d4.4591571!16s%2Fg%2F11fvvyk_y8',
  google: { score: '4,6', aantal: 533 },
  themeColor: '#0f1f4d',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Openingstijden van Google (0 = zondag). Minuten sinds middernacht; dicht na middernacht = 24*60 + x.
export const tijden: { dag: string; open?: number; dicht?: number; afOpen?: number; afDicht?: number }[] = [
  { dag: 'Zondag', open: 15 * 60, dicht: 23 * 60, afOpen: 17 * 60, afDicht: 20 * 60 },
  { dag: 'Maandag' },
  { dag: 'Dinsdag' },
  { dag: 'Woensdag', open: 17 * 60, dicht: 23 * 60, afOpen: 17 * 60, afDicht: 20 * 60 },
  { dag: 'Donderdag', open: 17 * 60, dicht: 23 * 60, afOpen: 17 * 60, afDicht: 20 * 60 },
  { dag: 'Vrijdag', open: 17 * 60, dicht: 25 * 60, afOpen: 17 * 60, afDicht: 22 * 60 + 30 },
  { dag: 'Zaterdag', open: 15 * 60, dicht: 25 * 60, afOpen: 17 * 60, afDicht: 22 * 60 + 30 },
];
export const hm = (m: number) => `${String(Math.floor(m / 60) % 24).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`;

// Letterlijk van Google (alle 5 sterren). Naam: voornaam + initiaal. "…" = ingekort.
export const reviews = [
  { naam: 'Claudine L.', wanneer: '3 maanden geleden', tekst: 'Vanuit Gent speciaal naar Roosendaal gereden voor pintxos … en het was elke kilometer waard! … authentieke Spaanse sfeer, een gevulde vitrine met heerlijke pintxos aan een eerlijke prijs, en bovenal een warm en vriendelijk team.' },
  { naam: 'Stijn V.', wanneer: '2 maanden geleden', tekst: 'In de binnentuin is het net of je echt in Spanje bent, en zo smaakt het eten ook!' },
  { naam: 'Caroline K.', wanneer: '2 maanden geleden', tekst: 'De inrichting, de Kwaliteit van het eten (diversiteit menu, verse en smaakvolle combinaties en mooie presentatie) én de vriendelijke bediening maken dit meteen tot onze nieuwe favoriet!' },
  { naam: 'Natascha', wanneer: '3 maanden geleden', tekst: 'Super lekker eten, heerlijke sangria en een hele vriendelijke eigenaresse. Ze hebben heel veel op de kaart staan als je rekening moet houden met glutenvrij en lactosevrij eten.' },
  { naam: 'Annelieke W.', wanneer: 'een jaar geleden', tekst: 'Wij hebben hier onze allermooiste bruiloft gehad. … Alles was tot in de puntjes geregeld! Al het personeel was zo lief!' },
  { naam: 'Linda d.B.', wanneer: 'een jaar geleden', tekst: 'Buiten in ‘het gangetje’ kun je lekker zitten er heb je meteen een vakantiegevoel.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hola Pinxos! Ik heb een vraag.');
export const waFeest = waMet('Hola Pinxos! Ik wil graag iets vieren bij jullie. Wat zijn de mogelijkheden?\n\nWat: \nDatum: \nAantal personen: ');
