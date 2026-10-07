// Feiten (bekeken 7 oktober 2026):
// - Google-bedrijfsprofiel "Lieve Lust veelzijdige catering" (Catering): Buskeshoeven 101, 5242 KR Rosmalen (woonadres:
//   op de site alleen "Rosmalen, regio Den Bosch"), 06 81745778, 4,9 uit 32 reviews, geen openingstijden,
//   websiteknop = lieve-lust.nl (geeft nu 403 "Website niet bereikbaar").
// - Eigen site lieve-lust.nl (JouwWeb) via web.archive.org: home (17-01-2026), over-ons, buffetten(-walking-dinners),
//   barbecue-arrangement, hapjes-borrelplanken, lunch-brunch-en-high-tea, stamppot-buffet, uitvaart-catering,
//   dranken-arrangement, rental-allround-events, verhuur, contact. Eigenaar volgens "Over ons": Bas Wijlaars.
// - Instagram: instagram.com/lievelustrosmalen, Facebook: profile.php?id=61565461641581 (links op hun eigen site).
// Prijzen uit het archief worden NIET getoond (niet actueel te bevestigen).
export const site = {
  naam: 'Lieve Lust',
  vol: 'Lieve Lust veelzijdige catering',
  plaats: 'Rosmalen',
  regio: 'Rosmalen, regio Den Bosch',
  tel: '06 81 74 57 78',
  telHref: 'tel:+31681745778',
  wa: 'https://wa.me/31681745778',
  instagram: 'https://www.instagram.com/lievelustrosmalen/',
  facebook: 'https://www.facebook.com/profile.php?id=61565461641581',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Lieve+Lust+veelzijdige+catering+Rosmalen',
  google: { score: '4,9', aantal: 32 },
  themeColor: '#101828',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Letterlijk van Google (5 sterren, stand 7 oktober 2026). Naam: voornaam + initiaal. Ingekort met "…".
export const reviews = [
  { naam: 'Gwen', wanneer: 'een maand geleden', tekst: 'Catering gedaan voor een feestje van 50 personen. Makkelijk in contact en goed in overleg. Rekening gehouden met de wensen en echt heel bijzondere en smaakvolle hapjes neergezet. Iedereen was er enthousiast over!' },
  { naam: 'Willem C.', wanneer: 'een jaar geleden', tekst: 'Lieve Lust heeft de catering verzorgd tijdens ons 12,5 jarig huwelijksfeest. … Hapjes, drank en een heerlijk walking dinner werden met een gulle lach uitgeserveerd.' },
  { naam: 'Mariëlle v.d. H.', wanneer: 'een jaar geleden', tekst: 'Lieve Lust heeft de catering voor onze nieuwjaarsborrel gedaan en dat was heel goed bevallen. Lekkere hapjes, duidelijke afspraken, goede prijs en heel erg vriendelijk geholpen.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hoi Lieve Lust! Ik heb een vraag over catering voor een feest.');
