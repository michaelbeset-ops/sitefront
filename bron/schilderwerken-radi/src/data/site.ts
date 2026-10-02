// Feiten uit drie bronnen, bekeken 2 oktober 2026:
// 1. Hun oude website schilderwerkenradidrechtsteden.nl via web.archive.org (5 pagina's, 5 augustus 2020: Welkom, Diensten,
//    Projecten, Referenties, Contact). Het domein bestaat niet meer. Teksten over binnen- en buitenschilderwerk, eerst
//    vrijblijvend langskomen, advies over kleuren en type verf, onderhoud/controles, nieuwbouw, verbouwing,
//    "Nauwkeurig, eerlijk en betrouwbaar", "vakmanschap en kwaliteit voor een betaalbare prijs", mailadres
//    Schilderwerkenradi@hotmail.com en de referentie van Fam. Mulders uit Dussen (naam Karim).
// 2. Het Google-bedrijfsprofiel (categorie Schilder, 4,3 uit 13 reviews: 10x vijf, 1x vier, 2x een ster; 06 43232382,
//    ma-vr 07.00-21.00, za-zo 12.00-18.00; reviewthema's "Responsiviteit, Stiptheid, Kwaliteit, Professionaliteit",
//    services "Exterieur schilderen, Deuren schilderen"; 12 van de 22 foto's).
// 3. Plaats Hendrik-Ido-Ambacht; het huisadres is privé en staat bewust NIET op de site.
export const site = {
  naam: 'Schilderwerken Radi Drechtsteden',
  kort: 'Schilderwerken Radi',
  plaats: 'Hendrik-Ido-Ambacht',
  werkgebied: 'Drechtsteden',
  tel: '06 43 23 23 82',
  telHref: 'tel:+31643232382',
  wa: 'https://wa.me/31643232382',
  mail: 'schilderwerkenradi@hotmail.com',
  reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Schilderwerken+Radi+Drechtsteden',
  google: { score: '4,3', aantal: 13, vijf: 10 },
  themeColor: '#23282c',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay). Tijden in minuten voor de live status.
export const tijden = [
  { dag: 1, naam: 'Maandag', van: 420, tot: 1260 },
  { dag: 2, naam: 'Dinsdag', van: 420, tot: 1260 },
  { dag: 3, naam: 'Woensdag', van: 420, tot: 1260 },
  { dag: 4, naam: 'Donderdag', van: 420, tot: 1260 },
  { dag: 5, naam: 'Vrijdag', van: 420, tot: 1260 },
  { dag: 6, naam: 'Zaterdag', van: 720, tot: 1080 },
  { dag: 0, naam: 'Zondag', van: 720, tot: 1080 },
];
export const uur = (m: number) => `${String(Math.floor(m / 60)).padStart(2, '0')}.${String(m % 60).padStart(2, '0')}`;

// Diensten in het kort: hun eigen vier diensten (oude site), de Google-services en wat op hun eigen foto's te zien is.
export const chips = ['Buitenschilderwerk', 'Binnenschilderwerk', 'Deuren', 'Kozijnen', 'Trappen', 'Dakkapellen', 'Onderhoud', 'Nieuwbouw', 'Kleuradvies'];

// De zeven gemeenten van de Drechtsteden.
export const plaatsen = ['Dordrecht', 'Zwijndrecht', 'Hendrik-Ido-Ambacht', 'Papendrecht', 'Sliedrecht', 'Alblasserdam', 'Hardinxveld-Giessendam'];

// Letterlijk van Google (stand 2 oktober 2026), alleen de positieve, ingekort met "…" waar aangegeven. Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Remco', wanneer: '6 jaar geleden', tekst: 'Radi Drechtsteden heeft het volledige exterieur van mijn woning voorzien van een nieuwe verflaag. Communicatie met Karim als zeer prettig ervaren en komt zijn afspraken na. Radi maakt gebruik van A merk verf. …' },
  { naam: 'E.R. S.', wanneer: '2 jaar geleden', tekst: 'Goede wijn behoeft geen krans. Schildersbedrijf Radi levert topkwaliteit. Karim komt afspraken keurig na. … Wij bevelen schildersbedrijf Radi van harte aan.' },
  { naam: 'Chantal L.', wanneer: '3 jaar geleden', tekst: 'Radi schilderwerken werkt netjes, keurig op tijd en komt afspraken na. Ik heb het al zeer prettig ervaren. Kan iedereen dit bedrijf aanbevelen.' },
  { naam: 'E.V.', wanneer: '3 jaar geleden', tekst: 'Kwam afspraken goed na en heeft netjes gewerkt. We zijn heel tevreden over het resultaat. Ook de afterservice was heel goed en we kunnen Radi zeker aanraden.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent('Hallo Karim, ' + tekst)}`;
export const waOfferte = waMet('ik wil graag een offerte voor schilderwerk. Het gaat om ');
