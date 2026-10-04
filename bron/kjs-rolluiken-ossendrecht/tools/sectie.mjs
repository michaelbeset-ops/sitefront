// Screenshot van één sectie: node tools/sectie.mjs <selector> <breedte> <bestand>
import { chromium } from 'playwright';
const [sel, w, uit] = process.argv.slice(2);
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: Number(w), height: 900 } });
await p.goto('http://localhost:4801/sitefront/kjs-rolluiken-ossendrecht/', { waitUntil: 'networkidle' });
await p.evaluate(() => document.querySelectorAll('.rijs').forEach((e) => e.classList.add('in')));
await p.waitForTimeout(800);
await p.locator(sel).screenshot({ path: uit });
await b.close();
