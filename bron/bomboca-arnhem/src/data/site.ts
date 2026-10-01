// Feiten uit het Google-bedrijfsprofiel van Bomboca (bekeken 01-10-2026): Koffiehuis, Eusebiusbuitensingel 10,
// 6828 HV Arnhem, 06 40 26 93 02, 4,6 uit 427 reviews, di t/m zo 10:00-17:00, maandag gesloten.
// Instagram @bombocakoffiebar: "Portugese huisgemaakte taartjes | ontbijt | lunch". Ligging: Spijkerkwartier, rand van het
// centrum (VVV Arnhem); terras met uitzicht op het park aan de singel. Pers: De Gelderlander 17-11-2025 "knus en kleurrijk".
// Uit reviews: pastel de nata, broodjes, tosti's, cappuccino, latte, galão, taartjes. Geen eigen website.
export const site = {
  naam: 'Bomboca',
  soort: 'Koffiebar',
  straat: 'Eusebiusbuitensingel 10',
  postcode: '6828 HV',
  plaats: 'Arnhem',
  tel: '06 40 26 93 02',
  telHref: 'tel:+31640269302',
  wa: 'https://wa.me/31640269302',
  instagram: 'https://www.instagram.com/bombocakoffiebar/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Bomboca+Eusebiusbuitensingel+10+Arnhem',
  google: { score: '4,6', aantal: 427 },
  themeColor: '#f4ddd8',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const wa = `<svg class="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"/></svg>`;

/** Begroeting in elk vooraf ingevuld WhatsApp-bericht. */
export const groet = 'Olá Bomboca, ';
/** WhatsApp-link met een vooraf ingevuld bericht. */
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(groet + tekst)}`;
