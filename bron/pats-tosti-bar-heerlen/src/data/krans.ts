// De lauwerkrans met "045" van de muur bij Pat (eigen foto google-6), nagetekend: twee takken met blaadjes langs een boog.
// Wordt gebruikt als logo (header, voet) en, via tools/favicon.mjs, als favicon.
const r2 = (n: number) => Math.round(n * 100) / 100;

function tak(spiegel: boolean) {
  const cx = 50, cy = 50, r = 37;
  const van = 112, tot = 246, n = 10;
  const pt = (a: number, rr = r) => {
    const t = (a * Math.PI) / 180;
    const x = cx + rr * Math.cos(t);
    return [spiegel ? 100 - x : x, cy + rr * Math.sin(t)];
  };
  const [sx, sy] = pt(van);
  const [ex, ey] = pt(tot);
  let s = `<path d="M${r2(sx)} ${r2(sy)} A${r} ${r} 0 0 ${spiegel ? 0 : 1} ${r2(ex)} ${r2(ey)}" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>`;
  for (let i = 0; i < n; i++) {
    const a = van + 8 + (i * (tot - van - 10)) / (n - 1);
    const groot = 1 - i * 0.035;
    for (const kant of [-1, 1]) {
      const [x, y] = pt(a + 3, r + kant * 4.4 * groot);
      // blad wijst langs de tak omhoog, iets naar buiten of binnen gekanteld
      let rot = a + 90 + kant * 34;
      if (spiegel) rot = 180 - rot;
      s += `<ellipse cx="${r2(x)}" cy="${r2(y)}" rx="${r2(4.8 * groot)}" ry="${r2(1.85 * groot)}" transform="rotate(${r2(rot)} ${r2(x)} ${r2(y)})" fill="currentColor"/>`;
    }
  }
  return s;
}

export const kransPad = tak(false) + tak(true);

/** Krans met 045 in het midden, in de huidige tekstkleur. */
export const krans = (label = "Lauwerkrans met 045", tekst = "045", grootte = 30) =>
  `<svg viewBox="0 0 100 100" class="h-full w-full" role="img" aria-label="${label}">${kransPad}<text x="50" y="61" text-anchor="middle" font-family="'Big Shoulders Variable', 'Arial Narrow', sans-serif" font-weight="800" font-size="${grootte}" letter-spacing="1" fill="currentColor">${tekst}</text></svg>`;
