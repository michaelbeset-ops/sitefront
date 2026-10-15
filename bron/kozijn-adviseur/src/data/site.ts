// Feiten (bekeken 15 oktober 2026), bronnen in bron/:
// - Eigen site kozijn-adviseur.nl (alle pagina's in bron/site/*.txt): "Meer dan 30 jaar ervaring in de branche", "Wij bestaan
//   meer dan 10 jaar", "Ervaren monteurs die meedenken", "Duits kwaliteitsproduct", "Altijd met SKG** politiekeurmerk",
//   "Vraag nu gratis een offerte aan". Producten: kunststof kozijnen, schuifpuien, aluminium kozijnen, deuren.
//   "Dé specialist in kunststof kozijnen!" (over-ons). Merken: Gealan, Schüco, Duco, Polytec, K-Vision.
//   Projecten: Spijkenisse (jan en apr 2023), Rotterdam Schiebroek (feb 2023, Gealan S 9000 NL Slim, vlak profiel, 82,5 mm), Oude Tonge.
//   06 34 99 47 85, info@kozijn-adviseur.nl. Adres Zonnebloemstraat 26c is een woonadres: alleen de plaats tonen.
// - Google: Bouwbedrijf, 5,0 uit 61 reviews, ma t/m vr 09:00-17:00 (bron/google). Reviews 2 tot 7 maanden oud,
//   plus sep/okt 2026 (via Trustoo, bron/social/trustoo.txt). Namen uit reviews (Paul, Robert) staan niet op eigen site: niet getoond.
export const site = {
  naam: 'Kozijn-Adviseur',
  voluit: 'Kozijn-Adviseur BV',
  plaats: 'Rotterdam',
  tel: '06 34 99 47 85',
  telHref: 'tel:+31634994785',
  wa: 'https://wa.me/31634994785',
  mail: 'info@kozijn-adviseur.nl',
  reviews: 'https://www.google.com/maps/place/Kozijn-Adviseur+BV/@51.9433472,4.4695138,17z/data=!4m6!3m5!1s0x47c5cbdfa7df3445:0xb42f0523320b7cd0!8m2!3d51.9433472!4d4.4695138!16s%2Fg%2F11rc9pkvgt',
  google: { score: '5,0', aantal: 61 },
  themeColor: '#14181c',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Maandag = 1 ... zondag = 0. Bron: Google-profiel.
export const tijden: { dag: string; nr: number; open: [number, number] | null }[] = [
  { dag: 'Maandag', nr: 1, open: [9, 17] },
  { dag: 'Dinsdag', nr: 2, open: [9, 17] },
  { dag: 'Woensdag', nr: 3, open: [9, 17] },
  { dag: 'Donderdag', nr: 4, open: [9, 17] },
  { dag: 'Vrijdag', nr: 5, open: [9, 17] },
  { dag: 'Zaterdag', nr: 6, open: null },
  { dag: 'Zondag', nr: 0, open: null },
];

// Letterlijk (5 sterren), ingekort met "…". Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Anna F. P.', bron: 'Google', tekst: 'Nieuwe kozijnen laten plaatsen door Kozijn-Adviseur. Best spannend en ik zag er ook wat tegenop. Maar wat viel het mee! … Ik heb nu prachtige nieuwe kozijnen, waarbij zelfs het originele glas in lood is behouden.' },
  { naam: 'Pascal B.', bron: 'Google', tekst: 'Vandaag is me voordeur vervangen. Super gedaan!! Echte vakmanschap en super goed geholpen. Van een snelle offerte, tot goede toelichting op de offerte en snelle levering en plaatsing.' },
  { naam: 'Petra H.', bron: 'Google', tekst: 'Vanaf de dag dat ik de offerte aanvroeg, ben ik ontzettend vriendelijk en goed geholpen. … De dag van het plaatsen was ook super goed geregeld en het resultaat is echt super. … 100% betrouwbaar, eerlijk en vriendelijk.' },
  { naam: 'Danny B.', bron: 'Trustoo', tekst: 'Vorig jaar bij ons alle 11 de kozijnen vervangen, inclusief het plaatsen van openslaande deuren op de plek van een raamkozijn. Alles netjes uitgevoerd en veel in overleg mogelijk. … Mooie kozijnen en strakke binnenafwerking.' },
  { naam: 'Andrii G.', bron: 'Google', tekst: 'Wat me direct opviel, was dat ze echt op tijd kwamen, iets wat ik erg waardeer. Tijdens de klus was er veel oog voor detail; alles werd tot in de puntjes verzorgd.' },
  { naam: 'Rade M.', bron: 'Google', tekst: 'Topbedrijf! Dit is een zeer professionele organisatie die haar afspraken nakomt. De service is uitstekend en het contact verloopt altijd vriendelijk en vlot.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Kozijn-Adviseur, ik wil graag een offerte voor nieuwe kozijnen.');
