// Feiten (bekeken 12 oktober 2026), bronnen in bron/:
// - Google-profiel (bron/google): "Lokaal de Klik - Lunchroom", Voorstraat 433, 3311 CT Dordrecht, 06 81438564,
//   4,9 uit 118 reviews, geen website. Tijden: wo t/m za 11:00-17:00, zo/ma/di gesloten. Laatste review 11 uur oud.
// - Eigen foto's op Google (Van eigenaar): menukaart (jul 2025, prijzen NIET overgenomen), flyer met hun eigen tekst
//   ("Bestellen en reserveren kan ook!", info@lokaaldeklik.nl, ondertekend Anne-Marie & Maarten), artikel met
//   Anne-Marie Verbeek en Maarten Wijk, opening 12 september 2018. Zie bron/google/eigenaar/TRANSCRIPTIES.txt.
// - Eigenaarsantwoorden op Google, ondertekend "Anne-Marie en Maarten" (o.a. "terrassen: voor en achter",
//   "ons kleine terrasje aan het water", "onze appeltaart", "onze wortel/dadeltaart").
// - lokaaldeklik.nl toont ruwe PHP-code (bron/web), al zo in het webarchief van 28-02-2021.
export const site = {
  naam: 'Lokaal de Klik',
  volledig: 'Lokaal de Klik',
  plaats: 'Dordrecht',
  straat: 'Voorstraat 433',
  postcode: '3311 CT',
  tel: '06 81 43 85 64',
  telHref: 'tel:+31681438564',
  mail: 'info@lokaaldeklik.nl',
  wa: 'https://wa.me/31681438564',
  route: 'https://www.google.com/maps/dir/?api=1&destination=Lokaal+de+Klik%2C+Voorstraat+433%2C+3311+CT+Dordrecht',
  reviews: 'https://www.google.com/maps/place/Lokaal+de+Klik+-+Lunchroom/@51.8136387,4.6614983,17z/data=!4m6!3m5!1s0x47c42fc3c78c0a95:0x62a20d025f38d4eb!8m2!3d51.8136387!4d4.6614983!16s%2Fg%2F11gsbddkn3',
  google: { score: '4,9', aantal: 118 },
  themeColor: '#1e2226',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Openingstijden per weekdag (0 = zondag), in uren. null = gesloten.
export const tijden: Record<number, [number, number] | null> = {
  0: null, 1: null, 2: null, 3: [11, 17], 4: [11, 17], 5: [11, 17], 6: [11, 17],
};
export const dagNamen = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];
export const uur = (u: number) => `${Math.floor(u)}.${u % 1 ? '30' : '00'}`;

// Letterlijk van Google (alle 5 sterren). Naam: voornaam + initiaal. "…" = ingekort.
export const reviews = [
  { naam: 'Oksana O.', wanneer: 'een maand geleden', tekst: 'Een gezellige, familiaire sfeer, huisgemaakte gerechten met liefde bereid. De eigenaren koken, serveren en praten met de gasten alsof iedereen goede vrienden is. … Een tafeltje op het balkon is de ultieme Dordrecht-ervaring.' },
  { naam: 'Zanie B.', wanneer: 'een dag geleden', tekst: 'De sfeer was geweldig en het eten was eenvoudig maar bijzonder en absoluut heerlijk. Sla het dessert niet over: de worteltaart met dadels was fantastisch!' },
  { naam: 'Iris T.', wanneer: '2 maanden geleden', tekst: 'Heerlijk plekje met een schattig balkonterrasje waar je naar toe kunt via een trappetje door het raam. Uitzicht op het water, de bootjes, de kerk en het bruggetje … mijn broodje met kip, druif en avocado vond ik subliem.' },
  { naam: 'Martin P.', wanneer: '2 weken geleden', tekst: 'Wat een top-plek is dit zeg! Zeer vriendelijk geholpen door Maarten en Anne-marie en een heerlijke lunch (volledig zelf gemaakt) genoten.' },
  { naam: 'Ed v. E.', wanneer: '5 maanden geleden', tekst: 'Anne Marie en Maarten zijn gastvrij, vriendelijk, maken alle gerechten en dranken zelf klaar en proberen hun klanten zich welkom te laten voelen. Dat lukt zeer goed.' },
  { naam: 'Manon V.', wanneer: '2 maanden geleden', tekst: 'Zo buiten op het balkon aan het water, heerlijk rustig met uitzicht op de kerk. … Bediening met een praatje en een hoop grapjes … Alles vers klaar gemaakt.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Anne-Marie en Maarten, ik heb een vraag.');
