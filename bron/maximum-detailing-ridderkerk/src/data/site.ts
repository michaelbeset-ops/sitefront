// Feiten uit: Google-bedrijfsprofiel (4,9 uit 18 reviews; ma-za 08:00-18:00, zo 09:00-17:00; reviews letterlijk in
// bron/google.txt), oude site maximum-detailing.nl via web.archive.org (JouwWeb 2024 en WordPress feb 2025; domein lost
// nu niet op), Instagram @maximum_.detailing (Max Anemaat; bio: dieptereiniging interieur, lak correctie, coaten),
// Facebook maximum_.detailing ("ontstaan uit de passie voor auto's") en KvK 83644539 (eenmanszaak, sinds aug. 2021).
// Geen prijzen gepubliceerd (oude site: "niet mogelijk om op afstand een prijs te geven"). E-mail stond op het dode
// domein en wordt daarom niet getoond.
export const site = {
  naam: 'Maximum Detailing',
  eigenaar: 'Max',
  straat: 'Het Kwatrijn 3',
  postcode: '2985 VV',
  plaats: 'Ridderkerk',
  kvk: '83644539',
  tel: '06 41 78 75 10',
  telHref: 'tel:+31641787510',
  wa: 'https://wa.me/31641787510',
  instagram: 'https://www.instagram.com/maximum_.detailing/',
  facebook: 'https://www.facebook.com/maxmum.detailing',
  route: 'https://www.google.com/maps/dir/?api=1&destination=Maximum+Detailing+Het+Kwatrijn+3+2985+VV+Ridderkerk',
  google: { score: '4,9', aantal: 18 },
  themeColor: '#07090c',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waAfspraak = waMet('Hallo Max, ik wil graag een afspraak maken voor mijn auto.');
export const waVraag = waMet('Hallo Max, ik heb een vraag over mijn auto.');

// Openingstijden volgens Google (0 = zondag, zoals Date.getDay()).
export const week = [
  { nr: 1, dag: 'Maandag', van: '08:00', tot: '18:00' },
  { nr: 2, dag: 'Dinsdag', van: '08:00', tot: '18:00' },
  { nr: 3, dag: 'Woensdag', van: '08:00', tot: '18:00' },
  { nr: 4, dag: 'Donderdag', van: '08:00', tot: '18:00' },
  { nr: 5, dag: 'Vrijdag', van: '08:00', tot: '18:00' },
  { nr: 6, dag: 'Zaterdag', van: '08:00', tot: '18:00' },
  { nr: 0, dag: 'Zondag', van: '09:00', tot: '17:00' },
];

// Google-reviews, letterlijk (zichtbaar in de openbare weergave van het profiel, 02-10-2026).
export const reviews: { naam: string; wanneer: string; tekst: string; kort?: boolean }[] = [
  { naam: 'Annemarie D.', wanneer: '4 jaar geleden', tekst: 'In november heeft Max mijn auto onder handen genomen. Het was hard nodig; er groeide zelfs mos uit het dak. De auto kwam blinkend schoon, met coating en heerlijk geurend terug. Ik ben er erg tevreden mee. Ook de service was uitstekend. Max kwam op de afgesproken tijd de auto ophalen.', kort: true },
  { naam: 'Edwin P.', wanneer: 'een jaar geleden', tekst: 'Mijn nieuwe auto door Max(ium Detailing) opgehaald voor STC + HPC Pro coating aanbrengen. Max heeft niets te veel gezegd, hij zei het zou top worden dit is meer dan waar. Bedankt voor de service en klantvriendelijkheid.' },
  { naam: 'Lindsay', wanneer: '3 jaar geleden', tekst: 'Net onze auto opgehaald bij Max. Ontzettend tevreden met de service en het resultaat! De communicatie versliep soepel via Instagram en Max was erg flexibel. Het resultaat mag er zijn: de auto rook heerlijk, de vlekken op de stoelen waren verdwenen en de auto glansde prachtig!', kort: true },
  { naam: 'Rien V.', wanneer: '4 jaar geleden', tekst: 'Al meerdere keren gebruik gemaakt van Maximum Detailing. Erg blij met het resultaat, net alsof je weer in een nieuwe auto rond mag rijden.', kort: true },
  { naam: 'Twan G.', wanneer: '4 jaar geleden', tekst: 'Ik heb de Binnen en buitenkant van mijn bestelbus schoon laten maken. Snelle service en mijn auto zag er weer als nieuw uit, en dat voor een goed bedrag. Ik zal mijn auto hier zeker vaker achter laten.' },
];
