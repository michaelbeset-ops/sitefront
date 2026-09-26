// Feiten uit de afbeelding die nu de hele site van goudenleeuw-maasdam.com vormt, en het Google-profiel.
export const site = {
  naam: 'Café-Pension De Gouden Leeuw',
  kort: 'De Gouden Leeuw',
  straat: 'Gatsedijk 45',
  postcode: '3299 LA',
  plaats: 'Maasdam',
  tel: '06 51 22 76 78',
  telHref: 'tel:+31651227678',
  tel2: '078 676 14 48',
  tel2Href: 'tel:+31786761448',
  mail: 'info@goudenleeuw-maasdam.com',
  maps: 'https://www.google.com/maps/search/?api=1&query=De+Gouden+Leeuw+Gatsedijk+45+Maasdam',
  themeColor: '#15130f',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
