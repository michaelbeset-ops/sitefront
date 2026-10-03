// Feiten: hondentrimsalonesther.nl (alle pagina's, opgehaald 3 oktober 2026), Google-bedrijfsprofiel "Hondentrimsalon Esther"
// (5,0 uit 12 reviews, geen openingstijden), Instagram @hondentrimsalonesther (laatste post 28 juli 2026).
// Esther van Zelst, De Lairessestraat 1, 2923 CG Krimpen aan den IJssel. 06 51 30 52 42 (bel/app), info@hondentrimsalonesther.nl, KvK 62438131.
export const site = {
  naam: 'Hondentrimsalon Esther',
  eigenaar: 'Esther van Zelst',
  straat: 'De Lairessestraat 1',
  postcode: '2923 CG',
  plaats: 'Krimpen aan den IJssel',
  tel: '06 51 30 52 42',
  telHref: 'tel:+31651305242',
  wa: 'https://wa.me/31651305242',
  mail: 'info@hondentrimsalonesther.nl',
  kvk: '62438131',
  instagram: 'https://www.instagram.com/hondentrimsalonesther/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Hondentrimsalon+Esther+De+Lairessestraat+1+Krimpen+aan+den+IJssel',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Hondentrimsalon+Esther+Krimpen+aan+den+IJssel',
  google: { score: '5,0', aantal: 12 },
  themeColor: '#43574b',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Hun eigen tarieven (pagina Tarieven, inclusief btw). Trimmen: vanaf-prijzen per schofthoogte.
export const trimPrijzen = [
  { id: 's', label: 'Tot 35 cm', kort: 'Klein', prijs: 30, sil: 'sil-s.png', h: 3.2, ar: 0.85, voorbeeld: 'chihuahua' },
  { id: 'm', label: '35 tot 45 cm', kort: 'Middel', prijs: 45, sil: 'sil-m.png', h: 3.3, ar: 1.46, voorbeeld: 'spaniël' },
  { id: 'l', label: '45 tot 60 cm', kort: 'Groot', prijs: 60, sil: 'sil-l.png', h: 4.2, ar: 1.52, voorbeeld: 'retriever' },
  { id: 'xl', label: 'Boven 60 cm', kort: 'Extra groot', prijs: 70, sil: 'sil-xl.png', h: 5.2, ar: 1.13, voorbeeld: 'grote ruwharige hond' },
];

export const behandelingen = ['Wassen', 'Kammen en borstelen', 'Ontklitten', 'Knippen', 'Scheren', 'Effileren', 'Ontwollen', 'Plukken en strippen'];

// Letterlijk van Google (stand 3 oktober 2026), ingekort met "…" waar aangegeven.
export const reviews = [
  { naam: 'Hester S.', tekst: 'Zo blij dat we Esther hebben gevonden om onze hond Saar, een labradoodle, te trimmen. Esther is super met honden. Door haar achtergrond als gedragstherapeut en puppycoach zijn alle honden snel op hun gemak. …' },
  { naam: 'Dann A.', tekst: 'Superlief voor de Hond. Vakkundig en staat altijd klaar als je d’r nodig hebt. Ze heeft het niet voor niks altijd druk...erg tevreden....Pip ook!' },
  { naam: 'Queen B.', tekst: 'Esther heeft een behoorlijke jas uit gedaan bij de kleinste van ons gezin. Hij is niet de makkelijkste maar het is Esther gelukt.' },
  { naam: 'mm vs', tekst: 'Als je bij iemand je hond kan achter laten om mooi te laten maken is het wel bij Esther! Ze is lief , geduldig, secuur in haar werk,en erg klantvriendelijk !' },
  { naam: 'Vera K.', tekst: 'Vriendelijk en goede service! Luistert goed naar je wensen.' },
  { naam: 'Niels T.', tekst: 'Beste trimsalon voor de trouwe viervoeter in de hele Krimpenerwaard !' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waAfspraak = waMet('Hoi Esther, ik wil graag een afspraak maken.');
