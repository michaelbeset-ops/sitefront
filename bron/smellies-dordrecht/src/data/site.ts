// Feiten van smellies.nl (bekeken 1 oktober 2026): Over Smellies, Wat zijn Smellies, Contact, Bezorgen.
// Minnaertweg 103, 3328 HM Dordrecht, +31 (0)6 40 89 79 16, info@smellies.nl, KvK 87799871.
// Bezoek: laat het even weten; ma t/m do 09.00-17.00, vr/za/zo gesloten. Gestart in 2013.
// Verkooppunten in Nederland, België en Engeland. Groothandel: groothandelsmellies.nl (account na goedkeuring).
export const site = {
  naam: 'Smellies',
  slogan: 'Scents & Happiness',
  straat: 'Minnaertweg 103',
  postcode: '3328 HM',
  plaats: 'Dordrecht',
  tel: '06 40 89 79 16',
  telHref: 'tel:+31640897916',
  wa: 'https://wa.me/31640897916',
  mail: 'info@smellies.nl',
  kvk: '87799871',
  winkel: 'https://www.smellies.nl',
  groothandel: 'https://www.groothandelsmellies.nl',
  instagram: 'https://www.instagram.com/smellies.nl/',
  facebook: 'https://www.facebook.com/smellies.nl/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Smellies+Minnaertweg+103+Dordrecht',
  themeColor: '#f3f1ec',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const shop = (p: string) => `${site.winkel}/${p}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent('Hallo Smellies, ' + tekst)}`;
