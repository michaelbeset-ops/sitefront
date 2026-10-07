// Feiten (bekeken 7 oktober 2026), ruwe bronnen in ../../bron:
// - Eigen site openhaardenwerk.nl via webarchief (snapshot 5 april 2025): Home, Haarden, Informatie, Showroom, Over Hans,
//   Service en onderhoud, Valkenswaard. Hans van der Vorst, Eindhoven. Tel. 06 233 93 133. Showroom Lucas Gasselstraat 21,
//   bedrijfshal Lucas Gasselstraat 21/27. Werkt alleen (zzp), erkend door Evis, merken, Girse Design, onderhoud.
// - Google-bedrijfsprofiel "Openhaardenwerk": Lucas Gasselstraat 27, 5611 AT Eindhoven, 06 23393133, geen openingstijden.
//   Score en aantal NIET tonen (opdracht).
export const site = {
  naam: 'Hans van der Vorst',
  vol: 'Openhaardenwerk (Hans van der Vorst)',
  straat: 'Lucas Gasselstraat 27',
  postcode: '5611 AT',
  plaats: 'Eindhoven',
  tel: '06 233 93 133',
  telHref: 'tel:+31623393133',
  wa: 'https://wa.me/31623393133',
  maps: 'https://www.google.com/maps/search/?api=1&query=Openhaardenwerk+Lucas+Gasselstraat+27+Eindhoven',
  themeColor: '#141211',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Letterlijk van Google (5 sterren, stand 7 oktober 2026), ingekort met "…". Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Mignon P.', tekst: 'Wat een liefde voor het vak, wat een doorzettingsvermogen om het goed te doen. Zelfs als het werk bijna klaar is en hij nèt niet tevreden is aan het eind van een lange dag, dan begint hij gewoon opnieuw omdat hij wil dat het ècht mooi is.' },
  { naam: 'David L.', tekst: 'In de zomer van 2020 heeft Hans onze stinkende open haard vervangen door een mooie gesloten inbouwgashaard van Bellfires. De wensen en technische mogelijkheden zijn in goed overleg op elkaar afgestemd.' },
  { naam: 'Péti G.', tekst: 'Mooi vakwerk bij het installeren van een rookkanaal met houtkachel. Dezelfde dag nog de houtkachel aan!' },
  { naam: 'Marvin B.', tekst: 'Hij is klantgericht, flexibel en denkt goed mee. Daarnaast ook een prima service: spuitbussen voor herstel lak en het schoonhouden werden door hem persoonlijk afgeleverd' },
  { naam: 'Joey H.', tekst: 'Voor de derde keer met Hans samen gewerkt en wederom naar alle tevredenheid. Hans is een vakman en buiten dat ook een gezellige en fijne kerel.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hoi Hans, ik heb een vraag over een haard.');
