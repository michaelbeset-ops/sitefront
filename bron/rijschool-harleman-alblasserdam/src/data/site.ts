// Feiten uit het dagbestand van 23-11-2026, met bron.
// autorijschooltarieven.nl en itheorie.nl: adres Noordsterstraat 26, 2951 AH Alblasserdam.
// autorijschooltarieven.nl, rijschool-tips.nl, itheorie.nl: telefoon 06 51 20 93 35.
// theorio.nl: rijlessen auto, ook automaat. 57,1 procent geslaagd bij het eerste examen,
//   21 eerste examens tussen 1-7-2025 en 30-6-2026.
// rijscholen-gids.nl en itheorie.nl: eenmanszaak, opgericht 18-08-2017, KvK 69438064.
// Geen lesprijzen, naam eigenaar, e-mail, openingstijden of reviews bekend. Die staan er dus niet op.
export const site = {
  naam: 'Rijschool Harleman',
  straat: 'Noordsterstraat 26',
  postcode: '2951 AH',
  plaats: 'Alblasserdam',
  tel: '06 51 20 93 35',
  telHref: 'tel:+31651209335',
  wa: 'https://wa.me/31651209335',
  kvk: '69438064',
  sinds: 2017,
  maps: 'https://www.google.com/maps/dir/?api=1&destination=Noordsterstraat+26+2951+AH+Alblasserdam',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

export const slagen = { procent: '57,1', examens: 21, periode: '1 juli 2025 tot en met 30 juni 2026' };

export const url = (pad = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${pad}`;

// Sfeerbeelden van Unsplash. Nooit gepresenteerd als eigen lesauto of eigen werk.
const u = (id: string, w: number) => `https://images.unsplash.com/${id}?fm=jpg&q=60&w=${w}&auto=format&fit=crop&ixlib=rb-4.1.0`;
export const fotos = {
// Controle 23-11-2026: de auto-foto (photo-1523564146079) en de stuurfoto (photo-1449965408869)
// zijn weggehaald, een kenteken of merklogo was daarop niet uit te sluiten. Hero is nu de lege polderweg.
  hero: (w = 1600) => u('photo-1590222336136-cde8d716db71', w),
  pook: (w = 1000) => u('photo-1528307869100-e1bad0b9a1c0', w),
};
