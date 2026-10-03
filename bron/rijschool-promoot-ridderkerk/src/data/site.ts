// Feiten: rijschoolpromoot.nl (alle pagina's via wp-json, 3 oktober 2026; bron/site/alles.txt) en het Google-profiel
// "Rijschool Promoot" (4,9 uit 955 reviews, ma-do 08:00-19:00, vr 08:00-18:00, za en zo gesloten; bron/google-reviews.txt).
// Ruwaardlaan 38, 2983 CM Ridderkerk. 06-24247695, 0180-397000, info@rijschoolpromoot.nl, kvk nr 243341310000.
// Prijzen: de tarievenpagina's (bijgewerkt april/juni 2026) en de pakketkaarten zoals zij die publiceren ("van ... voor ...").
export const site = {
  naam: 'Rijschool Promoot',
  straat: 'Ruwaardlaan 38',
  postcode: '2983 CM',
  plaats: 'Ridderkerk',
  tel: '06 24 24 76 95',
  telHref: 'tel:+31624247695',
  vast: '0180 397 000',
  vastHref: 'tel:+31180397000',
  mail: 'info@rijschoolpromoot.nl',
  kvk: '243341310000',
  wa: 'https://wa.me/31624247695',
  maps: 'https://www.google.com/maps/search/?api=1&query=Rijschool+Promoot+Ruwaardlaan+38+Ridderkerk',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Rijschool+Promoot+Ridderkerk',
  google: { score: '4,9', aantal: 955 },
  themeColor: '#111317',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay). Minuten voor de live open/dicht-status.
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '08.00', dicht: '19.00', van: 480, tot: 1140 },
  { dag: 2, naam: 'Dinsdag', open: '08.00', dicht: '19.00', van: 480, tot: 1140 },
  { dag: 3, naam: 'Woensdag', open: '08.00', dicht: '19.00', van: 480, tot: 1140 },
  { dag: 4, naam: 'Donderdag', open: '08.00', dicht: '19.00', van: 480, tot: 1140 },
  { dag: 5, naam: 'Vrijdag', open: '08.00', dicht: '18.00', van: 480, tot: 1080 },
  { dag: 6, naam: 'Zaterdag', open: '', dicht: '', van: 0, tot: 0 },
  { dag: 0, naam: 'Zondag', open: '', dicht: '', van: 0, tot: 0 },
];

export type Pakket = { naam: string; sub?: string; van?: string; prijs: string; top?: boolean; punten: string[] };
export type Opleiding = { id: string; naam: string; kort: string; pakketten: Pakket[]; los: [string, string, string][]; noot?: string };

// Pakketten letterlijk overgenomen van hun pakketkaarten; "los" uit hun tarieventabellen.
export const opleidingen: Opleiding[] = [
  {
    id: 'scooter', naam: 'Scooter', kort: 'Scooterrijbewijs',
    pakketten: [
      { naam: 'Praktijk Pakket A', sub: '4 rijlessen + examen', van: '399', prijs: '360', punten: ['Snelste CBR-praktijkexamen', '4 uur praktijkles (60 min)', 'Gebruik scooter', 'Scooterhelm en handschoenen te leen', 'Te verdelen over 1 à 2 dagen'] },
      { naam: 'Praktijk Pakket B', sub: '5 rijlessen + examen', van: '419', prijs: '380', punten: ['Snelste CBR-praktijkexamen', '5 uur praktijkles (60 min)', 'Gebruik scooter', 'Scooterhelm en handschoenen te leen', 'Te verdelen over 1 à 2 dagen'] },
      { naam: 'Praktijk & Theorie', sub: 'Incl. praktijk- en theorie-examen CBR', van: '475', prijs: '399', top: true, punten: ['4 rijlessen + examen', '4 uur praktijkles (60 min)', 'Inclusief theoriecursus', 'Gebruik scooter, helm en handschoenen', 'Te verdelen over 1 à 2 dagen'] },
      { naam: 'Pakket Theorie', sub: 'Incl. CBR-theorie-examen', van: '139', prijs: '119', punten: ['Theoriecursus', 'Online CBR-examens', 'Gelijk door naar het praktijkexamen', 'Geen wachttijd'] },
      { naam: 'Pakket Individueel', sub: 'Bij faalangst, rijangst, autisme, beperkingen of aandachtsproblemen', van: '575', prijs: '499', punten: ['5 rijlessen + examen', '1 op 1 rijles', 'Extra begeleiding', 'Gebruik scooter, helm en handschoenen', 'Te verdelen over 1 à 2 dagen'] },
    ],
    los: [['Proefles scooter', '60 min', '€ 40'], ['Proefles scooter', '120 min', '€ 75'], ['Garantiepakket: 4 lessen + examen, incl. herexamen', '4 uur + ex.', '€ 499'], ['Borg op de dag van het examen (terug bij inleveren scooter)', '', '€ 30']],
    noot: 'Vanaf 15,5 jaar haal je je bromfietstheorie, vanaf 16 jaar je scooterrijbewijs.',
  },
  {
    id: 'auto', naam: 'Auto', kort: 'Autorijbewijs B',
    pakketten: [
      { naam: 'Pakket A', sub: '30 rijlessen', van: '1895', prijs: '1845', punten: ['CBR-praktijkexamen', 'CBR tussentijdse toets', 'Nieuwe lesauto', 'Starten vanaf 16,5 jaar', 'Spoedcursus mogelijk'] },
      { naam: 'Pakket B', sub: '40 rijlessen', van: '2455', prijs: '2385', top: true, punten: ['CBR-praktijkexamen', 'CBR tussentijdse toets', 'Nieuwe lesauto', 'Starten vanaf 16,5 jaar', 'Gratis proefles'] },
      { naam: 'Pakket C', sub: '50 rijlessen', van: '2930', prijs: '2795', punten: ['CBR-praktijkexamen', 'CBR tussentijdse toets', 'Nieuwe lesauto', 'Starten vanaf 16,5 jaar', 'Gratis proefles'] },
    ],
    los: [['Proefles schakel of automaat', '100 min', '€ 100'], ['Losse les schakel of automaat', '50 min', '€ 50'], ['Praktijkexamen B, incl. autohuur', '', '€ 295'], ['Tussentijdse toets, incl. autohuur', '', '€ 195']],
    noot: 'Les in schakel of automaat.',
  },
  {
    id: 'motor', naam: 'Motor', kort: 'Motorrijbewijs',
    pakketten: [
      { naam: 'Pakket AVB', sub: 'Dagcursus', van: '750', prijs: '675', punten: ['Hele dag rijlessen', 'Incl. CBR AVB-examen', 'Nieuwste Kawasaki Z650 ABS', 'Incl. lunch, start om 07.30 uur', 'Incl. gebruik motor op het examen'] },
      { naam: 'Pakket AVD', sub: 'Dagcursus', van: '799', prijs: '750', punten: ['Hele dag rijlessen', 'Incl. CBR AVD-examen', 'Nieuwste Kawasaki Z650 ABS', 'Incl. lunch, start om 07.30 uur', 'Incl. gebruik motor op het examen'] },
      { naam: 'Pakket All in', sub: '2 dagcursussen', van: '1549', prijs: '1399', top: true, punten: ['Incl. CBR AVB- en AVD-examen', 'Nieuwste Kawasaki Z650 ABS', 'Incl. lunch, start om 07.30 uur', 'Incl. gebruik motor op het examen'] },
    ],
    los: [['Proefles', '100 min', '€ 100'], ['Examen voertuigbeheersing AVB', '30 min', '€ 195'], ['Examen verkeersdeelneming AVD', '45 min', '€ 285'], ['Wekelijks: AVB 10 lessen incl. examen', '', '€ 695'], ['Wekelijks: AVD 10 lessen incl. examen', '', '€ 799'], ['Wekelijks: all in, incl. AVB en AVD', '', '€ 1.495'], ['Leenkleding', '', '€ 20']],
    noot: 'Liever op je eigen tempo? Er zijn ook wekelijkse pakketten.',
  },
  {
    id: 'taxi', naam: 'Taxi', kort: 'Taxipas',
    pakketten: [
      { naam: 'Taxi 1 dagcursus', sub: 'Praktijk + TVP-examen', van: '895', prijs: '850', punten: ['6 rijlessen + examen in 1 dag', '6 uur praktijkles (60 min)', 'Lesplan en begeleiding', 'Incl. huur TVP-examen', 'Ervaren instructeurs'] },
      { naam: 'Taxi 2-daagse cursus', sub: 'Praktijk + TVP-examen', prijs: '1075', punten: ['10 rijlessen + examen in 2 dagen', '10 uur praktijkles (60 min)', 'Lesplan en begeleiding', 'Incl. huur TVP-examen', 'Ervaren instructeurs'] },
      { naam: 'Compleet pakket', sub: 'Praktijk (2-daags) + theorie', prijs: '1375', top: true, punten: ['10 praktijklessen (60 min)', 'Theoriecursus incl. examen', 'Lesplan en begeleiding', 'Incl. huur TVP-examen'] },
      { naam: 'Taxi theoriecursus', sub: 'Incl. CBR-theorie-examen', van: '275', prijs: '250', punten: ['1 theoriecursus', '1 CBR-theorie-examen', 'Online oefenen, waar en wanneer je wilt'] },
    ],
    los: [['Proefles en intake', '120 min', '€ 125'], ['Taxi rijles', '60 min', '€ 75'], ['Taxi rijles', '120 min', '€ 140'], ['Taxi rijles', '180 min', '€ 185'], ['Taxi-examen TVP', '', '€ 350'], ['Autohuur TVP-examen', '', '€ 65'], ['Taxi theorie-examen', '', '€ 50'], ['Taxi theoriecursus', '', '€ 199']],
    noot: 'Voor de taxipas heb je daarna een VOG en een medische verklaring nodig.',
  },
  {
    id: 'aanhanger', naam: 'E achter B', kort: 'Aanhangerrijbewijs',
    pakketten: [
      { naam: 'Beginner', sub: '2-daagse opleiding', van: '949', prijs: '935', punten: ['10 rijlessen', 'CBR-praktijkexamen', 'Automaat auto', 'Vaste instructeur', 'Direct starten'] },
      { naam: 'Gevorderd', sub: '2-daagse opleiding', van: '849', prijs: '805', top: true, punten: ['8 rijlessen', 'CBR-praktijkexamen', 'Automaat auto', 'Vaste instructeur', 'Direct starten'] },
      { naam: 'Expert', sub: '1-daagse opleiding', van: '650', prijs: '610', punten: ['5 rijlessen', 'CBR-praktijkexamen', 'Automaat auto', 'Vaste instructeur', 'Direct starten'] },
    ],
    los: [['Proefles', '100 min', '€ 120'], ['Losse les', '50 min', '€ 65'], ['Praktijkexamen CBR', '', '€ 285']],
    noot: 'Geen theoriecertificaat nodig: je kunt direct je praktijkexamen doen.',
  },
];

// Letterlijk van Google (stand 3 oktober 2026), ingekort met "…" waar aangegeven. Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Aleksandra S.', wanneer: '2 maanden geleden', tekst: 'In 1x geslaagd, fijne begeleider. Alles duidelijk uitgelegd en vaak genoeg geoefend. Zeker een aanrader!' },
  { naam: 'Ilse B.', wanneer: '6 maanden geleden', tekst: 'Super leuke instructeur!! Top lessen en echt de wegen van het CBR echt een aanrader!!!' },
  { naam: 'Mirthe E.', wanneer: 'een jaar geleden', tekst: 'Fijne rij instructeur, heeft duidelijk aan gegeven wat er op het examen van je gevraagd word en dezelfde route gereden met je examen als tijdens het lessen.' },
  { naam: 'Sven V.', wanneer: '2 jaar geleden', tekst: 'Goede, gezellige lessen gehad. Ze zijn erg duidelijk. Serieus wanneer nodig en een grapje tussendoor maakt de les gezellig. … Met als resultaat mijn brommer rijbewijs.' },
  { naam: 'Rowena S.', wanneer: '2 jaar geleden', tekst: 'Vandaag ben ik in 1x geslaagd voor mijn brommer. … De rij instructeur was duidelijk, vriendelijk en met een grapje op zijn tijd. Ik voelde mij snel op mijn gemak …' },
  { naam: 'Meny Z.', wanneer: '3 jaar geleden', tekst: 'In één keer geslaagd, de instructeur geeft goeie uitleg waardoor ik zonder moeite ben geslaagd. Ik heb de 1 dags cursus gekozen, als je snel klaar wilt zijn is dat de beste keuze' },
];

// Plaatsen uit hun eigen lijsten (scooter-, motor-, auto- en taxipagina).
export const plaatsen = ['Ridderkerk', 'Barendrecht', 'Rotterdam', 'Dordrecht', 'Zwijndrecht', 'Papendrecht', 'Hendrik-Ido-Ambacht', 'Alblasserdam', 'Hoogvliet', 'Oud-Beijerland', 'Spijkenisse', 'Capelle aan den IJssel'];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waAanmelden = waMet('Hoi Promoot, ik wil me graag aanmelden. Wanneer kan ik starten?');
export const euro = (s: string) => '€ ' + s.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
