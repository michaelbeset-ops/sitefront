// Feiten (bekeken 7 oktober 2026), bronnen in bron/ en scratchpad b41/rit:
// - ritmeester-bv.nl (ShopFactory): dienstenoverzicht "In vogelvlucht" (Jachtinterieurs, Teakdekken, Project Interieurs incl.
//   "Specialisatie luxe directie- en vergadertafels met AV-faciliteiten", Prive interieurs, Reparatie/renovatie/restauratie,
//   Ritmeester Lijstenmakerij, Ritmeester CNC Productions BV "Meesterwerken in CNC", Relatiegeschenken, Specials,
//   Ritmeester Spuiterij "Meesterwerken in Finishing"). "Als het in hout mogelijk is, maken wij het!"
//   Bereikbaar "dagelijks van 07.30 uur tot 21.30 uur (vrijdag tot ca. 17.00 uur) Op zaterdag van 09.00 tot 16.00 uur".
// - ritmeesteralblasserdam.nl/categorie/65.html (Activiteiten): "in 1988 gestart in Hendrik Ido Ambacht", vier
//   hoofdafdelingen (Ritmeester BV, Ritmeester CNC Productions BV, Ritmeester Spuiterij, Ritmeester Lijstenmakerij),
//   jachten "van 6 tot 20 meter en groter", "eigen prototype-hal", vacuüm en hydraulische persen, 5-assige CNC,
//   "ons bedrijf ligt direct aan de A-15 van Rotterdam naar Gorinchem". 38.html: "3- en 5-assige CNC machines".
// - Google-profiel Ritmeester BV: Staalindustrieweg 43, 2952 AT Alblasserdam (Het Nieuwland), 06 22 33 75 17, 18 reviews (score niet tonen).
export const site = {
  naam: 'Ritmeester BV',
  straat: 'Staalindustrieweg 43',
  postcode: '2952 AT',
  plaats: 'Alblasserdam',
  tel: '06 22 33 75 17',
  telHref: 'tel:+31622337517',
  wa: 'https://wa.me/31622337517',
  mail: 'info@ritmeester-bv.nl',
  oud: 'https://ritmeesteralblasserdam.nl/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Ritmeester+BV+Staalindustrieweg+43+Alblasserdam',
  themeColor: '#13294f',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

const cat = (n: number) => `https://ritmeesteralblasserdam.nl/categorie/${n}.html`;
export { cat };

// Letterlijk van Google (5 sterren, stand 7 oktober 2026). Naam: voornaam + initiaal.
export const reviews = {
  pastoe: { naam: 'Franscé V.', wanneer: '4 jaar geleden', tekst: 'Ritmeester en Willem hebben onze Pastoekast compleet gerestaureerd en hoe! Het resultaat is prachtig. Zo professioneel gedaan. De kast is al jaren oud en ziet er nu weer uit als nieuw.', vervolg: 'Een genot om mee samen te werken: heel communicatief en uitstekend qua afspraken.' },
  teak: { naam: 'Ilse v. D.', wanneer: '4 jaar geleden', tekst: 'Wij zijn zeer tevreden over het vakmanschap van Ritmeester BV. Door hen een nieuw teak blokrooster laten maken, daar de oude versleten was. Het blokrooster ziet er top uit en ligt te shinen in de kuip van onze zeilboot.' },
  porro: { naam: 'Henk J.', wanneer: '5 jaar geleden', tekst: 'Ritmeester heeft ons L-dressoir van Pastoe perfect hersteld en gelakt. Vaklui! Ook een volgende restauratie van een Porro Web bureau is prima uitgevoerd.' },
};

export const vacatures = [
  ['CNC frezer hout', cat(979)],
  ['Meubelspuiter-voorbewerker', cat(987)],
  ['Pastoe specialist', cat(986)],
  ['Werkvoorbereider interieurbouwbedrijf', cat(981)],
] as const;

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (t: string) => `${site.wa}?text=${encodeURIComponent(t)}`;
export const mailMet = (onderwerp: string, t: string) => `mailto:${site.mail}?subject=${encodeURIComponent(onderwerp)}&body=${encodeURIComponent(t)}`;
export const waHoi = waMet('Goedendag, ik heb een vraag aan Ritmeester BV over ');
