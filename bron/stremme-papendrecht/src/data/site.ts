// Feiten (bekeken 7 oktober 2026), ruwe bronnen in ../../bron:
// - stremme.nl via webarchief (okt 2025 en 13 apr 2026): teksten, opgericht 1999, Perry Stremme, T 078 - 615 36 39,
//   M 06 - 24 63 19 63 (ook storingsnummer), info@stremme.nl. Huidige site geeft 404.
// - Google-bedrijfsprofiel: elektricien, 5,0 uit 7 reviews, Papendrecht. Straat bewust niet getoond.
export const site = {
  naam: 'Stremme Technisch Onderhoud',
  kort: 'Stremme',
  eigenaar: 'Perry Stremme',
  plaats: 'Papendrecht',
  tel: '078 615 36 39',
  telHref: 'tel:+31786153639',
  mobiel: '06 24 63 19 63',
  mobielHref: 'tel:+31624631963',
  wa: 'https://wa.me/31624631963',
  mail: 'info@stremme.nl',
  google: 'https://www.google.com/maps/search/?api=1&query=Stremme+Technisch+Onderhoud+Papendrecht',
  maps: 'https://www.google.com/maps/search/?api=1&query=Stremme+Technisch+Onderhoud+Papendrecht',
  themeColor: '#004895',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Goedendag, ik heb een vraag voor Stremme Technisch Onderhoud.');
