// Feiten van sportschoolkwikkers.nl (nu offline: 504; gelezen via web.archive.org, snapshots jan-jun 2026: home, aanbod,
// lestijden, team, contact, over ons) en het Google-bedrijfsprofiel (4,8 uit 12 reviews; di 17-20, za 9-12; reviews
// letterlijk in bron/google-reviews.txt). Scheldeplein 4, 2987 EL Ridderkerk (Bolnes). 06 24 38 36 53 (Google).
// Geen prijzen gepubliceerd. KvK niet gevonden.
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
  route: 'https://www.google.com/maps/dir/?api=1&destination=Sportschool+Kwikkers+Scheldeplein+4+2987+EL+Ridderkerk',
  google: { score: '4,8', aantal: 12 },
  themeColor: '#0f1011',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waEersteLes = waMet('Hallo Martijn, ik wil graag een keer meedoen met een les. Welke les past het best?');
export const waGroep = waMet('Hallo Martijn, ik twijfel welke groep bij mij past. Kun je me helpen?');

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

// Week voor de tijdentabel (0 = zondag, zoals Date.getDay()).
export const week = [
  { nr: 1, dag: 'Maandag', tijd: '' },
  { nr: 2, dag: 'Dinsdag', tijd: '17:00 tot 20:00', van: '17:00', tot: '20:00' },
  { nr: 3, dag: 'Woensdag', tijd: '' },
  { nr: 4, dag: 'Donderdag', tijd: '' },
  { nr: 5, dag: 'Vrijdag', tijd: '' },
  { nr: 6, dag: 'Zaterdag', tijd: '09:00 tot 12:00', van: '09:00', tot: '12:00' },
  { nr: 0, dag: 'Zondag', tijd: '' },
];
