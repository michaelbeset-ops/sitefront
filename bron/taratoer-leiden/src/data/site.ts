// Feiten uitsluitend uit het Google-bedrijfsprofiel van Taratoer (content/b17/ALLE.md, sectie taratoer-leiden, 30-09-2026):
// adres, 06-nummer, Instagram, categorie Libanees restaurant, 5,0 uit 124 reviews, opent om 17:00 (dagen onbekend),
// en de thema's uit de reviews. Geen menukaart, prijzen of openingsdagen bekend.
export const site = {
  naam: 'Taratoer',
  straat: 'Van der Waalsstraat 3',
  postcode: '2313 VB',
  plaats: 'Leiden',
  tel: '06 28 83 47 95',
  telHref: 'tel:+31628834795',
  whatsapp: 'https://wa.me/31628834795',
  waNummer: '31628834795',
  instagram: 'https://www.instagram.com/taratoerleiden/',
  instaNaam: '@taratoerleiden',
  maps: 'https://www.google.com/maps/search/?api=1&query=Taratoer+Van+der+Waalsstraat+3+Leiden',
  google: { score: '5,0', aantal: 124 },
  themeColor: '#0f2a22',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

export const waIcoon = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-5 w-5 shrink-0"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"/></svg>`;
export const telIcoon = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-4 w-4 shrink-0"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"/></svg>`;
