// Feiten: bron/eigen-site.txt (natechhandel.nl, opgehaald 5 november 2026).
// Natech advies, handel & engineering. Sinds 1998 dealer en importeur van DEMTEC-machines voor de tuinbouw.
// Jade 224, 3316 LJ Dordrecht (industrieterrein Dordtse Kil 3). 078 673 72 01. natech@zonnet.nl.
// Verkoop: Herman Naaktgeboren, 06 53 69 65 09 (eigen contactpagina). Geen reviews, geen openingstijden bekend.
export const site = {
  naam: 'Natech',
  straat: 'Jade 224',
  postcode: '3316 LJ',
  plaats: 'Dordrecht',
  terrein: 'Industrieterrein Dordtse Kil 3',
  tel: '078 673 72 01',
  telHref: 'tel:+31786737201',
  verkoper: 'Herman Naaktgeboren',
  mobiel: '06 53 69 65 09',
  mobielHref: 'tel:+31653696509',
  wa: 'https://wa.me/31653696509',
  mail: 'natech@zonnet.nl',
  maps: 'https://www.google.com/maps/dir/?api=1&destination=Natech+Jade+224+Dordrecht',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Productgroepen zoals op hun eigen site (pagina "Projecten/producten").
export const machines = ['Overzetten en bufferen', 'Grond- en producttransport', 'Grondvoorraadbunkers', 'Compostzeefinstallaties'];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waAlgemeen = waMet('Goedendag Herman, ik heb een vraag over een DEMTEC-machine.');
