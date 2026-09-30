// Feiten uit het Google-bedrijfsprofiel van Madame Marie (opgehaald 30-09-2026): adres, 06-nummer, categorie Koffiebar,
// 4,8 uit 315 reviews, openingstijden do t/m zo 11:00-17:00 (ma, di, wo gesloten). Geen eigen website.
// "Wat gasten noemen" vat terugkerende thema's uit de reviews samen (geen citaten, geen namen).
export const site = {
  naam: 'Madame Marie',
  soort: 'Koffiebar',
  straat: 'Kloksteeg 2',
  postcode: '2311 SL',
  plaats: 'Leiden',
  tel: '06 38 61 95 68',
  telHref: 'tel:+31638619568',
  wa: 'https://wa.me/31638619568',
  maps: 'https://www.google.com/maps/search/?api=1&query=Madame+Marie+Kloksteeg+2+Leiden',
  google: { score: '4,8', aantal: 315 },
  themeColor: '#2b1e17',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const wa = `<svg class="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"/></svg>`;
export const telIcoon = `<svg class="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z"/></svg>`;
