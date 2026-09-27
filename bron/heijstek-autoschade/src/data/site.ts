// Feiten van heijstekautoschade.nl (alle pagina's) en het Google-profiel (4,1 uit 41, openingstijden).
export const site = {
  naam: 'Autoschade Herstel Heijstek',
  straat: 'Vierlinghstraat 35',
  postcode: '4251 LC',
  plaats: 'Werkendam',
  tel: '0183 50 37 65',
  telHref: 'tel:+31183503765',
  arjan: '06 55 75 81 52',
  arjanHref: 'tel:+31655758152',
  wim: '06 53 78 14 06',
  wimHref: 'tel:+31653781406',
  mail: 'info@heijstekautoschade.nl',
  maps: 'https://www.google.com/maps/search/?api=1&query=Autoschade+Herstel+Heijstek+Vierlinghstraat+35+Werkendam',
  themeColor: '#0f3d3e',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
