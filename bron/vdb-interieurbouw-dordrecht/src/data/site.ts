// Feiten (bekeken 7 oktober 2026), bronnen in bron/web/:
// - vdb-interieurbouw.nl (MET streepje; live, HTTP 200, Skrollex-template, (c) 2015; bron/web/vdb-interieurbouw.nl-live.html):
//   "Maatwerk voor elk interieur", "Keuken op maat..", "Walk-in closet..", "Totaal project".
//   "VDB interieurbouw is een jong en fris bedrijf, opgestart in 2014." "Na jarenlang het werk te hebben verricht onder leiding
//   van anderen, was de tijd aangebroken om zelf mooie en bijzondere projecten aan te nemen." "vakmanschap, passie en
//   betrokkenheid". "huis-, bad- of slaapkamer, toilet, winkel of werkpand". "Mijn naam is Sven van den Berg." Hout- en
//   Meubileringscollege in Rotterdam (archief 2016: "in 2005"). Beurzen, boeken. "Mijn eigen werkplaats in Dordrecht".
//   Proces: Research (wensen onder woorden, voorbeelden, sfeer, materialen, maten, manier van werken, tijdsbestek,
//   "heeft u er een beeld bij?") en Ontwerp (computerprogramma, zeer realistisch beeld, pas na akkoord de uitvoeringsfase).
//   Portfoliofilters: Meubel, winkel, particulier, totaal project. Tel +31 (0) 648256697, info@vdb-interieurbouw.nl.
//   Projectfoto's: eigen (Canon EOS 5DS, met VDB-logo in de hoek), images/placeholders/*.jpg.
// - Archief maart 2016 noemde "Palissander 315, 3315 MT Dordrecht"; later weggehaald: NIET tonen (mogelijk woonadres).
// - LET OP: www.vdbinterieurbouw.nl (zonder streepje, nu "WordPress > fout") is een ANDER bedrijf: VDB Interieur & Montage,
//   Anne van der Berg, Bakel (archief 25-02-2025). Niets daarvan gebruikt.
// - Geen Google-profiel gevonden; Facebook-pagina en Instagram niet meer beschikbaar; Pinterest leeg. Geen reviews.
export const site = {
  naam: 'VDB interieurbouw',
  eigenaar: 'Sven van den Berg',
  plaats: 'Dordrecht',
  tel: '06 48 25 66 97',
  telHref: 'tel:+31648256697',
  wa: '31648256697',
  mail: 'info@vdb-interieurbouw.nl',
  sinds: 2014,
  themeColor: '#141218',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

export const waLink = (tekst: string) => `https://wa.me/${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waStandaard = waLink('Hallo Sven, ik heb een vraag over maatwerk voor mijn interieur.');

// Wat ze zelf noemen (hero, portfoliofilter).
export const werk = ['Keuken op maat', 'Walk-in closet', 'Meubel op maat', 'Totaal project'];
// "huis-, bad- of slaapkamer, toilet, winkel of werkpand"
export const ruimtes = ['Huiskamer', 'Badkamer', 'Slaapkamer', 'Toilet', 'Winkel', 'Werkpand'];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
