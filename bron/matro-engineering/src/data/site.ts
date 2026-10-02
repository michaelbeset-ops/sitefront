// Feiten (bekeken 02-10-2026), alles van hun eigen site matro-engineering.nl:
// Home: "Sinds de start in 2000 is MATRO Engineering bezig met werktuigbouwkunde in de breedste zin. Met andere woorden:
// wij bedenken, tekenen, berekenen en bouwen machines, apparaten, producten en constructies. Dit doen wij - in een klein
// team - voor alle takken van de industrie en tot volle tevredenheid van een groeiende klantenkring."
// Wat doet Matro: Conceptontwerp, Rekenen en tekenen, Productontwikkeling, Machinebouw (teksten in index.astro, ingekort).
// Contact: Pondweg 11F, 2153 PK Nieuw-Vennep, +31 (0)252-683443, info@matro-engineering.nl.
// Logo: zwarte M met drie balkjes (zwart, cyaan, zwart): MATRO / ENGINEERING / MACHINEBOUW.
export const site = {
  naam: 'Matro Engineering',
  straat: 'Pondweg 11F',
  postcode: '2153 PK',
  plaats: 'Nieuw-Vennep',
  tel: '0252 683 443',
  telHref: 'tel:+31252683443',
  mail: 'info@matro-engineering.nl',
  maps: 'https://www.google.com/maps/search/?api=1&query=Matro+Engineering+Pondweg+11F+Nieuw-Vennep',
  themeColor: '#0d1014',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

export const mailMet = (onderwerp: string, tekst: string) =>
  `mailto:${site.mail}?subject=${encodeURIComponent(onderwerp)}&body=${encodeURIComponent(tekst)}`;

export const vraagMail = mailMet('Vraagstuk voor Matro',
  'Goedendag,\n\nWij zoeken hulp bij:\n\nWat moet de machine, het apparaat of de constructie doen: \nWat is er al (schets, tekening, bestaande machine): \nGewenste planning: \n\nMet vriendelijke groet,\n');
