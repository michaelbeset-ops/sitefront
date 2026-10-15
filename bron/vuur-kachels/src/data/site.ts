// Feiten (bekeken 15 oktober 2026), bronnen in bron/:
// - Eigen site vuurnogvlam.nl (WordPress/Elementor; pagina's in bron/site/*.txt):
//   home/over-ons: "VUUR! is de kachel- en haardenshowroom van Cornelis Mekelenkamp, gevestigd in Sint-Annaland. Cornelis
//   begon zijn carrière als schoorsteenveger en heeft inmiddels ruim 20 jaar ervaring met het renoveren en aanleggen van
//   rookkanalen." (home zegt 25 jaar; wij gebruiken "ruim 20 jaar"). Wisselend assortiment, houtkachels, buitenhaarden.
//   kachels-en-haardenwinkel: bezoek aan huis, merken Altech, Spartherm, Jydepejsen, Charlton & Jenrick, Dimplex.
//   houtkachel-laten-plaatsen: ook elektrisch of bio-ethanol; advies rookkanalen en ventilatie; plaatsing "volgens de geldende normen".
//   showroom: "Zaterdag: geopend van 9:30 – 14:30", "Laatste zaterdag van de maand: gesloten"; elders "vrijdag op afspraak".
//   offerte-aanvragen: huidige situatie (open haard functionerend/afgesloten, houtkachel, ander type, geen), foto's.
//   Projecten (bron/site/projecten__*.txt): Andel, Werkendam, Sint-Annaland, Hoofdplaat (Tulikivi 1350 kg), Krabbendijke,
//   Terneuzen, Scherpenisse, 's-Gravendeel, Oud-Vossemeer, Stavenisse, Sint-Philipsland. Merken in categorieën: Altech,
//   Barbas, Brunner, Jydepejsen, Reny, Hase, Iron Dog, Totem, PDH Natuursteen.
//   Voorstraat 30, 4697 EL Sint-Annaland, 0166 745212, 06 51 69 08 02, info@vuurnogvlam.nl.
// - Google: "Winkel voor open haarden/kachels", 4,8 uit 66 reviews; tijden za 09:30-14:30 (bron/google/uren.json).
//   Inruilactie (1 juli tot 1 oktober 2026) is afgelopen: NIET getoond.
export const site = {
  naam: 'VUUR! Kachels en haarden',
  kort: 'VUUR!',
  eigenaar: 'Cornelis Mekelenkamp',
  plaats: 'Sint-Annaland',
  straat: 'Voorstraat 30',
  postcode: '4697 EL',
  tel: '06 51 69 08 02',
  telHref: 'tel:+31651690802',
  vast: '0166 74 52 12',
  vastHref: 'tel:+31166745212',
  wa: 'https://wa.me/31651690802',
  mail: 'info@vuurnogvlam.nl',
  reviews: 'https://www.google.com/maps/place/VUUR!+Kachels+en+haarden+-+Cornelis+Mekelenkamp/@51.6009956,4.1038822,17z/data=!4m6!3m5!1s0x47c4675fed4d0151:0x86c4848a9690c87a!8m2!3d51.6009956!4d4.1038822!16s%2Fg%2F11jt23z66l',
  route: 'https://www.google.com/maps/dir/?api=1&destination=Voorstraat+30+4697+EL+Sint-Annaland',
  google: { score: '4,8', aantal: 66 },
  themeColor: '#16110e',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Showroom. Maandag = 1 ... zondag = 0. Bron: eigen showroompagina + Google. Laatste zaterdag van de maand dicht.
export const tijden: { dag: string; nr: number; open?: [number, number]; tekst?: string }[] = [
  { dag: 'Maandag', nr: 1 },
  { dag: 'Dinsdag', nr: 2 },
  { dag: 'Woensdag', nr: 3 },
  { dag: 'Donderdag', nr: 4 },
  { dag: 'Vrijdag', nr: 5, tekst: 'Op afspraak' },
  { dag: 'Zaterdag', nr: 6, open: [9.5, 14.5] },
  { dag: 'Zondag', nr: 0 },
];

// Letterlijk van Google (5 sterren), ingekort met "…". Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Natascha B.', wanneer: '4 maanden geleden', tekst: 'Cornelis heeft ons een eerlijk en gedegen advies gegeven. Niet opdringerig. … In 1 dag tijd van slechts een houtkachel naar een complete schouw voorzien van houten balken, brandwerende constructie en tegels. Allemaal ambachtelijk op maat gemaakt en handwerk.' },
  { naam: 'Carla V.', wanneer: '4 maanden geleden', tekst: 'Vandaag heeft Cornelis mijn open haard gerenoveerd naar een hout/speksteen kachel. Wat een geweldig resultaat, met behulp van zijn expertise en vakmanschap een mooie keuze gemaakt.' },
  { naam: 'Jasper S.', wanneer: 'Google review', tekst: 'Het is zo fijn om van begin (in de winkel, met goed advies) tot eind (de plaatsing) met één iemand te maken te hebben die van alles op de hoogte is.' },
  { naam: 'Joyce W.', wanneer: '6 maanden geleden', tekst: 'Prettig contact gehad met dit bedrijf. Cornelis gaat zeer ervaren en kundig te werk. Mørso houtkachel laten plaatsen. Werkt heel netjes en de afwerking is keurig.' },
  { naam: 'Ger V.', wanneer: '10 maanden geleden', tekst: 'We hebben onze zeer oude open haard omgebouwd tot een nieuwe schouw met spekstenen houtkachel ervoor. Ook kwam er een nieuwe pijp door de schoorsteen. …' },
  { naam: 'Shanna H.', wanneer: 'Google review', tekst: 'De uitvoering en afwerking zijn tot in de kleinste details keurig gedaan. Alles straalt vakmanschap uit. Ook na de plaatsing bleef Cornelis goed bereikbaar voor vragen.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Cornelis, ik wil graag een afspraak maken in de showroom van VUUR!.');
