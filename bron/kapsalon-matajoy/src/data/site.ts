// Feiten van matajoy.nl (home, onze diensten, contact; site uit 2013) en het Google-profiel (4,8 uit 5, 33 reviews).
// Niet op de bron: e-mailadres, KvK-nummer, prijzen, namen van kapsters.
export const site = {
  naam: 'Kapsalon MaTaJoy',
  kort: 'MaTaJoy',
  straat: 'De Wetering 5',
  postcode: '2935 BS',
  plaats: 'Ouderkerk aan den IJssel',
  tel: '0180 683 130',
  telHref: 'tel:+31180683130',
  facebook: 'https://www.facebook.com/pages/Kapsalon-MaTaJoy/440595372641617',
  maps: 'https://www.google.com/maps/search/?api=1&query=Kapsalon+MaTaJoy+De+Wetering+5+Ouderkerk+aan+den+IJssel',
  google: { score: '4,8', aantal: 33 },
  themeColor: '#6f533d',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

export const tijden = [
  { dag: 'Maandag', kort: 'ma', tijd: null },
  { dag: 'Dinsdag', kort: 'di', tijd: null },
  { dag: 'Woensdag', kort: 'wo', tijd: '9.00 - 17.00' },
  { dag: 'Donderdag', kort: 'do', tijd: '9.00 - 17.00' },
  { dag: 'Vrijdag', kort: 'vr', tijd: '8.30 - 21.00', avond: true },
  { dag: 'Zaterdag', kort: 'za', tijd: '8.30 - 14.00' },
];

export const houtwerk = ['Broodplanken', 'Bankjes', 'Kaarsenstandaards', 'Lampen'];
