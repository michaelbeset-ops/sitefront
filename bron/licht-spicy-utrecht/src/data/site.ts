// Feiten (bekeken 8 oktober 2026):
// - Google-profiel "Licht spicy" (Catering): Pahud de Mortangesdreef 256, 3562 AJ Utrecht (Overvecht, woonflat: op de site
//   alleen "Utrecht"), 06 19621119, 5,0 uit 148 reviews, websiteknop lichtspicy.nl.
// - Eigen site lichtspicy.nl (WordPress, 2016): welkom (Kavitha), neem een kijkje, menu, contact: licht.spicy@gmail.com,
//   Phone/WhatsApp 06 19 62 11 19 en 06 39 55 35 83. Wij gebruiken het nummer dat ook op Google staat.
// - Facebook op hun site is een persoonlijk profiel: niet gelinkt.
// Geen prijzen of acties tonen (de "actie" op hun site is verlopen).
export const site = {
  naam: 'Licht spicy',
  vol: 'Licht spicy',
  plaats: 'Utrecht',
  tel: '06 19 62 11 19',
  telHref: 'tel:+31619621119',
  wa: 'https://wa.me/31619621119',
  mail: 'licht.spicy@gmail.com',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Licht+spicy+Utrecht',
  google: { score: '5,0', aantal: 148 },
  themeColor: '#0f1d15',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Letterlijk van Google (5 sterren, stand 8 oktober 2026). Naam: voornaam + initiaal. Ingekort met "…".
export const reviews = [
  { naam: 'Arjan v. D.', wanneer: '3 maanden geleden', tekst: 'Wij organiseerden een diner met 75 gasten. Lichtspicy verzorgde het eten en dat was heel goed! Het eten is erg lekker, en alles liep helemaal op rolletjes.' },
  { naam: 'Joke', wanneer: '9 maanden geleden', tekst: 'Met 22 personen hebben we enorm genoten van de fantastische gerechten en hapjes, zoals tandoori broccoli, paneer butter masala, lam curry en samosa’s. Ruim voldoende eten, geweldige smaken en super fijne mensen met duidelijke passie voor hun vak.' },
  { naam: 'Eva K.', wanneer: '8 maanden geleden', tekst: 'Het contact voor het regelen van de catering verliep heel soepel en alles was goed geregeld. … Het zijn hele lieve mensen met hart voor de zaak! Ik raad ze zeker aan!' },
];

// Menukaart van lichtspicy.nl/home/menu (zonder prijzen). Spelling licht rechtgezet, beschrijvingen ingekort.
type G = [string, string];
export const menu: { kop: 'vlees' | 'veg'; naam: string; groepen: { titel: string; items: G[] }[] }[] = [
  { kop: 'vlees', naam: 'Vlees en vis', groepen: [
    { titel: 'Voorgerechten', items: [
      ['Chicken tikka', 'Kip zonder bot, gemarineerd met yoghurt, kashmiri-chili, gember en knoflook, met paprika en ui. Rooksmaak.'],
      ['Tandoori chicken', 'Fijn gekruide kip uit de Indiase tandoori-oven, met bot. Rooksmaak.'],
      ['Chilli chicken', 'Indo-Aziatisch: kip zonder bot uit de pan, in zoetzure, licht pittige saus met paprika.'],
      ['Chicken 65', 'Gefrituurd, met knoflook, gember, yoghurt, limoen en Indiase kruiden.'],
      ['Peper chicken', 'Zwarte en groene peper, kerrieblad, limoen, gember, knoflook en komijn.'],
      ['Garnalen fry', 'Tomaat, ui, kokos, anijs, cashewnoten en Indiase kruiden.'],
      ['Ei bajji', 'Gekookt ei met kikkererwtenbloem, gember, knoflook en peper.'],
      ['Ei puffs', 'Bladerdeeg gevuld met gekookt ei, ui, tomaat en Indiase kruiden.'],
    ] },
    { titel: 'Hoofdgerechten', items: [
      ['Vis curry', 'Ui, tomaat, mango, tamarinde, Indiase kruiden en kokos.'],
      ['Chicken curry', 'Ui, tomaat, kokos, anijs, cashewnoten, gember en knoflook.'],
      ['Lam curry', 'Ui, tomaat, kokos, anijs, komijn, gember en knoflook.'],
      ['Garnalen curry', 'Ui, tomaat, kokos en Indiase kruiden.'],
    ] },
  ] },
  { kop: 'veg', naam: 'Vegetarisch', groepen: [
    { titel: 'Voorgerechten', items: [
      ['Pakoda', 'Ui en witte kool in kikkererwtenbloem, gember, knoflook en rode peper.'],
      ['Aardappel- of aubergine bajji', 'Met erwtenmeel en Indiase kruiden, met kokoschutney.'],
      ['Aardappel ponda', 'Aardappelbolletjes met erwtenmeel, met kokos- of korianderchutney.'],
      ['Vadai', 'Hartige snack van linzen, groene peper en ui, met korianderchutney en sambar.'],
      ['Dhal soep', 'Stevige soep van gele linzen met groenten en kruiden.'],
    ] },
    { titel: 'Hoofdgerechten', items: [
      ['Palak paneer', 'Spinazie, tomaat, cashewnoten, kokos en Indiase kaas.'],
      ['Paneer butter masala', 'Romig, met Indiase kaas, tomaat, cashewnoten en kokos.'],
      ['Navarathana korma', 'Groenten met kokos, cashew, pistache, granaatappel, druiven en appel.'],
      ['Sambar', 'Gele linzen, aubergine, sperziebonen, wortel, tomaat en tamarinde.'],
      ['Vegetarische korma', 'Rijk en romig, met kokos, cashewnoten en anijs. Met kruidige aardappel.'],
      ['Channa masala', 'Mild, met kikkererwten en tomaat. Met geroerbakte wortel met mosterdzaad.'],
      ['Aardappel masala', 'Licht pittig, met ei, ui, tomaat, mosterdzaad en witte linzen.'],
      ['Kofta curry', 'Witte kool, kikkererwtenbloem, komijn, ui en tomaat.'],
    ] },
  ] },
];
export const rijst: G[] = [
  ['Kip biryani', 'Basmati, munt, gember, cashewnoten en groene peper.'],
  ['Vegetarische biryani', 'Basmati met groenten, cashewnoten, munt en gember.'],
  ['Ei biryani', 'Met munt, gember, cashewnoten en zonnebloempitten.'],
  ['Navarathna rijst', 'Gebakken basmati met groenten en noten.'],
  ['Indiase fried rice', 'Met kruidige kip, groenten, ei en salade.'],
];
export const toetjes: G[] = [
  ['Kheer', 'Vermicelli, volle melk, rozijnen en cashewnoten.'],
  ['Wortel halwa', 'Wortel, melk, suiker en amandelen.'],
  ['Kesari', 'Griesmeel, ghee en suiker.'],
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hoi Licht spicy! Ik heb een vraag over catering.');
