// Feiten (bekeken 8 oktober 2026), bronnen in bron/:
// - ecologicpelletkachels.nl (WordPress; pagina's en berichten via wp-json in bron/web/txt):
//   tel 06-2417 0446, info@ecologicpelletkachels.nl, Delfzijlsingel 28 Almere (BAG: woonfunctie, dus alleen "Almere" tonen),
//   menu "Bezichtiging alleen op afspraak". Merken: Kalor, Winteröfen, Qlima (pelletkachels), Biodom (cv-pelletketels),
//   plus warmtepompen, zonneboilers, thuisbatterij (pagina bijgewerkt feb 2026). Installatie-uitleg (afvoerbuis 80 mm,
//   stopcontact met aarding, brandwerende ondergrond) uit "Hoe installeer je een pelletkachel". Onderhoud: "Ook is het mogelijk
//   om het jaarlijks onderhoud aan uw pelletkachel door ons te laten uitvoeren" (Wat is een pelletkachel?).
//   m³ en kW per model letterlijk uit de spec-tabellen op hun modelpagina's. GEEN prijzen of subsidiebedragen overnemen.
// - Google-profiel: 4,9 uit 63 reviews, foto's "Van eigenaar" (o.a. visitekaartje "Patrick Jonkers"); eigenaar ondertekent
//   antwoorden met "Gr Patrick". Laatste reviews ~10 maanden oud.
export const site = {
  naam: 'Ecologic Pelletkachels',
  kort: 'Ecologic',
  eigenaar: 'Patrick Jonkers',
  plaats: 'Almere',
  tel: '06 24 17 04 46',
  telHref: 'tel:+31624170446',
  wa: 'https://wa.me/31624170446',
  mail: 'info@ecologicpelletkachels.nl',
  web: 'https://www.ecologicpelletkachels.nl/',
  instagram: 'https://www.instagram.com/ecologicpelletkachels/',
  reviews: 'https://www.google.com/maps/place/Ecologic+Pelletkachels/@52.3720117,5.2146319,17z/data=!4m6!3m5!1s0x47c616dfd232f209:0x2719c6da2f249839!8m2!3d52.3720117!4d5.2146319!16s%2Fg%2F11cm24rqx7',
  google: { score: '4,9', aantal: 63 },
  themeColor: '#121611',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

const W = 'https://www.ecologicpelletkachels.nl';

// Modellen met vermogen en "geschikt voor ruimtes tot (m³)" zoals op hun eigen modelpagina's.
export type Model = { naam: string; merk: string; kw: string; m3: number; href: string };
export const kachels: Model[] = [
  { merk: 'Kalor', naam: 'Kalor Mini', kw: '5 kW', m3: 125, href: `${W}/pelletkachels/kalor/mini/` },
  { merk: 'Kalor', naam: 'Kalor Petite', kw: '6 kW', m3: 130, href: `${W}/pelletkachels/kalor/kalor-petite/` },
  { merk: 'Kalor', naam: 'Kalor Slim', kw: '6,1 kW', m3: 150, href: `${W}/pelletkachels/kalor/kalor-slim/` },
  { merk: 'Kalor', naam: 'Kalor Nux', kw: '8 kW', m3: 150, href: `${W}/pelletkachels/kalor/kalor-nux/` },
  { merk: 'Kalor', naam: 'Kalor Round', kw: '7,5 kW', m3: 175, href: `${W}/pelletkachels/kalor/round/` },
  { merk: 'Winteröfen', naam: 'Winteröfen Baby', kw: '6 kW', m3: 150, href: `${W}/pelletkachels/baby/` },
  { merk: 'Winteröfen', naam: 'Winteröfen WOC 75', kw: '6,8 kW', m3: 170, href: `${W}/pelletkachels/winterofen-woc-75/` },
  { merk: 'Winteröfen', naam: 'Winteröfen WO 115', kw: '7,6 kW', m3: 210, href: `${W}/pelletkachels/winterofen-wo-115/` },
  { merk: 'Winteröfen', naam: 'Winteröfen WOC 135', kw: '8,9 kW', m3: 225, href: `${W}/pelletkachels/winterofen-woc-115-135/` },
  { merk: 'Winteröfen', naam: 'Winteröfen ESA', kw: '8,8 kW', m3: 240, href: `${W}/pelletkachels/winterofen/winterofen-esa/` },
  { merk: 'Winteröfen', naam: 'Winteröfen ESR Rond', kw: '10 kW', m3: 250, href: `${W}/pelletkachels/winterofen-esr-rond/` },
  { merk: 'Qlima', naam: 'Qlima Fiorina 74', kw: '7,45 kW', m3: 200, href: `${W}/pelletkachels/qlima/fiorina-74-s-line/` },
  { merk: 'Qlima', naam: 'Qlima Ronda 80', kw: '8,02 kW', m3: 230, href: `${W}/pelletkachels/qlima/ronda-80-glass-white/` },
  { merk: 'Qlima', naam: 'Qlima Florina 90', kw: '9 kW', m3: 240, href: `${W}/pelletkachels/qlima/florina90-s-line/` },
  { merk: 'Qlima', naam: 'Qlima Lindara 100', kw: '9,34 kW', m3: 245, href: `${W}/pelletkachels/qlima/lindara-100-s-line/` },
  { merk: 'Qlima', naam: 'Qlima Rosada 103', kw: '10,3 kW', m3: 270, href: `${W}/pelletkachels/qlima/rosada103-m-line/` },
];

// Op de cv (radiatoren / vloerverwarming): cv-pelletkachels en Biodom-pelletketels.
export const cv = [
  { naam: 'Kalor Francesca pellet CV', kw: '13,8 kW effectief', href: `${W}/pelletkachels/kalor/francesca-pellet-cv/` },
  { naam: 'Kalor Nux hydro', kw: '13,8 kW effectief', href: `${W}/pelletkachels/kalor/nux-hydro-double-door/` },
  { naam: 'Biodom H20', kw: '16,5 kW', href: `${W}/pelletkachels/biodom-2/biodom-h20/` },
  { naam: 'Biodom C15', kw: '17 kW', href: `${W}/pelletkachels/biodom-2/biodom-c15/` },
  { naam: 'Biodom LX', kw: '23 kW', href: `${W}/pelletkachels/biodom-2/biodom-lx/` },
  { naam: 'Biodom 27 A', kw: '26,5 kW', href: `${W}/pelletkachels/biodom-2/biodom-27-a/` },
  { naam: 'Biodom 27 C5', kw: '30,8 kW', href: `${W}/pelletkachels/biodom-2/biodom-27-c5/` },
];

export const merken = [
  { naam: 'Kalor', href: `${W}/pelletkachels/kalor/`, zin: 'Houtpelletkachels uit de Venetiaanse provincie in Noord-Italië.' },
  { naam: 'Winteröfen', href: `${W}/pelletkachels/winterofen/`, zin: 'Gemaakt door Esperia in Italië, met energielabel A+.' },
  { naam: 'Qlima', href: `${W}/pelletkachels/qlima/`, zin: 'Verkrijgbaar in diverse modellen en kleuren.' },
  { naam: 'Biodom', href: `${W}/pelletkachels/biodom-2/`, zin: 'Cv-pelletketels die rechtstreeks op uw centrale verwarming worden aangesloten.' },
];

export const ook = [
  ['Warmtepompen', `${W}/nieuw-in-ons-assortiment-de-warmtepompen-van-biodom/`],
  ['Zonneboilers', `${W}/pelletkachels/zonneboilers-2/`],
  ['Thuisbatterij', `${W}/pelletkachels/thuisbatterij/`],
] as const;

// Letterlijk van Google (5 sterren, stand 8 oktober 2026). Naam: voornaam + initiaal.
export const reviews = {
  sylvia: { naam: 'Sylvia v.', wanneer: '10 maanden geleden', tekst: 'Patrick werkt echt super netjes. Hij luistert goed naar jou wensen en denkt mee. Je kunt echt zien dat hij van zijn hobby zijn werk heeft gemaakt.' },
  henk: { naam: 'Henk d.', wanneer: '8 jaar geleden', tekst: 'Vriendelijke lui, Snelle plaatsing vsn pelletkachel, schoorsteen geplaatst met dakdoorvoer, ziet er supernetjes en goed uit!!' },
  jeroen: { naam: 'Jeroen W.', wanneer: '4 jaar geleden', tekst: 'Goed advies over een pellet kachel en deze was snel geleverd. Na installatie werd alles opgeruimd en geveegd en kreeg je een goede uitleg over de werking.' },
  christian: { naam: 'Christian M.', wanneer: '5 jaar geleden', tekst: 'Hij zoekt eerst nauwkeurig uit hoe de bestaande installatie werkt om je dan best passende advies te geven, ook als het advies is beter geen pelletketel te nemen.' },
  dennis: { naam: 'Francis en Dennis V.', wanneer: 'een jaar geleden', tekst: 'Patrick is altijd super vriendelijk en ook al wonen we 2,5uur bij hem vandaan, hij komt gewoon langs als er problemen zijn.' },
  frank: { naam: 'Frank R.', wanneer: '6 jaar geleden', tekst: 'Patrick heeft bij ons de Kalor Petite geplaatst, wat een vondst en wat een service! Ons kacheltje brand als een gek in ons huisje en maakt het heerlijk warm.' },
  elfred: { naam: 'Elfred v.', wanneer: 'een jaar geleden', tekst: 'Top bedrijf , veel kennis van zaken en meedenkend. Bij een storing wordt je direct/zo snel mogelijk geholpen .' },
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Patrick, ik heb een vraag over een pelletkachel.');
