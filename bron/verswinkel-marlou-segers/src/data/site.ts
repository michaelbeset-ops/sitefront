// Feiten van verswinkel-marlou-segers.nl (home, bestellijst, bestelpagina's, assortiment met subpagina's,
// kaas-/tapas-/vleeswarenschotels, borrelplanken, nieuws, historie, gewonnen prijzen, route & contact)
// en het Google-profiel (4,8 uit 44 reviews).
export const site = {
  naam: 'Verswinkel Marlou Segers',
  straat: 'Gentsestraat 6',
  postcode: '4561 EJ',
  plaats: 'Hulst',
  tel: '0114 31 50 31',
  telHref: 'tel:+31114315031',
  telBelgie: '0031 114 31 50 31',
  bestelMail: 'bestellenmarlou@zeelandnet.nl',
  mail: 'marlou.segers@zeelandnet.nl',
  google: '4,8',
  reviews: 44,
  maps: 'https://www.google.com/maps/search/?api=1&query=Verswinkel+Marlou+Segers+Gentsestraat+6+Hulst',
  themeColor: '#232b17',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

export const tijden = [
  { dag: 'Maandag t/m vrijdag', kort: 'Ma t/m vr', tijd: '08.30 - 17.30' },
  { dag: 'Zaterdag', kort: 'Zaterdag', tijd: '08.00 - 17.30' },
  { dag: 'Zondag', kort: 'Zondag', tijd: '13.00 - 18.00' },
  { dag: 'Alle 2e feestdagen*', kort: '2e feestdagen', tijd: '11.00 - 17.00' },
];

export const assortiment = [
  { naam: 'Hollandse kaas', tekst: 'Wel 80 soorten, ook streekkazen en boerenkazen, geiten- en schapenkaas, dieetkazen en lactosevrije kazen. En natuurlijk onze Kaatje Jans kaas uit de Beemsterpolder, natuur gerijpt, van jong tot zeer oude brokkelkaas.' },
  { naam: 'Buitenlandse kaas', tekst: 'Zeker 200 soorten dagelijks in huis, van koe-, geiten- en schapenmelk. Van witschimmel tot rode korst en blauwader, van Brie tot truffelkaas, in de smaken zacht tot pikant.' },
  { naam: 'Vleeswaren', tekst: 'Uit binnen- en buitenland, van ham tot pata negra en mangalica ham van het Iberico varken. Heerlijke salami\'s en worstspecialiteiten.' },
  { naam: 'Patés en salades', tekst: 'Patés uit België, van roompaté tot foie gras, en in de winter de wildpatés. Ambachtelijk bereide salades, vers gemaakt, voor brood en tapas.' },
  { naam: 'Tapas en olijven', tekst: 'Heerlijke olijven, huisgemaakte tapenade en tapahapjes zoals gevulde peppadew, kreeftenschaartjes, tijgergarnalen en ansjovis.' },
  { naam: 'Noten en zuidvruchten', tekst: 'Alles versgebrand en vers geschept uit de bar. Van pinda tot macadamia en vele rijk gevulde melanges.' },
];

export const verder = ['Wijnen', 'Thee', 'Delicatessen', 'Mediterrane specialiteiten', 'Zeeuwse streekproducten', 'Relatiegeschenken', 'Kerstpakketten naar wens'];

export const tapas = [
  'Kipsatéspiesje', 'Gehaktballetjes met grillworst', 'Spies met chorizo, olijf, zontomaat en mozzarellabolletje',
  'Gevuld glaasje met salade', 'Manchego puntje', 'Kreeftenschaar', 'Pikante scampi\'s', 'Peppadew gevuld met roomkaas',
  'Kaas-vleesspiesje', 'Diverse kaaspuntjes', 'Vijg-notenrondje met gorgonzola en walnoot', 'Diverse Italiaanse worstjes',
  'Saltufo bolletje, fijn gesneden', 'Ansjovis-olijfspiesje', 'Ringworstspies',
];

export const sausjes = ['Cumberlandsaus', 'Ardeense uienconfijt', 'Witte ui', 'Rode bes', 'Vijgenconfijt'];
