// Feiten van hun eigen site zeilmakerijgiethoorn.nl (welkom, contact en de Duitse pagina, bekeken 01-10-2026):
// De Zeilmakerij Giethoorn BV, Beulakerweg 129AA, 8355 AE Giethoorn, +31 (0)521 36 21 23, info@zeilmakerijgiethoorn.nl,
// KvK HR Zwolle 05034523. Aan de N334, parallel aan het kanaal Beukers-Steenwijk, per auto en per boot (aanlegplaats).
// Tijden: ma, di, do, vr 08:30-17:00, wo gesloten, za van 1 mei tot 1 aug 10:00-12:00. Google 4,5 uit 23.
export const site = {
  naam: 'De Zeilmakerij Giethoorn',
  volledig: 'De Zeilmakerij Giethoorn BV',
  straat: 'Beulakerweg 129AA',
  postcode: '8355 AE',
  plaats: 'Giethoorn',
  tel: '0521 36 21 23',
  telHref: 'tel:+31521362123',
  mail: 'info@zeilmakerijgiethoorn.nl',
  kvk: '05034523',
  maps: 'https://www.google.com/maps/search/?api=1&query=De+Zeilmakerij+Giethoorn+Beulakerweg+129AA',
  google: { score: '4,5', aantal: 23 },
  themeColor: '#0b1638',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

export const mailMet = (onderwerp: string, tekst: string) =>
  `mailto:${site.mail}?subject=${encodeURIComponent(onderwerp)}&body=${encodeURIComponent(tekst)}`;

/** Openingstijden van hun contactpagina. dag = Date.getDay(). */
export const tijden: { dag: number; nl: string; de: string; t: string }[] = [
  { dag: 1, nl: 'maandag', de: 'Montag', t: '8.30 - 17.00' },
  { dag: 2, nl: 'dinsdag', de: 'Dienstag', t: '8.30 - 17.00' },
  { dag: 3, nl: 'woensdag', de: 'Mittwoch', t: '' },
  { dag: 4, nl: 'donderdag', de: 'Donnerstag', t: '8.30 - 17.00' },
  { dag: 5, nl: 'vrijdag', de: 'Freitag', t: '8.30 - 17.00' },
  { dag: 6, nl: 'zaterdag, 1 mei tot 1 aug', de: 'Samstag, 1. Mai bis 1. Aug.', t: '10.00 - 12.00' },
];

/** Het logo: twee oranje wimpels aan een zwarte stok die samen een Z vormen. viewBox 0 0 60 80. */
export const wimpel = `<path d="M9 76 51 4" stroke="currentColor" stroke-width="3.2" stroke-linecap="round"/><path d="M49.5 6.5C40 3 28 11 13 6.5l4.5 12.5c13 4 22-4 29.5-1.5Z" fill="#e9572b"/><path d="M10.5 73.5C20 77 32 69 47 73.5l-4.5-12.5c-13-4-22 4-29.5 1.5Z" fill="#e9572b"/>`;
