// Feiten (bekeken 12 oktober 2026), bronnen in bron/:
// - Google-profiel: "Horrenspecialist BSR", Winkel voor horren en hordeuren, 5,0 uit 32 reviews (nieuwste 2 maanden oud),
//   geen website gekoppeld ("Website toevoegen"). Renesselaan 21, 5035 BC Tilburg: woonwijk, dus alleen de plaats tonen.
//   Tijden: ma-vr 07:00-17:00, za 08:00-17:00, zo gesloten. 06 40867682.
// - Eigen (onaffe) site horrenspecialist-bsr.nl, niet gekoppeld aan Google: 4 pagina's in bron/web/site-tekst.txt. Soorten horren,
//   kleuren, gepoedercoated aluminium, 2 jaar garantie op horren, rolluiken en screens 5 jaar, proces (24h, inmeten binnen een week,
//   offerte binnen een dag, levertijd 3 a 4 weken, montage binnen een week), eigen productie, eigen team, info@horrenspecialist-bsr.nl.
// - Instagram @horrenspecialist (bron/insta/posts.json): plisséhorren, hordeuren, inzethorren voor dakraam/badkamer/toilet.
// - Geen KvK-nummer en geen eigenaarsnaam in eigen bronnen: niet getoond.
export const site = {
  naam: 'Horrenspecialist BSR',
  plaats: 'Tilburg',
  tel: '06 40 86 76 82',
  telHref: 'tel:+31640867682',
  wa: 'https://wa.me/31640867682',
  mail: 'info@horrenspecialist-bsr.nl',
  insta: 'https://www.instagram.com/horrenspecialist/',
  reviews: 'https://www.google.com/maps/place/Horrenspecialist+BSR/@51.588689,4.97673,17z/data=!4m6!3m5!1s0xa2b4a737eadd61a9:0x4ad34e5ce9e5990a!8m2!3d51.588689!4d4.97673!16s%2Fg%2F11s76xs3qm',
  google: { score: '5,0', aantal: 32 },
  themeColor: '#0d1b2a',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Maandag = 1 ... zondag = 0. Bron: Google-profiel.
export const tijden: { dag: string; nr: number; open?: [number, number] }[] = [
  { dag: 'Maandag', nr: 1, open: [7, 17] },
  { dag: 'Dinsdag', nr: 2, open: [7, 17] },
  { dag: 'Woensdag', nr: 3, open: [7, 17] },
  { dag: 'Donderdag', nr: 4, open: [7, 17] },
  { dag: 'Vrijdag', nr: 5, open: [7, 17] },
  { dag: 'Zaterdag', nr: 6, open: [8, 17] },
  { dag: 'Zondag', nr: 0 },
];
export const tijdTekst = (o: [number, number]) => `${String(o[0]).padStart(2, '0')}:00 tot ${o[1]}:00`;

// Letterlijk van Google (alle 5 sterren), ingekort met "…". Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Gladys', wanneer: '5 maanden geleden', tekst: 'Ze werken zeer vakkundig en denken met je mee. Vanaf het eerste contact reageren ze snel en duidelijk, wat erg prettig is. … Je krijgt een hoogwaardig product en professionele plaatsing voor een eerlijke prijs.' },
  { naam: 'Alex H.', wanneer: '2 maanden geleden', tekst: 'Zochten een betaalbare oplossing voor een plissé hordeur. Uitstekend advies gekregen, dacht echt mee. Reageert snel en komt zijn woord na.' },
  { naam: 'Jan v.', wanneer: '2 maanden geleden', tekst: 'Zeer tevreden. Na opmeten werd er na 3 weken al contact opgenomen en de horren geplaatst. En goede prijs/ kwaliteit.' },
  { naam: 'Marij v.', wanneer: '5 maanden geleden', tekst: 'Er zijn vandaag twee hordeuren gemonteerd, ik ben er heel tevreden mee en snelle levering. Makkelijk afspraken kunnen maken en stipt op tijd. De montage was snel en vakkundig uitgevoerd.' },
  { naam: 'Els v.', wanneer: '3 maanden geleden', tekst: 'Omdat ik toen heel tevreden was over de prijs en service heb ik nu een hor voor mijn schuifpui laten plaatsen. Opnieuw heel tevreden.' },
  { naam: 'Hans B.', wanneer: '3 maanden geleden', tekst: 'Top adres. Kocht een plissehor voor de schuifpui. … Vakkundig is de hor op maat gemaakt en verzonden. … Vakwerk! Thanks!' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Horrenspecialist BSR, ik wil graag een inmeetafspraak voor horren.');
