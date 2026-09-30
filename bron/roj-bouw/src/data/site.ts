// Feiten uit het Google-bedrijfsprofiel van Roj Bouw (bekeken 30-09-2026; content/b16/roj.txt): naam, telefoon,
// plaats Zwijndrecht (geen huisnummer), 4,8 uit 45 reviews, eigenaar reageert op elke review, kenmerken "gerund door
// een vrouwelijke ondernemer" en "LGBTQ+ vriendelijk", tijden 07:00 tot 17:00 (dagen niet zichtbaar).
// Werkzaamheden en "wat klanten noemen" samengevat uit de reviews. Slogan van het logo op hun werkshirt.
// Het bedrijf heeft nog geen website. Geen e-mail, KvK of prijzen bekend.
export const site = {
  naam: 'Roj Bouw',
  slogan: 'Samen bouwen aan uw toekomst',
  plaats: 'Zwijndrecht',
  mobiel: '06 30511240',
  mobielHref: 'tel:+31630511240',
  whatsapp: 'https://wa.me/31630511240',
  google: '4,8',
  reviews: 45,
  googleLink: 'https://www.google.com/maps/search/?api=1&query=Roj+Bouw+Zwijndrecht',
  themeColor: '#292520',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
