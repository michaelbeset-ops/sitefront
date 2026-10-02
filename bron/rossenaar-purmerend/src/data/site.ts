// Feiten (bekeken 02-10-2026).
// Eigen site rossenaar.nl ("De website is nog onder constructie", (C) 2014): Home "Welkom bij G. Rossenaar, Technisch advies
// bureau". NEN 3140-pagina: werkgever verantwoordelijk naast de fabrikant (CE-markering); machines en arbeidsmiddelen minimaal
// jaarlijks door een deskundige keuren (Arbowet, NEN 3140); "gespecialiseerd in NEN 3140 keuring en het keuren van draagbaar
// klimmateriaal en hebben hiervoor de juiste certificaten in huis"; "Wij komen in overleg met de klant op locatie keuren zodat
// de werknemers zo min mogelijk stagnatie ondervinden op de werkplek. Indien noodzakelijk voeren wij ter plaatse kleine
// reparaties voor u uit." Producten: Spackspuit, Worker, Afplakapparaat. Contact: Impuls 129, 1446 WE Purmerend,
// mobiel 0031653734646, g.rossenaar@rossenaar.nl. Eigen foto: pand met bedrijfsbus (401x436).
// KvK-omschrijving (telefoonboek.nl): "Technisch adviesbureau, alsmede vindingen en innovatie, registratie, keuringen en
// certificering van b.v. handgereedschappen, reparatie en onderhoud, gipsspuiten, spackspuiten en compresoren, reparatie
// diamantzagen, slijpen, boren en herbezetten diamantboren". Opgericht 1 december 1999 (ingenieurs.xyz / KvK-gegevens).
// Google: 5,0 uit 3.
export const site = {
  naam: 'G. Rossenaar Technisch Adviesbureau',
  kort: 'Rossenaar',
  straat: 'Impuls 129',
  postcode: '1446 WE',
  plaats: 'Purmerend',
  tel: '06 53 73 46 46',
  telHref: 'tel:+31653734646',
  mail: 'g.rossenaar@rossenaar.nl',
  maps: 'https://www.google.com/maps/search/?api=1&query=Rossenaar+Technisch+Adviesbureau+Impuls+129+Purmerend',
  google: { score: '5,0', aantal: 3 },
  themeColor: '#1b1f22',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

const wa = (tekst: string) => `https://wa.me/31653734646?text=${encodeURIComponent(tekst)}`;
export const keuringApp = wa('Goedendag, ik wil graag een NEN 3140-keuring inplannen.\n\nBedrijf: \nAantal stuks gereedschap / klimmateriaal (ongeveer): \nLocatie: ');
export const reparatieApp = wa('Goedendag, ik heb een machine voor reparatie of onderhoud.\n\nMachine (merk / type): \nWat is er aan de hand: ');
export const mailHref = `mailto:${site.mail}?subject=${encodeURIComponent('Vraag over keuring of reparatie')}`;
