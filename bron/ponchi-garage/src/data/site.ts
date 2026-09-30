// Feiten uit het Google-bedrijfsprofiel van Ponchi Garage (bekeken 30-09-2026): naam, adres, 06-nummer,
// openingstijden, 4,8 uit 63 reviews en de samengevatte reviewpunten. Het bedrijf heeft nog geen website.
// Niet bekend en dus niet ingevuld: e-mail, KvK, prijzen, merken, garanties, erkenningen, naam eigenaar.
export const site = {
  naam: 'Ponchi Garage',
  straat: 'Daltonstraat 14',
  postcode: '3316 GD',
  plaats: 'Dordrecht',
  tel: '06 18 31 44 49',
  telHref: 'tel:+31618314449',
  whatsapp: 'https://wa.me/31618314449',
  maps: 'https://www.google.com/maps/search/?api=1&query=Ponchi+Garage+Daltonstraat+14+3316+GD+Dordrecht',
  google: '4,8',
  reviews: 63,
  themeColor: '#0e0f12',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

// Openingstijden volgens Google. Index 0 = zondag (zoals Date.getDay()).
export const tijden = [
  { dag: 'Maandag', open: true, tijd: '09.00 - 17.00' },
  { dag: 'Dinsdag', open: true, tijd: '09.00 - 17.00' },
  { dag: 'Woensdag', open: true, tijd: '09.00 - 17.00' },
  { dag: 'Donderdag', open: true, tijd: '09.00 - 17.00' },
  { dag: 'Vrijdag', open: true, tijd: '09.00 - 17.00' },
  { dag: 'Zaterdag', open: false, tijd: 'Gesloten' },
  { dag: 'Zondag', open: false, tijd: 'Gesloten' },
];

export const wa = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"/></svg>`;
export const telIcoon = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z"/></svg>`;
