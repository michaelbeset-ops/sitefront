// Feiten (bekeken 7 oktober 2026), bronnen in bron/:
// - sam-zonwering.nl (alle pagina's in bron/web/site, tekst in bron/web/alltext.txt): Ruigenhil 58, 2952 AR Alblasserdam,
//   06 - 11 09 25 90, info@sam-zonwering.nl. Slogan home "Sterk in zonwering". "Wij zijn een dynamisch jong bedrijf
//   gespecialiseerd in het leveren en monteren van op maat gemaakte zonwering en raamdecoratie." "Ook kunt u bij ons terecht
//   voor de montage, het onderhoud en eventuele reparaties." Sterke punten: vakspecialist, "24 uur service, ook in het weekend",
//   "Alle losse onderdelen verkrijgbaar", "Inclusief gratis meten". Over ons: "Wij zijn 24 uur bereikbaar voor storingen en
//   reparaties, ook in het weekend", "Gratis werkopname met advies en scherpe offerte", "rechtstreeks van fabrikant tot bij de
//   eindgebruiker". Productteksten en levertijden: zie per product hieronder.
// - Google-profiel "Montage- en Zonweringsbedrijf Sam": 4,8 uit 26 reviews, ma-vr 08:00-18:00, za-zo gesloten (site zegt 08-17).
export const site = {
  naam: 'Sam Zonwering',
  officieel: 'Montage- en Zonweringsbedrijf Sam',
  straat: 'Ruigenhil 58',
  postcode: '2952 AR',
  plaats: 'Alblasserdam',
  tel: '06 11 09 25 90',
  telHref: 'tel:+31611092590',
  waNr: '31611092590',
  wa: 'https://wa.me/31611092590',
  mail: 'info@sam-zonwering.nl',
  maps: 'https://www.google.com/maps/search/?api=1&query=Montage-+en+Zonweringsbedrijf+Sam+Ruigenhil+58+Alblasserdam',
  google: { score: '4,8', aantal: 26 },
  themeColor: '#004078',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p}`;
export const waLink = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;

// Buitenzonwering en rolluiken: zinnen letterlijk of licht ingekort van hun productpagina's.
export const buiten = [
  { titel: 'Screens', kort: 'Weinig windgevoelig, ook voor hoge gevels.', lang: 'Screendoek houdt ca. 85 % van de zonnewarmte buiten. Het zicht van binnen naar buiten blijft, de inkijk is overdag vrijwel nihil.', bron: 'screens' },
  { titel: 'Knikarmscherm', kort: 'Het systeem met de meeste mogelijkheden.', lang: 'Terrasschermen weren de zon en geven u een mooi overdekt stuk terras. En u houdt een vrije doorloop onder een openstaand scherm.', bron: 'knikarmscherm' },
  { titel: 'Uitvalschermen', kort: 'Geschikt voor elk type raam in een woning.', lang: 'Voor ramen waar geen doorloop onder het scherm nodig is. Leverbaar met vaste armen of veerarmen, met band, slinger of elektrisch.', bron: 'uitvalschermen' },
  { titel: 'Markiezen', kort: 'Een klassieke uitstraling.', lang: 'De zijkanten zijn gesloten, dus een prima bescherming tegen zon die van opzij invalt. Moderne markiezen kunnen buiten overwinteren.', bron: 'markiezen' },
  { titel: 'Rolluiken', kort: 'Privacy, veiligheid en bescherming.', lang: 'Voor ramen, raam/deurcombinaties, schuifpuien, tuindeuren, garagedeuren en winkelpuien. Verduisterend, geluid-isolerend en inbraakvertragend.', bron: 'rolluiken' },
];

// Binnenzonwering: uitvoering en levertijd uit hun eigen productpagina's.
export const binnen = [
  { titel: 'Jaloezieën', uitvoering: '16, 25, 35 en 50 mm, meer dan 250 kleuren en dessins', levertijd: 'binnen 10 werkdagen' },
  { titel: 'Lamelgordijnen', uitvoering: 'ruim 450 uitvoeringen, 52 tot 127 mm', levertijd: 'binnen 10 werkdagen' },
  { titel: 'Paneelgordijnen', uitvoering: '3, 4 of 5 sporenrail, voor schuifpuien en grote ramen', levertijd: 'gemiddeld 2 weken' },
  { titel: 'Rolgordijnen', uitvoering: 'verduisterend of niet, ook in cassette en voor dakramen', levertijd: 'gemiddeld 2 weken' },
  { titel: 'Vouwgordijnen', uitvoering: 'meer dan 100 uni stoffen, koord, ketting of elektrisch', levertijd: '' },
  { titel: 'Silhouette gordijnen', uitvoering: '3 kwaliteiten en 20 kleurvarianten', levertijd: 'binnen 15 werkdagen' },
];

// Huistekening "Waar wilt u schaduw?": plek > producten die Sam zelf noemt, met hun eigen argument.
export const plekken = [
  { id: 'dak', nr: 1, plek: 'Dakraam of dakkapel', wat: 'een dakraam', opties: [
    ['Rolgordijn voor dakramen', 'Met veermechanisme en zijgeleiding, op elke stand te zetten.', 'een rolgordijn met veermechanisme'],
    ['Jaloezie met ThermoStop', 'Ideaal voor dakramen: zomers de warmte buiten, winters binnen.', 'een jaloezie met ThermoStop'],
  ] },
  { id: 'slaap', nr: 2, plek: 'Slaapkamerraam', wat: 'de slaapkamer', opties: [
    ['Rolluik', 'Verduisterend, geluid-isolerend en inbraakvertragend.', 'rolluiken'],
    ['Cassette rolgordijn', 'Voor semi- of volledige verduistering van slaap- en kinderkamer.', 'een cassette rolgordijn'],
  ] },
  { id: 'gevel', nr: 3, plek: 'Ramen in de gevel', wat: 'de ramen aan de voorkant', opties: [
    ['Screens', 'Uitstekende bescherming bij lage zonnestanden, het zicht naar buiten blijft.', 'screens'],
    ['Uitvalscherm', 'Voor elk type raam waar geen doorloop onder het scherm nodig is.', 'een uitvalscherm'],
    ['Markies', 'Klassieke uitstraling, gesloten zijkanten tegen zon van opzij.', 'een markies'],
  ] },
  { id: 'pui', nr: 4, plek: 'Schuifpui of grote ramen', wat: 'de schuifpui', opties: [
    ['Paneelgordijnen', 'Mooi voor schuifpuien en grote raampartijen.', 'paneelgordijnen'],
    ['Lamelgordijnen', 'Twee lamelgordijnen in één rail, handig bij een deur/raam-situatie.', 'lamelgordijnen'],
  ] },
  { id: 'terras', nr: 5, plek: 'Terras', wat: 'het terras', opties: [
    ['Knikarmscherm', 'Een overdekt stuk terras, met vrije doorloop onder het scherm.', 'een knikarmscherm'],
  ] },
];

// Letterlijke Google-reviews (bron/google/reviews.json en reviews-via-trustoo.json), alle 5 sterren.
export const reviews = [
  { naam: 'Aad de K.', wanneer: 'december 2025', tekst: 'Dit bedrijf is wat mij betreft een dikke aanrader! … Het team van Sam zijn allemaal goede mensen en harde werkers en weten dus van aanpakken.' },
  { naam: 'Fenna B.', wanneer: 'september 2025', tekst: 'Hele persoonlijke en proffesionele man is Sam. Hij denkt goed met je mee en legt je duidelijk uit waar je op moet letten. Ook de vouwgordijnen die we hebben gekozen zijn prachtig.' },
  { naam: 'Jan M.', wanneer: '', tekst: 'Bij dit bedrijf 3 nieuwe rolluiken besteld voor onze woning. Sam is langsgekomen, heeft alles netjes opgemeten en zeer snel geleverd. Montage is ook heel netjes gedaan.' },
  { naam: 'Sonja L.', wanneer: '', tekst: 'Goede service, komt bij je thuis alles opmeten en gelijk een prijs besproken. Kundige werknemers die alles snel en secuur ophangen. Laten het ook weer netjes achter.' },
  { naam: 'B. R.', wanneer: 'september 2025', tekst: 'Topbedrijf echt een aanrader alles top levertijd, montage, materialen, vakmanschap een 10 met een griffel' },
];

export const serviceReviews = [
  { naam: 'Sem N.', tekst: 'Heeft mij enorm goed geholpen met een reparatie aan mijn luifel op een benauwd moment. … Ondanks dat de luifel niet bij hem vandaan komt heeft hij toch bijzonder goed geholpen!' },
  { naam: 'Jaap de G.', tekst: 'Ze hadden ons echt een dure vervanging kunnen “aansmeren” maar ze gaven ons een topadvies zonder een rekening te sturen.' },
];
