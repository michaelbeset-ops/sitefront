// Feiten uit het dagbestand van 23-11-2026, met bron.
// horlogereparaties.nl: Omega Certified Service Center, diensten, lederen banden 25 tot 35 euro, sinds 1996 online.
// horlogereparaties.nl/reparatie.htm: Omega-modellen, garantie, onderzoekskosten, levertijd, geen vaste prijslijst.
// hamiltonwatch.com (dealerpagina): adres Kamgras 24, 2804 NR Gouda, 06 26630500, open ma t/m vr 9.30 tot 17.30, Hamilton-dealer.
// horlogeforum.nl: klanten over (neo)vintage, service Speedmaster uit 1989, restauratie Omega Polaris.
// Geen e-mailadres bekend, dus contact loopt via bellen en WhatsApp.
export const site = {
  naam: 'Uurwerkatelier F.J. de Groot',
  kort: 'De Groot',
  eigenaar: 'Frans de Groot',
  straat: 'Kamgras 24',
  postcode: '2804 NR',
  plaats: 'Gouda',
  tel: '06 26 63 05 00',
  telHref: 'tel:+31626630500',
  wa: 'https://wa.me/31626630500',
  facebook: 'https://www.facebook.com/p/Uurwerkatelier-FJ-de-Groot-horlogemaker--100067137998718/',
  maps: 'https://www.google.com/maps/dir/?api=1&destination=Kamgras+24+2804+NR+Gouda',
  tijden: [
    { dag: 'Maandag t/m vrijdag', tijd: '9.30 tot 17.30' },
  ],
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

export const omegaModellen = ['Constellation', 'Aqua Terra', 'De Ville', 'Seamaster', 'Planet Ocean', 'Speedmaster', 'Co-Axial'];

// Romeinse cijfers zoals de uurindex op een wijzerplaat.
export const diensten = [
  { nr: 'I', kop: 'Reparatie en onderhoud', tekst: 'Voor alle Omega-modellen. Op een gewone reparatie zit een jaar garantie.' },
  { nr: 'II', kop: 'Full Service', tekst: 'De complete servicebeurt voor uw horloge, met twee jaar garantie.' },
  { nr: 'III', kop: 'Restauratie', tekst: 'Oude horloges restaureren, zodat ze weer netjes lopen.' },
  { nr: 'IV', kop: 'Waterdichtheid testen', tekst: 'Laat meten of uw horloge nog waterdicht is.' },
  { nr: 'V', kop: 'Wijzerplaten', tekst: 'Werk aan de wijzerplaat. Vraag gerust wat er bij uw horloge kan.' },
  { nr: 'VI', kop: 'Lederen horlogebanden', tekst: 'Een nieuwe band van leer, van 25 tot 35 euro.' },
  { nr: 'VII', kop: 'Batterij wisselen', tekst: 'Voor horloges met een quartz-uurwerk.' },
  { nr: 'VIII', kop: 'Vintage occasions', tekst: 'Tweedehands horloges van vroeger. Vraag wat er op dit moment is.' },
];

export const url = (pad = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${pad}`;

// Sfeerbeelden van Unsplash, nooit gepresenteerd als eigen werk of eigen atelier.
// Controle 23-11: hero 'person fixing time' (photo-1530418244523) is volgens de Unsplash-pagina een Apple Watch-foto
// en 'watch face with the gears missing' (photo-1633451238042) kan een merknaam op de wijzerplaat tonen. Beide eruit.
const u = (id: string, w: number) => `https://images.unsplash.com/${id}?fm=jpg&q=60&w=${w}&auto=format&fit=crop&ixlib=rb-4.1.0`;
export const fotos = {
  hero: (w = 1600) => u('photo-1646724810360-abfa1bb76d6d', w),
  binnenkant: (w = 1200) => u('photo-1694023769753-ab40f6aeb52a', w),
};
