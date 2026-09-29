// Feiten van gebrheemskerk.nl (home/over ons, nieuws, constructie, service op locatie, projecten, land- en tuinbouw,
// merken, tuin en park, occasions, recent afgeleverd, contact) en het Google-profiel (4,6 uit 33 reviews).
export const site = {
  naam: 'Gebr. Heemskerk',
  volledig: 'Mechanisatie- en Constructiebedrijf Gebr. Heemskerk',
  juridisch: 'Gebr. Heemskerk bv',
  straat: 'IJweg 1612',
  postcode: '2152 ND',
  plaats: 'Nieuw-Vennep',
  tel: '0252 672 823',
  telHref: 'tel:+31252672823',
  mail: 'info@gebrheemskerk.nl',
  verkoper: 'Tom van der Wind',
  mobiel: '06 19 09 61 85',
  mobielHref: 'tel:+31619096185',
  whatsapp: 'https://wa.me/31619096185',
  maps: 'https://www.google.com/maps/search/?api=1&query=Gebr.+Heemskerk+IJweg+1612+Nieuw-Vennep',
  google: '4,6',
  reviews: 33,
  kvk: '[[AANLEVEREN: KvK-nummer]]',
  themeColor: '#15181b',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
