// Feiten (bekeken 01-10-2026). Van Wijgerden Transport B.V., Polderweg Oost 16, 2973 AN Molenaarsgraaf, 0184 642 085,
// KvK 63632152, opgericht 1982 (Creditsafe). vanwijgerdentransport.nl: "Dit domein is geregistreerd, maar heeft geen website."
// Google 4,6 uit 8, categorie Logistiek. Openbaar: speciaal transport; Volvo FH16 (Truckstar: "FH16 750 voor Van Wijgerden");
// actief in de Rotterdamse haven (rotterdamtransport.com); semi-dieplader (Broshuis) op LinkedIn.
// Eigen foto's (Google-profiel): Volvo FH16 750, kenteken 34-BFN-5, bord "Convoi exceptionnel", Nooteboom-oplegger op het erf.
// Let op: op de cabine staat ook een 06-nummer; volgens de brief GEEN WhatsApp en alleen het vaste nummer gebruiken.
export const site = {
  naam: 'Van Wijgerden Transport',
  bv: 'Van Wijgerden Transport B.V.',
  straat: 'Polderweg Oost 16',
  postcode: '2973 AN',
  plaats: 'Molenaarsgraaf',
  tel: '0184 642 085',
  telHref: 'tel:+31184642085',
  kvk: '63632152',
  maps: 'https://www.google.com/maps/search/?api=1&query=Van+Wijgerden+Transport+Polderweg+Oost+16+Molenaarsgraaf',
  google: { score: '4,6', aantal: 8 },
  themeColor: '#0e2560',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
