// Feiten (zie bron/): webarchief bouwbedrijfwm.nl (2017: diensten, werkgebied, over ons, 06-51403126, info@bouwbedrijfwm.nl,
// Einsteinstraat 67), Google-profiel (Bouwbedrijf, Einsteinstraat 67, 3316 GG Dordrecht, 06 51403126, geen reviews, geen tijden),
// Facebook (intro, Dordrecht 3316 GG). Geen KvK, geen openingstijden, geen reviews gevonden: weggelaten.
export const site = {
  naam: 'W&M bouw en onderhoud',
  naamBv: 'W&M bouw en onderhoud B.V.',
  straat: 'Einsteinstraat 67',
  postcode: '3316 GG',
  plaats: 'Dordrecht',
  tel: '06 51 40 31 26',
  telHref: 'tel:+31651403126',
  mail: 'info@bouwbedrijfwm.nl',
  wa: 'https://wa.me/31651403126',
  facebook: 'https://www.facebook.com/people/WM-Bouw-en-Onderhoud-BV/100067189149818/',
  maps: 'https://www.google.com/maps/dir/?api=1&destination=W%26M+bouw+en+onderhoud+Einsteinstraat+67+3316+GG+Dordrecht',
  themeColor: '#141a2b',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Werkgebied van hun eigen site: "Dordrecht Zwijndrecht Rotterdam Ambacht Ridderkerk Papendrecht Sliedrecht".
export const plaatsen = ['Dordrecht', 'Zwijndrecht', 'Hendrik-Ido-Ambacht', 'Papendrecht', 'Sliedrecht', 'Ridderkerk', 'Rotterdam'];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo W&M, ik wil graag een vrijblijvende offerte aanvragen.');
