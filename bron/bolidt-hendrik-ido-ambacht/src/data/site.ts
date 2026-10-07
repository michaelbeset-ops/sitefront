// Feiten (bekeken 7 oktober 2026), bronnen in bron/:
// - bolidt.com/nl (home, profiel, contact, producten, segmenten, kwaliteit, financien, applicatieteams, verkooporganisatie,
//   sectorpagina's, productpagina's, nieuws "Bolidt volop in uitvoering voor nieuw cruiseseizoen"):
//   Bolidt Kunststoftoepassing B.V., bezoekadres Bolidt Innovation Center, Noordeinde 2, 3341 LW Hendrik-Ido-Ambacht,
//   postadres Postbus 131, 3340 AC Hendrik-Ido-Ambacht. T +31 (0)78 684 54 44, E website@bolidt.nl (footer van elke pagina).
//   Opgericht 28 februari 1964 door de heren Bol en Schmidt. ISO 9001:2015, ISO 14001:2015, SCL 2.0 trede 3, VCA** 2017/6.0.
//   D&B Rating 1. "Uiteraard zijn Bolidt deksystemen IMO-gecertificeerd" (cruiseschepen).
// - food.bolidt.com: "2 miljoen m2 per jaar // 60 jaar actief in meer dan 135 landen", Bolidtop 801.
// - jobs.bolidt.com/vacatures: 7 vacatures + open sollicitatie (stand 7 oktober 2026).
// - Google Maps: Bolidt Kunststoftoepassing B.V., 078 684 5444 (zelfde centrale nummer).
export const site = {
  naam: 'Bolidt',
  bv: 'Bolidt Kunststoftoepassing B.V.',
  straat: 'Noordeinde 2',
  postcode: '3341 LW',
  plaats: 'Hendrik-Ido-Ambacht',
  postadres: 'Postbus 131, 3340 AC Hendrik-Ido-Ambacht',
  tel: '078 684 54 44',
  telIntl: '+31 (0)78 684 54 44',
  telHref: 'tel:+31786845444',
  mail: 'website@bolidt.nl',
  web: 'https://www.bolidt.com/nl/home',
  en: 'https://www.bolidt.com/en/home',
  jobs: 'https://jobs.bolidt.com/vacatures',
  bic: 'https://bolidtinnovationcenter.com/',
  referenties: 'https://www.bolidt.com/nl/referenties',
  kwaliteit: 'https://www.bolidt.com/nl/kwaliteit-milieu-en-iso-certificatie',
  nieuws: 'https://www.bolidt.com/nl/bolidt-volop-in-uitvoering-voor-nieuw-cruiseseizoen',
  voorwaarden: 'https://www.bolidt.com/downloads/pdf/General_Conditions.26-02-24.pdf',
  linkedin: 'https://www.linkedin.com/company/bolidt',
  instagram: 'https://www.instagram.com/bolidt/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Bolidt+Innovation+Center+Noordeinde+2+Hendrik-Ido-Ambacht',
  themeColor: '#171716',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

const nl = (slug: string) => `https://www.bolidt.com/nl/${slug}`;
const food = 'https://food.bolidt.com/';

// Systemen per toepassing: de series die Bolidt zelf het vaakst noemt op die sectorpagina (telling in bron/web/site).
export type Toepassing = { naam: string; href: string; series: string[]; familie: string };
export type Sector = { id: string; naam: string; foto: string; alt: string; onderschrift: string; toepassingen: Toepassing[] };

export const sectoren: Sector[] = [
  {
    id: 'maritiem', naam: 'Maritiem', foto: 's-maritiem', onderschrift: 'Anthem of the Seas, Bolideck Future Teak',
    alt: 'Zwembaddek van cruiseschip Anthem of the Seas met teakkleurig kunststof dek, ligbedden en een groot scherm',
    toepassingen: [
      { naam: 'Cruiseschepen', href: nl('cruiseschepen'), series: ['Bolideck Future Teak', 'Bolideck Select Hard / Soft', 'Bolideck 525'], familie: 'bolideck' },
      { naam: 'Riviercruiseschepen', href: nl('riviercruiseschepen'), series: ['Bolideck Future Teak', 'Bolideck 525', 'Bolideck 700'], familie: 'bolideck' },
      { naam: 'Marine', href: nl('marine'), series: ['Bolideck 525', 'Bolideck 700', 'Bolideck B1 / B2'], familie: 'bolideck' },
      { naam: 'Ferries', href: nl('ferries'), series: ['Bolideck 1250', 'Bolideck Select Soft', 'Bolideck 525'], familie: 'bolideck' },
      { naam: 'Superjachten', href: nl('superjachten'), series: ['Bolideck Future Teak', 'Bolideck 525', 'Bolideck Select Hard / Soft'], familie: 'bolideck' },
      { naam: 'Veetransport', href: nl('veetransport'), series: ['Bolideck ET/NG', 'Bolideck 525', 'Bolideck 700'], familie: 'bolideck' },
      { naam: 'Visserij', href: nl('visserij'), series: ['Bolideck 525', 'Bolideck 700', 'Bolideck LT'], familie: 'bolideck' },
      { naam: 'Offshore', href: nl('offshore'), series: ['Bolideck 525', 'Boliscreed 400', 'Bolideck 700'], familie: 'bolideck' },
      { naam: 'Sleep- en werkboten', href: nl('sleep-en-werkboten'), series: ['Bolideck 525', 'Bolideck 700', 'Bolideck Future Teak'], familie: 'bolideck' },
    ],
  },
  {
    id: 'industrie', naam: 'Industrie', foto: 's-industrie', onderschrift: 'Tesla Tilburg, Bolidtop Stato 500',
    alt: 'Rode Tesla in een lichtstraat van tl-buizen in de fabriek in Tilburg, op een glanzende lichtgrijze vloer',
    toepassingen: [
      { naam: 'Farmaceutische industrie', href: nl('farmaceutische-industrie'), series: ['Bolidtop 700', 'Bolidtop 525', 'Bolidtop Stato'], familie: 'bolidtop' },
      { naam: 'Zware industrie en metaal', href: nl('zware-industrie-en-metaalindustrie'), series: ['Bolidtop 700', 'Bolidtop 500', 'Bolidtop 525'], familie: 'bolidtop' },
      { naam: 'Elektronica en hightech', href: nl('elektronica-en-hightech'), series: ['Bolidtop Stato', 'Bolidtop 700', 'Bolidtop E.lo'], familie: 'bolidtop' },
      { naam: '(Petro)chemie', href: nl('petro-chemie'), series: ['Bolidtop 700', 'Bolidtop Stato', 'Bolidtop 525'], familie: 'bolidtop' },
      { naam: 'Grafische en papierindustrie', href: nl('grafische-papierindustrie'), series: ['Bolidtop Stato', 'Bolidtop 700', 'Bolidtop 500'], familie: 'bolidtop' },
      { naam: 'Auto-industrie', href: nl('auto-industrie'), series: ['Bolidtop Stato', 'Bolidtop 500', 'Bolidtop 525'], familie: 'bolidtop' },
      { naam: 'Garagebedrijven', href: nl('garagebedrijven'), series: ['Bolidtop 700', 'Bolidtop 500', 'Bolidtop 525'], familie: 'bolidtop' },
    ],
  },
  {
    id: 'voedsel', naam: 'Voedsel', foto: 's-voedsel', onderschrift: 'Banket Partners Zwaag, Bolidtop 700',
    alt: 'Bakkerij met rode naadloze vloer, rvs-rekken vol bakplaten en een productielijn',
    toepassingen: [
      { naam: 'Vleesverwerkende industrie', href: food, series: ['Bolidtop 801'], familie: 'bolidtop' },
      { naam: 'Pluimvee-industrie', href: food, series: ['Bolidtop 801'], familie: 'bolidtop' },
      { naam: 'Visverwerkende industrie', href: food, series: ['Bolidtop 801'], familie: 'bolidtop' },
      { naam: 'Bakkerijen en zoetwaren', href: food, series: ['Bolidtop 801'], familie: 'bolidtop' },
      { naam: 'Zuivel', href: food, series: ['Bolidtop 801'], familie: 'bolidtop' },
      { naam: 'AGF', href: food, series: ['Bolidtop 801'], familie: 'bolidtop' },
      { naam: 'Catering en grootkeuken', href: food, series: ['Bolidtop 801'], familie: 'bolidtop' },
      { naam: '(Fris)drankindustrie', href: food, series: ['Bolidtop 801'], familie: 'bolidtop' },
    ],
  },
  {
    id: 'openbaar', naam: 'Openbare gebouwen', foto: 's-openbaar', onderschrift: 'Stadhuis Almelo, Bolidtop FiftyFifty',
    alt: 'Raadzaal van het stadhuis van Almelo met een lichte naadloze vloer en blauwe stoelen in een halve cirkel',
    toepassingen: [
      { naam: 'Zorg', href: nl('zorg'), series: ['Bolidtop 525', 'Bolidtop 700', 'Bolidtop Sensation'], familie: 'bolidtop' },
      { naam: 'Onderwijs', href: nl('onderwijs'), series: ['Bolidtop 525', 'Bolidtop 700', 'Bolidtop Sensation'], familie: 'bolidtop' },
      { naam: 'Kantoren', href: nl('kantoren'), series: ['Bolidtop 525', 'Bolidtop FiftyFifty', 'Bolidtop Sensation'], familie: 'bolidtop' },
      { naam: 'Laboratoria', href: nl('laboratoria'), series: ['Bolidtop Stato', 'Bolidtop 525', 'Bolidtop 700'], familie: 'bolidtop' },
      { naam: 'Parkeergarages', href: nl('parkeergarages'), series: ['Boligrip 50', 'Boligrip 200', 'Boligrip 300'], familie: 'boligrip' },
      { naam: 'Stations en perrons', href: nl('stations-en-perrons'), series: ['Boligrip W', 'Bolidtop 525', 'Boligrip 200'], familie: 'boligrip' },
      { naam: 'Theaters en musea', href: nl('theaters-musea'), series: ['Bolidtop 525', 'Bolidtop Sensation', 'Bolidtop FiftyFifty'], familie: 'bolidtop' },
      { naam: 'Distributie en winkels', href: nl('distributiecentra-en-winkelbedrijven'), series: ['Bolidtop 525', 'Bolidtop 700', 'Bolidtop Sensation'], familie: 'bolidtop' },
      { naam: 'Gevangenissen', href: nl('gevangenissen'), series: ['Bolidtop 525', 'Bolidtop 700', 'Bolidtop Sensation'], familie: 'bolidtop' },
    ],
  },
  {
    id: 'infra', naam: 'Civil-Rail-Infra', foto: 's-infra', onderschrift: 'Rijnbrug Oosterbeek, Bolirail PU',
    alt: 'Stalen boogbrug over de Rijn bij Oosterbeek met een binnenvaartschip eronder',
    toepassingen: [
      { naam: 'Bruggen en viaducten', href: nl('bruggen-en-viaducten'), series: ['Boligrip 1250', 'Boligrip W', 'Boligrip WR'], familie: 'boligrip' },
      { naam: 'Spoor- en kraanbanen', href: nl('spoor-en-kraanbanen'), series: ['Bolirail PU/LP', 'Bolirail PU'], familie: 'bolirail' },
      { naam: 'Wegen, startbanen en platforms', href: nl('wegen-startbanen-en-platforms'), series: ['Boligrip 1250', 'Boligrip WR', 'Boligrip W'], familie: 'boligrip' },
    ],
  },
  {
    id: 'sport', naam: 'Sport', foto: 's-sport', onderschrift: 'Stadion Ioannina, Bolidtan RH/PU',
    alt: 'Rode atletiekbaan met witte lijnen langs een grasveld in het stadion van Ioannina',
    toepassingen: [
      { naam: 'Indoorsport', href: nl('indoorsport'), series: ['Bolidtop 525', 'Bolidtan PU/R', 'Bolidtop Sensation'], familie: 'bolidtan' },
      { naam: 'Outdoorsport', href: nl('outdoorsport'), series: ['Bolidtop 525', 'Bolidtan H/PU', 'Bolidtan RH/PU'], familie: 'bolidtan' },
    ],
  },
];

// Productfamilies met hun eigen namen en omschrijving (bolidt.com/nl/producten en productpagina's).
export const systemen = [
  { id: 'bolidtop', naam: 'Bolidtop', wat: 'Vloersystemen', zin: 'Van kantoren tot magazijnen, van ziekenhuizen tot de metaalindustrie.', series: ['200', '525', '700', '801', 'Stato', 'E.lo', 'FiftyFifty', 'Sensation', 'Jewel', 'Print'], href: nl('bolidtop-industriele-vloersystemen') },
  { id: 'bolideck', naam: 'Bolideck', wat: 'Deksystemen', zin: 'Dekafwerking voor luxe en voor zeer functionele toepassingen buitengaats.', series: ['525', '700', '1250', 'Future Teak', 'Select', 'Helideck', 'Livestock', 'Sensation'], href: nl('bolideck-deksystemen') },
  { id: 'boligrip', naam: 'Boligrip', wat: 'Slijtlagen', zin: 'Voor bruggen, daken, parkeerdaken en hellingen.', series: ['50', '200', '300', '1250', '2000', 'W'], href: nl('boligrip-en-bolidrain-slijtlagen') },
  { id: 'bolicoat', naam: 'Bolicoat', wat: 'Coatingsystemen', zin: 'Zuinige en functionele kunststof oplossingen.', series: ['50', 'D 60', 'E', 'ET'], href: nl('bolicoat-coatingsystemen') },
  { id: 'bolirail', naam: 'Bolirail', wat: 'Railfixaties', zin: 'Gietmassa voor railfixaties en raildempers, voor treinen en trams.', series: ['PU', 'PU/LP'], href: nl('bolirail-railfixaties') },
  { id: 'bolidtan', naam: 'Bolidtan', wat: 'Sportsystemen', zin: 'Sportvloeren, atletiekbanen en fitness, binnen en buiten.', series: ['H/PU', 'H/S', 'PU/R', 'RH/PU', 'TT'], href: nl('bolidtan-sportsystemen') },
  { id: 'wand', naam: 'Plycoat', wat: 'Wandafwerking', zin: 'Naadloos en elastisch: de vloer gaat over in de wand.', series: ['H', 'H/WS'], href: nl('bolidt-wandafwerking') },
];
export const familieNaam: Record<string, string> = { bolidtop: 'Bolidtop vloersystemen', bolideck: 'Bolideck deksystemen', boligrip: 'Boligrip slijtlagen', bolirail: 'Bolirail railfixaties', bolidtan: 'Bolidtan sportsystemen' };
export const familieHref: Record<string, string> = Object.fromEntries(systemen.map((s) => [s.id, s.href]));

// jobs.bolidt.com/vacatures, 7 oktober 2026.
export const vacatures = [
  ['Commercieel Medewerker Binnendienst Maritiem', 'Sales'],
  ['Commercieel Medewerker Binnendienst Bouw', 'Sales'],
  ['Junior Applicateur Kunststof Vloersystemen', 'Operations'],
  ['Productiemedewerker Bolidt', 'Productie'],
  ['Productiemedewerker Esthec', 'Productie'],
  ['Meewerkend Teamleider Technische Dienst', 'Technische Dienst'],
  ['Magazijnmedewerker Outbound', 'Logistiek'],
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const mailMet = (onderwerp: string, tekst: string) => `mailto:${site.mail}?subject=${encodeURIComponent(onderwerp)}&body=${encodeURIComponent(tekst)}`;
