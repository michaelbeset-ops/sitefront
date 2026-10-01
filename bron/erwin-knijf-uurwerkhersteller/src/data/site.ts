// Feiten uit het Google-bedrijfsprofiel (via content/b20/ALLE.md, bekeken 01-10-2026): Uurwerkhersteller Erwin Knijf,
// Ingenieur Leemansstraat 39, 2912 CD Nieuwerkerk aan den IJssel, 06 18 23 05 08, reparatieservice voor klokken (en horloges),
// ma-vr 10:00-18:00, 4,0 uit 5 reviews. Geen website en geen eigen foto's.
// Uit reviews (samengevat): doet wat hij belooft (terugbellen, prijsopgave, uurwerk terugbrengen); horlogepinnetje in 2 minuten
// gerepareerd, behulpzaam.
export const site = {
  naam: 'Uurwerkhersteller Erwin Knijf',
  kort: 'Erwin Knijf',
  straat: 'Ingenieur Leemansstraat 39',
  postcode: '2912 CD',
  plaats: 'Nieuwerkerk aan den IJssel',
  tel: '06 18 23 05 08',
  telHref: 'tel:+31618230508',
  wa: 'https://wa.me/31618230508',
  maps: 'https://www.google.com/maps/search/?api=1&query=Uurwerkhersteller+Erwin+Knijf+Ingenieur+Leemansstraat+39+Nieuwerkerk+aan+den+IJssel',
  google: { score: '4,0', aantal: 5 },
  themeColor: '#f6f6f3',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const wa = `<svg class="h-[1.1em] w-[1.1em] shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"/></svg>`;
/** WhatsApp-link met een vooraf ingevuld bericht. */
export const waMet = (tekst = '') => `${site.wa}?text=${encodeURIComponent('Hallo Erwin, ' + tekst)}`;
