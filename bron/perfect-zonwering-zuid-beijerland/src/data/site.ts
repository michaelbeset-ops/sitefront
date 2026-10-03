// Feiten: perfectzonwering.nl (alle pagina's, opgehaald 3 oktober 2026) en het Google-bedrijfsprofiel "Perfect Zonwering"
// (3,7 uit 7 reviews, ma t/m vr 08:00-17:00). Adres en telefoon volgens Google, e-mail volgens hun site.
export const site = {
  naam: 'Perfect Zonwering',
  straat: 'Molendijk 26',
  postcode: '3284 LJ',
  plaats: 'Zuid-Beijerland',
  tel: '06 22 06 12 76',
  telHref: 'tel:+31622061276',
  wa: 'https://wa.me/31622061276',
  mail: 'info@perfectzonwering.nl',
  maps: 'https://www.google.com/maps/search/?api=1&query=Perfect+Zonwering+Molendijk+26+Zuid-Beijerland',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Perfect+Zonwering+Zuid-Beijerland',
  google: { score: '3,7', aantal: 7 },
  themeColor: '#121316',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay).
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '08.00', dicht: '17.00' },
  { dag: 2, naam: 'Dinsdag', open: '08.00', dicht: '17.00' },
  { dag: 3, naam: 'Woensdag', open: '08.00', dicht: '17.00' },
  { dag: 4, naam: 'Donderdag', open: '08.00', dicht: '17.00' },
  { dag: 5, naam: 'Vrijdag', open: '08.00', dicht: '17.00' },
  { dag: 6, naam: 'Zaterdag', open: '', dicht: '' },
  { dag: 0, naam: 'Zondag', open: '', dicht: '' },
];

// De keuzelijst van hun eigen offerteformulier.
export const producten = ['Rolluiken', 'Screens', 'Knikarmscherm', 'Uitvalscherm', 'Markiezen', 'Terrasoverkapping', 'Reparatie'];

// RAL-kleuren zoals op hun productpagina's genoemd (hex = benadering voor het kleurbolletje).
export const ral: Record<string, { naam: string; hex: string }> = {
  '9010': { naam: 'RAL 9010 wit', hex: '#f1ede1' },
  '9016': { naam: 'RAL 9016', hex: '#f4f4ef' },
  '9001': { naam: 'RAL 9001 crèmewit', hex: '#e9dfcc' },
  '9007': { naam: 'RAL 9007 structuur', hex: '#8f8e8a' },
  '7016': { naam: 'RAL 7016 antraciet', hex: '#383e42' },
  '7021': { naam: 'RAL 7021 zwartgrijs', hex: '#2e3234' },
  '9005': { naam: 'RAL 9005 zwart', hex: '#0e0e10' },
  zilver: { naam: 'Technisch zilver', hex: '#a6a9ad' },
};

// Productwijzer: modellen, maten, kleuren en bediening van hun productpagina's (ingekort, niets toegevoegd).
export type Model = { naam: string; tekst: string; maat?: string; kleuren: string[]; bediening: string };
export const wijzer: { id: string; titel: string; product: string; modellen: Model[] }[] = [
  { id: 'knikarm', titel: 'Knikarmschermen', product: 'knikarmscherm', modellen: [
    { naam: 'Oliva', tekst: 'Eén van de best verkochte schermen. Door de hoogwaardige kwaliteit ook toepasbaar op grotere afmetingen.', maat: '650 x 300 of 600 x 350 cm', kleuren: ['9016', '9010', '9001', '7016', 'zilver'], bediening: 'Elektrisch, met schakelaar of afstandsbediening' },
    { naam: 'Furore Cassette', tekst: 'Met bovenrolsysteem: bladeren en vuil rollen niet mee op en laten geen afdrukken achter op het doek.', maat: '550 x 250 of 500 x 300 cm', kleuren: ['9001', '7016', 'zilver'], bediening: 'Handmatig met slingerstang of elektrisch' },
    { naam: 'Linea', tekst: 'Hedendaags design. Gesloten is de cassette slechts 122 mm hoog, voor aan de muur of aan het plafond.', maat: '600 x 250 of 550 x 300 cm', kleuren: ['9010', '9001', 'zilver'], bediening: 'Handmatig of elektrisch' },
    { naam: 'Gota', tekst: 'Ruime keuze aan kleuren en unieke stelmogelijkheden, in bijna iedere situatie te plaatsen.', maat: '600 x 250 of 550 x 300 cm', kleuren: ['9010', '9001', '7016', '9005', 'zilver'], bediening: 'Alleen elektrisch' },
    { naam: 'Bella', tekst: 'De gesloten cassette beschermt het doek; de muurbevestiging zit verdekt achter de cassette.', maat: '620 x 300 of 650 x 250 cm', kleuren: ['9010', '9001', 'zilver'], bediening: 'Elektrisch, met schakelaar of afstandsbediening' },
    { naam: 'Alora', tekst: 'Moderne, kubistische uitstraling, strak tegen de gevel. Optioneel met ledverlichting.', maat: '550 x 300 cm', kleuren: ['9010', '9007', '7016', '9005'], bediening: 'Elektrisch, met schakelaar of afstandsbediening' },
  ] },
  { id: 'screens', titel: 'Screens', product: 'screen', modellen: [
    { naam: 'Ritsscreen', tekst: 'Weert de warmte en u blijft goed naar buiten kijken. Getest op windsnelheden van 145 km/h.', kleuren: ['9010', '9001', '7016', '7021', 'zilver'], bediening: 'Slingerstang, schakelaar, afstandsbediening of Solar motor' },
    { naam: 'SolidSky', tekst: 'Speciaal voor lichtstraten. Dezelfde ritstechniek, een kast van maar 105 mm en extra slanke geleiders.', kleuren: ['9010', '9001', '7016', '9005'], bediening: 'Elektrisch, met schakelaar of afstandsbediening' },
  ] },
  { id: 'rolluiken', titel: 'Rolluiken', product: 'rolluik', modellen: [
    { naam: 'Heroal RS38 (Mini-E)', tekst: 'Eén van de beste lamellen: 4,5 kg per vierkante meter. Bij u ingemeten, door ons gezaagd en met de hand geassembleerd.', kleuren: ['9010', '9001', '7016'], bediening: 'Handbediend, schakelaar, afstandsbediening of Solar motor' },
  ] },
  { id: 'uitval', titel: 'Uitvalschermen', product: 'uitvalscherm', modellen: [
    { naam: 'Care 95 of 105', tekst: 'De doorkijk naar buiten blijft grotendeels vrij. Met een afgeschuinde, haakse of ronde voorbuis.', kleuren: ['9010', '9001', 'zilver'], bediening: 'Slingerstang, schakelaar, afstandsbediening of Solar motor' },
  ] },
  { id: 'terras', titel: 'Terrasoverkapping', product: 'terrasoverkapping', modellen: [
    { naam: 'Solidare Pergola', tekst: 'Voor wie nog geen veranda heeft. Het doek zit vast in de ritsgeleiding: windvast en eindeloos koppelbaar.', maat: '600 x 500 cm per systeem', kleuren: ['9010', '9001', '7016'], bediening: 'Elektrisch, met schakelaar of afstandsbediening' },
    { naam: 'Cubola Solidare', tekst: 'Luxe, vrijstaand of aan de muur. Zijkanten kunnen dicht met windvaste ritsscreens.', maat: '600 x 400 cm per systeem', kleuren: ['9010', '7016'], bediening: 'Elektrisch, met schakelaar of afstandsbediening' },
  ] },
  { id: 'markiezen', titel: 'Markiezen', product: 'markies', modellen: [
    { naam: 'Nieuwe markies', tekst: 'Grenen of meranti markiezen, Red Cedar kappen en Sigma of Wijzonol lak. Het doek kiest u uit de collectie van Tibelly of Dickson.', kleuren: [], bediening: '' },
    { naam: 'Opnieuw bekleden', tekst: 'Het frame wordt waar nodig hersteld, geschuurd en opnieuw afgelakt. Daarna krijgt de markies een nieuw doek.', kleuren: [], bediening: '' },
  ] },
];

// Letterlijk van Google (stand 3 oktober 2026). De enige positieve review die volledig zichtbaar is.
export const review = {
  naam: 'Ellebasi L.',
  wanneer: 'een jaar geleden',
  tekst: 'Tot nu toe twee hele positieve ervaringen: De installatie enkele jaren geleden en nu ons rolluik (door onze eigen schuld) deels kapot was, ook een reparatie. Beide keren vlot, vriendelijk geholpen en voor een scherpe prijs.',
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waAdvies = waMet('Hallo Perfect Zonwering, ik wil graag een afspraak voor gratis advies bij mij thuis.');
