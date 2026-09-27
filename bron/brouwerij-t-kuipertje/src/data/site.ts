// Feiten van hetkuipertje.nl (4 pagina's: welkom, groepen, bieren, route) en het Google-profiel
// (4,7 uit 61 reviews; eigenaar-update 17-09-2026: per oktober op zondag gesloten). Opgehaald 27-09-2026.
export const site = {
  naam: "Brouwerij 't Kuipertje",
  kort: "'t Kuipertje",
  brouwer: 'Henk Kuiper',
  straat: 'Appeldijk 18',
  postcode: '4161 BH',
  plaats: 'Heukelum',
  tel: '06 17 48 31 05',
  telHref: 'tel:+31617483105',
  mail: 'info@hetkuipertje.nl',
  kanaal: 'https://whatsapp.com/channel/0029Va94v94LdQeeTdNhvY20',
  maps: 'https://www.google.com/maps/search/?api=1&query=Appeldijk+18+4161+BH+Heukelum',
  google: { score: '4,7', aantal: 61 },
  themeColor: '#1b1714',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

// Openingstijden proeflokaal met terras.
export const tijden = [
  { dag: 'Zaterdag', tijd: '14.00 tot 19.00', noot: '' },
  { dag: 'Zondag', tijd: '13.00 tot 18.00', noot: 't/m september. Per oktober op zondag gesloten.' },
  { dag: 'Op afspraak', tijd: '', noot: 'Groepen, feesten en rondleidingen.' },
];

// "Nu op tap" staat op de bierenpagina met 8% bij Valse IJsbout (de lijst eronder zegt 8,5%).
export const opTap = [
  { naam: 'Eige Weisse Dunkel', pct: '5,5%' },
  { naam: 'Blond', pct: '6,5%' },
  { naam: 'Valse IJsbout', pct: '8%' },
];
export const opFles = ['Eige Weisse', 'Blond', 'Vriendenbier', 'Nachtvorst'];

// "Bieren die we onregelmatig hebben", in de volgorde van de bron.
export const bieren = [
  { naam: 'Lekker Pils', soort: 'Een pils', pct: '5%' },
  { naam: 'Vriendenbier', soort: 'Een lichte ale', pct: '5,5%' },
  { naam: 'Blond', soort: 'Een blond bier met wat gember', pct: '6,5%' },
  { naam: 'Nicks', soort: 'Een tripel', pct: '7,5%' },
  { naam: "Linge's Bruin", soort: 'Een tripel', pct: '8%' },
  { naam: 'Eige Weisse', soort: '', pct: '5,5%' },
  { naam: 'Eige Weisse Dunkel', soort: 'Een amberkleurig tarwebier', pct: '5,5%' },
  { naam: 'Nachtvorst', soort: 'Een winterbier', pct: '11%' },
  { naam: 'Donkere Lente', soort: 'Een donker voorjaarsbier', pct: '6,5%' },
  { naam: 'Valse IJsbout', soort: 'Een extra blond', pct: '8,5%' },
];

export const stappen = [
  { naam: 'Schroten', tekst: 'We schroten de mout.' },
  { naam: 'Maischen', tekst: 'We maischen de granen.' },
  { naam: 'Koken en hop', tekst: 'We koken de wort en voegen hop toe.' },
  { naam: 'Vergisten', tekst: 'We vergisten de wort.' },
  { naam: 'Bottelen en tappen', tekst: 'We vullen de flessen en fusten. Daarna plakken we een etiket of tappen we het bier.' },
  { naam: 'Nagisten', tekst: 'De bieren ondergaan nog een vergisting op fles en op fust.' },
];

export const route = [
  'Rijdend over de A15 neemt u afslag 29 richting Leerdam.',
  'Na 2 km neemt u op de dijk de afslag Spijk.',
  'U neemt de derde afslag rechts, direct na het witte huis. U komt in Friezenwijk.',
  'Vervolg deze weg, met rechts de voetbalvelden, tot u links de dijk op kunt.',
  'Boven op de dijk moet u rechts aanhouden.',
  'Houd bij de splitsing links aan. U vindt de brouwerij aan de linkerkant.',
];
