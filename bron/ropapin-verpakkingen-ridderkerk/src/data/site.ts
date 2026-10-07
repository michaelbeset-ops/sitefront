// Feiten (bekeken 7 oktober 2026), bronnen in bron/:
// - ropapin-verpakkingen.nl Home: "Groothandel voor industriële verbruikers en verpakking handelaren", "Het actief en creatief meedenken
//   over de meest efficiente oplossing voor uw verpakkingsprocessen. Wij brengen verbeteringen aan, leveren op aanvraag".
// - Over ons: "Ons specialisme is de palletstabilisatie, maar door onze 30 jaar ervaring kunnen wij een compleet pakket op maat aanbieden.",
//   "Wij vragen u dan ook om ons uit te dagen", "Wij gaan niet voor de goedkoopste producten, wij gaan voor de beste producten met een
//   scherpe prijs.", "Gewoon zoals het hoort", geen webshop: "direct contact via mail, telefoon of bezoeken", Arnold de Ruijter (oprichter)
//   "al meer dan 30 jaar actief in de verpakkingsmaterialen branche", klanten in Nederland, België, Luxemburg en Duitsland.
// - Assortiment: zes groepen (letterlijk), vademecum digitaal per mail, kosteloos, "diezelfde dag nog" proberen te beantwoorden.
// - Contact: werkdagen 08.00-17.00, Arnold de Ruijter 06-30198253, Dirk Nomen 06-23186176, info@ropapin-verpakkingen.nl,
//   Florijnstraat 6H, 2988 CL Ridderkerk (ook Google).
// - wathebbienou.nl (door Ropapin): "Wij zijn geen “dozenschuivers”, maar we bieden verpakkingsoplossingen op maat".
// - Facebook (post 21-12-2025 "Geschiedenis ROPAPIN VERPAKKINGEN"): naam van de Rotterdamse Papier Industrie (RO-PA-PIN), 1934, Waalhaven.
// - Google: 2 reviews (3 weken en 1 week oud), post van eigenaar 5 dagen oud. KvK 65928687 (companyinfo.nl).
export const site = {
  naam: 'Ropapin Verpakkingen',
  straat: 'Florijnstraat 6H',
  postcode: '2988 CL',
  plaats: 'Ridderkerk',
  mail: 'info@ropapin-verpakkingen.nl',
  kvk: '65928687',
  arnold: { naam: 'Arnold de Ruijter', tel: '06-30198253', href: 'tel:+31630198253', wa: '31630198253' },
  dirk: { naam: 'Dirk Nomen', tel: '06-23186176', href: 'tel:+31623186176' },
  maps: 'https://www.google.com/maps/search/?api=1&query=Ropapin+Verpakkingen+Florijnstraat+6H+Ridderkerk',
  facebook: 'https://www.facebook.com/p/Ropapin-Verpakkingen-100057708097891/',
  themeColor: '#121614',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

export const wa = (tekst: string) => `https://wa.me/${site.arnold.wa}?text=${encodeURIComponent(tekst)}`;
export const vademecum = `mailto:${site.mail}?subject=${encodeURIComponent('Vademecum aanvragen')}&body=${encodeURIComponent('Goedendag,\n\nGraag ontvang ik het vademecum van Ropapin Verpakkingen per mail.\n\nBedrijf:\nNaam:\n\nMet vriendelijke groet,')}`;

// Letterlijk de zes groepen van hun assortimentspagina.
export const assortiment = [
  'Traditionele rekwikkelfolie',
  'Kartonnage',
  'Beschermende materialen',
  'Verpakkingstape',
  'Palletwikkelaars',
  'Palletstabilisatie materialen',
];

export const url = (pad = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${pad}`;
