// Feiten (bekeken 7 oktober 2026), bronnen in bron/:
// - terlouwinterieur.nl (home, contact, binnen-/buitenzonwering, horren, 20 productpagina's, portfolio met 56 projecten):
//   "Terlouw Interieur & Montage", Bruningsstraat 17, 4251 LA Werkendam, +31 (0)85 888 3610, info@terlouwinterieur.nl.
//   Home + contact: "De showroom van Terlouw is gesloten, onze showroom in Werkendam is wel geopend."
//   Footer: "Terlouw Interieur is onderdeel van Berchum Zonwering BV."
//   Home: "Bij Terlouw Interieur bent u aan het juiste adres voor het op maat laten maken, inmeten en monteren van horren,
//   binnenzonwering en buitenzonwering. Kwaliteit, service en nauwkeurigheid staan hierbij altijd voorop."
//   Home: "NIEUW IN DE COLLECTIE, FOLDS ... de nieuwe generatie vouwgordijnen zonder stiknaden en zomen, afgewerkt met
//   high-end houten baleinen."
//   Shutters: "Wanneer u uw type heeft gekozen, komen we graag bij u langs om het product nauwkeurig in te meten. Vervolgens
//   laten we uw product op maat produceren, waarna we weer bij u langskomen voor de installatie."
//   06-217 082 55 (tel:+31621708255) staat op 24 eigen pagina's (o.a. /vouwgordijnen-2/, /zonwering/, /screens-2/) naast het
//   oude adres Noordeinde 144, Hendrik-Ido-Ambacht. De actuele contactpagina noemt alleen 085 888 3610.
// - Google-profiel "Terlouw Interieur": Bruningsstraat 17 Werkendam, 085 888 3610, 4,9 uit 18 reviews, geen openingstijden.
// - Instagram @terlouw_interieur: 39 berichten, laatste 18 december 2024. Facebookpagina uit de footer is niet beschikbaar.
export const site = {
  naam: 'Terlouw Interieur & Montage',
  kort: 'Terlouw',
  straat: 'Bruningsstraat 17',
  postcode: '4251 LA',
  plaats: 'Werkendam',
  tel: '085 888 3610',
  telHref: 'tel:+31858883610',
  mobiel: '06 21 70 82 55',
  wa: 'https://wa.me/31621708255',
  mail: 'info@terlouwinterieur.nl',
  instagram: 'https://www.instagram.com/terlouw_interieur/',
  web: 'https://www.terlouwinterieur.nl/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Terlouw+Interieur+Bruningsstraat+17+Werkendam',
  google: { score: '4,9', aantal: 18 },
  themeColor: '#f4f3ef',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

const p = (pad: string) => `https://www.terlouwinterieur.nl/${pad}/`;

// Hun eigen assortiment (menu terlouwinterieur.nl), elke regel linkt naar hun bestaande productpagina.
export const binnen: [string, string][] = [
  ['Vouwgordijnen', p('vouwgordijnen')],
  ['Plisségordijnen', p('plissegordijnen')],
  ['Duette® gordijnen', p('duette-gordijnen')],
  ['Rolgordijnen', p('rolgordijnen')],
  ['Duo rolgordijnen', p('duo-rolgordijnen')],
  ['Houten jaloezieën', p('houten-jaloezieen')],
  ['Aluminium jaloezieën', p('aluminium-jaloezieen')],
  ['Shutters', p('shutters')],
  ['Geweven hout', p('geweven-hout')],
  ['Lamellen', p('lamellen')],
  ['Paneelgordijnen', p('paneelgordijnen')],
  ['Sheerlight', p('sheerlight')],
];
export const buiten: [string, string][] = [
  ['Screens', p('screens')],
  ['Markiezen', p('markiezen')],
  ['Terrasschermen', p('terrasschermen')],
  ['Uitvalschermen', p('uitvalschermen')],
  ['Rolluiken', p('rolluiken')],
];
export const horren: [string, string][] = [
  ['Plissé hordeuren', p('plisse-deuren')],
  ['Inzethorren', p('inzethorren')],
  ['Rolhorren', p('rolhorren')],
];

// Plaatsen uit hun portfolio (56 projecten, 2022 tot augustus 2025).
export const plaatsen = ['Hendrik-Ido-Ambacht', 'Dordrecht', 'Zwijndrecht', 'Gorinchem', 'Nieuw-Lekkerland', 'Alblasserdam', 'Ridderkerk', 'Rotterdam', 'Kuipersveer', 'Hoef en Haag', 'Dirksland', 'Meteren', 'Houten'];

// Letterlijk van Google (alle 5 sterren, stand 7 oktober 2026). Reviews van familie Terlouw bewust weggelaten.
export const reviews = [
  { naam: 'Mike E.', tekst: 'Op dezelfde dag als mijn aanvraag werd er al ingemeten. Slechts een week of 2 later werden de zwarte horsystemen al vakkundig gemonteerd. Ze zien er mooi uit en voelen degelijk aan.' },
  { naam: 'Marcel P.', tekst: 'Vlot, meedenkend, netjes geleverd en afgewerkt c.q. gemonteerd. Wij zijn enorm blij met onze nieuwe plisséhordeur en met een app bedienbare markies.' },
  { naam: 'Jas P.', tekst: 'Zeer tevreden over dit bedrijf. Professioneel van afspraak tot oplevering.' },
  { naam: 'Paul S.', tekst: 'Fijne communicatie, mooie plaatsing en alles keurig volgens afspraak.' },
  { naam: 'J. B.', tekst: 'Zeer tevreden; vriendelijke en vakkundige mensen; goede adviezen, netjes gewerkt; prima resultaat.' },
];

export const url = (pad = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${pad.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const mailMet = (onderwerp: string, tekst: string) => `mailto:${site.mail}?subject=${encodeURIComponent(onderwerp)}&body=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Terlouw, ik heb een vraag over raamdecoratie of zonwering.');
