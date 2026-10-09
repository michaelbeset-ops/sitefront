// Feiten (bekeken 9 oktober 2026), ruwe bronnen in ../../bron:
// - Google-profiel "JS buitenkeukens": categorie Meubelmakerij, servicegebied (geen adres), 06 38437139, website = Instagram,
//   elke dag 10:00-18:00, 5,0 uit 10 reviews (1-5 maanden oud), 9 foto's "Van eigenaar" (apr 2026).
// - Instagram @jsbuitenkeukens: bio "Maatwerk buitenkeukens • uniek design / Diverse werkbladen & prijsklassen /
//   Offerte / info? Stuur een DM of whatsapp", 20 posts, nieuwste 28-09-2026. Projectspecificaties uit de captions.
// - TikTok @js.buitenkeukens: "Maatwerk; volledig naar wens gemaakt" / "Levering; bezorging in overleg".
// - GEEN plaats in eigen bronnen (alleen registers als Company.info noemen er een): geen plaats tonen.
// - Eigenaarsnaam staat niet in eigen bronnen (alleen in reviews): niet tonen.
export const site = {
  naam: 'JS buitenkeukens',
  tel: '06 38 43 71 39',
  telHref: 'tel:+31638437139',
  wa: 'https://wa.me/31638437139',
  instagram: 'https://www.instagram.com/jsbuitenkeukens/',
  tiktok: 'https://www.tiktok.com/@js.buitenkeukens',
  google: { score: '5,0', aantal: 10 },
  themeColor: '#1a1918',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Letterlijk van Google (alle 10 reviews 5 sterren), soms ingekort met "…". Voornaam + initiaal, geen datums.
// Bewust niet gebruikt: reviews die de voornaam van de eigenaar of een woonplaats noemen.
export const reviews = [
  { naam: 'Dean L.', tekst: 'Van begin tot eind uitstekend geholpen. Echt maatwerk geleverd en alles volledig volgens afspraak uitgevoerd. De plaatsing is netjes verzorgd en het eindresultaat is precies zoals gewenst.' },
  { naam: 'Kevyn F.', tekst: 'Wij hebben een buitenkeuken op maat laten maken voor onze kamado’s en zijn er enorm tevreden mee. De afwerking is prachtig, alles is stevig gebouwd en tot in de puntjes verzorgd.' },
  { naam: 'Sonja S.', tekst: 'De communicatie was prettig en duidelijk, er werd goed meegedacht en afspraken werden netjes nagekomen. De kwaliteit van de buitenkeuken is uitstekend en het geheel is mooi afgewerkt.' },
  { naam: 'Marco', tekst: 'We hebben een buitenkeuken door JS buitenkeukens laten maken voor onder onze overkapping. Dit ging in goed overleg en er is veel mogelijk. Het eindresultaat is prachtig!' },
  { naam: 'Ludolf M.', tekst: 'Wat een prachtige buitenkeuken! De communicatie vlot en duidelijk waardoor alle wensen zijn gerealiseerd in dit stukje vakwerk.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hoi JS buitenkeukens, ik heb een vraag over een buitenkeuken op maat.');
