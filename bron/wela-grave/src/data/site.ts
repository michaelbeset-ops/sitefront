// Feiten uit het Google-bedrijfsprofiel van WELA (5,0 uit 38 reviews, categorie Thais restaurant, opgehaald 30-09-2026)
// en de twee menuborden op dat profiel (foto's google-3 en google-10). Geen eigen website.
// Dagen, tijden en gerechten letterlijk overgenomen; prijzen van de borden bewust niet getoond (aanleveren).
export const site = {
  naam: 'WELA',
  sub: 'Asian Inspired Thai Cuisine',
  straat: 'Maasstraat 16',
  postcode: '5361 GG',
  plaats: 'Grave',
  tel: '06 16 96 98 24',
  telHref: 'tel:+31616969824',
  wa: 'https://wa.me/31616969824',
  maps: 'https://www.google.com/maps/search/?api=1&query=WELA+Maasstraat+16+Grave',
  google: { score: '5,0', aantal: 38 },
  themeColor: '#15110d',
  // Woensdag t/m zondag 15.00-21.30 uur; maandag en dinsdag gesloten.
  openDagen: [3, 4, 5, 6, 0],
  open: '15:00',
  dicht: '21:30',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

// "Proeverij WELA, 6 Gang Menu" van het menubord (google-10.jpg), namen letterlijk.
export const proeverij: { gang: string; noot?: string; items: string[] }[] = [
  { gang: 'WELA Mix', noot: 'Voorgerechten', items: ['Saté Kip', 'Tod Man Pla (Thaise viskoekjes)', 'Vegetarische Loempia'] },
  { gang: 'Kleine Soep', noot: 'Keuze uit', items: ['Tom Kha Kai', 'Tom Yam Kung'] },
  { gang: 'Hoofdgerecht', noot: 'Keuze uit', items: ['Pad Priew Waan (vis)', 'Pad Naam Man Hoi (beef)', 'Pad Med Ma Muang (kip)'] },
  { gang: 'Hoofdgerecht 2', noot: 'Keuze uit', items: ['Rode Curry (beef)', 'Massaman Curry (kip)'] },
  { gang: 'Hoofdgerecht 3', items: ['Pad Thai Garnalen'] },
  { gang: 'Dessert', items: ['Mango Sticky Rice'] },
];

// Gerechten die op het andere menubord (google-3.jpg) staan.
export const bord = ['Khao Pad', 'Rode Curry', 'Groene Curry', 'Massaman Curry', 'Pad Priew Waan', 'Pad Naam Man Hoi', 'Pad Med Ma Mueang', 'Pad Kra Phao', 'Pad Kriatiem Prik Thai', 'Pad Phak Ruam Mit'];
