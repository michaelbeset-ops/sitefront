// Feiten (bekeken 6 oktober 2026). Ruwe bronnen in ../../bron.
// - Webshop vantim.nl: "Tim van Beijnen patisserie boulangerie", Hoogeinde 18, 5142 GC Waalwijk, 06-24523702, tim@vantim.nl,
//   KvK 97033162, "U kunt op dit moment bestellingen voor vrijdag plaatsen", betalen met iDEAL | Wero, logo "VAN TIM since 1978".
//   Voorwaarden: bezorgen in een beperkt gebied, vanaf 8.00 uur; betalen o.a. contant, iDEAL of aan de bezorger.
// - Google-profiel "Bakkerij Tim van Beijnen Patisserie Boulangerie": Hoogeinde 18a, 06 24523702, 4,3 uit 41 reviews,
//   openingstijden ma-vr 09:00-17:00, za 08:00-13:00; afhalen vr 08:30-13:00, za 08:00-11:00.
// - bakkerijvanbeijnen.nl (homepage live 6-10-2026, overige pagina's via archive.org jan/mrt 2026): drie generaties, Piet met de
//   broodkar, Hans (Loeffstraat, later Hoogeinde), Tim: patisserielabel Van Tim op recepten van patissier Gerard van Mil,
//   "Onze patisserie is uit duizenden te herkennen", tarte citroen "bekroond ... met goud", Tim en Wendy.
// - Instagram @tim_van_beijnen: 21-12-2025 "Is onze webshop voor u niet toegankelijk? Bestel dan telefonisch via 06-24523702";
//   30-12-2025 oliebollenkraam op het Bloemenoordplein, "met goud bekroonde oliebollen en knapperige appelbeignets".
export const site = {
  naam: 'Van Tim',
  vol: 'Tim van Beijnen patisserie boulangerie',
  straat: 'Hoogeinde 18a',
  postcode: '5142 GC',
  plaats: 'Waalwijk',
  tel: '06 24 52 37 02',
  telHref: 'tel:+31624523702',
  wa: 'https://wa.me/31624523702',
  mail: 'tim@vantim.nl',
  kvk: '97033162',
  webshop: 'https://www.vantim.nl/',
  instagram: 'https://www.instagram.com/tim_van_beijnen/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Bakkerij+Tim+van+Beijnen+Hoogeinde+18a+Waalwijk',
  google: { score: '4,3', aantal: 41 },
  themeColor: '#f4f2ee',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Afhaaltijden volgens het Google-profiel. dag: 0 = zondag. o/d in minuten voor het script.
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '', dicht: '', o: 0, d: 0 },
  { dag: 2, naam: 'Dinsdag', open: '', dicht: '', o: 0, d: 0 },
  { dag: 3, naam: 'Woensdag', open: '', dicht: '', o: 0, d: 0 },
  { dag: 4, naam: 'Donderdag', open: '', dicht: '', o: 0, d: 0 },
  { dag: 5, naam: 'Vrijdag', open: '8.30', dicht: '13.00', o: 510, d: 780 },
  { dag: 6, naam: 'Zaterdag', open: '8.00', dicht: '11.00', o: 480, d: 660 },
  { dag: 0, naam: 'Zondag', open: '', dicht: '', o: 0, d: 0 },
];

// Assortiment en prijzen letterlijk uit de webshop (6 oktober 2026). Prijs in centen.
export const gebak = [
  { naam: 'Bosvruchten praline', prijs: 385 },
  { naam: 'Karamel melkchocolade', prijs: 385 },
  { naam: 'Chocolade crème brûlée', prijs: 385 },
  { naam: 'Aardbeien vlaaitje', prijs: 385 },
  { naam: 'Slagroom/nogatine gebak', prijs: 350 },
  { naam: 'Chocoladebol', prijs: 315 },
];
export const brood = [
  { naam: "Tim's Wit", prijs: 360 },
  { naam: "Tim's Boerenbruin", prijs: 360 },
  { naam: "Tim's Blond Meergranen", prijs: 430 },
  { naam: "Tim's Spelt", prijs: 495 },
  { naam: 'Passie meergranen', prijs: 400 },
  { naam: 'Tijgerwit', prijs: 380 },
];
export const desem = [
  { naam: 'Desem Bauern', prijs: 580 },
  { naam: 'Desem Waldkorn, 600 gram', prijs: 465 },
  { naam: 'Rustiek landbrood, 400 gram gesneden', prijs: 460 },
  { naam: 'Desem spelt', prijs: 455 },
];
export const zoet = [
  { naam: 'Krentenbrood, 400 gram', prijs: 425 },
  { naam: 'Suikerbrood', prijs: 435 },
  { naam: 'Roomboter croissant', prijs: 130 },
  { naam: 'Appelflap', prijs: 210 },
  { naam: 'Worstenbroodje', prijs: 200 },
  { naam: 'Saucijzenbroodje', prijs: 250 },
];

// Letterlijk van Google (5 sterren), ingekort met "…" waar nodig. Naam: voornaam + initiaal.
export const reviews = {
  samba: { naam: 'Brian', tekst: 'Supervriendelijk personeel en heerlijke gebakjes! … Het choco samba gebakje smaakt hemels.' },
  brood: { naam: 'Johan M.', tekst: 'Het ruikt hier naar een echte bakkerij. … Het brood al is het een dag oud is super lekker en zit vol smaak.' },
  chocola: { naam: 'Jia V.', tekst: 'Echt super lekkere chocolade! En super aardige eigenaar.' },
  noten: { naam: 'Anna G.', tekst: 'Ik hou van broodjes met nootjes, ik geniet hiervan, elke week.' },
};

export const euro = (c: number) => (c ? `€ ${(c / 100).toFixed(2).replace('.', ',')}` : '');
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hoi Tim, ik wil graag iets bestellen.');
