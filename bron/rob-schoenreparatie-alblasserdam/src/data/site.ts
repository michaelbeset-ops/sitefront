// Feiten uitsluitend uit het Google-bedrijfsprofiel "Schoenreparatieservice ROB Sleutelservice & Stomerij"
// (bekeken 2 oktober 2026): categorie Schoenmaker, gevestigd in Makado Winkelcentrum, 2951 EJ Alblasserdam,
// 06 12001330, 4,5 uit 31 reviews, openingstijden zoals hieronder, geen website, profiel niet geclaimd.
// Eigenaar heet Rob (review), eenmanszaak (review). Geen straatnaam, e-mail of KvK gevonden.
export const site = {
  naam: 'Schoenreparatieservice ROB',
  volledig: 'Schoenreparatieservice ROB Sleutelservice & Stomerij',
  plek: 'Makado Winkelcentrum',
  postcode: '2951 EJ',
  plaats: 'Alblasserdam',
  tel: '06 12 00 13 30',
  telHref: 'tel:+31612001330',
  wa: 'https://wa.me/31612001330',
  maps: 'https://www.google.com/maps/search/?api=1&query=Schoenreparatieservice+ROB+Sleutelservice+Stomerij+Alblasserdam',
  google: { score: '4,5', aantal: 31 },
  themeColor: '#1a1612',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Openingstijden precies zoals op Google (d: 0 = zondag). Leeg = gesloten.
export const tijden: { dag: string; kort: string; d: number; blokken: [string, string][] }[] = [
  { dag: 'Maandag', kort: 'Ma', d: 1, blokken: [['11:00', '16:28']] },
  { dag: 'Dinsdag', kort: 'Di', d: 2, blokken: [['09:30', '17:15']] },
  { dag: 'Woensdag', kort: 'Wo', d: 3, blokken: [] },
  { dag: 'Donderdag', kort: 'Do', d: 4, blokken: [['09:30', '16:28']] },
  { dag: 'Vrijdag', kort: 'Vr', d: 5, blokken: [['09:30', '16:24'], ['18:33', '19:55']] },
  { dag: 'Zaterdag', kort: 'Za', d: 6, blokken: [['09:30', '16:00']] },
  { dag: 'Zondag', kort: 'Zo', d: 0, blokken: [] },
];
export const tijd = (s: string) => s.replace(':', '.');
export const blokTekst = (b: [string, string][]) => (b.length ? b.map(([a, z]) => `${tijd(a)} - ${tijd(z)}`).join(' en ') : 'Gesloten');

// Letterlijk van Google (stand 2 oktober 2026), alle met 5 sterren (bron/sterren.txt). "…" = ingekort.
export const reviews = [
  { naam: 'Martin V.', wanneer: 'een jaar geleden', tekst: 'Mijn Carlos Santos schoenen zijn weer als nieuw. Snel en vakkundig gemaakt, en tegen een zeer schappelijke prijs' },
  { naam: 'Bart B.', wanneer: '3 jaar geleden', tekst: 'Top zaak en vriendelijke eigenaar. Inmiddels meerdere keren sleutels laten bijmaken hier, altijd top kwaliteit!' },
  { naam: 'Jack W.', wanneer: '7 jaar geleden', tekst: 'Zeer goede schoenmakerij, geduldige en aardige man die zijn vak kent en meedenkt in oplossingen' },
  { naam: 'Suzanne W.', wanneer: '5 jaar geleden', tekst: '… Het is een eenmanszaak. Geeft eerlijk zijn mening en zal niets repareren dat niet meer de moeite waard is ;)' },
  { naam: 'Cees J.', wanneer: '8 jaar geleden', tekst: 'maak alles weer in orde, schoen en kleren , bedankt Rob voor de snelle service.' },
  { naam: 'Mark H.', wanneer: '5 jaar geleden', tekst: 'Goed geholpen en keurige vakkundige reparatie.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHallo = waMet('Hallo Rob, ik heb een vraag.');
