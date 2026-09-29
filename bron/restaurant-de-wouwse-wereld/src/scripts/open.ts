// Openingstijden en vakantiesluiting van wouwsewereld.nl, gedeeld door de status en het reserveringsformulier.
// Maandag en dinsdag gesloten, woensdag t/m zondag vanaf 18.00 uur, vakantie 12 september t/m 4 oktober 2026.
export const OPEN_DAGEN = [3, 4, 5, 6, 0];
export const VAKANTIE = { van: '2026-09-12', tot: '2026-10-04' };
const DAGEN = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
const MAANDEN = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];

export type Dag = { ymd: string; wd: number; d: number; m: number };

export function vanYmd(ymd: string): Dag {
  const [y, m, d] = ymd.split('-').map(Number);
  return { ymd, wd: new Date(Date.UTC(y, m - 1, d)).getUTCDay(), d, m };
}
function plusDag(ymd: string): string {
  const [y, m, d] = ymd.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d + 1)).toISOString().slice(0, 10);
}
export const opVakantie = (ymd: string) => ymd >= VAKANTIE.van && ymd <= VAKANTIE.tot;
export const isOpen = (dag: Dag) => OPEN_DAGEN.includes(dag.wd) && !opVakantie(dag.ymd);
export const dagNaam = (dag: Dag) => `${DAGEN[dag.wd]} ${dag.d} ${MAANDEN[dag.m - 1]}`;

export function nuInWouw() {
  const p = Object.fromEntries(new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Amsterdam', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', hourCycle: 'h23',
  }).formatToParts(new Date()).map((x) => [x.type, x.value]));
  return { dag: vanYmd(`${p.year}-${p.month}-${p.day}`), uur: Number(p.hour) };
}

export function volgendeOpen(ymd: string): Dag {
  let t = plusDag(ymd);
  for (let i = 0; i < 60; i++) { const d = vanYmd(t); if (isOpen(d)) return d; t = plusDag(t); }
  return vanYmd(t);
}
