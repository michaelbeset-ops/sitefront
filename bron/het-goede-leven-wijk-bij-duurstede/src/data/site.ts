// Feiten (bekeken 8 oktober 2026), ruwe bronnen in ../../bron/google/feiten.txt:
// - Google-bedrijfsprofiel "Het Goede Leven", wijnbar, Peperstraat 16, 3961 AS Wijk bij Duurstede, 06 11717911,
//   4,9 uit 17 reviews, geen website. Tijden do 16-22, vr 12-23, za 14-23 (ook op hun eigen foto "Nieuwe openingstijden!").
//   Over: gerund door een vrouwelijke ondernemer; zitplaatsen buiten; wijn, bier, eten; honden toegestaan; pin en contactloos.
// - Wijnen en bieren: hun krijtborden op hun eigen interieurfoto (november 2025).
// - Proeverijen, borrelplank, "Franse stijl", "eerst proeven": letterlijk uit Google-reviews.
export const site = {
  naam: 'Het Goede Leven',
  soort: 'Wijnbar',
  plaats: 'Wijk bij Duurstede',
  straat: 'Peperstraat 16',
  postcode: '3961 AS',
  tel: '06 11 71 79 11',
  telHref: 'tel:+31611717911',
  wa: 'https://wa.me/31611717911',
  google: { score: '4,9', aantal: 17, url: 'https://www.google.com/maps/search/?api=1&query=Het+Goede+Leven+Peperstraat+16+Wijk+bij+Duurstede' },
  route: 'https://www.google.com/maps/dir/?api=1&destination=Het+Goede+Leven+Peperstraat+16+3961+AS+Wijk+bij+Duurstede',
  themeColor: '#7a1f30',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// 0 = zondag. Tijden in minuten na middernacht.
export const tijden: { dag: string; kort: string; open?: [number, number] }[] = [
  { dag: 'Zondag', kort: 'zo' },
  { dag: 'Maandag', kort: 'ma' },
  { dag: 'Dinsdag', kort: 'di' },
  { dag: 'Woensdag', kort: 'wo' },
  { dag: 'Donderdag', kort: 'do', open: [16 * 60, 22 * 60] },
  { dag: 'Vrijdag', kort: 'vr', open: [12 * 60, 23 * 60] },
  { dag: 'Zaterdag', kort: 'za', open: [14 * 60, 23 * 60] },
];
export const uur = (m: number) => `${Math.floor(m / 60)}:${String(m % 60).padStart(2, '0')}`;

// Van hun krijtborden (eigen foto, november 2025). Alleen wat goed leesbaar is.
export const bord = {
  wijn: ['Riesling', 'Pinot grigio', 'Chenin blanc', 'Barbera d’Alba', 'Pinot noir', 'Amarone'],
  bier: ['Hertog Jan', 'Heineken', 'Fruited sour', 'Donderstraal tripel'],
  nul: ['Peroni 0.0', 'La Trappe 0.0'],
};

// Letterlijk van Google (5 sterren, stand 8 oktober 2026), ingekort met "…". Achternaam als initiaal.
export const reviews = {
  maaike: { naam: 'Maaike S.', tekst: 'Spontaan een avondje bij ‘het goede leven’ en ze doen de naam eer aan, want zo voelt het dan ook meteen!' },
  martin: { naam: 'Martin v. S.', tekst: 'We waren een lang weekend in Wijk bij Duurstede en zijn twee avonden achter elkaar naar het Goede Leven gegaan vanwege de sfeer en de echt verrassende en super lekkere wijnen.' },
  los: [
    { naam: 'Tom v. I.', tekst: 'Geweldige host, heerlijke wijnen en hapjes. Een heerlijk plekje en aanrader in het toch al mooie Wijk bij Duurstede.' },
    { naam: 'Sadie v. E.', tekst: '… je merkt meteen dat ze veel verstand hebben van wijnen. Ze organiseren ook regelmatig leuke evenementen, zoals wijn- en bierproeverijen, … Het eten is super lekker en ze denken graag met je mee over waar je zin in hebt en wat bij je past.' },
    { naam: 'J. D.', tekst: 'Leuke en sfeervolle Wijnbar in Franse stijl. Mooie selectie betaalbare wijnen per fles en/of per glas te bestellen. … Gastvrijheid en service top !' },
  ],
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hoi! Ik wil graag een tafel reserveren bij Het Goede Leven.');
