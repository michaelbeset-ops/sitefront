// Feiten: bron/google-profiel.txt, bron/google-reviews.txt, bron/marktplaats.txt (bekeken 5 november 2026).
// Planckstraat 88, 3316 GS Dordrecht (Google, Marktplaats, Stagemarkt). Vast 078 617 20 11 (Google).
// 06 82 12 83 37 en apkdordt@hotmail.com (Marktplaats "Autobedrijf Dordt"). Ma t/m vr 08:00-17:00.
// Geen website. Eigenaarsnaam alleen in reviews: niet gebruiken.
export const site = {
  naam: 'Auto APK Service Dordt',
  straat: 'Planckstraat 88',
  postcode: '3316 GS',
  plaats: 'Dordrecht',
  tel: '078 617 20 11',
  telHref: 'tel:+31786172011',
  mobiel: '06 82 12 83 37',
  mobielHref: 'tel:+31682128337',
  wa: 'https://wa.me/31682128337',
  mail: 'apkdordt@hotmail.com',
  marktplaats: 'https://www.marktplaats.nl/u/autobedrijf-dordt/3632887/',
  maps: 'https://www.google.com/maps/dir/?api=1&destination=Auto+APK+Service+Dordt+Planckstraat+88+3316+GS+Dordrecht',
  reviews: 'https://www.google.com/maps/place/Auto+APK+Service+Dordt/@51.7751563,4.6356028,17z/data=!4m6!3m5!1s0x47c42f4276f60083:0xbde74161c38e9ce0!8m2!3d51.7751563!4d4.6356028',
  google: { score: '4,5', aantal: 66 },
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

export const tijden = [
  { dag: 1, naam: 'Maandag', open: '08.00', dicht: '17.00' },
  { dag: 2, naam: 'Dinsdag', open: '08.00', dicht: '17.00' },
  { dag: 3, naam: 'Woensdag', open: '08.00', dicht: '17.00' },
  { dag: 4, naam: 'Donderdag', open: '08.00', dicht: '17.00' },
  { dag: 5, naam: 'Vrijdag', open: '08.00', dicht: '17.00' },
  { dag: 6, naam: 'Zaterdag', open: '', dicht: '' },
  { dag: 0, naam: 'Zondag', open: '', dicht: '' },
];

// Uit de reviews: apk, storingen, reparaties, onderhoud, banden wisselen; occasions via Marktplaats.
export const diensten = ['APK-keuring', 'Onderhoud', 'Reparatie', 'Storingen', 'Banden wisselen', 'Occasions'];

// Letterlijk van Google (5 november 2026), "…" = afgekapt door Google.
export const reviews = [
  { naam: 'Sylvia B.', wanneer: '7 maanden geleden', tekst: 'Onze familie is al 10 jaar klant bij Auto APK Service Dordt en nog steeds zeer tevreden. De deskundigheid en vriendelijkheid van de eigenaar en zijn zoon geven ons telkens weer vertrouwen. …' },
  { naam: 'Kyra', wanneer: 'een jaar geleden', tekst: 'Goede garage met een eigenaar en personeel die verstand heeft van zaken. Vakmannen die elders in Dordrecht niet te vinden zijn. Voor apk, storingen, reparaties en onderhoud ben je hier zeker aan het juiste adres.' },
  { naam: 'Harald V.', wanneer: '3 jaar geleden', tekst: 'Zeer prettig geholpen. Vakmensen die niet meteen vervangen maar eerst proberen te repareren. En als het dan niet lukt met betaalbare alternatieven komen. Aanrader.' },
  { naam: 'Burak A.', wanneer: '10 maanden geleden', tekst: 'De APK is netjes en snel uitgevoerd. Dank voor de goede service en tot de volgende keer!' },
  { naam: 'Gabriel V.', wanneer: '2 jaar geleden', tekst: 'Uitermate goede service. Zeer vriendelijk. Ruime vakkennis en eerlijke prijzen.' },
  { naam: 'Amber L.', wanneer: '6 jaar geleden', tekst: 'Vorig weekend bij een auto gaan kijken, zag er prima uit. Meteen aanbetaald. Vandaag die leuke auto gekocht! Goede service, erg aardige verkoper. Zeker een aanrader!' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waAlgemeen = waMet('Goedendag, ik wil graag een afspraak maken voor mijn auto.');
