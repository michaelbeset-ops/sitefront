// Feiten (bekeken 10 oktober 2026), bronnen en screenshots in bron/:
// - Google: "TempoFloors", Vloerenlegger, 5,0 uit 58 reviews. Iepenwede, 2993 GD Barendrecht (woonwijk: alleen plaats tonen).
//   06 50454571. Website-knop tempofloors.nl = 404 (Mijndomein "Domein Gereserveerd", bron/web/oud-390.png en oud-1440.png).
//   Geen openingstijden op Google (dus niet getoond). Eigen foto's op Google: logo-banner + foto's met watermerk van een ander
//   bedrijf (niet gebruikt).
// - Instagram @tempofloors: "Vloer Specialisten / Verkoop & Advies / Egaliseren - Legservice - Afwerkingen / Nederland".
//   Post 12 juni 2026: diensten-lijst (zie diensten hieronder, letterlijk) + 11 projectfoto's zonder watermerk (bron/ig).
//   Post 1 april 2026: "Wij hebben de hele woning mogen egaliseren & stofferen." Post 23 maart 2026: Den Haag, nieuwbouw.
// - TikTok @tempofloors (bio + e-mail info@tempofloors.nl), posts mrt-okt 2026 (bron/tt/items.json), laatste 9 okt 2026.
// Eigenaarsnaam: NIET in eigen bron (alleen in reviews van klanten), dus niet als eigenaar genoemd.
export const site = {
  naam: 'TempoFloors',
  plaats: 'Barendrecht',
  tel: '06 50 45 45 71',
  telHref: 'tel:+31650454571',
  wa: 'https://wa.me/31650454571',
  mail: 'info@tempofloors.nl',
  instagram: 'https://www.instagram.com/tempofloors/',
  tiktok: 'https://www.tiktok.com/@tempofloors',
  reviews: 'https://www.google.com/maps/place/TempoFloors/@51.853877,4.5029169,17z/data=!4m6!3m5!1s0x4fbb3a732a6d6fb5:0xad80a40e01a401a!8m2!3d51.853877!4d4.5029169!16s%2Fg%2F11ycccrhmf',
  google: { score: '5,0', aantal: 58 },
  themeColor: '#191617',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Letterlijk uit de Instagram-post van 12 juni 2026 (volgorde aangehouden), plus "Stofferen" uit de post van 1 april 2026.
export const diensten = [
  'Verkoop & advies op maat',
  'Bezorgen',
  'Egaliseren',
  'Vloerverwarming dichtsmeren',
  'PVC design vloeren plakken',
  'Klik PVC leggen',
  'Visgraat / Hongaarse punt vloeren leggen',
  'Afwerkingen',
  'Stofferen',
];

// Uit eigen TikTok-bijschriften (datum = publicatiedatum). Tekst ingekort, feiten letterlijk.
export const werk = [
  { wanneer: 'okt 2026', waar: 'Rotterdam', wat: 'Berninitoren: een complete visgraatvloer in een appartement, met de lange hal als uitdaging.' },
  { wanneer: 'jun 2026', waar: 'Brussel', wat: 'Kantoorpand THE SAGE: 650 m² vloerwerk, klik visgraat en tapijttegels.' },
  { wanneer: 'jun 2026', waar: '', wat: '95 m² visgraat PVC, inclusief alle voorbereidingen.' },
  { wanneer: 'mei 2026', waar: 'Hulst', wat: 'Een hele woning: primer, egaliseren, schuren en rechte PVC stroken door het hele huis.' },
  { wanneer: 'mei 2026', waar: '', wat: 'Woning van 3 verdiepingen: dichtsmeren, egaliseren, schuren, plakken en afwerken.' },
  { wanneer: 'apr 2026', waar: 'Landal vakantiepark', wat: 'Een matching vloer gelegd met klik PVC.' },
  { wanneer: 'apr 2026', waar: 'Dordrecht', wat: 'Van kale vloer naar luxe uitstraling.' },
  { wanneer: 'mrt 2026', waar: 'Den Haag', wat: 'Vrijstaande nieuwbouw: ondervloer geëgaliseerd, visgraat plakvloer, PVC plaktegels in de keuken.' },
];

// Letterlijk van Google (5 sterren), ingekort met "…". Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Pascalle S.', wanneer: '3 maanden geleden', tekst: 'Onze vloer is eerst geëgaliseerd en daarna in één dag perfect gelegd, inclusief plinten, afwerking en het inkorten van de deuren. … Een echte vakman die kwaliteit levert.' },
  { naam: 'Timo v.', wanneer: '3 maanden geleden', tekst: 'Alles is keurig keurig ge-egaliseerd, geschuurd en pvc vloer ingelijmd. Er wordt goed overlegd, en ik heb nog geen foutje kunnen ontdekken.' },
  { naam: 'Thirza V.', wanneer: '4 maanden geleden', tekst: 'Echte vakman. Daarnaast denkt hij graag mee in oplossingen. … Goede service, en laagdrempelig contact.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hoi TempoFloors, ik heb een vraag over een nieuwe vloer.');
