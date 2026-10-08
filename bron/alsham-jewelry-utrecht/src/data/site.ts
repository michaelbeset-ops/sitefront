// Feiten (bekeken 8 oktober 2026), ruwe bronnen in ../../bron:
// - Google-bedrijfsprofiel "Alsham Jewelry" (Juwelier): Zamenhofdreef 41, 3562 JV Utrecht, "Gevestigd in: Overvecht Centrum",
//   "Gratis parkeren", "Winkelbezoek mogelijk", "Ophalen in de winkel", 06 21800700, 4,6 uit 1.289 reviews.
//   Openingstijden: ma t/m za 11:00 tot 18:00, zo 11:00 tot 17:00. Websiteknop = m.latest.facebook.com (Arabische Facebookpagina).
//   Fotocategorieen op Google: Binnen, Ring, Halsketting, Schakelketting.
// - Eigen Facebookpagina facebook.com/Alshamjewelry "الذهب السوري في هولندا - مصوغات الشام" (218 d. volgers, bericht van gisteren):
//   "ذهب سوري عيار21 مضمون ومكفول" (Syrisch goud 21 karaat, gegarandeerd), "ذهب تصميد" (goud om te sparen),
//   "تشكيلة واسعة تلبي جميع الاذواق" (ruime keuze voor elke smaak), "يوجد خدمة الشحن بلبريد المضمون" (verzending per aangetekende post),
//   "المحل فاتح كل ايام الاسبوع" (elke dag van de week open), tweede filiaal Limbecker Platz 1a, 45127 Essen (Duitsland).
//   Hashtags o.a. زفاف (bruiloft), خطوبة (verloving), خواتم (ringen), عيد_ميلاد_هدية (verjaardagscadeau), سبائك (goudbaren).
//   Dagelijkse goudprijsposts (24, 21 en 18 karaat): prijzen NIET overgenomen.
// - Geen eigen website gevonden (zoekresultaten, alshamjewelry.nl/.com bestaan niet).
export const site = {
  naam: 'Alsham Jewelry',
  arabisch: 'مصوغات الشام',
  plaats: 'Utrecht',
  wijk: 'Overvecht',
  straat: 'Zamenhofdreef 41',
  postcode: '3562 JV',
  centrum: 'Winkelcentrum Overvecht',
  tel: '06 21 80 07 00',
  telHref: 'tel:+31621800700',
  wa: 'https://wa.me/31621800700',
  facebook: 'https://www.facebook.com/Alshamjewelry/',
  route: 'https://www.google.com/maps/dir/?api=1&destination=Alsham+Jewelry+Zamenhofdreef+41+Utrecht',
  google: { score: '4,6', aantal: '1.289', url: 'https://www.google.com/maps/search/?api=1&query=Alsham+Jewelry+Zamenhofdreef+41+Utrecht' },
  essen: 'Limbecker Platz 1a, 45127 Essen',
  themeColor: '#0c0d0d',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// 0 = zondag ... 6 = zaterdag. Van Google.
export const tijden: { dag: string; kort: string; open: string; dicht: string }[] = [
  { dag: 'Zondag', kort: 'zo', open: '11:00', dicht: '17:00' },
  { dag: 'Maandag', kort: 'ma', open: '11:00', dicht: '18:00' },
  { dag: 'Dinsdag', kort: 'di', open: '11:00', dicht: '18:00' },
  { dag: 'Woensdag', kort: 'wo', open: '11:00', dicht: '18:00' },
  { dag: 'Donderdag', kort: 'do', open: '11:00', dicht: '18:00' },
  { dag: 'Vrijdag', kort: 'vr', open: '11:00', dicht: '18:00' },
  { dag: 'Zaterdag', kort: 'za', open: '11:00', dicht: '18:00' },
];

// Wat er in de vitrines ligt: Google-fotocategorieen + wat op hun eigen foto's en in hun hashtags staat.
export const stukken = ['een halsketting', 'een schakelketting', 'een ring', 'een armband', 'oorbellen', 'een complete set', 'goud om te sparen'];
export const voor = ['voor mezelf', 'als cadeau', 'voor een verloving', 'voor een bruiloft', 'voor een verjaardag'];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Alsham Jewelry, ik heb een vraag.');
export const waPrijs = waMet('Hallo Alsham Jewelry, wat is vandaag de prijs per gram voor 21 karaat?');
