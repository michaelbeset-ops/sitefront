// Feiten: autobedrijfrebo.nl (laatst gewijzigd 2021, opgehaald 3 oktober 2026, kopie in bron/), Google-bedrijfsprofiel
// "Autobedrijf Rebo" (bekeken 3 oktober 2026; 4,8 uit 45 reviews; ma-vr 09:00-17:00, za en zo gesloten),
// KvK 59311967 (eenmanszaak; garage opgericht 27-11-2013, via garage-spot.nl / companyinfo.nl).
// Hun site noemt zaterdag "alleen op afspraak"; Google zegt gesloten. Wij tonen zaterdag als "Op afspraak" en rekenen hem
// als gesloten voor de live status.
export const site = {
  naam: 'Autobedrijf ReBo',
  kort: 'ReBo',
  straat: 'Fokkerstraat 28',
  postcode: '2811 ER',
  plaats: 'Reeuwijk',
  tel: '06 15 05 16 35',
  telHref: 'tel:+31615051635',
  wa: 'https://wa.me/31615051635',
  mail: 'info@autobedrijfrebo.nl',
  kvk: '59311967',
  maps: 'https://www.google.com/maps/search/?api=1&query=Autobedrijf+Rebo+Fokkerstraat+28+Reeuwijk',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Autobedrijf+Rebo+Reeuwijk',
  google: { score: '4,8', aantal: 45 },
  themeColor: '#131416',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay).
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '09.00', dicht: '17.00' },
  { dag: 2, naam: 'Dinsdag', open: '09.00', dicht: '17.00' },
  { dag: 3, naam: 'Woensdag', open: '09.00', dicht: '17.00' },
  { dag: 4, naam: 'Donderdag', open: '09.00', dicht: '17.00' },
  { dag: 5, naam: 'Vrijdag', open: '09.00', dicht: '17.00' },
  { dag: 6, naam: 'Zaterdag', open: '', dicht: '', afspraak: true },
  { dag: 0, naam: 'Zondag', open: '', dicht: '' },
];

// Letterlijk van hun gevelbord (foto's op hun site en Google), in dezelfde volgorde.
export const gevel = ['APK', 'Reparatie', 'Onderhoud', 'Occasions', 'Banden', 'Aanhangers', 'Minigravers', 'Campers', "Airco's", 'Caravans', 'Schade', 'Uitlezen'];

// Letterlijk van Google (stand 3 oktober 2026). Naam zoals op Google: voornaam + initiaal; gebruikersnaam ongewijzigd.
// De laatste twee zijn de uitgelichte reviewfragmenten op het profiel (zonder naam getoond).
export const reviews = [
  { naam: 'NOOBAR84', wanneer: '11 maanden geleden', tekst: 'Top bedrijf. Zeer vriendelijk, denkt altijd mee. Zeer vakkundige eigenaar. Ik ga nooit meer ergens anders naartoe.' },
  { naam: 'Rik G.', wanneer: '2 jaar geleden', tekst: 'Zeer vriendelijk geholpen, ben hier al vaker teruggekomen en zal dat zeker blijven doen. Rebo heeft een brug waar een camper op kan. Radiateur vervangen en APK laten doen. Indien er onverwachte reparaties opdeden, werd ik eerst gebeld voordat ze werden uitgevoerd.' },
  { naam: 'Rachid E.', wanneer: '3 jaar geleden', tekst: 'Ben al jaren klant bij Rebo. Onlangs wederom langs geweest voor het repareren van mijn stuurhuis (Ford C-Max). Auto rijdt weer als vanouds. Dank voor jullie snelheid, deskundigheid en klantvriendelijkheid. Jullie krijgen de welverdiende vijf sterren!' },
  { naam: 'Google-review', wanneer: 'uitgelicht op Google', tekst: 'Super gedaan de apk top bedrijf echt 5 sterren waard bedankt' },
  { naam: 'Google-review', wanneer: 'uitgelicht op Google', tekst: 'Schade super gemaakt, hij is weer als nieuw.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waAfspraak = waMet('Hallo ReBo, ik wil graag een afspraak maken voor mijn auto.');
