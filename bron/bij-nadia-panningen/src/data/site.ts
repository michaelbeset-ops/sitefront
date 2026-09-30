// Feiten uit het Google-bedrijfsprofiel van Bij Nadia (scratchpad/content/b17/ALLE.md, sectie bij-nadia-panningen):
// adres, 06-nummer, score 4,9 uit 112 reviews, categorie Lunchrestaurant, openingstijden en de thema's uit de reviews.
// Geen website, geen menukaart met prijzen: gerechten alleen zoals gasten ze noemen, zonder prijzen.
export const site = {
  naam: 'Bij Nadia',
  plaats: 'Panningen',
  straat: 'Markt 22',
  postcode: '5981 AN',
  tel: '06 53 82 47 52',
  telHref: 'tel:+31653824752',
  wa: 'https://wa.me/31653824752',
  maps: 'https://www.google.com/maps/search/?api=1&query=Bij+Nadia+Markt+22+Panningen',
  google: { score: '4,9', aantal: 112 },
  themeColor: '#1d2a17',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

// Openingstijden per weekdag (0 = zondag). null = gesloten.
export const tijden: { dag: string; wd: number; van: string | null; tot: string | null }[] = [
  { dag: 'Maandag', wd: 1, van: null, tot: null },
  { dag: 'Dinsdag', wd: 2, van: '09:30', tot: '17:00' },
  { dag: 'Woensdag', wd: 3, van: '09:30', tot: '17:00' },
  { dag: 'Donderdag', wd: 4, van: '09:30', tot: '17:00' },
  { dag: 'Vrijdag', wd: 5, van: '09:30', tot: '18:00' },
  { dag: 'Zaterdag', wd: 6, van: '09:30', tot: '17:00' },
  { dag: 'Zondag', wd: 0, van: '11:00', tot: '17:00' },
];

// Wat gasten in de reviews bij naam noemen (geen prijzen bekend).
export const populair = [
  { id: 'kip', naam: 'Broodje Nadia Biqadillo kip', soort: 'Broodje' },
  { id: 'carpaccio', naam: 'Broodje carpaccio', soort: 'Broodje' },
  { id: 'burrata', naam: 'Broodje burrata', soort: 'Broodje' },
  { id: 'tiramisu', naam: 'Tiramisu', soort: 'Zoet, ook om mee te nemen' },
  { id: 'icetea', naam: 'Ice tea', soort: 'Drinken' },
];
