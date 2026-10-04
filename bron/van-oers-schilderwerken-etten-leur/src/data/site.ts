// Feiten: eigen website vanoers-schilderwerken.nl (bekeken 4 oktober 2026) en Google-bedrijfsprofiel "Van Oers Schilderwerken"
// (5,0 uit 5 reviews, geen openingstijden vermeld). Eigenaar Jack van Oers (ondertekent de homepage). Havik 10, 4872 WG Etten-Leur.
// GSM 06 420 766 36, info@vanoers-schilderwerken.nl, KvK 20 13 10 34 (contactpagina). Openingstijden zijn nergens gepubliceerd.
export const site = {
  naam: 'Van Oers Schilderwerken',
  eigenaar: 'Jack van Oers',
  straat: 'Havik 10',
  postcode: '4872 WG',
  plaats: 'Etten-Leur',
  tel: '06 420 766 36',
  telHref: 'tel:+31642076636',
  wa: 'https://wa.me/31642076636',
  mail: 'info@vanoers-schilderwerken.nl',
  kvk: '20131034',
  maps: 'https://www.google.com/maps/search/?api=1&query=Van+Oers+Schilderwerken+Havik+10+Etten-Leur',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Van+Oers+Schilderwerken+Etten-Leur',
  google: { score: '5,0', aantal: 5 },
  themeColor: '#0c2238',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Diensten: precies de menu-onderdelen van hun huidige site.
export const diensten = ['Buitenschilderwerk', 'Binnenschilderwerk', 'Beglazing', 'Behang en glasvlies', 'Houtrotreparaties', 'Kleuradvies'];

// Letterlijk van Google (stand 4 oktober 2026). Van de 5 reviews hebben er 3 tekst; alle 5 zijn 5 sterren.
export const reviews = [
  { naam: 'Peter de G.', wanneer: '4 maanden geleden', tekst: 'Uitstekend vakwerk voor een redelijke prijs.' },
  { naam: 'Jerry', wanneer: '5 jaar geleden', tekst: 'Aardige schilders, snelle service en mooi vakwerk geleverd. Denken mee en geven goed advies.' },
  { naam: 'Jorg V.', wanneer: '4 jaar geleden', tekst: 'Heel vriendelijk personeel en leveren mooi schilderwerk' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waOfferte = waMet('Goedendag Jack, ik wil graag een offerte voor schilderwerk.');
