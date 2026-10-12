// Feiten (bekeken 12 oktober 2026), bronnen in bron/:
// - Eigen site tapijt-tegels.eu (bron/site/home.txt, p_*.txt): "Open alleen op afspraak!", "Spinderspad 54, 5049 TD Tilburg",
//   "| Op het terrein van firma IVRO |", "Tel: 06-42 34 48 51", "Per pin betalen", "Kvk: 17245872",
//   "Altijd 20.000 m² aan restpartijen tapijttegels op voorraad", tegels 50x50 cm, nieuw of gebruikt, voordelen-alinea.
//   Prijzen op hun site (0,40 / 0,60) worden NIET getoond (brief: geen prijzen als actueel).
// - Google: Tapijtwinkel, 4,8 uit 195 reviews, nieuwste review van 10 okt 2026 (zeer actief). Geen openingstijden op Google.
// - Geen eigenaarsnaam in eigen bron, dus niet getoond. Geen e-mailadres op hun site (alleen een contactformulier).
// - Spinderspad 54 is een bedrijfsterrein (terrein van IVRO), dus het volledige adres mag.
export const site = {
  naam: 'Tapijt-tegels.eu',
  plaats: 'Tilburg',
  straat: 'Spinderspad 54',
  postcode: '5049 TD',
  terrein: 'Op het terrein van firma IVRO',
  kvk: '17245872',
  tel: '06 42 34 48 51',
  telHref: 'tel:+31642344851',
  wa: 'https://wa.me/31642344851',
  route: 'https://www.google.com/maps/dir/?api=1&destination=Spinderspad+54%2C+5049+TD+Tilburg',
  reviews: 'https://www.google.com/maps/place/Tapijt-tegels.eu/@51.5993647,5.0746487,17z/data=!4m6!3m5!1s0x47c695bf22285663:0xa97cb94a13bdd95b!8m2!3d51.5993647!4d5.0746487!16s%2Fg%2F1vl9qq40',
  google: { score: '4,8', aantal: 195 },
  themeColor: '#171a2e',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Letterlijk van Google (alle 5 sterren). Naam: voornaam + initiaal. "…" = ingekort.
export const reviews = [
  { naam: 'Lars v.', wanneer: '3 weken geleden', tekst: '250m2 tapijttegels gekocht voor geluidsdemping in ons kantoor. Erg goede service en advies gekregen!' },
  { naam: 'Wauter', wanneer: 'een dag geleden', tekst: 'Je kan hier zowel gebruikte als nieuwe partijen tapijt tegels van hoge kwaliteit kopen. … Inmiddels voor een derde woning hier tegels gekocht en zoals gewoonlijk zeer tevreden.' },
  { naam: 'Annemarie v.', wanneer: '8 maanden geleden', tekst: 'Ben super vriendelijk te woord gestaan en geholpen. Mr dacht goed mee en gaf een eerlijk advies. Ben blij met de tegels.' },
  { naam: 'Arie', wanneer: '11 maanden geleden', tekst: 'Snelle service, en mooie tegels voor een mooie prijs. Erg blij mee! Levert ook nog eens op factuur, wat niet overal kan. Een echte aanrader!' },
  { naam: 'Freelance Artist', wanneer: '2 jaar geleden', tekst: 'De hoeveelheid per kleur hangt af van de beschikbaarheid, maar ze zijn erg behulpzaam bij het vinden van een goede kleurencombinatie indien nodig, en er is meer dan genoeg keuze om patronen te leggen.' },
  { naam: 'Ben N.', wanneer: 'een jaar geleden', tekst: 'Aardige man, kon bellen en bleef tot 19u wachten zodat we konden uitzoeken. Behulpzaam en geduldig, en de PRIJS!! … heeft in een loods allerlei soorten staan. Leuke kleuren ook!' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Tapijt-tegels.eu, ik heb een vraag over tapijttegels.');
