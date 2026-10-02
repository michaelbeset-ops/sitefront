// Feiten: huidige site www.artwyse.nl (one-pager, bekeken 02-10-2026) + content/b22/ALLE.md.
// About: "Wij zijn een integraal dienstverlenend bureau, d.w.z. wij behandelen alle aspecten van de bouwprocedure vanaf ontwerp,
// constructieberekeningen, kostencalculaties, en bouwbegeleiding. Hiervoor hebben we alle benodigde kennis zelf in huis.
// Artwyse heeft diverse projecten van Delfzijl tot Den Haag." / "Wij hebben een heldere werkmethodiek conform de huidige
// beroepsrichtlijnen ... Wij zijn lid van beroepsorganisaties en ons werk is verzekerd bij Centraal Beheer Achmea."
// Houtconstructeur: "Duurzame bouw- en houtconstructie is onze specialiteit. Wij zien voordeel in de toepassing van dragende
// binnen-elementen, en zijn samen met de Vereniging van Houtconstructeurs actief bezig met de ontwikkeling van rekenprogramma's,
// die landelijk door verschillende constructiebureaus kunnen worden gebruikt."
// Skills: Advies, Ontwerp, Engineering, Begeleiding, Aanvragen. Lid KIVI 1036717. Architectenregister (nummer staat op de site
// twee keer verschillend: 1 890601 123 en 1 890501 123, daarom hier zonder nummer). KvK 04042844. Voorwaarden DNR 2005 rev. 2011,
// Consumentenregeling 2006, Standaardtaakbeschrijving. Contact: Dr. A.F. Philipsweg 13-A, 9403 AC Assen, 0592 311253,
// info@artwyse.nl, "5 minuten loopafstand vanaf NS station Assen".
export const site = {
  naam: 'Artwyse Architecten Engineers',
  kort: 'Artwyse',
  straat: 'Dr. A.F. Philipsweg 13-A',
  postcode: '9403 AC',
  plaats: 'Assen',
  tel: '0592 311 253',
  telHref: 'tel:+31592311253',
  mail: 'info@artwyse.nl',
  kvk: '04042844',
  kivi: '1036717',
  register: 'https://www.architectenregister.nl/vind-een-architect/?searchTerm=onur',
  vhc: 'http://www.houtconstructeur.eu',
  maps: 'https://www.google.com/maps/search/?api=1&query=Dr.+A.F.+Philipsweg+13-A+Assen',
  themeColor: '#16181b',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

export const mailMet = (onderwerp: string, tekst: string) =>
  `mailto:${site.mail}?subject=${encodeURIComponent(onderwerp)}&body=${encodeURIComponent(tekst)}`;

export const planMail = mailMet('Vraag over een bouwplan',
  'Goedendag,\n\nIk heb een bouwplan en wil het graag met u bespreken.\n\nWat wilt u bouwen of verbouwen: \nWaar (plaats): \nHoe ver bent u (idee, ontwerp, vergunning, bouw): \nWaarvoor zoekt u ons (ontwerp, constructieberekening, calculatie, begeleiding, aanvraag): \n\nMet vriendelijke groet,\n');
