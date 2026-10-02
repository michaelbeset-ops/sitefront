// Feiten uit twee bronnen, bekeken 2 oktober 2026:
// 1. Hun oude website schilderwerkenradidrechtsteden.nl via web.archive.org (5 pagina's, 5 augustus 2020: Welkom, Diensten,
//    Projecten, Referenties, Contact). Het domein bestaat niet meer. Teksten over binnen- en buitenschilderwerk, eerst
//    vrijblijvend langskomen, advies over kleuren en type verf, onderhoud/controles, nieuwbouw, verbouwing,
//    "Nauwkeurig, eerlijk en betrouwbaar", mailadres Schilderwerkenradi@hotmail.com en de naam Karim (referentiepagina).
// 2. Het Google-bedrijfsprofiel (categorie Schilder, 4,3 uit 13 reviews, 06 43232382, open ma-vr 07.00-21.00, za-zo
//    12.00-18.00; reviewthema's "Responsiviteit, Stiptheid, Kwaliteit, Professionaliteit", services "Exterieur schilderen,
//    Deuren schilderen"; 12 van de 22 foto's). Plaats Hendrik-Ido-Ambacht; het huisadres is privé en staat bewust NIET op de site.
export const site = {
  naam: 'Schilderwerken Radi Drechtsteden',
  kort: 'Schilderwerken Radi',
  plaats: 'Hendrik-Ido-Ambacht',
  werkgebied: 'Drechtsteden',
  tel: '06 43 23 23 82',
  telHref: 'tel:+31643232382',
  wa: 'https://wa.me/31643232382',
  mail: 'schilderwerkenradi@hotmail.com',
  google: '4,3',
  googleAantal: 13,
  themeColor: '#f3f2ef',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const tijden: [string, string][] = [
  ['Maandag tot en met vrijdag', '07.00 tot 21.00'],
  ['Zaterdag en zondag', '12.00 tot 18.00'],
];
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent('Hallo Karim, ' + tekst)}`;
