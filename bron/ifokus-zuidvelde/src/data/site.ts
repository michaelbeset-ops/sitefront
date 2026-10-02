// Feiten (bekeken 02-10-2026). Huidige site ifokus.nl (Joomla, (c) 2018): logo met drie gestapelde keien en "balans in financiële
// dienstverlening"; slides "Wilt u het gemak van alles onder één dak?", "Alle financiële zaken onder één dak en mogelijk ook nog
// besparen op uw vaste lasten?", "Laat iFokus vrijblijvend een vergelijking maken van uw huidige verzekeringen en/of financiële
// situatie.", "iFokus denkt niet in problemen maar in oplossingen, voor nu én in de toekomst." Blokken Particulier (Verzekeringen,
// Hypotheken, Financiëring, Advisering, Kosten), Zakelijk (Verzekeringen, Financiëring, Advisering, Kosten), ZZP (Verzekeringen,
// Financiëringen, Financial lease, Advisering, Kosten). Contact: Asserstraat 85, 9335 TA Zuidvelde, info@ifokus.nl, 0592-670089.
// Pdf's: dienstverleningsopdracht (kosten op basis van uren of een vast tarief, vooraf vastgelegd; persoonlijk financieel advies
// op basis van een uitgebreide inventarisatie, rapport wordt met u besproken) en AVG (KvK 04056363).
// ALLE.md: verzekeringssoorten particulier/zakelijk, Trustoo 10/10 uit 14.
export const site = {
  naam: 'iFokus',
  volledig: 'iFokus Financiële Dienstverlening',
  straat: 'Asserstraat 85',
  postcode: '9335 TA',
  plaats: 'Zuidvelde',
  tel: '0592 67 00 89',
  telHref: 'tel:+31592670089',
  mail: 'info@ifokus.nl',
  kvk: '04056363',
  maps: 'https://www.google.com/maps/search/?api=1&query=Asserstraat+85+Zuidvelde',
  dienstverlening: 'http://www.ifokus.nl/images/dienstverlenings_opdracht_15112023.pdf',
  themeColor: '#ebe9ee',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const mailMet = (onderwerp: string, tekst: string) =>
  `mailto:${site.mail}?subject=${encodeURIComponent(onderwerp)}&body=${encodeURIComponent(tekst)}`;
export const vergelijkMail = mailMet('Vrijblijvende vergelijking',
  'Goedendag,\n\nGraag een vrijblijvende vergelijking van mijn huidige verzekeringen en/of financiële situatie.\n\nHet gaat om (bijv. hypotheek, auto, inboedel, bedrijf): \nIk ben bereikbaar op telefoonnummer: \n\nMet vriendelijke groet,\n');

export const groepen = [
  { id: 'particulier', naam: 'Particulier', items: ['Hypotheken', 'Levensverzekering', 'Bootverzekering', 'Auto en motor', 'Rechtsbijstand', 'Aansprakelijkheid'] },
  { id: 'zakelijk', naam: 'Zakelijk', items: ['Brand', 'Transport', 'Bedrijfsschade', 'Aansprakelijkheid', 'Beroepsaansprakelijkheid', 'Rechtsbijstand', 'Werkmaterieel', 'CAR-verzekering'] },
  { id: 'zzp', naam: 'Zzp', items: ['Verzekeringen', 'Financieringen', 'Financial lease', 'Advisering'] },
];
