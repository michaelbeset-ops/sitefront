// Feiten: goudsmederijleerdam.nl (Welkom, Trouwen, Gedenken, Reparaties/oud goud, Contact, Over ons; bekeken 5 oktober 2026),
// afspraak.goudsmederijleerdam.nl (SimplyBook), Instagram @goudsmederijleerdam.nl (posts juni-september 2026),
// Google-bedrijfsprofiel "Goudsmederij Leerdam" (4,8 uit 18 reviews; tijden wo-za 09.00-17.00).
export const site = {
  naam: 'Goudsmederij Leerdam',
  straat: 'Kerkstraat 40',
  postcode: '4141 AX',
  plaats: 'Leerdam',
  tel: '06 45 46 89 65',
  telHref: 'tel:+31645468965',
  wa: 'https://wa.me/31645468965',
  mail: 'info@goudsmederijleerdam.nl',
  afspraak: 'https://afspraak.goudsmederijleerdam.nl/v2/#book',
  instagram: 'https://www.instagram.com/goudsmederijleerdam.nl/',
  facebook: 'https://www.facebook.com/GoudsmederijLeerdam/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Goudsmederij+Leerdam+Kerkstraat+40+Leerdam',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Goudsmederij+Leerdam+Kerkstraat+40+Leerdam',
  google: { score: '4,8', aantal: 18 },
  themeColor: '#1c1d1c',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay). Tijden van Google; wo-vr op afspraak, zaterdag ook zonder afspraak voor reparaties.
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '', dicht: '', o: 0, d: 0, noot: '' },
  { dag: 2, naam: 'Dinsdag', open: '', dicht: '', o: 0, d: 0, noot: '' },
  { dag: 3, naam: 'Woensdag', open: '9.00', dicht: '17.00', o: 540, d: 1020, noot: 'op afspraak' },
  { dag: 4, naam: 'Donderdag', open: '9.00', dicht: '17.00', o: 540, d: 1020, noot: 'op afspraak' },
  { dag: 5, naam: 'Vrijdag', open: '9.00', dicht: '17.00', o: 540, d: 1020, noot: 'op afspraak' },
  { dag: 6, naam: 'Zaterdag', open: '9.00', dicht: '17.00', o: 540, d: 1020, noot: 'ook zonder afspraak' },
  { dag: 0, naam: 'Zondag', open: '', dicht: '', o: 0, d: 0, noot: '' },
];

// Letterlijk van Google (5 sterren, stand 5 oktober 2026), ingekort met "…". Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Anja G.', tekst: 'Super mooie ring laten maken van de trouwringen van m’n moeder en oma. … Ze hebben mooie ideeën en suggesties. Echt een aanrader.' },
  { naam: 'Erik', tekst: 'Samen met mijn verloofde hier trouwringen laten maken. Met extra wensen aan de ringen geen probleem hier.' },
  { naam: 'Jolanda H.', tekst: 'Prachtig hanger van mijn vriendschapsring laten maken. Draag hem nu weer elke dag.' },
  { naam: 'Job P.', tekst: 'Afgelopen week onze trouwringen laten opknappen! Extra briljant toegevoegd met veel kennis en kunde.' },
  { naam: 'Erna E.', tekst: 'Prachtige zaak met schitterende sieraden. Veel kennis en ervaring. Wel een afspraak maken om rustig een juweel uit te zoeken.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Goedendag Goudsmederij Leerdam, ik heb een vraag:');
