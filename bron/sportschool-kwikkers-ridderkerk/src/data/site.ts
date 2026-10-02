// Feiten van sportschoolkwikkers.nl (nu offline: 504; gelezen via web.archive.org, snapshots jan-jun 2026: home, aanbod,
// lestijden, team, contact, over ons) en het Google-bedrijfsprofiel (4,8 uit 12 reviews; di 17-20, za 9-12).
// Scheldeplein 4, 2987 EL Ridderkerk (Bolnes). 06 24 38 36 53 (Google). Geen prijzen gepubliceerd. KvK niet gevonden.
export const site = {
  naam: 'Sportschool Kwikkers',
  sensei: 'Martijn Kwikkers',
  straat: 'Scheldeplein 4',
  postcode: '2987 EL',
  plaats: 'Ridderkerk',
  wijk: 'Bolnes',
  tel: '06 24 38 36 53',
  telHref: 'tel:+31624383653',
  wa: 'https://wa.me/31624383653',
  facebook: 'https://www.facebook.com/sportschoolkwikkers',
  maps: 'https://www.google.com/maps/search/?api=1&query=Sportschool+Kwikkers+Scheldeplein+4+Ridderkerk',
  google: { score: '4,8', aantal: 12 },
  themeColor: '#101112',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waEersteLes = waMet('Hallo Martijn, ik wil graag een keer meedoen met een les. Welke les past het best?');

// Lestijden zoals op hun lestijdenpagina (stand juni 2026), gelijk aan de openingstijden op Google.
export const rooster = [
  { dag: 'Dinsdag', nr: 2, lessen: [
    { van: '17:00', tot: '18:00', les: 'Taekwondo', groep: 'Jeugd en beginners' },
    { van: '18:00', tot: '19:00', les: 'Taekwondo', groep: 'Jeugd en gevorderden' },
    { van: '19:00', tot: '20:00', les: 'Kickboksen', groep: 'Recreanten en gevorderden' },
  ] },
  { dag: 'Zaterdag', nr: 6, lessen: [
    { van: '09:00', tot: '10:00', les: 'Taekwondo', groep: 'Gevorderden' },
    { van: '10:00', tot: '11:00', les: 'Taekwondo', groep: 'Jeugd, beginners en gevorderden' },
    { van: '11:00', tot: '12:00', les: 'Kickboksen', groep: 'Recreanten en gevorderden' },
  ] },
];
