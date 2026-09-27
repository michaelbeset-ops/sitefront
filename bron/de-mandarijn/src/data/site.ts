// Feiten van de-mandarijn.nl (alle pagina's) en het Google-profiel (4,1 uit 323).
export const site = {
  naam: 'Chinees Restaurant De Mandarijn',
  kort: 'De Mandarijn',
  straat: 'Biesbos 1',
  toevoeging: 'Winkelcentrum Walburg',
  postcode: '3332 EC',
  plaats: 'Zwijndrecht',
  tel: '078 612 76 38',
  telHref: 'tel:+31786127638',
  tel2: '078 612 47 88',
  tel2Href: 'tel:+31786124788',
  mail: 'info@de-mandarijn.nl',
  maps: 'https://www.google.com/maps/search/?api=1&query=De+Mandarijn+Biesbos+1+Zwijndrecht',
  themeColor: '#10231f',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
