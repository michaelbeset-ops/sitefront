// Feiten: hun huidige website rijschool-west.nl (alle xml_*-pagina's, bekeken 3 oktober 2026; prijzen bijgewerkt 22-02-2026,
// contactpagina 27-04-2026) en hun Google-bedrijfsprofiel (4,0 uit 8 reviews; openingstijden ma-za 08:00-21:00, zo 09:00-21:00).
// Kievitenburg 10, 3181 SJ Rozenburg. 06 46615096. b.schermer@outlook.com. Familiebedrijf, opgericht in 1973 (meta-omschrijving
// en introtekst van hun site). Nissan Note-lesauto's met airco, er wordt niet gerookt. Geen KvK-nummer gevonden.
export const site = {
  naam: 'Autorijschool West',
  straat: 'Kievitenburg 10',
  postcode: '3181 SJ',
  plaats: 'Rozenburg',
  tel: '06 46 61 50 96',
  telHref: 'tel:+31646615096',
  wa: 'https://wa.me/31646615096',
  mail: 'b.schermer@outlook.com',
  maps: 'https://www.google.com/maps/search/?api=1&query=Autorijschool+West+Kievitenburg+10+Rozenburg',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Autorijschool+West+Rozenburg',
  google: { score: '4,0', aantal: 8 },
  themeColor: '#16181b',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Openingstijden volgens Google. dag: 0 = zondag (zoals Date.getDay). Minuten voor het live-label.
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '08.00', dicht: '21.00', van: 480, tot: 1260 },
  { dag: 2, naam: 'Dinsdag', open: '08.00', dicht: '21.00', van: 480, tot: 1260 },
  { dag: 3, naam: 'Woensdag', open: '08.00', dicht: '21.00', van: 480, tot: 1260 },
  { dag: 4, naam: 'Donderdag', open: '08.00', dicht: '21.00', van: 480, tot: 1260 },
  { dag: 5, naam: 'Vrijdag', open: '08.00', dicht: '21.00', van: 480, tot: 1260 },
  { dag: 6, naam: 'Zaterdag', open: '08.00', dicht: '21.00', van: 480, tot: 1260 },
  { dag: 0, naam: 'Zondag', open: '09.00', dicht: '21.00', van: 540, tot: 1260 },
];

// Opleidingen en extra's: de menu-onderdelen van hun site (Opleidingen, CBR, Extra).
export const chips = ['Praktijklessen', 'Theoriecursus', 'Opfrislessen', 'Tussentijdse toets', 'Faalangstexamen', 'Autisme en ADHD', 'CBR-rijtest', 'Begeleiderspas'];

// Prijzen: startpagina en pagina Praktijkcursus (bijgewerkt 22 februari 2026).
export const pakketten = [
  { naam: 'Pakket A', prijs: '2.495', regels: ['35 praktijklessen van 1 uur', 'CBR-praktijkexamen'] },
  { naam: 'Pakket B', prijs: '2.755', regels: ['35 praktijklessen van 1 uur', 'Tussentijdse toets (TTT)', 'CBR-praktijkexamen'], uitgelicht: true },
];
export const losse = [
  ['Proefles (60 minuten)', '60,00'],
  ['Praktijkles per uur', '67,00'],
  ['Opfrisles per uur', '63,00'],
  ['Tussentijdse toets (TTT)', '260,00'],
  ['Praktijkexamen', '310,00'],
  ['Herexamen', '310,00'],
  ['BNOR-examen', '310,00'],
  ['Faalangst(her)examen', '350,00'],
];

// Letterlijk van Google (alleen de positieve reviews met tekst), ingekort met "…". Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'J. C.', tekst: 'Geweldig les gehad, zowel theorielessen (pakket van 100) en praktijkles bij Maarten. Als je je autorijbewijs wil halen, zeker hier doen. Je hebt de volledige aandacht in de auto en ik voelde me persoonlijk erg op mn gemak. … Top West!' },
  { naam: 'Jordi H.', tekst: 'super rijschool is dit zeker een aanrader' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waProefles = waMet('Hoi Autorijschool West, ik wil graag een proefles plannen.');
