// Feiten van gerritscholten.nl (home, profiel, diensten, projecten 1 t/m 9, voorbeeldwoningen 2-onder-1-kap en vrijstaand,
// contact) en het Google-profiel (5,0 uit 5 reviews). Geen openingstijden op de oude site: daarom weggelaten.
export const site = {
  naam: 'Bouwkundig Tekenburo Gerrit Scholten',
  kort: 'Gerrit Scholten',
  straat: 'Veldkampseweg 6-B',
  postcode: '8181 LN',
  plaats: 'Heerde',
  tel: '0578 631 701',
  telHref: 'tel:+31578631701',
  fax: '0578 631 686',
  mail: 'info@gerritscholten.nl',
  maps: 'https://www.google.com/maps/search/?api=1&query=Veldkampseweg+6-B+8181+LN+Heerde',
  google: '5,0',
  reviews: 5,
  sinds: 1988,
  kvk: '08049513',
  themeColor: '#1c1516',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
