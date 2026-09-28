// Feiten van deschadegaragehouten.nl (enige pagina: diensten, gratis leenauto, openingstijden, adres, telefoon, e-mail)
// en het Google-profiel "De Schadegarage" (4,6 uit 5, 23 reviews; opgehaald 28-09-2026). Verder niets bekend.
export const site = {
  naam: 'De Schadegarage',
  naamSite: 'Schade Garage Houten',
  slogan: 'Voor service op maat',
  straat: 'Peppelkade 13A',
  postcode: '3992 AL',
  plaats: 'Houten',
  tel: '030 634 14 60',
  telHref: 'tel:+31306341460',
  mail: 'deschadegarage@live.nl',
  maps: 'https://www.google.com/maps/search/?api=1&query=De+Schadegarage+Peppelkade+13A+Houten',
  google: '4,6',
  reviews: 23,
  themeColor: '#16191d',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
// Precies de vier diensten van hun site. De omschrijving zegt alleen wat de dienst is, zonder beloftes.
export const diensten = [
  { naam: 'Schadeherstel', tekst: 'Herstel van schade aan de carrosserie van uw auto.' },
  { naam: 'Bumperreparaties', tekst: 'Reparatie van een beschadigde bumper.' },
  { naam: 'Uitdeuken zonder spuiten', tekst: 'Een deuk uit de carrosserie halen, zonder dat er gespoten hoeft te worden.' },
  { naam: 'Onderhoud / APK', tekst: 'Onderhoud aan uw auto en de APK.' },
];
