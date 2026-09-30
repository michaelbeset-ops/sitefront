// Feiten van vandegraafrietendaken.nl (home, fotoalbum met bijschriften per foto, contactgegevens, garantie, contactformulier)
// en het Google-profiel (4,7 uit 3 reviews, 30-09-2026). Openingstijden en KvK staan niet op de site.
export const site = {
  naam: 'Van de Graaf Rieten Daken',
  juridisch: 'Rietdekkersbedrijf Van de Graaf Rieten Daken',
  eigenaar: 'Gert-Jan van de Graaf',
  straat: 'Rivierdijk 15',
  postcode: '3372 BE',
  plaats: 'Hardinxveld-Giessendam',
  tel: '0184 618 792',
  telHref: 'tel:+31184618792',
  mobiel: '06 23 80 92 53',
  mobielHref: 'tel:+31623809253',
  whatsapp: 'https://wa.me/31623809253',
  mail: 'info@vandegraafrietendaken.nl',
  facebook: 'https://www.facebook.com/vandegraafrietendaken',
  maps: 'https://www.google.com/maps/search/?api=1&query=Van+de+Graaf+Rieten+Daken+Rivierdijk+15+Hardinxveld-Giessendam',
  google: '4,7',
  reviews: 3,
  kvk: '[[AANLEVEREN: KvK-nummer]]',
  themeColor: '#1b1712',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
