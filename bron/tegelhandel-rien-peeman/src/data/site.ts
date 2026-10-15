// Feiten (bekeken 15 oktober 2026), bronnen in bron/:
// - Eigen site tegelhandelrienpeeman.com bestaat niet meer (DNS: NXDOMAIN; april 2025 al "Domeinnaam geblokkeerd" bij TransIP,
//   zie bron/archief/home-geblokkeerd-2025-04.html). Teksten uit het webarchief (bron/archief/*.txt, captures 2020-2025):
//   home: "ouderwets degelijk", "Al sinds 1983 ... het leveren en aanbrengen van wand- en vloertegels en natuursteen",
//   "Ook het toepassen van vloerverwarming behoort tot de mogelijkheden", regio Zuid-Holland, Zeeland en ver daarbuiten.
//   over-ons: slogan "groot in assortiment en klein in prijs", Rien en Marja Peeman, sinds 1983, ruime showroom met "alle
//   bekende tegelmerken uit binnen- en buitenland", zes sterke punten. merken: "voor ieder budget een passende oplossing",
//   "Maak ons uw wensen en uw budget kenbaar...", "Samen vinden we de mooiste tegels voor uw budget", merk bestellen.
//   (Prijzen per m2 en de oude adres/tijden uit het archief zijn tijdgebonden en worden NIET getoond.)
//   E-mail info@tegelhandelpeeman.nl uit archief; domein tegelhandelpeeman.nl heeft nog actieve MX.
// - Google (bron/google): Tegelwinkel, 4,7 uit 48 reviews, nieuwste review 2 maanden oud met reactie eigenaar.
//   Adres op Google alleen "3241 DB Middelharnis", tel 06 15551648. Tijden volgens Google (bron/google/uren.json).
//   Beperkte weergave: 5 reviews met naam leesbaar + 3 citaten uit het reviewoverzicht.
export const site = {
  naam: 'Tegelhandel Rien Peeman',
  kort: 'Tegelhandel Peeman',
  plaats: 'Middelharnis',
  postcode: '3241 DB',
  tel: '06 15 55 16 48',
  telHref: 'tel:+31615551648',
  wa: 'https://wa.me/31615551648',
  mail: 'info@tegelhandelpeeman.nl',
  reviews: 'https://www.google.com/maps/place/Tegelhandel+Rien+Peeman/@51.7610537,4.1560688,17z/data=!4m6!3m5!1s0x47c44548d7e263bb:0x3b79fb5ea312a1eb!8m2!3d51.7610537!4d4.1560688!16s%2Fg%2F1tdkld3l',
  route: 'https://www.google.com/maps/dir/?api=1&destination=Tegelhandel+Rien+Peeman%2C+3241+DB+Middelharnis',
  google: { score: '4,7', aantal: 48 },
  themeColor: '#1f1c1a',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Maandag = 1 ... zondag = 0. Bron: Google-profiel (15-10-2026).
export const tijden: { dag: string; nr: number; open: [number, number] | null; tekst: string }[] = [
  { dag: 'Maandag', nr: 1, open: [9.5, 16.5], tekst: '09:30 tot 16:30' },
  { dag: 'Dinsdag', nr: 2, open: [9.5, 16.5], tekst: '09:30 tot 16:30' },
  { dag: 'Woensdag', nr: 3, open: [9.5, 16.5], tekst: '09:30 tot 16:30' },
  { dag: 'Donderdag', nr: 4, open: [9.5, 16.5], tekst: '09:30 tot 16:30' },
  { dag: 'Vrijdag', nr: 5, open: [9.5, 16.5], tekst: '09:30 tot 16:30' },
  { dag: 'Zaterdag', nr: 6, open: [9, 13], tekst: '09:00 tot 13:00' },
  { dag: 'Zondag', nr: 0, open: null, tekst: 'Gesloten' },
];

// Letterlijk van Google (5 sterren), ingekort met "…". Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Tom B.', tekst: 'Weer erg fijn geholpen! Met altijd goed advies.' },
  { naam: 'Annemarie V.', tekst: 'Vandaag een bezoek gebracht aan deze zaak. We waren verrast door de mooie ruimte en prachtige tegels. Wat een keuze!! Zeer vriendelijk en vakkundig geholpen …' },
  { naam: 'Peter D.', tekst: 'Een winkel waarbij de klant super belangrijk is. Tijd voor ze neemt, persoonlijk advies geeft en een zeer hoge kennis en kunde hebben, en dit ook deelt.' },
  { naam: 'Wim C.', tekst: 'Peeman is een bedrijf met veel keus en zeer ervaren en vriendelijke mensen. Afspraken worden nagekomen en de werkzaamheden worden door uiterst vakbekwame mensen uitgevoerd.' },
  { naam: 'Angela V.', tekst: 'Zoekende naar een tegel voor onze badkamer vanwege lekkage, stapte we binnen in de recentelijk verbouwde winkel van Peeman, zeer mooi! Wat werden wij verrast met een ontzettend open en aardig ontvangst …' },
];
// Citaten uit het reviewoverzicht op Google (zonder naam getoond door Google).
export const citaten = [
  'Ruime keus aan vloer en wand tegels, vriendelijk geholpen en goed advies.',
  'Familie bedrijf met gedegen kennis van zaken en een open en eerlijk verhaal!!',
  'Super mooie zaak, wat een keuze',
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Tegelhandel Peeman, ik heb een vraag over tegels.');
