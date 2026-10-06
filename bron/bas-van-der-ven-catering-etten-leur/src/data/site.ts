// Feiten (bekeken 6 oktober 2026):
// - Google-bedrijfsprofiel "Bas van der Ven Catering" (Catering): Korte Brugstraat 98, 4871 XT Etten-Leur, 06 43723557,
//   4,8 uit 87 reviews, di-vr 08:30-17:00, za 08:30-15:00, zo/ma gesloten, niet geclaimd, websiteknop = basvandervencatering.nl.
// - basvandervencatering.nl (oude site, ©2018): "Sinds 1 september 2021 is onze nieuwe naam 'Bas en Anneloes' live gegaan."
// - basenanneloes.nl (huidige site): "Welkom bij Bas en Anneloes", patisserie, traiteur, catering, rustieke (desem)broden,
//   winkel in de Korte Brugstraat, info@basenanneloes.nl, tijden zoals Google, catering di t/m za.
// - PDF-lijsten op basenanneloes.nl (Catering, Hapjes, Barbecue & Gourmet, High tea en Lunch, Taarten, Gebak, Extra informatie):
//   buffetten, prijzen p.p., minimum aantal personen, bezorgkosten, annuleren, borden en bestek.
// - Facebook "Bas en Anneloes" (facebook.com/BasenAnneloes), intro "Catering, taarten, gebakjes, hapjes en nog veel meer.
//   Allemaal vers met de hand gemaakt!"; Instagram @bas.en.anneloes (1.224 volgers, laatste post 27 september 2026).
// Geen KvK-nummer gevonden.
export const site = {
  naam: 'Bas & Anneloes',
  vol: 'Bas & Anneloes',
  oud: 'Bas van der Ven Catering',
  straat: 'Korte Brugstraat 98',
  postcode: '4871 XT',
  plaats: 'Etten-Leur',
  tel: '06 43 72 35 57',
  telHref: 'tel:+31643723557',
  wa: 'https://wa.me/31643723557',
  mail: 'info@basenanneloes.nl',
  instagram: 'https://www.instagram.com/bas.en.anneloes/',
  facebook: 'https://www.facebook.com/BasenAnneloes/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Korte+Brugstraat+98+4871+XT+Etten-Leur',
  google: { score: '4,8', aantal: 87 },
  themeColor: '#f4f3f0',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay). Tijden in minuten voor het script. Bron: Google-profiel en basenanneloes.nl.
export const tijden = [
  { dag: 2, naam: 'Dinsdag', open: '8.30', dicht: '17.00', o: 510, d: 1020 },
  { dag: 3, naam: 'Woensdag', open: '8.30', dicht: '17.00', o: 510, d: 1020 },
  { dag: 4, naam: 'Donderdag', open: '8.30', dicht: '17.00', o: 510, d: 1020 },
  { dag: 5, naam: 'Vrijdag', open: '8.30', dicht: '17.00', o: 510, d: 1020 },
  { dag: 6, naam: 'Zaterdag', open: '8.30', dicht: '15.00', o: 510, d: 900 },
  { dag: 0, naam: 'Zondag', open: '', dicht: '', o: 0, d: 0 },
  { dag: 1, naam: 'Maandag', open: '', dicht: '', o: 0, d: 0 },
];

// Uit "Lijst Catering", "Lijst High tea en Lunch" en "Lijst Barbecue & Gourmet" (basenanneloes.nl). Prijzen per persoon.
export const buffetten = [
  { id: 'tapas', groep: 'buffet', naam: 'Tapasbuffet', min: 20, prijs: 40.5, kort: 'Paella met kip en garnalen, lasagne, vijf soorten kaas, Parmaham, gerookte vis, crème catalana' },
  { id: 'medi', groep: 'buffet', naam: 'Mediterraans buffet', min: 20, prijs: 39.5, kort: 'Bouillabaisse, boeuf bourguignon, gratin dauphinois, taboulé, gambastaartjes, crème caramel' },
  { id: 'bourg', groep: 'buffet', naam: 'Bourgondisch buffet', min: 20, prijs: 36.25, kort: "Beenham met pikante saus, scampi's in knoflook, saté, quiches, gerookte vis, aardbeienbavaroise" },
  { id: 'hap2', groep: 'buffet', naam: 'Hapjesbuffet 2', min: 20, prijs: 23.75, kort: "Vlees-, vis- en kaasschotel, bruschetta's, amuseglaasjes, saté of warme zalm met dille" },
  { id: 'hap1', groep: 'buffet', naam: 'Hapjesbuffet 1', min: 20, prijs: 13.75, kort: 'Hapjesschaal, luxe hapjesschaal, wraps, snackschaal, gevuld Turks brood, satépot' },
  { id: 'hkmedi', groep: 'huiskamer', naam: 'Mediterraans huiskamerbuffet', min: 10, prijs: 28.5, kort: 'Kip stroganoff, scholrolletjes in tomaten-roomsaus, gerookte vis, bruschetta, tiramisu' },
  { id: 'hkbourg', groep: 'huiskamer', naam: 'Bourgondisch huiskamerbuffet', min: 10, prijs: 21.5, kort: 'Saté, beenham, nasi, quiches, ham met meloen, aardbeien- en chocoladebavaroise' },
  { id: 'hightea', groep: 'lunch', naam: 'High tea', min: 10, prijs: 23.25, kort: 'Cupcakes, taartjes, mini croissants, worsten- en saucijzenbroodjes, mini-sandwiches, quiche' },
  { id: 'brunch', groep: 'lunch', naam: 'Brunch', min: 4, prijs: 21.95, kort: 'Tomaat-groentesoep, croissant, kaneelbroodje, eisalade, rosbief, aardbeien triffle' },
  { id: 'broodlunch', groep: 'lunch', naam: 'Broodlunch', min: 6, prijs: 19.75, kort: 'Diverse broodjes, puddingbroodjes, huisgemaakte kip-, ei- en tonijnsalade, jus d’orange' },
  { id: 'bbq', groep: 'bbq', naam: 'Barbecueschotel', min: 4, prijs: 19.75, kort: 'Vier soorten vlees, drie salades, sausjes, satésaus, kruidenboter en brood' },
  { id: 'gourmet', groep: 'bbq', naam: 'Gourmetschotel', min: 2, prijs: 21.5, kort: 'Kipfilet, hamburger, slavink, biefstuk, fricandeau en zalm, met salades en brood' },
];

export const groepen = [
  { id: 'buffet', titel: 'Buffetten', noot: 'Vanaf 20 personen, warm bij u thuis bezorgd' },
  { id: 'huiskamer', titel: 'Huiskamerbuffetten', noot: 'Vanaf 10 personen' },
  { id: 'lunch', titel: 'High tea en lunch', noot: '' },
  { id: 'bbq', titel: 'Barbecue en gourmet', noot: 'Ook een barbecue huren, of wij komen bij u barbecueën' },
];

// Letterlijk van Google (5 sterren, stand 6 oktober 2026), ingekort met "…". Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Bart S.', wanneer: 'een jaar geleden', tekst: 'Alle gerechten mooi geleverd in koelboxen, keurig opgemaakt en alles van topkwaliteit en supervers. … De catering voor ons volgende feest komt zeker weer bij Bas en Anneloes vandaan!' },
  { naam: 'Frans K.', wanneer: '2 jaar geleden', tekst: 'Voor de derde keer een hapjesbuffet besteld bij Bas en Anneloes. Het was weer geweldig! Lekker van smaak, veel keus, mooi gepresenteerd en voor een goede prijs.' },
  { naam: 'Maud S.', wanneer: '9 maanden geleden', tekst: 'Geen massa producten, maar heerlijk zelfgemaakt of bereidt. … Daarnaast zijn het ook erg leuke gezellige mensen met hart voor de zaak!' },
  { naam: 'Willem de J.', wanneer: '3 jaar geleden', tekst: 'Onze gasten hebben met ons gesmuld van het heerlijke eten - warm en koud - en allerlei fijne hapjes.' },
];

export const euro = (n: number) => '€ ' + n.toFixed(2).replace('.', ',');
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hoi Bas en Anneloes, ik heb een vraag over catering.');
