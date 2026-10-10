// Feiten (bekeken 10 oktober 2026), bronnen en screenshots in bron/:
// - Google: "Peet's v2 Service", Motorzaak, 4,9 uit 44 reviews. 32-A, Bovendijk, 2295 RZ Kwintsheul (bedrijventerrein).
//   06 54271075. Website-knop = facebook.com/peet.witteveen (geen eigen site; Bing Maps idem). Tijden op Google: "24 uur
//   geopend" (onwaarschijnlijk, daarom NIET getoond). Thema's: kennis 9, vakman 6, prijs 4, onderhoud 3, ontsteking, neus,
//   zaterdag, kwaliteit, respect. Foto's: alleen van klanten (Martin V. jul 2026, leo keizer mrt 2026), in hun werkplaats.
// - Facebook "Peets V Twin" (facebook.com/peet.witteveen): "Heeft gewerkt als Eigenaar bij Eigen bedrijf Peet's V2 service
//   sinds 1992". Foto's: werkplaats vol Harleys onder het bord "PEET'S HD SERVICE / ... SERVICE FOR HARLEY DAVIDSON"
//   (6 mrt 2023), logo met rode adelaar (6 jul 2026).
// Eigenaarsnaam: alleen "Peet" (staat in de bedrijfsnaam en op Facebook). Merken: alleen Harley-Davidson (bord + reviews).
export const site = {
  naam: "Peet's V2 Service",
  plaats: 'Kwintsheul',
  straat: 'Bovendijk 32-A',
  postcode: '2295 RZ Kwintsheul',
  tel: '06 54 27 10 75',
  telHref: 'tel:+31654271075',
  wa: 'https://wa.me/31654271075',
  facebook: 'https://www.facebook.com/peet.witteveen',
  route: "https://www.google.com/maps/dir/?api=1&destination=Peet's+v2+Service%2C+Bovendijk+32-A%2C+2295+RZ+Kwintsheul",
  reviews: 'https://www.google.com/maps/place/Peet%27s+v2+Service/@52.0150315,4.2606652,17z/data=!4m6!3m5!1s0x47c5b3e9bf367fa9:0xcc3e9c6d59d30a53!8m2!3d52.0150315!4d4.2606652!16s%2Fg%2F1tjymx6l',
  google: { score: '4,9', aantal: 44 },
  sinds: 1992,
  themeColor: '#0f1011',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Letterlijk van Google (5 sterren), ingekort met "…". Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Fred T.', wanneer: '7 maanden geleden', tekst: 'Peet is een echte vakman, doet het onderhoud aan mijn fietsen al meer dan 30 jaar. De Dyna die ik onlangs kocht en eigenlijk best een verborgen gebrekenbak bleek heeft hij perfect in orde gemaakt, geen consessies, beter dan nieuw eigenlijk.' },
  { naam: 'Mike S.', wanneer: '9 maanden geleden', tekst: 'Mijn Harley had een oliedruk probleem … Maarrrrr door de kennis van deze vakman Peet draait mijn Harley weer als vanouds' },
  { naam: 'Leo K.', wanneer: '6 maanden geleden', tekst: 'Goede kennis van zaken en duidelijk passie voor Harley-Davidson motoren. Peet is professioneel, betrouwbaar en je merkt dat hij echt weet waar die het over heeft. … Ook altijd een bakkie!' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hoi Peet, ik heb een vraag over mijn motor.');
