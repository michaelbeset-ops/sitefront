// Openingstijden van Bij Nadia (Google-profiel), gedeeld door de status, de tijdentabel en het bestelblok.
// di, wo, do, za 09.30-17.00; vr 09.30-18.00; zo 11.00-17.00; ma gesloten.
export const UREN: Record<number, [string, string] | null> = {
  0: ['11:00', '17:00'], 1: null, 2: ['09:30', '17:00'], 3: ['09:30', '17:00'],
  4: ['09:30', '17:00'], 5: ['09:30', '18:00'], 6: ['09:30', '17:00'],
};
export const DAGEN = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
const MAANDEN = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];

export const punt = (t: string) => t.replace(':', '.');
export function wdVan(ymd: string) {
  const [y, m, d] = ymd.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d)).getUTCDay();
}
export function dagNaam(ymd: string) {
  const [, m, d] = ymd.split('-').map(Number);
  return `${DAGEN[wdVan(ymd)]} ${d} ${MAANDEN[m - 1]}`;
}
export function plusDagen(ymd: string, n: number) {
  const [y, m, d] = ymd.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d + n)).toISOString().slice(0, 10);
}
export function nuInPanningen() {
  const p = Object.fromEntries(new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Amsterdam', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  }).formatToParts(new Date()).map((x) => [x.type, x.value]));
  return { ymd: `${p.year}-${p.month}-${p.day}`, hm: `${p.hour}:${p.minute}` };
}
// Tijdvakken per kwartier binnen de openingstijden van die dag (tot sluitingstijd, niet erop).
export function kwartieren(wd: number): string[] {
  const u = UREN[wd];
  if (!u) return [];
  const naMin = (t: string) => Number(t.slice(0, 2)) * 60 + Number(t.slice(3));
  const uit: string[] = [];
  for (let t = naMin(u[0]); t < naMin(u[1]); t += 15) uit.push(`${String(Math.floor(t / 60)).padStart(2, '0')}:${String(t % 60).padStart(2, '0')}`);
  return uit;
}
