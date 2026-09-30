// Feiten van depoortere.nl (profiel, activiteiten, materieel, projecten, contact), adres Meezeweg 7 volgens de opdracht,
// en het Google-profiel (5,0 uit 5 reviews, 30-09-2026). Geen e-mailadres op de site; fax en IBAN bewust niet getoond.
export const site = {
  naam: 'De Poortere Kraanverhuur',
  juridisch: 'De Poortere Kraanverhuur B.V.',
  straat: 'Meezeweg 7',
  postcode: '4414 RN',
  plaats: 'Waarde',
  mobiel: '06 53 15 02 15',
  mobielHref: 'tel:+31653150215',
  whatsapp: 'https://wa.me/31653150215',
  mail: '[[AANLEVEREN: e-mailadres]]',
  maps: 'https://www.google.com/maps/search/?api=1&query=De+Poortere+Kraanverhuur+Meezeweg+7+Waarde',
  google: '5,0',
  reviews: 5,
  kvk: '77692543',
  themeColor: '#131416',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
