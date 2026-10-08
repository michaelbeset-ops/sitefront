// Feiten (bekeken 8 oktober 2026), ruwe bronnen in ../../bron:
// - Google-bedrijfsprofiel "ènz. FAIRWEAR": kledingwinkel, Laanstraat 75, 3743 BC Baarn, 06 22474605, 4,8 uit 19 reviews,
//   GEEN website ("Website toevoegen"). Tijden: di-vr 10:00-17:30, za 10:00-17:00, zo en ma gesloten.
// - Instagram @enzfairwear (bio): "Vintage kleding & sieraden", "Duurzaam nieuw, o.a. ARMEDANGELS, SKFK, Oska, DAWN",
//   "di-vr 10-17.30u | za 10-17u", "Laanstraat 75, Baarn". Laatste post 7 okt 2026.
// - Facebook facebook.com/enzfairwear: "Wij verkopen tweedehands kleding en veel nieuwe, duurzame merken.",
//   enzovoortnieuws@gmail.com, post 6 okt 2026 over oorbellen, haarclips, sjaaltjes, kettingen, ringen.
// - centrumbaarn.nl/store/enz-fairwear: "Winkel in mooie gedragen en eerlijke nieuwe dameskleding.", kleur- en figuuranalyse.
// - Eigen etalageruit (Google-foto): "ènz. FAIRWEAR sinds 2013".
export const site = {
  naam: 'ènz. FAIRWEAR',
  straat: 'Laanstraat 75',
  postcode: '3743 BC',
  plaats: 'Baarn',
  tel: '06 22 47 46 05',
  telHref: 'tel:+31622474605',
  wa: 'https://wa.me/31622474605',
  mail: 'enzovoortnieuws@gmail.com',
  instagram: 'https://www.instagram.com/enzfairwear/',
  facebook: 'https://www.facebook.com/enzfairwear',
  maps: 'https://www.google.com/maps/search/?api=1&query=%C3%A8nz.+FAIRWEAR+Laanstraat+75+Baarn',
  google: { score: '4,8', aantal: 19 },
  themeColor: '#2e4542',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Openingstijden van Google en Instagram (gelijk). Index 0 = zondag.
export const tijden: [string, string | null][] = [
  ['Zondag', null],
  ['Maandag', null],
  ['Dinsdag', '10.00-17.30'],
  ['Woensdag', '10.00-17.30'],
  ['Donderdag', '10.00-17.30'],
  ['Vrijdag', '10.00-17.30'],
  ['Zaterdag', '10.00-17.00'],
];

// Letterlijk van Google (5 sterren, stand 8 oktober 2026). Naam zoals op Google, achternaam als initiaal.
export const reviews = [
  { naam: 'Marianne S.', wanneer: '2 maanden geleden', tekst: 'Hier scoor je altijd. Kleine prijsjes. En de eigenaars die hebben plezier in wat ze doen. En ze hebben smaak. … Je komt gegarandeerd met iets bijzonders thuis. Ik wel althans. Onmisbaar in Baarn.' },
  { naam: 'Rivka V.', wanneer: '4 maanden geleden', tekst: 'Wat een gezellige en stijlvolle winkel! Ik zou een bezoekje aan iedereen aanraden, al is het alleen maar voor de heerlijk rustige sfeer of een gesprekje met de eigenaressen.' },
  { naam: 'Elaine', wanneer: '9 maanden geleden', tekst: 'Wat een heerlijke winkel, met mooie kwalitatief goede kleding en prachtige sieraden! En de dames daar, ontzettend gezellig en gastvrij ❤️' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hoi ènz., ik heb een vraag.');
