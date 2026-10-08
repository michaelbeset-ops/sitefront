// Feiten (bekeken 8 oktober 2026), ruwe bronnen in ../../bron:
// - Google-bedrijfsprofiel: Panadero, Lunchrestaurant, Hoofdstraat 86, 3901 AV Veenendaal, gevestigd in Winkelcentrum De Scheepjeshof,
//   06 85511456, geen website, ter plaatse eten / afhalen / contactloos bezorgen, 4,6 uit 29 reviews.
//   Tijden: ma t/m za 11:00-21:00, zo 09:30-20:30.
// - Menu: letterlijk van hun menumuur (eigen foto's op Google, bron/gfoto/alle-07 en alle-01), zonder prijzen.
// - Instagram @panaderoveenendaal: "Belegde broodjes /kaddour grillworst / cheesecake bysam / Matcha/ ontbijts". TikTok @panaderoveenendaal.
// - Thuisbezorgd: thuisbezorgd.nl/menu/panadero-new (Hoofdstraat 86).
export const site = {
  naam: 'Panadero',
  vol: 'Panadero, lunchroom in Veenendaal',
  straat: 'Hoofdstraat 86',
  postcode: '3901 AV',
  plaats: 'Veenendaal',
  centrum: 'De Scheepjeshof',
  tel: '06 85 51 14 56',
  telHref: 'tel:+31685511456',
  wa: 'https://wa.me/31685511456',
  instagram: 'https://www.instagram.com/panaderoveenendaal/',
  tiktok: 'https://www.tiktok.com/@panaderoveenendaal',
  thuisbezorgd: 'https://www.thuisbezorgd.nl/menu/panadero-new',
  maps: 'https://www.google.com/maps/search/?api=1&query=Panadero+Hoofdstraat+86+Veenendaal',
  google: { score: '4,6', aantal: 29 },
  themeColor: '#161514',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// 0 = zondag. Van Google.
export const tijden: { dag: string; open: string; dicht: string }[] = [
  { dag: 'Zondag', open: '09:30', dicht: '20:30' },
  { dag: 'Maandag', open: '11:00', dicht: '21:00' },
  { dag: 'Dinsdag', open: '11:00', dicht: '21:00' },
  { dag: 'Woensdag', open: '11:00', dicht: '21:00' },
  { dag: 'Donderdag', open: '11:00', dicht: '21:00' },
  { dag: 'Vrijdag', open: '11:00', dicht: '21:00' },
  { dag: 'Zaterdag', open: '11:00', dicht: '21:00' },
];

// De menumuur, kolom voor kolom. Stijl = hoe de kop op de muur geschilderd is.
export type Groep = { id: string; kop: string; stijl: 'kader' | 'gestapeld' | 'script' | 'streep' | 'kaddour'; boven?: string; noot?: string; items: [string, string?][] };
export const kaart: Groep[] = [
  { id: 'ontbijt', kop: 'Ontbijt', stijl: 'kader', items: [['Marokkaans ontbijt', 'omelet naturel'], ['Marokkaans ontbijt', 'omelet tonijn of sucuk'], ['Marokkaans ontbijt', 'met sucuk of grillworst'], ['Marokkaans ontbijt', 'met sucuk en grillworst'], ['Panadero ontbijt']] },
  { id: 'belegd', kop: 'Broodjes', boven: 'Belegde', stijl: 'gestapeld', items: [['Broodje gezond'], ['Panadero omelet sucuk'], ['Eiersalade'], ['Filet américain'], ['Brie honing'], ['Brie pesto'], ['Tonijnsalade'], ['Tuna melt'], ['Zalm truffel'], ['Zalm pesto'], ['Gerookte kip truffel'], ['Gerookte kip avocado'], ['Gerookte kip parmezaan'], ['Kipfilet tuinkruiden'], ['Pastrami', 'warm vlees']] },
  { id: 'kaddour', kop: 'Grillworst', boven: 'Kaddour', stijl: 'kaddour', items: [['Broodje grillworst', 'naturel, kaas of pittig']] },
  { id: 'warm', kop: 'Broodjes', boven: 'Warme', stijl: 'gestapeld', items: [['Broodje hete kip'], ['Broodje kefta', 'rundergehakt'], ['Broodje braadworst']] },
  { id: 'panini', kop: "Panini's", stijl: 'streep', items: [['Panini kaas'], ['Panini kaas/sucuk'], ['Panini Italiaans'], ['Panini salami sucuk'], ['Panini kaas/kipfilet'], ['Panini grillworst'], ['Panini kip'], ['Panini kefta']] },
  { id: 'tosti', kop: "Tosti's", stijl: 'kader', items: [['Tosti kaas'], ['Tosti kipfilet'], ['Tosti kaas/kipfilet'], ['Tosti sucuk'], ['Tosti kaas/sucuk'], ['Tosti grillworst'], ['Tosti omelet kaas']] },
  { id: 'wraps', kop: 'Wraps', stijl: 'script', items: [['Wrap tonijn'], ['Wrap zalm', 'honingmosterd'], ['Wrap kip tenders'], ['Wrap kefta', 'rundergehakt'], ['Wrap menu', 'met patat en frisdrank naar keuze']] },
  { id: 'burgers', kop: 'Burgers', stijl: 'streep', items: [['UNO burger', 'kip of gehakt'], ['Smashburger'], ['Kipgehaktburger'], ['Burger menu', 'met friet en frisdrank naar keuze']] },
  { id: 'schotels', kop: 'Schotels', stijl: 'kader', items: [['Schotel kipfilet'], ['Schotel kefta', 'rundergehakt']] },
  { id: 'smoothies', kop: 'Smoothies', stijl: 'script', items: [["Jus d'orange"], ['Pink summer'], ['Coco loco'], ['Chia banana'], ['Green machine'], ['Avocado']] },
  { id: 'warmedranken', kop: 'Dranken', boven: 'Warme', stijl: 'gestapeld', items: [['Espresso'], ['Cappuccino'], ['Latte macchiato'], ['Muntthee'], ['Marokkaanse thee'], ['Warme chocolademelk'], ['Chai latte']] },
];

// Letterlijk van Google (stand 8 oktober 2026). Naam zoals op Google, achternaam als initiaal.
export const reviews = {
  grillworst: { naam: 'Martha v. Z.', tekst: 'Lekkere panini grillworst, warm,knapperig, vers. En erg lekker.' },
  saus: { naam: 'Riek v. d. M.', tekst: 'We hebben een tosti gegeten met heerlijke zelfgemaakt saus.' },
  gluten: { naam: 'Me Y.', tekst: 'Wat ik persoonlijk ook heel erg waardeerde, is dat er zo goed rekening werd gehouden met iemand die gluten niet kan eten.' },
  rij: [
    { naam: 'Achraf', tekst: 'Heerlijke broodjes en lekker knusse zaak!' },
    { naam: 'Mouadh', tekst: 'Heerlijk gegeten, vriendelijke bediening en een fijne sfeer.' },
    { naam: 'Riek v. d. M.', tekst: 'Vriendelijk personeel, schone zaak, rustige sfeer.' },
  ],
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hoi Panadero, ik wil graag iets bestellen.');
export const waVitrine = waMet('Hoi Panadero, welke cheesecakes staan er vandaag in de vitrine?');
