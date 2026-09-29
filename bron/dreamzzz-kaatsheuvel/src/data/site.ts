// Feiten van dreamzzzkaatsheuvel.nl (Wayback, maart 2024: home, kamers, arrangementen, informatie, omgeving, over ons,
// reserveren, contact, zakelijk) en het Google-profiel (5,0 uit 94 reviews). De eigen site geeft nu een foutmelding.
// Prijzen van kamers en arrangementen (uit 2024) bewust NIET overgenomen.
export const site = {
  naam: 'DreamZzz Bed & Breakfast',
  kort: 'DreamZzz',
  straat: 'Horst 3',
  postcode: '5171 RA',
  plaats: 'Kaatsheuvel',
  tel: '06 518 370 76',
  telHref: 'tel:+31651837076',
  wa: 'https://wa.me/31651837076',
  mail: 'info@dreamzzzkaatsheuvel.nl',
  kvk: '75125757',
  btw: 'NL001739126B53',
  facebook: 'https://www.facebook.com/dreamzzzkaatsheuvel/',
  instagram: 'https://www.instagram.com/dreamzzzbbkaatsheuvel/',
  maps: 'https://www.google.com/maps/search/?api=1&query=DreamZzz+Bed+%26+Breakfast+Horst+3+Kaatsheuvel',
  ov: 'https://9292.nl/?naar=kaatsheuvel_horst-3',
  gastheer: 'Ron van Halder',
  google: '5,0',
  reviews: 94,
  inchecken: '15.30',
  uitchecken: '11.00',
  themeColor: '#1f1713',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

export const icoon = {
  tel: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z"/></svg>`,
  wa: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.4-.3z"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>`,
};
