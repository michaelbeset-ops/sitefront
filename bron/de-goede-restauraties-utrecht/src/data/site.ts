// Feiten (bekeken 8 oktober 2026), ruwe bronnen in ../../bron:
// - Eigen site degoederestauraties.nl (Wix; home, de-goede, objecten, ervaring, contact en de niet-gelinkte /diensten in bron/web/crawl*.txt):
//   restaurator Arian de Goede, opleidingen in Amsterdam en Engeland (West Dean College), HMC 4 jaar meubelmaker met specialisatie
//   restauratie, eigen bedrijf in 2019, ICWCT 2024 (ICCROM, Noorwegen). Ethische code E.C.C.O., reversibel werken.
//   T 06 48 32 40 28, ariandegoede@gmail.com, KvK 75702584. "Langskomen graag volgens afspraak."
//   Footer linkt naar ledenprofielen bij Restauratoren Nederland, ARA en IIC.
// - Google-profiel "De Goede restauraties": 4,9 uit 17, Plompetorengracht 10, 3512 CC Utrecht, ma t/m vr 9:00 tot 17:00.
// - Instagram @de_goede_restauratie: "Conservatie & restauratie van antiek, houtkunst en meubelen."
export const site = {
  naam: 'De Goede Restauraties',
  eigenaar: 'Arian de Goede',
  straat: 'Plompetorengracht 10',
  postcode: '3512 CC',
  plaats: 'Utrecht',
  tel: '06 48 32 40 28',
  telHref: 'tel:+31648324028',
  wa: 'https://wa.me/31648324028',
  mail: 'ariandegoede@gmail.com',
  kvk: '75702584',
  insta: 'https://www.instagram.com/de_goede_restauratie/',
  linkedin: 'https://www.linkedin.com/in/ariandegoede/',
  route: 'https://www.google.com/maps/dir/?api=1&destination=De+Goede+restauraties,+Plompetorengracht+10,+3512+CC+Utrecht',
  google: { score: '4,9', aantal: 17, url: 'https://www.google.com/maps/search/?api=1&query=De+Goede+restauraties+Plompetorengracht+10+Utrecht' },
  themeColor: '#1c1e1f',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Ambachten, letterlijk of ingekort uit hun eigen dienstenpagina (/diensten).
export const ambachten = [
  { naam: 'Meubelrestauratie', tekst: 'Het restaureren van meubels en houten objecten is de kern van mijn bedrijf. Ongeacht het type meubel, de leeftijd of de waarde.' },
  { naam: 'Schellak politoeren', tekst: 'Een afwerking in slechte staat in ere herstellen doet het meubel veel goed.' },
  { naam: 'Fineer en marqueterie', tekst: 'Inlegwerk is decoratief en daarom zonde als door een verloren gegaan stuk een plaatje incompleet is.' },
  { naam: 'Krimpschade en kromhout', tekst: 'Hout krimpt en zwelt met de luchtvochtigheid. Deze schade is vaak goed te herstellen.' },
  { naam: 'Houtdraaien', tekst: 'Geleerd van houtdraaier Joost Kramer. Een van de leukste manieren om hout te vormen.' },
  { naam: 'Slotenmaken', tekst: 'Oude sloten herstellen in de werkplaats. Ook een verloren sleutel bijmaken is geen probleem.' },
  { naam: 'Vergulden', tekst: 'Werken met bladgoud is met niets te vergelijken.' },
  { naam: 'Meubelmaken', tekst: 'Van massief hout, bijvoorbeeld als er iets verloren is gegaan in een set. Ook reproducties voor musea.' },
  { naam: 'Collectieadvies', tekst: 'Advies over preventieve maatregelen, zodat ingrijpende restauraties niet nodig zijn.' },
];

// Keuzes voor de objectkaart: soorten uit hun eigen projecten en reviews, problemen uit hun eigen ambachten.
export const soorten = ['Kast', 'Tafel', 'Stoel of bank', 'Secretaire of bureau', 'Commode of ladekast', 'Klok', 'Kistje of doos', 'Iets anders'];
export const problemen = [
  'Het fineer of inlegwerk laat los of mist',
  'De afwerking is dof, verkleurd of beschadigd',
  'Er zit een scheur in of het hout trekt krom',
  'Het staat wankel of een verbinding is los',
  'Het slot werkt niet of de sleutel is weg',
  'Vergulding of beslag is beschadigd',
];

// Letterlijk van Google (stand 8 oktober 2026), ingekort met "…". Achternaam als initiaal.
export const reviews = {
  groot: { naam: 'Alexander d. S. L.', tekst: 'Als je in zijn werkplaats komt, zie je hoe zorgvuldig en met grote aandacht en vakkennis hij tewerk gaat en oude meubels weer in hun volle authentieke glorie weet terug te brengen. … Arian verlijmde de spijl opnieuw onzichtbaar, maar nu met een subtiel wigje erin, waardoor de spijl veel meer trekkracht kan weerstaan.' },
  los: [
    { naam: 'Isabella B.', tekst: 'Het vakmanschap is van uitzonderlijk hoog niveau: de details, het inlegwerk en de afwerking zijn met veel precisie uitgevoerd. Je ziet echt dat hier met liefde en oog voor kwaliteit aan gewerkt is.' },
    { naam: 'Willem S.', tekst: 'Arian heeft mijn Pastoe tafel gerestaureerd. … Hij heeft de afwerklagen netjes verwijderd, originele kleur van het hout opgehaald en voorzien van een matte afwerking.' },
    { naam: 'Leon v. Z.', tekst: 'Binnen twee weken hadden we onze eettafel alweer terug, helemaal netjes opgeknapt en de tafelpoten een paar centimeter verhoogd. De communicatie was duidelijk.' },
    { naam: 'Ingrid T.', tekst: 'Deze doos met messenleggers van mijn grootouders was er slecht aan toe. Heel mooi gerestaureerd door Arian!' },
  ],
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Arian, ik heb een vraag over de restauratie van een meubel.');
