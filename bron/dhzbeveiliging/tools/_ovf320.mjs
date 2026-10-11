import { chromium } from 'playwright';
const b = await chromium.launch({ executablePath: 'C:/Users/Micha/AppData/Local/ms-playwright/chromium_headless_shell-1243/chrome-headless-shell-win64/chrome-headless-shell.exe' });
for (const w of [320, 390]) {
const p = await (await b.newContext({ viewport: { width: w, height: 640 } })).newPage();
await p.goto('http://127.0.0.1:4499/sitefront/dhzbeveiliging/', { waitUntil: 'networkidle' });
console.log(w, await p.evaluate((w) => [...document.querySelectorAll('body *')].filter(e => { const r = e.getBoundingClientRect(); return r.right > w + 1 && !e.closest('.overflow-x-auto'); }).slice(0, 8).map(e => e.tagName + '.' + (e.className.baseVal ?? e.className).slice(0, 60) + ' ' + Math.round(e.getBoundingClientRect().right)), w));
}
await b.close();
