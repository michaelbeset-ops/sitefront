// Feiten (bekeken 8 oktober 2026), ruwe bronnen in ../../bron:
// - Google-bedrijfsprofiel: "Leverancier van zonwering", 5,0 uit 9 reviews, 06 10874662, geen website.
//   Tijden: ma t/m vr 07:00-17:00, za 09:00-16:00, zo gesloten. Adres is een woonstraat: alleen "Halsteren" tonen.
// - Instagram @wooncomforthalsteren: "Klimaat & zonwering / Airco, Rolluiken, Screens, Horren, Raamdecoratie op maat /
//   Comfort, isolatie & energiebesparing"; posts juli-september 2026 (zie bron/ig/captions.txt).
// - Facebook: intro (airco's, rolluiken, horren, screens), WhatsApp +31 6 10874662, info@wooncomforthalsteren.nl.
// - Eigenaarsnaam staat niet in hun eigen bronnen: nergens noemen.
export const site = {
  naam: 'Wooncomfort Halsteren',
  plaats: 'Halsteren',
  tel: '06 10 87 46 62',
  telHref: 'tel:+31610874662',
  wa: 'https://wa.me/31610874662',
  mail: 'info@wooncomforthalsteren.nl',
  instagram: 'https://www.instagram.com/wooncomforthalsteren/',
  facebook: 'https://www.facebook.com/p/Wooncomfort-Halsteren-61577642294464/',
  google: { score: '5,0', aantal: 9 },
  themeColor: '#14213a',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Google, stand 8 oktober 2026. 0 = zondag.
export const tijden: [string, string][] = [
  ['Maandag', '07:00 - 17:00'],
  ['Dinsdag', '07:00 - 17:00'],
  ['Woensdag', '07:00 - 17:00'],
  ['Donderdag', '07:00 - 17:00'],
  ['Vrijdag', '07:00 - 17:00'],
  ['Zaterdag', '09:00 - 16:00'],
  ['Zondag', 'gesloten'],
];

// Letterlijk van Google (alle 9 reviews zijn 5 sterren), soms ingekort met "…". Voornaam + initiaal.
export const reviews = [
  { naam: 'Judith', tekst: 'Doordat er iemand was uitgevallen, konden onze rolluiken onverwacht diezelfde dag nog geplaatst worden. Dat was erg fijn. De montage ging snel en netjes en de monteurs waren vriendelijk.' },
  { naam: 'Kimberley', tekst: 'Er is een elektrische zonnescherm geplaatst en ziet er top uit! Wooncomfort Halsteren is een professioneel bedrijf, denken mee, goede communicatie en je kunt een top service verwachten.' },
  { naam: 'Elif V.', tekst: 'Hor laten plaatsen in de slaapkamer. Netjes ingemeten en binnen no-time geplaatst, duurde nog geen half uur!' },
  { naam: 'Walter L.', tekst: 'Professioneel een luxe hordeur geplaatst in ons huis. Erg tevreden, strak geplaatst echt een aanrader.' },
  { naam: 'Demi V.', tekst: 'Super ervaring. Eerst het plaatsen van rolluiken. Later ook nog plissegordijnen aangeschaft.' },
  { naam: 'Helene V.', tekst: 'Heel netjes en correct gewerkt! We zijn er super blij mee!! Bedankt voor de goede zorgen!' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Wooncomfort Halsteren, ik heb een vraag.');
