// Feiten (bekeken 7 oktober 2026), allemaal uit eigen bronnen:
// - recreatieboerderijhollywoud.nl: Home, Het erf, Parkeren, Impressie, Eten, Spellen, Prijs, Workshop, Contact, Historie,
//   Huisregels, Algemene voorwaarden (kopie in bron/site/).
// - Google-profiel "boerderij Hollywoud" (Evenementenlocatie): Blokland 112, 3417 MR Montfoort, 06 24582507, 4,3 uit 57
//   (score niet tonen, < 4,4), geen openingstijden, niet geclaimd.
// - Facebook "Stroberg Montfoort": 273 volgers, intro "Locatie te huur voor feest, familiedag, vergadering, worksop,
//   verjaardag, etc", laatste post 21 augustus 2026.
export const site = {
  naam: 'Boerderij Hollywoud',
  kort: 'Hollywoud',
  straat: 'Blokland 112',
  postcode: '3417 MR',
  plaats: 'Montfoort',
  tel: '06 24 58 25 07',
  telHref: 'tel:+31624582507',
  wa: 'https://wa.me/31624582507',
  mail: 'witte.mik@gmail.com',
  facebook: 'https://www.facebook.com/people/Stroberg-Montfoort/100057112763540/',
  film: 'https://www.youtube.com/watch?v=-XvCgKePqVo',
  maps: 'https://www.google.com/maps/search/?api=1&query=boerderij+Hollywoud+Blokland+112+Montfoort',
  themeColor: '#191e1a',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Prijzen letterlijk van hun site (Home en Prijs). Vanaf 1 januari 2027 € 25 hoger.
export const prijs = {
  feest: 400, trouw: 1200,
  feest2027: 425, trouw2027: 1275,
};

// Spellen-pagina: "De huurpijs voor één spel is 5 euro, 5 spellen 20 euro en 35 euro voor alle 13 spellen."
export const spellen = ['Evenwichtsrond', 'Gatenkaas', 'Tafelbiljart', 'Hoefijzergooien', 'Ringwerpen', 'Behendigheidsspiraal', 'Schaaktafel', 'Kubbspel', 'Zaklopen', 'Touwtrekken', 'Croquet', 'Jenga', 'Mikado'];
export const standaard = ['2 klompenspellen', '2 oude sjoelbakken', 'pingpongtafel', '2 tafelvoetbalspellen', 'trampoline & hooiberg', 'basketbalpaal', 'dartbord', 'oude fietsjes en skelters'];

// Eten-pagina: "Cateraars die eerder bij ons zijn geweest en waar mensen tevreden over waren zijn:"
export const cateraars: [string, string][] = [
  ['Frietkar Lopik', 'http://www.frietkarlopik.nl/'],
  ['Frietvanbrandweermanpiet', 'https://www.frietvanbrandweermanpiet.nl/'],
  ['MRFoodtruck', 'https://www.mrfoodtruck.nl/'],
  ['De Grillburger', 'http://www.degrillburger.nl/'],
  ['Kokkie en Wokkie', 'http://www.wokkenoplocatie.nl/'],
  ['Groene Hart Crepes', 'http://www.groenehartcrepes.nl/'],
  ['Indonesiaindah.nl', 'http://www.indonesiaindah.nl/'],
  ['Brasserie Broers', 'http://www.brasseriebroers.nl/'],
  ['Mas Mik', 'http://www.masmik.nl/'],
  ['Aleppo Kitchen', 'http://www.aleppokitchen.nl/'],
  ['Koffiekar', 'http://www.mobielekoffiebeleving.nl/'],
  ['Avontuurlijk buiten koken', 'http://www.hetbuiten.nu/'],
  ['Privé chef', 'https://www.devlammendechef.nl'],
];

// Letterlijk van Google (positief, stand 7 oktober 2026). Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Aukje S.', wanneer: '11 maanden geleden', tekst: 'Alleen maar vol lof!! Volgend jaar gaan we onze fam dag daar weer doen. In het echt nog leuker dan de website.' },
  { naam: 'Robbert C.', wanneer: 'een jaar geleden', tekst: 'Je mag het terrein gebruiken. Je eigen eten en drinken meenemen. Locatie is waanzinnig. Eigenaar super vriendelijk.' },
  { naam: 'Susanne v.', wanneer: '2 jaar geleden', tekst: 'Bruiloft gevierd. Zo knus en romantisch, heel gezellig gehad.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo! Ik wil graag het erf van Hollywoud huren. Is mijn datum nog vrij?');
