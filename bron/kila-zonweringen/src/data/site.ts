// Feiten van kila-zonweringen.nl, het Google-profiel (4,9 uit 8, openingstijden) en Facebook.
export const site = {
  naam: 'Kila Zonweringen',
  straat: 'Sweelinckplantsoen 98',
  postcode: '3335 AP',
  plaats: 'Zwijndrecht',
  tel: '06 12 37 37 21',
  telHref: 'tel:+31612373721',
  mail: 'info@kila-zonweringen.nl',
  facebook: 'https://www.facebook.com/Kilazonweringen/',
  themeColor: '#1b2230',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
