// Feiten uit het dagbestand van 25-11-2026 (lead minicamping-de-heemshoeve-moerstraten), met bron.
// thomik.nl/html/deheemshoeve.htm: adres, telefoon vast en mobiel, mail, faciliteiten, speeltoestellen,
//   hooischuur voor kinderen, kampvuur bij mooi weer, ligging tussen Bergen op Zoom en Roosendaal.
// campercontact.com (SVR-Camping De Heemshoeve): max. 25 plaatsen, gras met verharding en verlichting,
//   campers tot 8 meter, onbeperkt verblijf, seizoen april tot november, voorzieningen, honden toegestaan,
//   reviews april 2026 en augustus 2025. De prijs per nacht staat er bewust niet op (jaartal onbetrouwbaar).
// camping.info: 4 uit 5, schoon 5, vriendelijkheid 5, prijs-kwaliteit 5, en voor wie de camping aangeraden wordt.
// Geen eigen website en geen boekingssysteem, dus reserveren via bellen, WhatsApp en mail.
export const site = {
  naam: 'Minicamping De Heemshoeve',
  kort: 'De Heemshoeve',
  gastvrouw: 'Ellie',
  straat: 'Halstersebaan 15',
  postcode: '4727 SB',
  plaats: 'Moerstraten',
  gemeente: 'Roosendaal',
  mobiel: '06-49939845',
  mobielHref: 'tel:+31649939845',
  vast: '0165-302072',
  vastHref: 'tel:+31165302072',
  whatsapp: 'https://wa.me/31649939845',
  email: 'heemshoeve.ellie@live.nl',
  facebook: 'https://www.facebook.com/Minicamping-de-Heemshoeve-243332739123646/',
  maps: 'https://www.google.com/maps/dir/?api=1&destination=Halstersebaan+15+4727+SB+Moerstraten',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

export const url = (pad = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${pad}`;

// Sfeerbeelden van Unsplash (gratis licentie). Nooit gepresenteerd als het eigen erf.
const u = (id: string, w: number) => `https://images.unsplash.com/${id}?fm=jpg&q=60&w=${w}&auto=format&fit=crop&ixlib=rb-4.1.0`;
export const fotos = {
  hero: (w = 1600) => u('photo-1707871142734-56ebb5407e22', w),    // schuur met een hooibaal ervoor, zonsopkomst
  hooi: (w = 1200) => u('photo-1709219663973-21dc0d7b302a', w),    // schuur met opgestapelde hooibalen
  vuur: (w = 1200) => u('photo-1464808646948-8f732deb6e4b', w),    // brandend haardhout in het donker
  schommel: (w = 1200) => u('photo-1768831942460-43a780650b95', w), // rode schommel met twee schommels
};
