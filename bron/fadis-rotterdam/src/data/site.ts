// Feiten uit het Google-bedrijfsprofiel van Fadi's (bekeken 01-10-2026): Turks restaurant, Van der Takstraat 194,
// 3071 LM Rotterdam, 06 24 90 24 54, 4,7 uit 207 reviews, ma t/m vr 09:30-18:00, za 09:30-16:30, zo gesloten.
// Instagram @fadis_eten_en_drinken: "Eten & Drinken & lekkere koffie! ... al 15 jaar op het Noordereiland!" Eigenaresse Fadime.
// De Buik van Rotterdam: "het gezelligste Turkse lunchtentje van het Noordereiland. Probeer er vooral de couscoussalade."
// Oude bestelpagina (bestellenbijfadis.webflow.io): gerechten, catering "Fadi's aan huis", bestellen via WhatsApp, ophalen 11-14 uur.
export const site = {
  naam: "Fadi's Eten & Drinken",
  kort: "Fadi's",
  straat: 'Van der Takstraat 194',
  postcode: '3071 LM',
  plaats: 'Rotterdam',
  tel: '06 24 90 24 54',
  telHref: 'tel:+31624902454',
  wa: 'https://wa.me/31624902454',
  instagram: 'https://www.instagram.com/fadis_eten_en_drinken/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Fadi%27s+Van+der+Takstraat+194+Rotterdam',
  google: { score: '4,7', aantal: 207 },
  themeColor: '#f5f7f4',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const wa = `<svg class="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"/></svg>`;

/** Begroeting in elk vooraf ingevuld WhatsApp-bericht. */
export const groet = 'Hoi Fadime, ';
/** WhatsApp-link met een vooraf ingevuld bericht. */
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(groet + tekst)}`;

export const berichten = {
  lunch: 'ik wil graag een lunch bestellen om op te halen.\nOphalen om: \nMijn bestelling: ',
  catering: "ik wil graag iets vragen over Fadi's aan huis.\nDatum: \nAantal personen: \nGlutenvrij of vegetarisch nodig: ",
};
