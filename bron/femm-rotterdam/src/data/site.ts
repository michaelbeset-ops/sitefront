// Feiten (bekeken 01-10-2026). Oude site femm.nl: één plaatje met een kaart van het Noordereiland en een tekstballon:
// "Groothandel in scheepsuitrusting", "Openingstijden: ma tot vrij, 9 tot 5. Daarbuiten in overleg (kan ook zaterdag).
// In overleg levering aan boord", Maaskade 132 B, 3071 NK Rotterdam, tel 010 214 08 47, info@femm.nl.
// Google-bedrijfsprofiel: winkel voor scheepvaartbenodigdheden, 4,8 uit 98 reviews, ma-vr 09:00-17:00, za/zo gesloten.
// Reviews (samengevat): groot assortiment, veel kennis, scherpe prijzen, snel gevonden (bv. primer), zeer behulpzaam.
export const site = {
  naam: 'F.E.M.M. Rotterdam',
  kort: 'F.E.M.M.',
  soort: 'Groothandel in scheepsuitrusting',
  straat: 'Maaskade 132-B',
  postcode: '3071 NK',
  plaats: 'Rotterdam',
  wijk: 'Noordereiland',
  tel: '010 214 08 47',
  telHref: 'tel:+31102140847',
  mail: 'info@femm.nl',
  maps: 'https://www.google.com/maps/search/?api=1&query=F.E.M.M.+Maaskade+132-B+Rotterdam',
  google: { score: '4,8', aantal: 98 },
  themeColor: '#f1f2ee',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

/** Mail-link met onderwerp en een kort ingevuld lijstje. */
export const mailMet = (onderwerp: string, tekst: string) =>
  `mailto:${site.mail}?subject=${encodeURIComponent(onderwerp)}&body=${encodeURIComponent(tekst)}`;

export const lijstMail = mailMet('Aanvraag scheepsuitrusting',
  'Goedendag,\n\nGraag een prijs voor:\n- \n- \n- \n\nSchip / ligplaats: \nAan boord leveren: ja / nee\n\nMet vriendelijke groet,\n');

/** Het merkteken: de pyloon van de Erasmusbrug met tuien, zoals in het oude logo. viewBox 0 0 48 40 */
export const brugPaden = {
  pyloon: 'M27 2 L27 18 L22 34',
  tuien: 'M27 4 L42 32 M27 7 L38 32 M27 10 L34 32 M27 13 L30 32 M27 6 L7 32 M27 9 L11 32 M27 12 L15 32',
  dek: 'M2 32 H46',
};
