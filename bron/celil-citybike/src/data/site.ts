// Feiten van celilcitybike.nl (7 pagina's: home, over ons, reparatie, gebruikte fietsen, fietssleutel kwijt,
// openingstijden, contact) en het Google-profiel (4,7 uit 240 reviews), opgehaald 27-09-2026.
// Adres volgens de eigen site (3512 AH). Geen e-mailadres bekend: de zaak is alleen telefonisch bereikbaar.
export const site = {
  naam: 'Celil CityBike',
  straat: 'Voorstraat 24',
  postcode: '3512 AH',
  plaats: 'Utrecht',
  tel: '06 14 44 89 55',
  telHref: 'tel:+31614448955',
  whatsapp: 'https://wa.me/31614448955',
  kvk: '52231267',
  google: { score: '4,7', aantal: 240 },
  maps: 'https://www.google.com/maps/search/?api=1&query=Celil+Citybike+Voorstraat+24+Utrecht',
  themeColor: '#134e4a',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

// Openingstijden volgens de eigen site. dag = getDay()-nummer (0 = zondag). Feestdagen gesloten.
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '9.00', dicht: '19.00' },
  { dag: 2, naam: 'Dinsdag', open: '9.00', dicht: '19.00' },
  { dag: 3, naam: 'Woensdag', open: '9.00', dicht: '19.00' },
  { dag: 4, naam: 'Donderdag', open: '9.00', dicht: '20.00', noot: 'Koopavond' },
  { dag: 5, naam: 'Vrijdag', open: '9.00', dicht: '19.00' },
  { dag: 6, naam: 'Zaterdag', open: '9.00', dicht: '18.00' },
  { dag: 0, naam: 'Zondag', open: '13.00', dicht: '18.00', noot: 'Iedere zondag' },
];

// Letterlijk van de reparatiepagina ("etc." laten we weg).
export const reparaties = ['Banden plakken', 'Algehele onderhoudsbeurt', 'Verlichting', 'Ketting stellen en smeren', 'Sloten', 'Onderdelen'];
