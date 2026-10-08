// Feiten (bekeken 8 oktober 2026):
// - Google-bedrijfsprofiel "Lunchroom Mirage" (Restaurant): Amsterdamsestraatweg 378, 3551 CW Utrecht, 06 34518928,
//   4,9 uit 52 reviews, € 10-20, ter plaatse eten, afhalen, bezorging, knop "Online bestellen". Geen website ("Website toevoegen").
//   Tijden: dinsdag t/m zondag 10:00-18:00, maandag gesloten. Hoofdfoto op Google: de gevel met "Opening soon" op het glas.
// - Instagram @lunchroommirage (435 volgers): "Di t/m za 10:00 - 18:00, Zo 10:00 - 18:00". Laatste post 19 mei 2026.
//   "Ook grote groepen mogelijk" (16 feb 2026), "Homemade walnut brownie" (17 mei 2026), "Banaan Caramel Matcha" (22 jan 2026).
// - Menukaart: foto's op Google (kaart van gasten + drankenkaart "Van eigenaar"). Prijzen bewust niet getoond (datum onbekend).
//   Op de kaart: "Onze koffiebonen zijn biologisch", "Havermelk of kokosmelk". Ontbijt 09:00 - 13:00 op de kaart.
// - Krijtbord op de bar (foto van eigenaar): "Vrijdag Special CousCous". Reviews noemen "de couscous op vrijdag".
// - Eigenaarsnaam staat nergens in hun eigen bronnen: niet genoemd.
export const site = {
  naam: 'Mirage',
  vol: 'Lunchroom Mirage',
  straat: 'Amsterdamsestraatweg 378',
  postcode: '3551 CW',
  plaats: 'Utrecht',
  tel: '06 34 51 89 28',
  telHref: 'tel:+31634518928',
  wa: 'https://wa.me/31634518928',
  instagram: 'https://www.instagram.com/lunchroommirage/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Lunchroom+Mirage+Amsterdamsestraatweg+378+Utrecht',
  google: { score: '4,9', aantal: 52 },
  themeColor: '#10302f',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay). o/d in minuten voor het script. Bron: Google-profiel en Instagram-bio.
export const tijden = [
  { dag: 2, naam: 'Dinsdag', open: '10.00', dicht: '18.00', o: 600, d: 1080 },
  { dag: 3, naam: 'Woensdag', open: '10.00', dicht: '18.00', o: 600, d: 1080 },
  { dag: 4, naam: 'Donderdag', open: '10.00', dicht: '18.00', o: 600, d: 1080 },
  { dag: 5, naam: 'Vrijdag', open: '10.00', dicht: '18.00', o: 600, d: 1080 },
  { dag: 6, naam: 'Zaterdag', open: '10.00', dicht: '18.00', o: 600, d: 1080 },
  { dag: 0, naam: 'Zondag', open: '10.00', dicht: '18.00', o: 600, d: 1080 },
  { dag: 1, naam: 'Maandag', open: '', dicht: '', o: 0, d: 0 },
];

// De kaart, overgenomen van de menukaartfoto's op Google (namen en omschrijvingen zoals op de kaart, zonder prijzen).
// Harira soep en Scrambled eggs: "Hoogtepunten" in het menu op Google.
export const kaart = [
  {
    kop: 'Ontbijt', noot: 'tot 13.00 uur',
    items: [
      { naam: 'Marokkaans ontbijt', wat: '2 eieren, olijven, la vache qui rit, stokbrood, verse jus d’orange en Marokkaanse thee of koffie' },
      { naam: 'Mirage ontbijt', wat: '2 eieren, olijven, la vache qui rit, ham, msemen, harcha, honing, stokbrood, verse jus en thee of koffie' },
      { naam: 'Msemen', wat: '2 stuks msemen met honing' },
      { naam: 'Granola bowl', wat: 'yoghurt met huisgemaakte granola en seizoensfruit' },
    ],
  },
  {
    kop: 'Soep & salades', noot: '',
    items: [
      { naam: 'Harira soep', wat: '' },
      { naam: 'Caesar salad', wat: 'kipstukjes, ei, Parmezaanse kaas, croutons' },
      { naam: 'Tonijnsalade', wat: 'huisgemaakte tonijnsalade, ei, komkommer, kappertjes' },
      { naam: 'Zalm salade', wat: 'zalm, avocado, ei, mosterd-dilledressing' },
    ],
  },
  {
    kop: 'Broodjes', noot: '',
    items: [
      { naam: 'Broodje gezond', wat: 'kaas, kalkoenham, ei, tomaat, komkommer, mayo' },
      { naam: 'Broodje caprese', wat: 'mozzarella, tomaat, pesto, pijnboompitten', veg: true },
      { naam: 'Broodje brie chutney', wat: 'brie, walnoot, uienchutney', veg: true },
      { naam: 'Tuna melt', wat: 'huisgemaakte tonijnsalade, jalapeños, cheddar' },
      { naam: 'Broodje pastrami avocado', wat: 'pastrami, ei, avocado, pestomayo' },
      { naam: 'Broodje carpaccio', wat: 'carpaccio, zongedroogde tomaat, Parmezaanse kaas, truffelmayo' },
      { naam: 'Broodje grillworst', wat: 'met huisgemaakte saus' },
      { naam: 'Scrambled eggs', wat: 'op vloerbrood' },
    ],
  },
  {
    kop: 'Erbij', noot: '',
    items: [
      { naam: 'Marokkaanse muntthee', wat: '' },
      { naam: 'Cappuccino', wat: 'ook met havermelk of kokosmelk' },
      { naam: 'IJskoffie caramel', wat: '' },
    ],
  },
];

// Letterlijk van Google (5 sterren, Nederlandstalig origineel, stand 8 oktober 2026). Naam: voornaam + initiaal.
export const reviews = {
  esra: { naam: 'Esra', tekst: 'Wat een fijne aanwinst voor Utrecht! Mirage heeft super lieve eigenaren, een schone en gezellige zaak en vooral heerlijke broodjes. Extra aanrader: de couscous op vrijdag, echt genieten.' },
  silva: { naam: 'Silva N.', tekst: 'Dankzij de verschillende zitgedeeltes zit je niet dicht op andere gasten, wat zorgt voor een rustige en comfortabele sfeer.' },
  silvaSoep: { naam: 'Silva N.', tekst: 'Dit keer genoten we van de Harira soep en een broodje grillworst met huisgemaakte saus. De soep was rijk van smaak, goed gevuld en duidelijk met zorg bereid.' },
  rida: { naam: 'Rida', tekst: 'Het eten is vers, goed op smaak en je merkt dat er met aandacht wordt gekookt. De porties zijn ruim en de prijzen zijn eerlijk.' },
  daphne: { naam: 'Daphne B.', tekst: 'Wat een fijne, schone en mooie plek om te ontbijten en te lunchen. Fijne mensen en er wordt veel zorg aan alles besteed.' },
  hanane: { naam: 'Hanane', tekst: 'De matcha en de broodjes pastrami en tuna melt waren heerlijk (…) Mooi interieur met oplaadpunten, echt aan alles is gedacht.' },
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hoi Mirage! Ik heb een vraag: ');
export const waBestel = waMet('Hoi Mirage! Ik wil graag iets bestellen om af te halen: ');
export const waGroep = waMet('Hoi Mirage! Wij willen graag met een groep komen lunchen op … om … uur, met … personen.');
export const waCouscous = waMet('Hoi Mirage! Staat er vandaag couscous op het bord?');
