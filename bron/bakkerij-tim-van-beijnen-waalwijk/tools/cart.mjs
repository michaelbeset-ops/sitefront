import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: 1440, height: 900 }, locale: 'nl-NL' })).newPage();
await p.goto('https://www.vantim.nl/assortiment/gebak/bosvruchten-praline', { waitUntil: 'networkidle' });
const t1 = await p.evaluate(() => document.body.innerText); console.log(t1.split('Aantal')[1]?.replace(/\d+\n/g, '').slice(0, 1500));
await p.goto('https://www.vantim.nl/AddProduct.aspx?ProductId=74&SubcodeId=6&Amount=1&ActionCode=url&ActionCodeURL=|assortiment|desem-brood', { waitUntil: 'networkidle' });
await p.goto('https://www.vantim.nl/CheckoutShoppingCart.aspx', { waitUntil: 'networkidle' });
const t = await p.evaluate(() => document.body.innerText); console.log('CART:\n', t.split('Tim van Beijnen patisserie boulangerie\n\nHoogeinde')[0].slice(0, 4000));
await p.screenshot({ path: 'bron/site/cart-1440.png', fullPage: true }); await b.close();
