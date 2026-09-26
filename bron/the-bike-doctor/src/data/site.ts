// Feiten van thebikedoctor.nl (september 2026) en het Google-profiel (openingstijden).
export const site = {
  naam: 'The Bike Doctor',
  straat: "'s-Heer Boeijenstraat 4",
  postcode: '3311 BN',
  plaats: 'Dordrecht',
  tel: '078 763 20 56',
  telHref: 'tel:+31787632056',
  mobiel: '06 45 63 62 99',
  mobielHref: 'tel:+31645636299',
  mail: 'thebikedoctor.fwd@gmail.com',
  maps: "https://www.google.com/maps/search/?api=1&query=The+Bike+Doctor+'s-Heer+Boeijenstraat+4+Dordrecht",
  themeColor: '#16181b',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
