// Openingstijden van Cato by cato (Google-profiel): ma t/m vr 12:00-20:30, za 12:00-18:00, zo gesloten.
// Gedeeld door de live status en "Stel je bak samen".
export const TIJDEN: (null | [string, string])[] = [
  null,
  ['12:00', '20:30'], ['12:00', '20:30'], ['12:00', '20:30'], ['12:00', '20:30'], ['12:00', '20:30'],
  ['12:00', '18:00'],
];
export const DAGEN = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
const MAANDEN = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];

export const minuten = (t: string) => { const [h, m] = t.split(':').map(Number); return h * 60 + m; };
export const klok = (min: number) => `${String(Math.floor(min / 60)).padStart(2, '0')}:${String(min % 60).padStart(2, '0')}`;

export type Dag = { ymd: string; wd: number; d: number; m: number };
export function vanYmd(ymd: string): Dag {
  const [y, m, d] = ymd.split('-').map(Number);
  return { ymd, wd: new Date(Date.UTC(y, m - 1, d)).getUTCDay(), d, m };
}
export function plusDag(ymd: string, n = 1): string {
  const [y, m, d] = ymd.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d + n)).toISOString().slice(0, 10);
}
export const dagNaam = (dag: Dag) => `${DAGEN[dag.wd]} ${dag.d} ${MAANDEN[dag.m - 1]}`;

export function nuInMaastricht() {
  const p = Object.fromEntries(new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Amsterdam', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  }).formatToParts(new Date()).map((x) => [x.type, x.value]));
  return { dag: vanYmd(`${p.year}-${p.month}-${p.day}`), min: Number(p.hour) * 60 + Number(p.minute) };
}
