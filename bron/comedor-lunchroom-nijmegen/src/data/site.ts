// Feiten (bekeken 5 oktober 2026):
// - comedorlunchroom.nl (WordPress.com): Vestigingen-pagina met beide adressen, telefoonnummers en elke dag 10:00-22:00.
//   Over ons: Amin Bouraarassi en Gokhan Caliskan, Klarendalse jeugdvrienden, opleiding jeugdzorg, Arnhem (Johan de Wittlaan 271)
//   midden in de coronacrisis geopend op 13 juli; vers vlees, volgens geheim recept gekruid; elk gerecht ook als schotel.
//   Menu: twee afbeeldingen (geüpload februari 2026), volledig overgenomen hieronder (bron/site/2026_02_1.jpg en _2.jpg).
// - Google Nijmegen: Van Welderenstraat 77, 6511 ME Nijmegen, 06 17331302, 4,9 uit 178 reviews, ma-zo 10:00-22:00.
// - Google Arnhem: Johan de Wittlaan 271, 6828 XM Arnhem, 06 12110222, 4,8 uit 212 reviews, ma-zo 10:00-22:00, € 10-20.
// - Instagram @comedorlunchroom: 2.880 volgers, bio "Ontbijt • Lunch • Diner, Arnhem & Nijmegen, Elke dag 10:00 t/m 22:00u".
//   Post 6 feb 2023: "Nederlandse Horeca Prijzen 2022, Winnaar gemeente Arnhem, categorie Lunchroom / Broodjeszaak".
// Het in de opdracht genoemde 06 22955171 is nergens bij Comedor gevonden; Arnhem = 06 12110222 (site + Google).
export const site = {
  naam: 'Comedor Lunchroom',
  kort: 'Comedor',
  instagram: 'https://www.instagram.com/comedorlunchroom/',
  facebook: 'https://www.facebook.com/comedorlunchroom',
  themeColor: '#17221f',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

export type Vestiging = {
  id: 'nijmegen' | 'arnhem';
  plaats: string;
  straat: string;
  postcode: string;
  tel: string;
  telHref: string;
  wa: string;
  maps: string;
  google: { score: string; aantal: number };
};

export const vestigingen: Vestiging[] = [
  {
    id: 'nijmegen', plaats: 'Nijmegen', straat: 'Van Welderenstraat 77', postcode: '6511 ME',
    tel: '06 17 33 13 02', telHref: 'tel:+31617331302', wa: 'https://wa.me/31617331302',
    maps: 'https://www.google.com/maps/search/?api=1&query=Comedor+Lunchroom+Van+Welderenstraat+77+Nijmegen',
    google: { score: '4,9', aantal: 178 },
  },
  {
    id: 'arnhem', plaats: 'Arnhem', straat: 'Johan de Wittlaan 271', postcode: '6828 XM',
    tel: '06 12 11 02 22', telHref: 'tel:+31612110222', wa: 'https://wa.me/31612110222',
    maps: 'https://www.google.com/maps/search/?api=1&query=Comedor+Lunchroom+Johan+de+Wittlaan+271+Arnhem',
    google: { score: '4,8', aantal: 212 },
  },
];
export const nij = vestigingen[0];

// Beide zaken: elke dag 10:00-22:00 (eigen site, Google, Instagram-bio). 0 = zondag.
export const tijden = [1, 2, 3, 4, 5, 6, 0].map((dag) => ({
  dag, naam: ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'][dag], open: '10.00', dicht: '22.00', o: 600, d: 1320,
}));

// Menukaart, letterlijk van hun eigen kaart (februari 2026). p = prijs in euro, s = pittig (pepertje op hun kaart).
type Item = { n: string; p: string; o?: string; s?: boolean };
type Groep = { t: string; noot?: string; items: Item[] };
export const kaart: { id: string; tab: string; groepen: Groep[] }[] = [
  { id: 'ontbijt', tab: 'Ontbijt', groepen: [
    { t: 'Ontbijt', items: [
      { n: 'Marokkaans ontbijt', p: '11', o: 'Twee eieren met La vache qui rit, olijven, brood en Marokkaanse thee of verse jus d’orange' },
      { n: 'Ontbijt met kip', p: '16,50' }, { n: 'Ontbijt met grillworst', p: '15' }, { n: 'Ontbijt met kalfsvlees', p: '16,50' }, { n: 'Ontbijt met gamba’s', p: '16,50' },
      { n: 'Marokkaans ontbijt deluxe', p: '13,50', o: 'Twee eieren met La vache qui rit, olijven, brood en Marokkaanse thee of verse jus d’orange, msemmen naar keuze (m.u.v. kip en hete kip) en een yoghurt toetje' },
      { n: 'Ontbijt deluxe met kip', p: '18,50' }, { n: 'Ontbijt deluxe met grillworst', p: '16' }, { n: 'Ontbijt deluxe met kalfsvlees', p: '18,50' }, { n: 'Ontbijt deluxe met gamba’s', p: '18,50' },
    ] },
    { t: 'Bowl & ei', items: [
      { n: 'Ontbijtbowl', p: '9', o: 'Keuze uit yoghurt met muesli en vers fruit, smoothiebowl of huisgemaakte kwark' },
      { n: 'Omelet', p: '9' }, { n: 'Omelet met kaas', p: '9,50' }, { n: 'Extra ei', p: '1,50' },
    ] },
    { t: 'Marokkaanse puntbroodje', items: [
      { n: 'Gezond', p: '5' }, { n: 'Kaas', p: '4,50' }, { n: 'Ei', p: '5' }, { n: 'Tonijn', p: '4,75' }, { n: 'Chatar pikant', p: '5', s: true },
    ] },
  ] },
  { id: 'broodjes', tab: 'Broodjes', groepen: [
    { t: 'Broodjes & wraps', noot: 'Met patat', items: [
      { n: 'Kipfilet', p: '11', o: 'Gekruide stukjes kipfilet met huisgemaakte kipkerriesaus' },
      { n: 'Hete kipfilet', p: '11', o: 'Heet gekruide stukjes kipfilet', s: true },
      { n: 'Shoarma (kip/kalkoen)', p: '11', o: 'Reepjes kip- of kalkoenshoarma' },
      { n: 'Kalfsvlees', p: '12,50', o: 'Gekruide stukjes kalfsvlees' },
      { n: 'Kefta (kalfs/kip)', p: '12', o: 'Gekruide kalfs- of kipgehakt' },
      { n: 'Merguez worstjes (rund/kip)', p: '12', o: 'Gekruide runder- of kipworstjes' },
      { n: 'Gamba’s', p: '12', o: 'Gemarineerde gamba’s' },
      { n: 'Mix', p: '13', o: 'Keuze uit 2 soorten vlees' },
    ] },
    { t: 'Bocadillos', noot: 'Gevuld met salade en patat', items: [
      { n: 'Kalfsvlees', p: '10' }, { n: 'Tonijn', p: '8,50' }, { n: 'Kip', p: '9' }, { n: 'Hete kip', p: '9,50', s: true },
      { n: 'Kefta (gehakt)', p: '9,50' }, { n: 'Garnalen', p: '10' }, { n: 'Merguez worstjes (rund/kip)', p: '10' },
    ] },
    { t: 'Panini’s', noot: 'Met kaas, salade en andalousesaus', items: [
      { n: 'Panini kip', p: '8' }, { n: 'Panini kipkerrie', p: '8' }, { n: 'Panini shoarma', p: '8' }, { n: 'Panini tonijn', p: '8' },
      { n: 'Panini gamba', p: '8,50' }, { n: 'Panini kalf', p: '8,50' }, { n: 'Panini mix', p: '9', o: 'Keuze uit 2 soorten vlees' },
    ] },
  ] },
  { id: 'schotels', tab: 'Kapsalon & schotel', groepen: [
    { t: 'Kapsalon', noot: 'Met salade en gesmolten kaas', items: [
      { n: 'Kipfilet', p: '13,50', o: 'Gekruide stukjes kipfilet' },
      { n: 'Hete kipfilet', p: '13,50', o: 'Heet gekruide stukjes kipfilet', s: true },
      { n: 'Shoarma (kip/kalkoen)', p: '13,50' }, { n: 'Kalfsvlees', p: '14,50' }, { n: 'Kefta (kalfs/kip)', p: '14' },
      { n: 'Merguez worstjes (rund/kip)', p: '13,50' }, { n: 'Gamba’s', p: '13,50' },
      { n: 'Kapsalon mix', p: '16', o: 'Keuze uit 2 soorten vlees' },
    ] },
    { t: 'Schotel', noot: 'Met salade en patat', items: [
      { n: 'Kipfilet', p: '16' }, { n: 'Hete kipfilet', p: '16', s: true }, { n: 'Shoarma (kip/kalkoen)', p: '16' },
      { n: 'Kalfsvlees', p: '18' }, { n: 'Kefta (kalfs/kip)', p: '16' }, { n: 'Merguez worstjes (rund/kip)', p: '16' }, { n: 'Gamba’s', p: '18' },
      { n: 'Schotel mix 2 soorten', p: '19' }, { n: 'Schotel mix 3 soorten', p: '21' }, { n: 'Schotel mix 4 soorten', p: '23' },
    ] },
  ] },
  { id: 'burgers', tab: 'Burgers & tosti’s', groepen: [
    { t: 'Burgers', noot: 'Met cheddar, sla, andalousesaus en patat', items: [
      { n: 'Hamburger', p: '11,50', o: 'Huisgemaakte kalfsgehakt' }, { n: 'Kipburger', p: '11,50', o: 'Huisgemaakte kipgehakt' },
      { n: 'Crispy burger', p: '11,50' }, { n: 'Black Angus burger', p: '13,50', o: '200 gr beef burger met gebakken ei' },
      { n: 'Comedor burger', p: '12', o: 'Huisgemaakte kalfs- of kipgehakt met spiegelei' },
      { n: 'Smash burger', p: '11', o: 'Alleen in Nijmegen' },
    ] },
    { t: 'Grillworst', items: [ { n: 'Grillworst naturel', p: '8,50' }, { n: 'Grillworst kaas', p: '8,50' }, { n: 'Grillworst Madam Jeanette', p: '8,50', s: true } ] },
    { t: 'Tosti’s', items: [ { n: 'Tosti kaas', p: '4,50' }, { n: 'Tosti kaas gehakt', p: '5' }, { n: 'Tosti hete kip', p: '6', s: true }, { n: 'Tosti spicy tuna', p: '5', s: true } ] },
  ] },
  { id: 'msemmen', tab: 'Msemmen & soep', groepen: [
    { t: 'Msemmen', items: [
      { n: 'Msemmen naturel', p: '4,50' }, { n: 'Msemmen kaas', p: '5' }, { n: 'Msemmen Nutella', p: '5' }, { n: 'Msemmen honing', p: '5' },
      { n: 'Msemmen kip', p: '6' }, { n: 'Msemmen hete kip', p: '6,50', s: true },
    ] },
    { t: 'Soepen', noot: 'Met brood', items: [ { n: 'Harira', p: '6', o: 'Marokkaanse soep' }, { n: 'Linzensoep', p: '6' } ] },
    { t: 'Bijgerechten', items: [
      { n: 'Patat', p: '4' }, { n: 'BBQ chicken strips', p: '6', o: '3 stuks, met BBQ-saus' }, { n: 'Pittige kaassticks', p: '5,75', o: '6 stuks', s: true },
      { n: 'Gebakken garnalen', p: '7,25', o: '8 gamba’s, gefrituurd in een jasje van deeg' },
      { n: 'Kip loempia’s', p: '5,75', o: '3 stuks, huisgemaakt' }, { n: 'Sucuk kaas loempia’s', p: '6,25', o: '3 stuks, huisgemaakt' },
    ] },
    { t: 'Kids', items: [ { n: 'Kids menu', p: '7,50', o: 'Friet met 4 kipnuggets en een Capri-Sun' } ] },
  ] },
  { id: 'drinken', tab: 'Zoet & drinken', groepen: [
    { t: 'Desserts', noot: 'Zie de vitrine. Hele taart bestellen kan ook.', items: [ { n: 'Dubai cup', p: '11', o: 'Melkchocolade, pistache en aardbei' } ] },
    { t: 'Homemade milkshakes', items: [
      { n: 'Kinder Bueno', p: '7' }, { n: 'Oreo', p: '7' }, { n: 'Avocado', p: '7,50' }, { n: 'Aardbei', p: '7' }, { n: 'Banaan', p: '7' }, { n: 'Met slagroom', p: '+0,50' },
    ] },
    { t: 'Smoothies', items: [ { n: 'Mango', p: '6,50' }, { n: 'Aardbei', p: '6,50' }, { n: 'Aardbei mango', p: '6,50' } ] },
    { t: 'Mojito', items: [ { n: 'Mojito lime mint', p: '7' }, { n: 'Mojito passion fruit', p: '7' } ] },
    { t: 'Warme dranken', items: [
      { n: 'Koffie', p: '3' }, { n: 'Espresso', p: '3' }, { n: 'Cappuccino', p: '3,30' }, { n: 'Latte macchiato', p: '3,30' }, { n: 'Thee', p: '2,50' }, { n: 'Marokkaanse thee', p: '3' },
    ] },
    { t: 'Koude dranken', items: [ { n: 'Verse jus d’orange', p: '3,50' }, { n: 'Red Bull', p: '3,50' }, { n: 'Frisdrank', p: '2,90' } ] },
  ] },
];

// Letterlijk van Google (5 sterren, stand 5 oktober 2026). Ingekort met "…" waar aangegeven.
export const reviews = [
  { naam: 'Eveliene', waar: 'Nijmegen', wanneer: 'een jaar geleden', tekst: 'Aanrader! We werden vriendelijk ontvangen hebben heerlijk geluncht: broodje hete kip en broodje kofte. Hele goede porties. Alles is vers; de msemmen is zo vers dat het er op dit moment helaas niet was omdat moeders ze vers maakt en op vakantie is.' },
  { naam: 'Gentlemen Rif', waar: 'Nijmegen', wanneer: '3 jaar geleden', tekst: '… Alles is vers, hygiënisch en goedkoop. Er hangt een fijne mediterraanse sfeer. De verse Marokkaanse muntthee was ook heerlijk! Divers assortiment aan broodjes, schotels en gebak. Een echte aanwinst voor Nijmegen.' },
  { naam: 'Jasper B.', waar: 'Nijmegen', wanneer: '2 jaar geleden', tekst: 'Twee dagen geleden hier een kapsalon spicy chicken gegeten. Een echte aanrader! Het vlees wordt vers gebakken en de sausen zijn huisgemaakt. De eigenaren zijn vriendelijke gastvrije mensen.' },
  { naam: 'Hamza D.', waar: 'Nijmegen', wanneer: 'een jaar geleden', tekst: '… Harira is een aanrader gruwelijk 💪🏽. Broodje hete kip ook. Personeel is vriendelijk en professioneel.' },
  { naam: 'Kevin D.', waar: 'Arnhem', wanneer: 'een maand geleden', tekst: 'Beste zaak van Arnhem. Altijd goed gevulde broodjes !' },
  { naam: 'Bart', waar: 'Arnhem', wanneer: '4 maanden geleden', tekst: 'Gauw besteld, heerlijk gegeten. De oreo milkshake = 10/10.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (v: Vestiging, tekst: string) => `${v.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = (v: Vestiging) => waMet(v, `Hoi Comedor ${v.plaats}! Ik heb een vraag:`);
