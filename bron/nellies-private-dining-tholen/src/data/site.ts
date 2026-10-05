// Feiten (bekeken 5 oktober 2026):
// - Google-bedrijfsprofiel "Nellie's Private Dining" (Haute-cuisinerestaurant): Oudelandsedijk 6, 4691 RT Tholen,
//   06 34379436, 4,9 uit 20 reviews, € 70-100, vr/za 18:30-22:30, zo 16:00-21:00, ma t/m do gesloten,
//   websiteknop = nlcompanies.org (niet van hen), 14 foto's.
// - Facebook "Nellie's private dining" (facebook.com/NelliesTholen): 1,2 d. volgers, intro "Genieten van verrassende
//   gerechten in een huiselijke ambiance.", nelliesprivatedining@kpnmail.nl, 100% aanbevolen (17).
// - Instagram @nelliesprivatedining: 713 volgers, bio "Wij zijn een klein restaurant en serveren in een huiselijke ambiance
//   niet alledaagse gerechten. Reserveren? Bel..."
// - Infoplaatje (IG 23 mei 2026, FB 17 sep 2026): iedere week een nieuw vijfgangendiner, ingevuld door de chef, geen
//   menukaart, € 74,50 excl. drankjes, geen rekening meer met vegetarische/gluten/soja/lactose/steenvruchten/diabetes-
//   dieetwensen, start altijd 18.30u, geen pin: contant of Tikkie (QR).
// - FB 12 maart 2026: "ons huis het oudste huis van onze dijk", gebouwd in 1795, Schakerloo polder.
// - FB 15 april 2026: HUB-punt op hun dijk, 100 meter verderop; IG/FB 15 sep: met de HUB "geen bob nodig".
// - Internetbode (De Bode), 1 juni 2021: Paula, gestart januari 2020 in hun eigen huis, vernoemd naar haar moeder.
// Geen eigen website, geen KvK-nummer gevonden.
export const site = {
  naam: "Nellie's",
  vol: "Nellie's private dining",
  straat: 'Oudelandsedijk 6',
  postcode: '4691 RT',
  plaats: 'Tholen',
  tel: '06 34 37 94 36',
  telHref: 'tel:+31634379436',
  wa: 'https://wa.me/31634379436',
  mail: 'nelliesprivatedining@kpnmail.nl',
  instagram: 'https://www.instagram.com/nelliesprivatedining/',
  facebook: 'https://www.facebook.com/NelliesTholen/',
  maps: "https://www.google.com/maps/search/?api=1&query=Nellie's+Private+Dining+Oudelandsedijk+6+Tholen",
  reviews: "https://www.google.com/maps/search/?api=1&query=Nellie's+Private+Dining+Oudelandsedijk+6+Tholen",
  google: { score: '4,9', aantal: 20 },
  prijs: '€ 74,50',
  themeColor: '#353b40',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay). Tijden in minuten voor het script. Bron: Google-profiel.
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '', dicht: '', o: 0, d: 0 },
  { dag: 2, naam: 'Dinsdag', open: '', dicht: '', o: 0, d: 0 },
  { dag: 3, naam: 'Woensdag', open: '', dicht: '', o: 0, d: 0 },
  { dag: 4, naam: 'Donderdag', open: '', dicht: '', o: 0, d: 0 },
  { dag: 5, naam: 'Vrijdag', open: '18.30', dicht: '22.30', o: 1110, d: 1350 },
  { dag: 6, naam: 'Zaterdag', open: '18.30', dicht: '22.30', o: 1110, d: 1350 },
  { dag: 0, naam: 'Zondag', open: '16.00', dicht: '21.00', o: 960, d: 1260 },
];

// Letterlijk van Google (5 sterren, stand 5 oktober 2026). Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Natasja V.', wanneer: 'een jaar geleden', tekst: "Wij hebben zo genoten! Fantastische gerechten. De heerlijke huiselijke sfeer! Wij zijn verkocht aan Paula's kookkunst." },
  { naam: 'Debbie S.', wanneer: '2 jaar geleden', tekst: 'Thuiskomen! Elke week een nieuw verrassend menu. Vers, lokaal en ontzettend lekker. Hier wordt echt met passie en liefde gekookt, geserveerd en afgewassen 😉.' },
  { naam: 'Folkert Jan B.', wanneer: '5 maanden geleden', tekst: 'Geweldige avond gehad met super aardige eigenaresse en bediening. Eten was geweldig evenals de sfeer. Zeker voor herhaling vatbaar.' },
  { naam: 'J. Straten', wanneer: '3 jaar geleden', tekst: 'Een unieke plek om een avond te vullen met vrienden. Volop culinair genieten in een huiskamer ambiance. Wel ruim van te voren reserveren.' },
  { naam: 'Hans de R.', wanneer: 'een jaar geleden', tekst: 'We zijn hier diverse keren geweest. Iedere keer weer een feestje voor zowel gerechten, bediening als entourage.' },
  { naam: 'Miranda V.', wanneer: '2 jaar geleden', tekst: 'Een ongedwongen sfeer in een kleine setting. Wij waren hier met 6 pers. En vonden het geweldig!' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet("Hoi Paula! Ik wil graag reserveren bij Nellie's.");
