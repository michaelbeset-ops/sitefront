// Feiten van autobedrijfdelinge.nl (home, over ons, contact en route, onderdelen, occasions) en het Google-profiel
// (4,5 uit 5, 34 reviews). "Bosch Workshop Partner" volgens de opdracht van de hoofdsessie (logo op hun site).
export const site = {
  naam: 'Autobedrijf De Linge',
  naamBv: 'Autobedrijf De Linge B.V.',
  straat: 'Rijnstraat 32',
  postcode: '4191 CL',
  plaats: 'Geldermalsen',
  tel: '0345 533 222',
  telHref: 'tel:+31345533222',
  mail: 'info@autobedrijfdelinge.nl',
  maps: 'https://www.google.com/maps/search/?api=1&query=Autobedrijf+De+Linge+Rijnstraat+32+Geldermalsen',
  themeColor: '#16325c',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

// Letterlijk de lijst "Bij Autobedrijf De Linge BV kunt u terecht voor" (over ons), gegroepeerd.
export const diensten = [
  { groep: 'Merken', items: ['Saab', 'Lancia', 'Alle merken'] },
  { groep: 'Verkoop', items: ['Leasing', 'Financiering'] },
  { groep: 'Werkplaats', items: ['Onderhoud', 'Reparatie', 'Schadeherstel', 'Ruitherstel', 'APK', 'Roetmeting'] },
  { groep: 'Banden', items: ['Banden', 'Uitlijnen'] },
  { groep: 'Inbouw', items: ['Accessoires', 'Auto-airco (inbouw en onderhoud)', 'Alarm'] },
  { groep: 'Tuning', items: ['Hirsch Performance'] },
];

// Onderdelen die op hun site te koop stonden. Tonen als voorbeeld, zonder te beloven dat ze er nog zijn.
export const onderdelen = [
  { type: '9-7X', naam: 'Luchtbalgen achter', noot: 'nieuw' },
  { type: '9-7X', naam: 'Onderspoiler voorbumper', noot: '' },
  { type: '9-7X', naam: 'Wielkuip links voor', noot: '' },
  { type: '9-7X', naam: 'Oliekoeler leidingen automaat', noot: '4.2 en 5.3' },
  { type: '9-4X', naam: 'Voorruit met regensensor', noot: '' },
  { type: '9-5 Estate', naam: 'Bumperhoes achter', noot: '2002 t/m 2005' },
];
