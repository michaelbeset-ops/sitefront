// Feiten van duikelman.nl via het internetarchief (index 2024, contact 2025, fornuizen 2025, kookboeken 2026,
// bruidstaart- en cijferbakvormen 2024). De eigen site was op 29-09-2026 onbereikbaar.
// Google-profiel: 4,6 uit 270 reviews. Geen WhatsApp.
// Bewust NIET overgenomen: bruidslijsten (dienst beëindigd), huurprijzen, "aanbieding"/"uitverkoop"-labels.
export const site = {
  naam: 'Duikelman',
  vol: 'Duikelman Kookgereedschap',
  straat: 'Ferdinand Bolstraat 66-68',
  postcode: '1072 LM',
  plaats: 'Amsterdam',
  wijk: 'De Pijp',
  tel: '020 671 22 30',
  telHref: 'tel:+31206712230',
  mail: 'info@duikelman.nl',
  kvk: '[[AANLEVEREN: KvK-nummer]]',
  google: '4,6',
  reviews: 270,
  themeColor: '#1b1c1e',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

export const tijden = [
  { dag: 'maandag t/m vrijdag', kort: 'Ma t/m vr', tijd: '09:30 - 18:00' },
  { dag: 'zaterdag', kort: 'Zaterdag', tijd: '09:30 - 17:00' },
  { dag: 'zondag', kort: 'Zondag', tijd: 'gesloten' },
];

const route = (adres: string) => `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(adres + ', Amsterdam')}`;

// De vier Duikelman-winkels in De Pijp (contactpagina). Alle vier dezelfde openingstijden.
export const winkels = [
  {
    id: 'kookgereedschap',
    nr: '1',
    zoek: 'Kookgereedschap',
    naam: 'Duikelman Kookgereedschap',
    straat: 'Ferdinand Bolstraat 66-68',
    postcode: '1072 LM',
    tel: '020 671 22 30',
    telHref: 'tel:+31206712230',
    mail: 'info@duikelman.nl',
    wat: 'Professioneel keukengereedschap',
    route: route('Ferdinand Bolstraat 66'),
  },
  {
    id: 'fornuizen',
    nr: '2',
    zoek: 'Fornuis of kookapparatuur',
    naam: 'Fornuizen & Viking Studio',
    straat: 'Gerard Doustraat 48-50',
    postcode: '1072 VT',
    tel: '020 671 22 30',
    telHref: 'tel:+31206712230',
    mail: 'fornuizen@duikelman.nl',
    wat: 'Fornuizen en kookapparatuur',
    route: route('Gerard Doustraat 48'),
  },
  {
    id: 'espresso',
    nr: '3',
    zoek: 'Espresso en koffie',
    naam: 'Espressomachines & koffie',
    straat: 'Gerard Doustraat 52',
    postcode: '1072 VT',
    tel: '020 671 22 30',
    telHref: 'tel:+31206712230',
    mail: 'espresso@duikelman.nl',
    wat: 'Espressomachines en koffie',
    route: route('Gerard Doustraat 52'),
  },
  {
    id: 'kookboeken',
    nr: '4',
    zoek: 'Kookboek of porselein',
    naam: 'Duikelman Kookboeken & porselein',
    straat: 'Gerard Doustraat 54',
    postcode: '1072 VT',
    tel: '020 471 54 72',
    telHref: 'tel:+31204715472',
    mail: 'kookboek.porselein@duikelman.nl',
    wat: 'Kookboeken, porselein en theedoeken',
    route: route('Gerard Doustraat 54'),
  },
];

// Ook genoemd op de contactpagina van Duikelman.
export const elders = [
  { naam: 'Kookhuis aan de Maes', adres: 'Markt 17, 6211 CJ Maastricht', web: 'https://www.kookhuisaandemaes.nl', webKort: 'kookhuisaandemaes.nl' },
  { naam: 'DOK Cookware', adres: "Passage 19, 2511 AB 's Gravenhage", web: 'https://www.dokcookware.com', webKort: 'dokcookware.com' },
  { naam: 'Kölner Kochhaus', adres: 'Breite Straße 2-4, D-50667 Köln', web: 'https://www.koelnerkochhaus.de', webKort: 'koelnerkochhaus.de' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

export const icoon = {
  tel: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>`,
  route: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>`,
  pijl: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`,
};
