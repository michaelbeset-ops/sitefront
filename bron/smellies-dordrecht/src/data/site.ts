// Feiten van smellies.nl (bekeken 01-10-2026): Over Smellies, Wat zijn Smellies, Contact, Bezorgen, categoriepagina's.
// Minnaertweg 103, 3328 HM Dordrecht, +31 (0)6 40 89 79 16, info@smellies.nl, KvK 87799871. Bezoek op afspraak,
// ma t/m do 09.00-17.00, vr/za/zo gesloten. Gestart in 2013. Groothandel: groothandelsmellies.nl (zakelijk account na goedkeuring).
// Google-bedrijfsprofiel: 5,0 uit 5, "Leverancier van geuren en aroma's".
export const site = {
  naam: 'Smellies',
  slogan: 'Scents & Happiness',
  straat: 'Minnaertweg 103',
  postcode: '3328 HM',
  plaats: 'Dordrecht',
  tel: '06 40 89 79 16',
  telHref: 'tel:+31640897916',
  wa: 'https://wa.me/31640897916',
  mail: 'info@smellies.nl',
  kvk: '87799871',
  winkel: 'https://www.smellies.nl',
  groothandel: 'https://www.groothandelsmellies.nl',
  instagram: 'https://www.instagram.com/smellies.nl/',
  facebook: 'https://www.facebook.com/smellies.nl/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Smellies+Minnaertweg+103+Dordrecht',
  themeColor: '#f7f4f8',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const shop = (p: string) => `${site.winkel}/${p}`;
export const wa = `<svg class="h-[1.1em] w-[1.1em] shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"/></svg>`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent('Hallo Smellies, ' + tekst)}`;
