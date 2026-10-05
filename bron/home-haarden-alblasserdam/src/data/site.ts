// Feiten: home-haarden.nl (alle pagina's bekeken 5 oktober 2026), Google-bedrijfsprofiel "Home-haarden & maatwerk B.V."
// (Vinkenpolderweg 5B, 085 800 0211, geen reviews, geen openingstijden), Facebook "Home haarden" (77 volgers).
// Het 06-nummer staat op hun site; de tel-link daar belt het 085-nummer. Bezoekadres volgens Google en hun privacyverklaring.
export const site = {
  naam: 'Home-haarden',
  bv: 'Home-haarden & maatwerk B.V.',
  straat: 'Vinkenpolderweg 5B',
  postcode: '2952 AV',
  plaats: 'Alblasserdam',
  tel: '06 40 50 93 52',
  telHref: 'tel:+31640509352',
  vast: '085 800 0211',
  vastHref: 'tel:+31858000211',
  wa: 'https://wa.me/31640509352',
  mail: 'info@home-haarden.nl',
  kvk: '74169084',
  maps: 'https://www.google.com/maps/search/?api=1&query=Home-haarden+Vinkenpolderweg+5B+Alblasserdam',
  facebook: 'https://www.facebook.com/homehaarden/',
  themeColor: '#1c1b1a',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Telefonisch bereikbaar (contactpagina home-haarden.nl). dag: 0 = zondag. Minuten voor het script.
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '08.00', dicht: '17.00', o: 480, d: 1020 },
  { dag: 2, naam: 'Dinsdag', open: '08.00', dicht: '17.00', o: 480, d: 1020 },
  { dag: 3, naam: 'Woensdag', open: '08.00', dicht: '17.00', o: 480, d: 1020 },
  { dag: 4, naam: 'Donderdag', open: '08.00', dicht: '17.00', o: 480, d: 1020 },
  { dag: 5, naam: 'Vrijdag', open: '08.00', dicht: '17.00', o: 480, d: 1020 },
  { dag: 6, naam: 'Zaterdag', open: '09.00', dicht: '16.00', o: 540, d: 960 },
  { dag: 0, naam: 'Zondag', open: '', dicht: '', o: 0, d: 0 },
];

// Klantervaringen letterlijk van home-haarden.nl (zijbalk "Klantervaringen"). Google heeft nog geen reviews.
export const ervaringen = [
  { naam: 'Fam. de Bruin', plaats: 'Deventer', tekst: 'Onze Jacobus 6 is vorige week geïnstalleerd, dus we genieten er al maximaal van. Afspraken, terugbellen, service en installatie dikke 9.' },
  { naam: 'Fam. van Engelen', plaats: '', tekst: '…na een aantal offertes te hebben doorgeworsteld uiteindelijk toch voor Homehaarden Alblasserdam gekozen, heel fijn geholpen, goed advies, kortom we zijn er heel erg blij mee.' },
  { naam: 'Hendrika', plaats: 'Maasdam', tekst: 'Eindelijk na lang zoeken de occasion die we zochten, geleverd en geïnstalleerd zeker geen spijt van mijn keuze, ook niet voor Home Haarden!' },
  { naam: 'Fam. Den Hoed', plaats: 'Den Bosch', tekst: 'Aanrader!, vakbekwaam en een prima service!' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waAfspraak = waMet('Goedendag Home-haarden, ik wil graag een afspraak maken om de showroom te bezoeken.');
