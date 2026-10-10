// Feiten (bekeken 10 oktober 2026), bronnen in bron/:
// - Facebook "Hajdari Boot En Polyesterservice" (facebook.com/people/Hajdari-Boot-En-Polyesterservice/100063633789389):
//   intro "U kunt bij ons terecht voor Schadeherstel, schilderwerkzaamheden, polijsten reiniging, jachtbouw etc".
//   Paterstraat 7 D, Kerkdriel; 06 14606686; hbepservice@gmail.com. Posts: 1 okt 2026 verhuisd naar Paterstraat 7D
//   ("Een nieuwe plek, maar dezelfde vertrouwde service, vakmanschap en passie voor boten!"), 15 aug 2026 "Van gatenkaas naar
//   vaarklaar", 3 jul 2026 "Sjardonee straalt weer!", 22 mei 2026 Avanti te water (onderwaterschip + romp in de lak).
// - Instagram @hajdari_bootservice: bio "Reparatie • Onderhoud • Lakwerk • Renovatie"; 24 aug 2022 "Romp excellent 1000 in de maak"
//   (#spuiten #polyester #gelcoat).
// - Google: Hajdari Boot en Polyester Service, Botenhandelaar, 4,8 uit 12, geen website ("Website toevoegen").
//   Tijden ma-vr 08:00-17:00, za 08:30-15:00, zo gesloten. Foto's van de zaak (2021, aug 2026) en van Marjo Hajdari (mei 2026).
// Eigenaarsnaam staat NIET in eigen bron (alleen in reviews): niet tonen. Geen verkoop van boten noemen (staat nergens in hun bronnen).
export const site = {
  naam: 'Hajdari Boot en Polyester Service',
  kort: 'Hajdari',
  plaats: 'Kerkdriel',
  straat: 'Paterstraat 7D',
  postcode: '5331 EA Kerkdriel',
  tel: '06 14 60 66 86',
  telHref: 'tel:+31614606686',
  wa: 'https://wa.me/31614606686',
  mail: 'hbepservice@gmail.com',
  facebook: 'https://www.facebook.com/people/Hajdari-Boot-En-Polyesterservice/100063633789389/',
  instagram: 'https://www.instagram.com/hajdari_bootservice/',
  route: 'https://www.google.com/maps/dir/?api=1&destination=Hajdari+Boot+en+Polyester+Service%2C+Paterstraat+7D%2C+5331+EA+Kerkdriel',
  reviews: 'https://www.google.com/maps/place/Hajdari+Boot+en+Polyester+Service/@51.7663317,5.3384832,17z/data=!4m8!3m7!1s0x47c6f7547e8b6cbf:0xcbe2a8f0c64eb16!8m2!3d51.7663317!4d5.3384832!9m1!1b1!16s%2Fg%2F1hc3d368b',
  google: { score: '4,8', aantal: 12 },
  themeColor: '#0c1724',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Openingstijden van Google (dag: 0 = zondag).
export const tijden = [
  { dag: 1, naam: 'Maandag', van: '08:00', tot: '17:00' },
  { dag: 2, naam: 'Dinsdag', van: '08:00', tot: '17:00' },
  { dag: 3, naam: 'Woensdag', van: '08:00', tot: '17:00' },
  { dag: 4, naam: 'Donderdag', van: '08:00', tot: '17:00' },
  { dag: 5, naam: 'Vrijdag', van: '08:00', tot: '17:00' },
  { dag: 6, naam: 'Zaterdag', van: '08:30', tot: '15:00' },
  { dag: 0, naam: 'Zondag', van: '', tot: '' },
];

// Letterlijk van Google (5 sterren), ingekort met "…". Naam: voornaam + initiaal.
export const grootCitaat = {
  naam: 'Leo S.',
  tekst: 'Ons bootje van 52 jaar jong is … van top tot teen geschilderd en van een nieuwe stootrand voorzien. Ook is het onderwaterschip geschild en met ester-vinyl is behandeld. We kunnen er weer 50 jaar mee vooruit.',
};
export const reviews = [
  { naam: 'Nick K.', tekst: 'Maakt elk Vaarseizoen alles weer tiptop in orde schilder/ polijst/anti fouling etc , harde werker staat altijd voor ons klaar' },
  { naam: 'Sander A.', tekst: 'Een eerlijk en heerlijk bedrijf met mensen die hart voor je boot hebben! Doen wat beloofd wordt is hier nog normaal.' },
  { naam: 'Yonder S.', tekst: 'Mijn polyesterboot is vakkundig geïnspecteerd, er is een deskundig behandelplan opgesteld en de boot is volgens afspraken keurig netjes afgewerkt met een 2 componenten verfsysteem. … de boot is weer als nieuw.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Hajdari, ik heb een vraag over mijn boot.');
