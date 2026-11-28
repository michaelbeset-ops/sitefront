// Alle feiten komen uit het dagbestand van 28-11-2026 (lead lott-beautysalon-dordrecht), met als bronnen
// lottbeautysalon.nl (home, over, behandelingen), skincare.nl en pedicureatelure.nl.
// Het afwijkende WhatsApp-nummer van skincare.nl staat er bewust niet op, het is niet bevestigd.
export const site = {
  naam: 'LOTT. Beautysalon',
  eigenaar: 'Charlotte',
  straat: 'Voorstraat 339',
  postcode: '3311 EP',
  plaats: 'Dordrecht',
  mobiel: '06 14163775',
  mobielHref: 'tel:+31614163775',
  boeken: 'https://lott-beautysalon.salonized.com/widget_bookings/new',
  route: 'https://www.google.com/maps/search/?api=1&query=Voorstraat+339+3311+EP+Dordrecht',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Het verhaal van Charlotte, zoals op lottbeautysalon.nl/over.
export const verhaal = [
  { plek: 'De woonkamer', tekst: 'Het begon als Nails by Lott, vanuit de woonkamer.' },
  { plek: 'De schuur', tekst: 'Haar moeder verbouwde daarna de schuur tot een echte nagelstudio.' },
  { plek: 'De Voorstraat', tekst: 'Nu is het LOTT. Beautysalon, met een eigen salon in het centrum van Dordrecht.' },
];

// Behandelingen van lottbeautysalon.nl/behandelingen. Geen prijzen, die staan alleen in de online agenda.
type Item = { naam: string; uitleg?: string };
export const behandelingen: { groep: string; intro: string; foto: 'nagels' | 'brows' | 'wimpers'; alt: string; items: Item[] }[] = [
  {
    groep: 'Nagels',
    intro: 'Het specialisme van Charlotte.',
    foto: 'nagels',
    alt: 'Hand met een French manicure en glitter',
    items: [
      { naam: 'BIAB', uitleg: 'Versterkende gel op je eigen nagel. Een Russian manicure zit erbij.' },
      { naam: 'Gellak' },
      { naam: 'Russian manicure' },
      { naam: 'Nail art', uitleg: 'Als extra, bijvoorbeeld een French, hartjes of een steentje.' },
    ],
  },
  {
    groep: 'Wenkbrauwen',
    intro: 'Waxen, verven, henna en lamination.',
    foto: 'brows',
    alt: 'Wenkbrauwen worden in een salon in model gebracht',
    items: [
      { naam: 'Waxen', uitleg: 'Voor mannen en vrouwen.' },
      { naam: 'Verven', uitleg: 'Inclusief uitmeten, waxen en stylen. De kleur blijft 3 tot 5 dagen op de huid en 2 tot 4 weken in de haren.' },
      { naam: 'Henna brows', uitleg: '6 tot 8 weken in de haren en 5 tot 10 dagen op de huid.' },
      { naam: 'Brow lamination', uitleg: 'Ook wel brow lift genoemd.' },
    ],
  },
  {
    groep: 'Wimpers',
    intro: 'Extensions en een lift voor je eigen wimpers.',
    foto: 'wimpers',
    alt: 'Wimperextensions worden met een pincet aangebracht',
    items: [
      { naam: 'Lash extensions One by One' },
      { naam: 'Lash extensions Russian Volume', uitleg: '2 tot 5 extensions per wimper.' },
      { naam: 'Lash Volume Lift', uitleg: 'Krul in je eigen wimpers zonder krultang, afgemaakt met verven.' },
    ],
  },
];

// Openingstijden van pedicureatelure.nl. De eigen site noemt geen tijden.
export const tijden = [
  { dag: 'Maandag', tijd: '10:00 tot 17:00' },
  { dag: 'Dinsdag', tijd: '12:00 tot 18:00' },
  { dag: 'Woensdag', tijd: '10:00 tot 17:00' },
  { dag: 'Donderdag', tijd: '12:00 tot 20:00' },
  { dag: 'Vrijdag', tijd: '10:00 tot 17:00' },
  { dag: 'Zaterdag', tijd: '10:00 tot 17:00' },
  { dag: 'Zondag', tijd: '12:30 tot 16:30' },
];

// Google-reviews via skincare.nl, in eigen woorden samengevat (geen letterlijke citaten).
export const klanten = [
  { naam: 'Denise B.', tekst: 'is al sinds het begin klant en noemt het een fijne plek met mooie nagels.' },
  { naam: 'Nathalie Hamans', tekst: 'laat elke maand haar nagels en wimpers doen bij Anne. Het team neemt echt de tijd en de sfeer is huiselijk.' },
  { naam: 'Linde Lois Smit', tekst: 'noemt de vele behandelingen tegen goede prijzen en de vriendelijke medewerkers. Is het druk, dan denken ze mee over een plekje.' },
  { naam: 'Merel Meuleman', tekst: 'komt elke maand voor haar nagels bij Charlotte en vindt het altijd gezellig.' },
];

// Sfeerbeelden van Unsplash. Nooit als eigen werk van LOTT. presenteren.
const u = (id: string, w: number) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;
export const foto = {
  hero: (w: number) => u('photo-1632345031435-8727f6897d53', w),
  tafel: (w: number) => u('photo-1775500835259-d3b3f6d6e2f2', w),
  nagels: (w: number) => u('photo-1772322586754-34c9e6f5be6f', w),
  brows: (w: number) => u('photo-1674049406179-d7bf2c263e71', w),
  wimpers: (w: number) => u('photo-1589710751893-f9a6770ad71b', w),
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
