// Feiten (bekeken 12 oktober 2026), bronnen in bron/:
// - Google-profiel: "Het handelshuis", Meubelwinkel, 4,6 uit 154 reviews, Jan de Rooijstraat 47B, 5171 DR Kaatsheuvel,
//   06 21705972, Bezorging. Geen website ("Website toevoegen").
// - Marktplaats "het Handelshuis" (eigen advertenties, oktober 2026): "Grote showroom 1500 m2", "Relaxstoelen keuze uit
//   meer dan 100 modellen", "Dinsdag tot zaterdag 11-17:30 uur open", maatwerk "op de cm", "De koffie staat klaar".
//   Let op: Google zegt zaterdag 11:00-17:00; hier staan de tijden uit hun eigen advertenties.
// - Facebook "Het Handelshuis Kaatsheuvel": "Vriendelijk geprijsde meubels sinds 1990!"
// - Eigenaarsnaam staat niet in een eigen bron (alleen in reviews/krant), dus niet getoond.
export const site = {
  naam: 'Het Handelshuis',
  plaats: 'Kaatsheuvel',
  straat: 'Jan de Rooijstraat 47B',
  postcode: '5171 DR',
  tel: '06 21 70 59 72',
  telHref: 'tel:+31621705972',
  wa: 'https://wa.me/31621705972',
  route: 'https://www.google.com/maps/dir/?api=1&destination=Jan+de+Rooijstraat+47B%2C+5171+DR+Kaatsheuvel',
  reviews: 'https://www.google.com/maps/place/Het+handelshuis/@51.6649227,5.0312039,17z/data=!4m6!3m5!1s0x47c6912d7798d991:0xed7352f395a69d01!8m2!3d51.6649227!4d5.0312039!16s%2Fg%2F1td7gz18',
  facebook: 'https://www.facebook.com/HetHandelshuisInKaatsheuvel/',
  instagram: 'https://www.instagram.com/handelshuis_kaatsheuvel/',
  marktplaats: 'https://www.marktplaats.nl/u/het-handelshuis/7353345/',
  google: { score: '4,6', aantal: 154 },
  // 0 = zondag. Dinsdag t/m zaterdag 11.00 tot 17.30 uur.
  open: { dagen: [2, 3, 4, 5, 6], van: 11, tot: 17.5, tekst: '11.00 tot 17.30 uur' },
  themeColor: '#1b1512',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Letterlijk van Google (alle 5 sterren). Naam: voornaam + initiaal. "…" = ingekort.
export const reviews = [
  { naam: 'Ruben B.', wanneer: 'oktober 2026', tekst: 'Een mooie eettafel gekocht, met goede service, voor een scherpe prijs. Bovendien is de kwaliteit uitstekend! Zeer tevreden met mijn aankoop.' },
  { naam: 'Anja V.', wanneer: '2 maanden geleden', tekst: 'We werden goed geholpen . We kregen koffie en het was niks teveel. Fijne verkoper!!' },
  { naam: 'Thea D.', wanneer: '4 maanden geleden', tekst: 'Goede ervaring en super verkopers alles wordt netjes thuisgebracht en in elkaar gezet mijn complimenten voor de goede service' },
  { naam: 'Kelly L.', wanneer: 'een jaar geleden', tekst: 'Wij hebben een prachtige bank volledig in onze smaak gekocht. De levering verliep top en alles werd netjes achtergelaten en opgeruimd. …' },
  { naam: 'Karina T.', wanneer: '3 jaar geleden', tekst: 'De bank die wij wilden was eigenlijk niet in de kleur beschikbaar die wij mooi vonden. Maar Het Handelshuis heeft voor ons geregeld dat de bank er kwam, in de stof die we wilden. …' },
  { naam: 'Maja V.', wanneer: '2 jaar geleden', tekst: 'Prettig geholpen, alle tijd en geen druk gezet' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Het Handelshuis, ik heb een vraag over een meubel.');
