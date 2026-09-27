// Feiten uit het Google-profiel (categorie Autobedrijf/Garage, 4,4 uit 5 bij 39 reviews, openingstijden,
// rolstoeltoegankelijke ingang en parkeerplaats). Oude site autobedrijfsas.nl is onbereikbaar.
// Diensten, merken, APK, occasions, prijzen, e-mail en KvK zijn onbekend: [[AANLEVEREN]].
export const site = {
  naam: 'Autobedrijf SAS',
  straat: 'Velsenstraat 10C',
  postcode: '4251 LJ',
  plaats: 'Werkendam',
  tel: '06 24 27 06 77',
  telHref: 'tel:+31624270677',
  wa: 'https://wa.me/31624270677',
  waAfspraak: 'https://wa.me/31624270677?text=' + encodeURIComponent('Hallo, mijn kenteken is: \nEr is dit aan de hand: '),
  maps: 'https://www.google.com/maps/search/?api=1&query=Autobedrijf+SAS+Velsenstraat+10C+Werkendam',
  google: { score: '4,4', aantal: 39 },
  themeColor: '#1a1d21',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
// dag: 0 = zondag (zoals Date.getDay()).
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '09:00', dicht: '17:00' },
  { dag: 2, naam: 'Dinsdag', open: '09:00', dicht: '17:00' },
  { dag: 3, naam: 'Woensdag', open: '09:00', dicht: '17:00' },
  { dag: 4, naam: 'Donderdag', open: '09:00', dicht: '17:00' },
  { dag: 5, naam: 'Vrijdag', open: '09:00', dicht: '17:00' },
  { dag: 6, naam: 'Zaterdag', open: '09:00', dicht: '15:00' },
  { dag: 0, naam: 'Zondag', open: '', dicht: '' },
];
