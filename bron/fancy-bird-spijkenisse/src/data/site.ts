// Feiten: Google-bedrijfsprofiel "Fancy Bird" (bekeken 5 oktober 2026; 4,7 uit 12 reviews), Instagram @fancybirdspijkenisse
// (6.680 volgers, bio), Facebook "Fancy Bird Spijkenisse" (4.200+ volgers, 4,9 uit 27 aanbevelingen), shoppeninspijkenisse.nl.
// Nieuwstraat 188, 3201 EE Spijkenisse (Stadsplein Shopping Center). 06 42 62 10 70. Geen eigen website, geen e-mail of KvK gevonden.
export const site = {
  naam: 'Fancy Bird',
  straat: 'Nieuwstraat 188',
  postcode: '3201 EE',
  plaats: 'Spijkenisse',
  centrum: 'Stadsplein Shopping Center',
  tel: '06 42 62 10 70',
  telHref: 'tel:+31642621070',
  wa: 'https://wa.me/31642621070',
  instagram: 'https://www.instagram.com/fancybirdspijkenisse/',
  facebook: 'https://www.facebook.com/search/top?q=Fancy%20Bird%20Spijkenisse',
  maps: 'https://www.google.com/maps/search/?api=1&query=Fancy+Bird+Nieuwstraat+188+Spijkenisse',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Fancy+Bird+Nieuwstraat+188+Spijkenisse',
  google: { score: '4,7', aantal: 12 },
  themeColor: '#24161c',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay). Tijden in minuten voor het script.
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '13.00', dicht: '17.00', o: 780, d: 1020 },
  { dag: 2, naam: 'Dinsdag', open: '10.00', dicht: '17.00', o: 600, d: 1020 },
  { dag: 3, naam: 'Woensdag', open: '10.00', dicht: '17.00', o: 600, d: 1020 },
  { dag: 4, naam: 'Donderdag', open: '10.00', dicht: '20.00', o: 600, d: 1200 },
  { dag: 5, naam: 'Vrijdag', open: '10.00', dicht: '17.00', o: 600, d: 1020 },
  { dag: 6, naam: 'Zaterdag', open: '10.00', dicht: '17.00', o: 600, d: 1020 },
  { dag: 0, naam: 'Zondag', open: '', dicht: '', o: 0, d: 0 },
];

// Letterlijk van Google (stand 5 oktober 2026). Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Patricia V.', tekst: 'Super leuke meiden met verstand van kleding en combinaties hierin! Lief en behulpzaam en goede adviezen. Een aanrader ❤️' },
  { naam: 'Jacqué E.', tekst: 'Super leuke en mooie vrouwen kleding. 2 mooie blouses gekocht. En hele leuke medewerkers. Goede hulp bij keuze' },
  { naam: 'Annelies P.', tekst: 'Super leuke winkel, kleding en meiden' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hoi Fancy Bird! Ik heb een vraag:');
