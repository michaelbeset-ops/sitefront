// Feiten (bekeken 7 oktober 2026), ruwe bronnen in ../../bron:
// - afdekproducten.nl: home, wie-zijn-wij, afdekzeilen-besteladvies, afdekzeil-maat-berekenen, maatwerk, verzendmethoden-levertijd,
//   annuleren-retourneren, routebeschrijving-showroom, brandvertragend-afdekzeil (bron/web/*.txt).
// - Google-bedrijfsprofiel: 4,7 uit 59 reviews, Kerkeplaat 2F, 90, 3313 LC Dordrecht, 06 34090222 (bron/google-reviews.txt).
export const site = {
  naam: 'Afdekproducten.nl',
  bedrijf: 'Dielessen Multishop',
  kvk: '69436258',
  straat: 'Kerkeplaat 2F, unit 90',
  postcode: '3313 LC',
  plaats: 'Dordrecht',
  tel: '06 34 09 02 22',
  telHref: 'tel:+31634090222',
  wa: 'https://wa.me/31634090222',
  mail: 'info@afdekproducten.nl',
  maps: 'https://www.google.com/maps/search/?api=1&query=Afdekproducten.nl+Kerkeplaat+2F+Dordrecht',
  google: { score: '4,7', aantal: 59 },
  themeColor: '#07324b',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Echte webshop-URL's (allemaal gecontroleerd op status 200 met tools/links.mjs).
const W = 'https://www.afdekproducten.nl/';
export const shop = {
  home: W,
  pe: W + 'afdekzeilen/',
  pe75: W + 'afdekzeilen/afdekzeilen-75gr/',
  pe100: W + 'afdekzeilen/afdekzeilen-100gr/',
  pe150: W + 'afdekzeilen/afdekzeilen-150gr/',
  pe180: W + 'afdekzeilen/afdekzeilen-180gr/',
  pe250: W + 'afdekzeilen/afdekzeilen-250gr/',
  pvc: W + 'pvc-afdekzeilen/',
  pvc400: W + 'pvc-afdekzeilen-400gr/',
  pvc600: W + 'pvc-afdekzeilen-600gr/',
  pvc650: W + 'pvc-afdekzeilen/pvc-afdekzeilen-650gr/',
  maatwerk: W + 'maatwerk/',
  pvcMaat: W + 'maatwerk/pvc-afdekzeilen-op-maat/',
  transparantMaat: W + 'maatwerk/transparant-pvc-zeil-op-maat/',
  schaduwMaat: W + 'maatwerk/schaduwdoek-winddoek-185gr-op-maat/',
  fijnmazigMaat: W + 'maatwerk/fijnmazige-netten-op-maat/',
  maasMaat: W + 'maatwerk/maasnetten-40mm-op-maat/',
  aanhanger: W + 'aanhangwagennetten/',
  steiger: W + 'steigernetten/',
  bouwhekzeil: W + 'bouwhekzeilen/',
  bouwhekdoek: W + 'bouwhekdoeken/',
  containernet: W + 'fijnmazige-containernetten/',
  containerzeil: W + 'pvc-cargo-containerzeilen/',
  folie: W + 'afdekfolie-bouwfolie/',
  brand: W + 'brandvertragend-afdekzeil/',
  accessoires: W + 'accessoires/',
  spanrubbers: W + 'accessoires/spanrubbers-koorden/',
  spanbanden: W + 'accessoires/spanbanden/',
  besteladvies: W + 'afdekzeilen-besteladvies/',
  maatBerekenen: W + 'afdekzeil-maat-berekenen/',
  kleur: W + 'afdekzeil-kleur-kiezen/',
  verzending: W + 'verzendmethoden-levertijd/',
  retour: W + 'annuleren-retourneren/',
  route: W + 'routebeschrijving-showroom/',
  wie: W + 'wie-zijn-wij/',
  contact: W + 'contact/',
  reviews: W + 'klantenbeoordelingen/',
};

// Letterlijk van Google (5 sterren, stand 7 oktober 2026), ingekort met "…". Naam zoals op Google, achternaam als initiaal.
export const reviews = {
  groot: { naam: 'Jeroen v. R.', tekst: 'Binnen een week een op maat gemaakt zeil binnen gekregen, stevig en prachtig afgewerkt. Zeker voor deze prijs ga je het nergens anders zo krijgen.' },
  los: [
    { naam: 'Niek v. d. H.', tekst: 'Schaduwdoek 4 x 2 meter met extra ringen. Voldoet helemaal naar wat ik verwachtte, snel geleverd. Afwerking is netjes en strak, ringen zijn goed in de brede en degelijke zoom bevestigd.' },
    { naam: 'Patrick N.', tekst: 'Stevig materiaal en keurig op maat. In eerste instantie zat er een productiefout in de zeilen, maar na 1 mailtje direct vervangen. Erg netjes allemaal' },
    { naam: 'Anton M.', tekst: 'Overzichtelijke website. Ruime keuze. Snelle levering van kwalitatief product, uitstekend verpakt. … Ik kan en zal dit bedrijf zeker aanbevelen !' },
    { naam: 'Frits B.', tekst: 'Voor de tweede keer een groot zeil op maat besteld. Het zeil ziet er weer goed uit. Goed op maat en mooi afgewerkt.' },
  ],
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo, ik heb een vraag over een afdekzeil.');
