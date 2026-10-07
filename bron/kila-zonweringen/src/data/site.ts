// Feiten (opnieuw bekeken 7 oktober 2026), bewijs in bron/:
// - kila-zonweringen.nl (home, Over ons, Producten, Zakelijke en Particuliere zonwering, Sfeerfoto's, Offerte):
//   Sweelinckplantsoen 98, 3335 AP Zwijndrecht, T 06 12 37 37 21, info@kila-zonweringen.nl.
//   "monteert alle zonweringen zelf", "onderhoud ... in eigen beheer", "komt altijd bij u thuis de exacte maten opnemen",
//   "geen dure showroom", "complete collectieboeken van onze leveranciers ... wij brengen u de gewenste collectieboeken",
//   werkgebied "regio Rotterdam, Dordrecht, Papendrecht, Alblasserdam en omliggende plaatsen".
// - Facebook facebook.com/Kilazonweringen: intro "Montage, verkoop, onderhoud, reparatie zonweringen en rolluiken";
//   posts 5 juni 2026 (solar ritsscreens Rotterdam), 28 april 2025 (3-in-1 ritsscreen Ambacht klimaatservice), 2 juni 2023 (doek).
// - Google-profiel: 4,9 uit 9 reviews (laatste 4 dagen geleden), ma-vr 09.00-17.00, za-zo gesloten. 6 foto's "Van eigenaar" (dec 2016).
// Eigenaarsnaam staat niet in een eigen bron (alleen in reviews): in eigen tekst geen voornaam.
export const site = {
  naam: 'Kila Zonweringen',
  straat: 'Sweelinckplantsoen 98',
  postcode: '3335 AP',
  plaats: 'Zwijndrecht',
  tel: '06 12 37 37 21',
  telHref: 'tel:+31612373721',
  wa: 'https://wa.me/31612373721',
  mail: 'info@kila-zonweringen.nl',
  facebook: 'https://www.facebook.com/Kilazonweringen/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Kila+Zonweringen+Sweelinckplantsoen+98+Zwijndrecht',
  google: { score: '4,9', aantal: 9 },
  regio: ['Zwijndrecht', 'Rotterdam', 'Dordrecht', 'Papendrecht', 'Alblasserdam'],
  themeColor: '#232322',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Letterlijk van Google (5 sterren, stand 7 oktober 2026). Naam: voornaam + initiaal.
export const reviews = {
  jordy: { naam: 'Jordy N.', wanneer: '4 dagen geleden', tekst: 'Een monteur met ruime ervaring en goede klantvriendelijkheid. Kila Zonweringen heeft vorig jaar al ons scherm voor gemonteerd nadat wij het scherm overnamen van onze ouders. Inmiddels heeft hij ook een scherm achter gemonteerd. Hij levert netjes werk af, geeft adviezen waar je wat mee kan en is in voor een gezellig praatje. Komt netjes op tijd en houdt zich aan de gemaakte afspraken. Zeker een aanrader!' },
  henk: { naam: 'Henk G.', wanneer: '3 jaar geleden', tekst: 'Harry Kila is echt een vakman. Zonneschermdoek vervangen, we zijn er heel blij mee' },
  stefan: { naam: 'Stefan S.', wanneer: '3 jaar geleden', tekst: 'Heel blij dat Harry de rolluiken gefixt heeft, ondanks dat het een hele lastige klus was!' },
  corinne: { naam: 'Corinne T.', wanneer: '5 jaar geleden', tekst: 'Super service! TIjdens deze drukke periode toch even de tijd en moeite genomen om de zonwering bij mijn hoogbejaarde moeder, die op 2 hoog woont, te repareren. TOP!' },
  danica: { naam: 'Danica S.', wanneer: '6 jaar geleden', tekst: 'Een prachtig doek bij Kila Zonwering besteld en zojuist laten geplaatst. Uitstekende service en zeer klantvriendelijk!! Echt een aanrader' },
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Kila Zonweringen, ik heb een vraag over zonwering.');
