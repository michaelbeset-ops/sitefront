// Alle feiten komen uit het dagbestand van 28-11-2026 (lead pmu-beautycare-barendrecht), met als bronnen
// Treatwell (https://www.treatwell.nl/salon/pmu-beautycare-barendrecht/) en Salonized
// (https://pmu-beautycare-barendrecht.salonized.com/).
// Treatwell en Salonized noemen verschillende openingstijden. Daarom staat er "op afspraak" en geen tijden.
export const site = {
  naam: 'PMU BeautyCare Barendrecht',
  kort: 'PMU BeautyCare',
  eigenaar: 'Gwendolyn van Looijen',
  voornaam: 'Gwendolyn',
  straat: 'Markermeer 47',
  postcode: '2993 PJ',
  plaats: 'Barendrecht',
  mobiel: '06 42227766',
  mobielHref: 'tel:+31642227766',
  whatsapp: 'https://wa.me/31642227766',
  email: 'info@pmubeautycare.nl',
  boeken: 'https://pmu-beautycare-barendrecht.salonized.com/',
  treatwell: 'https://www.treatwell.nl/salon/pmu-beautycare-barendrecht/',
  instagram: 'https://www.instagram.com/pmu_beautycare_barendrecht/',
  facebook: 'https://www.facebook.com/beautycarewimperextensions',
  route: 'https://www.google.com/maps/search/?api=1&query=Markermeer+47+2993+PJ+Barendrecht',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Wat klanten in de nieuwste reviews op Treatwell noemen. Samengevat, geen letterlijke citaten.
export const genoemd = [
  'Niet meer elke dag je wenkbrauwen tekenen',
  'Goede uitleg bij de eyeliner-lijntjes',
  'Vriendelijk, netjes en professioneel',
  'Een goede nabehandeling na zes weken',
  'Goede communicatie',
  'Je op je gemak voelen',
  'Tevreden over de wimperlift',
];

// Het traject van powder brows, met duur en prijs zoals op Treatwell.
export const traject = [
  { stap: 'Adviesgesprek', wanneer: 'Eerst', duur: '30 minuten', prijs: 'Gratis', tekst: 'Kennismaken en eerlijk advies, zonder kosten en zonder verplichting.' },
  { stap: 'Powder brows', wanneer: 'De behandeling', duur: '2 uur', prijs: '€ 235', tekst: 'Met verdoving, zodat je er zo comfortabel mogelijk bij zit.' },
  { stap: 'Nabehandeling', wanneer: 'Binnen 6 weken', duur: '', prijs: '€ 85', tekst: 'De wenkbrauwen worden nagelopen en waar nodig bijgewerkt.' },
  { stap: 'Touch up', wanneer: 'Later', duur: '', prijs: '', tekst: 'Om de kleur op te frissen.', extra: [{ naam: 'Binnen 1 jaar', prijs: '€ 180' }, { naam: 'Binnen 2 jaar', prijs: '€ 210' }] },
];

// Prijzen zoals op Treatwell. Behandelingen zonder prijs in de bron krijgen geen prijs.
export const prijzen = [
  {
    groep: 'Permanente make-up',
    items: [
      { naam: 'Eyeliner PMU', extra: '10 varianten', prijs: 'vanaf € 60' },
      { naam: 'Lips PMU', prijs: 'vanaf € 85' },
      { naam: 'Nabehandeling infralash', prijs: '€ 60' },
      { naam: 'Combinatiebehandelingen', prijs: 'vanaf € 100' },
    ],
  },
  {
    groep: 'Wimpers en wenkbrauwen',
    items: [
      { naam: 'Wimpers', extra: '12 behandelingen, waaronder wimperextensions en wimperlift', prijs: 'vanaf € 15' },
      { naam: 'Henna brows', prijs: '' },
      { naam: 'Wenkbrauwen waxen', prijs: '€ 15' },
      { naam: 'Wenkbrauwen verven', prijs: '€ 15' },
      { naam: 'Wimpers verwijderen', prijs: '€ 15' },
    ],
  },
];

export const merken = ['Perfect Eyelash', 'Lashtag', "L'avely", 'Blink', 'Permablend', 'Mast & Kwadron'];

// Sfeerbeelden van Unsplash (adressen uit de zoekpagina's lash-extensions en eyebrow-threading).
// Nooit als eigen werk van PMU BeautyCare presenteren.
const u = (id: string, w: number) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;
export const foto = {
  hero: (w: number) => u('photo-1718720410649-7524fcb0f0a5', w),
  brauw: (w: number) => u('photo-1783013951101-2d9ed3eac234', w),
  wimpers: (w: number) => u('photo-1770999086860-143f54adf01b', w),
  oog: (w: number) => u('photo-1639629509821-c54cdd984227', w),
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
