/**
 * App principal – navigare, randare teme, progres local
 */
(function () {
  const PROGRESS_KEY = "fizica-xii-progress-v1";

  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(PROGRESS_KEY) || "{}");
    } catch {
      return {};
    }
  }

  function saveProgress(p) {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(p));
  }

  function markDone(themeId, item) {
    const p = loadProgress();
    p[themeId] = p[themeId] || { checklist: {}, quiz: {} };
    if (item.type === "check") p[themeId].checklist[item.i] = true;
    if (item.type === "quiz") p[themeId].quiz[item.i] = true;
    saveProgress(p);
    updateProgressBar();
  }

  function themeProgress(themeId) {
    const content = window.CONTENT[themeId];
    if (!content) return 0;
    const p = loadProgress()[themeId] || { checklist: {}, quiz: {} };
    const total = (content.checklist?.length || 0) + (content.quiz?.length || 0);
    if (!total) return 0;
    const done =
      Object.keys(p.checklist || {}).length + Object.keys(p.quiz || {}).length;
    return Math.min(100, Math.round((done / total) * 100));
  }

  function updateProgressBar() {
    const themes = [];
    window.CURRICULUM.chapters.forEach((c) =>
      c.themes.forEach((t) => themes.push(t.id))
    );
    const avg =
      themes.reduce((s, id) => s + themeProgress(id), 0) / (themes.length || 1);
    const bar = document.getElementById("global-progress");
    if (bar) bar.style.width = `${avg}%`;
    const label = document.getElementById("global-progress-label");
    if (label) label.textContent = `Progres Cap. 1–2: ${Math.round(avg)}%`;
  }

  let currentSimRoot = null;

  function cleanupSim() {
    if (currentSimRoot?._cleanup) currentSimRoot._cleanup();
    currentSimRoot = null;
  }

  function renderHome() {
    cleanupSim();
    const meta = window.CURRICULUM.meta;
    const plan = window.CURRICULUM.learningPlan;
    const main = document.getElementById("main");

    const weeks = plan.weeks
      .map(
        (w) => `
      <div class="card week-card">
        <div class="meta">Săptămâna ${w.week} · ${w.daily}</div>
        <h3>${w.focus}</h3>
        <p style="color:var(--muted);font-size:0.9rem">${w.goal}</p>
        <div class="chips">${w.themes.map((t) => `<span class="chip">${t}</span>`).join("")}</div>
      </div>`
      )
      .join("");

    const chapters = window.CURRICULUM.chapters
      .map((ch) => {
        const items = ch.themes
          .map((t) => {
            const pr = themeProgress(t.id);
            return `<button class="theme-link" data-go="${t.id}">
              <span class="badge">${t.id}</span>
              <span>${t.title}${t.optional ? " *" : ""} <small style="opacity:.6">· ${pr}%</small></span>
            </button>`;
          })
          .join("");
        return `<div class="card"><h3 style="color:${ch.color}">Cap. ${ch.number}. ${ch.title}</h3>
          <p style="color:var(--muted);font-size:0.8rem;margin-bottom:0.6rem">pag. ${ch.pages}</p>${items}</div>`;
      })
      .join("");

    main.innerHTML = `
      <section class="hero">
        <h1>${meta.title}</h1>
        <p>${meta.subtitle}. ${meta.scope}</p>
        <div class="method-steps">
          ${meta.method
            .map((m, i) => {
              const [n, ...rest] = m.split(": ");
              return `<div class="step"><strong>${n}</strong>${rest.join(": ") || ""}</div>`;
            })
            .join("")}
        </div>
      </section>

      <h2 style="margin:0 0 0.75rem;font-size:1.15rem">Plan pe 4 săptămâni</h2>
      <div class="grid-2">${weeks}</div>

      <div class="card" style="margin-bottom:1.5rem">
        <h3>Reguli anti-plictiseală</h3>
        <ul>${plan.rules.map((r) => `<li>${r}</li>`).join("")}</ul>
      </div>

      <h2 style="margin:0 0 0.75rem;font-size:1.15rem">Teme disponibile (MVP)</h2>
      <div class="grid-2">${chapters}</div>

      <div class="card">
        <h3>Urmează (documente următoare)</h3>
        <ul class="upcoming">${window.CURRICULUM.upcoming.map((u) => `<li>${u}</li>`).join("")}</ul>
      </div>

      <p class="footer-note">Sursă: ${meta.source}. Conținutul MVP e reformulat pe scurt pentru învățare activă — nu înlocuiește manualul la detalii de laborator/istoric, ci te ajută să înțelegi și să rezolvi.</p>
    `;

    main.querySelectorAll("[data-go]").forEach((btn) => {
      btn.onclick = () => navigate(btn.dataset.go);
    });
    setActiveNav("home");
    updateProgressBar();
  }

  function renderTheme(id) {
    cleanupSim();
    const content = window.CONTENT[id];
    const meta = findThemeMeta(id);
    if (!content) {
      document.getElementById("main").innerHTML = `<p>Conținut lipsă pentru ${id}</p>`;
      return;
    }
    const main = document.getElementById("main");
    const prog = themeProgress(id);

    main.innerHTML = `
      <div class="theme-header">
        <div class="crumbs">Cap. ${meta?.chapter || "?"} · pag. ${meta?.pages || "?"} · ~${meta?.timeMin || "?"} min
          ${meta?.optional ? " · temă *" : ""}
          ${meta?.hasSimulator ? ' · <span style="color:#86efac">are simulator</span>' : ""}
        </div>
        <h1>${content.id}. ${content.title}</h1>
        <div class="essence"><strong>Esența:</strong> ${content.essence}</div>
        <div class="progress-bar"><div style="width:${prog}%"></div></div>
      </div>

      <div class="tabs">
        <button class="tab active" data-tab="theory">Teorie scurtă</button>
        <button class="tab" data-tab="formulas">Formule & reguli</button>
        <button class="tab" data-tab="problems">Probleme</button>
        ${meta?.hasSimulator ? '<button class="tab" data-tab="sim">Simulator</button>' : ""}
        <button class="tab" data-tab="check">Checklist & quiz</button>
      </div>

      <div class="panel active" id="panel-theory">
        ${content.theory
          .map(
            (b) => `<div class="theory-block"><h3>${b.title}</h3><ul>${b.points
              .map((p) => `<li>${p}</li>`)
              .join("")}</ul></div>`
          )
          .join("")}
      </div>

      <div class="panel" id="panel-formulas">
        <div class="formula-grid">
          ${(content.formulas || [])
            .map(
              (f) => `<div class="formula">
                <div class="name">${f.name}</div>
                <div class="eq">${f.latex}</div>
                ${f.note ? `<div class="note">${f.note}</div>` : ""}
              </div>`
            )
            .join("") || "<p style='color:var(--muted)'>Fără formule numerice — focus pe concepție și reguli.</p>"}
        </div>
        <div style="margin-top:1rem">
          ${(content.rules || [])
            .map((r) => `<div class="rule-box"><strong>${r.name}</strong>${r.text}</div>`)
            .join("")}
        </div>
      </div>

      <div class="panel" id="panel-problems">
        ${(content.problems || [])
          .map(
            (p, i) => `<div class="problem">
              <div class="problem-top">
                <span class="level l${p.level}">Nivel ${p.level}</span>
                <span class="chip">${p.type}</span>
                <span style="color:var(--muted);font-size:0.75rem">${p.id}</span>
              </div>
              <div class="q">${p.q}</div>
              <div class="problem-actions">
                <button class="btn" data-hint="${i}">Indiciu</button>
                <button class="btn primary" data-ans="${i}">Arată rezolvarea</button>
              </div>
              <div class="reveal hint" id="hint-${i}"><strong>Indiciu:</strong> ${p.hint}</div>
              <div class="reveal answer" id="ans-${i}"><strong>Rezolvare:</strong> ${p.a}</div>
            </div>`
          )
          .join("")}
      </div>

      <div class="panel" id="panel-sim">
        <div id="sim-root"></div>
      </div>

      <div class="panel" id="panel-check">
        <div class="card checklist" style="margin-bottom:1rem">
          <h3>Checklist „știu să...”</h3>
          ${(content.checklist || [])
            .map(
              (c, i) => `<label><input type="checkbox" data-check="${i}" ${
                loadProgress()[id]?.checklist?.[i] ? "checked" : ""
              }> ${c}</label>`
            )
            .join("")}
        </div>
        ${(content.quiz || [])
          .map(
            (q, qi) => `<div class="quiz-item">
              <div>${q.q}</div>
              <div class="quiz-options">
                ${q.options
                  .map(
                    (o, oi) =>
                      `<button class="quiz-opt" data-quiz="${qi}" data-opt="${oi}">${o}</button>`
                  )
                  .join("")}
              </div>
            </div>`
          )
          .join("")}
      </div>
    `;

    // tabs
    main.querySelectorAll(".tab").forEach((tab) => {
      tab.onclick = () => {
        main.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
        main.querySelectorAll(".panel").forEach((p) => p.classList.remove("active"));
        tab.classList.add("active");
        const panel = main.querySelector(`#panel-${tab.dataset.tab}`);
        panel.classList.add("active");
        if (tab.dataset.tab === "sim" && meta?.hasSimulator) {
          cleanupSim();
          const root = main.querySelector("#sim-root");
          currentSimRoot = root;
          const fn = window.SIMULATORS[meta.simulatorId];
          if (fn) fn(root);
          else root.innerHTML = "<p>Simulator în pregătire.</p>";
        } else {
          cleanupSim();
        }
      };
    });

    main.querySelectorAll("[data-hint]").forEach((btn) => {
      btn.onclick = () =>
        main.querySelector(`#hint-${btn.dataset.hint}`).classList.toggle("show");
    });
    main.querySelectorAll("[data-ans]").forEach((btn) => {
      btn.onclick = () =>
        main.querySelector(`#ans-${btn.dataset.ans}`).classList.toggle("show");
    });
    main.querySelectorAll("[data-check]").forEach((cb) => {
      cb.onchange = () => {
        if (cb.checked) markDone(id, { type: "check", i: cb.dataset.check });
      };
    });
    main.querySelectorAll(".quiz-opt").forEach((btn) => {
      btn.onclick = () => {
        const qi = +btn.dataset.quiz;
        const oi = +btn.dataset.opt;
        const q = content.quiz[qi];
        const options = btn.parentElement.querySelectorAll(".quiz-opt");
        options.forEach((o) => o.classList.remove("correct", "wrong"));
        if (oi === q.correct) {
          btn.classList.add("correct");
          markDone(id, { type: "quiz", i: qi });
        } else {
          btn.classList.add("wrong");
          options[q.correct].classList.add("correct");
        }
      };
    });

    setActiveNav(id);
    updateProgressBar();
  }

  function findThemeMeta(id) {
    for (const ch of window.CURRICULUM.chapters) {
      const t = ch.themes.find((x) => x.id === id);
      if (t) return { ...t, chapter: ch.number, chapterTitle: ch.title };
    }
    return null;
  }

  function navigate(target) {
    if (target === "home" || target === "plan") renderHome();
    else renderTheme(target);
    location.hash = target;
  }

  function setActiveNav(id) {
    document.querySelectorAll(".nav-btn, .theme-link").forEach((el) => {
      el.classList.toggle(
        "active",
        el.dataset.go === id || (id === "home" && el.dataset.go === "home")
      );
    });
  }

  function buildSidebar() {
    const nav = document.getElementById("sidebar-nav");
    let html = `
      <button class="nav-btn" data-go="home">🏠 Acasă & plan</button>
      <div class="nav-section"><h3>Progres</h3>
        <div id="global-progress-label" style="font-size:0.8rem;color:var(--muted);margin-bottom:0.35rem">Progres Cap. 1–2: 0%</div>
        <div class="progress-bar"><div id="global-progress"></div></div>
      </div>`;
    window.CURRICULUM.chapters.forEach((ch) => {
      html += `<div class="nav-section"><h3>Cap. ${ch.number} · ${ch.title}</h3>`;
      ch.themes.forEach((t) => {
        html += `<button class="theme-link" data-go="${t.id}"><span class="badge">${t.id}</span><span>${t.title}${
          t.hasSimulator ? " 🎛" : ""
        }</span></button>`;
      });
      html += `</div>`;
    });
    nav.innerHTML = html;
    nav.querySelectorAll("[data-go]").forEach((btn) => {
      btn.onclick = () => navigate(btn.dataset.go);
    });
  }

  function init() {
    buildSidebar();
    const hash = (location.hash || "#home").slice(1);
    if (hash && hash !== "home" && window.CONTENT[hash]) navigate(hash);
    else renderHome();
    window.addEventListener("hashchange", () => {
      const h = location.hash.slice(1) || "home";
      if (h === "home") renderHome();
      else if (window.CONTENT[h]) renderTheme(h);
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
