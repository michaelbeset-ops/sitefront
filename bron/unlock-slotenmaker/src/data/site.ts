// Feiten (bekeken 11 oktober 2026), bronnen in bron/:
// - Eigen site unlockslotenmaker.nl toont "Account Suspended" (bron/web/oud-390.png, oud-1440.png). Geen webarchief-opnames
//   (CDX leeg, archive.ph leeg). Zoekresultaat-fragment van hun contactpagina: "U kunt 24/7 contact met ons opnemen via het
//   contactformulier, WhatsApp en ons telefoonnummer."
// - Google: "Unlock Slotenmaker Tilburg - Locksmith", Slotenmaker, 24 uur geopend (ma t/m zo), 06 35682296, geen adres,
//   5,0 uit 246 reviews (laatste 3 dagen geleden). 6 foto's "Van eigenaar" (bron/google/eigenaar/), twee met eigen bijschrift:
//   "Unlock Slotenmaker – 24/7 slotenmaker voor particulier en zakelijk. Spoedservice, buitengesloten en inbraakbeveiliging."
//   "Auto deur openen zonder schade? Wij helpen snel op locatie, 24/7 bereikbaar."
// - Eigenaarsreacties op Google noemen: buitensluitingen, sloten (openen/vervangen), nieuwe sloten, inbraakpreventie, auto
//   openen, spoedservice; plaatsen Tilburg, Berkel-Enschot, Oosterhout, Boxtel, Eindhoven.
// - Werkspot-profiel (eigen omschrijving): "24/7 beschikbaar voor spoed, slotvervanging, deuropeningen en inbraakpreventie."
//   KVK 90941403.
// Eigenaarsnaam: NIET in eigen bron, dus niet genoemd. Geen prijzen of responstijden (staan niet in eigen bron).
export const site = {
  naam: 'Unlock Slotenmaker',
  plaats: 'Tilburg',
  tel: '06 35 68 22 96',
  telHref: 'tel:+31635682296',
  wa: 'https://wa.me/31635682296',
  kvk: '90941403',
  reviews: 'https://www.google.com/maps/place/Unlock+Slotenmaker+Tilburg+-+Locksmith/data=!4m2!3m1!1s0x639ba09d456d21bd:0x77cfeffb6a40000b',
  google: { score: '5,0', aantal: 246 },
  themeColor: '#14283b',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Plaatsen die zij zelf noemen in hun reacties op Google.
export const plaatsen = ['Tilburg', 'Berkel-Enschot', 'Oosterhout', 'Boxtel', 'Eindhoven'];

// Letterlijk van Google (positief, Nederlandstalig origineel). Ingekort met "…" waar nodig. Naam: voornaam + initiaal.
export const reviews = {
  groot: { naam: 'Dutch Quality Roofing', tekst: 'Tijdens het klussen viel de deur dicht. … Vooraf duidelijke afspraken en de prijs was glashelder. zonder schade de deur geopend. Zeer vriendelijke man!' },
  klein: [
    { naam: 'Tim F.', tekst: 'Accu uit de smartlock gehaald, helaas vergeten bij het sluiten van de deur. Dom! Gelukkig snel geholpen en zo weer binnen.' },
    { naam: 'Jolijn M.', tekst: 'Erg goede service, vriendelijk en dachten ook goed mee aangezien we 2 honden binnen hadden zitten.' },
    { naam: 'Sabina', tekst: 'Kon het probleem niet oplossen, maar gaf advies. Hierdoor ons niet onnodig op kosten gejaagd.' },
    { naam: 'Gisèle W.', tekst: 'Zeer vriendelijke en rustige meneer heeft ons geholpen met het openen van de schuifpui.' },
    { naam: 'KH', tekst: 'Vroeg in de ochtend al bereikbaar, goede service!' },
  ],
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Unlock Slotenmaker, ik heb een slotenmaker nodig.');
