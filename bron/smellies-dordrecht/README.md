# smellies-dordrecht (v2)

Ontwerpvoorstel (Astro + Tailwind 4) voor Smellies, Dordrecht. Vervangt straks de demo in `smellies-dordrecht/`
(zelfde base `/sitefront/smellies-dordrecht`). Zie PLAN.md.

    npm install
    PUBLIC_VOORSTEL=1 npx astro build   # voorstelbalk + noindex
    npx astro preview --port 4581       # http://localhost:4581/sitefront/smellies-dordrecht/

Hulpscripts (draaien met de preview aan): `node tools/shots.mjs r1` (screenshots 1440/390/320),
`node tools/test2.mjs` (alle links, filter, opties), `node tools/og.mjs` (public/og.jpg).
