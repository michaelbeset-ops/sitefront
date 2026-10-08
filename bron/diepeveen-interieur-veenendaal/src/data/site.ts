// Feiten (bekeken 8 oktober 2026), ruwe bronnen in ../../bron:
// - Eigen site diepeveeninterieur.nl (welkom, interieurbouw, werkwijze, portfolio + 17 projectpagina's, offerte, contact, privacy).
//   Telefoon 06 10 019 019, info@diepeveeninterieur.nl, KvK 70773084. Privacyverklaring: "dhr. Diepeveen".
// - Eigen LinkedIn-bedrijfspagina: medewerker Patrick Diepeveen (1 medewerker), specialismen o.a. technisch tekenaar (Autocad 2D/3D).
// - Google-bedrijfsprofiel: 5,0 uit 9 reviews, Meubelmakerij, ma t/m vr 07:30-17:00, za en zo gesloten.
// - Adres Achterkerkstraat 71 ligt in een woonstraat: op de site alleen de plaats.
export const site = {
  naam: 'Diepeveen Interieur',
  eigenaar: 'Patrick Diepeveen',
  voornaam: 'Patrick',
  plaats: 'Veenendaal',
  tel: '06 10 01 90 19',
  telHref: 'tel:+31610019019',
  wa: 'https://wa.me/31610019019',
  mail: 'info@diepeveeninterieur.nl',
  kvk: '70773084',
  facebook: 'https://www.facebook.com/diepeveeninterieur/',
  linkedin: 'https://www.linkedin.com/company/diepeveeninterieur/',
  google: { score: '5,0', aantal: 9, url: 'https://www.google.com/maps?cid=4351659261131509554' },
  themeColor: '#262924',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Google: maandag t/m vrijdag 07:30-17:00 (0 = zondag).
export const tijden: [string, string | null][] = [
  ['Zondag', null], ['Maandag', '07:30-17:00'], ['Dinsdag', '07:30-17:00'], ['Woensdag', '07:30-17:00'],
  ['Donderdag', '07:30-17:00'], ['Vrijdag', '07:30-17:00'], ['Zaterdag', null],
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Patrick, ik heb een vraag over maatwerk.');
