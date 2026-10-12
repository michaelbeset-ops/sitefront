// Feiten (bekeken 12 oktober 2026), bronnen in bron/:
// - Google-profiel (bron/google): Flinn Winkelcafe, Voorstraat 11, 4132 AM Vianen, 06 42895622, 4,4 uit 137 reviews,
//   "Gerund door een vrouwelijke ondernemer", website = Instagram. Tijden: ma gesloten, di-za 10:00-17:00, zo 11:00-17:00.
//   Over: accepteert reserveringen, groepen, kindermenu, honden toegestaan, rolstoeltoegankelijke ingang.
// - Eigen Canva-pagina flinnwinkelcafe.my.canva.site (bron/web): "Voorstraat 11 & 13 Vianen", di-za 10:00 tot 17:00,
//   zo 11:00 tot 17:00, info@bijflinn.nl, reserveren via WhatsApp, menukaart als Google Drive-PDF (Canva, 21 aug 2026).
// - bijflinn.nl: parkeerpagina van Antagonist (bron/web/bijflinn-nl-1440.png).
// - Instagram @flinnwinkelcafe (bron/insta): bio "Ontbijt • lunch • koffie • taart / Shop • high tea • borrel/events /
//   Hartje Vianen | Voorstraat 11 / Di - za 10-17". Laatste post 9 okt 2026.
// - Geen eigenaarsnaam in eigen bron (wel "Succes dames" in een review): geen naam getoond. Geen KvK gevonden.
export const site = {
  naam: 'Flinn',
  volledig: 'Flinn Winkelcafé',
  plaats: 'Vianen',
  straat: 'Voorstraat 11 & 13',
  postcode: '4132 AM',
  tel: '06 42 89 56 22',
  telHref: 'tel:+31642895622',
  wa: 'https://wa.me/31642895622',
  mail: 'info@bijflinn.nl',
  insta: 'https://www.instagram.com/flinnwinkelcafe/',
  route: 'https://www.google.com/maps/dir/?api=1&destination=Flinn+Winkelcafe%2C+Voorstraat+11%2C+4132+AM+Vianen',
  reviews: 'https://www.google.com/maps/place/Flinn+Winkelcafe/@51.9955329,5.0917303,17z/data=!4m6!3m5!1s0x47c663f6afffaf1b:0x7dee327abafd3a3d!8m2!3d51.9955329!4d5.0917303!16s%2Fg%2F11ghljv6mn',
  google: { score: '4,4', aantal: 137 },
  themeColor: '#2a1d17',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Openingstijden per weekdag (0 = zondag), in uren. null = gesloten.
export const tijden: Record<number, [number, number] | null> = {
  0: [11, 17], 1: null, 2: [10, 17], 3: [10, 17], 4: [10, 17], 5: [10, 17], 6: [10, 17],
};
export const dagNamen = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];
export const uur = (u: number) => `${Math.floor(u)}.${u % 1 ? '30' : '00'}`;

// Letterlijk van Google (alle 5 sterren). Naam: voornaam + initiaal. "…" = ingekort.
export const reviews = [
  { naam: 'Maartje', wanneer: 'een maand geleden', tekst: 'Erg leuk plekje in centrum Vianen. Zeer vriendelijke bediening, je kan er lekker ontbijten, lunchen of iets lekkers eten. Zowel gezellige plekjes binnen als buiten op terras. Aanrader!' },
  { naam: 'Wolter S.', wanneer: '2 maanden geleden', tekst: 'Wat een leuke en lekkere gelegenheid. Leuke mensen ook. … Zaak is recentelijk gekocht door enthousiaste eigenaren. Succes dames.' },
  { naam: 'Sanne M.', wanneer: '6 maanden geleden', tekst: 'Je wordt altijd vriendelijk ontvangen door het personeel en er hangt echt een gezellig huiskamergevoel. … Daarnaast is het ook nog eens een superleuke winkel met mooie cadeautjes en unieke items, perfect om even rond te neuzen.' },
  { naam: 'Bianca H.', wanneer: '2 maanden geleden', tekst: 'Superleuk plekje, mooi terras, leuke kaart voor lunch en vriendelijk personeel. Echt een aanrader' },
  { naam: 'Wendy S.', wanneer: '7 maanden geleden', tekst: "Heerlijke koffie's, thee en prachtige latte art! Vriendelijke personeel en lekker eten. Dat alles is een heerlijk ontspannen Scandinavische sfeer. Een aanrader!" },
  { naam: 'W. de B.', wanneer: '6 maanden geleden', tekst: 'Gezellige lunchroom in het centrum van Vianen. … Tosti’s zijn erg lekker en de espresso ook. Met allergie werd goed rekening gehouden.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hi Flinn! Ik heb een vraag.');
