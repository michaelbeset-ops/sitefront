// Feiten (bekeken 7 oktober 2026), ruwe bronnen in ../../bron:
// - Oude site acb.nl (home, over-ons, producten, service, contact): Meer en Duin 54 F/G, 2163 HC Lisse, 06-10982881, info@acb.nl,
//   vanaf 1994, familiebedrijf van vader op zoon, mobiele showroom -> showroom en werkplaats, assemblage in eigen werkplaats,
//   ROMAZO Garant, Metaalunie, showroom alleen op afspraak (ma-za), montages door Alexander met een vaste inhuurkracht,
//   hoogseizoen maart t/m september, offerte in hoogseizoen max 5 werkdagen, levergebied ca 15 km rond Lisse.
// - Google-bedrijfsprofiel: 4,8 uit 32 reviews, geen openingstijden. Facebook: facebook.com/acbzonwering.
export const site = {
  naam: 'ACB Zonwering & Rolluiken',
  vol: 'ACB Zonwering & Rolluiken in Lisse',
  eigenaar: 'Alexander Beentjes',
  straat: 'Meer en Duin 54 F/G',
  postcode: '2163 HC',
  plaats: 'Lisse',
  tel: '06 10 98 28 81',
  telHref: 'tel:+31610982881',
  wa: 'https://wa.me/31610982881',
  mail: 'info@acb.nl',
  facebook: 'https://www.facebook.com/acbzonwering',
  maps: 'https://www.google.com/maps/search/?api=1&query=ACB+Zonwering+en+Rolluiken+Meer+en+Duin+54+Lisse',
  google: { score: '4,8', aantal: 32 },
  themeColor: '#1f2326',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Letterlijk van de oude site: "Lisse, Hillegom, De Zilk, Bennebroek, Vogelenzang, Sassenheim, Teylingen, Voorhout,
// Noordwijkerhout, Noordwijk, Lisserbroek, Abbenes, Nieuw Vennep en Hoofddorp."
export const plaatsen = ['Lisse', 'Hillegom', 'De Zilk', 'Bennebroek', 'Vogelenzang', 'Sassenheim', 'Teylingen', 'Voorhout', 'Noordwijkerhout', 'Noordwijk', 'Lisserbroek', 'Abbenes', 'Nieuw-Vennep', 'Hoofddorp'];

// Letterlijk van Google (5 sterren, stand 7 oktober 2026), ingekort met "…". Naam zoals op Google, achternaam als initiaal.
export const reviews = {
  lijst: { naam: 'Holland', tekst: ['Zeer uitgebreide heldere uitleg aan huis en in de showroom.', 'Op tijd en volgens afspraak.', 'Mooie A klasse materialen', 'Nette montage met oog voor detail.', 'Soepele vlotte communicatie.'] },
  los: [
    { naam: 'Martijn V.', tekst: 'Alexander is een absolute vakman, nette prijzen en een heel mooi product! Echt een aanrader!' },
    { naam: 'Charlotte H.', tekst: 'Door een fout van een schilder ontstond er een defect. Alexander en collega zijn meerdere keren langsgeweest om dit op te lossen. Meteen actie. En een oplossing!' },
    { naam: 'Milosz K.', tekst: 'Hij was goed bereikbaar, probeerde via WhatsApp te helpen, en toen dat niet lukte, is hij na twee dagen langsgekomen om het probleem zelf op te lossen. Topservice!' },
    { naam: 'Ivar J.', tekst: 'Ontzettend goed geïnformeerd over cassette en kleur. En nu hij hangt is het precies zoals ik zei dat ik het in mn hoofd had!' },
  ],
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Alexander, ik heb een vraag over zonwering.');
