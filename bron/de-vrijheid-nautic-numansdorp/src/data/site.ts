// Feiten van devrijheidnautic.nl (home, route.htm, projecten.htm; bekeken 01-10-2026) en het Google-bedrijfsprofiel
// (via scratchpad/content/b20/ALLE.md): Zeilmaker, Havenkade 6, 3281 LS Numansdorp, 06 50 49 11 64, 5,0 uit 3 reviews.
// Site: "afdekzeilen, winter- of dektenten, huiken, alles voor de bruine vloot en natuurlijk allerhande zeilreparaties",
// "eersteklas maatwerk met behulp van hoogwaardige materialen", Cees Sorber, info@devrijheidnautic.nl,
// "werkplaats in Numansdorp (op afspraak)", "geen vaste openingstijden, bel of mail gerust voor een afspraak".
// Reviews (samengevat, niet geciteerd): de zaak zit in een karakteristiek huis aan de haven, als terug in de tijd.
export const site = {
  naam: 'De Vrijheid Nautic Zeilmakerij',
  kort: 'De Vrijheid Nautic',
  wie: 'Cees Sorber',
  straat: 'Havenkade 6',
  postcode: '3281 LS',
  plaats: 'Numansdorp',
  tel: '06 50 49 11 64',
  telHref: 'tel:+31650491164',
  wa: 'https://wa.me/31650491164',
  mail: 'info@devrijheidnautic.nl',
  maps: 'https://www.google.com/maps/search/?api=1&query=De+Vrijheid+Nautic+Havenkade+6+Numansdorp',
  google: { score: '5,0', aantal: 3 },
  themeColor: '#7a3120',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const wa = `<svg class="h-[1.15em] w-[1.15em] shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"/></svg>`;
/** WhatsApp-link naar Cees met een kort, vooraf ingevuld bericht. */
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent('Hallo Cees, ' + tekst)}`;
export const mailMet = (onderwerp: string) => `mailto:${site.mail}?subject=${encodeURIComponent(onderwerp)}`;
