// Feiten (bekeken 15 oktober 2026), bronnen in bron/:
// - Eigen site mdlstoffering.nl (WordPress, "© 2015 MDL Stoffering", alleen http; alle pagina's in bron/site/*.txt, beelden bron/site/img):
//   home: Woningstoffering "Laminaat, tapijt, vinyl, PVC, marmoleum, karpetten op maat en entree-systemen"; Projectstoffering
//   "Uw project kunnen wij tot in de puntjes verzorgen, hierbij kunt u denken aan opdrachten voor aannemers en VVE's."; Raamdecoratie
//   "Rolgordijnen, duo rolgordijnen, plissé en duette rolgordijnen, luxaflex, houten jaloezieën en lamellen"; merken per groep.
//   over-ons: familie De Laat al meer dan 20 jaar actief; altijd van tevoren kijken en meten, vrijblijvende offerte; visie; Mikel de Laat,
//   eigenaar & stoffeerder, op zijn 18e de zaak van zijn vader overgenomen. contact: De Wetering 13, 4906 CT Oosterhout, bezoek alleen op
//   afspraak, 06 10 90 52 10, info@mdlstoffering.nl. Projectpagina's (werk-alle/...) geven allemaal een serverfout (500).
// - BAG: De Wetering 13 is een bedrijfsunit (industriefunctie, 127 m2), dus adres mag getoond worden.
// - Google: Vloerenwinkel, 4,3 uit 18 (15x5, 3x1). Score < 4,4: NIET tonen. Geen openingstijden op Google. Beperkte weergave: 5 reviews leesbaar.
export const site = {
  naam: 'MDL stoffering',
  plaats: 'Oosterhout',
  straat: 'De Wetering 13',
  postcode: '4906 CT',
  tel: '06 10 90 52 10',
  telHref: 'tel:+31610905210',
  wa: 'https://wa.me/31610905210',
  mail: 'info@mdlstoffering.nl',
  fb: 'https://www.facebook.com/pages/MDL-Stoffering/260927847435073',
  reviews: 'https://www.google.com/maps/place/MDL+stoffering/@51.6527878,4.8454027,17z/data=!4m6!3m5!1s0x47c69eb37b1eacb3:0xb0e95b945fcc4b26!8m2!3d51.6527878!4d4.8454027!16s%2Fg%2F11g8_4bvhj',
  route: 'https://www.google.com/maps/dir/?api=1&destination=De+Wetering+13+4906+CT+Oosterhout',
  themeColor: '#1b1916',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Letterlijk van Google (alle 5 sterren), ingekort met "…". Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Sven de R.', wanneer: '8 maanden geleden', tekst: 'Mikel heeft 2 trappen gerenoveerd. Eerst de juiste stof uitgekozen bij hem op de zaak. Eerlijke prijs gekregen en daarna een afspraak gemaakt. Vervolgens alles netjes op tijd uitgevoerd. Wij zijn zeer tevreden met het resultaat!!' },
  { naam: 'Paul W.', wanneer: 'een maand geleden', tekst: 'MDL heeft bij ons een forbo vinylvloer gelegd. We zijn er zeer tevreden over. Bedankt voor het prettige contact. We genieten van de vloer.' },
  { naam: 'Eric van G.', wanneer: 'een jaar geleden', tekst: 'MDL heeft de aangekochte PVC vloer bij ons prima gelegd. Ondanks de warmte 4 personen ingezet en hard gewerkt waardoor er deze in 2 dagen in lag. Goede en prettige communicatie en afspraken zijn nagekomen.' },
  { naam: 'Fleur S.', wanneer: '2 jaar geleden', tekst: 'Onze vloer is eerst door een andere partij gelegd, helaas was het resultaat niet best. Waardoor MDL stoffering een tweede keer is langsgekomen, de gehele vloer eruit heeft gehaald en opnieuw heeft gelegd. … Nogmaals dank Mikel voor de snelle service en het mooie resultaat.' },
];
// Lange review met foto's van de klant (Mathijs B., Google, 2 jaar geleden, foto's feb 2024).
export const reviewGroot = {
  naam: 'Mathijs B.',
  wanneer: '2 jaar geleden',
  tekst: 'Het proces van begin tot eind was vlekkeloos. Mikel en zijn mannen hebben met hun expertise en vakmanschap gezorgd voor een perfecte installatie van onze vloer. Van het voorbereidende werk tot het uiteindelijke leggen.',
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Mikel, ik wil graag een afspraak om te laten kijken en meten.');
