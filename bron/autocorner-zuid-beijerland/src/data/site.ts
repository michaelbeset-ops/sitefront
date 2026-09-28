// Feiten uit het Google-profiel van Autocorner Zuid-Beijerland B.V. (geen eigen website; openingstijden niet ingevuld):
// adres, telefoon, 5,0 uit 5 met 11 reviews, en de onderwerpen die in die reviews terugkomen (niet geciteerd).
export const site = {
  naam: 'Autocorner Zuid-Beijerland',
  naamVol: 'Autocorner Zuid-Beijerland B.V.',
  straat: 'Oranjeweg 9',
  postcode: '3284 KS',
  plaats: 'Zuid-Beijerland',
  regio: 'Hoeksche Waard',
  tel: '0186 669 308',
  telHref: 'tel:+31186669308',
  maps: 'https://www.google.com/maps/search/?api=1&query=Autocorner+Zuid-Beijerland+Oranjeweg+9+Zuid-Beijerland',
  score: '5,0',
  reviews: 11,
  themeColor: '#173a5e',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

// Onderwerpen uit de Google-reviews, in eigen woorden.
export const eigenschappen = [
  'Allround garage, met kennis van diverse merken',
  'Meedenkend en deskundig',
  'Ze nemen de tijd en leggen uit wat er moet gebeuren',
  'Normale prijzen',
  'Klanten komen er al jaren',
];

export const stappen = [
  { kop: 'Eerst uitleg', tekst: 'We nemen de tijd om te kijken wat er aan de hand is, en leggen u uit wat er moet gebeuren.' },
  { kop: 'Dan een prijsindicatie', tekst: 'Voordat we beginnen, weet u wat het ongeveer gaat kosten.' },
  { kop: 'Pas dan aan de slag', tekst: 'Alles in goed overleg. Zo krijgt u achteraf geen verrassingen.' },
];
