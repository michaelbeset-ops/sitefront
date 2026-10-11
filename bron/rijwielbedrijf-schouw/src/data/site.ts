// Feiten (bekeken 11 oktober 2026), bronnen in bron/:
// - Google-profiel "Rijwielbedrijf A. Schouw", Winkel, Spoorlaan 143, 4872 XM Etten-Leur, 06 22742738, 4,9 uit 70 reviews
//   (66x 5 sterren, 4x 4 sterren), "Website toevoegen" = geen website. Tijden: ma 9-18, wo en do 9-20, overige dagen gesloten.
//   Nieuwste review "een week geleden" (bron/google/reviews.json). Onderwerp-chip "vakman 7".
// - Eén foto "van eigenaar" op Google: schermafbeelding BN DeStem 5-2-2015 "Mecanicien Antoon Schouw uit Etten-Leur actief
//   tijdens WK veldrijden" (KNWU-mecanicien, WK cyclocross Tabor). Alleen als feit gebruikt, de foto zelf niet (rechten krant).
// - Ridley dealerzoeker: "Rijwielbedrijf A. Schouw V.O.F., Officiële Ridley Dealer", website "http://No website",
//   antoon.schouw@casema.nl, +31765010388. Winkelvoorraad o.a. Fenix, Falcn, Noah, Helium (race), Kanzo, Grifn, Astr (gravel),
//   Ignite (mountainbike), E-Noah (e-race). Geen voorraad of prijzen overgenomen (tijdgebonden).
export const site = {
  naam: 'Rijwielbedrijf A. Schouw',
  kort: 'A. Schouw',
  eigenaar: 'Antoon Schouw',
  plaats: 'Etten-Leur',
  straat: 'Spoorlaan 143',
  postcode: '4872 XM',
  tel: '06 22 74 27 38',
  telHref: 'tel:+31622742738',
  vast: '076 501 03 88',
  vastHref: 'tel:+31765010388',
  wa: 'https://wa.me/31622742738',
  mail: 'antoon.schouw@casema.nl',
  route: 'https://www.google.com/maps/dir/?api=1&destination=Spoorlaan+143%2C+4872+XM+Etten-Leur',
  reviews: 'https://www.google.com/maps/place/Rijwielbedrijf+A.+Schouw/@51.57622,4.642357,17z/data=!4m6!3m5!1s0x47c41f45e125216d:0xfba7bf35d3885153!8m2!3d51.57622!4d4.642357!16s%2Fg%2F1tfw2621',
  ridley: 'https://www.ridley-bikes.com/nl_NL/dealers/CUS4952?externalid=1',
  google: { score: '4,9', aantal: 70 },
  themeColor: '#161412',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Openingstijden volgens Google (index 0 = zondag). null = gesloten. [open, dicht] in uren.
export const tijden: { dag: string; open: number | null; dicht: number | null }[] = [
  { dag: 'Zondag', open: null, dicht: null },
  { dag: 'Maandag', open: 9, dicht: 18 },
  { dag: 'Dinsdag', open: null, dicht: null },
  { dag: 'Woensdag', open: 9, dicht: 20 },
  { dag: 'Donderdag', open: 9, dicht: 20 },
  { dag: 'Vrijdag', open: null, dicht: null },
  { dag: 'Zaterdag', open: null, dicht: null },
];
export const uur = (h: number) => `${String(h).padStart(2, '0')}:00`;

// Letterlijk van Google (5 sterren). Naam: voornaam + initiaal. Ingekort met "…".
export const reviews = [
  { naam: 'Bart d.', tekst: 'Altijd een luisterend oor en geeft een uitstekend advies op maat bij aanschaf van een nieuw rijwiel. … Of je nu komt met een professionele racefiets of een (elektrische) fiets, overal heeft hij een oplossing voor.' },
  { naam: 'Rob v.', tekst: 'Vandaag langs geweest om een nieuw binnenbandje erop te laten leggen (had er zelf 2 opgeblazen). Hij heeft deskundig laten zien hoe het wel moet. … Beter kan gewoon niet!' },
  { naam: 'Fabian v.', tekst: 'Hele nette en professionele service. Twee keer mijn fiets gebracht wat binnen no-time verholpen was, puur door echt vakmanschap en ervaring. Een echte aanrader!' },
  { naam: 'P. H.', tekst: "Zeer snelle service s'morgen gebracht s'avonds kon ik de fiets weer ophalen complete service beurt gehad TOP" },
  { naam: 'Djoery K.', tekst: 'Zeer goed geholpen! Snel en vakkundig met geduld om alles helder uit te leggen. Fijne ervaring.' },
  { naam: 'Marius R.', tekst: 'Vriendelijk behulpzaam en verstand van zaken zeker een aanrader om een fiets te kopen of te laten onderhouden' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Antoon, ik heb een vraag over mijn fiets.');
