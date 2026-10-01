// Feiten: eigen site florianzeilmakerij.nl (alle pagina's bekeken 01-10-2026) en Google-bedrijfsprofiel (via content/b20/ALLE.md).
// Site: "Dé zeilmakerij van Zeeland", "Voor al uw bootkappen, afdekzeilen, bimini tops, en reparaties van tenten.",
// producten (afdekzeilen, biminitop, bekleding, bootkappen/cabrioletkappen, hoezen, huiken, kussens, lazy bags, rolfokhoezen,
// sprayhoods, stuurwielconsoles, verandazeilen, wintertenten), diensten (reparaties, zeilwasserij), "vaak in de haven aan het werk",
// bellen gaat sneller dan mailen, mail s.adiela27@hotmail.com, KvK 53009401.
// Google: Dr. A.F. Philipsstraat 13c, 4462 EZ Goes (site zegt 4462 EW), 06 36 32 34 94, ma-vr 09:00-18:00
// (site zegt ma-vr 08-17 en zaterdag op belafspraak; nagevraagd bij oplevering).
export const site = {
  naam: 'Florian Zeilmakerij',
  straat: 'Dr. A.F. Philipsstraat 13c',
  postcode: '4462 EZ',
  plaats: 'Goes',
  tel: '06 36 32 34 94',
  telHref: 'tel:+31636323494',
  wa: 'https://wa.me/31636323494',
  mail: 's.adiela27@hotmail.com',
  kvk: '53009401',
  maps: 'https://www.google.com/maps/search/?api=1&query=Florian+Zeilmakerij+Dr.+A.F.+Philipsstraat+13c+Goes',
  themeColor: '#f1f3f4',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const wa = `<svg class="h-[1.15em] w-[1.15em] shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"/></svg>`;
/** WhatsApp-link met een vooraf ingevuld bericht. */
export const waMet = (tekst = '') => `${site.wa}?text=${encodeURIComponent('Hallo, ' + tekst)}`;
/** Offerte per mail. */
export const mailOfferte = `mailto:${site.mail}?subject=${encodeURIComponent('Offerte aanvragen')}`;
