// Feiten: hun eigen site autobedrijf-motech.nl (pagina-inhoud via de WordPress-API gelezen op 3 oktober 2026, want de site zelf
// geeft HTTP 500 "kritieke fout"), Google-bedrijfsprofiel "Autobedrijf Motech" (bekeken 3 oktober 2026; 4,8 uit 72 reviews,
// openingstijden ma-vr 08:30-17:30, za en zo gesloten), Marktplaats-verkopersprofiel. Geen Facebook/Instagram gevonden. Geen KvK gevonden.
// Vlietskade 9015, 4241 WT Arkel. 06 41 60 66 80. info@autobedrijf-motech.nl. Bron-tekst: bron/ (pages.txt, google/).
export const site = {
  naam: 'Autobedrijf MOTECH',
  kort: 'MOTECH',
  straat: 'Vlietskade 9015',
  postcode: '4241 WT',
  plaats: 'Arkel',
  tel: '06 41 60 66 80',
  telHref: 'tel:+31641606680',
  wa: 'https://wa.me/31641606680',
  mail: 'info@autobedrijf-motech.nl',
  eigenaar: 'Mhamed El Mousati',
  marktplaats: 'https://www.marktplaats.nl/u/autobedrijf-motech/18003221/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Autobedrijf+Motech+Vlietskade+9015+Arkel',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Autobedrijf+Motech+Arkel',
  google: { score: '4,8', aantal: 72 },
  themeColor: '#1a2044',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay). Bron: Google-bedrijfsprofiel.
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '08.30', dicht: '17.30' },
  { dag: 2, naam: 'Dinsdag', open: '08.30', dicht: '17.30' },
  { dag: 3, naam: 'Woensdag', open: '08.30', dicht: '17.30' },
  { dag: 4, naam: 'Donderdag', open: '08.30', dicht: '17.30' },
  { dag: 5, naam: 'Vrijdag', open: '08.30', dicht: '17.30' },
  { dag: 6, naam: 'Zaterdag', open: '', dicht: '' },
  { dag: 0, naam: 'Zondag', open: '', dicht: '' },
];

// Diensten zoals op hun vlaggen ("APK | Onderhoud | Reparatie | In- Verkoop | Export") en hun homepage (banden, airco in de pakketten).
export const chips = ['APK-keuring', 'Onderhoud', 'Reparaties', 'Occasions', 'Auto verkopen', 'Export', 'Zomer- en winterbanden', 'Airco'];

// Letterlijk van Google (stand 3 oktober 2026), alleen positieve reviews, ingekort met "…" waar aangegeven. Naam: voornaam + initiaal.
// Bewust overgeslagen: reviews van naamgenoten van de eigenaar (familie).
export const reviews = [
  { naam: 'Tom v. K.', wanneer: '4 dagen geleden', tekst: 'Altijd een plezier bij Mo! Auto wederom goedgekeurd' },
  { naam: 'Hicham M.', wanneer: '11 maanden geleden', tekst: 'Ik ben inmiddels twee keer met spoed bij Motech geweest en beide keren als een koning geholpen. Ze zijn eerlijk, betrouwbaar en werken met passie en oprechte zorg voor je auto. …' },
  { naam: 'Roy P.', wanneer: '4 jaar geleden', tekst: 'Al vele jaren mijn vaste adres voor APK-keuringen, periodieke onderhoudsbeurten en allerlei kleine werkzaamheden die auto’s nou eenmaal weleens nodig hebben. Een vakman, die waarde hecht aan de gemaakte afspraken. …' },
  { naam: 'Floris S.', wanneer: '8 jaar geleden', tekst: 'Gewoon een hele goede garage. Nooit klachten of problemen mee. Altijd een eerlijke prijs en een duidelijke prijsopgave. Gewoon iemand die zijn vak verstaat.' },
  { naam: 'Stefanie K.', wanneer: '8 jaar geleden', tekst: 'Garage Motech staat altijd voor je klaar. Geeft eerlijk en zonder eigen belang adviezen en denkt graag met je mee. De garagehouder is een echte kenner van het vak en is een man van zijn woord.' },
  { naam: 'Johan F.', wanneer: '8 jaar geleden', tekst: 'Ik heb bij dit bedrijf een auto gekocht en sindsdien heb ik mijn auto in onderhoud bij autobedrijf motech. … Ik stap elke keer weer met een veilig gevoel in de auto.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waAfspraak = waMet('Hallo Mo, ik wil graag een afspraak maken voor mijn auto.');
