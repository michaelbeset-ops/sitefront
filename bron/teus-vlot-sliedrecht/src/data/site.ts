// Feiten (bekeken 7 oktober 2026), bronnen in bron/:
// - teusvlot.com/nl: "Professionals in maritieme oplossingen", "Direct service? Bel (+31) 184 493 888 of plaats een melding",
//   brochure (files/brochure_nl), vacatures (titels + taglines), vijf groepsbedrijven met eigen site.
// - teusvlotdieselmarine.com: Teus Vlot Diesel & Marine B.V., Baanhoek 182b, 3361 GN Sliedrecht, +31 (0)184 493 888, info@teusvlot.nl,
//   KvK 23087243 (privacy statement). Home: "Betrouwbaar motoronderhoud, revisie en service sinds 1992", "alle disciplines onder één dak",
//   "één aanspreekpunt". Over: "Met meer dan 60 medewerkers", "eigen insteekhaven en twee torenkranen". Dieseltechniek: "56.640
//   serviceopdrachten vervuld in de afgelopen 20 jaar", "6,2 miljoen verreden kilometers". Onderhoud: "Binnen 90 minuten reactie op 90%
//   van de vragen", servicehaven "direct aan de Beneden-Merwede". Dealerschappen: Scania, Baudouin, Cummins, AGCO Power, John Deere,
//   Alphatron; service aan Caterpillar, Deutz, DAF, MAN, Volvo, Yanmar.
// - Brochure p4-5 "Alle disciplines onder één dak": werkplaats/loods/haven/kranen/magazijn; p22-23 "De motor van uw bedrijf".
// - DMS: Sopraanweg 9, 3363 LS Sliedrecht, officieel Cummins dealer marine en industrie, sinds 2014 in de groep.
// - Cornerpoint: Baanhoek 182b, wereldwijde levering van motoren en onderdelen, sinds 2008 in de groep (geschiedenis).
// - LinkedIn Teus Vlot Diesel Marine: "Officieel Cummins en Scania dealer", post "Van Detroit Diesel naar Scania power!".
// - Google: Teus Vlot Diesel Marine B.V., 0184 493 888 (score niet tonen).
// WhatsApp-06 en 06-nummers van medewerkers bewust NIET gebruikt (brief).
export const site = {
  naam: 'Teus Vlot Groep',
  bv: 'Teus Vlot Diesel & Marine B.V.',
  straat: 'Baanhoek 182b',
  postcode: '3361 GN',
  plaats: 'Sliedrecht',
  tel: '+31 (0)184 493 888',
  telKort: '0184 493 888',
  telHref: 'tel:+31184493888',
  mail: 'info@teusvlot.nl',
  mailVacatures: 'vacatures@teusvlot.nl',
  kvk: '23087243',
  vacatures: 'https://teusvlot.com/nl/vacatures',
  brochure: 'https://teusvlot.com/files/brochure_nl/index.html',
  linkedin: 'https://www.linkedin.com/company/teus-vlot-diesel-marine',
  maps: 'https://www.google.com/maps/search/?api=1&query=Teus+Vlot+Diesel+Marine+Baanhoek+182b+Sliedrecht',
  themeColor: '#002858',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// De vijf bedrijven (teusvlot.com/nl + hun eigen sites). Kleur = de kleur van hun eigen logo/brochurepagina.
export const bedrijven = [
  { id: 'tvdm', naam: 'Diesel & Marine', vol: 'Teus Vlot Diesel & Marine', kleur: '#0098a8', href: 'https://teusvlotdieselmarine.com/',
    tekst: 'Onderhoud, revisie en hermotorisering van voortstuwingsmotoren, generatorsets en keerkoppelingen. 24/7 service op locatie in binnen- en buitenland.' },
  { id: 'tve', naam: 'Elektrotechniek', vol: 'Teus Vlot Elektrotechniek', kleur: '#e85008', href: 'https://teusvlotelektrotechniek.nl/',
    tekst: 'Paneelbouw, PLC-besturingen, NEN 3140-inspecties, storingsdiagnose en inbedrijfstelling aan boord.' },
  { id: 'tvrt', naam: 'Revisie Techniek', vol: 'Teus Vlot Revisie Techniek', kleur: '#708080', href: 'https://teusvlotrevisie.nl/',
    tekst: 'Cilinderkoppen, motorblokken en drijfstangen: ultrasoon reinigen, afpersen, vlakken, honen en kotteren.' },
  { id: 'dms', naam: 'DMS Diesel Motoren Service', vol: 'Diesel Motoren Service (DMS)', kleur: '#f00040', href: 'https://dieselmotorenservice.nl/nl/',
    tekst: 'Officieel Cummins dealer voor marine én industrie, met een voorraad nieuwe en gereviseerde Cummins-motoren.' },
  { id: 'cp', naam: 'Cornerpoint', vol: 'Cornerpoint, Marine & Industrial Parts', kleur: '#1d8fd0', href: 'https://cornerpoint.nl/',
    tekst: 'Wereldwijde levering van dieselmotoren, onderdelen en toebehoren, professioneel verpakt op de eerste beschikbare vlucht.' },
];

// Typeplaatje van de werf: brochure "Alle disciplines onder één dak" (p5), letterlijk overgenomen.
export const werf = [
  ['Diesel werkplaats', '715 m²', 'met 2 bovenloopkranen, 8 ton per stuk'],
  ['Constructieloods', '740 m²', 'met 2 bovenloopkranen, 20 ton per stuk'],
  ['Eigen haven', '205 m', 'kade'],
  ['Torenkraan', '50 m / 15 t', 'max. bereik en hijsvermogen'],
  ['Torenkraan', '45 m / 8 t', 'max. bereik en hijsvermogen'],
  ['Magazijn', '441 m²', 'meer dan 15.000 service-artikelen op voorraad'],
  ['Motoren opslag', '1200 m²', ''],
];

export const dealers = ['Scania', 'Cummins', 'Baudouin', 'AGCO Power', 'John Deere', 'Alphatron'];
export const anderemerken = ['Caterpillar', 'Deutz', 'DAF', 'MAN', 'Volvo', 'Yanmar'];

// teusvlot.com/nl/vacatures, stand 7 oktober 2026 (titel + hun eigen tagline).
export const vacatures = [
  ['Servicemonteur Dieseltechniek', 'Iedere dag een technisch avontuur!', 'https://teusvlot.com/nl/vacatures/7/76/servicemonteur-dieseltechniek'],
  ['Servicemonteur Elektrotechniek', 'Uitdagende baan met spanning.', 'https://teusvlot.com/nl/vacatures/7/78/servicemonteur-elektrotechniek'],
  ['Servicemonteur Dieseltechniek DMS', 'Cummins specialist (in wording).', 'https://teusvlot.com/nl/vacatures/7/70/servicemonteur-dieseltechniek-dms'],
  ['IJzerwerker / Inbouwer', 'Techneut met inzicht', 'https://teusvlot.com/nl/vacatures/7/108/ijzerwerker-inbouwer'],
  ['Allround engineer Setbouw en Motorenrevisies', 'Bouwen aan krachtige oplossingen.', 'https://teusvlot.com/nl/vacatures/7/133/allround-engineer-setbouw-en-motorenrevisies'],
  ['Service Coördinator', 'Techniek, klantcontact, dynamisch, service', 'https://teusvlot.com/nl/vacatures/7/135/service-coordinator'],
  ['Werkvoorbereider (junior)', 'Techniek, dynamisch, service, voorbereiding', 'https://teusvlot.com/nl/vacatures/7/137/werkvoorbereider'],
  ['Technisch Commercieel Medewerker', 'Technisch, commercieel, service', 'https://teusvlot.com/nl/vacatures/7/123/technisch-commercieel-medewerker'],
  ['(Jr.) Technisch Sales Medewerk(st)er', 'Technisch, commercieel, relatiebeheer', 'https://teusvlot.com/nl/vacatures/7/139/jr-technisch-sales-medewerk-st-er-binnen-buitendienst'],
  ['Administratief medewerk(st)er Sales', 'Administratief, sales, technisch', 'https://teusvlot.com/nl/vacatures/7/142/administratief-medewerk-st-er-sales-binnendienst'],
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
