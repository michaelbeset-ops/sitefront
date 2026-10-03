// Feiten: eigen site tegelenbouwbedrijfdhus.nl (2015), Google-bedrijfsprofiel "Tegel en bouwbedrijf D. Hus" (bekeken 3 oktober 2026;
// 5,0 uit 1 review), Trustoo-profiel, KvK 24352679 (eenmanszaak, opgericht 19-09-2003). Zie bron/bronnen.txt.
// Adres Dr. Jan Schoutenlaan 300 is het postadres (waarschijnlijk woonhuis): op de site alleen plaats + werkgebied.
export const site = {
  naam: 'Tegel- en bouwbedrijf D. Hus',
  kort: 'D. Hus',
  eigenaar: 'Dennie Hus',
  plaats: 'Maassluis',
  werkgebied: 'Maassluis, de regio Zuid-Holland en door heel het land',
  tel: '06 41 24 30 11',
  telHref: 'tel:+31641243011',
  wa: 'https://wa.me/31641243011',
  mail: 'info@tegelenbouwbedrijfdhus.nl',
  kvk: '24352679',
  sinds: 2003,
  reviews: 'https://www.google.com/maps/search/?api=1&query=Tegel+en+bouwbedrijf+D.+Hus+Maassluis',
  google: { score: '5,0', aantal: 1 },
  themeColor: '#151816',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay). Bron: Google-profiel.
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '07.30', dicht: '18.00' },
  { dag: 2, naam: 'Dinsdag', open: '07.30', dicht: '18.00' },
  { dag: 3, naam: 'Woensdag', open: '07.30', dicht: '18.00' },
  { dag: 4, naam: 'Donderdag', open: '07.30', dicht: '18.00' },
  { dag: 5, naam: 'Vrijdag', open: '07.30', dicht: '18.00' },
  { dag: 6, naam: 'Zaterdag', open: '', dicht: '' },
  { dag: 0, naam: 'Zondag', open: '', dicht: '' },
];

// Letterlijk de lijst van hun eigen dienstenpagina.
export const vakken = ['Tegelwerk', 'Timmerwerk', 'Loodgieterswerk', 'Schilder- en stucwerk', 'Installatiewerk', 'Electra', 'Renovatiewerk', 'Sloopwerk'];

// Letterlijk van Google (stand 3 oktober 2026). Naam: voornaam + initiaal.
export const review = {
  naam: 'Lorenzo S.',
  wanneer: 'september 2021',
  tekst: 'Zeer tevreden met het werk van Dennie Hus. Dennie levert maatwerk, luistert en geeft advies waar het nodig is. Het resultaat is om door een ringetje te halen! Zonder meer aan te raden voor je badkamer.',
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waOfferte = waMet('Hallo Dennie, ik wil graag een offerte aanvragen.');
