// Feiten (bekeken 01-10-2026). dilago.nl homepage geeft een serverfout (500, lege pagina). Werkende subpagina's:
// /hijs-en-heftechniek ("Alles onder één dak / 24/7 storingsdienst / Service en onderhoud", EKH, merken o.a. Crosby, GreenPin, Yale),
// /Service-en-Onderhoud ("Sinds 1977 ... een begrip in de hijswereld", ISO 9001, VCA en EKH, mobiele trekbank, keuren op locatie,
// storingsdienst 24 uur per dag 7 dagen per week, door TNO goedgekeurde hydraulische testbank, gespoten in de jaarkleur, nieuw
// certificaat per item, NEN-3140, ladders en steigers jaarlijks), /Verhuur (hefwerktuigen huren, na retour gecontroleerd en getest),
// /Over-DiLAGO/ (boven en onder de haak gecertificeerd bij de EKH; eenmanszaak in Papendrecht 1977), /Klantenservice/ (werkdagen
// 8.00-17.00, vrijdag 8.00-16.00, 078-6815333), /Jaarkleuren/ (IMO-tabel), voet: Nieuwland Parc 88, 3351 LJ Papendrecht,
// +31 (0)78-6815333, verkoop@dilago.nl. Kop: "Storingsnummer buiten kantooruren 078-6815333". Folder: "Laat uw veiligheid onze
// zorg zijn!", "Verkoop / Verhuur / Reparaties / Onderhoud / Testen", "specialisme in hijs-, hef-, en schuiftechniek".
// TÜV-logo: ISO 9001:2015, VCA*. Google 4,8 uit 6; reviews: prima contact, vriendelijk en deskundig; goed, stabiel en vernieuwend.
export const site = {
  naam: 'DiLAGO',
  bv: 'DiLAGO Hijs- en Heftechniek B.V.',
  straat: 'Nieuwland Parc 88',
  postcode: '3351 LJ',
  plaats: 'Papendrecht',
  tel: '078 681 5333',
  telHref: 'tel:+31786815333',
  mail: 'verkoop@dilago.nl',
  maps: 'https://www.google.com/maps/search/?api=1&query=DiLAGO+Nieuwland+Parc+88+Papendrecht',
  webshop: 'https://dilago.nl/hijs-en-heftechniek',
  google: { score: '4,8', aantal: 6 },
  themeColor: '#1e2023',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

export const mailMet = (onderwerp: string, tekst: string) =>
  `mailto:${site.mail}?subject=${encodeURIComponent(onderwerp)}&body=${encodeURIComponent(tekst)}`;

export const keuringMail = mailMet('Aanvraag keuring',
  'Goedendag,\n\nGraag een afspraak voor het keuren van onze hijs- en hefmiddelen.\n\nWat (en hoeveel): \nBij u in de werkplaats of bij ons op locatie: \nAdres: \n\nMet vriendelijke groet,\n');

export const vraagMail = mailMet('Vraag / offerte',
  'Goedendag,\n\nIk heb een vraag over:\n\nKopen of huren: \nWat en hoeveel: \n\nMet vriendelijke groet,\n');

/** De IMO-jaarkleuren van hun eigen pagina /Jaarkleuren/ (zes kleuren, cyclus van zes jaar). */
export const jaarkleuren = [
  { jaar: 2023, naam: 'Blauw', ral: 'RAL 5015', kleur: '#2271b3' },
  { jaar: 2024, naam: 'Geel', ral: 'RAL 1028', kleur: '#f4a900' },
  { jaar: 2025, naam: 'Rood', ral: 'RAL 3000', kleur: '#a72920' },
  { jaar: 2026, naam: 'Grijs / zwart', ral: 'RAL 7040', kleur: '#9da3a6' },
  { jaar: 2027, naam: 'Groen', ral: 'RAL 6018', kleur: '#57a639' },
  { jaar: 2028, naam: 'Bruin', ral: 'RAL 8004', kleur: '#8e402a' },
];
