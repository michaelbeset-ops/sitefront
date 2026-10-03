// Feiten: Google-bedrijfsprofiel "Arsam B.V. autos" (bekeken 3 oktober 2026; 4,9 uit 44 reviews, tijden), de huidige site
// arsamautos.nl (2020: over ons, diensten, FAQ, e-mail), het gevelbord op hun Google-foto's en de Facebook-intro.
// Volledige bronnen in bron/BRON.md. KvK van de oude site (2020) niet overgenomen: mogelijk van vóór de B.V.
export const site = {
  naam: "Arsam Auto's",
  bv: 'Arsam B.V.',
  eigenaar: 'Ebi',
  straat: 'Koperhoek 80 A',
  postcode: '3162 LA',
  plaats: 'Rhoon',
  tel: '06 52 55 91 80',
  telHref: 'tel:+31652559180',
  wa: 'https://wa.me/31652559180',
  mail: 'info@arsamautos.nl',
  facebook: 'https://www.facebook.com/ARSAM-AUTOS-105327237606163/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Arsam+B.V.+autos+Koperhoek+80+A+Rhoon',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Arsam+B.V.+autos+Rhoon',
  google: { score: '4,9', aantal: 44 },
  themeColor: '#131416',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Openingstijden volgens Google (3 oktober 2026). dag: 0 = zondag (zoals Date.getDay). van/tot in minuten.
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '09.00', dicht: '17.30', van: 540, tot: 1050 },
  { dag: 2, naam: 'Dinsdag', open: '09.00', dicht: '17.30', van: 540, tot: 1050 },
  { dag: 3, naam: 'Woensdag', open: '09.00', dicht: '17.30', van: 540, tot: 1050 },
  { dag: 4, naam: 'Donderdag', open: '09.00', dicht: '17.30', van: 540, tot: 1050 },
  { dag: 5, naam: 'Vrijdag', open: '09.00', dicht: '17.30', van: 540, tot: 1050 },
  { dag: 6, naam: 'Zaterdag', open: '09.00', dicht: '14.00', van: 540, tot: 840 },
  { dag: 0, naam: 'Zondag', open: '', dicht: '', van: 0, tot: 0 },
];

// Werkzaamheden: gevelbord, Google-omschrijving ("Apk /reparatie / banden/ onderhoud/ uitlezen/ uitlaat/ ... accu/ airco/"),
// Facebook-intro en de dienstenlijsten op hun site (motor, koppakking, koppelingsplaat, olie verversen, remmen, uitlijnen,
// velgen, bandenspanning, elektrische ramen en daken).
export const chips = ['APK', 'Onderhoud', 'Olie verversen', 'Remmen', 'Koppeling', 'Koppakking', 'Banden en uitlijnen', 'Airco', 'Diagnose en uitlezen', 'Accu', 'Uitlaat', 'Elektrische ramen en daken', 'In- en verkoop'];

// Letterlijk van Google (stand 3 oktober 2026), ingekort met "…" waar aangegeven. Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Annemarijn B.', wanneer: '10 maanden geleden', tekst: 'Ik kom al ruim 4 jaar bij Ebi voor onderhoud en APK. Hele fijne ervaren garage. Goed advies en goede service voor een goede prijs. Super tevreden. Echt een aanrader.' },
  { naam: 'Nesh D.', wanneer: 'een jaar geleden', tekst: 'Ik keur mijn auto hier al 2 jaar. Eigenaar is super meedenkend. Komt zn afspraken na. Heeft verstand van autos. Belt altijd even van te voren als er grote wijzigingen zijn. Eerlijke prijs.' },
  { naam: 'Remco W.', wanneer: 'een jaar geleden', tekst: 'Koppeling laten vervangen. Super snel geholpen. Zonder poespas. Auto koppelt weer zoals het moet. Goede prijs..' },
  { naam: 'Tiara M.', wanneer: 'een maand geleden', tekst: 'Super fijn netjes geholpen fijne communicatie vertrouwend gevoel en aflevering super' },
  { naam: 'Mathijs S.', wanneer: '2 jaar geleden', tekst: 'Super service! Ik stond met een kapotte bestelbus langs de kant. Even gebeld en binnen 10 minuten gemaakt en weer onderweg!' },
  { naam: 'Kirsten D.', wanneer: '5 jaar geleden', tekst: 'Mijn auto is al aardig op leeftijd en wordt al aantal jaar door Ebi onderhouden en altijd tot grote tevredenheid. Ondanks leeftijd vol vertrouwen en veilig op de weg. …' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waAfspraak = waMet("Hallo Arsam Auto's, ik wil graag een afspraak maken voor mijn auto.");
