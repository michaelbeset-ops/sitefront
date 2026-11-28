// Alle feiten komen uit het dagbestand van 28-11-2026 (lead beauty-lounge-sandra-capelle-aan-den-ijssel),
// met als bronnen beautyloungesandra.mytreatwell.nl en treatwell.nl/salon/beauty-lounge-sandra.
// Wat daar niet staat, staat hier ook niet. Geen eigen site, geen logo, dus kleuren en beeldmerk zijn een voorstel.
export const site = {
  naam: 'Beauty Lounge Sandra',
  eigenaar: 'Sandra',
  straat: 'Fluiterlaan 423',
  postcode: '2903 HN',
  plaats: 'Capelle aan den IJssel',
  mobiel: '06 34062927',
  mobielHref: 'tel:+31634062927',
  whatsapp: 'https://wa.me/31634062927',
  email: 'sandrica_p@hotmail.com',
  boeken: 'https://beautyloungesandra.mytreatwell.nl/',
  treatwell: 'https://www.treatwell.nl/salon/beauty-lounge-sandra/',
  route: 'https://www.google.com/maps/search/?api=1&query=Fluiterlaan+423+2903+HN+Capelle+aan+den+IJssel',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Prijzen en duur zoals op Treatwell. 'vanaf' staat er alleen waar Treatwell het zo noemt.
export type Item = { naam: string; duur?: string; prijs: string; vanaf?: boolean };
export const menu: { groep: string; noot?: string; items: Item[] }[] = [
  {
    groep: 'Gezicht',
    noot: 'Huidverbeterende behandelingen',
    items: [
      { naam: 'Classic behandeling', duur: '1 uur', prijs: '69' },
      { naam: 'Skin Care Deluxe', duur: '1 uur 15 min', prijs: '77' },
      { naam: 'Microdermabrasie', duur: '1 uur', prijs: '75' },
      { naam: 'Microdermabrasie deluxe', prijs: '87' },
      { naam: 'Microdermabrasie deluxe, gelaat en rug', prijs: '110' },
      { naam: 'Fruitzuurbehandeling', duur: '45 min', prijs: '67' },
      { naam: 'Tienerbehandeling, tot en met 16 jaar', prijs: '47' },
      { naam: 'Huidverbetering', prijs: '130', vanaf: true },
    ],
  },
  {
    groep: 'Harsen',
    items: [
      { naam: 'Gezicht', prijs: '15', vanaf: true },
      { naam: 'Bovenlip', prijs: '15' },
      { naam: 'Wenkbrauwen', prijs: '15' },
      { naam: 'Bovenlip en kin', prijs: '20' },
      { naam: 'Armen', prijs: '20' },
      { naam: 'Oksels', prijs: '22' },
      { naam: 'Bikinilijn', prijs: '30' },
      { naam: 'Hele benen', prijs: '59' },
    ],
  },
  {
    groep: 'Wimpers en wenkbrauwen',
    noot: 'One-by-one wimperextensions van Mink',
    items: [
      { naam: 'Wimperextensions', prijs: '30', vanaf: true },
      { naam: 'Wimperextensions verwijderen', prijs: '30' },
      { naam: 'Wenkbrauwen verven', prijs: '15' },
      { naam: 'Wimpers verven', prijs: '15' },
    ],
  },
  {
    groep: 'Permanent',
    noot: 'Permanente make-up en IPL voor permanente ontharing',
    items: [
      { naam: 'Permanente make-up', prijs: '75', vanaf: true },
      { naam: 'Laser ontharen', prijs: '30', vanaf: true },
    ],
  },
];

export const tijden = [
  { dag: 'Maandag', tijd: 'Gesloten' },
  { dag: 'Dinsdag', tijd: '9.30 tot 17.00' },
  { dag: 'Woensdag', tijd: '9.30 tot 17.00' },
  { dag: 'Donderdag', tijd: '9.30 tot 17.00' },
  { dag: 'Vrijdag', tijd: '9.30 tot 18.00' },
  { dag: 'Zaterdag', tijd: '9.30 tot 16.00' },
  { dag: 'Zondag', tijd: 'Gesloten' },
];

// Hoe vaak klanten deze woorden gebruiken in de reviews op Treatwell.
export const woorden = [
  { woord: 'Deskundig', keer: 22 },
  { woord: 'Vakkundig', keer: 21 },
  { woord: 'Professioneel', keer: 15 },
  { woord: 'Vriendelijk', keer: 6 },
];

// Sfeerbeelden van Unsplash. Nooit als eigen werk van Beauty Lounge Sandra presenteren.
const u = (id: string, w: number) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;
export const foto = {
  hero: (w: number) => u('photo-1761718210089-ba3bb5ccb54f', w),
  wimpers: (w: number) => u('photo-1772236617396-2f8460293c07', w),
  gezicht: (w: number) => u('photo-1552693673-1bf958298935', w),
  kwasten: (w: number) => u('photo-1596462502278-27bfdc403348', w),
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
