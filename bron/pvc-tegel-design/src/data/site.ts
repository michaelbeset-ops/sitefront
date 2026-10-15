// Feiten (bekeken 15 oktober 2026), bronnen in bron/:
// - Google (bron/google): "Pvc & Tegel Design", Stofferingszaak, Lopikerstraat 52, 2871 BZ Schoonhoven, 06 51141180, 5,0 uit 18
//   reviews, zaterdag 10:00-16:00, overige dagen gesloten, GEEN website. Beschrijving: "Leveren, aanbrengen van: tegels, pvc,
//   sanitair. Aannemer: verbouwingen."
// - Instagram @pvc_en_tegel_design (bron/social/instagram.txt): winkel geopend 10-01-2026, za 10:00-16:00 (post 14-09-2026),
//   doordeweeks op afspraak, info@pvctegeldesign.nl, collab-post met Schoonhoven Zilverstad over Kevin en Danny.
// - indekrimpenerwaard.nl: "van advies uit de praktijk tot product en uitvoering", PVC en tegels voor vloer, muur, trap en terras.
// Winkelpand (geen woonadres): straat mag getoond worden.
export const site = {
  naam: 'Pvc & Tegel Design',
  plaats: 'Schoonhoven',
  straat: 'Lopikerstraat 52',
  postcode: '2871 BZ',
  tel: '06 51 14 11 80',
  telHref: 'tel:+31651141180',
  wa: 'https://wa.me/31651141180',
  mail: 'info@pvctegeldesign.nl',
  insta: 'https://www.instagram.com/pvc_en_tegel_design/',
  reviews: 'https://www.google.com/maps/place/Pvc+%26+Tegel+Design/@51.9464475,4.8543484,17z/data=!4m6!3m5!1s0x47c67f662e50d069:0xc2e91ac3b2ce034c!8m2!3d51.9464475!4d4.8543484!16s%2Fg%2F11mdbmwdc0',
  route: 'https://www.google.com/maps/dir/?api=1&destination=Lopikerstraat+52+2871+BZ+Schoonhoven',
  google: { score: '5,0', aantal: 18 },
  themeColor: '#12151d',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Maandag = 1 ... zondag = 0. Bron: Google-profiel + Instagram (14-09-2026). Doordeweeks op afspraak.
export const tijden: { dag: string; nr: number; open: [number, number] | null }[] = [
  { dag: 'Maandag', nr: 1, open: null },
  { dag: 'Dinsdag', nr: 2, open: null },
  { dag: 'Woensdag', nr: 3, open: null },
  { dag: 'Donderdag', nr: 4, open: null },
  { dag: 'Vrijdag', nr: 5, open: null },
  { dag: 'Zaterdag', nr: 6, open: [10, 16] },
  { dag: 'Zondag', nr: 0, open: null },
];

// Letterlijk van Google (alle 5 sterren), ingekort met "…". Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Arend v.', wanneer: '3 maanden geleden', over: 'Badkamer', tekst: 'Onze hele badkamer laten betegelen door Kevin en super tevreden. Hij doet meer dan gevraagd en heeft alles strak afgewerkt. Kevin gaat alleen voor een 10, denkt goed mee en levert top werk.' },
  { naam: 'Peter W.', wanneer: 'een maand geleden', over: 'Pvc-vloer', tekst: 'Erg tevreden over het werk van Danny! Dit is de 2e keer dat we een pvc vloer laten leggen. Vanaf het begin merk je dat hij niet iemand is die een vloer er even …' },
  { naam: 'Chantal H.', wanneer: '5 maanden geleden', over: 'Keuken en vloer', tekst: 'Prachtige tegeltjes uitgezocht in de winkel welke prachtig staan in onze nieuwe keuken. … Superfijn dat we staaltjes mee konden nemen om zo alles goed te kunnen bekijken. … Beide werken netjes en leveren vakwerk af.' },
  { naam: 'Angelique d.', wanneer: '7 maanden geleden', over: 'Vloeren en trappen', tekst: 'Danny heeft bij ons mooi werk geleverd. Hij kreeg de opdracht om 2 verdiepingen en 2 trappen te bekleden met plak pvc. Hij heeft dit netjes afgewerkt. … Ook stond hij open voor feedback en de communicatie is goed geregeld.' },
  { naam: 'Klazina v.', wanneer: '8 maanden geleden', over: 'Keukentegels', tekst: 'Wat ben ik blij met mijn nieuwe keukentegels, het fleurt de hele kamer op. Vakkundig geadviseerd en heel precies werk verricht …' },
  { naam: 'Mathijs', wanneer: '7 maanden geleden', over: 'Vloer, 90 m²', tekst: 'We hebben 90m2 vloer in onze nieuwe woning laten plaatsen inclusief plinten en egaliseren. Passend advies, snel schakelen en zeer tevreden met het resultaat!' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Pvc & Tegel Design, ik heb een vraag over een vloer of tegels.');
