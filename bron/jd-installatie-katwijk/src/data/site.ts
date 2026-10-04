// Feiten: huidige site jdinstallatie.nl (bekeken 4 oktober 2026), contactpagina: "JD installatie en onderhoud,
// J.van Duijvenvoorde, Melkweg 20, 2221 NX Katwijk, Kvknr: 27312143, 06-10395514", e-mail info@jdinstallatie.nl.
// Eigenaar John van Duijvenvoorde (LinkedIn "Owner JD installatie en onderhoud"). Google-profiel "JD Installatie en Onderhoud"
// (4,3 uit 12 reviews: 10x vijf sterren, 2x een ster), ma t/m vr 07:00-17:00, za en zo gesloten. Facebook JDInstallatieenOnderhoud.
export const site = {
  naam: 'JD Installatie en Onderhoud',
  kort: 'JD Installatie',
  eigenaar: 'John van Duijvenvoorde',
  voornaam: 'John',
  straat: 'Melkweg 20',
  postcode: '2221 NX',
  plaats: 'Katwijk',
  kvk: '27312143',
  tel: '06 103 955 14',
  telHref: 'tel:+31610395514',
  wa: 'https://wa.me/31610395514',
  mail: 'info@jdinstallatie.nl',
  facebook: 'https://www.facebook.com/JDInstallatieenOnderhoud',
  maps: 'https://www.google.com/maps/search/?api=1&query=JD+Installatie+en+Onderhoud+Melkweg+20+Katwijk',
  reviews: 'https://www.google.com/maps/search/?api=1&query=JD+Installatie+en+Onderhoud+Katwijk',
  google: { score: '4,3', aantal: 12 },
  themeColor: '#17191c',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay).
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '07.00', dicht: '17.00' },
  { dag: 2, naam: 'Dinsdag', open: '07.00', dicht: '17.00' },
  { dag: 3, naam: 'Woensdag', open: '07.00', dicht: '17.00' },
  { dag: 4, naam: 'Donderdag', open: '07.00', dicht: '17.00' },
  { dag: 5, naam: 'Vrijdag', open: '07.00', dicht: '17.00' },
  { dag: 6, naam: 'Zaterdag', open: '', dicht: '' },
  { dag: 0, naam: 'Zondag', open: '', dicht: '' },
];

// Diensten zoals in het menu en de teksten van hun huidige site.
export const chips = ['CV-ketel vervangen', 'Nieuwe CV-ketel', 'Onderhoud CV', 'Airconditioning', 'Onderhoud airco', 'Sanitair', 'Keukenaansluitingen', 'Gas- en waterleiding', 'Vloerverwarming'];
export const merken = ['Vaillant', 'Nefit', 'Intergas', 'Remeha'];

// Letterlijk van Google (stand 4 oktober 2026), alle drie vijf sterren, ingekort met "…" waar aangegeven.
export const reviews = [
  { naam: 'Patrick V.', wanneer: '3 jaar geleden', tekst: 'Onlangs was onze CV stuk gegaan. Behoorlijk vervelend in de winter, wanneer het buiten vriest. … Ondanks JD installaties aangaf het zelf ook ernstig druk te hebben, kwam hij, alsnog, dezelfde middag langs. Het probleem werd direct en vakkundig verholpen …' },
  { naam: 'V. V.', wanneer: 'een jaar geleden', tekst: 'Onze verwarming had het plotseling begeven … tot onze verbazing stond de monteur binnen een uur al voor de deur. … Hij ging meteen aan de slag, stelde snel een diagnose en had gelukkig alle benodigde onderdelen bij zich. … Binnen no-time werkte onze verwarming weer perfect!' },
  { naam: 'Mar N.', wanneer: '5 jaar geleden', tekst: 'Installatie van ketel, onderhoud en recent alle aansluitingen in de keuken gelegd of omgelegd. Werkt hard, is vriendelijk, netjes en niet te beroerd voor een stapje extra.' },
];
// Korte citaten die Google bovenaan het profiel toont (zonder naam).
export const citaten = ['Snel en netjes de oude cv ketel vervangen!', 'Hij is bijzonder aardig, werkt hard en levert 1e klas werk af.'];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waOfferte = waMet('Goedendag John, ik wil graag een vrijblijvende offerte aanvragen.');
