// Feiten van katsnumansdorp.nl (home, grondbewerking, poten en zaaien, gewasverzorging, oogst, grasvoederwinning,
// grondverzet, watertransport, noodoplossingen, zaaien en maaien, onkruid- en ongediertebestrijding, fotoboeken met
// bijschriften) en het Google-profiel (4,6 uit 19 reviews, 30-09-2026). Openingstijden staan niet op de site.
export const site = {
  naam: 'Loonbedrijf Kats',
  juridisch: 'L. Kats Agroservice B.V.',
  eigenaar: 'Leen Kats',
  straat: 'Middelsluissedijk OZ 54b',
  postcode: '3281 LD',
  plaats: 'Numansdorp',
  tel: '0186 651 073',
  telHref: 'tel:+31186651073',
  mobiel: '06 53 91 30 56',
  mobielHref: 'tel:+31653913056',
  whatsapp: 'https://wa.me/31653913056',
  mail: 'info@lkats.nl',
  maps: 'https://www.google.com/maps/search/?api=1&query=Middelsluissedijk+OZ+54b+3281+LD+Numansdorp',
  google: '4,6',
  reviews: 19,
  kvk: '23024578',
  themeColor: '#221b13',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
