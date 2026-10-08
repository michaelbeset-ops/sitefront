// Feiten (bekeken 8 oktober 2026), ruwe bronnen in ../../bron:
// - Eigen site design4allez.nl (CCV-webwinkel; crawl in bron/web/crawl.txt):
//   contactpagina: "Magazijn/showroom (alleen op afspraak): Neonweg 191, 1362 AG Almere", "Tel: 06-40511889 (Vincent)",
//   info@design4allez.nl, KvK 59002255. "In principe is de showroom van maandag tot en met zaterdag geopend tussen 10:30 uur
//   en 17:00 uur. Maar het is wel aan te raden om van tevoren even een dag en tijdstip af te spreken, aangezien wij ook nog
//   weleens buiten de deur zijn."
//   Categorieen: elektrische sfeerhaarden (wand, inbouw), bio-ethanol (wand, tafel, vrijstaand), accessoires, BBQ's, ELRO.
//   Productteksten inbouwhaard (glasplaat ca. 2 cm naar achteren, verborgen roosters, geen gaten in cinewall, geen
//   afvoerkanaal, geen brandwerende platen) en specificaties (3 vlamkleuren, bodem 10 kleuren, 750/1500 W, afstandsbediening).
// - Google-profiel: 4,8 uit 16 reviews, Neonweg 191, 06 40511889. Eigenaar ondertekent reactie met "Vincent, Design4AlleZ".
export const site = {
  naam: 'Design4AlleZ',
  eigenaar: 'Vincent',
  straat: 'Neonweg 191',
  postcode: '1362 AG',
  plaats: 'Almere',
  tel: '06 40 51 18 89',
  telHref: 'tel:+31640511889',
  wa: 'https://wa.me/31640511889',
  mail: 'info@design4allez.nl',
  kvk: '59002255',
  shop: 'https://www.design4allez.nl/',
  fb: 'https://www.facebook.com/design4allez.nl/',
  route: 'https://www.google.com/maps/dir/?api=1&destination=Design4AlleZ,+Neonweg+191,+1362+AG+Almere',
  google: { score: '4,8', aantal: 16, url: 'https://www.google.com/maps/search/?api=1&query=Design4AlleZ+Neonweg+191+Almere' },
  themeColor: '#121110',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Letterlijk van Google (stand 8 oktober 2026), ingekort met "…". Achternaam als initiaal.
export const reviews = {
  groot: { naam: 'Ruben M.', tekst: 'Vandaag een bericht gestuurd of we konden komen kijken naar een haard. Binnen een half uur antwoord dat we konden komen. Grote loods en een kleine showroom op een uitstekend bereikbare plek in Almere.' },
  los: [
    { naam: 'Adela K.', tekst: 'We zijn eerst de haard in Almere gaan bekijken en hebben toen ook kennis gemaakt met de eigenaar Vincent. Als iemand weet hoe je met klanten om moet gaan dan is hij het wel.' },
    { naam: 'Nissar A.', tekst: 'Vincent van Design4AlleZ is een goudeerlijke ondernemer en super behulpzaam.' },
    { naam: 'Ed v. d. H.', tekst: 'Kreeg heel goed uitleg en heb de 182 cm inbouwhaard aangeschaft! … Zeer goede service en vriendelijke verkoper zonder drang dat je moet kopen bij hem!!' },
    { naam: 'Patrick D.', tekst: 'Na dat ik ook de andere zag “branden” toch voor een andere gegaan. Wat behulpzaam en leuk shoppen!' },
  ],
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Vincent, ik heb een vraag over een sfeerhaard.');
