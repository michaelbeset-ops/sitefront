import { chromium } from 'playwright';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
const b = await chromium.launch({ channel: 'msedge', args: ['--remote-debugging-port=9397'] });
try {
  for (const [preset, out] of [[[], 'shots/lh-mobile.json'], [['--preset=desktop'], 'shots/lh-desktop.json']]) {
    execFileSync(process.execPath, ['C:/Users/Micha/AppData/Local/npm-cache/_npx/0f94ee7615faf582/node_modules/lighthouse/cli/index.js', 'http://localhost:4797/sitefront/van-oers-schilderwerken-etten-leur/', ...preset, '--port=9397', '--output=json', '--output-path=' + out, '--only-categories=performance,accessibility,best-practices,seo'], { stdio: 'inherit', timeout: 120000 });
    const r = JSON.parse(fs.readFileSync(out, 'utf8'));
    console.log(out, Object.values(r.categories).map((c) => c.id + ':' + Math.round(c.score * 100)).join(' '), 'LCP', r.audits['largest-contentful-paint'].displayValue, 'CLS', r.audits['cumulative-layout-shift'].displayValue);
    for (const a of Object.values(r.audits)) if (a.score !== null && a.score < 0.9 && a.scoreDisplayMode === 'binary') console.log('  -', a.id);
  }
} finally { await b.close(); }
