// Alle feiten komen uit het dagbestand van 27-11-2026 (lead hairstyle-creations-zwijndrecht), met als bronnen
// hairstylecreations.nl (home, about, services, contact), Treatwell, Fresha en Weekblad De Brug (27-10-2023).
// Waar de eigen site en Treatwell verschillen (donderdag en zaterdag) staan hier de tijden van Treatwell en Fresha,
// omdat de online agenda daarop draait. Prijzen voor knippen en kleuren zijn niet gevonden en staan er dus niet.
export const site = {
  naam: 'Hairstyle Creations',
  soort: 'Kapsalon en waxstudio',
  eigenaar: 'Aïscha',
  straat: 'Jacob Marisstraat 5',
  postcode: '3331 VE',
  plaats: 'Zwijndrecht',
  mobiel: '06 81 08 22 97',
  mobielHref: 'tel:+31681082297',
  mail: 'info@hairstylecreations.nl',
  kvk: '93297343',
  // De bestaande online agenda van de salon. Afspraken lopen daar, niet via deze site.
  boeken: 'https://hairstyle-creations.salonized.com/widget_bookings/new',
  route: 'https://www.google.com/maps/search/?api=1&query=Jacob+Marisstraat+5+3331+VE+Zwijndrecht',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

export const tijden = [
  { dag: 'Maandag', tijd: 'gesloten' },
  { dag: 'Dinsdag', tijd: '09.00 tot 17.30' },
  { dag: 'Woensdag', tijd: '09.00 tot 20.30' },
  { dag: 'Donderdag', tijd: '11.30 tot 17.30' },
  { dag: 'Vrijdag', tijd: '09.00 tot 16.00' },
  { dag: 'Zaterdag', tijd: '09.00 tot 13.00' },
  { dag: 'Zondag', tijd: 'gesloten' },
];

// Diensten zoals de eigen site, De Brug en Fresha ze noemen. Prijzen alleen waar Treatwell ze geeft.
export const diensten = [
  {
    titel: 'Knippen en stylen',
    regels: [
      { naam: 'Knippen en stylen voor alle haartypes, ook krullend haar' },
      { naam: 'Föhnen' },
      { naam: 'Kinderen knippen' },
    ],
  },
  {
    titel: 'Kleuren',
    regels: [
      { naam: 'Balayage' },
      { naam: 'Highlights' },
      { naam: 'Kleur en verzorging met Tahe en Finnleys' },
    ],
  },
  {
    titel: 'Haarbehandelingen',
    regels: [
      { naam: 'Magic Curl Treatment, de intensieve krullenbehandeling' },
      { naam: 'Hair botox voor beschadigd haar' },
      { naam: 'Keratine' },
    ],
  },
  {
    titel: 'Vlechten en dreadlocks',
    regels: [{ naam: 'Vlechten' }, { naam: 'Dreadlocks' }],
  },
  {
    titel: 'Waxen',
    regels: [
      { naam: 'Benen, gezicht en oksels, met Lycon wax', prijs: 'vanaf € 9,50' },
      { naam: 'Wenkbrauwen', prijs: '€ 17,50' },
      { naam: 'Wenkbrauwen waxen en verven', prijs: '€ 24,99' },
    ],
  },
];

// Letterlijk van Treatwell (5,0 uit 224 reviews), met de voornaam zoals daar vermeld.
export const reviews = [
  { tekst: 'Geweldig geknipt weer en als persoon ook zo’n fijne kapster. Lief, denkt mee, flexibel.', naam: 'Marielle' },
  { tekst: 'Super vriendelijk en vakkundig geholpen. Aanrader.', naam: 'Rebecca' },
  { tekst: 'Altijd gezellig & je gaat zeer tevreden de deur weer uit. Professioneel, goede producten, geweldig resultaat.', naam: 'Ingrid' },
  { tekst: 'Aisha is een uitstekende en fijne kapster. Altijd goede sfeer!', naam: 'Hanneke' },
];

// Sfeerbeelden van Unsplash. Nooit als eigen werk of als de salon zelf presenteren.
const u = (id: string, w: number) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;
export const foto = {
  hero: (w: number) => u('photo-1641522682419-7e52d83a8ce5', w),
  krullen: (w: number) => u('photo-1588527962980-72746d95973e', w),
  kleur: (w: number) => u('photo-1560264641-1b5191cc63e2', w),
  fohn: (w: number) => u('photo-1580618672591-eb180b1a973f', w),
  gereedschap: (w: number) => u('photo-1595475884562-073c30d45670', w),
};
export const srcset = (f: (w: number) => string, ws: number[]) => ws.map((w) => `${f(w)} ${w}w`).join(', ');

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
