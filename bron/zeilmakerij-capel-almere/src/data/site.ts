// Feiten van hun eigen site zeilmakerijcapel.nl (bekeken 01-10-2026) en het Google-bedrijfsprofiel:
// Zeilmakerij Capel Almere (zeilmakerij P.J. Capel), De Steiger 7c, 1351 AA Almere, 036 534 8812,
// zeilmakerijcapel@hotmail.com, ma-vr 09:00-12:00 en 13:30-16:00, za/zo gesloten (Google), 4,6 uit 21 reviews.
export const site = {
  naam: 'Zeilmakerij Capel',
  volledig: 'Zeilmakerij Capel Almere',
  straat: 'De Steiger 7c',
  postcode: '1351 AA',
  plaats: 'Almere',
  tel: '036 534 88 12',
  telHref: 'tel:+31365348812',
  mail: 'zeilmakerijcapel@hotmail.com',
  maps: 'https://www.google.com/maps/search/?api=1&query=Zeilmakerij+Capel+De+Steiger+7c+Almere',
  google: { score: '4,6', aantal: 21 },
  themeColor: '#eef0ee',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

/** Mail-link met onderwerp en een kort begin, zodat de klant alleen nog foto's en maten hoeft toe te voegen. */
export const mailMet = (onderwerp: string, tekst: string) =>
  `mailto:${site.mail}?subject=${encodeURIComponent(onderwerp)}&body=${encodeURIComponent(tekst)}`;

export const tijden: [string, string][] = [
  ['ma t/m vr', '9.00 - 12.00 en 13.30 - 16.00'],
  ['za en zo', 'gesloten'],
];
