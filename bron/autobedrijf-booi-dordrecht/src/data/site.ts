// Feiten (bekeken 01-10-2026).
// autobooi.nl: "Auto Booi Occasioncenter vestigde zich in 1980 aan de Reeweg Zuid 46 in Dordrecht"; "De broers Frans en Leon
// Booi zijn de drijvende krachten achter dit familiebedrijf"; occasions "afgeleverd met Bovag Garantie en Nationale AutoPas";
// "auto's van uiteenlopende merken in alle prijsklassen"; showroom: "keurig gepoetst", "Onder het genot van een kop koffie",
// "Natuurlijk kunt u ook een proefrit maken"; "aankoop, inruil en financiering"; werkplaats: "groot en klein onderhoud aan uw
// auto, de jaarlijkse APK keuring en alle andere garage-werkzaamheden. Dit alles uiteraard met Bovaggarantie";
// financiering: "Financiering is altijd maatwerk". Tel 078-6171072, info@autobooi.nl.
// Openingstijden op de oude site: ma-vr 08.30-17.30, za 9.30-16.00. Google (gebruikt): ma-vr 08:00-17:30, za 10:00-16:00.
// Google: Autobedrijf Booi en Zn, 4,7 uit 69. Reviews (samengevat): familiebedrijf van broers, persoonlijk en eerlijk,
// goede prijs, doen wat ze beloven, keurige aflevering met uitgebreide uitleg.
// Voorraad: voorraad.autobooi.nl, 18 resultaten op 01-10-2026 (titels ingekort, jaar/km/prijs exact overgenomen).
export const site = {
  naam: 'Auto Booi',
  volledig: 'Autobedrijf Booi en Zn',
  straat: 'Reeweg Zuid 46',
  postcode: '3317 NH',
  plaats: 'Dordrecht',
  tel: '078 617 10 72',
  telHref: 'tel:+31786171072',
  mail: 'info@autobooi.nl',
  voorraad: 'https://voorraad.autobooi.nl/s5aea155a9aef147fc55354868c08c933/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Autobedrijf+Booi+en+Zn+Reeweg+Zuid+46+Dordrecht',
  google: { score: '4,7', aantal: 69 },
  themeColor: '#f5c400',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

export const tijden = [
  ['Maandag t/m vrijdag', '08:00 - 17:30'],
  ['Zaterdag', '10:00 - 16:00'],
  ['Zondag', 'gesloten'],
];

export type Auto = { merk: string; model: string; jaar: number; km: string; prijs: string; soort: string };
export const voorraad: Auto[] = [
  { merk: 'Ford', model: 'Focus EcoBoost Hybrid 125pk Titanium', jaar: 2024, km: '53.285', prijs: '17.950', soort: 'Hatchback' },
  { merk: 'Ford', model: 'Focus Wagon EcoBoost Connected', jaar: 2022, km: '63.926', prijs: '16.650', soort: 'Stationwagon' },
  { merk: 'Ford', model: 'Focus Wagon EcoBoost Hybrid 125pk Titanium X', jaar: 2023, km: '89.536', prijs: '16.350', soort: 'Stationwagon' },
  { merk: 'Ford', model: 'Focus Wagon EcoBoost Hybrid 155pk Automaat', jaar: 2024, km: '84.509', prijs: '18.650', soort: 'Stationwagon' },
  { merk: 'Ford', model: 'Puma EcoBoost Hybrid 125pk ST-Line', jaar: 2023, km: '43.433', prijs: '20.350', soort: 'SUV' },
  { merk: 'Kia', model: 'Picanto 1.0 DPi 5-drs Dynamic Line', jaar: 2023, km: '56.905', prijs: '13.650', soort: 'Hatchback' },
  { merk: 'Kia', model: 'ProCeed T-GDi GT-Line', jaar: 2020, km: '74.027', prijs: '17.850', soort: 'Stationwagon' },
  { merk: 'Kia', model: 'Sportage 1.6 T-GDi MHEV Hybrid Automaat', jaar: 2023, km: '59.239', prijs: '27.650', soort: 'SUV' },
  { merk: 'Opel', model: 'Astra 1.2 Turbo 110pk Business Edition', jaar: 2023, km: '48.371', prijs: '17.850', soort: 'Hatchback' },
  { merk: 'Opel', model: 'Corsa 1.2 T 5-drs Edition', jaar: 2022, km: '26.101', prijs: '13.350', soort: 'Hatchback' },
  { merk: 'Opel', model: 'Crossland 110pk Business Edition', jaar: 2022, km: '59.976', prijs: '15.650', soort: 'SUV' },
  { merk: 'Renault', model: 'Captur 1.3 TCe Hybrid 140 Intens', jaar: 2022, km: '64.593', prijs: '18.650', soort: 'SUV' },
  { merk: 'Renault', model: 'Captur 1.6 E-Tech Hybrid Intens Automaat', jaar: 2023, km: '47.155', prijs: '21.350', soort: 'SUV' },
  { merk: 'Seat', model: 'Ateca TSI 110pk Style Business Intense', jaar: 2024, km: '39.988', prijs: '25.850', soort: 'SUV' },
  { merk: 'Skoda', model: 'Fabia Combi TSI Greentech Ambition', jaar: 2022, km: '66.385', prijs: '13.850', soort: 'Stationwagon' },
  { merk: 'Suzuki', model: 'Vitara 1.4 Boosterjet Style Smart Hybrid', jaar: 2025, km: '39.722', prijs: '23.850', soort: 'SUV' },
  { merk: 'Volkswagen', model: 'Golf Variant eTSI 110pk Hybrid Automaat', jaar: 2023, km: '45.236', prijs: '22.650', soort: 'Stationwagon' },
  { merk: 'Volkswagen', model: 'T-Roc TSI 110pk 75 Edition', jaar: 2023, km: '57.698', prijs: '22.950', soort: 'SUV' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

export const mailMet = (onderwerp: string, tekst: string) =>
  `mailto:${site.mail}?subject=${encodeURIComponent(onderwerp)}&body=${encodeURIComponent(tekst)}`;

export const zoekMail = mailMet('Ik zoek een auto',
  'Goedendag,\n\nIk zoek een auto:\nMerk en model: \nBouwjaar vanaf: \nBelangrijke opties (bijv. automaat, trekhaak, airco): \n\nIk heb een inruilauto: ja / nee\nMerk, model en bouwjaar: \nKenteken: \nKilometerstand: \n\nMet vriendelijke groet,\n');

export const werkplaatsMail = mailMet('Afspraak werkplaats',
  'Goedendag,\n\nIk wil graag een afspraak maken voor:\n( ) onderhoud  ( ) APK  ( ) iets anders: \n\nKenteken: \nVoorkeursdag: \n\nMet vriendelijke groet,\n');

export const autoMail = (a: Auto) => mailMet(`Vraag over ${a.merk} ${a.model} (${a.jaar})`,
  `Goedendag,\n\nIk heb interesse in de ${a.merk} ${a.model} uit ${a.jaar} (${a.km} km, € ${a.prijs},-).\nIs de auto nog beschikbaar en kan ik een proefrit maken?\n\nMet vriendelijke groet,\n`);
