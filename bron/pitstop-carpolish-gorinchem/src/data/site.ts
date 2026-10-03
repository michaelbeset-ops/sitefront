// Feiten: Google-bedrijfsprofiel "Pitstop Car polish & cleaning Autopoetsbedrijf" (bekeken 3 oktober 2026; 4,6 uit 22 reviews),
// Edisonweg 3, 4207 HE Gorinchem, 06 47810832. Ma t/m vr 08:30-17:00, za 09:00-14:00, zo gesloten (Google).
// Diensten en "meer dan 10 jaar": hun eigen website autopoetsengorinchem.nl via web.archive.org (home 2026, onze-service 2014).
// Prijzen van de oude site (2014) bewust niet gebruikt: niet actueel. Geen e-mail, KvK, Instagram of Facebook gevonden.
export const site = {
  naam: 'Pitstop Car Polish & Cleaning',
  kort: 'Pitstop',
  straat: 'Edisonweg 3',
  postcode: '4207 HE',
  plaats: 'Gorinchem',
  tel: '06 47 81 08 32',
  telHref: 'tel:+31647810832',
  wa: 'https://wa.me/31647810832',
  maps: 'https://www.google.com/maps/search/?api=1&query=Pitstop+Car+polish+%26+cleaning+Edisonweg+3+Gorinchem',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Pitstop+Car+polish+%26+cleaning+Autopoetsbedrijf+Gorinchem',
  google: { score: '4,6', aantal: 22 },
  themeColor: '#111214',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay). van/tot in minuten voor de live status.
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '8.30', dicht: '17.00', van: 510, tot: 1020 },
  { dag: 2, naam: 'Dinsdag', open: '8.30', dicht: '17.00', van: 510, tot: 1020 },
  { dag: 3, naam: 'Woensdag', open: '8.30', dicht: '17.00', van: 510, tot: 1020 },
  { dag: 4, naam: 'Donderdag', open: '8.30', dicht: '17.00', van: 510, tot: 1020 },
  { dag: 5, naam: 'Vrijdag', open: '8.30', dicht: '17.00', van: 510, tot: 1020 },
  { dag: 6, naam: 'Zaterdag', open: '9.00', dicht: '14.00', van: 540, tot: 840 },
  { dag: 0, naam: 'Zondag', open: '', dicht: '', van: 0, tot: 0 },
];

// Hun eigen lijst ("Wij hebben meer dan 10 jaar ervaring met:") en de portfolio-rubrieken van de oude site.
export const chips = ['Lak polijsten', 'Poetsen', 'Wassen onder hoge druk', 'Interieur reinigen', 'Bekleding en gehemelte', 'Dashboard en deurpanelen', 'Motor reinigen en ontvetten', 'Velgen reinigen', 'Waxoil / teflon', 'Stickers verwijderen', 'Showroomklaar maken'];

// Letterlijk van Google (stand 3 oktober 2026), alleen 5-sterrenreviews, ingekort met "…" waar aangegeven.
// Naam: voornaam + initiaal; bij een gebruikersnaam alleen de initiaal.
export const reviews = [
  { naam: 'Peter H.', wanneer: 'een maand geleden', tekst: 'Mijn Lexus RX met 260.000 op de teller rijdt te fijn om er na 13 jaar afscheid van te nemen. Krasje hier krasje daar. Twee dagen naar PitsStop in Gorinchem en ik kreeg hem terug glimmend en wel. Wat een fantastisch resultaat. Alsof ik hem zo uit de showroom reed!!' },
  { naam: 'D. de V.', wanneer: '6 maanden geleden', tekst: 'Het interieur van onze auto’s laten reinigen. We zijn ontzettend tevreden! Vriendelijk personeel en vakkundig. Onze auto’s zien er van binnen weer zo goed als nieuw uit! Bedankt!' },
  { naam: 'S.', wanneer: '6 maanden geleden', tekst: 'Dinsdagochtend gebeld om mijn schade/krassen te laten zien mocht dezelfde al langskomen. Hele aardige en vakkundige mensen meteen geholpen en reed zo weer kras vrij weg !' },
  { naam: 'Jasper V.', wanneer: '2 jaar geleden', tekst: 'Onze bedrijfsbus had een zeer doffe lak, met doorschemering van oude belettering op de buitenkant. … Toen we hem vrijdag weer op konden halen, hadden we een compleet andere bus teruggekregen. De lak was zo goed als nieuw, en de kunststof onderdelen hadden weer een mooie zwarte kleur gekregen.' },
  { naam: 'Dorine V.', wanneer: '3 jaar geleden', tekst: 'Snelle reactie en super goede service! Ik kon dezelfde week nog terecht en m’n cabrio is weer als nieuw, zelfs alle groene aanslag op m’n linnen kap hebben ze helemaal weggekregen. Heel blij mee!' },
  { naam: 'Els K.', wanneer: 'een jaar geleden', tekst: '… Mijn auto is onmiddels 25 jaar oud. Maar toen ik hem zag bij het ophalen zag jij er als nieuw uit, zowel van binnen als van buiten. Wat een topbedrijf is Pits stop. Vriendelijk personeel en geweldige service. Een aanrader.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waAfspraak = waMet('Hoi Pitstop, ik wil mijn auto graag laten poetsen. Wanneer kan ik langskomen?');
