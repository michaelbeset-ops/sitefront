// Feiten (bekeken 7 oktober 2026). Geen eigen website: de websiteknop op Google wijst naar facebook.com/ohojcoffee.
// - Google-bedrijfsprofiel "Ohøj Coffee Roasting" (Koffiebranderij): Rijnlaan 27, 3522 BB Utrecht, 06 57821403, 4,9 uit 581,
//   honden toegestaan. Tijden: wo-vr 08:00-13:00, za-zo 09:00-13:00, ma-di gesloten. Review-thema's: bonen, barista, cappuccino,
//   espresso, filterkoffie, freddo, Ethiopian.
// - Facebook (facebook.com/ohojcoffee): intro "Espresso Bar and Specialty Coffee Roastery, located in the Riviernwijk district of
//   Utrecht", ohojcoffee@gmail.com, afhalen in winkel. Posts ondertekend "-kevin"/"Kevin" (eigenaarsnaam uit eigen bron).
//   19 aug 2025: "elke week op vrijdag, zaterdag en zondag geopend voor drankjes! Woensdag en donderdag blijven we open voor
//   bonen- en gemalen koffie voor thuisgebruik." 22 dec 2025: espresso beans + "lovely filter options". 30 mei 2025: "de winkel
//   blijft drukker dan ik ooit had kunnen dromen!" 13 juni 2026: laatste post.
// - Instagram @ohojcoffee (2.941 volgers): bio "Coffee roastery open for BEANS and/or GROUND COFFEE, Rijnlaan 27, Utrecht",
//   "W - F 8-13, Sat/Sun 9-13". Geen link naar een website. 1 okt 2023: Kees van der Westen Idrocompresso. "Always check google
//   maps for updated hours!"
// - Letterbord (foto op Google-profiel): ZWART, MELK, COLD, EXTRA met S/M/L. Prijzen bewust niet getoond (datum foto onbekend).
export const site = {
  naam: 'Ohøj',
  vol: 'Ohøj Coffee Roasting',
  straat: 'Rijnlaan 27',
  postcode: '3522 BB',
  plaats: 'Utrecht',
  wijk: 'Rivierenwijk',
  tel: '06 57 82 14 03',
  telHref: 'tel:+31657821403',
  wa: 'https://wa.me/31657821403',
  mail: 'ohojcoffee@gmail.com',
  facebook: 'https://www.facebook.com/ohojcoffee',
  instagram: 'https://www.instagram.com/ohojcoffee/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Oh%C3%B8j+Coffee+Roasting+Rijnlaan+27+Utrecht',
  google: { score: '4,9', aantal: 581 },
  themeColor: '#151515',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay). o/d in minuten voor het script. Tijden: Google-profiel. Bar: Facebook 19 aug 2025.
export const tijden = [
  { dag: 3, naam: 'Woensdag', open: '08.00', dicht: '13.00', o: 480, d: 780, bar: false },
  { dag: 4, naam: 'Donderdag', open: '08.00', dicht: '13.00', o: 480, d: 780, bar: false },
  { dag: 5, naam: 'Vrijdag', open: '08.00', dicht: '13.00', o: 480, d: 780, bar: true },
  { dag: 6, naam: 'Zaterdag', open: '09.00', dicht: '13.00', o: 540, d: 780, bar: true },
  { dag: 0, naam: 'Zondag', open: '09.00', dicht: '13.00', o: 540, d: 780, bar: true },
  { dag: 1, naam: 'Maandag', open: '', dicht: '', o: 0, d: 0, bar: false },
  { dag: 2, naam: 'Dinsdag', open: '', dicht: '', o: 0, d: 0, bar: false },
];

// Het letterbord in de zaak (Google-foto). m = welke van S/M/L op het bord een prijs hebben.
type Regel = { naam: string; m?: number[]; sub?: boolean };
export const bord: { kop: string; maten: boolean; regels: Regel[] }[] = [
  { kop: 'Zwart', maten: true, regels: [
    { naam: 'Espresso / Americano', m: [1, 1, 0] },
    { naam: 'Filter', m: [1, 0, 1] },
  ] },
  { kop: 'Melk', maten: true, regels: [
    { naam: 'Cortado', m: [1, 1, 0] },
    { naam: 'Cappuccino', m: [1, 1, 1] },
    { naam: 'Latte macchiato', m: [0, 1, 1] },
    { naam: 'met karamel', m: [0, 1, 1], sub: true },
    { naam: 'Flat white', m: [1, 0, 0] },
    { naam: 'Kinder“koffie”', m: [1, 1, 0] },
  ] },
  { kop: 'Cold', maten: false, regels: [
    { naam: 'Freddo' }, { naam: 'Piccolo' }, { naam: 'Espresso tonic' }, { naam: 'Frisdrank' }, { naam: 'Sap' },
  ] },
  { kop: 'Extra', maten: false, regels: [
    { naam: 'Shot' }, { naam: 'Oatly haver“melk”' },
  ] },
];

// Letterlijk van Google (5 sterren, Nederlandstalig origineel, stand 7 oktober 2026). Naam: voornaam + initiaal.
export const reviews = {
  groot: { naam: 'Hosheng F.', tekst: 'Wat een fijne plek! Een ontzettend lieve en gastvrije man, heerlijke koffie en echt prachtige service. Voor mij is dit de beste koffie van Utrecht!' },
  klein: [
    { naam: 'Luna-Elise', tekst: 'Fijn advies, goed assortiment, goeie sfeer (gezellig chaotisch), superlekkere drankjes (aanrader: freddo met de funky bonen!)' },
    { naam: 'Ellen M.', tekst: 'We halen hier altijd onze koffiebonen voor thuis. Altijd van goede kwaliteit en voor een goede prijs.' },
    { naam: 'Jurre V.', tekst: 'Aanrader! (…) Vraag naar de fancy Ethiopian koffie.' },
  ],
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hoi Kevin! Ik heb een vraag over jullie bonen: ');
