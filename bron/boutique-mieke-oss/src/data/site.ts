// Feiten (bekeken 7 oktober 2026), ruwe bronnen in ../../bron:
// - Google-bedrijfsprofiel "Boutique Mieke" (Damesmode): Kerkstraat 10, 5341 BK Oss, 06 42014140, 4,9 uit 14 reviews.
//   Tijden: di 10:00-17:00, wo t/m za 10:30-17:00, zo en ma gesloten. Websiteknop: nlmapguide.org (stuurt door naar nlmapnew.com).
// - Instagram @boutiquemieke: "Hippe en trendy dameskleding. Wekelijks nieuwe collectie kom snel een kijkje nemen in onze
//   boutique. De koffie staat klaar!" 3.808 berichten. Post 30-09-2026: "Al 5 jaar mogen wij jullie verwelkomen, inspireren
//   en laten stralen." Posts noemen maten ("draagbaar tm xl", "s tm l") en #betaalbaremode.
// - Facebook "Boutique Mieke" (profile.php?id=100070841650571): intro "Fashion, Jewels & Musthaves", miekevanoss@gmail.com,
//   eigen antwoord van "Mieke van Oss" onder de 5-jaarpost. Post over aangepaste tijden: "Mocht u iets willen reserveren kan
//   dat natuurlijk altijd." (Op Facebook staat ook 06 43241284; we gebruiken het nummer van Google en de opdracht.)
// - Opening: Kerkstraat 10 sinds zaterdag 2 oktober 2021 (Het Osse Centrum op Facebook 22-10-2021, Kliknieuws Oss 5-10-2021).
export const site = {
  naam: 'Boutique Mieke',
  vol: 'Boutique Mieke Oss',
  straat: 'Kerkstraat 10',
  postcode: '5341 BK',
  plaats: 'Oss',
  tel: '06 42 01 41 40',
  telHref: 'tel:+31642014140',
  wa: 'https://wa.me/31642014140',
  mail: 'miekevanoss@gmail.com',
  instagram: 'https://www.instagram.com/boutiquemieke/',
  facebook: 'https://www.facebook.com/profile.php?id=100070841650571',
  maps: 'https://www.google.com/maps/search/?api=1&query=Boutique+Mieke+Kerkstraat+10+Oss',
  google: { score: '4,9', aantal: 14 },
  themeColor: '#151515',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay). o/d in minuten voor het script. Bron: Google-profiel.
export const tijden = [
  { dag: 2, naam: 'Dinsdag', open: '10.00', dicht: '17.00', o: 600, d: 1020 },
  { dag: 3, naam: 'Woensdag', open: '10.30', dicht: '17.00', o: 630, d: 1020 },
  { dag: 4, naam: 'Donderdag', open: '10.30', dicht: '17.00', o: 630, d: 1020 },
  { dag: 5, naam: 'Vrijdag', open: '10.30', dicht: '17.00', o: 630, d: 1020 },
  { dag: 6, naam: 'Zaterdag', open: '10.30', dicht: '17.00', o: 630, d: 1020 },
  { dag: 0, naam: 'Zondag', open: '', dicht: '', o: 0, d: 0 },
  { dag: 1, naam: 'Maandag', open: '', dicht: '', o: 0, d: 0 },
];

// Letterlijk van Google (5 sterren, stand 7 oktober 2026). Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Chantal H.', tekst: 'Fijne kleding winkel iedere week nieuwe collectie. Fijne verkoopsters ze nemen echt de tijd voor je betreft passen en ze zijn eerlijk als iets ook niet bij de past. …' },
  { naam: 'Sonja G.', tekst: '… Leuke collectie, kopje koffie erbij en gezelligheid!!! Ik zeg doen!!!' },
  { naam: 'Sylvia S.', tekst: 'De leukste winkel van Oss. Leuke collectie, regelmatig wisselende collectie.' },
  { naam: 'Ingrid H.', tekst: 'Winkel met het leukste ontvangst. Mooie kleding, goede service' },
  { naam: 'Jet S.', tekst: 'Hele fijne winkel, fantastische hulp! Leuke prijzen en goed advies! …' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hoi Boutique Mieke, ik heb een vraag.');
