// Feiten (bekeken 9 oktober 2026), bronnen in bron/:
// - cobotrailers.nl (WordPress/Divi): "In- en verkoop van paardentrailers en aanhangwagens", "Kwaliteit wat u achtervolgt",
//   over ons (verkoop, onderhoud en speciaal bouw; ruim assortiment occasions; ook nieuwe aanhangers; "Wij kijken samen wat
//   het beste bij u past"), onderhoudstekst, Rivelstraat 24, 4261 RB Wijk en Aalburg, "Wij zijn geopend op afspraak",
//   info@cobotrailers.nl, 06-51008281. Aanbod via aanhangerplein-feed (92 trailers, foto's op hun eigen terrein).
// - coboverhuur.nl (eigen verhuursite): verhuurplanner, verhuurcategorieen, onderhoud & reparatie (onderhoudsbeurt, reparatie,
//   keuring en controle, speciaalbouw; "voor alle merken"), FAQ (rijbewijs B/BE, occasions nagekeken), openingstijden
//   ma-vr 09:00-17:00, za 09:00-12:00 alleen op afspraak, zo gesloten.
// - Google: "Verkoper van paardentrailers", 4,5 uit 15. Eigenaarsnaam staat NIET in eigen bron: niet tonen.
// GEEN voorraad, prijzen of acties als actueel tonen.
export const site = {
  naam: 'Cobo Trailers',
  plaats: 'Wijk en Aalburg',
  straat: 'Rivelstraat 24',
  postcode: '4261 RB Wijk en Aalburg',
  tel: '06 51 00 82 81',
  telHref: 'tel:+31651008281',
  wa: 'https://wa.me/31651008281',
  mail: 'info@cobotrailers.nl',
  aanbod: 'https://cobotrailers.nl/aanbod-trailers/',
  verhuur: 'https://coboverhuur.nl/verhuur/',
  route: 'https://www.google.com/maps/dir/?api=1&destination=Cobo+trailers%2C+Rivelstraat+24%2C+4261+RB+Wijk+en+Aalburg',
  reviews: 'https://www.google.com/maps/place/Cobo+trailers/@51.7680422,5.1102846,17z/data=!4m8!3m7!1s0x47c68d939b10c3b5:0xb7cac9a8715c3030!8m2!3d51.7680422!4d5.1102846!9m1!1b1!16s%2Fg%2F11y3p_hz02',
  google: { score: '4,5', aantal: 15 },
  themeColor: '#1b1c1d',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Openingstijden van coboverhuur.nl (dag: 0 = zondag). Zaterdag alleen op afspraak.
export const tijden = [
  { dag: 1, naam: 'Maandag', van: '09:00', tot: '17:00' },
  { dag: 2, naam: 'Dinsdag', van: '09:00', tot: '17:00' },
  { dag: 3, naam: 'Woensdag', van: '09:00', tot: '17:00' },
  { dag: 4, naam: 'Donderdag', van: '09:00', tot: '17:00' },
  { dag: 5, naam: 'Vrijdag', van: '09:00', tot: '17:00' },
  { dag: 6, naam: 'Zaterdag', van: '09:00', tot: '12:00', noot: 'alleen op afspraak' },
  { dag: 0, naam: 'Zondag', van: '', tot: '', noot: 'gesloten' },
];

// Letterlijk van Google (5 sterren, stand 9 oktober 2026). Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Anouk', tekst: 'Heel fijn geholpen bij Cobo trailers! Veel keuze aan trailers en de eigenaar neemt de tijd om je overal mee te helpen. De eigenaar is eerlijk en staat je netjes te woord.' },
  { naam: 'Coen B.', tekst: 'Wat een ontzettend fijn bedrijf! Zeer goed en vriendelijk geholpen door de eigenaar! Nu in het bezit van een prachtige Debo trailer, dank je wel nogmaals!' },
  { naam: 'Monique F.', tekst: 'Veel keuze in trailers, fijn en eerlijk advies. Heel blij met onze eerste mooie trailer.' },
  { naam: 'Adriaan S.', tekst: 'Echt supertevreden! Werd heel hartelijk ontvangen en hij heeft flexibele tijden' },
];

// Merken uit hun aanbod (aanhangerplein-feed op cobotrailers.nl, 9 oktober 2026).
export const merken = ['Anssems', 'Blomert', 'Böckmann', 'Brenderup', 'Cheval Liberté', 'Debon', 'Hapert', 'Henra', 'Hulco', 'Humbaur', 'Ifor Williams', 'Saris', 'Wesco'];

// Verhuurcategorieen van coboverhuur.nl
export const verhuur = ['Aanhangwagens', 'Autoambulances', 'Gesloten aanhangwagens', 'Hoogwerkers', 'Koelwagens', 'Minigravers', 'Mobiele badkamers'];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Cobo Trailers, ik heb een vraag.');
