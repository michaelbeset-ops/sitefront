// Feiten van autobedrijf-lievaart.nl (welkom, occasions + detailpagina's, onderdelen bestellen, stand 28-09-2026)
// en het Google-profiel (4,7 uit 5, 30 reviews). Openingstijden en KvK staan nergens volledig: AANLEVEREN.
export const site = {
  naam: 'Autobedrijf Lievaart',
  straat: 'Emmastraat 1',
  postcode: '3181 GC',
  plaats: 'Rozenburg',
  tel: '0181 212 431',
  telHref: 'tel:+31181212431',
  mail: 'info@autolievaart.nl',
  maps: 'https://www.google.com/maps/search/?api=1&query=Autobedrijf+Lievaart+Emmastraat+1+Rozenburg',
  themeColor: '#1f3d2b',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

// Occasionlijst zoals op de oude site stond op 28-09-2026. Garantie alleen waar de detailpagina die noemt.
export const voorraadDatum = '28 september 2026';
export const occasions = [
  { naam: 'Fiat 500 1.2 Cabrio', bouwjaar: 'aug. 2016', km: '100.000 km', prijs: '€ 9.950', garantie: '12 maanden', extra: 'Nieuwe APK, wit met beige leer, handgeschakeld' },
  { naam: 'Kia Ceed 1.6 Station', bouwjaar: 'jan. 2013', km: '135.000 km', prijs: '€ 10.250', garantie: '12 maanden', extra: 'Blauw metallic, grijze stof, handgeschakeld' },
  { naam: 'Kia Rio 1.2 Comfort 5-deurs', bouwjaar: 'feb. 2016', km: '134.000 km', prijs: '€ 8.250', garantie: null, extra: null },
  { naam: 'Peugeot 308 1.6 HDi', bouwjaar: 'juni 2014', km: '300.000 km', prijs: '€ 2.950', garantie: null, extra: 'Diesel' },
  { naam: 'Volkswagen Up 5-deurs', bouwjaar: 'nov. 2013', km: '102.000 km', prijs: '€ 6.950', garantie: null, extra: null },
];
