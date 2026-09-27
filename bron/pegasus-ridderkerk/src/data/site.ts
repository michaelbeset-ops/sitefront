// Feiten van pegasusridderkerk.nl (alle pagina's) en het Google-profiel (4,6 uit 516).
export const site = {
  naam: 'Restaurant Pegasus',
  kort: 'Pegasus',
  straat: 'Haven 24',
  postcode: '2984 BR',
  plaats: 'Ridderkerk',
  tel: '0180 43 39 02',
  telHref: 'tel:+31180433902',
  mail: 'info@pegasusridderkerk.nl',
  facebook: 'https://www.facebook.com/PegasusRidderkerk',
  maps: 'https://www.google.com/maps/search/?api=1&query=Restaurant+Pegasus+Haven+24+Ridderkerk',
  themeColor: '#101a2c',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
