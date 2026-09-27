// Feiten van Facebook (facebook.com/SPSvloeren: intro, info, post 11 augustus 2026) en het Google-profiel
// (adres, 06-nummer, 5,0 uit 5 bij 16 reviews). Geen eigen website: spsvloeren.nl geeft 404.
export const site = {
  naam: 'Slagmolen Parket Service',
  kort: 'S.P.S. vloeren',
  straat: 'Koraallaan 44',
  postcode: '2992 GX',
  plaats: 'Barendrecht',
  tel: '06 26 97 93 33',
  telHref: 'tel:+31626979333',
  wa: 'https://wa.me/31626979333',
  mail: 'info@spsvloeren.nl',
  facebook: 'https://www.facebook.com/SPSvloeren/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Slagmolen+Parket+Service+Koraallaan+44+Barendrecht',
  themeColor: '#5b3a22',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

// Facebook-intro: "alle werkzaamheden aan uw houten vloer en laminaat vloer. Tevens voor het grondig reinigen
// van uw stenen vloer." Schuren en opnieuw lakken komt uit de Google-reviews, olie uit de Facebook-post.
export const diensten = [
  { naam: 'Houten vloeren', tekst: 'Alle werkzaamheden aan uw houten vloer. Bijvoorbeeld schuren en opnieuw lakken, of schuren en oliën.' },
  { naam: 'Laminaatvloeren', tekst: 'Ook voor alle werkzaamheden aan uw laminaatvloer.' },
  { naam: 'Stenen vloeren', tekst: 'Grondig reinigen van uw stenen vloer.' },
];
