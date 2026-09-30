// Feiten uit het Google-bedrijfsprofiel van Bloem (scratchpad content/b17/ALLE.md, sectie bloem-den-bosch, 01-10-2026):
// adres, 06-nummer, Instagram @bloemdenbosch, Google 4,7 uit 247, categorie koffiebar / theehuis, kenmerken,
// openingstijden wo t/m zo 10:00-16:00, en de thema's uit de reviews. Geen menukaart of prijzen bekend.
export const site = {
  naam: 'Bloem',
  kort: 'Bloem',
  straat: 'Prins Hendrikpark 1',
  postcode: '5212 AZ',
  plaats: "'s-Hertogenbosch",
  tel: '06 27 54 12 51',
  telHref: 'tel:+31627541251',
  whatsapp: 'https://wa.me/31627541251',
  instagram: 'https://www.instagram.com/bloemdenbosch/',
  insta: '@bloemdenbosch',
  maps: "https://www.google.com/maps/search/?api=1&query=Bloem+Prins+Hendrikpark+1+'s-Hertogenbosch",
  google: { score: '4,7', aantal: 247 },
  themeColor: '#2b1a2a',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

// Woensdag t/m zondag 10:00-16:00, maandag en dinsdag gesloten (0 = zondag).
export const OPEN_DAGEN = [3, 4, 5, 6, 0];
export const dagen = [
  { dag: 'Maandag', wd: 1, tijd: 'Gesloten' },
  { dag: 'Dinsdag', wd: 2, tijd: 'Gesloten' },
  { dag: 'Woensdag', wd: 3, tijd: '10.00 - 16.00' },
  { dag: 'Donderdag', wd: 4, tijd: '10.00 - 16.00' },
  { dag: 'Vrijdag', wd: 5, tijd: '10.00 - 16.00' },
  { dag: 'Zaterdag', wd: 6, tijd: '10.00 - 16.00' },
  { dag: 'Zondag', wd: 0, tijd: '10.00 - 16.00' },
];

export const waIcoon = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"/></svg>`;
export const telIcoon = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"/></svg>`;
export const instaIcoon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none"/></svg>`;
