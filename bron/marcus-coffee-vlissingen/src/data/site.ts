// Feiten (bekeken 7 oktober 2026):
// - Google-bedrijfsprofiel "Marcus Coffee, Tea Blends & Lifestyle" (Espressobar): Bellamypark 52, 4381 CK Vlissingen,
//   06 14733738, 4,9 uit 455 reviews, € 10-20, di t/m za 09:00-17:00, zo en ma gesloten, ter plaatse eten en afhalen,
//   geen bezorging. Websiteknop = koffiebarmarcus.nl (coming-soon-pagina).
// - VVV (visitvlissingen.nl/spots/koffiebar-marcus): specialty coffees, verse theeblends, huisgemaakte taarten, baksels en
//   broodjes, ontbijt en lunch, uitzicht op het Bellamypark. Postcode daar 4381 CD en andere tijden (zie rapport): Google is leidend.
// - Facebook "Koffiebar Marcus" (facebook.com/Marcusvlissingen, 1,6 d. volgers): intro "Koffiebar Marcus is een koffie-en thee
//   huis bom vol gezelligheid en lekkernijen. Thee smaken die je nog nooit hebt geproefd en koffie die speciaal schonken is hoe
//   jij hem lekker vindt. Vergeet ook de huisgemaakte taartjes niet;)". Terras, afhalen. info@koffiebarmarcus.nl.
//   Posts: dinernight "op Marokkaanse wijze" (21 apr 2025), tajine, "We koken vers en serveren warm" (21 nov 2025),
//   dinernight 29 augustus 2026 met couscous van kip (26 aug 2026), reserveren via DM, WhatsApp of mail.
// - Menukaart (foto's van de kaart op Google): theeblends, detox thee, taart (salted caramel, dadeltaart, dagtaart),
//   toasted sandwiches, bruschetta's, wraps. Prijzen bewust niet getoond (FB 7 juli 2026: nieuwe menukaart).
export const site = {
  naam: 'Marcus',
  vol: 'Marcus Coffee, Tea Blends & Lifestyle',
  kort: 'Koffiebar Marcus',
  straat: 'Bellamypark 52',
  postcode: '4381 CK',
  plaats: 'Vlissingen',
  tel: '06 14 73 37 38',
  telHref: 'tel:+31614733738',
  wa: 'https://wa.me/31614733738',
  mail: 'info@koffiebarmarcus.nl',
  facebook: 'https://www.facebook.com/Marcusvlissingen',
  maps: 'https://www.google.com/maps/search/?api=1&query=Marcus+Coffee+Tea+Blends+Lifestyle+Bellamypark+52+Vlissingen',
  google: { score: '4,9', aantal: 455 },
  themeColor: '#12110f',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay). o/d in minuten voor het script. Bron: Google-profiel.
export const tijden = [
  { dag: 2, naam: 'Dinsdag', open: '09.00', dicht: '17.00', o: 540, d: 1020 },
  { dag: 3, naam: 'Woensdag', open: '09.00', dicht: '17.00', o: 540, d: 1020 },
  { dag: 4, naam: 'Donderdag', open: '09.00', dicht: '17.00', o: 540, d: 1020 },
  { dag: 5, naam: 'Vrijdag', open: '09.00', dicht: '17.00', o: 540, d: 1020 },
  { dag: 6, naam: 'Zaterdag', open: '09.00', dicht: '17.00', o: 540, d: 1020 },
  { dag: 0, naam: 'Zondag', open: '', dicht: '', o: 0, d: 0 },
  { dag: 1, naam: 'Maandag', open: '', dicht: '', o: 0, d: 0 },
];

// Theeblends die op beide menukaartfoto's staan (Google, foto's van de kaart). Omschrijving zoals op de kaart.
export const thee = [
  { naam: 'Marcus Houseblend', wat: 'saharathee van kruiden en bloemen' },
  { naam: 'Spicy sweet mango', wat: 'super infusie van mango, citroen en sinaasappel' },
  { naam: 'Dolce vita', wat: 'ananas, banaan en sinaasappel' },
  { naam: 'Japanse kersenbloesem', wat: '' },
  { naam: 'Muntthee Marcus', wat: 'munt, gember en citroen' },
  { naam: 'Verse granaatappel', wat: 'met munt, citroen en een vleugje cranberry' },
  { naam: 'Ginger energy', wat: 'verse gember, citroen en honing' },
];

// Letterlijk van Google (5 sterren, Nederlandstalig origineel, stand 7 oktober 2026). Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Roshni M.', tekst: 'Een tentje wat aanvoelt als een warme deken. De sfeer is ontspannen, het eten is goed. Goede koffie, ook niet geheel onbelangrijk.' },
  { naam: 'Erwin V.', tekst: 'Gezellige plek met vriendelijk personeel. Veel verschillende keuzes en vooral het assortiment house-blend thee is een absolute aanrader.' },
  { naam: 'Arno D.', tekst: 'Heerlijke msemmen en tosti’s. Alles versgemaakt met liefde. Koffies en huisgemaakte limonade zijn er ook echt goed.' },
  { naam: 'Sophie W.', tekst: 'Het ontbijt is perfect, helemaal zelfgemaakte hummus (die is zooo lekker), service is perfect en super vriendelijk.' },
  { naam: 'Nienke S.', tekst: 'Taartjes van de dag waren zalig. (…) De inrichting is bijzonder. De oude draag muur brengt sfeer.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hoi Marcus! Ik wil graag een tafel reserveren op … om … uur, met … personen.');
export const waDiner = waMet('Hoi Marcus! Ik wil graag een plek reserveren voor de volgende dinernight, met … personen.');
