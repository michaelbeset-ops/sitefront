// Feiten: marcellami.nl (home, over ons, diensten, contact; opgehaald 4 oktober 2026), Instagram @lamischilders
// (laatste post 3-10-2026: nieuw bedrijfspand Hangarweg 10 sinds aug 2026), Google-profiel (5,0 uit 3 reviews,
// 06 51343456, geen openingstijden). Op hun site staat ook 06 81 11 77 45 ("Bel of Whatsapp ons"); de bus en de
// winterflyer tonen beide nummers. Wij gebruiken het Google-nummer, dat ook groot op de bus staat.
export const site = {
  naam: "Schildersbedrijf Marcel l’Ami & Zn.",
  kort: "Marcel l’Ami & Zn.",
  straat: 'Hangarweg 10',
  postcode: '2241 TZ',
  plaats: 'Wassenaar',
  tel: '06 51 34 34 56',
  telHref: 'tel:+31651343456',
  wa: 'https://wa.me/31651343456',
  mail: 'info@marcellami.nl',
  instagram: 'https://www.instagram.com/lamischilders/',
  facebook: 'https://www.facebook.com/lamischilders/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Schildersbedrijf+Marcel+l%27Ami+%26+Zn+Hangarweg+10+Wassenaar',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Schildersbedrijf+Marcel+l%27Ami+%26+Zn+Wassenaar',
  google: { score: '5,0', aantal: 3 },
  themeColor: '#0e173f',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

export const diensten = ['Buitenschilderwerk', 'Binnenschilderwerk', 'Spuitwerk', 'Houtrotherstel', 'Glaswerk', 'Behang', 'Onderhoud', 'Hoogtewerk'];

// Letterlijk van Google (stand 4 oktober 2026). De derde review (Rob, 3 jaar geleden) is alleen vijf sterren, zonder tekst.
export const reviews = [
  { naam: 'Rafaela P.', wanneer: '11 maanden geleden', tekst: 'Ontzettend blij met het werk wat Marcel en z’n werknemers hebben geleverd! Wat een ongelooflijk sympathieke mensen zijn dit, stuk voor stuk. Marcel verdient een hele dikke pluim!' },
  { naam: 'Sybren M.', wanneer: 'een jaar geleden', tekst: 'Super fijn bedrijf, staat altijd voor je klaar. Grote of kleine klus maakt niet uit. L’Ami heeft bij ons al verschillende werkzaamheden verricht altijd netjes en naar wens. Vandaag dubbel glas laten zetten in ons badkamer raampje.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waOfferte = waMet('Goedendag, ik wil graag een vrijblijvende offerte aanvragen.');
