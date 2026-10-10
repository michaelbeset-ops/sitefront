// Feiten (bekeken 10 oktober 2026), bronnen en screenshots in bron/:
// - Google: "S.P.S. (Slagmolen.Parket.Service) vloeren", Hout- en laminaatvloerenleverancier, 5,0 uit 16 reviews.
//   Woonadres in Barendrecht (alleen plaats tonen). 06 26979333. Website-knop = facebook.com (geen eigen site).
//   Foto's "van eigenaar" (S.P.S.-logo als plaatser), o.a. juni 2026, bijschriften "Visgraat eiken." en "Eiken visgraat 12x48 cm."
// - Facebook "Slagmolen Parket Service. Vloeren" (facebook.com/SPSvloeren): intro "Slagmolen parket service is er voor alle
//   werkzaamheden aan uw houten vloer en laminaat vloer. Tevens voor het grondig reinigen van uw stenen vloer."
//   info@spsvloeren.nl. Posts 16 juni 2026 (schuurklus) en 11 augustus 2026 (Royl 2K olie). Flyer 8 mei 2025.
// - Instagram @slagmolen_parket_service: "Edwin Slagmolen/ S.P.S vloeren" (eigenaarsnaam uit eigen bron).
// - spsvloeren.nl geeft 404 (bron/web). Openingstijden: Google ma 09:00, Facebook "Altijd geopend": tegenstrijdig, NIET getoond.
export const site = {
  naam: 'S.P.S. Slagmolen Parket Service',
  kort: 'S.P.S.',
  eigenaar: 'Edwin',
  plaats: 'Barendrecht',
  tel: '06 26 97 93 33',
  telHref: 'tel:+31626979333',
  wa: 'https://wa.me/31626979333',
  mail: 'info@spsvloeren.nl',
  facebook: 'https://www.facebook.com/SPSvloeren',
  instagram: 'https://www.instagram.com/slagmolen_parket_service/',
  reviews: 'https://www.google.com/maps/place/S.P.S.+(Slagmolen.Parket.Service)+vloeren/@51.8562282,4.5187856,17z/data=!4m6!3m5!1s0x47c43371690a4b0b:0xae2d9cd7014aa827!8m2!3d51.8562282!4d4.5187856!16s%2Fg%2F11fj2t9w7f',
  google: { score: '5,0', aantal: 16 },
  themeColor: '#171514',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Letterlijk van Google (alle 5 sterren). Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Nelleke v. G.', wanneer: '9 maanden geleden', tekst: 'Gekozen voor Edwin door alle positieve reviews en dat maakte hij meer dan waar! Prettig contact, alle opties en stappen werden goed uitgelegd en als resultaat een prachtige vernieuwde eikenhouten vloer. Heel erg blij mee!' },
  { naam: 'Patricia d. J.', wanneer: 'een jaar geleden', tekst: 'Dik tevreden! De klantvriendelijke manier waarop Ed mijn parketvloer weer mooi heeft gemaakt is indrukwekkend. Raad hem zeker aan als uw parketvloer geschuurd en gelakt moet worden.' },
  { naam: 'Jesse Z.', wanneer: '2 jaar geleden', tekst: 'Edwin heeft goed werk geleverd bij het schuren en opnieuw lakken van onze vloer. De communicatie is erg fijn. Aanrader!' },
  { naam: 'Michael B.', wanneer: '2 jaar geleden', tekst: 'Tevreden over het eindresultaat, legt goed uit wat wel en niet kan en levert goed werk af!' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hoi Edwin, ik heb een vraag over mijn vloer.');
