// Feiten (bekeken 7 oktober 2026), bronnen in bron/:
// - machinefabriekbgw.nl (Home, Geschiedenis, Contact; bron/web/*.html):
//   Home: "jong bedrijf", "drie enthousiaste collega's", "50 jaar ervaring op het gebied van alle denkbare verspaanmethoden",
//   "draaien van voornamelijk lange producten": schroefassen, pompassen, impellerassen, walsrollen, "tot maar liefst 12M lengte,
//   1250MM diameter en een maximaal gewicht van 12,6 ton" (LET OP: 1250 mm, niet 1350), "ook voor kort draaiwerk",
//   kotteren, spiebaan steken, richten, "voornamelijk voor nieuwbouw, maar ook voor reparatiewerk", richtpers, penetrant
//   scheuronderzoek, "level 2 certificaat", "Dye Penetrant Test", steken "met én zonder radius op de bodem".
//   Meta description: "lang draaiwerk t/m 12 meter", "bekend met alle keuringsinstanties en de hoogste kwaliteitseisen".
//   Geschiedenis: pand 40 jaar machinefabriek Houtgraaf & Kastelein (basis gelegd in 1918), twee draaibanken en een kotterbank
//   van het merk TOS overgenomen, "de nauwkeurigste toleranties".
//   Contact: Daltonstraat 5, 3316 GD Dordrecht, +31(0)78-6179616, info@machinefabriekbgw.nl (fax niet overgenomen).
// - Google (niet geclaimd): Machinefabriek BGW BV, 078 617 9616, ma-vr 07:30-16:30, za-zo gesloten.
// - KvK 56837011 (Oozo/Company.info: opgericht maart 2013, metaalbewerking).
// GEEN 06-nummer en geen WhatsApp (staat niet op hun eigen site).
export const site = {
  naam: 'Machinefabriek BGW',
  bv: 'Machinefabriek BGW B.V.',
  straat: 'Daltonstraat 5',
  postcode: '3316 GD',
  plaats: 'Dordrecht',
  tel: '078 617 96 16',
  telIntl: '+31 (0)78 617 96 16',
  telHref: 'tel:+31786179616',
  mail: 'info@machinefabriekbgw.nl',
  kvk: '56837011',
  maps: 'https://www.google.com/maps/search/?api=1&query=Machinefabriek+BGW+Daltonstraat+5+3316+GD+Dordrecht',
  themeColor: '#0a1730',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Maxima, letterlijk van hun homepage.
export const max = { lengte: 12000, diameter: 1250, gewicht: 12.6 };

// Tijden volgens Google (0 = zondag).
export const tijden: [string, string | null][] = [
  ['Zondag', null], ['Maandag', '07.30 - 16.30'], ['Dinsdag', '07.30 - 16.30'], ['Woensdag', '07.30 - 16.30'],
  ['Donderdag', '07.30 - 16.30'], ['Vrijdag', '07.30 - 16.30'], ['Zaterdag', null],
];

// Producten die hun homepage noemt.
export const producten = ['Schroefassen', 'Pompassen', 'Impellerassen', 'Walsrollen'];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
