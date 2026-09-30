// Feiten van dekroonolst.nl (home, huis aan huis, drukkerij, handelsdrukwerk, reclamedrukwerk, boeken, kaarten, uitgeverij,
// over ons, contact) en het Google-profiel (5,0 uit 4 reviews). Openingstijden staan niet op de site.
export const site = {
  naam: 'Drukkerij de Kroon',
  juridisch: 'Drukkerij de Kroon Olst b.v.',
  straat: 'Spoorstraat 15',
  postcode: '8121 CK',
  plaats: 'Olst',
  postbus: 'Postbus 30',
  postbusPc: '8120 AA Olst',
  tel: '0570 56 13 25',
  telHref: 'tel:+31570561325',
  fax: '0570 56 41 54',
  mail: 'info@dekroonolst.nl',
  maps: 'https://www.google.com/maps/search/?api=1&query=Drukkerij+de+Kroon+Spoorstraat+15+Olst',
  google: '5,0',
  reviews: 4,
  kvk: '38025221',
  themeColor: '#1d1918',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
