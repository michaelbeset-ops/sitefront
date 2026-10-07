// Feiten (bekeken 7 oktober 2026), ruwe bronnen in ../../bron:
// - Eigen site metaalbewerkingheusden.nl: teksten Welkom, Ons Bedrijf, Producten, Referenties, Projecten, Contact.
//   Paul Schobben, 06-10512837, p.schobben@metaalbewerkingheusden.nl.
// - BAG (PDOK): Industrieweg 15A, 5158 NJ Heesbeen. Google-profiel: zelfde adres, openingstijden. Geen reviews van klanten.
export const site = {
  naam: 'Metaalbewerking Heusden',
  eigenaar: 'Paul Schobben',
  straat: 'Industrieweg 15A',
  postcode: '5158 NJ',
  plaats: 'Heesbeen',
  tel: '06 10 51 28 37',
  telHref: 'tel:+31610512837',
  wa: 'https://wa.me/31610512837',
  mail: 'p.schobben@metaalbewerkingheusden.nl',
  maps: 'https://www.google.com/maps/search/?api=1&query=Metaalbewerking+Heusden+Industrieweg+15A+Heesbeen',
  themeColor: '#1d0a78',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Google, stand 7 oktober 2026. Index 0 = zondag.
export const tijden: [string, string | null][] = [
  ['zondag', null],
  ['maandag', '08:00-21:00'],
  ['dinsdag', '08:00-21:00'],
  ['woensdag', '08:00-21:00'],
  ['donderdag', '08:00-21:00'],
  ['vrijdag', '08:00-17:00'],
  ['zaterdag', '08:00-17:00'],
];

// Letterlijk van hun pagina Producten.
export const materialen = ['RVS', 'Staal', 'Aluminium'];
export const bewerkingen = ['Lassen', 'Knippen', 'Zetten', 'Ponsen', 'Draaien', 'Frezen', 'Walsen'];
export const nabewerkingen = ['Thermisch verzinken', 'Poedercoaten', 'Glasparelen', 'Slijpen', 'Elektrolytisch verzinken', 'Spuiten', 'Borstelen', 'Polijsten'];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Paul, ik heb een vraag over metaalbewerking.');
