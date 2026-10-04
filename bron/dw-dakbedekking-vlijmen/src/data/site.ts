// Feiten: Google-bedrijfsprofiel "DW Dakbedekking en Montage" (bekeken 4 oktober 2026; 4,9 uit 52 reviews, 49x vijf sterren,
// Dakdekker, Beneluxlaan 53, 5251 LD Vlijmen, 06 47973046, ma-vr 07:00-19:00, za 07:00-13:00, zo gesloten).
// Huidige site dwdakbedekking.nl ("Binnenkort online", Daniel Worang, info@dwdakbedekking.nl, Bellen/Whatsapp).
// Facebook /dwdakbedekking: "Specialist in platte daken" (Nieuwbouw, Reparatie, Renovatie, Onderhoud, Reiniging).
// Instagram @dwdakbedekking. KvK 75755564: van hun eigen visitekaartje (Facebook-foto).
export const site = {
  naam: 'DW Dakbedekking en Montage',
  kort: 'DW Dakbedekking',
  eigenaar: 'Daniel Worang',
  straat: 'Beneluxlaan 53',
  postcode: '5251 LD',
  plaats: 'Vlijmen',
  tel: '06 47 97 30 46',
  telHref: 'tel:+31647973046',
  wa: 'https://wa.me/31647973046',
  mail: 'info@dwdakbedekking.nl',
  kvk: '75755564',
  instagram: 'https://www.instagram.com/dwdakbedekking/',
  facebook: 'https://www.facebook.com/dwdakbedekking/',
  maps: 'https://www.google.com/maps/search/?api=1&query=DW+Dakbedekking+en+Montage+Beneluxlaan+53+Vlijmen',
  reviews: 'https://www.google.com/maps/search/?api=1&query=DW+Dakbedekking+en+Montage+Vlijmen',
  google: { score: '4,9', aantal: 52, vijf: 49 },
  themeColor: '#121412',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay). Tijden in minuten voor de live status.
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '07.00', dicht: '19.00', van: 420, tot: 1140 },
  { dag: 2, naam: 'Dinsdag', open: '07.00', dicht: '19.00', van: 420, tot: 1140 },
  { dag: 3, naam: 'Woensdag', open: '07.00', dicht: '19.00', van: 420, tot: 1140 },
  { dag: 4, naam: 'Donderdag', open: '07.00', dicht: '19.00', van: 420, tot: 1140 },
  { dag: 5, naam: 'Vrijdag', open: '07.00', dicht: '19.00', van: 420, tot: 1140 },
  { dag: 6, naam: 'Zaterdag', open: '07.00', dicht: '13.00', van: 420, tot: 780 },
  { dag: 0, naam: 'Zondag', open: '', dicht: '', van: 0, tot: 0 },
];

// Diensten: Facebook-intro ("Specialist in platte daken": nieuwbouw, reparatie, renovatie, onderhoud, reiniging),
// Google-review-label "Reparatie van dakschade en Dak installeren", lichtkoepels en dakkapel uit hun foto's en reviews.
export const chips = ['Platte daken', 'Nieuwbouw', 'Renovatie', 'Reparatie', 'Dakschade', 'Onderhoud', 'Reiniging', 'Lichtkoepels', 'Dakkapellen'];

// Letterlijk van Google (stand 4 oktober 2026), alle vijf sterren. Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Robbert N.', wanneer: '3 maanden geleden', tekst: 'Dit bedrijf en natuurlijk Daniel en zijn team zijn toppers! Vakwerk, goede communicatie, eerlijk en betrouwbaar doen ze wat ze beloven. En tussen alle cowboys en snelle geldverdieners in een krappe markt is DW Dakbedekking en Montage een welkome verademing. Ga zo door mannen!' },
  { naam: 'Janneke D.', wanneer: '10 maanden geleden', tekst: 'Daniel heeft bij ons het dak van de dakkapel gerepareerd. We zijn heel tevreden hierover! Daniel denkt mee, is kundig, vriendelijk en bied een goede service! Ik zou hem aan iedereen aanraden.' },
  { naam: 'Maaike J.', wanneer: '7 maanden geleden', tekst: 'DW dakbedekking heeft snel en goed ons dak gemaakt. Heel blij met het meedenken en de goede communicatie.' },
  { naam: 'Gerdien B.', wanneer: '3 maanden geleden', tekst: 'Goed geholpen door Daniel. Weet waar hij het over heeft.' },
  { naam: 'Vincent V.', wanneer: '3 jaar geleden', tekst: 'Erg tevreden... Daniel is erg vriendelijk.. Denkt mee en leverde superwerk af... Top!!... Dank je wel...' },
];

// Letterlijke korte citaten die Google bovenaan de reviews toont.
export const citaten = ['Snelle reactie, goed advies en goede prijs', 'Goede service en snel afgewerkt komt zijn afspraken na een echte vakman …'];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waOfferte = waMet('Hallo Daniel, ik wil graag een offerte voor mijn dak.');
