// Feiten (bekeken 02-10-2026), huidige site xpertisewonen.nl (Divi, (c) 2016): "Zorgvastgoed & Woningmarkt Professionals";
// "Thuis op de markt van wonen en woonzorg"; "XpertiseWonen brengt haar expertise in de praktijk middels onderzoek, advies,
// innovatie en projectmatige/interim opdrachten op het gebied van wonen en woonzorg"; "combineert het beste van twee complexe
// werelden waarin grote veranderingen optreden: de woningmarkt en de zorg"; scheiden van wonen en zorg; vier diensten (Onderzoek &
// advies, Innoveren & verbinden, Project, proces & interim, Onderhoud & veiligheid zorgvastgoed); opdrachtgevers: woningcorporaties,
// zorgorganisaties, vastgoed-/bouworganisaties, makelaars en (semi)overheid; meer dan 17 jaar woningmarktervaring; samenwerking met
// XpertiseZorg; "Van bewoner via cliënt naar klant", training "Verzorgd Verhuren". Oprichter en eigenaar Ludan Schmid (in 2015
// zelfstandig gevestigd; WoningMarkt Consultant). Contact: Enschedesestraat 119, 7551 EL Hengelo, l.schmid@xpertisewonen.nl,
// 00316-42960668. Foto's: Ludan1 (nieuwsbericht ErinThuis) en "nieuwe-locatie-voor-website" (contactpagina, naast het adres).
export const site = {
  naam: 'XpertiseWonen',
  eigenaar: 'Ludan Schmid',
  straat: 'Enschedesestraat 119',
  postcode: '7551 EL',
  plaats: 'Hengelo',
  tel: '06 42 96 06 68',
  telHref: 'tel:+31642960668',
  mail: 'l.schmid@xpertisewonen.nl',
  maps: 'https://www.google.com/maps/search/?api=1&query=Enschedesestraat+119+Hengelo',
  themeColor: '#fbfcfd',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const whatsapp = `https://wa.me/31642960668?text=${encodeURIComponent('Goedendag Ludan, ik wil graag kennismaken over een vraagstuk op het gebied van ')}`;
export const mailMet = (onderwerp: string, tekst: string) =>
  `mailto:${site.mail}?subject=${encodeURIComponent(onderwerp)}&body=${encodeURIComponent(tekst)}`;
export const kennisMail = mailMet('Kennismaking',
  'Goedendag,\n\nGraag maak ik vrijblijvend kennis met XpertiseWonen.\n\nOrganisatie: \nHet vraagstuk (wonen, zorg, zorgvastgoed): \nTelefoonnummer: \n\nMet vriendelijke groet,\n');

/** De vier kamers van de plattegrond: hun vier diensten, elk met een zin van hun eigen dienstpagina. */
export const kamers = [
  { naam: 'Onderzoek & advies', tekst: 'Woningmarkt- en doelgroepenonderzoek, locatie- en haalbaarheidsonderzoek, en de vraag of uw vastgoed nog aansluit op de veranderde zorgmarkt.' },
  { naam: 'Innoveren & verbinden', tekst: 'Begeleiding naar een unieke propositie, van Virtual Reality in de makelaardij tot een klantgerichte werkwijze in de zorg.' },
  { naam: 'Project, proces & interim', tekst: 'Opdrachten voor corporaties, zorgorganisaties, vastgoed- en bouworganisaties, makelaars en (semi)overheid.' },
  { naam: 'Onderhoud & veiligheid zorgvastgoed', tekst: 'Vastgoed, installaties, domotica en brandveiligheid per zorglocatie in beeld, met contracten en kosten.' },
];
