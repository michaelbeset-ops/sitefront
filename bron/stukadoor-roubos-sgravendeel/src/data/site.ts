// Feiten: Google-bedrijfsprofiel "Stukadoorsbedrijf F. Roubos" (bekeken 3 oktober 2026; 5,0 uit 3 reviews, niet geclaimd,
// geen website, geen openingstijden, geen eigen foto's) en OpenKvK (KvK 24424389, eenmanszaak, actief, SBI 4331 Stukadoren,
// privacybescherming op het adres). Het adres is een woonhuis: op de site alleen "'s-Gravendeel".
// Geen e-mail, Facebook, Instagram of Werkspot gevonden.
export const site = {
  naam: 'Stukadoorsbedrijf F. Roubos',
  kort: 'Roubos',
  plaats: "'s-Gravendeel",
  regio: 'Hoeksche Waard',
  tel: '06 29 34 22 39',
  telHref: 'tel:+31629342239',
  wa: 'https://wa.me/31629342239',
  kvk: '24424389',
  reviews: "https://www.google.com/maps/search/?api=1&query=Stukadoorsbedrijf+F.+Roubos+'s-Gravendeel",
  google: { score: '5,0', aantal: 3 },
  themeColor: '#17181a',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Letterlijk van Google (stand 3 oktober 2026). Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Corine', wanneer: '2 maanden geleden', tekst: 'Super enthousiaste stucadoor! Mooi werk en een goede prijs!' },
  { naam: 'Alex de L.', wanneer: 'een maand geleden', tekst: 'Goede en betrouwbare stukadoor met veel ervaring' },
];
// Derde review: alleen 5 sterren, zonder tekst.
export const sterrenOnly = { naam: 'HKS Metals', wanneer: '9 jaar geleden' };

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waVraag = waMet('Hallo, ik heb een vraag over stucwerk. Ik stuur een paar foto’s mee.');
