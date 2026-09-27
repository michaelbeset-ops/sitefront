// Feiten van kleiszilverschoon.nl (alle pagina's) en het Google-profiel (4,5 uit 12).
export const site = {
  naam: 'Fa. Kleis Zilverschoon',
  straat: 'Pieter Repelaerstraat 60',
  postcode: '3297 BM',
  plaats: 'Puttershoek',
  tel: '078 676 12 37',
  telHref: 'tel:+31786761237',
  mail: 'info@kleiszilverschoon.nl',
  maps: 'https://www.google.com/maps/search/?api=1&query=Kleis+Zilverschoon+Pieter+Repelaerstraat+60+Puttershoek',
  themeColor: '#3a1f36',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
