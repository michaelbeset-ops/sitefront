// Feiten (bekeken 7 oktober 2026), ruwe bronnen in ../../bron:
// - Google-bedrijfsprofiel "Ongelooflijk Lekker🧀": kaaswinkel, Walstraat 83, 4381 GD Vlissingen, 06 15666088,
//   ma gesloten, di-vr 09:30-17:30, za 09:00-17:00, zo gesloten. Serviceoptie "Bezorging". Pin, creditcard, contactloos.
// - Eigen site ongelooflijklekker.nl (webarchief, mei 2022): "Kaas, noten en zuidvruchten", sinds 2015 eigen speciaalzaak in de
//   voormalige winkel van Smith Kaas, assortimentlijst, kaasschotels (particulieren en bedrijven, in overleg afzetten en platen
//   ophalen), kazen vers malen voor gratin/fondue, "Telefoon/whatsapp: 06 15 666 088", KvK 64002543,
//   "Houdt onze social media in de gaten voor mogelijk aangepaste openingsmomenten", zomers op markten en evenementen.
// - Facebook facebook.com/p/Ongelooflijk-lekker-100063648844324: intro "Ongelooflijk Lekkere kaas, noten en zuidvruchten.
//   Verkocht met passie en plezier. Wij verzorgen ook kaasbuffetten, cadeaumandjes en relatiegeschenken". Posts t/m ca. 3 okt 2026
//   (wafeltjes), 15 sep (truffelkaas), aug (Highlandgames Baarland), mei (jam Fruit Fiction, Ruyter Jaarmarkt, graskaas),
//   maart (cadeaubonnen; Rommeldiek Ellewoutsdijk).
export const site = {
  naam: 'Ongelooflijk Lekker',
  vol: 'Ongelooflijk Lekker, Vlissingen',
  straat: 'Walstraat 83',
  postcode: '4381 GD',
  plaats: 'Vlissingen',
  tel: '06 15 66 60 88',
  telHref: 'tel:+31615666088',
  wa: 'https://wa.me/31615666088',
  kvk: '64002543',
  facebook: 'https://www.facebook.com/p/Ongelooflijk-lekker-100063648844324/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Ongelooflijk+Lekker+Walstraat+83+Vlissingen',
  themeColor: '#1c201d',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay). o/d in minuten voor het script. Bron: Google-profiel (gelijk aan hun eigen site 2022).
export const tijden = [
  { dag: 2, naam: 'Dinsdag', open: '9.30', dicht: '17.30', o: 570, d: 1050 },
  { dag: 3, naam: 'Woensdag', open: '9.30', dicht: '17.30', o: 570, d: 1050 },
  { dag: 4, naam: 'Donderdag', open: '9.30', dicht: '17.30', o: 570, d: 1050 },
  { dag: 5, naam: 'Vrijdag', open: '9.30', dicht: '17.30', o: 570, d: 1050 },
  { dag: 6, naam: 'Zaterdag', open: '9.00', dicht: '17.00', o: 540, d: 1020 },
  { dag: 0, naam: 'Zondag', open: '', dicht: '', o: 0, d: 0 },
  { dag: 1, naam: 'Maandag', open: '', dicht: '', o: 0, d: 0 },
];

// Letterlijk van Google (5 sterren, stand 7 oktober 2026), ingekort met "…". Naam: voornaam + initiaal.
export const reviews = {
  dennis: { naam: 'Dennis B.', tekst: 'Jammer dat je maar 5 sterren kan geven, Henk verdient er 10. Leuke kerel, altijd in voor een goede grap.' },
  tom: { naam: 'Tom M.', tekst: 'Die camembert en graskaas superlekker. Vergeet niet z’n notenmixen mmmm verrijking van Vlissingen.' },
  michael: { naam: 'Michaël B.', tekst: 'Hele fijne eigenaar met goed advies en altijd super vriendelijk! Vaak een erg verrassend aanbod van seizoenskazen.' },
  martijn: { naam: 'Martijn D.', tekst: 'Altijd als we planken nodig hebben worden ze gemaakt. De kaas kan je altijd proeven.' },
  sylvie: { naam: 'Sylvie D.', tekst: '…kaasjes werden vacuüm verpakt. Heeeeerlijk truffel kaas, super vriendelijke bediening!' },
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo, ik heb een vraag over de winkel.');
