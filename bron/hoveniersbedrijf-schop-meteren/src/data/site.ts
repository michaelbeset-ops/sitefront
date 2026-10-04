// Feiten: oude site hoveniersbedrijfschop.nl (home, project, fotogallery, contact; opgehaald 4 oktober 2026),
// Google-bedrijfsprofiel "Hoveniersbedrijf Daniël Schop" (4,8 uit 4 reviews, bekeken 4 oktober 2026; geen openingstijden),
// KvK-zoeken: Hoveniersbedrijf Daniël Schop, VOF, KvK 11046558, Blankertseweg 15 a, 4194 NL Meteren (ingeschreven).
export const site = {
  naam: 'Hoveniersbedrijf Daniël Schop',
  kort: 'Hoveniersbedrijf Schop',
  eigenaar: 'Daniël',
  straat: 'Blankertseweg 15a',
  postcode: '4194 NL',
  plaats: 'Meteren',
  tel: '06 23 79 25 20',
  telHref: 'tel:+31623792520',
  wa: 'https://wa.me/31623792520',
  mail: 'info@hoveniersbedrijfschop.nl',
  kvk: '11046558',
  maps: 'https://www.google.com/maps/search/?api=1&query=Hoveniersbedrijf+Dani%C3%ABl+Schop+Blankertseweg+15a+Meteren',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Hoveniersbedrijf+Dani%C3%ABl+Schop+Meteren',
  florans: 'https://www.florans.nl',
  google: { score: '4,8', aantal: 4 },
  themeColor: '#1b1922',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// De vijf specialismen van hun homepage, uitgewerkt met zinnen van hun pagina "Onze werkzaamheden".
export const chips = ['Tuinontwerp', 'Tuinaanleg', 'Bestrating', 'Terrassen en opritten', 'Renovatie', 'Tuinonderhoud', 'Voor- en najaarsbeurt', 'Bomen kappen', 'Schuttingen', 'Speeltoestellen', 'Beregening'];

// Letterlijk van Google (stand 4 oktober 2026), met het echte aantal sterren per review.
export const reviews = [
  { sterren: 5, naam: 'Sitcon nl', wanneer: 'een week geleden', tekst: 'Al jaren klant en super tevreden. Altijd wordt er netjes werk geleverd en afspraken nagekomen.' },
  { sterren: 4, naam: 'Louis v. D.', wanneer: '6 jaar geleden', tekst: 'Men doet wat ze zeggen en zeggen wat ze doen. Met een topresultaat.' },
  { sterren: 5, naam: 'Ernst B.', wanneer: '12 jaar geleden', tekst: 'Harde werker. doet meer dan dat hij moet doen.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waOfferte = waMet('Goedendag Daniël, ik wil graag een vrijblijvende offerte voor mijn tuin.');
