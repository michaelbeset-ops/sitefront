// Feiten (bekeken 02-10-2026), huidige site omnimac.nl ((c) 2008-2026): "Specialisten in technische automatisering";
// "onafhankelijk technisch adviesbureau, gespecialiseerd in ondersteunende diensten voor het mkb en de grafische markt, met de
// nadruk op service"; "richt zich voornamelijk op reclamebureau's en de grafische industrie"; Apple Macintosh en Microsoft Windows,
// hybride omgevingen; FileMaker-maatwerk, door Claris gecertificeerde ontwikkelaar (Pro/Server/Connect Expert); dienstenlijst;
// "Op enkele uitzonderingen na leveren wij geen apparatuur of software, en hierdoor zijn wij volledig objectief";
// support: remote (TeamViewer) en op locatie; contact: antwoord binnen 2 werkdagen, dringend (storing, installatie) bellen 06-54361180.
// Eigen freeware: FMS Controller en WayPoint Manager (v1.2.0). Bandalaan 22, 5641 GG Eindhoven, KvK 17129212, BTW NL001414194B85.
export const site = {
  naam: 'Omnimac Consultancy',
  straat: 'Bandalaan 22',
  postcode: '5641 GG',
  plaats: 'Eindhoven',
  tel: '06 54 36 11 80',
  telHref: 'tel:+31654361180',
  mail: 'info@omnimac.nl',
  kvk: '17129212',
  btw: 'NL001414194B85',
  maps: 'https://www.google.com/maps/search/?api=1&query=Bandalaan+22+Eindhoven',
  software: 'https://www.omnimac.nl/software.html',
  themeColor: '#f4f4f1',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const whatsapp = `https://wa.me/31654361180?text=${encodeURIComponent('Goedendag, ik heb een vraag over onze IT: ')}`;
export const mailMet = (onderwerp: string, tekst: string) =>
  `mailto:${site.mail}?subject=${encodeURIComponent(onderwerp)}&body=${encodeURIComponent(tekst)}`;
export const vraagMail = mailMet('Contactaanvraag',
  'Goedendag,\n\nIk heb een vraag over:\n\nWe werken op (Mac / Windows / beide): \nAantal werkplekken: \nTelefoonnummer: \n\nMet vriendelijke groet,\n');

export const diensten = [
  'Installatie, onderhoud en beheer van servers en werkstations, Mac en Windows',
  'VPN-tunnels voor thuiswerken, beheer op afstand of het koppelen van vestigingen',
  'Periodiek en preventief systeembeheer',
  'Netwerkbeheer en de beveiliging van uw netwerk',
  'Firewalls van onder meer DrayTek, WatchGuard en Kerio',
  'Centraal geregelde antivirus, mail en antispam',
  'Eigen hosting: e-mail, web, ftp en webdav',
  'FileMaker-applicaties op maat, en ondersteuning daarbij',
  'Webapplicaties in PHP, MySQL en ASP',
  'Beeldarchieven met onder meer Canto Cumulus',
];
