// Feiten (bekeken 8 oktober 2026), ruwe bronnen in ../../bron:
// - Google-bedrijfsprofiel "Comfort Wonen - Veranda - Kozijnen" (bron/google): Ravenswade 108, 3439 LC Nieuwegein, 06 20262687,
//   categorie Aluminium vensters, 5,0 uit 8 reviews, open ma-vr 9-17, za 10-18, zo gesloten. Website-knop wijst nog naar comfortwonen.eu.
// - comfortwonen.eu: domein staat te koop op Sedo (500 EUR), www. stuurt door naar een datingsite (bron/web/domein-*.png).
// - Oude site via web.archive.org (2021-2022, bron/archief): productlijst, "op maat voor u gefabriceerd", tuin-zin, KvK 81377703.
//   Garantie, "geen voorrijkosten", "scherpste prijzen" en "heel snel" NIET overgenomen (tijdgebonden/commercieel, niet te controleren).
// - Facebook "Comfort BV Veranda en Aluminium Kozijnen" (470 volgers): laatste post 23 september 2026 (veranda), vast nummer
//   030 633 9899, intro met dezelfde tuin-zin. Fotoposts okt/nov 2024 in Den Haag (o.a. bij de Leyweg), Poeldijk en Beverwijk.
// - E-mail info@comfortwonen.eu niet getoond: het domein is verlopen, mail komt waarschijnlijk niet aan.
export const site = {
  naam: 'Comfort Wonen',
  straat: 'Ravenswade 108',
  postcode: '3439 LC',
  plaats: 'Nieuwegein',
  tel: '06 20 26 26 87',
  telHref: 'tel:+31620262687',
  vast: '030 633 98 99',
  vastHref: 'tel:+31306339899',
  wa: 'https://wa.me/31620262687',
  kvk: '81377703',
  facebook: 'https://www.facebook.com/comfortBVveranda',
  maps: 'https://www.google.com/maps/search/?api=1&query=Comfort+Wonen+Ravenswade+108+Nieuwegein',
  google: { score: '5,0', aantal: 8 },
  themeColor: '#1d2226',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Google-openingstijden (index 0 = zondag).
export const tijden: [string, string | null][] = [
  ['Zondag', null],
  ['Maandag', '09:00-17:00'],
  ['Dinsdag', '09:00-17:00'],
  ['Woensdag', '09:00-17:00'],
  ['Donderdag', '09:00-17:00'],
  ['Vrijdag', '09:00-17:00'],
  ['Zaterdag', '10:00-18:00'],
];

// Letterlijk van Google (5 sterren). Achternaam als initiaal. Geen datums.
export const reviews = [
  { naam: 'H. A.', tekst: 'Supervriendelijke jongens die oog voor detail hebben en alles prachtig op maat afwerken!' },
  { naam: 'Ajeesh S.', tekst: 'Van dit bedrijf heb ik veranda en schuifdeur geplaatst. Ik ben zeer tevreden over het werk en de nazorg. Ik kan dit bedrijf met plezier aanbevelen.' },
  { naam: 'Dilek', tekst: 'Professioneel en vakkundig. Ze doen dit werk met hun hart. Klasse!' },
];

// Assortiment: hun "Over ons"-pagina (archief) plus het bord op hun pand (Google-foto: veranda's, kozijnen, deuren).
export const producten = ["Veranda's", 'Glazen schuifwanden', 'Aluminium schuifpuien', 'Tuinkamers', 'Kozijnen en deuren', 'Zonwering', 'Carports'];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Comfort Wonen, ik heb een vraag over een veranda.');
