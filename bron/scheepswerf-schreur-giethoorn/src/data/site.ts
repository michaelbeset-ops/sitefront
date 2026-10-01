// Feiten van punterbouw.nl (alle pagina's bekeken 01-10-2026: home, Het bedrijf, Rondvaartboten, Aanbod, Prijzen,
// Punters, Overige boottypes, Onderhoud en reparatie, Masten & rondhout, Contact) en de Facebookposts op hun homepage.
// Google-bedrijfsprofiel (via scratchpad/content/b20/ALLE.md): Botenbouwers, Binnenpad 135, 8355 BW Giethoorn,
// 0521 361 285, 4,7 uit 7 reviews, ma t/m vr 08:00-17:00. Mail info@punterbouw.nl (contactpagina).
export const site = {
  naam: 'Scheepswerf Schreur',
  straat: 'Binnenpad 135',
  postcode: '8355 BW',
  plaats: 'Giethoorn',
  tel: '0521 361 285',
  telHref: 'tel:+31521361285',
  mail: 'info@punterbouw.nl',
  maps: 'https://www.google.com/maps/search/?api=1&query=Scheepswerf+Schreur+Binnenpad+135+Giethoorn',
  google: { score: '4,7', aantal: 7 },
  themeColor: '#2e5a4c',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

/** Mail-link voor een offerte, met onderwerp. */
export const mailMet = (onderwerp: string) => `mailto:${site.mail}?subject=${encodeURIComponent(onderwerp)}`;

/** De punters van de prijzenpagina van punterbouw.nl, met hun maten in cm (lengte x breedte). Geen prijzen: "bel de werf". */
export const punters = [
  { id: 'roeiboot', naam: 'Roeiboot', bij: 'Geschikt als visboot', l: 490, b: 120 },
  { id: 'motor', naam: 'Motorpunter', bij: 'Met platte spiegel', l: 680, b: 160, spiegel: true },
  { id: 'gieters', naam: 'Gieterse punter', bij: 'Standaard, zeilklaar', l: 670, b: 150 },
  { id: 'tussen', naam: 'Tussenpunter', bij: 'Standaard', l: 680, b: 180 },
  { id: 'kamper', naam: 'Kamperpunter', bij: 'Standaard, zeilklaar', l: 650, b: 190 },
  { id: 'beulaker', naam: 'Beulakermeerpunter', bij: 'Standaard, zeilklaar', l: 700, b: 200 },
  { id: 'nwh', naam: 'Noordwesthoekpunter', bij: 'Voor- en zijkasten, zeilklaar', l: 720, b: 210 },
  { id: 'openzee', naam: 'Open zeepunter', bij: 'Standaard met zeil', l: 810, b: 230 },
  { id: 'kajuit', naam: 'Zeepunter met kajuit', bij: 'Standaard met zeil', l: 875, b: 240 },
  { id: 'grundel', naam: 'Grundel met kajuit', bij: '4-5 slaapplaatsen, gaffeltuig', l: 685, b: 235 },
];

/** Bovenaanzicht van een punter als SVG-pad (cm), boeg links op x=0, hartlijn op y=0. Schematisch. */
export const romp = (l: number, b: number, spiegel = false) => {
  const k = (b / 2) / 0.75; // een symmetrische bezier komt op 3/4 van zijn controlepunt uit
  if (spiegel) {
    const s = b * 0.36;
    return `M0 0C${l * .2} ${-k} ${l * .62} ${-b / 2 - 2} ${l} ${-s}L${l} ${s}C${l * .62} ${b / 2 + 2} ${l * .2} ${k} 0 0Z`;
  }
  return `M0 0C${l * .24} ${-k} ${l * .62} ${-k} ${l} 0C${l * .62} ${k} ${l * .24} ${k} 0 0Z`;
};
