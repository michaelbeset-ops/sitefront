// Feiten (bekeken 5 oktober 2026):
// - Google-bedrijfsprofiel "Rosa" (Kledingwinkel): Burgstraat 10, 4201 AC Gorinchem, 06 12658901, 4,7 uit 20 reviews,
//   wo t/m za 11:00-17:00, ma/di/zo gesloten, websiteknop = facebook.com, 5 foto's, "Gerund door een vrouwelijke ondernemer".
// - Facebook "Rosa" (facebook.com/RosaGorinchem): Exclusieve kleding & curiosa, Boetiek, 6,4 d. volgers, 100% aanbevolen (46).
// - Instagram @rosa.curiosa: 1.771 volgers, bio "Vintage Bohemia Hippie Romantic clothing & accessories", link naar Facebook.
// - Posts 23 sep t/m 4 okt 2026: bestellen "via de app 06 12658901 of een PB", pakjes versturen, zusterwinkel Rosa's Dochter
//   in Dordrecht (@rosasdochter), in oktober open t/m vrijdag 16 oktober, daarna de rest van oktober dicht.
// Geen eigen website, geen KvK-nummer gevonden.
export const site = {
  naam: 'Rosa',
  vol: 'Rosa, exclusieve kleding & curiosa',
  straat: 'Burgstraat 10',
  postcode: '4201 AC',
  plaats: 'Gorinchem',
  tel: '06 12 65 89 01',
  telHref: 'tel:+31612658901',
  wa: 'https://wa.me/31612658901',
  instagram: 'https://www.instagram.com/rosa.curiosa/',
  facebook: 'https://www.facebook.com/RosaGorinchem/',
  dochter: 'https://www.instagram.com/rosasdochter/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Rosa+Burgstraat+10+Gorinchem',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Rosa+Burgstraat+10+Gorinchem',
  google: { score: '4,7', aantal: 20 },
  themeColor: '#1d1a22',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay). Tijden in minuten voor het script. Bron: Google-profiel.
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '', dicht: '', o: 0, d: 0 },
  { dag: 2, naam: 'Dinsdag', open: '', dicht: '', o: 0, d: 0 },
  { dag: 3, naam: 'Woensdag', open: '11.00', dicht: '17.00', o: 660, d: 1020 },
  { dag: 4, naam: 'Donderdag', open: '11.00', dicht: '17.00', o: 660, d: 1020 },
  { dag: 5, naam: 'Vrijdag', open: '11.00', dicht: '17.00', o: 660, d: 1020 },
  { dag: 6, naam: 'Zaterdag', open: '11.00', dicht: '17.00', o: 660, d: 1020 },
  { dag: 0, naam: 'Zondag', open: '', dicht: '', o: 0, d: 0 },
];

// Letterlijk van Google (5 sterren, stand 5 oktober 2026). Naam: voornaam + initiaal, of de getoonde profielnaam.
export const reviews = [
  { naam: 'Jessica G.', wanneer: 'een jaar geleden', tekst: 'Geweldige kledingwinkel! Rosa helpt je super fijn bij het vinden van kleding die echt bij je past. Het aanbod is groot en misschien wat overweldigend, maar daardoor is er voor iedereen wel iets moois te vinden.' },
  { naam: 'Marieke B.', wanneer: '6 jaar geleden', tekst: 'Geweldig leuke zaak en super eigenaresse! Denkt en kijkt echt met je mee. Parel van een winkel.' },
  { naam: 'Brigitte C.', wanneer: '2 jaar geleden', tekst: 'Hele leuke boho winkel. Veel keuze uit kleding met prachtige pareltjes ertussen. Neem er wel je tijd voor, want anders mis je een hoop.' },
  { naam: 'Jan N.', wanneer: '2 jaar geleden', tekst: 'Geweldige kleding, aardige eigenaresse die ondanks de veelheid van kleding precies wist wat bij elkaar paste. Grote klasse.' },
  { naam: 'JustKarin', wanneer: '2 weken geleden', tekst: 'Prachtige kleding, moeilijk kiezen! Met hulp van Rosa goed geslaagd.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hoi Rosa! Ik heb een vraag:');
