import { chromium } from 'playwright';
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
const LH = 'C:/Users/Micha/AppData/Local/npm-cache/_npx/0f94ee7615faf582/node_modules/lighthouse/cli/index.js';
const b = await chromium.launch({ channel: 'chrome', args: ['--remote-debugging-port=9388'] });
try {
  for (const [preset, out] of (process.argv[2]==='d' ? [['--preset=desktop', 'shots/lh-desktop.json']] : [['', 'shots/lh-mobile.json']])) {
    const r0 = spawnSync(process.execPath, [LH, 'http://localhost:4788/sitefront/rcm-hofstede-loonbedrijf-poeldijk/', ...(preset ? [preset] : []), '--port=9388', '--quiet', '--output=json', `--output-path=${out}`, '--only-categories=performance,accessibility,best-practices,seo', '--max-wait-for-load=60000'], { encoding: 'utf8' });
    if (r0.status) { console.log('LH fout', (r0.stderr || '').split('\n').filter((l) => !l.startsWith('    at')).slice(0, 6).join('\n')); continue; }
    const r = JSON.parse(fs.readFileSync(out, 'utf8'));
    console.log(out, Object.values(r.categories).map((c) => c.id + ':' + Math.round(c.score * 100)).join(' '), 'LCP', r.audits['largest-contentful-paint'].displayValue, 'CLS', r.audits['cumulative-layout-shift'].displayValue);
    for (const a of Object.values(r.audits)) if (a.score !== null && a.score < 0.9 && a.scoreDisplayMode === 'binary') console.log('  -', a.id);
  }
} finally { await b.close(); }
