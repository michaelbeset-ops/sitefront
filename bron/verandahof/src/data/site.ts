// Feiten (bekeken 8 oktober 2026), ruwe bronnen in ../../bron:
// - Google-bedrijfsprofiel "Verandahof" (bron/google): Bouwer van veranda's, servicegebied (geen adres), 06 43095927,
//   4,8 uit 16 reviews (nieuwste ~1 jaar geleden), open ma-vr 08:30-19:00, za-zo gesloten. Website-knop wijst naar verandahof.nl.
// - verandahof.nl: geeft een lege pagina (HTTP 200, Content-Length 0) op mobiel en desktop (bron/web/verandahof-nl-*.png/.txt).
// - Oude site via web.archive.org (homepage april-december 2024, bron/archief): aanbod (veranda, glazen schuifwanden, carport,
//   zijwanden), hun eigen korte zinnen per product, "Volledig maatwerk", "Persoonlijk advies", footer met Waalwijk en KvK 91984009.
//   Het 06-nummer op die site en op Instagram (06 42124838) wijkt af van Google; we gebruiken het Google-nummer (opdracht).
// - Instagram @veranda.hof (140 volgers, laatste post 5 augustus 2024): eigen projectfoto's, serres en tuinkamers in het aanbod.
//   Actie "tuinkamer 5x3 voor 5000 euro" en "gratis LED" (begin 2024) NIET overgenomen: tijdgebonden.
// - Facebook "Verandahof" (18 volgers, laatste post december 2023).
// - Straat in Waalwijk niet getoond (geen huisnummer, mogelijk woonadres): alleen de plaats.
export const site = {
  naam: 'Verandahof',
  plaats: 'Waalwijk',
  tel: '06 43 09 59 27',
  telHref: 'tel:+31643095927',
  wa: 'https://wa.me/31643095927',
  kvk: '91984009',
  instagram: 'https://www.instagram.com/veranda.hof/',
  google: { score: '4,8', aantal: 16 },
  themeColor: '#23272a',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Google-openingstijden (index 0 = zondag).
export const tijden: [string, string | null][] = [
  ['Zondag', null],
  ['Maandag', '08:30-19:00'],
  ['Dinsdag', '08:30-19:00'],
  ['Woensdag', '08:30-19:00'],
  ['Donderdag', '08:30-19:00'],
  ['Vrijdag', '08:30-19:00'],
  ['Zaterdag', null],
];

// Letterlijk van Google (5 sterren). Achternaam als initiaal. Geen datums (de meeste zijn 1-2 jaar oud).
export const reviews = {
  groot: { naam: 'Yassin H.', tekst: 'Met weinig moeite een veranda geplaatst van 9x3,5 mtr, ook die afmetingen kunnen ze gewoon leveren. Goede prijs en kwaliteit en ook nog eens snelle levering!' },
  klein: [
    { naam: 'J.', tekst: 'Heb een veranda besteld bij verandahof 6 x 3,5 m, stevige kwaliteit dikke balken en een sterke constructie, netjes optijd geleverd en gemonteerd …' },
    { naam: 'Abdul A.', tekst: 'Hele goede service en top materiaal, heel vriendelijk personeel en echte vakmensen, denken goed mee en werken alles netjes af.' },
    { naam: 'Samira G.', tekst: 'Super super lieve, vriendelijke mannen. Zij hebben de carpoort perfect gemaakt!! Echt een aanrader!!!' },
  ],
};

// Aanbod met hun eigen zinnen van de oude homepage (archief 2024), letterlijk.
export const aanbod = [
  { naam: 'Veranda', zin: 'Heerlijk genieten van jouw tuin, het gehele jaar door' },
  { naam: 'Glazen schuifwanden', zin: 'Open jouw deuren wanneer je het wilt, gemakkelijk en mooi.' },
  { naam: 'Carport', zin: 'Bescherming voor jouw auto, extra opslag en meer.' },
  { naam: 'Zijwanden', zin: 'Geniet van de extra beschutting' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Verandahof, ik heb een vraag over een veranda.');
