// Feiten (bekeken 7 oktober 2026), alleen uit eigen bronnen:
// - exclusievehorlogemakers.nl (contact, over ons, werkwijze, verzendservice, tarieven, vintage): Oberon 36, 5221 LV
//   's-Hertogenbosch, 073-7200875, WhatsApp 06-12275118, info@exclusievehorlogemakers.nl, "Wij werken uitsluitend op afspraak",
//   onafhankelijk en niet geautoriseerd door de horlogemerken, sinds 1986 (Alexander van de Griend), huidige vorm 2015,
//   12 maanden garantie, extern beveiligde opslag, originele onderdelen, verzendformulier (PDF), KvK 63948737.
// - Google-bedrijfsprofiel "Exclusieve Horlogemakers" (Reparatieservice voor horloges): 5,0 uit 286, ma-vr 08:00-17:00,
//   za 08:00-16:00, zo gesloten. Flyer van de eigenaar op dat profiel: "Horloge atelier | Slot Haverleij".
export const site = {
  naam: 'Exclusieve Horlogemakers',
  straat: 'Oberon 36',
  postcode: '5221 LV',
  plaats: "'s-Hertogenbosch",
  tel: '073 720 0875',
  telHref: 'tel:+31737200875',
  waTel: '06 12 27 51 18',
  wa: 'https://wa.me/31612275118',
  mail: 'info@exclusievehorlogemakers.nl',
  kvk: '63948737',
  formulier: 'https://exclusievehorlogemakers.nl/wp-content/uploads/2023/12/SERVICE-FORMULIER-1.pdf',
  resultaten: 'https://exclusievehorlogemakers.nl/projecten/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Exclusieve+Horlogemakers+Oberon+36+%27s-Hertogenbosch',
  route: "https://www.google.com/maps/dir/?api=1&destination=Exclusieve+Horlogemakers+Oberon+36+5221+LV+%27s-Hertogenbosch",
  google: { score: '5,0', aantal: 286 },
  themeColor: '#0c0e0d',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Tijden van het Google-profiel. Bezoek is altijd op afspraak.
export const tijden = [
  ['Maandag t/m vrijdag', '08.00 - 17.00'],
  ['Zaterdag', '08.00 - 16.00'],
  ['Zondag', 'gesloten'],
];

// Letterlijk van Google (5 sterren), zoals ook in de reviewwidget op hun eigen site. Ingekort met "…".
export const reviews = [
  { naam: 'Ties d. J.', tekst: 'Het vertrouwen was voor mij extra belangrijk, omdat het horloge een erfstuk betreft. Het eindresultaat is ronduit indrukwekkend en overtrof mijn verwachtingen. Het heeft de hele familie geraakt.' },
  { naam: 'Roel', tekst: 'Alexander neemt alle tijd voor je en is open en eerlijk wat betreft geadviseerde/benodigde werkzaamheden en kosten.' },
  { naam: 'Harry B.', tekst: '… Tot ik Alexander tegenkwam. Hij is de uitdaging aangegaan en heeft onderdelen kunnen vinden, het uurwerk weer aan de gang gekregen en de Omega in authentieke staat terug weten te brengen …' },
  { naam: 'Rhonda C.', tekst: 'Goede duidelijke informatie bij intake en tussentijds per telefoon wat de kosten zijn. Vakkundig gereviseerd en goede rapportage.' },
  { naam: 'Mirjam O.', tekst: 'Uitstekende service, erg blij met mijn gerestaureerde gouden Pontiac, die voor mij emotionele waarde heeft, omdat hij van mijn vader was.' },
  { naam: 'Sander H.', tekst: 'Fijne, duidelijke communicatie met mensen die verstand van, en passie voor, horloges hebben. Dat merk je meteen al bij binnenkomst.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Goedendag, ik wil graag een afspraak maken voor mijn horloge.');
