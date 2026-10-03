import { chromium } from 'playwright';
import { execSync } from 'node:child_process';
import fs from 'node:fs';
const b = await chromium.launch({ channel: 'chromium', args: ['--remote-debugging-port=9341'] });
try {
  for (const [preset, out] of [['', 'shots/lh-mobile.json'], ['--preset=desktop', 'shots/lh-desktop.json']]) {
    execSync(`npx -y lighthouse http://localhost:4771/sitefront/timmerbedrijf-van-der-meij-pijnacker/ ${preset} --port=9341 --quiet --output=json --output-path=${out} --only-categories=performance,accessibility,best-practices,seo`, { stdio: 'inherit' });
    const r = JSON.parse(fs.readFileSync(out, 'utf8'));
    console.log(out, Object.values(r.categories).map((c) => c.id + ':' + Math.round(c.score * 100)).join(' '), 'LCP', r.audits['largest-contentful-paint'].displayValue, 'CLS', r.audits['cumulative-layout-shift'].displayValue);
    for (const a of Object.values(r.audits)) if (a.score !== null && a.score < 0.9 && a.scoreDisplayMode === 'binary') console.log('  -', a.id);
  }
} finally { await b.close(); }
