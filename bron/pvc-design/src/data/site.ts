// Bron: Google-bedrijfsprofiel (vloerenwinkel, adres, telefoon, 5,0 uit 5 met 62 reviews, openingstijden) en de
// onderwerpen uit de reviews (PVC-vloeren, ook visgraat, en trappen). Eigen website toont een lege serverpagina.
export const site = {
  naam: 'PVC Design',
  straat: 'Robijnstraat 12',
  postcode: '2872 ZW',
  plaats: 'Schoonhoven',
  tel: '085 200 6112',
  telHref: 'tel:+31852006112',
  mail: '[[AANLEVEREN: e-mailadres]]',
  mailBekend: false,
  kvk: '[[AANLEVEREN: KvK-nummer]]',
  score: '5,0',
  reviews: 62,
  maps: 'https://www.google.com/maps/search/?api=1&query=PVC+Design+Robijnstraat+12+Schoonhoven',
  themeColor: '#23211e',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

// Openingstijden van Google. dag = JS getDay() (0 = zondag).
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '10:00', dicht: '18:30' },
  { dag: 2, naam: 'Dinsdag', open: '10:00', dicht: '18:30' },
  { dag: 3, naam: 'Woensdag', open: '10:00', dicht: '18:30' },
  { dag: 4, naam: 'Donderdag', open: '10:00', dicht: '18:30' },
  { dag: 5, naam: 'Vrijdag', open: '10:00', dicht: '18:30' },
  { dag: 6, naam: 'Zaterdag', open: '10:00', dicht: '16:30' },
  { dag: 0, naam: 'Zondag', open: '', dicht: '' },
];
