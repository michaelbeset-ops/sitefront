/* Sitefront demo's – gedeelde code.
   Link-opbouw: ?b=Bedrijfsnaam&p=branche&n=Voornaam
   b = bedrijfsnaam, p = branche (zie BRANCHES), n = voornaam van iemand bij het bedrijf (optioneel) */
(function () {
  "use strict";

  const BRANCHES = {
    zonwering:    { aanvraag: "een zonnescherm voor het terras", kort: "zonnescherm", afspraak: "inmeten bij je thuis", opties: ["Knikarmscherm", "Screens", "Rolluiken", "Uitvalscherm"], maat: "bh" },
    keukens:      { aanvraag: "een nieuwe keuken", kort: "keuken", afspraak: "een ontwerpafspraak in de showroom", opties: ["Rechte keuken", "Hoekkeuken", "Keuken met eiland", "Apparatuur vervangen"], maat: "lengte" },
    meubels:      { aanvraag: "een nieuwe hoekbank", kort: "hoekbank", afspraak: "een bezoek aan de showroom", opties: ["Hoekbank", "Eettafel en stoelen", "Kast op maat", "Fauteuil"], maat: "bh" },
    badkamers:    { aanvraag: "een nieuwe badkamer", kort: "badkamer", afspraak: "een ontwerpafspraak in de showroom", opties: ["Complete badkamer", "Inloopdouche", "Toilet", "Badmeubel"], maat: "m2" },
    vloeren:      { aanvraag: "een pvc-vloer voor de woonkamer", kort: "vloer", afspraak: "inmeten bij je thuis", opties: ["PVC", "Parket", "Laminaat", "Tapijt"], maat: "m2" },
    tegels:       { aanvraag: "nieuwe tegels voor de badkamer", kort: "tegels", afspraak: "een bezoek aan de showroom", opties: ["Vloertegels", "Wandtegels", "Buitentegels", "Natuursteen"], maat: "m2" },
    kozijnen:     { aanvraag: "nieuwe kunststof kozijnen", kort: "kozijnen", afspraak: "inmeten bij je thuis", opties: ["Kunststof kozijnen", "Houten kozijnen", "Voordeur", "Schuifpui"], maat: "bh" },
    veranda:      { aanvraag: "een veranda met glazen schuifwanden", kort: "veranda", afspraak: "een bezoek aan de showroom", opties: ["Veranda", "Tuinkamer", "Carport", "Glazen schuifwanden"], maat: "bh" },
    haarden:      { aanvraag: "een gashaard", kort: "haard", afspraak: "een bezoek aan de showroom", opties: ["Gashaard", "Houtkachel", "Pelletkachel", "Elektrische haard"], maat: null },
    raamdecoratie:{ aanvraag: "nieuwe raamdecoratie", kort: "raamdecoratie", afspraak: "inmeten bij je thuis", opties: ["Plissés", "Jaloezieën", "Gordijnen", "Duettes"], maat: "bh" },
    trappen:      { aanvraag: "een traprenovatie", kort: "trap", afspraak: "inmeten bij je thuis", opties: ["Traprenovatie", "Nieuwe trap", "Traphekken", "Traploper"], maat: null },
    hovenier:     { aanvraag: "een nieuwe tuin", kort: "tuin", afspraak: "een kennismaking bij je thuis", opties: ["Tuinontwerp", "Bestrating", "Schutting", "Onderhoud"], maat: "m2" },
    installateur: { aanvraag: "een warmtepomp", kort: "warmtepomp", afspraak: "een adviesgesprek bij je thuis", opties: ["Warmtepomp", "Cv-ketel", "Airco", "Zonnepanelen"], maat: null },
    aannemer:     { aanvraag: "een uitbouw", kort: "uitbouw", afspraak: "een kennismaking bij je thuis", opties: ["Uitbouw", "Dakkapel", "Verbouwing", "Renovatie"], maat: "m2" },
    schilder:     { aanvraag: "buitenschilderwerk", kort: "schilderwerk", afspraak: "een opname bij je thuis", opties: ["Buitenschilderwerk", "Binnenschilderwerk", "Houtrot herstellen", "Behangen"], maat: null },
    standaard:    { aanvraag: "een offerte", kort: "aanvraag", afspraak: "een afspraak", opties: ["Advies", "Offerte", "Inmeten", "Showroombezoek"], maat: null }
  };
  const ALIAS = { zonweringen: "zonwering", rolluiken: "zonwering", screens: "zonwering", keuken: "keukens", meubel: "meubels", meubelen: "meubels", interieur: "meubels", wonen: "meubels", bedden: "meubels", badkamer: "badkamers", sanitair: "badkamers", vloer: "vloeren", parket: "vloeren", pvc: "vloeren", tegel: "tegels", natuursteen: "tegels", kozijn: "kozijnen", deuren: "kozijnen", veranda: "veranda", verandas: "veranda", overkapping: "veranda", tuinkamer: "veranda", haard: "haarden", kachels: "haarden", kachel: "haarden", gordijnen: "raamdecoratie", trap: "trappen", tuin: "hovenier", hoveniers: "hovenier", installatie: "installateur", bouw: "aannemer", schilders: "schilder" };

  const q = new URLSearchParams(location.search);
  const schoon = (s, max) => (s || "").replace(/[<>]/g, "").trim().slice(0, max);
  const bedrijf = schoon(q.get("b"), 60) || "jullie bedrijf";
  const heeftNaam = !!schoon(q.get("b"), 60);
  let pk = schoon(q.get("p"), 30).toLowerCase().replace(/[^a-z]/g, "");
  pk = BRANCHES[pk] ? pk : (ALIAS[pk] || "standaard");
  const br = BRANCHES[pk];
  const medewerker = schoon(q.get("n"), 30);

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const initialen = (heeftNaam ? bedrijf : "Sitefront").split(/\s+/).filter(w => /^[A-Za-zÀ-ÿ]/.test(w)).slice(0, 2).map(w => w[0].toUpperCase()).join("") || "SF";

  function tijd(plusMin) {
    const d = new Date(Date.now() + (plusMin || 0) * 60000);
    return d.toLocaleTimeString("nl-NL", { hour: "2-digit", minute: "2-digit" });
  }
  const zin = s => s.charAt(0).toUpperCase() + s.slice(1);
  const vul = s => s
    .replaceAll("{bedrijf}", bedrijf)
    .replaceAll("{aanvraag}", br.aanvraag)
    .replaceAll("{kort}", br.kort)
    .replaceAll("{afspraak}", br.afspraak)
    .replaceAll("{ik}", medewerker ? medewerker + " van " + bedrijf : bedrijf);

  function params(extra) {
    const p = new URLSearchParams();
    if (heeftNaam) p.set("b", bedrijf);
    if (pk !== "standaard") p.set("p", pk);
    if (medewerker) p.set("n", medewerker);
    for (const k in (extra || {})) p.set(k, extra[k]);
    const s = p.toString();
    return s ? "?" + s : "";
  }

  const PAGINAS = [
    ["aanvragen", "Direct reageren op aanvragen"],
    ["offertes", "Offertes automatisch opvolgen"],
    ["assistent", "WhatsApp-assistent"],
    ["reviews", "Meer reviews"],
    ["offertetool", "Offertetool op de website"]
  ];

  /* ---------- telefoon ---------- */
  function phone(el, opts) {
    opts = opts || {};
    el.classList.add("phone");
    el.setAttribute("role", "img");
    el.setAttribute("aria-label", opts.label || "Voorbeeld op een telefoon");
    el.innerHTML =
      '<div class="screen">' +
        '<div class="ph-note" aria-live="polite"></div>' +
        '<div class="ph-head"><div class="ph-av"></div><div><div class="ph-name"></div><div class="ph-sub"></div></div></div>' +
        '<div class="ph-body"></div>' +
        '<div class="chips" hidden></div>' +
        '<div class="ph-foot"><input type="text" aria-label="Typ een bericht" placeholder="Bericht"><button type="button" aria-label="Versturen">➤</button></div>' +
      '</div>';
    const $ = s => el.querySelector(s);
    const body = $(".ph-body"), note = $(".ph-note"), chips = $(".chips");
    const api = {
      el,
      head(naam, sub, av) { $(".ph-name").textContent = naam; $(".ph-sub").textContent = sub || ""; $(".ph-av").textContent = av || initialen; },
      clear() { body.innerHTML = ""; chips.hidden = true; chips.innerHTML = ""; api.hideNote(); api.hideSite(); },
      add(m) {
        const d = document.createElement("div");
        d.className = "msg " + (m.uit ? "out" : "") + (m.sys ? " sys" : "");
        d.textContent = vul(m.tekst);
        if (!m.sys) { const t = document.createElement("time"); t.textContent = m.tijd || tijd(); d.appendChild(t); }
        if (m.knop) {
          const b = document.createElement("button");
          b.type = "button"; b.className = "btn-in"; b.textContent = m.knop;
          if (m.klik) b.addEventListener("click", () => { m.klik(b); });
          else b.tabIndex = -1;
          d.insertBefore(b, d.querySelector("time"));
        }
        body.appendChild(d);
        body.scrollTop = body.scrollHeight;
        return d;
      },
      async typing(ms, token) {
        const t = document.createElement("div");
        t.className = "typing"; t.innerHTML = "<i></i><i></i><i></i>";
        body.appendChild(t); body.scrollTop = body.scrollHeight;
        await wacht(ms, token);
        t.remove();
      },
      note(titel, tekst, sub) {
        note.innerHTML = "";
        const b = document.createElement("b"); b.textContent = vul(titel);
        const s = document.createElement("span"); s.textContent = vul(tekst);
        const sm = document.createElement("small"); sm.textContent = sub || "nu";
        note.append(b, s, document.createElement("br"), sm);
        note.classList.add("in");
      },
      hideNote() { note.classList.remove("in"); },
      chips(lijst, klik) {
        chips.innerHTML = "";
        lijst.forEach(t => { const b = document.createElement("button"); b.type = "button"; b.textContent = t; b.addEventListener("click", () => klik(t)); chips.appendChild(b); });
        chips.hidden = !lijst.length;
      },
      input(onSend) {
        const inp = $(".ph-foot input"), btn = $(".ph-foot button");
        const go = () => { const v = inp.value.trim(); if (!v) return; inp.value = ""; onSend(v); };
        btn.addEventListener("click", go);
        inp.addEventListener("keydown", e => { if (e.key === "Enter") go(); });
      },
      lockInput() { $(".ph-foot input").disabled = true; $(".ph-foot input").placeholder = ""; $(".ph-foot button").disabled = true; $(".ph-foot").setAttribute("aria-hidden", "true"); },
      site(html) {
        let s = $(".ph-site");
        if (!s) { s = document.createElement("div"); s.className = "ph-site"; $(".screen").appendChild(s); }
        s.innerHTML = '<div class="site-top"><span></span><small>website</small></div><div class="site-body"></div>';
        s.querySelector(".site-top span").textContent = heeftNaam ? bedrijf : "Jullie website";
        s.querySelector(".site-body").innerHTML = html;
        s.classList.remove("weg");
        return s.querySelector(".site-body");
      },
      hideSite() { const s = $(".ph-site"); if (s) s.classList.add("weg"); }
    };
    if (opts.lock) api.lockInput();
    return api;
  }

  /* ---------- wachten met annuleren ---------- */
  function wacht(ms, token) {
    return new Promise((res, rej) => {
      if (reduce && token && token.auto) ms = Math.min(ms, 60);
      const t = setTimeout(() => (token && token.stop ? rej("stop") : res()), ms);
      if (token) token.timers.push(t);
    });
  }
  function nieuwToken(auto) { return { stop: false, timers: [], auto: !!auto }; }
  function stopToken(t) { if (!t) return; t.stop = true; t.timers.forEach(clearTimeout); }

  /* ---------- afspelen van "zo werkt het" ---------- */
  function speler(cfg) {
    const lis = cfg.lijst ? [...cfg.lijst.querySelectorAll("li")] : [];
    let token = null, gestart = false;
    async function run() {
      stopToken(token);
      token = nieuwToken(true);
      const tk = token;
      try {
        cfg.phone.clear();
        lis.forEach(li => li.classList.remove("on", "done"));
        for (let i = 0; i < cfg.stappen.length; i++) {
          const st = cfg.stappen[i];
          if (st.stap != null && lis[st.stap]) {
            lis.forEach((li, j) => { li.classList.toggle("on", j === st.stap); li.classList.toggle("done", j < st.stap); });
          }
          await st.doe(cfg.phone, tk);
          await wacht(st.pauze || 1400, tk);
        }
        lis.forEach(li => { li.classList.remove("on"); li.classList.add("done"); });
        if (!reduce) { await wacht(6000, tk); run(); }
      } catch (e) { /* gestopt */ }
    }
    if (cfg.opnieuw) cfg.opnieuw.addEventListener("click", run);
    const io = new IntersectionObserver(es => { if (es[0].isIntersecting && !gestart) { gestart = true; run(); } }, { threshold: .35 });
    io.observe(cfg.phone.el);
    return { run, stop: () => stopToken(token) };
  }

  /* ---------- vaste delen van de pagina ---------- */
  function opbouw() {
    document.querySelectorAll("[data-vul]").forEach(el => { el.textContent = vul(el.getAttribute("data-vul")); });
    document.title = vul(document.title);

    const huidig = document.body.getAttribute("data-pagina") || "";
    const naamDemo = document.body.getAttribute("data-naam") || "de demo";
    const bovenaan = huidig ? "../" : "./";

    const bar = document.createElement("header");
    bar.className = "bar";
    bar.innerHTML = '<div class="wrap"><span></span><a></a></div>';
    bar.querySelector("span").innerHTML = heeftNaam ? "Voorbeeld voor <strong></strong>" : "Voorbeeld van Sitefront";
    if (heeftNaam) bar.querySelector("strong").textContent = bedrijf;
    const terug = bar.querySelector("a");
    terug.href = (huidig ? bovenaan : "./") + params();
    terug.textContent = huidig ? "Alle oplossingen" : "Sitefront";
    if (!huidig) { terug.href = "https://sitefront.nl"; }
    document.body.prepend(bar);

    const cta = document.querySelector("[data-cta]");
    if (cta) {
      const tekst = "Hoi Michael, ik heb " + naamDemo + " bekeken" + (heeftNaam ? " voor " + bedrijf : "") + ". ";
      const wa = "https://wa.me/31643430003?text=" + encodeURIComponent(tekst);
      const mail = "mailto:info@sitefront.nl?subject=" + encodeURIComponent("Demo " + naamDemo + (heeftNaam ? ", " + bedrijf : "")) + "&body=" + encodeURIComponent(tekst);
      cta.className = "cta";
      cta.innerHTML =
        '<div class="wrap"><h2></h2><p></p><div class="btns">' +
        '<a class="btn amber" target="_blank" rel="noopener">Stuur Michael een WhatsApp</a>' +
        '<a class="btn ghost" href="tel:+31643430003">Bel 06 43430003</a>' +
        '<a class="btn ghost">Mail</a></div></div>';
      cta.querySelector("h2").textContent = heeftNaam ? "Zo inrichten voor " + bedrijf + "?" : "Zo inrichten voor jouw bedrijf?";
      cta.querySelector("p").textContent = "Ik ben Michael van Sitefront uit Dordrecht. Ik richt het in met jullie eigen teksten, naam en werkwijze, en onderhoud het daarna. Stuur een berichtje, dan bespreken we wat het voor jullie kan opleveren.";
      const as = cta.querySelectorAll("a");
      as[0].href = wa; as[2].href = mail;
    }

    const foot = document.createElement("footer");
    foot.className = "foot";
    foot.innerHTML = '<div class="wrap"><nav aria-label="Andere voorbeelden"></nav><p></p></div>';
    const nav = foot.querySelector("nav");
    PAGINAS.forEach(([slug, titel]) => {
      const a = document.createElement("a");
      a.href = bovenaan + slug + "/" + params();
      a.textContent = titel;
      if (slug === huidig) a.setAttribute("aria-current", "page");
      nav.appendChild(a);
    });
    foot.querySelector("p").textContent = "Dit is een voorbeeld gemaakt door Sitefront" + (heeftNaam ? " voor " + bedrijf + ". " + bedrijf + " is hier niet bij betrokken." : ".") + " Namen, tijden en berichten in deze demo zijn verzonnen. Sitefront, Dordrecht, KvK 42057398.";
    document.body.appendChild(foot);
  }

  window.Demo = { bedrijf, heeftNaam, br, pk, medewerker, BRANCHES, vul, zin, tijd, phone, wacht, speler, nieuwToken, stopToken, params, reduce };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", opbouw); else opbouw();
})();
