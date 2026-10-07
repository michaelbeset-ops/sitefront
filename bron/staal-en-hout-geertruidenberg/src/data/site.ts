// Feiten (bekeken 7 oktober 2026), ruwe bronnen in ../../bron/bronnen.txt:
// - Google-bedrijfsprofiel "Staal en Hout B.V.": aannemer, Geertruidenberg, 06 51841805. Geen website, geen eigen foto's.
//   Adres is een woning in een woonstraat: op de site alleen de plaats.
// - KvK 18082573, hoofdactiviteit "Klus- en onderhoudsbedrijf, advisering, alsmede de detailhandel in bouwmaterialen".
// - LinkedIn-post Jan Konijnenberg (Lodewikus), 1 april 2026: Henk Zijlmans (Staal & Hout) maakte onder hun kraanbaan
//   een ponton voor Jachthaven Biesbosch; betonblok van 95 ton, via het water naar de plek gesleept.
export const site = {
  naam: 'Staal en Hout B.V.',
  kort: 'Staal en Hout',
  contact: 'Henk Zijlmans',
  voornaam: 'Henk',
  plaats: 'Geertruidenberg',
  tel: '06 51 84 18 05',
  telHref: 'tel:+31651841805',
  wa: 'https://wa.me/31651841805',
  kvk: '18082573',
  bronPost: 'https://nl.linkedin.com/posts/jankonijnenberg_afgelopen-weken-heeft-henk-zijlmans-staal-activity-7445146831891771393-S_lO',
  themeColor: '#14191b',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Henk, ik heb een vraag over een klus in staal of hout.');
