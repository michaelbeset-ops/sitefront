// Feiten (bekeken 7 oktober 2026), bronnen in bron/:
// - Google-bedrijfsprofiel "Grandcafé M'n Moeder" (Koffiehuis): Kerkstraat 33a, 4141 AT Leerdam, 06 57339222, 4,3 uit 295
//   (score bewust NIET getoond), € 10-20, ter plaatse eten en afhalen. Tijden: ma 15-20, di-wo 10-20, do 10-22, vr-za 10-01, zo dicht.
// - Eigen site grandcafemnmoeder.nl (onder de PHP-fouten): "Het gezelligste adres van de stad!", intro van John Vuurens (koffie met
//   gebak, drankje met borrelhapje, kleine maar verrassende menukaart, terras, bedrijfsfeesten of recepties). Over ons: "Voor groepen
//   stellen we graag een speciaal lunchmenu samen. (...) Ook bedrijven maken regelmatig gebruik van onze lunches." Broodje bal
//   M'n Moeder (gehaktbal uit eigen keuken), pittige kip, kroketten. Prijzen daar zijn van ca. 2020: niet getoond.
// - Huidige lunchkaart (foto van de kaart op Google): Lunchspecials 11.30-16.30, soep van de dag (M'n Moeders choice), salades
//   gerookte zalm en geitenkaas, uitsmijters, tosti ham/kaas, spicy tosti chorizo en cheddar, twee kroketten, broodje bal.
// - Facebook facebook.com/cafemnmoeder: intro "Kom genieten van onze heerlijke appeltaart, lunch of 1 van onze speciale biertjes."
//   Terras aanwezig. johnvuurens@hotmail.com. Juni 2026: WK-avonden, reserveren via 06-57339222.
// - Instagram @grandcafemnmoeder: Keek of the day, Lunch, feestjes, Borrel, Speciaalbier, Cocktails.
export const site = {
  naam: "M'n Moeder",
  vol: "Grandcafé M'n Moeder",
  straat: 'Kerkstraat 33a',
  postcode: '4141 AT',
  plaats: 'Leerdam',
  tel: '06 57 33 92 22',
  telHref: 'tel:+31657339222',
  wa: 'https://wa.me/31657339222',
  mail: 'johnvuurens@hotmail.com',
  facebook: 'https://www.facebook.com/cafemnmoeder',
  instagram: 'https://www.instagram.com/grandcafemnmoeder/',
  maps: "https://www.google.com/maps/search/?api=1&query=Grandcaf%C3%A9+M'n+Moeder+Kerkstraat+33a+Leerdam",
  themeColor: '#1b1411',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay). o/d in minuten; d > 1440 = na middernacht. Bron: Google-profiel.
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '15.00', dicht: '20.00', o: 900, d: 1200 },
  { dag: 2, naam: 'Dinsdag', open: '10.00', dicht: '20.00', o: 600, d: 1200 },
  { dag: 3, naam: 'Woensdag', open: '10.00', dicht: '20.00', o: 600, d: 1200 },
  { dag: 4, naam: 'Donderdag', open: '10.00', dicht: '22.00', o: 600, d: 1320 },
  { dag: 5, naam: 'Vrijdag', open: '10.00', dicht: '01.00', o: 600, d: 1500 },
  { dag: 6, naam: 'Zaterdag', open: '10.00', dicht: '01.00', o: 600, d: 1500 },
  { dag: 0, naam: 'Zondag', open: '', dicht: '', o: 0, d: 0 },
];

// Lunchkaart: alleen gerechten die op de huidige kaart staan (foto op Google), Nederlandse namen zoals op hun eigen site.
export const lunch = [
  { naam: 'Soep van de dag', wat: "M'n Moeders keuze, met brood en boter" },
  { naam: 'Broodje bal', wat: 'gehaktbal uit eigen keuken' },
  { naam: 'Salade gerookte zalm', wat: 'zongedroogde tomaatjes, rode ui, kappertjes, honing-mosterd' },
  { naam: 'Salade geitenkaas', wat: 'zongedroogde tomaatjes, rode ui, walnoten, honing-mosterd' },
  { naam: 'Twee kroketten', wat: 'met brood' },
  { naam: 'Uitsmijter', wat: 'ham, kaas of bacon, op wit of bruin' },
  { naam: 'Tosti', wat: 'ham en kaas' },
  { naam: 'Pittige tosti', wat: 'chorizo en cheddar' },
];

// Letterlijk van Google (stand 7 oktober 2026). Naam: voornaam + initiaal. Alleen positieve reviews.
export const reviews = {
  koffie: { naam: 'JM V.', tekst: 'M’n Moeder verdient voor de uitstekende koffie 5 sterren. (…) Best acceptabel, maar nergens zo goed als bij M’n Moeder.' },
  tosti: { naam: 'Léonard v.', tekst: 'Een van de dames gaf ons een tip: probeer eens onze pittige tosti. Dat was een goede aanrader: wij hebben ervan genoten!' },
  terras: { naam: 'Tom F.', tekst: 'Prima terrasje in hartje centrum. Cappuccino is prima en lekker chocolaatje als verrassing erbij maakt het helemaal af!' },
  barman: { naam: 'Jan L.', tekst: 'Leuk cafe met hele vriendelijke barman' },
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet("Hoi M'n Moeder! Ik wil graag een tafel reserveren op … om … uur, met … personen.");
