// Feiten van technischadviesburobetuwe.nl (alle 25 pagina's: home, installatietechniek, advieswerkzaamheden, engineering,
// tekenwerk, calculaties, elektrotechniek, milieu, energie/klimaatconcepten, ISSO, voorwaarden, software, contact).
// Geen Google-score: er zijn geen reviews. Oude software-acties en prijzen bewust weggelaten.
export const site = {
  naam: 'Technisch Adviesburo Betuwe',
  kort: 'TAB',
  straat: 'Groenendaal 38',
  postcode: '4003 EL',
  plaats: 'Tiel',
  tel: '0344 66 43 20',
  telHref: 'tel:+31344664320',
  gsm: '06 27 20 70 73',
  gsmHref: 'tel:+31627207073',
  whatsapp: 'https://wa.me/31627207073',
  fax: '0344 66 42 79',
  mail: 'info@technischadviesburobetuwe.nl',
  maps: 'https://www.google.com/maps/search/?api=1&query=Groenendaal+38+4003+EL+Tiel',
  kvk: '11044290',
  btw: 'NL168392604B01',
  themeColor: '#071a2e',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

export const bereikbaar = { dagen: 'Ma t/m za', tijd: '9.00 - 18.00', niet: 'Niet op zondag of op feestdagen' };
