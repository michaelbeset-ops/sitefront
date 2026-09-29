// Feiten van ijssalonbaks.nl (alle pagina's: over ons, smaken ijs, high ice, verhuur ijskar, spijskaart,
// oliebollen, openingstijden, contact) en het Google-profiel van Woudrichem (4,5 uit 5, 632 reviews).
export const site = {
  naam: 'IJs & Spijssalon Baks',
  kort: 'IJssalon Baks',
  tel: '06-43859120',
  telHref: 'tel:+31643859120',
  wa: 'https://wa.me/31643859120',
  mail: 'info@ijssalonbaks.nl',
  google: '4,5',
  reviews: '632',
  themeColor: '#173a2c',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

export const locaties = {
  woudrichem: {
    naam: 'Woudrichem',
    straat: 'Bagijnestraat 2',
    postcode: '4285 AT',
    plaats: 'Woudrichem',
    maps: 'https://www.google.com/maps/search/?api=1&query=IJssalon+Baks+Bagijnestraat+2+Woudrichem',
    sinds: 'Sinds 2012',
    // maand (1-12) -> regels. Letterlijk van de pagina Openingstijden.
    tijden: [
      { maanden: [4], kop: 'April', regels: [['Maandag t/m vrijdag', '12.00 - 17.00'], ['Zaterdag en zondag', '12.00 - 20.00']] },
      { maanden: [5], kop: 'Mei', regels: [['Maandag t/m zaterdag', '12.00 - 21.00'], ['Zondag', '11.00 - 21.00']] },
      { maanden: [6, 7, 8], kop: 'Juni, juli, augustus', regels: [['Maandag t/m zaterdag', '11.00 - 21.00'], ['Zondag', '10.00 - 21.00'], ['Maandag 31 augustus', '12.00 - 17.00']] },
      { maanden: [9], kop: 'September', regels: [['Maandag t/m vrijdag', '12.00 - 17.00'], ['Zaterdag en zondag', '12.00 - 20.00']] },
      { maanden: [10], kop: 'Oktober', regels: [['Gesloten', '']] },
      { maanden: [11, 12], kop: 'November en december', regels: [['Alleen op de oliebollendagen', 'zie hieronder']] },
    ],
  },
  raamsdonksveer: {
    naam: 'Raamsdonksveer',
    straat: 'Het Anker 6',
    postcode: '4941 RG',
    plaats: 'Raamsdonksveer',
    maps: 'https://www.google.com/maps/search/?api=1&query=IJssalon+Baks+Het+Anker+6+Raamsdonksveer',
    sinds: 'Sinds 2025',
    tijden: [
      { maanden: [4], kop: 'April', regels: [['Maandag t/m vrijdag', '13.00 - 17.00'], ['Zaterdag en zondag', '13.00 - 20.00']] },
      { maanden: [5, 6, 7, 8], kop: 'Mei, juni, juli, augustus', regels: [['Maandag t/m zondag', '13.00 - 21.00'], ['Maandag 31 augustus', '13.00 - 17.00']] },
      { maanden: [9], kop: 'September', regels: [['Maandag t/m vrijdag', '13.00 - 17.00'], ['Zaterdag en zondag', '13.00 - 20.00']] },
    ],
  },
};

// Pagina "Smaken ijs", in dezelfde volgorde. Labels exact zoals de bron: (Sorbet/Vegan) of (Vegan).
// kleur = alleen een sfeerkleurtje voor het bolletje op de tegel.
export const smaken = [
  { naam: 'Aardbei', labels: [], kleur: '#f4a3b4' },
  { naam: 'Amarena Kers', labels: [], kleur: '#e7b8c8' },
  { naam: 'Bastogne', labels: [], kleur: '#d7b48a' },
  { naam: 'Bloed­sinaasappel', labels: ['Sorbet', 'Vegan'], kleur: '#e8644f' },
  { naam: 'Bounty', labels: ['Vegan'], kleur: '#f3ede3' },
  { naam: 'Chocolade', labels: ['Vegan'], kleur: '#7a4a33' },
  { naam: 'Citroen', labels: ['Sorbet', 'Vegan'], kleur: '#f6e27a' },
  { naam: 'Cookies', labels: [], kleur: '#cfc3b0' },
  { naam: 'Hazelnoot', labels: [], kleur: '#b98a5e' },
  { naam: 'Kinder Bueno', labels: [], kleur: '#e2c79f' },
  { naam: 'Koffie', labels: [], kleur: '#9c7355' },
  { naam: 'Kokos', labels: ['Vegan'], kleur: '#f8f4ec' },
  { naam: 'Malaga', labels: [], kleur: '#e9d6ae' },
  { naam: 'Mango', labels: ['Sorbet', 'Vegan'], kleur: '#f5b74a' },
  { naam: 'Oma’s Cake', labels: [], kleur: '#ecd9b6' },
  { naam: 'Smaak van geluk', labels: [], kleur: '#b9dcf0' },
  { naam: 'Stracciatella', labels: [], kleur: '#f2ece2' },
  { naam: 'Suikerarm', sub: 'wisselende smaken', labels: ['Suikerarm'], kleur: '#cfe3c2' },
  { naam: 'Tony’s Karamel Zeezout', labels: [], kleur: '#d49a5c' },
  { naam: 'Vanille', labels: [], kleur: '#f7ebc0' },
  { naam: 'Witte chocolade', labels: [], kleur: '#f4ecd9' },
  { naam: 'Yoghurt-Bosvrucht', labels: [], kleur: '#c99ac4' },
  { naam: 'Yoghurt-Maracuja', labels: [], kleur: '#f3d27a' },
];

export const beideLocaties = ['Schepijs, door ons ambachtelijk bereid', 'Premium milkshakes', 'Smoothies', 'IJscoupes', 'IJskoffie', 'Appelgebak en meringue gebak', 'Warme en koude dranken'];
export const alleenWoudrichem = ['Softijs en sundaes', 'Tosti’s', 'Wafels met ijs, aardbeien of warme kersen', 'Elektrische fiets opladen', 'Informatie en folders over Woudrichem', 'Oliebollen en appelbeignets (november en december)'];

export const oliebollen = [
  { dag: '22 & 29 november', tijd: '11.00 - 17.00' },
  { dag: '6, 20 & 27 december', tijd: '11.00 - 17.00' },
  { dag: '12 december, wintermarkt', tijd: '15.00 - 20.00' },
  { dag: '31 december, oudejaarsdag', tijd: '08.00 - 17.00' },
];
