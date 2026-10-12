// Feiten (bekeken 12 oktober 2026), bronnen in bron/:
// - Google-profiel "Roos Juwelier مجوهرات روز": Juwelier, Zwart Janstraat 45B, 3035 AL Rotterdam, 06 84725479,
//   website-knop = instagram.com. 4,9 uit 351 reviews. Open ma, di, do t/m zo 12:00-18:00, woensdag gesloten (bron/google/uren.txt).
// - Gevelbord (eigen foto op Google, sep 2023): "ROOS JUWELIER", "مجوهرات روز", "Inkoop, Verkoop en Reparaties van Goud",
//   Arabisch: "بيع وشراء المصوغات الذهبية سوري - عراقي - خليجي - تركي" (verkoop en inkoop van gouden sieraden: Syrisch, Iraaks, Golf, Turks).
// - Instagram @roosjuwelier: 2.456 volgers, 102 berichten, laatste post 27 september 2026; bio noemt 06 84725479 en TikTok @roosjuwelier.
// - Geen website (bron/web). Geen eigenaarsnaam in eigen bron, geen KvK-nummer gezien: niet getoond. Geen goudprijzen.
export const site = {
  naam: 'Roos Juwelier',
  arabisch: 'مجوهرات روز',
  plaats: 'Rotterdam',
  wijk: 'Rotterdam-Noord',
  straat: 'Zwart Janstraat 45B',
  postcode: '3035 AL',
  tel: '06 84 72 54 79',
  telHref: 'tel:+31684725479',
  wa: 'https://wa.me/31684725479',
  insta: 'https://www.instagram.com/roosjuwelier/',
  tiktok: 'https://www.tiktok.com/@roosjuwelier',
  route: 'https://www.google.com/maps/dir/?api=1&destination=Zwart+Janstraat+45B%2C+3035+AL+Rotterdam',
  reviews: 'https://www.google.com/maps/place/Roos+Juwelier/@51.933165,4.4790281,17z/data=!4m6!3m5!1s0x47c43527044493d5:0x3a87964015580991!8m2!3d51.933165!4d4.4790281!16s%2Fg%2F11vdrp3pv8',
  google: { score: '4,9', aantal: 351 },
  // 0 = zondag ... 6 = zaterdag; null = gesloten
  tijden: [[12, 18], [12, 18], [12, 18], null, [12, 18], [12, 18], [12, 18]] as ([number, number] | null)[],
  themeColor: '#121011',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

export const dagen = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];

// Letterlijk van Google (alle 5 sterren, oorspronkelijk in het Nederlands geschreven, niet vertaald).
// Naam: voornaam + initiaal. "…" = ingekort.
export const reviews = [
  { naam: 'Saad A.', wanneer: 'een maand geleden', tekst: 'Ik kom hier al 4 jaar over de vloer. … Eerlijke service, topkwaliteit goud en duidelijke afspraken. Absoluut een aanrader!' },
  { naam: 'Sieta S.', wanneer: '2 jaar geleden', tekst: 'Medewerker is professioneel, en heeft mijn armband binnen 2 dagen verkort. Ben heel blij met de service en het resultaat!' },
  { naam: 'Elaha H.', wanneer: '5 maanden geleden', tekst: 'Beste goud juwelier in NL, kom hier al jaren en je krijgt hier de beste één op één hulp met de beste kwaliteit goud.' },
  { naam: 'Nora F.', wanneer: '7 maanden geleden', tekst: 'Hele aardige man die ons super goed heeft geholpen, echt een eerlijke juwelier dus dikke 5 sterren' },
  { naam: 'Kinan M.', wanneer: '2 jaar geleden', tekst: 'Heel netjes verkopers, prijzen zijn Goed … al met al een zeker aanrader' },
  { naam: 'Moustafa Z.', wanneer: '7 maanden geleden', tekst: 'Betrouwbare winkel , vriendelijk personeel.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Roos Juwelier, ik heb een vraag.');
