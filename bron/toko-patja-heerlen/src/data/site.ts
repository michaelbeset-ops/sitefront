// Feiten uit het Google-bedrijfsprofiel van Toko Patja (bekeken 01-10-2026): Indonesisch restaurant, Wilhelminaplein 5,
// 6411 KV Heerlen, 06 42 34 58 11, 4,6 uit 501 reviews, wo t/m za 12:00-20:00, zo 14:00-20:00, ma en di gesloten.
// tokopatja.nl: e-mail toko.heerlen@gmail.com; "De smaak van Indonesië in het hart van Heerlen", "de gezelligste Toko van
// Limburg", circa 40 traditionele gerechten per dag, rendang, sambals, streetfood, catering (verjaardag, bruiloft, jubileum;
// buffet met rendang en sate; kleine groepen tot grote gezelschappen in heel Limburg). Bezorgen ligt stil (personeelstekort).
// Naam: Max PATiwael en Christie JAnssen. Uit reviews: rijsttafel, nasi, tjendol, rendang, terras op het plein.
export const site = {
  naam: 'Toko Patja',
  straat: 'Wilhelminaplein 5',
  postcode: '6411 KV',
  plaats: 'Heerlen',
  tel: '06 42 34 58 11',
  telHref: 'tel:+31642345811',
  wa: 'https://wa.me/31642345811',
  mail: 'toko.heerlen@gmail.com',
  maps: 'https://www.google.com/maps/search/?api=1&query=Toko+Patja+Wilhelminaplein+5+Heerlen',
  google: { score: '4,6', aantal: 501 },
  themeColor: '#26282c',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const wa = `<svg class="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"/></svg>`;

/** WhatsApp-link met een kort, vooraf ingevuld bericht. */
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent('Hallo Toko Patja, ' + tekst)}`;
export const berichten = {
  afhalen: 'ik wil graag iets bestellen om af te halen. Rond ... uur: ',
  vitrine: 'wat staat er vandaag in de vitrine?',
  catering: 'ik wil graag catering aanvragen. Datum: ... Aantal gasten: ... Plaats: ...',
  reserveren: 'ik wil graag een tafel reserveren. Datum: ... Tijd: ... Aantal personen: ...',
};

// Openingstijden (Google): index = weekdag (0 = zondag). null = gesloten.
export const TIJDEN: ([number, number] | null)[] = [[14, 20], null, null, [12, 20], [12, 20], [12, 20], [12, 20]];
export const DAGEN = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
