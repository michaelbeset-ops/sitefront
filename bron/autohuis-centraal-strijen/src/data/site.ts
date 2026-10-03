// Feiten: Google-bedrijfsprofiel "Autohuis Centraal" (bekeken 3 oktober 2026; 4,7 uit 80 reviews, Autobedrijf/Garage, geen website),
// Instagram @autohuiscentraal (bio: "In- en verkoop van occasions, onderhoud en reparatie van auto's"), Facebook-pagina 61552918007896,
// Marktplaats-verkopersprofiel 49539541 (Edisonweg, 3291 CK Strijen, autohuiscentraal@gmail.com; advertentietekst "Graag bij serieuze
// interesse even bellen of Whatsapp naar 06-52380727"). Edisonweg 13, 3291 CK Strijen. Ma-vr 09:00-17:00, za 09:30-14:00, zo gesloten.
// Eigenaar heet Piet volgens meerdere reviews ("Heel erg vriendelijke eigenaar en goede service, bedankt Piet"). Geen KvK gevonden.
export const site = {
  naam: 'Autohuis Centraal',
  straat: 'Edisonweg 13',
  postcode: '3291 CK',
  plaats: 'Strijen',
  tel: '06 52 38 07 27',
  telHref: 'tel:+31652380727',
  wa: 'https://wa.me/31652380727',
  mail: 'autohuiscentraal@gmail.com',
  instagram: 'https://www.instagram.com/autohuiscentraal/',
  facebook: 'https://www.facebook.com/61552918007896/',
  marktplaats: 'https://www.marktplaats.nl/u/autohuis-centraal/49539541/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Autohuis+Centraal+Edisonweg+13+Strijen',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Autohuis+Centraal+Strijen',
  google: { score: '4,7', aantal: 80 },
  themeColor: '#141312',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay). van/tot in minuten voor de live open/dicht-status.
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '09.00', dicht: '17.00', van: 540, tot: 1020 },
  { dag: 2, naam: 'Dinsdag', open: '09.00', dicht: '17.00', van: 540, tot: 1020 },
  { dag: 3, naam: 'Woensdag', open: '09.00', dicht: '17.00', van: 540, tot: 1020 },
  { dag: 4, naam: 'Donderdag', open: '09.00', dicht: '17.00', van: 540, tot: 1020 },
  { dag: 5, naam: 'Vrijdag', open: '09.00', dicht: '17.00', van: 540, tot: 1020 },
  { dag: 6, naam: 'Zaterdag', open: '09.30', dicht: '14.00', van: 570, tot: 840 },
  { dag: 0, naam: 'Zondag', open: '', dicht: '', van: 0, tot: 0 },
];

// Diensten: Instagram-bio ("In- en verkoop van occasions, onderhoud en reparatie van auto's"); APK uit de reviews
// ("Auto weg gebracht voor APK keuren", "Laatst apk laten doen"); bedrijfswagens uit hun Marktplaats-aanbod (Opel Combo) en reviews.
export const chips = ['Occasions', 'Inkoop van uw auto', 'APK', 'Onderhoudsbeurten', 'Reparatie', 'Bedrijfswagens'];

// Letterlijk van Google (stand 3 oktober 2026), ingekort met "…" waar aangegeven. Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Cornel R.', wanneer: 'oktober 2026', tekst: 'Deskundig advies, betrouwbaar en eerlijk, zeer geslaagd!' },
  { naam: 'Ar B.', wanneer: 'september 2026', tekst: 'Een eerlijke, vriendelijke en meedenkende ondernemer. Snel geholpen en goed geadviseerd. Absolute aanrader als je zorgeloos een auto voor een goede prijs wil kopen.' },
  { naam: 'Bastian V.', wanneer: 'oktober 2025', tekst: 'In de ochtend auto gekocht onder het genot van een bak koffie en croissant. In de middag opgehaald. Top service piet' },
  { naam: 'Margot J.', wanneer: '2024', tekst: 'Een tijd geleden hier 2 bobines laten vervangen en onlangs terug geweest omdat m’n auto een piepend geluid maakte. Zowel toen als de laatste keer kon ik snel terecht en ben ik heel goed geholpen. Zeker een aanrader en kom hier terug, ook voor de APK en onderhoudsbeurten' },
  { naam: 'Dana K.', wanneer: '2025', tekst: 'Ik heb vandaag mijn eerste auto gekocht bij auto huis centraal. Wat ben ik enorm tevreden over de klantvriendelijkheid, kwaliteit en manier van omgaan! Zeker een aanrader!' },
  { naam: 'Niels V.', wanneer: 'september 2026', tekst: 'Hele fijne communicatie, duidelijk , eerlijk en snel. Ik zou daar zeker vaker een auto kopen' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHallo = waMet('Hallo Autohuis Centraal, ik heb een vraag.');
