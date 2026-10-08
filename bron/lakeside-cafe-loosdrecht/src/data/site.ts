// Feiten (bekeken 8 oktober 2026), ruwe bronnen in ../../bron/google/feiten.txt en ../../bron/insta/:
// - Google-bedrijfsprofiel "Lakeside Café / Terras", lunchrestaurant, Veendijk 17d, 1231 PC Loosdrecht, 06 57289145,
//   4,9 uit 41 reviews, geen website ("Website toevoegen"). Tijden wo t/m zo 10:00-17:00, ma en di gesloten.
//   Over: afhalen, ter plaatse eten, ontbijt/brunch/lunch/dessert, cocktails, wijn, bier, vegetarisch, gratis wifi,
//   groepen, geschikt voor kinderen, pinnen/creditcard/contactloos.
// - Instagram @lakesidecafeloosdrecht (bio "Leukste borrelterras van Loosdrecht", "Oud Loosdrecht"). Post 1 okt 2026:
//   "tijdens de herfst- en wintermaanden geopend van woensdag t/m zondag, van 10.00 tot 17.00 uur", "gezond ontbijt",
//   "overheerlijke lunch", "goede koffie". Post 7 aug: "Stap in je bootje en vaar gezellig naar Lakeside!".
//   Post 20 jul: "Zon, water en een goed glas". Post 4 aug: Yuzu Spritz.
export const site = {
  naam: 'Lakeside Café',
  volledig: 'Lakeside Café / Terras',
  plaats: 'Loosdrecht',
  straat: 'Veendijk 17d',
  postcode: '1231 PC',
  tel: '06 57 28 91 45',
  telHref: 'tel:+31657289145',
  wa: 'https://wa.me/31657289145',
  insta: 'https://www.instagram.com/lakesidecafeloosdrecht/',
  google: { score: '4,9', aantal: 41, url: 'https://www.google.com/maps/search/?api=1&query=Lakeside+Caf%C3%A9+Terras+Veendijk+17d+Loosdrecht' },
  route: 'https://www.google.com/maps/dir/?api=1&destination=Lakeside+Caf%C3%A9+Veendijk+17d+1231+PC+Loosdrecht',
  themeColor: '#155fae',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// 0 = zondag. Tijden in minuten na middernacht (Google + eigen Instagram, herfst en winter).
export const tijden: { dag: string; kort: string; open?: [number, number] }[] = [
  { dag: 'Zondag', kort: 'zo', open: [600, 1020] },
  { dag: 'Maandag', kort: 'ma' },
  { dag: 'Dinsdag', kort: 'di' },
  { dag: 'Woensdag', kort: 'wo', open: [600, 1020] },
  { dag: 'Donderdag', kort: 'do', open: [600, 1020] },
  { dag: 'Vrijdag', kort: 'vr', open: [600, 1020] },
  { dag: 'Zaterdag', kort: 'za', open: [600, 1020] },
];
export const uur = (m: number) => `${Math.floor(m / 60)}:${String(m % 60).padStart(2, '0')}`;

// Wat er op tafel komt: alleen gerechten en drankjes die zij zelf noemen (Instagram, Google-menu)
// of die gasten letterlijk in hun Google-review noemen. Geen prijzen.
export const kaart = [
  { kop: 'Ontbijt en lunch', regels: ['Gezond ontbijt', 'Funky chicken', 'Broodje pulled chicken', 'Broodje kip met salade', 'Salade met kip', 'Tosti salami en kaas', 'Tosti met chips'] },
  { kop: 'Bij de koffie', regels: ['Carrot cake', 'Appeltaart', 'Bananencake', 'Latte macchiato', 'Cappuccino'] },
  { kop: 'Aan het water', regels: ['Yuzu Spritz', 'Cocktails', 'Wijn', 'Smoothies en shakes', 'Sapjes'] },
];

// Letterlijk van Google (5 sterren, stand 8 oktober 2026), ingekort met "…". Achternaam als initiaal.
export const reviews = {
  carel: { naam: 'Carel v. d. B.', tekst: 'Echt iets anders dan alle eetgelegenheden in Loosdrecht.' },
  bart: { naam: 'Bart v. d. L.', tekst: 'Een plek met een relaxte beach vibe, goede muziek en heerlijke cappucino’s. Goed bereikbaar, met de boot leg direct voor het terras aan.' },
  los: [
    { naam: 'Sandra W.', tekst: 'Geweldige combinatie van locatie, gastvrijheid, sfeer, muziek en lekker eten. Het gevoel krijgen dat je in het buitenland bent …' },
    { naam: 'Marc C.', tekst: 'Wat een lekkere rustige plek aan het water in een haven. Super gastvrije gastheer en lekker relaxte sfeer.' },
    { naam: 'Jim S.', tekst: 'In tijden niet zo lekker geluncht en goed bediend. Funky chicken is een must.' },
    { naam: 'Simone R.', tekst: 'Heerlijk geluncht, nette prijzen en ontzettend gastvrij! … Prachtig uitzicht ook, over de plassen met prachtige bootjes' },
  ],
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hoi Lakeside! Ik heb een vraag:');
