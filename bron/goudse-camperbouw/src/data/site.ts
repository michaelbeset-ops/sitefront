// Feiten (bekeken 9 oktober 2026), bronnen in bron/:
// - Facebook "Goudse camperbouw" (facebook.com/people/Goudse-camperbouw/100057035756553): intro "Goudse Camperbouw is
//   gespecialiseerd in het ombouwen van bestelwagens tot campers." Pagina-categorie Caravan- en camperdealer.
//   provincialeweg oost 13 a, Haastrecht; 06 16626315; goudsecamperbouw@hotmail.com; 486 volgers.
//   Posts: 13 dec 2025 (twee tafels op maat, "Neem gerust contact op, ik denk graag met je mee!"), 26 nov 2025 (eettafel set
//   op maat: "volledig aan te passen naar jouw wensen: formaat, kleur en afwerking"), 15 nov 2025 (zwarte wand in de werkplaats),
//   29 aug 2022 (omslag: VW-bus met hefdak voor de loods; logo-afbeelding met KvK nr 70415323).
// - Google: Goudse Camperbouw, Camperdealer, 4,9 uit 31. Website-knop = m.facebook.com. Tijden: ma-do 09-17, vr gesloten,
//   za 09-17, zo 13-17. Foto's "Van eigenaar" (jan 2020): hefdaken in hun werkplaats en buiten.
// - Marktplaats: verkopersprofiel "Goudse Camperbouw" (15 jaar actief, 4.8 uit 30 ervaringen), advertenties sep/okt 2026.
// - goudsecamperbouw.nl is een gereserveerd domein bij TransIP ("Bezet!"), geen website.
// Eigenaarsnaam staat NIET in eigen bron (alleen in reviews): niet tonen. Geen voorraad of prijzen.
export const site = {
  naam: 'Goudse Camperbouw',
  plaats: 'Haastrecht',
  straat: 'Provincialeweg Oost 13a',
  postcode: '2851 AA Haastrecht',
  tel: '06 16 62 63 15',
  telHref: 'tel:+31616626315',
  wa: 'https://wa.me/31616626315',
  mail: 'goudsecamperbouw@hotmail.com',
  kvk: '70415323',
  facebook: 'https://www.facebook.com/people/Goudse-camperbouw/100057035756553/',
  route: 'https://www.google.com/maps/dir/?api=1&destination=Goudse+Camperbouw%2C+Provincialeweg+Oost+13a%2C+2851+AA+Haastrecht',
  reviews: 'https://www.google.com/maps/place/Goudse+Camperbouw/@52.0162322,4.8454547,17z/data=!4m8!3m7!1s0x47c5d69f8a7596ad:0x489365fe4903fa94!8m2!3d52.0162322!4d4.8454547!9m1!1b1!16s%2Fg%2F11h50mf3tt',
  google: { score: '4,9', aantal: 31 },
  themeColor: '#16191a',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Openingstijden van Google (dag: 0 = zondag).
export const tijden = [
  { dag: 1, naam: 'Maandag', van: '09:00', tot: '17:00' },
  { dag: 2, naam: 'Dinsdag', van: '09:00', tot: '17:00' },
  { dag: 3, naam: 'Woensdag', van: '09:00', tot: '17:00' },
  { dag: 4, naam: 'Donderdag', van: '09:00', tot: '17:00' },
  { dag: 5, naam: 'Vrijdag', van: '', tot: '' },
  { dag: 6, naam: 'Zaterdag', van: '09:00', tot: '17:00' },
  { dag: 0, naam: 'Zondag', van: '13:00', tot: '17:00' },
];

// Letterlijk van Google (5 sterren), ingekort met "…". Naam: voornaam + initiaal. Geen eigenaarsnaam uit reviews.
export const grootCitaat = {
  naam: 'Ton v. O.',
  tekst: 'Kers op de taart is de opmerking van de keurmeester van de RDW, die een compliment maakte over de slimme indeling en de materialen.',
};
export const reviews = [
  { naam: 'Adriaan d. B.', tekst: 'Heeft een prachtig hefdak in mijn bus gebouwd mét een raam erin. Heb ik nergens anders gezien.' },
  { naam: 'Thomas T.', tekst: 'Mijn renault master uit 2001 prachtig omgebouwd. … Het dak is ontsettend professioneel verhoogd, keuken en kast op maat, bank met daaronder opslag en uitklapbaar naar bed.' },
  { naam: 'Karin v. D.', tekst: 'Plannen en wensen worden samen met de eigenaar doorgenomen, Tips worden gegeven. Inbouw is snel en wordt goed en netjes opgeleverd.' },
  { naam: 'Robbert-Jan v. d. D.', tekst: 'Vakkundige inbouw van een mooi plat hefdakje in onze VW LT35 brandweerbus. Erg tevreden.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Goudse Camperbouw, ik heb een vraag.');
