// Feiten (bekeken 12 oktober 2026), bronnen in bron/:
// - Eigen site kuiperuurwerktechniek.nl (4 pagina's in bron/site/*.txt): Home, Restauratie, Informatie, Contact.
//   Klokkenmaker Robbert Kuiper; in 2014 afgestudeerd als uurwerktechnicus in Schoonhoven; stage en drie dagen per week bij
//   Joost Jongerius restauraties; ook actief bij juwelier/horlogemaker Dirk Oskam. Werkt vanuit huis (werkbank).
//   Klok wordt thuis opgehaald, akkoord met reparatie = geen voorrijkosten, netjes thuisgebracht, twee jaar garantie.
//   Na reparatie 2 weken gecontroleerd. "Let op, ik werk alleen op afspraak." Bellen, mailen of whatsappen.
//   Contact: Dumasstraat 121b, 3076 HH Rotterdam (hij werkt vanuit huis: alleen Rotterdam tonen), 06 169 317 02,
//   info@kuiperuurwerktechniek.nl, KvK 65865685.
// - Facebook (intro): "reparaties en restauraties van moderne en antieke klokken". Instagram: "Klokken reparaties en restauraties".
// - Google: Reparatiebedrijf, 5,0 uit 15 reviews, nieuwste 6 maanden geleden. Geen openingstijden op Google of eigen site.
export const site = {
  naam: 'Kuiper Uurwerktechniek',
  eigenaar: 'Robbert Kuiper',
  plaats: 'Rotterdam',
  tel: '06 169 317 02',
  telHref: 'tel:+31616931702',
  wa: 'https://wa.me/31616931702',
  mail: 'info@kuiperuurwerktechniek.nl',
  kvk: '65865685',
  insta: 'https://www.instagram.com/kuiperuurwerktechniek',
  fb: 'https://www.facebook.com/Kuiper-uurwerktechniek-101677875259455',
  reviews: 'https://www.google.com/maps/place/Kuiper+Uurwerktechniek/@51.9279577,4.4906602,12z/data=!4m6!3m5!1s0x47c4337d78541863:0xe0ff7b0c506e0e37!8m2!3d51.9279577!4d4.4906602!16s%2Fg%2F11h578nj5z',
  google: { score: '5,0', aantal: 15 },
  themeColor: '#0d0c0a',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Letterlijk van Google (alle 5 sterren), ingekort met "…". Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'M. K.', wanneer: '6 maanden geleden', tekst: 'Wat een vakmanschap, mijn oude klok helemaal tot in de puntjes nagekeken en hangt nu weer als een pronkstuk aan de muur. … Ook erg fijn dat je op de hoogte gehouden wordt d.m.v. foto\'s tijdens het proces en dat is erg gaaf om te zien.' },
  { naam: 'Laurens F.', wanneer: 'een jaar geleden', tekst: '100% tevreden vanaf het moment dat de klok opgehaald werd tot en met het moment dat Robert m’n klok weer thuis kwam brengen. Robert is een echte vakman, geeft regelmatig updates en stuurt foto’s van de restauratie.' },
  { naam: 'Annelies B.', wanneer: '2 jaar geleden', tekst: 'Mijn klok weer perfect gerepareerd en gereviseerd. Loopt weer als een zonnetje en ziet er weer uit als nieuw. Tijdens de reparatie foto \'s ontvangen. Klok wordt opgehaald en weer netjes thuis gebracht, super service!' },
  { naam: 'Peter B.', wanneer: '3 jaar geleden', tekst: 'Ik heb mijn klok laten reviseren bij Robbert. Leuk en goed advies over wat de bedoeling is. … hij komt hem ophalen en weer bezorgen. Ik beveel deze uurwerk specialist zeker aan bij een ieder.' },
  { naam: 'Trudie B.', wanneer: '3 jaar geleden', tekst: 'Onze klok is met de hand gemaakt door de Heer Koorengevel te Rotterdam in de 90er jaren. Robbert heeft de klok deskundig gereviseerd en hij loopt precies op tijd. Kuiper is een vakman.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Robbert, ik heb een vraag over mijn klok.');
