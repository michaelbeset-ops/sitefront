// Feiten (bekeken 5 oktober 2026), bewijs in bron/:
// - Eigen site restaurant-salsuta.nl (JouwWeb): Woude 1a, 1489 NB De Woude, tel 075-6413609, WhatsApp 06 2745 4550,
//   info@restaurant-salsuta.nl. Veerpont over het kanaal (ca. 2 minuten), retour EUR 1,10, daarna 5 minuten lopen,
//   parkeren bij de pont, "op aangeven van overvaren wordt u meteen opgehaald". Laatste reservering diner 19:00.
//   Chef-kok Pieter Bais, patissière Ivette Victoria. Naam = Sal, Azúcar y Sabor. Klassieke cocktails van barman Oscar
//   (EUR 9 tot 15). Aparte ruimte voor evenementen, menu aan te passen. Menukaart 2026 (4 pagina's, 11-02-2026).
//   Openingstijden + laatste pont: eigen schema-afbeelding van 28-04-2026 (bron/img/home_21343_...).
// - Google: Woude 1, 4,6 uit 132 reviews, EUR 10-50, telefoon 075 641 3609.
// - Facebook "Salsuta" (336 volgers), posts t/m 5 okt 2026: brunches, eindejaarsfeesten, bruiloften, doopfeesten.
export const site = {
  naam: 'Salsuta',
  vol: 'Restaurant Salsuta',
  straat: 'Woude 1a',
  postcode: '1489 NB',
  plaats: 'De Woude',
  tel: '075 641 3609',
  telHref: 'tel:+31756413609',
  mobiel: '06 27 45 45 50',
  mobielHref: 'tel:+31627454550',
  wa: 'https://wa.me/31627454550',
  mail: 'info@restaurant-salsuta.nl',
  facebook: 'https://www.facebook.com/profile.php?id=100094093516528',
  instagram: 'https://www.instagram.com/rest.salsuta/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Restaurant+Salsuta+De+Woude',
  pontMaps: 'https://www.google.com/maps/search/?api=1&query=Pont+De+Woude+Castricum',
  google: { score: '4,6', aantal: 132 },
  themeColor: '#121412',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag. o/d in minuten. pont = laatste pont. Bron: eigen schema van Salsuta (28-04-2026).
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '10.00', dicht: '15.00', o: 600, d: 900, pont: '23.00' },
  { dag: 2, naam: 'Dinsdag', open: '10.00', dicht: '15.00', o: 600, d: 900, pont: '23.00' },
  { dag: 3, naam: 'Woensdag', open: '', dicht: '', o: 0, d: 0, pont: '' },
  { dag: 4, naam: 'Donderdag', open: '10.00', dicht: '22.00', o: 600, d: 1320, pont: '23.00' },
  { dag: 5, naam: 'Vrijdag', open: '10.00', dicht: '22.00', o: 600, d: 1320, pont: '23.00' },
  { dag: 6, naam: 'Zaterdag', open: '10.00', dicht: '22.00', o: 600, d: 1320, pont: '24.00' },
  { dag: 0, naam: 'Zondag', open: '10.00', dicht: '22.00', o: 600, d: 1320, pont: '24.00' },
];

// Menukaart 2026 van hun eigen site, prijzen zoals op de kaart. v = vegetarische optie (blaadje op hun kaart).
type Regel = { n: string; b?: string; p: string; v?: boolean };
export const kaart: { id: string; titel: string; regels: Regel[] }[] = [
  { id: 'lunch', titel: 'Lunch', regels: [
    { n: 'Uitsmijter ham-kaas', p: '12,00' },
    { n: 'Kroketten met brood', p: '12,50' },
    { n: 'Broodje avocado kip cajun', b: 'met bacon en truffelmayo, ook vega', p: '14,50', v: true },
    { n: 'Broodje Beemsterkaas', p: '11,50' },
    { n: 'Clubsandwich kip', b: 'met frites', p: '16,50' },
    { n: 'Twaalfuurtje', b: 'soep, salade, beleg met gebakken ei of een snack', p: '15,50' },
    { n: 'Broodje carpaccio', p: '13,50' },
    { n: 'Egg Benedict', b: 'met avocado, bacon en rösti', p: '14,50' },
    { n: 'Salade geitenkaas', b: 'met walnoten', p: '18,75' },
    { n: 'Caesarsalade Salsuta', p: '19,75' },
    { n: 'Poké bowl', b: 'kip of vega; met zalm 19,50', p: '18,50', v: true },
    { n: 'Broodje bal', b: 'met jus of satésaus', p: '12,50' },
    { n: 'Broodje van de dag', b: 'zie krijtbord', p: '12,50' },
  ] },
  { id: 'voor', titel: 'Voorgerechten', regels: [
    { n: 'Broodje dip', b: 'aioli / kruidenboter', p: '7,50' },
    { n: 'Soep van de dag', b: 'vraag ons personeel', p: '8,75' },
    { n: 'Tom Kha Kai soep', p: '8,75', v: true },
    { n: 'Tomatensoep', p: '8,75' },
    { n: 'Carpaccio', b: 'met truffelmayonaise, parmezaan, pittenmix en rucola', p: '16,75' },
    { n: 'Tartaar van biet', b: 'met roomkaas, rucola en pittenmix', p: '16,50', v: true },
    { n: "Tempura van gamba's", b: 'met aioli en sojasaus', p: '17,00' },
    { n: 'Steaktartaar Salsuta', p: '17,00' },
    { n: 'Tataki van tonijn en bonbon van zalm', p: '18,00' },
    { n: 'Sharing plank “Pieter”', b: 'voor 2 personen: carpaccio, steaktartaar, zalmbonbons, gamba, brood met dipjes, chicken wings, tonijnsashimi, soepje, Spaanse gehaktbal in tomatensaus', p: '37,50' },
  ] },
  { id: 'hoofd', titel: 'Hoofdgerechten', regels: [
    { n: 'Poké bowl', b: 'kip of vega; met zalm 19,75', p: '18,75', v: true },
    { n: 'Zalm cajun', p: '25,50' },
    { n: 'Groentelasagne', b: 'van zoete aardappel', p: '23,50', v: true },
    { n: 'Hamburger Salsuta, huisgemaakt', b: 'met truffel, bacon, kaas en uiencompote', p: '22,50' },
    { n: 'Saté van kip', b: 'met kroepoek, gebakken banaan, atjarsalade en patat', p: '22,50' },
    { n: 'Biefstuk', b: 'met pepersaus of kruidenboter', p: '27,50' },
    { n: 'Flensjestaart van bospaddenstoelen', b: 'met rode portsaus', p: '23,50', v: true },
    { n: 'Rouleau van kip', b: 'met bacon en roomkaas', p: '23,50' },
    { n: 'Vlees van de week', b: 'vraag ons personeel', p: '' },
    { n: 'Vis van de afslag', b: 'vraag ons personeel', p: '' },
  ] },
  { id: 'na', titel: 'Nagerechten', regels: [
    { n: 'Dame blanche', b: 'met echte chocoladesaus', p: '10,50' },
    { n: 'Sorbet Salsuta', b: 'sorbetijs met rood fruit', p: '10,50' },
    { n: 'Huisgemaakte taart', b: 'met ijsje', p: '8,75' },
    { n: 'Crème brûlée', b: 'met slagroom en ijsje', p: '10,50' },
    { n: 'Koffie met bonbons', p: '7,75' },
    { n: 'Scroppino', b: 'citroenijs en limoncello', p: '9,50' },
    { n: 'Kinderijs verrassing', p: '6,75' },
  ] },
];

// Letterlijk van Google (5 sterren, stand 5 oktober 2026), ingekort met "…".
export const reviews = [
  { naam: 'Tycho', wanneer: '7 maanden geleden', tekst: 'Gezellig restaurant op een prachtige plek. Het eten wordt met veel aandacht geserveerd en dat proef je terug in de gerechten. Tip: ga vooral voor de proefplank ‘Pieter’. … Wij waren er in de winter en de open haard stond aan, wat zorgde voor een extra warme en sfeervolle ambiance.' },
  { naam: 'Annelies B.', wanneer: '7 maanden geleden', tekst: 'Wat een leuk plekje om te eten, zo op een eiland! Het restaurant was sfeervol en de eigenaar/chef was vriendelijk. En dan het belangrijkste: het eten. Het eten was heerlijk!!' },
  { naam: 'Ellen M.', wanneer: '4 maanden geleden', tekst: 'Heel vriendelijk ontvangst in een gezellig ingerichte ruimte. Er wordt veel aandacht besteed aan het eten. Er staan niet alleen de standaard gerechten op de lunchkaart.' },
  { naam: 'Miranda V.', wanneer: '2 jaar geleden', tekst: 'Wauw, wat een pareltje en een verrassing!! … Hele sfeervolle plek en direct aan t water. Zelden zo\'n goed gebakken ribeye gegeten!!' },
];
export const reviewBoot = { naam: 'Sonny S.', wanneer: '3 jaar geleden', tekst: 'Met 10 mensen kunnen eten op het drukste moment, dag ervoor een reservering gemaakt en aangegeven dat we met de boot kwamen en de bediening heeft voor ons een plaatsje gereserveerd om aan te meren.' };

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Salsuta, ik wil graag reserveren:');
