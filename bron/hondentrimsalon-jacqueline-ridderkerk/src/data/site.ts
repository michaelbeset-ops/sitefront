// Bronnen (bekeken 2 oktober 2026):
// - Huidige "website": subpagina op de site van Dierenspeciaalzaak Henk van Os (http://www.vanosbird.nl/file/1/116/trimsalon.html, © 2010):
//   "Hondentrimsalon Jacqueline is al jarenlang een begrip in Ridderkerk en ver daarbuiten. Voor de complete vachtverzorging van
//   Uw hond of kat bent u bij Jacqueline op het juiste adres. Jacqueline is rijksgediplomeerd en lid van ABHB."
//   Adres Amaliastraat 28 Ridderkerk, e-mail hondentrimsalonjacqueline@gmail.com (vaste lijn 0180-414787 vervangen door de 06 van Google).
// - Google-bedrijfsprofiel: Dierentrimmer, Amaliastraat 28, 2983 EA Ridderkerk, 06 13455995, 5,0 uit 24 reviews (alle 24 vijf sterren),
//   open ma, di, do, vr, za 08:30-17:00, wo en zo gesloten. Recente reviews (5 en 11 maanden geleden): zaak actief.
// - KvK 24264312: Cylex (Hondentrimsalon Jacqueline, vestiging 000001809733), niet bij KvK zelf nagekeken.
// Reviewcitaten: letterlijk van Google (scratchpad b23/jacq/reviews.json), alleen ingekort met "…"; emoji's weggelaten.
export const site = {
  naam: 'Hondentrimsalon Jacqueline',
  straat: 'Amaliastraat 28',
  postcode: '2983 EA',
  plaats: 'Ridderkerk',
  tel: '06 13 45 59 95',
  telHref: 'tel:+31613455995',
  wa: 'https://wa.me/31613455995',
  mail: 'hondentrimsalonjacqueline@gmail.com',
  kvk: '24264312',
  google: '5,0',
  googleAantal: 24,
  googleUrl: 'https://www.google.com/maps/search/?api=1&query=Hondentrimsalon+Jacqueline+Amaliastraat+28+Ridderkerk',
  maps: 'https://www.google.com/maps/dir/?api=1&destination=Hondentrimsalon+Jacqueline+Amaliastraat+28+Ridderkerk',
  themeColor: '#16201d',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Openingstijden, index = Date.getDay() (0 = zondag). Tijden in minuten na middernacht.
const dag = { open: 8 * 60 + 30, dicht: 17 * 60 };
export const tijden: { dag: string; kort: string; open?: number; dicht?: number }[] = [
  { dag: 'zondag', kort: 'Zo' },
  { dag: 'maandag', kort: 'Ma', ...dag },
  { dag: 'dinsdag', kort: 'Di', ...dag },
  { dag: 'woensdag', kort: 'Wo' },
  { dag: 'donderdag', kort: 'Do', ...dag },
  { dag: 'vrijdag', kort: 'Vr', ...dag },
  { dag: 'zaterdag', kort: 'Za', ...dag },
];
export const week = [1, 2, 3, 4, 5, 6, 0].map((i) => ({ i, ...tijden[i] }));
export const uur = (m: number) => `${Math.floor(m / 60)}.${String(m % 60).padStart(2, '0')}`;

// Letterlijke Google-reviews, ingekort met "…". Naam = voornaam + initiaal.
export const reviews = [
  { naam: 'Nel V.', wanneer: '4 jaar geleden', tekst: "Super honden trimster. Trimt m'n honden al 35 jaar en altijd goed. En vooral heel lief voor ze" },
  { naam: 'Monique v.d. P.', wanneer: '5 maanden geleden', tekst: 'Supergoede klantvriendelijkheid. Harde snelle correcte werker. Zeer sociaal en nette prijs. Eigenlijk uniek. Ik ben een hele blije klant' },
  { naam: 'Cpj H.', wanneer: '11 maanden geleden', tekst: 'Vertrouwd, goed en liefdevol was de was/ knipbeurt voor de hond.' },
  { naam: 'Sven T.', wanneer: '4 jaar geleden', tekst: 'Bedankt voor jullie hele fijne vriendelijke service!! Blij hondje (Mylo) …' },
  { naam: 'Carola B.', wanneer: '6 jaar geleden', tekst: 'Ik kom al jaren, met volle tevredenheid, bij Hondentrimsalon …' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent('Hallo Jacqueline, ' + tekst)}`;
