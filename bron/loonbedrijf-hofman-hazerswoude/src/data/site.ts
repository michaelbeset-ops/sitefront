// Feiten (bekeken 4 oktober 2026):
// - Google-bedrijfsprofiel "Loonbedrijf Hofman": 4,1 uit 14 reviews, Middelweg 2, 2391 NS Hazerswoude-Dorp, 06 21578919.
// - Facebook "R Hofman Machineverhuur & Grondverzet B.V." (facebook.com/hofmanloonbedrijf): laatste bericht 16 augustus 2026,
//   e-mail info@r-hofman.nl, eigen foto's en albums (Pijnacker, Reeuwijk, tuinaanleg, baggeren, wortelfrees).
// - Huidige website loonbedrijfhofman.nl (2013): diensten, verkoop, verhuur en werktuigen met maten (zie bron/oude-site.txt).
// Geen openingstijden en geen KvK-nummer openbaar gevonden; die staan dus niet op de pagina.
export const site = {
  naam: 'Loonbedrijf Hofman',
  bv: 'R. Hofman Machineverhuur & Grondverzet B.V.',
  straat: 'Middelweg 2',
  postcode: '2391 NS',
  plaats: 'Hazerswoude-Dorp',
  tel: '06 21 57 89 19',
  telHref: 'tel:+31621578919',
  wa: 'https://wa.me/31621578919',
  mail: 'info@r-hofman.nl',
  facebook: 'https://www.facebook.com/hofmanloonbedrijf',
  maps: 'https://www.google.com/maps/search/?api=1&query=Loonbedrijf+Hofman+Middelweg+2+Hazerswoude-Dorp',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Loonbedrijf+Hofman+Hazerswoude-Dorp',
  google: { score: '4,1', aantal: 14 },
  themeColor: '#16130f',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Diensten-chips: de rubrieken van hun huidige site.
export const chips = ['Grondbewerking', 'Slootonderhoud', 'Baggeren', 'Tuinaanleg', 'Snoeiwerk', 'Wortelfrezen', 'Maaien en klepelen', 'Pothoeken', 'Potkluiten', 'Beschoeiingen', 'Bruggen', 'Sneeuwvegen'];

// Alleen de positieve Google-reviews met tekst, letterlijk (stand 4 oktober 2026). Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Toot v. T.', wanneer: '6 jaar geleden', tekst: ['Vakkundige mensen, komen gemaakte afsprake goed na'] },
  { naam: 'Ruud V.', wanneer: '3 jaar geleden', tekst: ['Hebben heel heel erg veel', 'Kunnen ook nog eens heel erg veel'] },
  { naam: 'Willem D.', wanneer: 'een jaar geleden', tekst: ['En mooi bedrijf'] },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waVraag = waMet('Goedendag, ik heb een vraag over een klus.');
