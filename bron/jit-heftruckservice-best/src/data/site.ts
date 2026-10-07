// Feiten (bekeken 7 oktober 2026), ruwe bronnen in ../../bron/web:
// - Eigen site jitheftruckservice.nl (alle 10 pagina's, pages.txt): diensten, onderhoudsbeurt, keuringspunten, verhuur 1 dag t/m 1 jaar,
//   inruil, batterijen, transport, vacatures, footer "Oranjestraat 5H, Best / 06-29350385 | KvK nr.: 54943094 / info@jitheftruckservice.nl".
// - Google: J.I.T. Heftruck Service, Heftruckdealer, Oranjestraat 5-H, 5682 CA Best, 06 29350385. Geen tijden, geen eigen foto's.
// - KvK 54943094: eenmanszaak "Reparatie, keuringen en verkoop van intern transport", vestiging Oirschot (zie kvk.txt).
export const site = {
  naam: 'J.I.T. Heftruckservice',
  kort: 'J.I.T.',
  voluit: 'Jansen Intern Transport',
  straat: 'Oranjestraat 5-H',
  postcode: '5682 CA',
  plaats: 'Best',
  tel: '06 29 35 03 85',
  telHref: 'tel:+31629350385',
  wa: 'https://wa.me/31629350385',
  mail: 'info@jitheftruckservice.nl',
  kvk: '54943094',
  maps: 'https://www.google.com/maps/search/?api=1&query=J.I.T.+Heftruck+Service+Oranjestraat+5-H+Best',
  themeColor: '#161513',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo, ik heb een vraag over een heftruck.');
