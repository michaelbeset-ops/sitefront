// Feiten van schaapdak.nl (home, profiel, waarom wij, expertise, particulieren, bedrijven, referenties nieuwbouw /
// renovatie / restauratie met hun projectpagina's, certificering, contact) en het Google-profiel (4,6 uit 28 reviews, 30-09-2026).
// Let op: hun pagina "referenties/utiliteitsbouw" heeft als titel "Renovatie"; we volgen de titels, niet de url.
export const site = {
  naam: 'Gebr. Schaap Pannendaken',
  juridisch: 'Gebr. Schaap B.V.',
  straat: 'Loodijk 12b',
  postcode: '1243 JA',
  plaats: "'s-Graveland",
  post: ['Postbus 108', '1400 AC Bussum'],
  tel: '035 656 37 75',
  telHref: 'tel:+31356563775',
  mail: 'info@schaapdak.nl',
  maps: "https://www.google.com/maps/search/?api=1&query=Gebr.+Schaap+Pannendaken+Loodijk+12b+%27s-Graveland",
  google: '4,6',
  reviews: 28,
  kvk: '[[AANLEVEREN: KvK-nummer]]',
  themeColor: '#171311',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
