// Feiten: huidige site www.langedak.nl (tekst in bron/oude-site-tekst.txt) en Google-bedrijfsprofiel "Langedak Dakwerken"
// (bekeken 3 oktober 2026; 4,7 uit 12 reviews; ma t/m vr 07:00-18:00). Eigenaar Berry de Lange, KvK 27309794.
export const site = {
  naam: 'Langedak Dakwerken',
  eigenaar: 'Berry de Lange',
  straat: 'Verlengde Spiegelmakerstraat 17',
  postcode: '2645 LZ',
  plaats: 'Delfgauw',
  tel: '06 42 28 66 32',
  telHref: 'tel:+31642286632',
  wa: 'https://wa.me/31642286632',
  mail: 'info@langedak.nl',
  kvk: '27309794',
  maps: 'https://www.google.com/maps/search/?api=1&query=Langedak+Dakwerken+Verlengde+Spiegelmakerstraat+17+Delfgauw',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Langedak+Dakwerken+Delfgauw',
  google: { score: '4,7', aantal: 12 },
  themeColor: '#15181c',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay).
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '07.00', dicht: '18.00' },
  { dag: 2, naam: 'Dinsdag', open: '07.00', dicht: '18.00' },
  { dag: 3, naam: 'Woensdag', open: '07.00', dicht: '18.00' },
  { dag: 4, naam: 'Donderdag', open: '07.00', dicht: '18.00' },
  { dag: 5, naam: 'Vrijdag', open: '07.00', dicht: '18.00' },
  { dag: 6, naam: 'Zaterdag', open: '', dicht: '' },
  { dag: 0, naam: 'Zondag', open: '', dicht: '' },
];

// Letterlijk de lijst "Wij verzorgen en verwerken o.a." van hun site.
export const materialen = ['Adviesrapporten', 'Dakinspectie', 'Bitumineuze dakbedekking', 'Shingles', 'Dakpannen', 'Leien', 'Lood, koper en zinkwerk', 'Hemelwater en dakdoorvoeren', 'Lichtstraten en koepels', 'Velux dakramen', 'Boeiboorden'];

// Letterlijk van Google (stand 3 oktober 2026), ingekort met "…" waar aangegeven. Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Rosalie K.', wanneer: '5 maanden geleden', tekst: 'We zijn erg blij met onze nieuwe dakpannen. Ze leveren uitstekende service voor een goede prijs, en zijn heel betrouwbaar en klantgericht. Zeker aan te bevelen!' },
  { naam: 'Wendy V.', wanneer: 'een jaar geleden', tekst: 'Langedak heeft bij ons het bitumen dak vervangen. Erg tevreden over het resultaat. De communicatie verliep vlot, afspraken zijn nagekomen en de prijs was prima. Kortom, een dakdekker waar je echt van op aan kan.' },
  { naam: 'Gerard', wanneer: 'een jaar geleden', tekst: 'Had een spoedklus maar Berry heeft me perfect uit de brand geholpen! Ondanks de drukte en vakantie die er voor hem aan zat te komen.' },
  { naam: 'Marcel V.', wanneer: 'een jaar geleden', tekst: 'Nieuwe bitumenlaag op het dak van ons huis en waterafvoer gerepareerd. Netjes en vlot uitgevoerd, prima.' },
  { naam: 'Cees-Willem H.', wanneer: '5 jaar geleden', tekst: 'Berry heeft een lekkage aan ons jaren 30 dakpannen-dak gerepareerd. Er bleken enkele pannen kapot en eerder slecht gerepareerd. Daarnaast lagen de pannen niet mooi recht meer. Berry heeft het snel opgelost …' },
  { naam: 'M. H.', wanneer: '4 jaar geleden', tekst: '… Super snelle service, deskundig en prettig contact!' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waVraag = waMet('Goedendag Berry, ik heb een vraag over mijn dak.');
