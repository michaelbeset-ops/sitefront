// Feiten: Google-bedrijfsprofiel van Pat's Tosti Bar (01-10-2026): Saroleastraat 66, 6411 LW Heerlen, 06 42 44 77 95,
// categorie "Toast restaurant", 4,9 uit 217 reviews, di t/m za 11:00-16:00 (zo en ma gesloten), veganistische opties, kindermenu.
// Heerlen Mijn Stad: e-mail, eigenaar Patrick Byrman ("Pat"), geopend in 2020, afhalen of binnen eten, tosti gehaktbal,
// vettige herder, caprese, kip pesto, nieuwe tosticreaties, "een klein museum" met werk van lokale kunstenaars.
// Instagram @pats_tostibar. Geen eigen website.
export const site = {
  naam: "Pat's Tosti Bar",
  straat: 'Saroleastraat 66',
  postcode: '6411 LW',
  plaats: 'Heerlen',
  tel: '06 42 44 77 95',
  telHref: 'tel:+31642447795',
  mail: 'patstostibar@gmail.com',
  wa: 'https://wa.me/31642447795',
  insta: 'https://www.instagram.com/pats_tostibar/',
  maps: "https://www.google.com/maps/search/?api=1&query=Pat's+Tosti+Bar+Saroleastraat+66+Heerlen",
  google: { score: '4,9', aantal: 217 },
  themeColor: '#f3f3f0',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const wa = `<svg class="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"/></svg>`;

/** WhatsApp-link met een vooraf ingevuld bericht. */
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const bestel = (wat = 'een tosti') => waMet(`Hoi Pat, ik wil graag ${wat} bestellen om af te halen. Mijn naam: \nOphalen rond: `);
