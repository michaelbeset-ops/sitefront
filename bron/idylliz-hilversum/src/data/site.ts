// Feiten (bekeken 8 oktober 2026), ruwe bronnen in ../../bron:
// - Eigen blog idylliz.blogspot.com: "Idylliz, Edelsmid. Handgesmede sieraden van zilver en goud. Lieflijk doch stoer."
//   Over Idylliz: Lize Bouwman, zelfstandig edelsmid/goudsmid, zilver en goud, eigen goud hergebruiken, op afspraak in
//   "mijn fijne atelier aan de groene bosrand van Hilversum". Contact: "Liefst what's app 06-19753333 of mail lize.idylliz@gmail.com".
//   KvK 53672054, ingeschreven 4 oktober 2012, atelier aan huis (daarom geen straat). Eigen meesterteken (pijltje uit "iz").
// - Google "Idylliz, edelsmid atelier": 4,9 uit 109. Eigenaarsbericht 13-07-2026: alleen op afspraak, eerst appen, kleine
//   wachttijd, op dit moment geen reparaties.
export const site = {
  naam: 'Idylliz, edelsmid atelier',
  kort: 'Idylliz',
  eigenaar: 'Lize Bouwman',
  plaats: 'Hilversum',
  tel: '06 19 75 33 33',
  telHref: 'tel:+31619753333',
  wa: 'https://wa.me/31619753333',
  mail: 'lize.idylliz@gmail.com',
  kvk: '53672054',
  blog: 'https://idylliz.blogspot.com/',
  google: { score: '4,9', aantal: 109, url: 'https://www.google.com/maps/search/?api=1&query=Idylliz+edelsmid+atelier+Hilversum' },
  themeColor: '#1b201c',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Letterlijk van Google (5 sterren, stand 8 oktober 2026), ingekort met "…". Achternaam als initiaal.
export const reviews = {
  groot: { naam: 'Donatas', tekst: 'Ze keek niet alleen naar het ontwerp, maar vooral naar wie wij zijn en dat zie je terug in elk detail. … Voor mijn partner smolt ze de ring van zijn vader om tot een nieuwe trouwring. Zo mooi en betekenisvol geworden.' },
  los: [
    { naam: 'Ilona B.', tekst: '… samen zijn we tot een prachtig ontwerp gekomen, waarna Lize dit heeft omgezet in een voor mij hele bijzondere ring. Nu kan ik mijn herinnering altijd zichtbaar dragen … De tussentijdse informatie en foto’s via WhatsApp waren ook fijn.' },
    { naam: 'Jacqueline H.', tekst: 'Wij zijn super tevreden en trots op het prachtige resultaat van onze nieuwe trouwringen! Lize heeft fantastisch werk geleverd: ze luisterde goed naar onze wensen en dacht tegelijkertijd creatief mee.' },
    { naam: 'Jansje B.', tekst: 'Ik ben erg goed geholpen door Lize. … Lize denkt echt met je mee, heeft veel geduld en passie voor haar vak.' },
  ],
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Lize, ik zou graag een afspraak maken in het atelier.');
