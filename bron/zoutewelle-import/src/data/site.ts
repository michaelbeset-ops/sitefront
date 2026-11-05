// Feiten (zie bron/): eigen site mozaiek-marokko.nl (adres, 078 618 69 49, WhatsApp 06 21 27 84 54, mail, ma t/m za op afspraak
// 12.00-19.00, ruim 20 jaar import, 500+ mozaïektafels, handgemaakt bij kleine familiebedrijfjes), Instagram @mozaiekmarokko (Edwin),
// Google-profiel (4,6 uit 13 reviews). Geen KvK gevonden: weggelaten.
export const site = {
  naam: 'Zoutewelle Import',
  straat: 'Aventurijn 1420',
  postcode: '3316 LB',
  plaats: 'Dordrecht',
  tel: '078 618 69 49',
  telHref: 'tel:+31786186949',
  mobiel: '06 21 27 84 54',
  mobielHref: 'tel:+31621278454',
  mail: 'info@zoutewelle-import.nl',
  wa: 'https://wa.me/31621278454',
  instagram: 'https://www.instagram.com/mozaiekmarokko/',
  maps: 'https://www.google.com/maps/dir/?api=1&destination=Zoutewelle+Import+Aventurijn+1420+3316+LB+Dordrecht',
  reviews: 'https://www.google.com/maps?cid=5648848536045533175',
  google: { score: '4,6', aantal: 13 },
  themeColor: '#1e1813',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Letterlijk van Google (5 november 2026). Ingekort met "…" waar aangegeven.
export const reviews = [
  { naam: 'Grace E.', wanneer: 'een jaar geleden', tekst: 'Winkel is leuk ingericht, alsof je echt in het buitenland bent. Prachtige spullen, van mozaïek tafels, lampen, schalen, kopjes, asbakken, stoelen en nog veel meer. Teveel om op te noemen. Edwin denkt mee, is geduldig en geen opdringerige verkoper. Hier MOET je zijn!!!' },
  { naam: 'Ravi', wanneer: '5 jaar geleden', tekst: 'Topzaak met topmensen, waarbij het meer voelt alsof je bij vrienden op bezoek gaat, zo warm, ontspannen en vriendelijk gaat het er toe. Eerlijk en zeer betrouwbaar en ze gaan tot het welbekende gaatje voor de klant. … Wij zijn superblij met onze prachtige tafel en stoelen!' },
  { naam: 'Henny D.', wanneer: '6 jaar geleden', tekst: 'Mooie lamp en mozaiktafel met onderstel gekocht. Heel blij mee, prima geholpen. Prijs/kwaliteit dik in orde. Veel leuke reacties van vrienden.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Edwin, ik heb een vraag over jullie mozaïektafels en lampen.');
