// Feiten (bekeken 15 oktober 2026), bronnen in bron/:
// - Eigen site dehaan-zonwering.nl (WordPress; alle pagina's in bron/site/*.txt). Home: "Uw specialist in Zonwering & Rolluiken",
//   "voor een vrijblijvende offerte kunt u altijd contact met ons opnemen. Wij komen dan geheel vrijblijvend bij u langs."
//   Footer: Eikenlaan 5, 4254 AR Sleeuwijk, M. 06 20402606 (Wim), M. 06 23583759 (Marjolein), info@dehaan-zonwering.nl,
//   badge "Unilux Premium Dealer". Contact: KvK 63079887. Productpagina's: garanties, maten, merken (zie index.astro).
// - Instagram @de_haan_zonwering ("Wim-Marjolein de Haan", posts t/m juni 2026), flyer: "Altijd gratis en vrijblijvend advies",
//   lijst met o.a. raamdecoratie en horren. Facebook: 430 volgers, juli 2026 nog actief.
// - Google: Leverancier van zonwering, 5,0 uit 23 reviews, nieuwste 3 maanden oud. Tijden volgens Google (bron/google/uren.json).
// - Eikenlaan 5 is een woonstraat zonder winkel of showroom: alleen de plaats tonen.
export const site = {
  naam: 'De Haan Zonwering',
  plaats: 'Sleeuwijk',
  tel: '06 20 40 26 06',
  telHref: 'tel:+31620402606',
  tel2: '06 23 58 37 59',
  tel2Href: 'tel:+31623583759',
  wa: 'https://wa.me/31620402606',
  mail: 'info@dehaan-zonwering.nl',
  kvk: '63079887',
  insta: 'https://www.instagram.com/de_haan_zonwering/',
  fb: 'https://www.facebook.com/dehaanzonwering',
  reviews: 'https://www.google.com/maps/place/De+Haan+Zonwering/@51.8102006,4.9487387,17z/data=!4m6!3m5!1s0x47c685c193b9e057:0x70cb7bb25afef58b!8m2!3d51.8102006!4d4.9487387!16s%2Fg%2F11c3sqcqc1',
  google: { score: '5,0', aantal: 23 },
  themeColor: '#26282c',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Maandag = 1 ... zondag = 0. Bron: Google-profiel. Uren als decimalen (8.5 = 08:30).
export const tijden: { dag: string; nr: number; open: [number, number] | null }[] = [
  { dag: 'Maandag', nr: 1, open: [8.5, 19] },
  { dag: 'Dinsdag', nr: 2, open: [8.5, 19] },
  { dag: 'Woensdag', nr: 3, open: [8.5, 19] },
  { dag: 'Donderdag', nr: 4, open: [8.5, 19] },
  { dag: 'Vrijdag', nr: 5, open: [9, 17] },
  { dag: 'Zaterdag', nr: 6, open: [9, 14] },
  { dag: 'Zondag', nr: 0, open: null },
];
export const uur = (h: number) => `${String(Math.floor(h)).padStart(2, '0')}:${h % 1 ? '30' : '00'}`;

// Letterlijk van Google (alle 5 sterren). Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Lida H.', wanneer: '3 maanden geleden', tekst: 'Wat een topbedrijf. Blij dat ik de zonwering bij hen heb gekocht. Ik kwam vandaag, in het weekend, om half 7 thuis en de zonwering lag er half af. Ik vroeg om advies: binnenhalen of niet. Wim en Marjolein waren er binnen een kwartier en hebben het vakkundig gerepareerd! Koop lokaal!!' },
  { naam: 'Danny v.', wanneer: 'een jaar geleden', tekst: 'Al jaren klant. Super blij met de nieuwst aankoop. Hordeur bij de achterkant. Snelle service en vriendelijk geholpen elke keer weer!' },
  { naam: 'W.B.', wanneer: '2 jaar geleden', tekst: 'Fijn en service gericht bedrijf. Ons oude rolluik kraakte aan alle kanten en is door hen gerepareerd! Loopt weer soepel. Snelle en duidelijke communicatie, is betrouwbaar en komt afspraken na.' },
  { naam: 'Johan J.', wanneer: '4 jaar geleden', tekst: 'Vandaag zijn er nieuwe rolluiken aan onze woning geplaatst door Wim en zijn collega. Wij zijn meer dan tevreden over de service, klantgerichtheid en het resultaat. Een echte aanrader!' },
  { naam: 'Sharon v.', wanneer: '6 jaar geleden', tekst: 'Wat een toppers. … Rolluiken, binnenzonwering, diverse screens en horren hebben we afgenomen. Alle keren top service gehad, snel, adequaat en terzakekundig.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Wim, ik heb een vraag over zonwering.');
