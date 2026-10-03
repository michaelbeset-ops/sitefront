// Feiten: huidige site vanleeuwen-timmerwerken.nl (alle pagina's + gastenboek), Google-bedrijfsprofiel (4,3 uit 6, bekeken
// 3 oktober 2026), Werkspot-profiel (4,8 uit 136 reviews, KvK 27335325, laatste review 18 juli 2026), timmerman-nu.nl
// (opgericht 28-01-2009). Eigenaar: Mark van Leeuwen (genoemd op hun site en in vrijwel elke review).
export const site = {
  naam: 'van Leeuwen Timmerwerken',
  eigenaar: 'Mark van Leeuwen',
  straat: 'Valkenburgerlaan 80',
  postcode: '2771 DA',
  plaats: 'Boskoop',
  tel: '06 30 95 29 39',
  telHref: 'tel:+31630952939',
  wa: 'https://wa.me/31630952939',
  mail: 'info@vanleeuwen-timmerwerken.nl',
  kvk: '27335325',
  sinds: 2009,
  maps: 'https://www.google.com/maps/search/?api=1&query=van+Leeuwen+Timmerwerken+Valkenburgerlaan+80+Boskoop',
  google: { score: '4,3', aantal: 6, url: 'https://www.google.com/maps/search/?api=1&query=van+Leeuwen+Timmerwerken+Boskoop' },
  werkspot: { score: '4,8', aantal: 136, url: 'https://www.werkspot.nl/profiel/van-leeuwen-timmerwerken/reviews' },
  themeColor: '#151515',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Telefonisch bereikbaar volgens het Google-profiel. dag: 0 = zondag (zoals Date.getDay). Minuten voor de live-status.
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '06.30', dicht: '22.00', van: 390, tot: 1320 },
  { dag: 2, naam: 'Dinsdag', open: '06.30', dicht: '22.00', van: 390, tot: 1320 },
  { dag: 3, naam: 'Woensdag', open: '06.30', dicht: '22.00', van: 390, tot: 1320 },
  { dag: 4, naam: 'Donderdag', open: '06.30', dicht: '22.00', van: 390, tot: 1320 },
  { dag: 5, naam: 'Vrijdag', open: '06.30', dicht: '18.00', van: 390, tot: 1080 },
  { dag: 6, naam: 'Zaterdag', open: '09.00', dicht: '12.00', van: 540, tot: 720 },
  { dag: 0, naam: 'Zondag', open: '', dicht: '', van: 0, tot: 0 },
];

// Diensten: lijst op hun pagina "Over ons" + Werkspot-omschrijving (kozijnrenovatie, stelwerk, aftimmerwerk).
export const chips = ['Zolderverbouwingen', 'Vlieringen', 'Dakramen', 'Dakkapellen', 'Dakopbouwen', 'Dakrenovatie', 'Aanbouwen', 'Verbouwingen', 'Kasten', 'Schuren', 'Kozijnrenovatie', 'Aftimmerwerk'];

// Plaatsen uit hun reviews en referenties (Werkspot, Google, eigen site): bewijs voor "werkgebied Randstad".
export const plaatsen = ['Boskoop', 'Waddinxveen', 'Alphen aan den Rijn', 'Gouda', 'Leiden', 'Leiderdorp', 'Zoetermeer', 'Berkel en Rodenrijs', 'Pijnacker', 'Delft', 'Den Haag', 'Rotterdam', 'Capelle aan den IJssel', 'Utrecht', 'Vleuten', 'Maarssen', 'Mijdrecht', 'Aalsmeer'];

// Letterlijk (stand 3 oktober 2026), ingekort met "…" waar aangegeven. Alleen 5-sterrenreviews (ook de drie Google-reviews zijn 5 sterren).
export const reviews = [
  { naam: 'Klant uit Waddinxveen', bron: 'Werkspot', wanneer: 'juli 2026', klus: 'Vliering en zolderindeling', tekst: 'Mark heeft bij ons de gehele zolder gedaan. Van een vliering en zolderingindeling tot aan dakramen en maatwerkkast. Mark werkt enorm hard, levert topkwaliteit en denkt mee in onze wensen. Daarnaast rekent hij schappelijke prijzen. Wij raden hem zeker aan!' },
  { naam: 'Jaap S.', bron: 'Google', wanneer: '6 jaar geleden', klus: 'Zolder, vliering en dakkapel', tekst: 'Mark heeft bij ons heel de zolder aangepast. Een kamer, vliering, dakramen en een groot dakkapel gemaakt. Alles volgens afspraak en alles binnen de gestelde tijd. Wij zijn zeer tevreden. …' },
  { naam: 'K.A., Mijdrecht', bron: 'Werkspot', wanneer: 'juli 2016', klus: 'Dakraam inbouwen', tekst: '… Dakpannen aangepast en alles super netjes opgeruimd achter gelaten. Netjes volgens afspraak aanwezig. Prijs volgens afspraak en geen verassingen achteraf. Hij krijgt van mij een dikke 10!!' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waOfferte = waMet('Hallo Mark, ik wil graag een offerte aanvragen voor een klus.');
