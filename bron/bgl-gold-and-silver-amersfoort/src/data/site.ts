// Feiten (bekeken 7 oktober 2026):
// - Google-bedrijfsprofiel "B.G.L. Gold & Silver" (Goudsmid): Kamp 13, 3811 AM Amersfoort, 06 19515335, 4,7 uit 32,
//   di-do 12:00-17:30, vr 10:00-17:30, za 10:00-17:00, zo/ma gesloten. Websiteknop: bglgoldandsilver.nl (geen DNS meer).
// - Eigen site (Jimdo, webarchief, laatste snapshot 16-10-2025): "goudsmederij/juwelier in Amersfoort", e-mail
//   b.g.l.goldandsilver@gmail.com, afspraak voor ontwerpen buiten openingstijden via WhatsApp 0619515335.
// - tijdvooramersfoort.nl/nl/locaties/4163513992/b-g-l-gold-and-silver: zelfde adres, telefoon en e-mail.
export const site = {
  naam: 'B.G.L. Gold & Silver',
  straat: 'Kamp 13',
  postcode: '3811 AM',
  plaats: 'Amersfoort',
  tel: '06 19 51 53 35',
  telHref: 'tel:+31619515335',
  wa: 'https://wa.me/31619515335',
  mail: 'b.g.l.goldandsilver@gmail.com',
  maps: 'https://www.google.com/maps/search/?api=1&query=B.G.L.+Gold+%26+Silver+Kamp+13+Amersfoort',
  route: 'https://www.google.com/maps/dir/?api=1&destination=B.G.L.+Gold+%26+Silver+Kamp+13+3811+AM+Amersfoort',
  google: { score: '4,7', aantal: 32 },
  themeColor: '#0f0d0b',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay). o/d in minuten voor het script. Bron: Google-profiel (gelijk aan eigen site).
export const tijden = [
  { dag: 2, naam: 'Dinsdag', open: '12.00', dicht: '17.30', o: 720, d: 1050 },
  { dag: 3, naam: 'Woensdag', open: '12.00', dicht: '17.30', o: 720, d: 1050 },
  { dag: 4, naam: 'Donderdag', open: '12.00', dicht: '17.30', o: 720, d: 1050 },
  { dag: 5, naam: 'Vrijdag', open: '10.00', dicht: '17.30', o: 600, d: 1050 },
  { dag: 6, naam: 'Zaterdag', open: '10.00', dicht: '17.00', o: 600, d: 1020 },
  { dag: 0, naam: 'Zondag', open: '', dicht: '', o: 0, d: 0 },
  { dag: 1, naam: 'Maandag', open: '', dicht: '', o: 0, d: 0 },
];

// Letterlijk van Google (5 sterren, stand 7 oktober 2026). Ingekort met "…". Naam: voornaam + initiaal.
export const reviews = {
  marco: { naam: 'Marco v. A.', wanneer: '2 jaar geleden', tekst: 'In september getrouwd en deze prachtige ringen laten maken bij Gold en Silver. Wij zijn er zeer blij mee en zeker met de manier hoe we zijn geholpen. Mooi ontwerp samen bedacht met de eigenaar.' },
  wendy: { naam: 'Wendy l. H.', wanneer: '3 jaar geleden', tekst: 'De trouwringen van mijn ouders gemaakt tot 1prachtige ring met mijn geboortesteen. Echt zo blij mee.' },
  florence: { naam: 'Florence v. A.', wanneer: '2 jaar geleden', tekst: '… alles naar wens van een zegelring naar een vintage collier. Nu kan het erfstuk elke dag gedragen worden, mooie aandenken aan de overgroot vader van mijn man.' },
  ageeth: { naam: 'Ageeth', wanneer: 'een jaar geleden', tekst: 'Altijd meedenken en mooi maatwerk. Omdat sieraden soms niet duur of kostbaar zijn, maar voor families wel heel dierbaar.' },
  marjolein: { naam: 'Marjolein B.', wanneer: '6 jaar geleden', tekst: 'Hier moet je echt naartoe als je iets speciaals wil. Zij maken wat jij in je hoofd hebt. Onze trouwringen zijn geweldig geworden.' },
  rina: { naam: 'Rina v. d. B.', wanneer: 'een jaar geleden', tekst: '… Er werd goed geluisterd en meegedacht! Dit resulteerde in een mooi uitgevoerde reparatie van mijn oorklimmers …' },
  david: { naam: 'David R.', wanneer: 'een jaar geleden', tekst: 'Vandaag gouden sieraden verkocht die niet meer gebruikt werden … vriendelijk en goed geholpen absoluut aan te bevelen.' },
  jasper: { naam: 'Jasper L.', wanneer: '2 jaar geleden', tekst: 'Trouwring hier precies naar wens laten maken. Heel erg blij mee! Mijn wensen werden goed begrepen en er werd fijn meegedacht.' },
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo B.G.L. Gold & Silver, ik heb een vraag.');
