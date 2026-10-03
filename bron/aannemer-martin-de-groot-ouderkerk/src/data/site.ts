// Feiten: metselenenstuken.nl (bekeken 3 oktober 2026), Google-bedrijfsprofiel "Aannemersbedrijf Martin de Groot"
// (geen reviews; ma-vr 08:00-17:00) en KvK 24322384 (eenmanszaak, "Uitvoeren van metsel- en stucwerk"). Zie bron/FEITEN.txt.
export const site = {
  naam: 'Aannemersbedrijf Martin de Groot',
  kort: 'Martin de Groot',
  straat: 'IJsseldijk-Noord 148a',
  postcode: '2935 BL',
  plaats: 'Ouderkerk aan den IJssel',
  tel: '06 51 28 52 09',
  telHref: 'tel:+31651285209',
  wa: 'https://wa.me/31651285209',
  mail: 'info@metselenenstuken.nl',
  kvk: '24322384',
  maps: 'https://www.google.com/maps/search/?api=1&query=Aannemersbedrijf+Martin+de+Groot+IJsseldijk+Noord+148a+Ouderkerk+aan+den+IJssel',
  themeColor: '#0b2f3c',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay). Bron: Google-bedrijfsprofiel.
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '08.00', dicht: '17.00' },
  { dag: 2, naam: 'Dinsdag', open: '08.00', dicht: '17.00' },
  { dag: 3, naam: 'Woensdag', open: '08.00', dicht: '17.00' },
  { dag: 4, naam: 'Donderdag', open: '08.00', dicht: '17.00' },
  { dag: 5, naam: 'Vrijdag', open: '08.00', dicht: '17.00' },
  { dag: 6, naam: 'Zaterdag', open: '', dicht: '' },
  { dag: 0, naam: 'Zondag', open: '', dicht: '' },
];

// Werkzaamheden zoals genoemd op metselenenstuken.nl (home, voegwerk, metselaar-krimpen).
export const chips = ['Stucwerk', 'Voegwerk', 'Metselwerk', 'Lijmwerk kalkzandsteen', 'Voegen reinigen', 'Voegen restaureren', 'Advies op locatie'];

// Werkgebied, letterlijk van de pagina "Werkgebied" (regio Rotterdam - Krimpenerwaard - Gouda).
export const werkgebied = [
  'Rotterdam', 'Capelle aan den IJssel', 'Krimpen aan den IJssel', 'Ouderkerk aan den IJssel', 'Nieuwerkerk aan den IJssel',
  'Krimpen aan de Lek', 'Lekkerkerk', 'Berkenwoude', 'Bergambacht', 'Gouderak', 'Stolwijk', 'Schoonhoven', 'Gouda',
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waOfferte = waMet('Goedendag Martin, ik wil graag een offerte aanvragen.');
