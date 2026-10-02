// Feiten van personaltrainingenbarendrecht.nl via web.archive.org (de site zelf geeft ERR_TOO_MANY_REDIRECTS):
// Home (dec 2025), Personal Trainingen (mrt 2025), Hardlopen (mrt 2025), Size Less (dec 2025), Online Fitness (dec 2023),
// Contact (mrt 2025: Zwolseweg 26, 0642090071, info@..., KvK 68776365), Personal trainer Antoon (apr 2025).
// Google-bedrijfsprofiel (2 okt 2026): 4,8 uit 8 reviews, "Personal trainer", ma-vr 09:00-21:00, za 09:00-12:00, zo gesloten.
// Achternaam: de site schrijft "van Kroesveld", zijn eigen Google-account en Instagram "van Koesveld"; de demo noemt alleen "Antoon".
export const site = {
  naam: 'Personal Trainingen Barendrecht',
  kort: 'Personal Trainingen',
  straat: 'Zwolseweg 26',
  postcode: '2994 LB',
  plaats: 'Barendrecht',
  tel: '06 42 09 00 71',
  telHref: 'tel:+31642090071',
  wa: 'https://wa.me/31642090071',
  mail: 'info@personaltrainingenbarendrecht.nl',
  kvk: '68776365',
  google: '4,8',
  googleAantal: 8,
  maps: 'https://www.google.com/maps/search/?api=1&query=Personal+Trainingen+Barendrecht+Zwolseweg+26',
  tijden: [
    ['Maandag tot en met vrijdag', '09.00 tot 21.00'],
    ['Zaterdag', '09.00 tot 12.00'],
    ['Zondag', 'gesloten'],
  ],
  themeColor: '#4d0a0e',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent('Hallo, ' + tekst)}`;
