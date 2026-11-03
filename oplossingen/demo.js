/* Sitefront demo's – gedeelde code.
   Link-opbouw: ?b=Bedrijfsnaam&p=branche&n=Voornaam
   b = bedrijfsnaam, p = branche (zie BRANCHES), n = voornaam van iemand bij het bedrijf (optioneel) */
(function () {
  "use strict";

  const BRANCHES = {
    zonwering:    { waarde: 3500, aanvraag: "een zonnescherm voor het terras", kort: "zonnescherm", afspraak: "inmeten bij je thuis", opties: ["Knikarmscherm", "Screens", "Rolluiken", "Uitvalscherm"], maat: "bh" },
    keukens:      { waarde: 12000, aanvraag: "een nieuwe keuken", kort: "keuken", afspraak: "een ontwerpafspraak in de showroom", opties: ["Rechte keuken", "Hoekkeuken", "Keuken met eiland", "Apparatuur vervangen"], maat: "lengte" },
    meubels:      { waarde: 2500, aanvraag: "een nieuwe hoekbank", kort: "hoekbank", afspraak: "een bezoek aan de showroom", opties: ["Hoekbank", "Eettafel en stoelen", "Kast op maat", "Fauteuil"], maat: "bh" },
    badkamers:    { waarde: 9000, aanvraag: "een nieuwe badkamer", kort: "badkamer", afspraak: "een ontwerpafspraak in de showroom", opties: ["Complete badkamer", "Inloopdouche", "Toilet", "Badmeubel"], maat: "m2" },
    vloeren:      { waarde: 3000, aanvraag: "een pvc-vloer voor de woonkamer", kort: "vloer", afspraak: "inmeten bij je thuis", opties: ["PVC", "Parket", "Laminaat", "Tapijt"], maat: "m2" },
    tegels:       { waarde: 2500, aanvraag: "nieuwe tegels voor de badkamer", kort: "tegels", afspraak: "een bezoek aan de showroom", opties: ["Vloertegels", "Wandtegels", "Buitentegels", "Natuursteen"], maat: "m2" },
    kozijnen:     { waarde: 8000, aanvraag: "nieuwe kunststof kozijnen", kort: "kozijnen", afspraak: "inmeten bij je thuis", opties: ["Kunststof kozijnen", "Houten kozijnen", "Voordeur", "Schuifpui"], maat: "bh" },
    veranda:      { waarde: 7500, aanvraag: "een veranda met glazen schuifwanden", kort: "veranda", afspraak: "een bezoek aan de showroom", opties: ["Veranda", "Tuinkamer", "Carport", "Glazen schuifwanden"], maat: "bh" },
    haarden:      { waarde: 3500, aanvraag: "een gashaard", kort: "haard", afspraak: "een bezoek aan de showroom", opties: ["Gashaard", "Houtkachel", "Pelletkachel", "Elektrische haard"], maat: null },
    raamdecoratie:{ waarde: 1200, aanvraag: "nieuwe raamdecoratie", kort: "raamdecoratie", afspraak: "inmeten bij je thuis", opties: ["Plissés", "Jaloezieën", "Gordijnen", "Duettes"], maat: "bh" },
    trappen:      { waarde: 3000, aanvraag: "een traprenovatie", kort: "trap", afspraak: "inmeten bij je thuis", opties: ["Traprenovatie", "Nieuwe trap", "Traphekken", "Traploper"], maat: null },
    hovenier:     { waarde: 6000, aanvraag: "een nieuwe tuin", kort: "tuin", afspraak: "een kennismaking bij je thuis", opties: ["Tuinontwerp", "Bestrating", "Schutting", "Onderhoud"], maat: "m2" },
    installateur: { waarde: 8000, aanvraag: "een warmtepomp", kort: "warmtepomp", afspraak: "een adviesgesprek bij je thuis", opties: ["Warmtepomp", "Cv-ketel", "Airco", "Zonnepanelen"], maat: null },
    aannemer:     { waarde: 25000, aanvraag: "een uitbouw", kort: "uitbouw", afspraak: "een kennismaking bij je thuis", opties: ["Uitbouw", "Dakkapel", "Verbouwing", "Renovatie"], maat: "m2" },
    schilder:     { waarde: 4000, aanvraag: "buitenschilderwerk", kort: "schilderwerk", afspraak: "een opname bij je thuis", opties: ["Buitenschilderwerk", "Binnenschilderwerk", "Houtrot herstellen", "Behangen"], maat: null },
    standaard:    { waarde: 3000, aanvraag: "een offerte", kort: "aanvraag", afspraak: "een afspraak", opties: ["Advies", "Offerte", "Inmeten", "Showroombezoek"], maat: null }
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
  const plaats = schoon(q.get("s"), 40);

  /* Eenvoudig = alleen bovenkant, het aha-moment, zelf proberen en de ja-knop. Zet op false om alle extra blokken terug te krijgen. */
  const EENVOUDIG = true;
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
    if (plaats) p.set("s", plaats);
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
        const sub = $(".ph-sub"), oud = sub.textContent;
        sub.textContent = "typt...";
        const t = document.createElement("div");
        t.className = "typing"; t.innerHTML = "<i></i><i></i><i></i>";
        body.appendChild(t); body.scrollTop = body.scrollHeight;
        try { await wacht(ms, token); } finally { t.remove(); sub.textContent = oud; }
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
    let cap = null;
    if (cfg.phone.el.parentNode && cfg.phone.el.parentNode.classList.contains("phone-plek")) {
      cap = document.createElement("p"); cap.className = "caption"; cap.setAttribute("aria-hidden", "true");
      cfg.phone.el.parentNode.insertBefore(cap, cfg.phone.el);
    }
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
            if (cap) { cap.innerHTML = "<b></b> "; cap.querySelector("b").textContent = (st.stap + 1) + "."; cap.append(lis[st.stap].textContent); }
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


  const WERKWIJZE = [
    ["Kennismaken", "Een kort gesprek over hoe jullie nu werken en wat jullie willen bereiken."],
    ["Inrichten", "Sitefront zet alles op met jullie eigen naam, teksten en toon."],
    ["Goedkeuren", "Jullie lezen de berichten en keuren ze goed voordat er iets live gaat."],
    ["Live en onderhouden", "Het draait vanaf dan vanzelf. Sitefront houdt het bij en past het aan als dat nodig is. Maandelijks opzegbaar."]
  ];
  const FAQ = [
    ["Klanten willen toch een mens spreken?", "Klopt, en dat blijft ook zo. Het systeem zorgt alleen dat ze direct een reactie krijgen. Zodra het lastig wordt, neemt een medewerker het over."],
    ["We reageren zelf al best snel.", "Fijn, dan scheelt het vooral in de avonden, de weekenden en op drukke dagen. Juist dan gaan de meeste aanvragen verloren."],
    ["Is dat niet onpersoonlijk?", "De berichten zijn geschreven in jullie eigen naam en toon, en we stellen ze samen af voordat het live gaat. Klanten krijgen juist sneller persoonlijke aandacht."],
    ["Zit er AI in?", "Ja, voor het schrijven en beantwoorden van berichten. Het zegt altijd eerlijk dat het een digitale assistent is, en er zit altijd een mens achter voor lastige vragen, prijzen en klachten."],
    ["Wat gebeurt er met onze gegevens en die van klanten?", "Alles valt onder de algemene voorwaarden van Sitefront, inclusief een verwerkersartikel voor de AVG. Klanten geven toestemming voor berichten via WhatsApp."],
    ["We hebben al een offertepakket of CRM.", "Dan koppelen we daaraan als dat kan, zodat jullie niets dubbel hoeven te doen."]
  ];

  function jaLink() {
    const naamDemo = document.body.getAttribute("data-naam") || "de voorbeelden";
    const tekst = "Hoi Michael, ja, dit wil ik ook" + (heeftNaam ? " voor " + bedrijf : "") + " (" + naamDemo.replace(/^de demo /, "") + "). Kun je me even bellen?";
    return "https://wa.me/31643430003?text=" + encodeURIComponent(tekst);
  }

  function sectie(cls, html) { const s = document.createElement("section"); s.className = cls; s.innerHTML = html; return s; }
  function tekst(el, t) { el.textContent = vul(t); return el; }

  function plakBalk() {
    const cta = document.querySelector(".cta");
    const hero = document.querySelector(".hero");
    if (!cta || !hero) return;
    const bal = document.createElement("div");
    bal.className = "plak";
    bal.innerHTML = '<span></span><a class="btn amber" target="_blank" rel="noopener">Ja, bel me even</a>';
    bal.querySelector("span").textContent = "Dit ook voor jullie?";
    bal.querySelector("a").href = jaLink();
    document.body.appendChild(bal);
    let voorbijHero = false, ctaZicht = false;
    const zet = () => bal.classList.toggle("in", voorbijHero && !ctaZicht);
    new IntersectionObserver(es => { voorbijHero = !es[0].isIntersecting; zet(); }).observe(hero);
    new IntersectionObserver(es => { ctaZicht = es[0].isIntersecting; zet(); }).observe(cta);
  }

  function extraOpbouw() {
    const cfg = window.Demo.pagina || {};
    const huidig = document.body.getAttribute("data-pagina") || "";

    // knoppen in de hero
    const ht = document.querySelector(".hero-text");
    const probeer = document.querySelector("main > .sec");
    if (probeer && !probeer.id) probeer.id = "probeer";
    if (ht && huidig) {
      const b = document.createElement("div"); b.className = "btns";
      b.innerHTML = '<a class="btn amber" target="_blank" rel="noopener">Ja, dit wil ik ook</a><a class="btn ghost" href="#probeer">Eerst zelf proberen</a>';
      b.querySelector("a").href = jaLink();
      ht.appendChild(b);
    }

    // log-paneel als app-venster
    const log = document.getElementById("log");
    const pan = log && log.closest(".panel");
    if (pan && !pan.classList.contains("app")) {
      const binnen = document.createElement("div"); binnen.className = "app-in";
      while (pan.firstChild) binnen.appendChild(pan.firstChild);
      pan.classList.add("app");
      const top = document.createElement("div"); top.className = "app-top"; top.innerHTML = "<i></i><i></i><i></i><span></span>";
      top.querySelector("span").textContent = "Overzicht " + (heeftNaam ? bedrijf : "jullie bedrijf");
      pan.append(top, binnen);
    }

    const gains = document.querySelector(".gains");
    const gainsSec = gains && gains.closest("section");

    if (EENVOUDIG && gainsSec) gainsSec.remove();

    // maandoverzicht
    if (!EENVOUDIG && cfg.cijfers && gainsSec) {
      const s = sectie("sec", '<div class="wrap"><div class="intro"><h2></h2><p></p></div><div class="dash"><div class="app-top"><i></i><i></i><i></i><span></span></div><div class="dash-in"><div class="tiles4"></div><div><h3>Laatste activiteit</h3><ul class="recent"></ul></div><p class="dash-noot">Voorbeeld met verzonnen cijfers. Zo ziet het maandoverzicht eruit.</p></div></div></div>');
      tekst(s.querySelector("h2"), "Wat jullie elke maand terugzien");
      tekst(s.querySelector(".intro p"), "Een kort overzicht laat precies zien wat het systeem voor {bedrijf} heeft gedaan. Zo weten jullie wat het oplevert.");
      s.querySelector(".app-top span").textContent = "Maandoverzicht " + (heeftNaam ? bedrijf : "jullie bedrijf");
      const tl = s.querySelector(".tiles4");
      cfg.cijfers.forEach(([lbl, val]) => { const d = document.createElement("div"); d.className = "tile4"; d.innerHTML = "<b></b><span></span>"; d.querySelector("b").textContent = val; tekst(d.querySelector("span"), lbl); tl.appendChild(d); });
      const rc = s.querySelector(".recent");
      (cfg.recent || []).forEach(([wat, wanneer]) => { const li = document.createElement("li"); li.innerHTML = "<span></span><small></small>"; tekst(li.querySelector("span"), wat); li.querySelector("small").textContent = wanneer; rc.appendChild(li); });
      gainsSec.parentNode.insertBefore(s, gainsSec);
    }

    // wat we nodig hebben en werkwijze
    const naCta = document.querySelector("[data-cta]");
    if (!EENVOUDIG && huidig && naCta) {
      const s = sectie("sec", '<div class="wrap duo"><div><h2>Wat jullie moeten doen? Bijna niets.</h2><p class="reken-sub">Sitefront regelt de rest. Dit vragen we één keer:</p><ul class="vink"></ul></div><div><h2>Zo gaat het in zijn werk</h2><ol class="werk"></ol></div></div>');
      (cfg.nodig || []).forEach(n => { s.querySelector(".vink").appendChild(tekst(document.createElement("li"), n)); });
      WERKWIJZE.forEach(([k, v]) => { const li = document.createElement("li"); li.innerHTML = "<div><b></b><span></span></div>"; li.querySelector("b").textContent = k; li.querySelector("span").textContent = v; s.querySelector(".werk").appendChild(li); });
      naCta.parentNode.insertBefore(s, naCta);

      const f = sectie("sec", '<div class="wrap"><div class="intro"><h2>Vragen die we vaak horen</h2></div><div class="faq"></div></div>');
      FAQ.forEach(([v, a]) => { const d = document.createElement("details"); d.innerHTML = "<summary></summary><p></p>"; d.querySelector("summary").textContent = v; d.querySelector("p").textContent = a; f.querySelector(".faq").appendChild(d); });
      naCta.parentNode.insertBefore(f, naCta);
    }
  }


  /* ---------- rekenhulp ---------- */
  const euro = n => "€" + Math.round(n).toLocaleString("nl-NL");
  function rekenhulp(el, opts) {
    if (EENVOUDIG) return null;
    opts = opts || {};
    const s = document.createElement("section");
    s.className = "sec reken";
    s.innerHTML = '<div class="wrap reken-in"><div><h2></h2><p class="reken-sub"></p>' +
      '<label class="slider"><span>Gemiddelde opdracht <b data-o="w"></b></span><input type="range" data-i="w" min="500" max="40000" step="250"></label>' +
      '<label class="slider"><span>Extra opdrachten per maand <b data-o="x"></b></span><input type="range" data-i="x" min="1" max="8" step="1"></label>' +
      '<p class="reken-noot">Pas de bedragen aan naar wat bij jullie past. Het is een rekensom, geen belofte.</p></div>' +
      '<div class="reken-uit" aria-live="polite"><span class="reken-lbl">Extra omzet per jaar</span><b data-o="j"></b><span data-o="zin"></span></div></div>';
    s.querySelector("h2").textContent = vul(opts.titel || "Wat levert het {bedrijf} op?");
    s.querySelector(".reken-sub").textContent = vul(opts.sub || "Jullie hebben er geen extra aanvragen voor nodig. Het gaat om de klanten die nu nog afhaken omdat het antwoord te laat komt of de offerte blijft liggen.");
    const w = s.querySelector('[data-i="w"]'), x = s.querySelector('[data-i="x"]');
    w.value = br.waarde; x.value = opts.x || 1;
    const upd = () => {
      const jw = +w.value, jx = +x.value;
      s.querySelector('[data-o="w"]').textContent = euro(jw);
      s.querySelector('[data-o="x"]').textContent = jx;
      s.querySelector('[data-o="j"]').textContent = euro(jw * jx * 12);
      s.querySelector('[data-o="zin"]').textContent = jx === 1 ? "Bij één extra " + br.kort + " per maand." : "Bij " + jx + " extra opdrachten per maand.";
    };
    w.addEventListener("input", upd); x.addEventListener("input", upd); upd();
    el.parentNode.insertBefore(s, el);
    return s;
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
    if (EENVOUDIG && huidig) terug.remove();
    document.body.prepend(bar);

    const cta = document.querySelector("[data-cta]");
    if (cta) {
      cta.className = "cta";
      cta.innerHTML =
        '<div class="wrap"><h2></h2><p></p><div class="btns">' +
        '<a class="btn amber groot" target="_blank" rel="noopener">Ja, bel me even</a></div>' +
        '<p class="cta-klein">Liever zelf bellen? <a href="tel:+31643430003">06 43430003</a>. Of mail naar <a href="mailto:info@sitefront.nl">info@sitefront.nl</a>.</p></div>';
      cta.querySelector("h2").textContent = heeftNaam ? "Dit ook voor " + bedrijf + "?" : "Dit ook voor jullie bedrijf?";
      cta.querySelector("p").textContent = "Eén tik is genoeg. Het bericht staat al klaar, je hoeft alleen op versturen te drukken. Ik bel je terug en we kijken samen of het bij jullie past. Geen verplichtingen.";
      cta.querySelector("a").href = jaLink();
    }

    const foot = document.createElement("footer");
    foot.className = "foot";
    foot.innerHTML = '<div class="wrap"><nav aria-label="Andere voorbeelden"></nav><p></p></div>';
    const nav = foot.querySelector("nav");
    if (!EENVOUDIG) PAGINAS.forEach(([slug, titel]) => {
      const a = document.createElement("a");
      a.href = bovenaan + slug + "/" + params();
      a.textContent = titel;
      if (slug === huidig) a.setAttribute("aria-current", "page");
      nav.appendChild(a);
    });
    foot.querySelector("p").textContent = "Dit is een voorbeeld gemaakt door Sitefront" + (heeftNaam ? " voor " + bedrijf + ". " + bedrijf + " is hier niet bij betrokken." : ".") + " Namen, tijden en berichten in deze demo zijn verzonnen. Sitefront, Dordrecht, KvK 42057398.";
    document.body.appendChild(foot);
    extraOpbouw();
    plakBalk();
  }

  window.Demo = { bedrijf, heeftNaam, br, pk, medewerker, plaats, euro, rekenhulp, BRANCHES, vul, zin, tijd, phone, wacht, speler, nieuwToken, stopToken, params, reduce };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", opbouw); else opbouw();
})();
