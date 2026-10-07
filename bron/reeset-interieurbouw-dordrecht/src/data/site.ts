// Feiten (bekeken 7 oktober 2026), bronnen in bron/:
// - reeset-interieurbouw.nl (Home, Wat doen wij, Wie zijn wij, Contact; bron/web/*.html + *.txt):
//   Scheepmakersstraat 2, 3334 KG Zwijndrecht, info@reeset-interieurbouw.nl, 078 737 04 93, KvK 83332367.
//   WhatsApp-knop "Kunnen we je helpen?" op hun eigen site (plugin, nummer 31681429644, standaardnaam "John Doe").
//   Lijsten "Maatwerk particulier", "Maatwerk zakelijk", "Onze diensten" in de footer. "Keertje koffie doen om jullie wensen te bespreken?"
//   Specialisaties: Particuliere interieurs, Zakelijke ruimtes, Gemeente en overheid.
// - Instagram @reesetinterieurbouw (1.265 volgers, 422 berichten, laatste post 17-09-2026). Bio: "Interieurs ontworpen rondom hoe
//   jij leeft." / "Ontwerp · Kennis · Connecties · Regie" / "Van eerste idee tot gerealiseerd interieur." / "Dordrecht".
//   Post 29-07-2026 (Steven Schouten): nieuwe ontwerpstudio aan de Scheepmakerstraat in Zwijndrecht; sinds ruim anderhalf jaar
//   "richt Reeset zich volledig op ontwerp, advies en projectbegeleiding. De realisatie gebeurt samen met gespecialiseerde
//   interieurbouwers". "Het beste ontwerp verdient de beste maker." Post 06-08-2026: "Niet als producent. Niet als verkoper.
//   Maar als onafhankelijk ontwerper en projectbegeleider." Post 17-09-2026: "Luisteren, begrijpen wat zij nodig hebben ...",
//   "van het eerste gesprek en het ontwerp tot de afstemming en regie tijdens de uitvoering".
// - Google: Reeset interieurbouw bv, 5,0 uit 7, Scheepmakersstraat 2 Zwijndrecht, 078 737 0493, ma-vr 09:00-17:00.
export const site = {
  naam: 'Reeset',
  studio: 'Interieur Design Studio',
  bv: 'Reeset Interieurbouw B.V.',
  eigenaar: 'Steven Schouten',
  straat: 'Scheepmakersstraat 2',
  postcode: '3334 KG',
  plaats: 'Zwijndrecht',
  tel: '078 737 04 93',
  telHref: 'tel:+31787370493',
  mobiel: '06 81 42 96 44',
  wa: 'https://wa.me/31681429644',
  mail: 'info@reeset-interieurbouw.nl',
  kvk: '83332367',
  instagram: 'https://www.instagram.com/reesetinterieurbouw/',
  linkedin: 'https://www.linkedin.com/in/steven-schouten-2821b65a/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Reeset+interieurbouw+bv+Scheepmakersstraat+2+Zwijndrecht',
  reviews: 'https://www.google.com/maps/place/Reeset+interieurbouw+bv/@51.8105988,4.596731,17z/data=!4m8!3m7!1s0x47c42f43f8ce75e1:0xdddd17f9d5a9bef7!8m2!3d51.8105988!4d4.596731!9m1!1b1',
  google: { score: '5,0', aantal: 7 },
  themeColor: '#1b1b19',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

export const waMet = (t: string) => `${site.wa}?text=${encodeURIComponent(t)}`;
export const waHoi = waMet('Hallo Steven, ik ben benieuwd wat Reeset voor mijn interieur kan betekenen.');

// Tijden volgens Google (0 = zondag).
export const tijden: [string, string | null][] = [
  ['Zondag', null], ['Maandag', '09.00 - 17.00'], ['Dinsdag', '09.00 - 17.00'], ['Woensdag', '09.00 - 17.00'],
  ['Donderdag', '09.00 - 17.00'], ['Vrijdag', '09.00 - 17.00'], ['Zaterdag', null],
];

// Letterlijk uit de footer van hun site.
export const particulier = ['Audio & Tv meubels', 'Bed-achterwanden', 'Bergkasten', 'Cinewalls', 'Deuren', 'Dressoirs', 'Garderobekasten', 'Haardmeubels', 'Keukens & bijkeukens', 'Roomdividers', 'Thuiskantoor', 'TV meubels', 'Vloeren', 'Walkin closets', 'Wandbekleding', 'Wasruimtes', 'Wastafels'];
export const zakelijk = ["Balie's", 'Directie & vergaderruimtes', "Hotel & Spa's", 'Restaurants & Bars', 'Kantines', 'Kantoorinrichting', 'Ontvangstruimtes', 'Kapperszaken', "Pantry's", 'Winkelinrichting'];
export const diensten = ['3D Visualisatie', 'Interieur ontwerp', 'Lichtplan advies', 'Materiaal & Kleuradvies', 'Meubel ontwerp'];

// Google-reviews, letterlijk (beperkte weergave, 7 oktober 2026).
export const reviews = {
  yolanda: { naam: 'Yolanda R.', tekst: 'Top service en kwaliteit! GEWELDIG en super blij met de betrokkenheid en het meedenken.' },
  car: { naam: 'Car Guy', tekst: 'Onverwachts binnengelopen vanmiddag. Top geholpen met het bovenblad van mijn kastje dat na wat schade wat aanpassing nodig had.' },
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
