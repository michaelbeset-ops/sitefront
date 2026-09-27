// Feiten van het Google-profiel van Autoschade Gouda (geen eigen website: Google toont "Website toevoegen").
// Naam, categorie Autoschadebedrijf, adres, 06-nummer, 5,0 uit 5 op 7 reviews. Kleine schades en krassen komen
// uit de reviewonderwerpen. Openingstijden, e-mail, KvK, verzekeraars, vervangend vervoer en garantie: onbekend.
export const site = {
  naam: 'Autoschade Gouda',
  straat: 'Nijverheidsstraat 39',
  postcode: '2802 AH',
  plaats: 'Gouda',
  tel: '06 85 64 33 03',
  telHref: 'tel:+31685643303',
  whatsapp: 'https://wa.me/31685643303',
  maps: 'https://www.google.com/maps/search/?api=1&query=Autoschade+Gouda+Nijverheidsstraat+39+Gouda',
  themeColor: '#16161a',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
