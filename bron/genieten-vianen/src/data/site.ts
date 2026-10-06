// Feiten (bekeken 6 oktober 2026), ruwe bronnen in bron/:
// - Eigen site http://www.genietendl.nl/ (bron/web/site.txt, deli.txt): "Luxe delicatessen & cadeaupakketten", "Voor échte
//   genietmomenten.", "stijlvolle cadeaupakketten vol verfijnde thee, chocolade en delicatessen", verzending vast € 7,75 per
//   bestelling in Nederland, bezorgen in Vianen, Hoef en Haag en Hagestein € 3,-, info@genietendl.nl, Voorstraat 63, 4132 AN
//   Vianen, 06-21373791 (tekst), KvK 30194088. Losse thee: "ga dan naar www.theelief.nl". Rubriek "Juffen en meesterbedankjes".
// - Google-profiel (bron/google/google.txt): Delicatessenwinkel, 5,0 uit 8 reviews, 06 21373791,
//   di 10-14, wo 10-17, do 10-16, vr 10-17, za 10-16, zo/ma gesloten.
// - Facebook facebook.com/genietendl (bron/fb-about.txt, bron/fbhi/fbhi.txt): 1,1 d. volgers, tel 06 21373791, servicegebied
//   Hagestein/Vianen; posts: koffiebonen per 100 gram (Indonesië, Guatemala, 4 landen: Ethiopië, Oeganda, Brazilië, Peru,
//   € 2,90), cannoli uit Italië € 1,75 p.st., zelfgemaakte perenconfiture, seizoenstafel met pakketten tot € 15,
//   sinterklaaszakjes met naam € 2,50, pakketpunt DPD en Vinted Go, coverregel "Voor de momenten die je wilt koesteren".
// - Instagram @genietendl: "Heerlijke winkel in delicatessen & lifestyle", posts tot 5 oktober 2026.
export const site = {
  naam: 'Genieten',
  vol: 'Genieten, delicatessen & lifestyle',
  straat: 'Voorstraat 63',
  postcode: '4132 AN',
  plaats: 'Vianen',
  tel: '06 21 37 37 91',
  telHref: 'tel:+31621373791',
  wa: 'https://wa.me/31621373791',
  mail: 'info@genietendl.nl',
  kvk: '30194088',
  facebook: 'https://www.facebook.com/genietendl',
  instagram: 'https://www.instagram.com/genietendl/',
  theelief: 'https://www.theelief.nl/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Genieten+delicatessen+%26+lifestyle+Voorstraat+63+Vianen',
  google: { score: '5,0', aantal: 8 },
  themeColor: '#f7f6f3',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay). o/d in minuten. Bron: Google-profiel.
export const tijden = [
  { dag: 2, naam: 'Dinsdag', open: '10.00', dicht: '14.00', o: 600, d: 840 },
  { dag: 3, naam: 'Woensdag', open: '10.00', dicht: '17.00', o: 600, d: 1020 },
  { dag: 4, naam: 'Donderdag', open: '10.00', dicht: '16.00', o: 600, d: 960 },
  { dag: 5, naam: 'Vrijdag', open: '10.00', dicht: '17.00', o: 600, d: 1020 },
  { dag: 6, naam: 'Zaterdag', open: '10.00', dicht: '16.00', o: 600, d: 960 },
  { dag: 0, naam: 'Zondag', open: '', dicht: '', o: 0, d: 0 },
  { dag: 1, naam: 'Maandag', open: '', dicht: '', o: 0, d: 0 },
];

// Letterlijk van Google (5 sterren, stand 6 oktober 2026), alleen ingekort aan het eind.
export const reviews = [
  { naam: 'Dunja S.', wanneer: '8 maanden geleden', tekst: 'Hele leuke kadootjes, betaalbaar ook. Haal hier altijd iets voor de juffen en meesters. Lekkere dingetjes te koop en de eigenaresse is altijd heel vriendelijk en behulpzaam!' },
  { naam: 'Roxanne', wanneer: '3 maanden geleden', tekst: 'Super leuk zaakje, vriendelijke verkoper. Ik maak graag een praatje als ik mn pakketjes op ga halen. En soms neem ik nog weleens wat lekkers te snoepen mee naar huis…' },
  { naam: 'Tamira', wanneer: '3 jaar geleden', tekst: 'Hele gezellige winkel, de eigenaresse is heel vriendelijk en behulpzaam! De producten variëren constant, en zijn van hoge kwaliteit.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hoi! Ik heb een vraag voor de winkel.');
