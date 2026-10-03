// Feiten (bekeken 3 oktober 2026):
// - Google-bedrijfsprofiel "Barbershop gullit": Barbier, 4,9 uit 18 reviews, Noord Voorstraat 11, 3295 BL 's-Gravendeel,
//   06 46432397, tijden wo 12-17, do 10-20, vr 10-17, za 10-14, zo/ma/di gesloten. 9 eigen foto's (pand, interieur, bord).
// - casagullit.nl via web.archive.org (19-04-2026): concept store Casa Gullit (Parfum, Barber, Haar & Baard Producten,
//   Kleding, Home accessoires, Accessoires), "Luxury in Simplicity", verhaal van de barbier (Heads Academy Delft,
//   Old School Barber Academy van Schorem Rotterdam), Google-reviewwidget. Live site: WordPress "kritieke fout".
// - Instagram @barbershopgullit (315 volgers, laatste post 31-05-2026; verhuispost 20-05-2025) en @casagullit
//   ("Concept store, Niche parfum"). Facebook niet nodig gehad. Geen e-mail of KvK gevonden.
export const site = {
  naam: 'Barbershop Gullit',
  straat: 'Noord Voorstraat 11',
  postcode: '3295 BL',
  plaats: "'s-Gravendeel",
  tel: '06 46 43 23 97',
  telHref: 'tel:+31646432397',
  wa: 'https://wa.me/31646432397',
  instagram: 'https://www.instagram.com/barbershopgullit/',
  instaStore: 'https://www.instagram.com/casagullit/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Barbershop+Gullit+Noord+Voorstraat+11+%27s-Gravendeel',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Barbershop+gullit&query_place_id=ChIJV2w9WK8vxEcRDoRMFzxi_zg',
  google: { score: '4,9', aantal: 18 },
  themeColor: '#141312',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay). Tijden van Google (actueler dan de oude site).
export const tijden = [
  { dag: 1, naam: 'Maandag', kort: 'Ma', open: '', dicht: '', o: 0, d: 0 },
  { dag: 2, naam: 'Dinsdag', kort: 'Di', open: '', dicht: '', o: 0, d: 0 },
  { dag: 3, naam: 'Woensdag', kort: 'Wo', open: '12.00', dicht: '17.00', o: 720, d: 1020 },
  { dag: 4, naam: 'Donderdag', kort: 'Do', open: '10.00', dicht: '20.00', o: 600, d: 1200 },
  { dag: 5, naam: 'Vrijdag', kort: 'Vr', open: '10.00', dicht: '17.00', o: 600, d: 1020 },
  { dag: 6, naam: 'Zaterdag', kort: 'Za', open: '10.00', dicht: '14.00', o: 600, d: 840 },
  { dag: 0, naam: 'Zondag', kort: 'Zo', open: '', dicht: '', o: 0, d: 0 },
];

// Diensten: bord "Haircuts and shaves", review "knippen en scheren", review over hun zoontje van 2,
// fades op hun Instagram; winkel: categorieën van casagullit.nl. Geen prijzen gevonden.
export const chips = ['Knippen', 'Fades', 'Scheren', 'Baard', 'Kinderen', 'Haar- en baardproducten', 'Niche parfum', 'Kleding en accessoires'];

// Letterlijk van Google (Google-profiel en de Google-reviewwidget op hun oude site). Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Jasmin O.', wanneer: '5 maanden geleden', tekst: 'Rani is echt een topkapper! Ze luistert goed naar je wensen en denkt met je mee. Absoluut een aanrader!' },
  { naam: 'Julienca T.', wanneer: 'een jaar geleden', tekst: 'Zoontje van 2 jaar vind je "kapper" dood eng. Hier met veel geduld ging het eigenlijk best goed. Bedankt voor je geduld.' },
  { naam: 'Dennis v. D.', wanneer: '4 jaar geleden', tekst: 'Constante kwaliteit vind je hier. Dat is bij veel andere zaken wat er vaak aan ontbreekt.' },
  { naam: 'Manfred v. H.', wanneer: '6 jaar geleden', tekst: 'Kleine barbershop voor knippen en scheren. Aardige barbier die goed knipt. Daarnaast krijgt je altijd wat te drinken aangeboden. …' },
  { naam: 'Patrick H.', wanneer: '3 jaar geleden', tekst: 'Vriendelijk en deskundig' },
  { naam: 'José M.', wanneer: '4 jaar geleden', tekst: 'Keurige salon goede barbier' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waAfspraak = waMet('Hoi Barbershop Gullit, ik wil graag een afspraak maken.');
