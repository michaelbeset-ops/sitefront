// Feiten (bekeken 8 oktober 2026), ruwe bronnen in ../../bron:
// - dierkx-zonweringen.nl (36 pagina's in bron/web/alle-paginas.txt): Nobelstraat 28D, Goirle (Noord-Brabant), (+31) 6 127 000 15,
//   info@dierkx-zonweringen.nl, showroom "Bezoek op afspraak". Over ons: oprichter Ron werkte tien jaar bij een zonweringsfabrikant,
//   zonen Bart en Max (monteur & adviseur), sinds 2019 alle drie eigenaar. Offerteformulier: maten in millimeters, gratis en
//   vrijblijvend, advies op maat via telefoon of bezoek, tot 5 jaar fabrieksgarantie. Kozijnpagina's toegevoegd 26 mei 2025.
// - Google-profiel "Dierkx Zonwering Tilburg": 4,5 uit 26 reviews, nieuwste 3 maanden oud. Ma t/m vr 09:00-12:00 en 13:00-17:00.
// - Facebook DierkxZonweringen (710 volgers): laatste post 20 augustus 2026.
export const site = {
  naam: 'Dierkx Zonweringen',
  straat: 'Nobelstraat 28D',
  postcode: '5051 DV',
  plaats: 'Goirle',
  tel: '06 12 70 00 15',
  telHref: 'tel:+31612700015',
  wa: 'https://wa.me/31612700015',
  mail: 'info@dierkx-zonweringen.nl',
  facebook: 'https://www.facebook.com/DierkxZonweringen/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Dierkx+Zonweringen+Nobelstraat+28D+Goirle',
  google: { score: '4,5', aantal: 26 },
  themeColor: '#14172a',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Openingstijden van Google (1 = maandag).
export const tijden = [
  [1, 'Maandag', '9.00 tot 12.00, 13.00 tot 17.00'],
  [2, 'Dinsdag', '9.00 tot 12.00, 13.00 tot 17.00'],
  [3, 'Woensdag', '9.00 tot 12.00, 13.00 tot 17.00'],
  [4, 'Donderdag', '9.00 tot 12.00, 13.00 tot 17.00'],
  [5, 'Vrijdag', '9.00 tot 12.00, 13.00 tot 17.00'],
  [6, 'Zaterdag', 'Gesloten'],
  [0, 'Zondag', 'Gesloten'],
] as const;

// Letterlijk van Google (5 sterren, stand 8 oktober 2026), ingekort met "…". Achternaam als initiaal.
export const reviews = [
  { naam: 'Marianne G.', tekst: 'Erg tevreden over de prachtige screens die zeer vakkundig geplaatst zijn, de heldere afspraken, goede communicatie en service, ook bij vragen achteraf. Het is een genot om te zien hoe deze mannen als een hecht team samenwerken …' },
  { naam: 'Henry K.', tekst: 'Max en Bart hebben de producten perfect geïnstalleerd en keurig afgeleverd. Hier hou ik van; voldoen aan de verwachtingen. En daarbij nog erg gelachen met de boys.' },
  { naam: 'L. P.', tekst: "Meedenkende monteurs die van 'boren' een kunst hebben gemaakt. Kortom zeer netjes zonder overlast en lelijke beschadigingen van mijn stucwerk." },
  { naam: 'Thijs', tekst: 'De voorgevel hebben zij voorzien van screens die perfect weggewerkt zijn en perfect werken, echt vakwerk.' },
  { naam: 'Pieter O.', tekst: 'Maandag rolluik geplaatst, zeer tevreden, je hoor het niet naar boven en beneden, en zeer vriendelijke jongens …' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Dierkx Zonweringen, ik heb een vraag over zonwering.');
