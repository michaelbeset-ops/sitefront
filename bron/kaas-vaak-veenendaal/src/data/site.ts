// Feiten (bekeken 8 oktober 2026), ruwe bronnen in ../../bron:
// - Google-bedrijfsprofiel "Kaas Vaak, de Kaaszaak": kaaswinkel, 4,6 uit 43, Prins Bernhardlaan 50, 3901 CC Veenendaal,
//   06 50241693, winkelbezoek / buiten afhalen / bezorging, openingstijden (zie onder). Foto's "Van eigenaar" geplaatst feb 2026.
// - Eigen site eapbouman.eu (titel "Kaas Vaak Veenendaal", © 2025): kaassoorten, "meer dan 100 verschillende soorten kazen",
//   sappen, dipjes, olijven, Italiaanse keuken, borrelplanken, kado- en kerstpakketten, leveren aan huis, opsturen binnen NL en EU,
//   kaasvaakveenendaal@gmail.com. Instagram @kaasvaakveenendaal.
// - kaas-vaak.nl (waar Google naar linkt) eindigt in "401 Onbevoegd" bij de sitebouwer; kaasvaak.com is een lege template.
export const site = {
  naam: 'Kaas Vaak, de Kaaszaak',
  kort: 'Kaas Vaak',
  straat: 'Prins Bernhardlaan 50',
  postcode: '3901 CC',
  plaats: 'Veenendaal',
  tel: '06 50 24 16 93',
  telHref: 'tel:+31650241693',
  wa: 'https://wa.me/31650241693',
  mail: 'kaasvaakveenendaal@gmail.com',
  instagram: 'https://www.instagram.com/kaasvaakveenendaal/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Kaas+Vaak+de+Kaaszaak+Prins+Bernhardlaan+50+Veenendaal',
  google: { score: '4,6', aantal: 43 },
  themeColor: '#161514',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Openingstijden volgens Google (8-10-2026). Index = Date.getDay() (0 = zondag). Elke dag: lijst van [open, dicht] in minuten.
// Let op: hun eigen site eapbouman.eu noemt woensdag 8.30-13.00; Google zegt woensdag gesloten. Navragen bij oplevering.
const t = (u: number, m = 0) => u * 60 + m;
export const tijden: { dag: string; blokken: [number, number][] }[] = [
  { dag: 'Zondag', blokken: [] },
  { dag: 'Maandag', blokken: [] },
  { dag: 'Dinsdag', blokken: [[t(8, 30), t(13)]] },
  { dag: 'Woensdag', blokken: [] },
  { dag: 'Donderdag', blokken: [[t(8, 30), t(13)], [t(13, 30), t(17, 30)]] },
  { dag: 'Vrijdag', blokken: [[t(8, 30), t(13)], [t(13, 30), t(17, 30)]] },
  { dag: 'Zaterdag', blokken: [[t(8), t(14)]] },
];
export const tijd = (m: number) => `${Math.floor(m / 60)}.${String(m % 60).padStart(2, '0')}`;

// Letterlijk van Google (positief, Nederlands), ingekort met "…". Naam: voornaam + initiaal zoals op Google.
export const reviews = [
  { naam: 'J.', tekst: 'Heel aardige en kundige verkoper met een hart voor kaas. Hij verkoopt onder andere Soete Liefde, een kaas die je niet vaak ziet.' },
  { naam: 'Mariska d.H.', tekst: 'Zulke fijne mensen, passie voor het vak en het product en geven fijne tips' },
  { naam: 'Plonie V.', tekst: 'Heerlijk veel lekkere kaas hapjes en drankjes. Je word erg vriendelijk geholpen. En alles is goed schoon en verzorgd.' },
  { naam: 'Ingrid D.', tekst: 'Leuke winkel, vriendelijke mensen superservice♡' },
  { naam: 'W. S.', tekst: 'Top kaashal en vriendelijke bediening.' },
  { naam: 'Folkert v.d.B.', tekst: 'Vooral gespecialiseerd in heerlijke harde kazen.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Kaas Vaak, ik heb een vraag.');
