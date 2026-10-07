// Feiten (bekeken 7 oktober 2026), bronnen in bron/:
// - stassenzonwering.nl (alle pagina's via wp-json + html, bron/web/site): Home, Zonwering, Raamdecoratie (+5), Buitenzonwering (+5),
//   Buitenleven (+6), Rolluiken (RV 40/41/49), Service, Horren, Partners, Contact, Actie's, Offerte aanvragen.
//   Contact: telefoon 0180-615133, mobiel 06-19622378, info@tonstassenzonwering.nl, "Barendrecht".
//   Home: "Voor Particulier, VVE en Projecten"; garantie (5 -7jaar) op de meeste producten; montageteams minimaal 20 jaar ervaring,
//   o.a. VCA; Over ons: "complete zorg van binnen en buitenzonwering producten en projectzonwering", "[reeds 41 jaar]".
//   Openingstijden (eigen site): ma-vr 09:00-17:00, za 09:00-16:00, zo gesloten.
//   Levert o.a. in: Barendrecht, Zwijndrecht, Rhoon, Hendrik Ido Ambacht, Rotterdam.
//   Service: onderhoud en service, onderhoudscontract eenmalig of meerjarig, storingsnummer 0180-615133, ook systemen die niet door
//   hen geleverd zijn. Partners: Stobag, Adda rolluiken, Somfy, Swela, Dickson; Verano-dealer (hero eigen site, folders).
// - Eigen folders (Actie's-pagina, 2024 en maart 2025): Middeldijk 56A unit 11, 2992 SJ Barendrecht; "Wij doen niet aan aanbetaling
//   voor uw opdracht! | Gratis meten bij opdracht!!". Advertentie 2021: "Professionele zonwering met een persoonlijke benadering".
// - Google-profiel "Ton Stassen Zonwering Barendrecht": Middeldijk 56a, 2992 SJ Barendrecht, 06 19622378. 15 reviews (score NIET tonen).
export const site = {
  naam: 'Ton Stassen Zonwering',
  vol: 'Ton Stassen Zonwering & outdoor Living',
  straat: 'Middeldijk 56A, unit 11',
  postcode: '2992 SJ',
  plaats: 'Barendrecht',
  mobiel: '06 19 62 23 78',
  mobielHref: 'tel:+31619622378',
  vast: '0180 61 51 33',
  vastHref: 'tel:+31180615133',
  wa: 'https://wa.me/31619622378',
  mail: 'info@tonstassenzonwering.nl',
  maps: 'https://www.google.com/maps/search/?api=1&query=Ton+Stassen+Zonwering+Middeldijk+56a+Barendrecht',
  themeColor: '#7aa7df',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

export const plaatsen = ['Barendrecht', 'Zwijndrecht', 'Rhoon', 'Hendrik-Ido-Ambacht', 'Rotterdam'];

// Eigen site: ma-vr 09:00-17:00, za 09:00-16:00, zo gesloten. Index = getDay() (0 = zondag).
export const tijden: ([number, number] | null)[] = [null, [540, 1020], [540, 1020], [540, 1020], [540, 1020], [540, 1020], [540, 960]];
export const dagNamen = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];

// Hun eigen productmenu. Eén zin per groep, ingekort uit hun eigen productteksten.
export const groepen = [
  {
    id: 'buiten', titel: 'Buitenzonwering',
    zin: 'Zonwering houdt hitte buiten en is een absolute aanwinst voor jouw woning.',
    producten: ['Zonneschermen', 'Screens en Ritzscreens', 'Verandazonwering', 'Uitvalschermen', 'Markiezen'],
  },
  {
    id: 'binnen', titel: 'Raamdecoratie',
    zin: 'Handbediend of elektrisch. Met het Smartfit frame zonder boor- en schroefgaten op het kozijn geklikt.',
    producten: ['Jaloezieën', 'Rolgordijnen', 'Verticale lamellen', 'Plisségordijnen', 'Vouwgordijnen'],
  },
  {
    id: 'leven', titel: 'Buitenleven',
    zin: 'Haal binnen naar buiten: buiten zijn wordt buiten leven.',
    producten: ['Terrasoverkappingen', 'Lamellendaken', 'Glaswanden', 'Terrasschermen', 'Windschermen', 'Tuinschermen'],
  },
  {
    id: 'horren', titel: 'Horren',
    zin: 'Goed ventileren van uw woon- en werkruimten is belangrijk voor uw gezondheid.',
    producten: ['Deurhorren', 'Raamhorren'],
  },
];

// Rolluiken-pagina, letterlijk: maximale maten per type.
export const rolluiken = [
  { type: 'RV 41', soort: 'Budget rolluik', bediening: 'hand- of elektrische bediening', b: 300, h: 300, zin: 'Een betaalbaar alternatief voor jouw kleinere ramen.' },
  { type: 'RV 40', soort: 'Standaard rolluik', bediening: 'hand- of elektrische bediening', b: 370, h: 300, zin: 'Scoort door de dikke lamel hoog op veiligheid, isolatie en geluidswering.' },
  { type: 'RV 49', soort: 'Extra stevig rolluik', bediening: 'elektrische bediening', b: 400, h: 360, zin: 'Tussenlamellen kantelen bij ongewenst bezoek, zodat het rolluik niet open kan.' },
];

// Producten waarvoor ze zelf onderhoud en service bieden (Service-pagina).
export const service = {
  buiten: ['Aluminium jaloezieën', 'Ritzscreens en screens', 'Uitvalschermen', 'Knikarmschermen', 'Schuifframes', 'Markiezen en markisolettes', 'Terrasoverkappingen', 'Rolluiken'],
  binnen: ['Jaloezieën', 'Lamelgordijnen', 'Rolgordijnen'],
  overig: ['Rolpoorten', 'Overheaddeuren (onderhoud en keuringen)', 'Beeldbepalende zonwering'],
};

export const partners = ['Verano', 'Stobag', 'Adda', 'Somfy', 'Swela', 'Dickson'];

// Letterlijk van Google (alle 5 sterren, stand 7 oktober 2026). Naam: voornaam + initiaal. Ingekort met "…".
export const reviews = [
  { naam: 'Robbin V.', wanneer: 'een jaar geleden', tekst: 'Recentelijk Rolluiken laten plaatsen over de gehele verdieping en de dakkapel, in totaal 5 stuks. … In het kort: De prijs is scherp en eerlijk, de service is goed en de plaatsing uitermate netjes.' },
  { naam: 'Carel S.', wanneer: 'een jaar geleden', tekst: 'In eerste instantie had de fabriek te weinig lamellen in de bak gemonteerd (je gelooft het niet). Ton loste dit perfect op door alvast lamellen te plaatsen die hij nog op voorraad had … Mijn buurman was ook zeer enthousiast dus die heeft ook direct besteld.' },
  { naam: 'Arjan', wanneer: '2 jaar geleden', tekst: 'Wij zijn al langere tijd klant bij Ton en zijn uiterst tevreden. Zowel offertes, plaatsing en service is wat ons betreft top! Alles vindt in goed overleg plaats en op vragen wordt snel gereageerd.' },
  { naam: 'C. de D.', wanneer: '3 jaar geleden', tekst: 'Dinsdag heeft Ton Stassen met een medewerker bij mij een knikarmscherm geplaatst. Ik kan alleen maar zeggen...vakwerk!' },
  { naam: 'Maikel v. d. B.', wanneer: '4 jaar geleden', tekst: 'Prima werk geleverd door Ton en zijn mannen. Eerst netjes komen inmeten en na enkele weken de rolluiken (boven en beneden) geplaatst. … Heldere en snelle communicatie.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Ton, ik heb een vraag over zonwering.');
export const waStoring = waMet('Hallo Ton, ik heb een storing aan mijn zonwering. Het gaat om: ');
