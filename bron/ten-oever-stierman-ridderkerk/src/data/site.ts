// Feiten: eigen site tenoeverenstierman.nl (bekeken 3 oktober 2026), Facebook StraatmakersbedrijfTenOeverEnStierman,
// Ridderkerks Dagblad 20 maart 2025 ("Zilveren ondernemerspenning voor Ten Oever en Stierman") en de oorkonde op Facebook.
// Ten Oever en Stierman V.O.F., gevestigd sinds 1 februari 1999 in Ridderkerk. Spinozastraat 7, 2984 GJ Ridderkerk.
// Y. ten Oever 06-22488572, P. Stierman 06-53698649, info@tenoeverenstierman.nl, KvK 24290272.
// Geen openingstijden en geen Google-reviews gepubliceerd: daarom geen tijdentabel en geen reviewblok.
export const site = {
  naam: 'Ten Oever & Stierman',
  voluit: 'Straatmakersbedrijf Ten Oever en Stierman',
  straat: 'Spinozastraat 7',
  postcode: '2984 GJ',
  plaats: 'Ridderkerk',
  tel: '06 22 48 85 72',
  telHref: 'tel:+31622488572',
  wa: 'https://wa.me/31622488572',
  mail: 'info@tenoeverenstierman.nl',
  kvk: '24290272',
  facebook: 'https://www.facebook.com/StraatmakersbedrijfTenOeverEnStierman/',
  artikel: 'https://ridderkerksdagblad.nl/zilveren-ondernemerspenning-voor-ten-oever-en-stierman',
  maps: 'https://www.google.com/maps/search/?api=1&query=Straatmakersbedrijf+Ten+Oever+en+Stierman+Spinozastraat+7+Ridderkerk',
  themeColor: '#0c1220',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

export const mensen = [
  { naam: 'Ynze ten Oever', kort: 'Ynze', tel: '06 22 48 85 72', href: 'tel:+31622488572' },
  { naam: 'Peter Stierman', kort: 'Peter', tel: '06 53 69 86 49', href: 'tel:+31653698649' },
];

// Diensten: letterlijk het rijtje op hun site en in hun logo (Bestratingen, Riolering, Projecten, Siertuinen, Grondwerk),
// plus machinaal straten (portfolio: "sinds juli 2007 ... met onze kraan. Ook tegelen en banden zetten").
export const chips = ['Bestratingen', 'Machinaal straten', 'Riolering', 'Grondwerk', 'Siertuinen', 'Bedrijfsterreinen', 'Speeltuinen', 'Gemeentewerk'];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waOfferte = waMet('Goedendag, ik wil graag een offerte aanvragen voor bestratingswerk.');
