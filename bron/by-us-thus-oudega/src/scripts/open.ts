// Openingstijden volgens Google: vrijdag, zaterdag en zondag 17.00-21.00, maandag t/m donderdag gesloten.
// Gedeeld door de openingstijdentabel en de reserveringshulp. Tijdzone Europe/Amsterdam.
import { OPEN_DAGEN } from '../data/site';
export { OPEN_DAGEN };
export const DAGEN = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
export const KORT = ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'];
export const MAANDEN = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];

export type Dag = { ymd: string; wd: number; d: number; m: number };
export function vanYmd(ymd: string): Dag {
  const [y, m, d] = ymd.split('-').map(Number);
  return { ymd, wd: new Date(Date.UTC(y, m - 1, d)).getUTCDay(), d, m };
}
export function plusDagen(ymd: string, n: number): string {
  const [y, m, d] = ymd.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d + n)).toISOString().slice(0, 10);
}
export const isOpen = (dag: Dag) => OPEN_DAGEN.includes(dag.wd);
export const dagNaam = (dag: Dag) => `${DAGEN[dag.wd]} ${dag.d} ${MAANDEN[dag.m - 1]}`;

export function nuInOudega() {
  const p = Object.fromEntries(new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Amsterdam', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  }).formatToParts(new Date()).map((x) => [x.type, x.value]));
  return { dag: vanYmd(`${p.year}-${p.month}-${p.day}`), minuut: Number(p.hour) * 60 + Number(p.minute) };
}
