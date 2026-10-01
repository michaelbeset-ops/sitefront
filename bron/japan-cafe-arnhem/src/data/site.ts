// Feiten uit het Google-bedrijfsprofiel van JAPAN CAFE (bekeken 01-10-2026, scratchpad/content/b18/ALLE.md): adres,
// 06-nummer, Instagram @japan_cafe_nl, categorie Japans restaurant, 4,3 uit 51 reviews, open do t/m ma 12:00-18:00
// (di en wo gesloten), eigen omschrijving ("Authentiek Japans café & restaurant. Huisgemaakte takoyaki. Onigiri, mochi en
// Japanse dagelijkse specialiteiten. Eat-in & take-away. Halal-vriendelijke opties."). Reserveren via Zenchef (link
// nog aanleveren). Gerechten in de kaart komen uit de reviews. Geen eigen website.
export const site = {
  naam: 'JAPAN CAFE',
  straat: 'Nieuwstraat 53',
  postcode: '6811 HV',
  plaats: 'Arnhem',
  tel: '06 41 42 02 85',
  telHref: 'tel:+31641420285',
  wa: 'https://wa.me/31641420285',
  instagram: 'https://www.instagram.com/japan_cafe_nl/',
  maps: 'https://www.google.com/maps/search/?api=1&query=JAPAN+CAFE+Nieuwstraat+53+Arnhem',
  google: { score: '4,3', aantal: 51 },
  themeColor: '#e5e5e1',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const wa = `<svg class="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"/></svg>`;

/** Begroeting voor alle WhatsApp-berichten. */
export const groet = 'Hallo JAPAN CAFE, ';
/** WhatsApp-link met een vooraf ingevuld bericht. */
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(groet + tekst)}`;
