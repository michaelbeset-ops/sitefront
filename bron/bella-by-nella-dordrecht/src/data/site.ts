// Alle feiten komen uit het dagbestand van 27-11-2026 (lead bella-by-nella-dordrecht), met als bronnen
// Treatwell, Fresha, skincare.nl en Salonized.
// Er staan online twee adressen en twee sets openingstijden. Hier staan het adres van Treatwell en Fresha
// en de tijden van Treatwell, omdat daar de reviews van deze maand staan. Het oude adres staat er bewust niet op.
export const site = {
  naam: 'Bella by Nella',
  eigenaar: 'Nella',
  straat: 'Merwedestraat 62',
  postcode: '3313 CS',
  plaats: 'Dordrecht',
  mobiel: '06 48144682',
  mobielHref: 'tel:+31648144682',
  whatsapp: 'https://wa.me/31648144682',
  boeken: 'https://bella-by-nella.salonized.com/widget_bookings/new',
  treatwell: 'https://www.treatwell.nl/en/place/bella-by-nella/',
  facebook: 'https://www.facebook.com/BellabyNellaCreations/',
  route: 'https://www.google.com/maps/search/?api=1&query=Merwedestraat+62+3313+CS+Dordrecht',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Prijzen en duur zoals op Treatwell. Behandelingen zonder prijs in de bron krijgen geen prijs.
export const menu = [
  {
    groep: 'Nagels',
    items: [
      { naam: 'Buildergel nagels, basic', duur: '1 uur', prijs: '60' },
      { naam: 'Verlenging long', prijs: '15' },
      { naam: 'Verwijderen of soak off', extra: 'bij een nieuwe set', prijs: '10' },
    ],
  },
  {
    groep: 'Voeten',
    items: [{ naam: 'Gellak teennagels', duur: '45 min', prijs: '35' }],
  },
  {
    groep: 'Wenkbrauwen',
    items: [{ naam: 'Shaped Brows, wax', prijs: '25' }],
  },
  {
    groep: 'Gezicht',
    items: [
      { naam: 'Basis gezichtsbehandeling', duur: '45 min', prijs: '55' },
      { naam: 'Basis gezichtsbehandeling met dermaplaning', duur: '1 uur', prijs: '75' },
    ],
  },
];
export const ook = ['Make-up, ook voor een avond uit of een optreden', 'Harsen', 'Threading'];

export const tijden = [
  { dag: 'Maandag', tijd: 'Gesloten' },
  { dag: 'Dinsdag', tijd: '10:00 tot 16:00' },
  { dag: 'Woensdag', tijd: '10:00 tot 16:00' },
  { dag: 'Donderdag', tijd: '10:00 tot 16:00' },
  { dag: 'Vrijdag', tijd: '10:00 tot 21:00' },
  { dag: 'Zaterdag', tijd: '12:00 tot 21:00' },
  { dag: 'Zondag', tijd: 'Gesloten' },
];

// Letterlijk overgenomen, met de voornaam en het platform waar de review staat.
export const reviews = [
  { tekst: 'Gezellig en aandacht voor mijn behandeling en advies geven.', naam: 'Mayra', waar: 'Treatwell' },
  { tekst: 'Klantvriendelijk, denkt mee, goede service.', naam: 'Esther', waar: 'Google' },
  { tekst: 'Het is altijd geweldig hier. Ben altijd super blij met me nagels.', naam: 'Charlotte', waar: 'Treatwell' },
  { tekst: 'Bella by Nella verzorgde een prachtige make-up voor mijn concertavond.', naam: 'Nitzah', waar: 'Google' },
  { tekst: 'Weer super tevreden.', naam: 'Dayanara', waar: 'Treatwell' },
];

// Sfeerbeelden van Unsplash. Nooit als eigen werk van Bella by Nella presenteren.
const u = (id: string, w: number) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;
export const foto = {
  hero: (w: number) => u('photo-1753285311550-154917dab783', w),
  nagels: (w: number) => u('photo-1519014816548-bf5fe059798b', w),
  gezicht: (w: number) => u('photo-1761718209835-c8586b7dcac0', w),
  voeten: (w: number) => u('photo-1707725238063-0c54fb6963d1', w),
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
