// Feiten uit het Google-bedrijfsprofiel "Maso Hair Salon/Barbershop Ridderkerk" (bekeken 2 oktober 2026): categorie Barbier,
// Dillenburgplein 4, 2983 CC Ridderkerk, 06 47317747, 4,7 uit 29 reviews, openingstijden ma-za 9:30-19:00, vr 9:30-20:00,
// zo gesloten. Website op Google: alleen een bedrijvengids (nlcompanies.org). Instagram @maso_hair_salon_ridderkerk noemt
// dezelfde tijden en hetzelfde nummer. Geen prijslijst, e-mail of KvK gepubliceerd. Alle 29 reviews: bron/google-reviews.txt.
export const site = {
  naam: 'Maso Hair Salon & Barbershop',
  straat: 'Dillenburgplein 4',
  postcode: '2983 CC',
  plaats: 'Ridderkerk',
  tel: '06 47 31 77 47',
  telHref: 'tel:+31647317747',
  wa: 'https://wa.me/31647317747',
  instagram: 'https://www.instagram.com/maso_hair_salon_ridderkerk/',
  insta: '@maso_hair_salon_ridderkerk',
  maps: 'https://www.google.com/maps/search/?api=1&query=Maso+Hair+Salon+Barbershop+Dillenburgplein+4+Ridderkerk',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Maso+Hair+Salon+Barbershop+Ridderkerk',
  google: { score: '4,7', aantal: 29 },
  themeColor: '#0a0f1c',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay).
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '9.30', dicht: '19.00' },
  { dag: 2, naam: 'Dinsdag', open: '9.30', dicht: '19.00' },
  { dag: 3, naam: 'Woensdag', open: '9.30', dicht: '19.00' },
  { dag: 4, naam: 'Donderdag', open: '9.30', dicht: '19.00' },
  { dag: 5, naam: 'Vrijdag', open: '9.30', dicht: '20.00' },
  { dag: 6, naam: 'Zaterdag', open: '9.30', dicht: '19.00' },
  { dag: 0, naam: 'Zondag', open: '', dicht: '' },
];

// Diensten: Google-categorie Barbier, "Aangevraagde stijl: Opscheren" en de Google-labels "Knippen met schaar" en
// "Haarstyling" bij reviews, reviews over kinderen en over nek- en rughaar, en de kapsels op hun eigen profielfoto's
// (fades, tapers, lijntjes). Geen prijzen: die zijn niet gepubliceerd.
export const chips = ['Knippen', 'Fade', 'Taper', 'Lijntjes', 'Opscheren', 'Haarstyling', 'Kinderen', 'Nek en contouren'];

// Letterlijk van Google (stand 2 oktober 2026), ingekort met "…" waar aangegeven. Naam: voornaam + initiaal of
// de schermnaam zoals op Google.
export const reviews = [
  { naam: 'Daniëlle W.', wanneer: 'een jaar geleden', tekst: 'Nette en mooie zaak! Bij binnenkomst op zaterdagmiddag werden we meteen netjes te woord gestaan en werd wat te drinken aangeboden voor tijdens het wachten. … We zijn hartstikke tevreden met de geleverde knipbeurt en de service eromheen. …' },
  { naam: 'Ilonka P.', wanneer: 'een jaar geleden', tekst: 'Mijn zoon eindelijk eens echt goed geknipt en geschoren. Al zoveel kappers gehad. Hij was echt met hem bezig. Mooie zaak, goed personeel. …' },
  { naam: 'Yazan', wanneer: 'een jaar geleden', tekst: 'zeer professioneel, gaf me de tijd, advies en een echt goede knipbeurt, ik kom zeker terug' },
  { naam: 'A.R. K.', wanneer: 'een jaar geleden', tekst: '… binnen de kortste keren, zag mijn kapsel er weer NETJES uit. … Ook mijn nek en rug haren werden verwijderd. … Opmerkelijk is jonge leeftijd van deze hard werkende jonge ondernemer. Respect.' },
  { naam: 'Molotov', wanneer: '5 maanden geleden', tekst: 'Super gezellige kapsalon, familie vriendelijk, … Hoge kwaliteit voor een zachte prijs.' },
  { naam: 'Joey M.', wanneer: 'een jaar geleden', tekst: 'Beste kapper die er is ben je in de buurt ga zeker bij hem langs mooie schone zaak mijn vaste kapper' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hoi Maso, wanneer kan ik langskomen om te knippen?');
export const waDruk = waMet('Hoi Maso, is het nu druk? Ik wil vandaag graag langskomen om te knippen.');
