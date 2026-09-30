// Feiten uit het Google-bedrijfsprofiel van Restaurant By ús thús (bekeken 30-09-2026): naam, adres, 06-nummer,
// openingstijden (vr/za/zo 17.00-21.00, ma t/m do gesloten), 4,7 uit 225 reviews en samengevatte reviewpunten
// (Bennie en Jacqueline, Jacqueline kookt, huiskamersfeer, terras, koffie en gebak, snackbar-afdeling).
// Het restaurant heeft nog geen website. Niet bekend en dus niet ingevuld: menukaart, prijzen, e-mail, KvK.
export const site = {
  naam: 'Restaurant By ús thús',
  kort: 'By ús thús',
  straat: 'Hagenadyk 4',
  postcode: '8614 AB',
  plaats: 'Oudega',
  tel: '06 27 31 61 06',
  telHref: 'tel:+31627316106',
  wa: '31627316106',
  whatsapp: 'https://wa.me/31627316106',
  maps: 'https://www.google.com/maps/search/?api=1&query=Restaurant+By+%C3%BAs+th%C3%BAs+Hagenadyk+4+Oudega',
  google: { score: '4,7', aantal: 225 },
  themeColor: '#1c1713',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

// Index 0 = zondag (zoals Date.getDay()). Open vrijdag, zaterdag en zondag van 17.00 tot 21.00.
export const OPEN_DAGEN = [5, 6, 0];
export const tijden = [
  { dag: 'Maandag', wd: 1, tijd: 'Gesloten' },
  { dag: 'Dinsdag', wd: 2, tijd: 'Gesloten' },
  { dag: 'Woensdag', wd: 3, tijd: 'Gesloten' },
  { dag: 'Donderdag', wd: 4, tijd: 'Gesloten' },
  { dag: 'Vrijdag', wd: 5, tijd: '17.00 - 21.00' },
  { dag: 'Zaterdag', wd: 6, tijd: '17.00 - 21.00' },
  { dag: 'Zondag', wd: 0, tijd: '17.00 - 21.00' },
];

// Thema's die Google uit de reviews haalt, met aantal vermeldingen.
export const themas = [
  { woord: 'Gastvrij', n: 12 },
  { woord: 'Eigenaar', n: 10 },
  { woord: 'Personeel', n: 6 },
  { woord: 'Keuken', n: 6 },
  { woord: 'Kaart', n: 5 },
  { woord: 'Dessert', n: 5 },
  { woord: 'Spareribs', n: 4 },
  { woord: 'IJsjes', n: 3 },
  { woord: 'Terras', n: 3 },
  { woord: 'Uiensoep', n: 2 },
];

export const wa = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-5 w-5 shrink-0"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"/></svg>`;
export const telIcoon = `<svg aria-hidden="true" viewBox="0 0 24 24" class="h-4 w-4 shrink-0" fill="currentColor"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"/></svg>`;
