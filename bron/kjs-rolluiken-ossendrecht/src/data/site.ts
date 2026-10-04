// Feiten: kjsrolluiken.nl (home, rolluiken, garagedeuren, veranda's, zonwering, contact; bekeken 4 oktober 2026),
// Google-bedrijfsprofiel "KJS Rolluiken & Zonwering" (4,6 uit 20 reviews, 17 x 5 sterren, geen openingstijden vermeld),
// Facebook facebook.com/kjsrolluiken (453 volgers, "100% aanbevolen (9 beoordelingen)", laatste post 11 september 2026).
// Eigenaar: Kurt (zo aangesproken in twee Google-reviews). Geen KvK-nummer gevonden.
export const site = {
  naam: 'KJS Rolluiken & Zonwering',
  kort: 'KJS',
  straat: 'Hageland 72',
  postcode: '4641 SX',
  plaats: 'Ossendrecht',
  tel: '06 53252163',
  telHref: 'tel:+31653252163',
  mail: 'info@kjsrolluiken.nl',
  wa: 'https://wa.me/31653252163',
  facebook: 'https://www.facebook.com/kjsrolluiken',
  instagram: 'https://www.instagram.com/kjsrolluiken/',
  maps: 'https://www.google.com/maps/search/?api=1&query=KJS+Rolluiken+%26+Zonwering+Hageland+72+Ossendrecht',
  reviews: 'https://www.google.com/maps/search/?api=1&query=KJS+Rolluiken+%26+Zonwering+Ossendrecht',
  google: { score: '4,6', aantal: 20, vijf: 17 },
  themeColor: '#15181b',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Producten zoals op hun eigen site en in hun footer ("Vraag een brochure aan").
export const chips = ['Rolluiken', 'Garagedeuren', 'Zonneschermen', 'Screens', 'Uitvalschermen', 'Markiezen', "Veranda's", 'Terrasoverkappingen', 'Carports', 'Binnenzonwering'];

// Merken die ze op hun site noemen (rolluiken: Roma, Verano, Heroal; garagedeuren: Novoferm, Hörmann; logo Weinor op de homepage).
export const merken = ['Roma', 'Verano', 'Heroal', 'Novoferm', 'Hörmann', 'Weinor'];

// Letterlijk van Google (stand 4 oktober 2026). Alleen de positieve reviews; voornaam + initiaal.
export const reviews = [
  { naam: 'Kees J.', wanneer: '3 maanden geleden', tekst: 'Het garage rolluik, geleverd en geplaatst door KJS, ging niet meer volledig open. Ondanks dat ze het heel druk hadden toch tussendoor ff langsgekomen. Besturingskastje werkte niet goed meer. Alles opnieuw ingelezen, ook de afstandsbediening. Binnen no time alles gefixt. De rekening??. Service vd zaak volgens Kurt !!. Echt goede service dus, hartstikke bedankt.👌👍' },
  { naam: 'Pepijn V.', wanneer: '6 maanden geleden', tekst: 'Top service ! Goeie vakman die uitstekend werk aflevert tegen een correcte prijs. Ik kan dit bedrijf alleen maar aanraden. Wij zijn meer dan tevreden met onze Solar rolluiken.' },
];
// Uitgelichte fragmenten uit het Google-reviewoverzicht (naam niet getoond door Google).
export const fragmenten = [
  'Duidelijke uitleg, mooie offerte en hele goede installatie en service.',
  'Ik ben ontzettend blij met het resultaat en zou dit bedrijf zeker aanraden!',
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waOfferte = waMet('Hallo Kurt, ik wil graag een vrijblijvende offerte. Het gaat om: ');
