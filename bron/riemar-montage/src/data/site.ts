// Feiten: bron/google-profiel.txt en bron/kvk-gidsen.txt (bekeken 5 november 2026).
// Dordrecht (adres bewust niet tonen). 06 54 94 81 89 (Google). Eenmanszaak, opgericht 01-09-2004, KvK 24366793.
// Badkamers en keukens monteren en onderhouden, interieurbouw, timmerwerk, reparatie en onderhoud van schepen.
// Geen website, geen openingstijden, geen eigenaarsnaam bekend. Eén Google-review.
export const site = {
  naam: 'Riemar Montage',
  plaats: 'Dordrecht',
  kvk: '24366793',
  tel: '06 54 94 81 89',
  telHref: 'tel:+31654948189',
  wa: 'https://wa.me/31654948189',
  reviews: 'https://www.google.com/maps/place/Riemar+Montage/@51.7690013,4.6439342,17z/data=!4m6!3m5!1s0x47c428b4505df577:0x31b6bc951c6f9add!8m2!3d51.7690013!4d4.6439342',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

export const diensten = ['Badkamers', 'Keukens', 'Tegelwerk en sanitair', 'Interieurbouw', 'Timmerwerk', 'Onderhoud schepen'];

// Letterlijk van Google (enige review, 5 november 2026).
export const review = {
  naam: 'H. S.',
  wanneer: '6 jaar geleden',
  tekst: 'Kan iedereen dit bedrijf aanbevelen. Werken netjes, precies en denken mee.',
  punten: ['Responsiviteit', 'Kwaliteit', 'Professionaliteit', 'Waarde'],
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waAlgemeen = waMet('Hallo Riemar, ik heb een klus waar ik het graag over wil hebben.');
