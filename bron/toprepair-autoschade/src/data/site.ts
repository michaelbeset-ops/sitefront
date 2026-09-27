// Feiten van toprepair.nl (alle frames) en het Google-profiel (4,9 uit 15, openingstijden).
export const site = {
  naam: 'TopRepair Autoschade',
  straat: 'Brouwerstraat 4',
  postcode: '2984 AR',
  plaats: 'Ridderkerk',
  tel: '0180 41 14 71',
  telHref: 'tel:+31180411471',
  mail: 'info@toprepair.nl',
  maps: 'https://www.google.com/maps/search/?api=1&query=TopRepair+Autoschade+Brouwerstraat+4+Ridderkerk',
  themeColor: '#0b1f4a',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
