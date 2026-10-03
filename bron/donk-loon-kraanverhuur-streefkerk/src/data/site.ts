// Feiten (bekeken 3 oktober 2026):
// - Google-bedrijfsprofiel "Loon- en Kraanverhuur T. Donk V.O.F." (Grondverzet; 5,0 uit 2 reviews zonder tekst, beide van
//   familieleden, 5 jaar oud; geen eigen foto's; geen openingstijden; profiel niet geclaimd). Bergstoep 66, 2959 AC Streefkerk,
//   06 16252207.
// - Eigen website www.loonbedrijfdonk.nl (WordPress, alleen een welkomstzin, geschiedenis, downloads en een fotopagina):
//   "We zijn gevestigd in Streefkerk in de Alblasserwaard", geschiedenis van Hannes (1961), Teus (1999) en Hans Donk,
//   info@loonbedrijfdonk.nl, update maart 2026 "We zijn bijna klaar met alle poepjes op het land leggen.", downloads
//   (KvK-uittreksel 17-03-2026, WKA-verklaring 08-08-2026).
// - KvK 23035437 (uittreksel 17-03-2026): V.O.F., onderneming gestart 01-05-1961; bouwrijp maken van terreinen, dienstverlening
//   voor de teelt van gewassen; "Grondverzet, dienstverlening voor de akker- en/of tuinbouw, handel in zand, grond en
//   aanverwante artikelen, alsmede agrarisch loonwerk en grondverzetwerkzaamheden".
// - Belettering op hun kraan: "T. Donk, Loonbedrijf - Kraanverhuur, Streefkerk" in blauw op geel.
// Geen Facebook of Instagram gevonden.
export const site = {
  naam: 'Loon- en Kraanverhuur T. Donk',
  officieel: 'Loon- en Kraanverhuur T. Donk V.O.F.',
  straat: 'Bergstoep 66',
  postcode: '2959 AC',
  plaats: 'Streefkerk',
  tel: '06 16 25 22 07',
  telHref: 'tel:+31616252207',
  wa: 'https://wa.me/31616252207',
  mail: 'info@loonbedrijfdonk.nl',
  kvk: '23035437',
  maps: 'https://www.google.com/maps/search/?api=1&query=Loon-+en+Kraanverhuur+T.+Donk+Bergstoep+66+Streefkerk',
  docs: {
    kvk: 'https://www.loonbedrijfdonk.nl/wp-content/uploads/2026/03/uittreksel_handelsregister_23035437_17-03-26.pdf',
    wka: 'https://www.loonbedrijfdonk.nl/wp-content/uploads/2026/08/2026-08-08_WKA.pdf',
  },
  themeColor: '#0f1522',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Werkzaamheden: KvK-omschrijving + bestandsnamen/onderwerpen van hun eigen foto's (bemesting, kuilen, opraapwagen,
// kuilverdeler, baggeren, greppelen, zaaien, grondwerk) + bedrijfsnaam (kraanverhuur).
export const chips = ['Grondverzet', 'Bouwrijp maken', 'Kraanverhuur', 'Sloot- en oeverwerk', 'Baggeren', 'Greppelen', 'Inkuilen', 'Kuilverdelen', 'Bemesten', 'Zaaien', 'Zand en grond'];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waVraag = waMet('Goedendag, ik heb een vraag voor Loon- en Kraanverhuur T. Donk.');
export const waOfferte = waMet('Goedendag, ik wil graag een offerte aanvragen bij Loon- en Kraanverhuur T. Donk.');
