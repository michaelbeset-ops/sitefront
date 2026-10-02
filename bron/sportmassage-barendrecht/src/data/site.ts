// Feiten van sportmassagebarendrecht.nl (alle pagina's bekeken 2 oktober 2026: Welkom, Behandelingen, Op locatie,
// Cadeaubon, Gastenboek (4 pagina's, 153 berichten), Contactgegevens, Voorwaarden, Openingstijden) en het
// Google-bedrijfsprofiel "Sport Massage Barendrecht" (Sportmasseur, 5,0 uit 11 reviews, Dorpsstraat-Oost 30,
// 2991 CR Barendrecht, 06 53179976). Masseur: Andrea Noordam (Welkom-pagina).
// Tijden: Google ma-vr 10.00-22.00, za 10.00-20.00, zo gesloten. Hun eigen site zegt ma-vr 10-16 en 19-22, za/zo gesloten.
// De demo volgt Google; zie README. Reviews: letterlijk uit Google Maps (beperkte weergave, 3 volledige reviews).
export const site = {
  naam: 'Sportmassage Praktijk Barendrecht',
  kort: 'Sportmassage Barendrecht',
  masseur: 'Andrea Noordam',
  straat: 'Dorpsstraat-Oost 30',
  postcode: '2991 CR',
  plaats: 'Barendrecht',
  tel: '06 53 17 99 76',
  telHref: 'tel:+31653179976',
  wa: 'https://wa.me/31653179976',
  mail: 'info@sportmassagebarendrecht.nl',
  google: '5,0',
  googleAantal: 11,
  gastenboek: 153,
  maps: 'https://www.google.com/maps/search/?api=1&query=Sport+Massage+Barendrecht+Dorpsstraat-Oost+30+Barendrecht',
  googleReviews: 'https://www.google.com/maps?cid=1678081994919881905',
  themeColor: '#15171a',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Openingstijden volgens Google. Index 0 = zondag (zoals Date.getDay()). Minuten sinds middernacht.
export const tijden: { dag: string; kort: string; open?: number; dicht?: number }[] = [
  { dag: 'Zondag', kort: 'zo' },
  { dag: 'Maandag', kort: 'ma', open: 600, dicht: 1320 },
  { dag: 'Dinsdag', kort: 'di', open: 600, dicht: 1320 },
  { dag: 'Woensdag', kort: 'wo', open: 600, dicht: 1320 },
  { dag: 'Donderdag', kort: 'do', open: 600, dicht: 1320 },
  { dag: 'Vrijdag', kort: 'vr', open: 600, dicht: 1320 },
  { dag: 'Zaterdag', kort: 'za', open: 600, dicht: 1200 },
];
export const uur = (m: number) => `${String(Math.floor(m / 60)).padStart(2, '0')}.${String(m % 60).padStart(2, '0')}`;

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent('Hallo Andrea, ' + tekst)}`;
