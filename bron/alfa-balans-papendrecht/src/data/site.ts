// Alle feiten komen uit het dagbestand van 24-11-2026 (lead alfa-balans-papendrecht), met als bronnen
// alfabalans.nl (home, contact, Team, PRIJZEN, LESROOSTER), papendrechtverrast.nl (Heart to Heart Business Inside)
// en localgymsandfitness.com (posts september tot november 2026). Prijzen en Google-reviews zijn niet gevonden,
// die staan daarom niet op de site.
export const site = {
  naam: 'Alfa Balans Yoga & Pilates',
  kort: 'Alfa Balans',
  motto: 'Evenwicht in Beweging',
  straat: 'De Biezen 21A',
  postcode: '3355 EP',
  plaats: 'Papendrecht',
  plek: 'Sportcentrum Papendrecht',
  mobiel: '06 81 14 78 52',
  mobielHref: 'tel:+31681147852',
  mail: 'claire@alfabalans.nl',
  mailInfo: 'info@alfabalans.nl',
  // De bestaande boekingsmodule van de studio. Rooster en boeken lopen daar, niet via deze site.
  boeken: 'https://alfabalans.trainin.app/',
  instagram: 'alfabalans.yoga.pilates',
  route: 'https://www.google.com/maps/search/?api=1&query=De+Biezen+21A+3355+EP+Papendrecht',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Openingstijden van de contactpagina. Week begint op maandag.
export const tijden = [
  { dag: 'Maandag', tijd: '09.00 tot 20.30' },
  { dag: 'Dinsdag', tijd: '07.00 tot 20.30' },
  { dag: 'Woensdag', tijd: '09.00 tot 22.00' },
  { dag: 'Donderdag', tijd: '09.00 tot 22.00' },
  { dag: 'Vrijdag', tijd: '09.00 tot 12.00' },
  { dag: 'Zaterdag', tijd: 'gesloten' },
  { dag: 'Zondag', tijd: '09.00 tot 12.00' },
];

// Per stijl wie hem geeft en wat er bekend is uit de teampagina en de posts van het najaar 2026.
// Bewust geen algemene uitleg per stijl, die staat niet in de bronnen.
export const lessen = [
  {
    stijl: 'Hatha',
    duur: '75 min',
    docenten: 'Claire, Karin, Magdalena',
    momenten: ['Hatha Flow op zondag om 9.00', 'Hatha in het Engels op zondag om 10.30', 'Hatha Slow op dinsdagavond', 'Hatha op woensdagochtend'],
  },
  {
    stijl: 'Vinyasa',
    duur: '75 min',
    docenten: 'Claire, Magdalena, Rozemarijn',
    momenten: ['Hatha-Vinyasa bij Magdalena', 'Gentle Flow bij Rozemarijn'],
  },
  {
    stijl: 'Yin en Yin Yang',
    duur: '75 min',
    docenten: 'Claire, Rozemarijn, Vivi',
    momenten: ['Elke maand een Special Mindfulness in Yin Yoga bij Vivi'],
  },
  {
    stijl: 'Restorative',
    duur: '75 min',
    docenten: 'Claire, Magdalena, Vivi',
    momenten: ['Restorative op dinsdagochtend bij Vivi'],
  },
  {
    stijl: 'Pilates',
    duur: '60 min',
    docenten: 'Claire, Karin, Magdalena',
    momenten: [],
  },
];

export const bijzonder = [
  { titel: 'Menopauzeles', tekst: 'Op maandagavond.' },
  { titel: 'Self-Love Yoga', tekst: 'Bij Magdalena, in het Nederlands en het Engels.' },
  { titel: 'Fascia Maneuvers en ademcirkels', tekst: 'Bij Floor, yogadocent en ademcoach.' },
  { titel: 'Mindful Tekenen', tekst: 'Workshops bij Rozemarijn.' },
];

export const team = [
  { naam: 'Karin', wat: 'Integrale yoga, Hatha Slow op dinsdagavond en pilates.' },
  { naam: 'Magdalena', wat: 'Hatha-Vinyasa, Restorative en pilates. Geeft ook Self-Love Yoga, in het Nederlands en het Engels.' },
  { naam: 'Rozemarijn', wat: 'Vinyasa, opgeleid bij de Nieuwe Yogaschool in Amsterdam. Gentle Flow, Yin en workshops Mindful Tekenen.' },
  { naam: 'Vivi', wat: 'Psycholoog en mindfulnesstrainer. Restorative op dinsdagochtend en elke maand de Special Mindfulness in Yin Yoga.' },
  { naam: 'Floor', wat: 'Yogadocent en ademcoach. Fascia Maneuvers en ademcirkels.' },
  { naam: 'Adrienne', wat: 'Zwangerschapsyoga. Die lessen staan nu even op pauze.' },
];

// Sfeerbeelden van Unsplash. Nooit als eigen werk of als de studio zelf presenteren.
const u = (id: string, w: number) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;
export const foto = {
  hero: (w: number) => u('photo-1761971975858-c487bc10daab', w),
  studio: (w: number) => u('photo-1761971975724-31001b4de0bf', w),
  les: (w: number) => u('photo-1761035005546-62b8018b212a', w),
  blokken: (w: number) => u('photo-1646239646963-b0b9be56d6b5', w),
  mand: (w: number) => u('photo-1767605545968-a102fc151b08', w),
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
