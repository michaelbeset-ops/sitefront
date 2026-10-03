// Feiten: Google-bedrijfsprofiel "Airco Service Martin" (bekeken 3 oktober 2026; 4,8 uit 53 reviews; ma-vr 08:00-18:00,
// za 08:30-15:00, zo gesloten; Damweg 45, 4905 BS Oosterhout; 06 24580452) en hun huidige site aircoservicemartin.nl
// (diensten, STEK-certificering, merken, garantie, e-mail). Eigenaar: Martin (ondertekent zijn reacties op Google zelf).
// Geen KvK-nummer gevonden. Prijzen niet gebruikt (aanbiedingenpagina zonder datum).
export const site = {
  naam: 'Airco Service Martin',
  straat: 'Damweg 45',
  postcode: '4905 BS',
  plaats: 'Oosterhout',
  tel: '06 24 58 04 52',
  telHref: 'tel:+31624580452',
  wa: 'https://wa.me/31624580452',
  mail: 'info@aircoservicemartin.nl',
  facebook: 'https://www.facebook.com/profile.php?id=100064653865731',
  maps: 'https://www.google.com/maps/search/?api=1&query=Airco+Service+Martin+Damweg+45+Oosterhout',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Airco+Service+Martin+Oosterhout',
  google: { score: '4,8', aantal: 53 },
  themeColor: '#0b1420',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay). van/tot in minuten, voor de live open/dicht-status.
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '08.00', dicht: '18.00', van: 480, tot: 1080 },
  { dag: 2, naam: 'Dinsdag', open: '08.00', dicht: '18.00', van: 480, tot: 1080 },
  { dag: 3, naam: 'Woensdag', open: '08.00', dicht: '18.00', van: 480, tot: 1080 },
  { dag: 4, naam: 'Donderdag', open: '08.00', dicht: '18.00', van: 480, tot: 1080 },
  { dag: 5, naam: 'Vrijdag', open: '08.00', dicht: '18.00', van: 480, tot: 1080 },
  { dag: 6, naam: 'Zaterdag', open: '08.30', dicht: '15.00', van: 510, tot: 900 },
  { dag: 0, naam: 'Zondag', open: '', dicht: '', van: 0, tot: 0 },
];

// Uit hun dienstenpagina's en de reviews (aircocover, meerdere binnenunits).
export const chips = ['Split-unit airco', 'Meerdere binnenunits', 'Aircocover', 'Onderhoud volgens STEK', 'Storing verhelpen', 'Auto-airco', 'Lekcheck en vacumeren', 'Bijvullen', 'Chalets en recreatiewoningen', 'Bedrijfswagens'];

// Letterlijk van Google (stand 3 oktober 2026), ingekort met "…" waar aangegeven. Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Remco D.', wanneer: '9 maanden geleden', tekst: 'Na het eerste contact via whatsapp een afspraak voor de volgende dag gemaakt om de mogelijkheden te bespreken. Goed en vakkundig advies gekregen over de mogelijkheden. … We zijn zeer tevreden over het eindresultaat' },
  { naam: 'Kevin G.', wanneer: '7 maanden geleden', tekst: 'Erg tevreden over het geleverde werk en de communicatie. … Daarna hebben we ook besloten de derde airco door Martin te laten plaatsen. Vriendelijk, netjes gewerkt en service met een glimlach. Bedankt!' },
  { naam: 'Frank V.', wanneer: '4 jaar geleden', tekst: 'Wat mij opviel op de dag van de installatie is dat Martin en collega erg correct en netjes omgaan met onze woning. Niet alsof ze op een bouwplaats zijn, maar juist met veel zorg en aandacht alles netjes installeren en afwerken.' },
  { naam: 'Tom V.', wanneer: '2 jaar geleden', tekst: 'Voor onze kinderdagverblijf locaties in Breda en Oosterhout hebben wij gekozen voor Airco Service Martin voor de aanleg van 2 complete airco installaties. Zeer professioneel bedrijf die haar afspraken nakomt.' },
  { naam: 'Anita S.', wanneer: '2 jaar geleden', tekst: 'Keurig werk( zelfs het vogelhuisje werd weer recht gehangen!)En heel fijn dat we even bij hem thuis konden komen luisteren naar het geluid van de airco! Toen was het besluit snel genomen.' },
  { naam: 'Jean V.', wanneer: '4 maanden geleden', tekst: 'Martin heeft mij gelijk geholpen na een whatts ap bericht met de airco in mijn auto … Een absolute aanrader' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waOfferte = waMet('Hallo Martin, ik wil graag een offerte voor een airco.');
