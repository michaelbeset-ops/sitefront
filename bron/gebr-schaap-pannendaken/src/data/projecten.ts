// Alle projecten van hun referentiepagina's (nieuwbouw, renovatie, restauratie) met de teksten van de projectpagina's.
// Namen, ondertitels en teksten letterlijk; alleen spelfouten ("lood-en") recht gezet. Foto's: hun galerijfoto's (800 px).
import type { ImageMetadata } from 'astro';

const fotos = import.meta.glob<{ default: ImageMetadata }>('../assets/p/*.jpg', { eager: true });
const f = (naam: string) => fotos[`../assets/p/${naam}.jpg`].default;

export type Soort = 'nieuwbouw' | 'renovatie' | 'restauratie';
export type Plaats = 'alkmaar' | 'amsterdam' | 'bussum' | 'hilversum' | 'laren';

export interface Project {
  id: string;
  naam: string;
  plaats: Plaats;
  soorten: Soort[];
  sub: string;
  tekst: string[];
  hoofd: number;
  fotos: { src: ImageMetadata; alt: string; bij?: string }[];
}

export const soortNamen: Record<Soort, string> = { nieuwbouw: 'Nieuwbouw', renovatie: 'Renovatie', restauratie: 'Restauratie' };
export const plaatsNamen: Record<Plaats, string> = { alkmaar: 'Alkmaar', amsterdam: 'Amsterdam', bussum: 'Bussum', hilversum: 'Hilversum', laren: 'Laren' };

export const projecten: Project[] = [
  {
    id: 'alkmaar', naam: 'Coornhertkade te Alkmaar', plaats: 'alkmaar', soorten: ['nieuwbouw'],
    sub: 'In het oog springend appartementencomplex',
    tekst: [
      'In opdracht van Bouwbedrijf Van der Gragt uit Wormerveer hebben wij de wandbekleding in dakpannen uitgevoerd. Alle details zijn specifiek uitgewerkt. Opvallende details zijn de meegedekte schoorsteen en de met dakpannen beklede balkons. Een precisiewerk gezien de legmethode zeer nauwkeurig moet worden berekend.',
      'Met dit project genomineerd voor de prijs van de IFD (International Federation for the Roofing Trade), en geëindigd bij de laatste 5 van Europa.',
    ],
    hoofd: 2,
    fotos: [
      { src: f('alkmaar-1'), alt: 'Gevel van het appartementencomplex aan de Coornhertkade, geheel bekleed met oranje dakpannen, met balkons' },
      { src: f('alkmaar-2'), alt: 'Het appartementencomplex aan de Coornhertkade in Alkmaar, met gevels en balkons in oranje dakpannen' },
      { src: f('alkmaar-3'), alt: 'Het appartementencomplex aan de Coornhertkade in avondlicht, gevels en balkons bekleed met dakpannen' },
      { src: f('alkmaar-4'), alt: 'Detail van de met dakpannen beklede balkons aan de Coornhertkade' },
      { src: f('alkmaar-5'), alt: 'De oorkonde van de IFD voor Gebr. Schaap Pannendaken, genomineerd in de categorie gevelbekleding', bij: 'De nominatie van de IFD' },
    ],
  },
  {
    id: 'amsterdam', naam: 'Amsterdam - Schubertstraat', plaats: 'amsterdam', soorten: ['renovatie'],
    sub: 'Renovatie woningen', tekst: [], hoofd: 0,
    fotos: [
      { src: f('amsterdam-1'), alt: 'Rij woningen aan de Schubertstraat in Amsterdam met een nieuw rood pannendak en dakkapellen' },
      { src: f('amsterdam-2'), alt: 'Het oude, verweerde dak aan de Schubertstraat vóór de renovatie', bij: 'Oude toestand' },
      { src: f('amsterdam-3'), alt: 'Het dak aan de Schubertstraat met nieuwe panlatten rond een dakkapel', bij: 'Nieuwe toestand' },
      { src: f('amsterdam-4'), alt: 'Een dakdekker aan het werk op het dak aan de Schubertstraat, met het spandoek van Gebr. Schaap op de steiger' },
    ],
  },
  {
    id: 'fortlaan', naam: 'Bussum - Fortlaan', plaats: 'bussum', soorten: ['renovatie'],
    sub: 'Prachtige pannendaken 2 herenhuizen',
    tekst: [
      'Voor 2 particuliere woningbezitters hebben wij deze authentieke daken in stijl gerenoveerd. Met respect voor de materialen van toen, is hier gekozen voor een lichtbruin geglazuurde Tuile du Nord-dakpan. Tevens zijn hier het platte dak, het loodwerk en de goten door ons vernieuwd.',
      'Een resultaat dat er wezen mag en zeker een meerwaarde voor de woningen.',
    ],
    hoofd: 0,
    fotos: [
      { src: f('fortlaan-1'), alt: 'Wit herenhuis aan de Fortlaan in Bussum met balkon en een gerenoveerd rood pannendak' },
      { src: f('fortlaan-2'), alt: 'Topgevel en nieuw pannendak aan de Fortlaan, achter takken van een boom' },
      { src: f('fortlaan-3'), alt: 'Hoek van het nieuwe pannendak aan de Fortlaan, met donkere dakrand' },
      { src: f('fortlaan-4'), alt: 'Het tweede herenhuis aan de Fortlaan met vernieuwd pannendak, tussen het groen' },
      { src: f('fortlaan-5'), alt: 'Nieuwe pannen rond een witte dakkapel aan de Fortlaan' },
    ],
  },
  {
    id: 'loomanplein', naam: 'Bussum - Loomanplein', plaats: 'bussum', soorten: ['renovatie', 'restauratie'],
    sub: 'Prachtig pannendak herenhuis',
    tekst: ['De eigenaren van een van de mooiste panden uit Het Spiegel te Bussum hebben er voor gekozen de renovatie uit te laten voeren door Schaap Pannendaken. Het dak van deze 2 onder 1 kap-woning is geheel in ere hersteld. Ook de specifieke details zijn hierbij zeer nauwkeurig uitgewerkt.'],
    hoofd: 0,
    fotos: [
      { src: f('loomanplein-1'), alt: 'Wit herenhuis aan het Loomanplein in Bussum met een rood pannendak, balkon en klimop' },
      { src: f('loomanplein-2'), alt: 'De twee-onder-een-kapwoning aan het Loomanplein met het herstelde pannendak en torentje' },
    ],
  },
  {
    id: 'irisstraat', naam: 'Hilversum - woningbouwplan Irisstraat', plaats: 'hilversum', soorten: ['renovatie'],
    sub: 'Renovatie woningen',
    tekst: ['Deze typische jaren 30-woningen hebben hun oorspronkelijke frisse uitstraling weer teruggekregen. Een grootschalige renovatie in de Bloemenbuurt in Hilversum.'],
    hoofd: 1,
    fotos: [
      { src: f('irisstraat-1'), alt: 'Een straat met jaren 30-woningen in de Bloemenbuurt in Hilversum, met nieuwe oranje pannendaken' },
      { src: f('irisstraat-2'), alt: 'Nieuwe oranje pannendaken met puntgevels aan de Irisstraat in Hilversum' },
      { src: f('irisstraat-3'), alt: 'Twee puntgevels met nieuwe pannen en dakkapellen aan de Irisstraat' },
      { src: f('irisstraat-4'), alt: 'Woning met een rood pannendak en witte gevel aan de Prinses Margrietstraat', bij: 'Prinses Margrietstraat' },
    ],
  },
  {
    id: 'gerardsweg', naam: 'Hilversum - J. Gerardsweg', plaats: 'hilversum', soorten: ['renovatie'],
    sub: "Diverse villa's",
    tekst: [
      'Hilversum binnenkomend valt de Johan Gerardsweg direct op. Hier heeft Schaap Pannendaken voor meer dan 10 huiseigenaren tot grote tevredenheid het dak mogen renoveren. Daken die aan de specifieke eisen van deze wijk voldoen. Geen woning is hetzelfde en iedere woning is voorzien van het dak wat de woning vraagt.',
      'Ook het lood- en zinkwerk is hier onder handen genomen.',
    ],
    hoofd: 4,
    fotos: [
      { src: f('gerardsweg-1'), alt: 'Villa aan de Johan Gerardsweg in Hilversum met een donker pannendak en puntgevels' },
      { src: f('gerardsweg-2'), alt: 'Villa aan de Johan Gerardsweg met een donker pannendak en houten gevelbeschot' },
      { src: f('gerardsweg-3'), alt: 'Donker pannendak met dakramen aan de Johan Gerardsweg' },
      { src: f('gerardsweg-4'), alt: 'Villa aan de Johan Gerardsweg met een donker pannendak en balkon' },
      { src: f('gerardsweg-5'), alt: 'Villa aan de Johan Gerardsweg met een groot, donker schilddak en schoorsteen' },
    ],
  },
  {
    id: 'strijlandlaan', naam: 'Hilversum - Strijlandlaan', plaats: 'hilversum', soorten: ['renovatie'],
    sub: 'Renovatie woningen',
    tekst: ['Een grootschalig renovatieproject.', 'Ook het lood- en zinkwerk is hier onder handen genomen.'],
    hoofd: 2,
    fotos: [
      { src: f('strijlandlaan-1'), alt: 'Woningen aan de Strijlandlaan in Hilversum met vernieuwde donkere pannendaken' },
      { src: f('strijlandlaan-2'), alt: 'Detail van de dakrand en het zinkwerk aan de Strijlandlaan' },
      { src: f('strijlandlaan-3'), alt: 'Rij woningen aan de Strijlandlaan met een nieuw donker pannendak' },
    ],
  },
  {
    id: 'nieuweweg', naam: 'Laren - Nieuweweg', plaats: 'laren', soorten: ['renovatie'],
    sub: 'Prachtig pannendak in Laren centrum', tekst: [], hoofd: 2,
    fotos: [
      { src: f('nieuweweg-1'), alt: 'Pand aan de Nieuweweg in Laren met een nieuw rood pannendak, met de kerktorens op de achtergrond' },
      { src: f('nieuweweg-2'), alt: 'Rood pannendak met dakkapel aan de Nieuweweg in Laren' },
      { src: f('nieuweweg-3'), alt: 'Hoekpand aan de Nieuweweg in Laren centrum met een rood pannendak' },
      { src: f('nieuweweg-4'), alt: 'Het dak aan de Nieuweweg vóór de renovatie', bij: 'Oude toestand' },
    ],
  },
  {
    id: 'klaaskampen', naam: 'Laren - Klaaskampen', plaats: 'laren', soorten: ['restauratie'],
    sub: 'Pand Bart Smit in ere hersteld',
    tekst: ['Een pand met zeer veel kenmerkende details.'],
    hoofd: 2,
    fotos: [
      { src: f('klaaskampen-1'), alt: 'Het gerestaureerde pand aan de Klaaskampen in Laren met trapgevels en een rood pannendak' },
      { src: f('klaaskampen-2'), alt: 'Het hoekpand aan de Klaaskampen met trapgevel, van onderaf' },
      { src: f('klaaskampen-3'), alt: 'Trapgevels en dakkapellen van het pand aan de Klaaskampen' },
      { src: f('klaaskampen-4'), alt: 'Rood pannendak met twee dakkapellen tussen twee trapgevels aan de Klaaskampen' },
      { src: f('klaaskampen-5'), alt: 'Het pand aan de Klaaskampen in Laren vanaf de straat' },
    ],
  },
];

// Plaatsen op de kaart (breedte- en lengtegraad van de plaats), plus de werkplaats in 's-Graveland.
export const coords: Record<Plaats | 'basis', [number, number]> = {
  alkmaar: [52.632, 4.748],
  amsterdam: [52.35, 4.876],
  bussum: [52.276, 5.162],
  hilversum: [52.223, 5.176],
  laren: [52.257, 5.228],
  basis: [52.2445, 5.1207],
};
