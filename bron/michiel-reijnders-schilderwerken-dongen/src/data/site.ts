// Feiten: mrschilderwerken.nl (bekeken 4 oktober 2026) en Google-bedrijfsprofiel "Michiel Reijnders" (5,0 uit 5 reviews,
// ma t/m vr 08:00-17:00, za en zo gesloten). Deken Oomenstraat 3, 5104 BA Dongen. 06 40373035. KvK 54556457.
export const site = {
  naam: 'Michiel Reijnders Schilderwerken',
  kort: 'Michiel Reijnders',
  straat: 'Deken Oomenstraat 3',
  postcode: '5104 BA',
  plaats: 'Dongen',
  tel: '06 403 73 035',
  telHref: 'tel:+31640373035',
  wa: 'https://wa.me/31640373035',
  mail: 'contact@mrschilderwerken.nl',
  kvk: '54556457',
  maps: 'https://www.google.com/maps/search/?api=1&query=Michiel+Reijnders+Schilderwerken+Deken+Oomenstraat+3+Dongen',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Michiel+Reijnders+Schilderwerken+Dongen',
  google: { score: '5,0', aantal: 5 },
  themeColor: '#14191b',
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

// Diensten: hun site (buiten, binnen, wandafwerking, houtrot reparaties, kleur en klus advies, decoratieve technieken),
// de belettering op hun bus (behangen, kleuradvies) en de Google-review over kitwerk.
export const chips = ['Buitenschilderwerk', 'Binnenschilderwerk', 'Houtrot herstel', 'Behangen', 'Wandafwerking', 'Kitwerk', 'Decoratieve technieken', 'Kleuradvies'];

// Letterlijk van Google (stand 4 oktober 2026). Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Ilse K.', wanneer: '8 maanden geleden', tekst: 'Wauw, vandaag heeft Michiel bij ons de wand behangen en wat zijn we er blij mee.. Super werk verricht, nogmaals onze dank.' },
  { naam: 'Dirk B.', wanneer: '11 maanden geleden', tekst: 'Een vriendelijke, ervaren vakman. Michiel heeft het kitwerk van onze kozijnen vernieuwd. Alles verliep op een prettige manier en het resultaat is goed! Wij kunnen Michiel iedereen aanraden.' },
  { naam: 'Hans B.', wanneer: '7 jaar geleden', tekst: 'Wij hebben het schilderwerk aan de buitenkant van ons huis (jaren 30 woning) laten uitvoeren door Michiel Reijnders Schilderwerken. We zijn hier erg tevreden over. Michiel denkt mee over de mogelijkheden en heeft alles (schilderwerk en houtrot herstel) keurig uitgevoerd.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waOfferte = waMet('Goedendag Michiel, ik wil graag een vrijblijvende offerte voor schilderwerk.');
