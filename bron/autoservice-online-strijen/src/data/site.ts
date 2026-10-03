// Feiten: Google-bedrijfsprofiel "AutoService-Online / Garagebedrijf Strijen" (bekeken 3 oktober 2026; 4,8 uit 43 reviews),
// Facebook "Autoserviceonline", en de vorige eigen website (Wayback-archief 2022-2025; het domein toont nu een parkeerpagina).
// Christiaan Huygensstraat 34, 3291 CN Strijen. 06 39 13 96 04. Ma t/m vr 09:00-18:00, za 10:00-17:00, zo gesloten.
// "(24/7 geopend op afspraak)" stond op de vorige site; Facebook zegt "Altijd geopend". Geen KvK gevonden.
export const site = {
  naam: 'AutoService-Online',
  vol: 'AutoService-Online / Garagebedrijf Strijen',
  slogan: 'Staat er voor.',
  straat: 'Christiaan Huygensstraat 34',
  postcode: '3291 CN',
  plaats: 'Strijen',
  tel: '06 39 13 96 04',
  telHref: 'tel:+31639139604',
  wa: 'https://wa.me/31639139604',
  facebook: 'https://www.facebook.com/people/Autoserviceonline/100085567570116/',
  maps: 'https://www.google.com/maps/search/?api=1&query=AutoService-Online+Christiaan+Huygensstraat+34+Strijen',
  reviews: 'https://www.google.com/maps/search/?api=1&query=AutoService-Online+Garagebedrijf+Strijen',
  google: { score: '4,8', aantal: 43 },
  themeColor: '#0d1014',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay). Minuten sinds middernacht voor de live status.
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '09.00', dicht: '18.00', van: 540, tot: 1080 },
  { dag: 2, naam: 'Dinsdag', open: '09.00', dicht: '18.00', van: 540, tot: 1080 },
  { dag: 3, naam: 'Woensdag', open: '09.00', dicht: '18.00', van: 540, tot: 1080 },
  { dag: 4, naam: 'Donderdag', open: '09.00', dicht: '18.00', van: 540, tot: 1080 },
  { dag: 5, naam: 'Vrijdag', open: '09.00', dicht: '18.00', van: 540, tot: 1080 },
  { dag: 6, naam: 'Zaterdag', open: '10.00', dicht: '17.00', van: 600, tot: 1020 },
  { dag: 0, naam: 'Zondag', open: '', dicht: '', van: 0, tot: 0 },
];

// Diensten: menu "Werkplaats", "Schadeherstel" en "Poetsen" van de vorige eigen site; ophalen/terugbrengen uit de reviews.
export const chips = ['APK', 'Kleine en grote beurt', 'Airco-service', 'Storingsdiagnose', 'Banden', 'Remmen', 'Uitlijnen', 'Schadeherstel', 'Ruitschade', 'Poetsen', 'Leer reparatie', 'Ophalen en terugbrengen'];

// Letterlijk van Google (stand 3 oktober 2026), ingekort met "…" waar aangegeven. Alleen positieve reviews.
export const reviews = [
  { naam: 'Mitchel v. T.', tekst: 'Mijn airco blies geen koude lucht meer. Super snel geholpen! Ik werd goed op de hoogte gehouden over de status van de reparatie. Door foto\'s en berichten. Deze garage is een aanrader.' },
  { naam: 'Edwin M.', tekst: 'Hele nette garage. Auto werd conform afspraak opgehaald. Tijdens het repareren werd ik op de hoogte gehouden middels foto\'s. Sowieso wordt er goed gecommuniceerd. Via WhatsApp wordt snel gereageerd. …' },
  { naam: 'D. Dirk', tekst: 'Lang gezocht en uiteindelijk gevonden: de ideale garage. … Er wordt duidelijk gecommuniceerd wat er gedaan moet worden en wat de kosten zullen zijn. Gewoon een eerlijke en heldere benadering zonder verassingen.' },
  { naam: 'Melvin D.', tekst: 'Apk keuring gehad alles naar wens! Hele snelle service gehad niks op aan te merken. Vriendelijke mensen die je goed helpen.' },
  { naam: 'Sorayah S.', tekst: 'Goede service voor een goede prijs. Monteur denkt met je mee in reparatie en planning. Heb op de reparatie kunnen wachten in een gezellige ruimte.' },
  { naam: 'J. S.', tekst: 'Goede service, auto werd opgehaald en teruggebracht. Tijdens de grote beurt werd ik op de hoogte gehouden met foto’s. Volgende keer kom ik hier terug' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waAfspraak = waMet('Hallo AutoService-Online, ik wil graag een afspraak maken voor mijn auto.');
