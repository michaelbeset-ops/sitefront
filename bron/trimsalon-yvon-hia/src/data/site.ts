// Feiten (opgehaald 2 oktober 2026):
// - Google-bedrijfsprofiel "Trimsalon Yvon": Dierentrimmer, Paulusweg 79, 3341 CT Hendrik-Ido-Ambacht, 06 38200595,
//   ma t/m vr 09:00-17:00, za en zo gesloten, 5,0 uit 7 reviews, geen website.
// - Facebook-pagina facebook.com/61554935322302: "Gediplomeerd en aangesloten bij abhb", Huisdierentrimsalon, berichten
//   t/m 21 januari 2026 (geslaagd 30-10-2024, Neva 29-10-2024, Jaxx 5-11-2024, snuffelmatten + prijslijst 20-12-2025).
// - KvK 92361455: oozo.nl (bedrijfsgegevens Trimsalon Yvon, Paulusweg 79).
// Let op: trimsalonyvon.nl en Instagram @trimsalon_yvon zijn ANDERE zaken (Zandeweer en Schijndel), niet gebruikt.
export const site = {
  naam: 'Trimsalon Yvon',
  straat: 'Paulusweg 79',
  postcode: '3341 CT',
  plaats: 'Hendrik-Ido-Ambacht',
  tel: '06 38 20 05 95',
  telHref: 'tel:+31638200595',
  wa: 'https://wa.me/31638200595',
  kvk: '92361455',
  google: '5,0',
  googleAantal: 7,
  facebook: 'https://www.facebook.com/61554935322302',
  maps: 'https://www.google.com/maps/search/?api=1&query=Trimsalon+Yvon+Paulusweg+79+Hendrik-Ido-Ambacht',
  themeColor: '#f6f2ef',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent('Hallo Yvon, ' + tekst)}`;
