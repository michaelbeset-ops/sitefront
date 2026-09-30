// Feiten van dekattenpraktijk.nl (alle 23 pagina's: home, visie, catfriendly, cats only, team, overzicht praktijk,
// gedragstherapie, doorverwijzing, spreekuur, operaties & narcose, röntgen, laboratorium, opname, voeding, prijzen &
// betaling, afscheid, spoed, afspraak, openingstijden, route, mail, links, nieuws) en het Google-profiel
// (4,9 uit 313 reviews, bekeken 29-09-2026). De 06-nummers op hun site zijn van derden en staan hier bewust niet.
export const site = {
  naam: 'De Kattenpraktijk',
  juridisch: 'De Kattenpraktijk',
  straat: 'Kompasstraat 2G',
  postcode: '2901 AM',
  plaats: 'Capelle aan den IJssel',
  tel: '010 451 3727',
  telHref: 'tel:+31104513727',
  mail: 'info@dekattenpraktijk.nl',
  maps: 'https://www.google.com/maps/search/?api=1&query=De+Kattenpraktijk+Kompasstraat+2G+Capelle+aan+den+IJssel',
  google: '4,9',
  reviews: 313,
  kvk: '55227759',
  themeColor: '#0c2f34',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

// Letterlijk van de pagina "Prijzen & Betaling": "Standaardprijzen (geldig vanaf 01 aug 2026)".
// reductie: telt mee voor de €10,00 reductie op het consult of de vaccinatie van het tweede of volgende dier.
export const prijsGeldig = '01 aug 2026';
export const prijzen = [
  { id: 'consult', naam: 'Consult', extra: 'excl. injecties/medicijnen', cent: 5050, reductie: true },
  { id: 'vac-kn', naam: 'Vaccinatie Katteziekte + Niesziekte', extra: 'incl. consult', cent: 6375, reductie: true },
  { id: 'vac-n', naam: 'Vaccinatie Niesziekte', extra: 'incl. consult', cent: 6000, reductie: true },
  { id: 'castratie', naam: 'Castratie kater', extra: '', cent: 9750, reductie: false },
  { id: 'sterilisatie', naam: 'Sterilisatie poes', extra: '', cent: 19500, reductie: false },
];

// Letterlijk van de pagina "Spoed": "De spoedtarieven van De Kattenpraktijk".
export const spoedtarieven = [
  { id: 'tel', naam: 'Telefonisch consult', tijd: '', cent: 2250 },
  { id: 'avond', naam: 'Avondconsult', tijd: '18:00 – 0:00 uur', cent: 9500 },
  { id: 'nacht', naam: 'Nachtconsult', tijd: '00:00 – 08:30 uur', cent: 13000 },
  { id: 'wk-dag', naam: 'Weekendconsult', tijd: '08:00 – 23:00 uur', cent: 12000 },
  { id: 'wk-nacht', naam: 'Weekendconsult', tijd: '23:00 – 08:00 uur', cent: 15500 },
];

export const euro = (cent: number) => '€ ' + (cent / 100).toLocaleString('nl-NL', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
