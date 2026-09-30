// Feiten uit het Google-bedrijfsprofiel van Lunchroom 1NUL1 (bekeken voor batch 17, 01-10-2026):
// adres, 06-nummer, Instagram, openingstijden, 4,4 uit 247 reviews, categorie Lunchrestaurant, reviewthema's.
// De teksten op de gevel ("Coffee & sweets", "Sandwiches & bowls", "Smoothies & pancakes") komen van hun eigen gevelfoto.
// Geen menukaart met prijzen bekend: gerechten hieronder zijn alleen de items die gasten in reviews noemen.
export const site = {
  naam: 'Lunchroom 1NUL1',
  kort: '1NUL1',
  straat: 'Hoogstraat 101',
  postcode: '5615 PB',
  plaats: 'Eindhoven',
  tel: '06 25 54 09 01',
  telHref: 'tel:+31625540901',
  whatsapp: 'https://wa.me/31625540901',
  instagram: 'https://www.instagram.com/lunchroom1nul1',
  insta: '@lunchroom1nul1',
  maps: 'https://www.google.com/maps/search/?api=1&query=Lunchroom+1NUL1+Hoogstraat+101+Eindhoven',
  google: { score: '4,4', aantal: 247 },
  themeColor: '#15110f',
  // Elke dag 08:30-17:00, behalve dinsdag (gesloten).
  openDagen: [1, 3, 4, 5, 6, 0],
  open: '08.30',
  dicht: '17.00',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

// Populair bij gasten: letterlijk de gerechten en dranken die in de Google-reviews genoemd worden. Geen prijzen.
export const populair: { groep: string; items: { id: string; naam: string; noot?: string }[] }[] = [
  { groep: 'Pancakes', items: [
    { id: 'redvelvet', naam: 'Red velvet pancakes' },
    { id: 'pancakesfruit', naam: 'Pancakes met room en fruit' },
  ] },
  { groep: 'Broodjes', items: [
    { id: 'kiptruffel', naam: 'Sandwich kip & truffel' },
    { id: 'chickenmelt', naam: 'Chicken melt' },
    { id: 'carpaccio', naam: 'Broodje carpaccio' },
  ] },
  { groep: 'Drinken', items: [
    { id: 'matcha', naam: 'Matcha' },
    { id: 'latte', naam: 'Latte' },
  ] },
];
