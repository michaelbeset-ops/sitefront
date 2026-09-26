// Feiten van wapenvanstrijen.nl en het Google-profiel. Prijzen en openingstijden op de oude site
// spreken elkaar tegen of zijn verouderd; die staan daarom als [[AANLEVEREN]] op de pagina.
export const site = {
  naam: 'Herberg Het Wapen van Strijen',
  kort: 'Het Wapen van Strijen',
  straat: 'Molenstraat 7',
  postcode: '3291 EE',
  plaats: 'Strijen',
  tel: '078 674 16 92',
  telHref: 'tel:+31786741692',
  mail: 'wapenvanstrijen@planet.nl',
  maps: 'https://www.google.com/maps/search/?api=1&query=Het+Wapen+van+Strijen+Molenstraat+7+Strijen',
  themeColor: '#5a1a1d',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
