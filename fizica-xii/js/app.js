/**
 * App principal – navigare, randare teme, progres local
 * UX: sidebar colapsabilă, home corectat, prev/next pe teme
 */
(function () {
  const PROGRESS_KEY = "fizica-xii-progress-v1";
  let openChapters = new Set(["cap1"]);

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
    refreshSidebarProgress();
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

  function chapterProgress(ch) {
    if (!ch.themes.length) return 0;
    const sum = ch.themes.reduce((s, t) => s + themeProgress(t.id), 0);
    return Math.round(sum / ch.themes.length);
  }

  function globalProgress() {
    const themes = [];
    window.CURRICULUM.chapters.forEach((c) =>
      c.themes.forEach((t) => themes.push(t.id))
    );
    if (!themes.length) return 0;
    return Math.round(
      themes.reduce((s, id) => s + themeProgress(id), 0) / themes.length
    );
  }

  function updateProgressBar() {
    const avg = globalProgress();
    const bar = document.getElementById("global-progress");
    if (bar) bar.style.width = `${avg}%`;
    const label = document.getElementById("global-progress-pct");
    if (label) label.textContent = `${avg}%`;
  }

  function refreshSidebarProgress() {
    // lightweight: rebuild open-state aware sidebar if needed later
    updateProgressBar();
  }

  let currentSimRoot = null;

  function cleanupSim() {
    if (currentSimRoot?._cleanup) currentSimRoot._cleanup();
    currentSimRoot = null;
  }

  function closeMobileNav() {
    document.getElementById("sidebar")?.classList.remove("open");
    document.getElementById("overlay")?.classList.remove("show");
  }

  function allThemeIds() {
    const ids = [];
    window.CURRICULUM.chapters.forEach((c) =>
      c.themes.forEach((t) => ids.push(t.id))
    );
    return ids;
  }

  function neighbors(id) {
    const ids = allThemeIds();
    const i = ids.indexOf(id);
    return {
      prev: i > 0 ? ids[i - 1] : null,
      next: i >= 0 && i < ids.length - 1 ? ids[i + 1] : null,
    };
  }

  function shortMethod(text) {
    // "1. Citește teoria scurtă (2–5 minute)" → { n: "1", body: "..." }
    const m = text.match(/^(\d+)\.\s*(.+)$/);
    if (m) return { n: m[1], body: m[2] };
    return { n: "·", body: text };
  }

  function renderHome() {
    cleanupSim();
    closeMobileNav();
    const meta = window.CURRICULUM.meta;
    const plan = window.CURRICULUM.learningPlan;
    const main = document.getElementById("main");
    const weekCount = plan.weeks.length;

    const weeks = plan.weeks
      .map(
        (w) => `
      <article class="card week-card">
        <div class="meta">Săptămâna ${w.week} · ${w.daily}</div>
        <h3>${w.focus}</h3>
        <p class="goal">${w.goal}</p>
        <div class="chips">${w.themes
          .map((t) => `<button class="chip clickable" data-go="${t}">${t}</button>`)
          .join("")}</div>
      </article>`
      )
      .join("");

    const chapters = window.CURRICULUM.chapters
      .map((ch) => {
        const pr = chapterProgress(ch);
        const items = ch.themes
          .slice(0, 6)
          .map((t) => {
            const tp = themeProgress(t.id);
            return `<button class="theme-mini" data-go="${t.id}">
              <span class="id">${t.id}</span>
              <span>${t.title}${t.optional ? " *" : ""}</span>
              <span class="pct">${tp}%</span>
            </button>`;
          })
          .join("");
        const more =
          ch.themes.length > 6
            ? `<p class="empty-msg" style="margin-top:0.35rem">+${ch.themes.length - 6} teme în meniul din stânga</p>`
            : "";
        return `<article class="card chapter-card" style="--ch-color:${ch.color}">
          <div class="top">
            <div>
              <div class="ch-label">Capitolul ${ch.number}</div>
              <h3>${ch.title}</h3>
              <div class="pages">pag. ${ch.pages}</div>
            </div>
            <div class="ring" style="--p:${pr}" data-p="${pr}%"></div>
          </div>
          ${items}${more}
        </article>`;
      })
      .join("");

    const upcoming =
      window.CURRICULUM.upcoming?.length > 0
        ? `<div class="card" style="margin-top:1rem">
            <h3>Urmează</h3>
            <ul class="rules-card" style="padding-left:1.1rem;color:var(--muted);font-size:0.92rem">
              ${window.CURRICULUM.upcoming.map((u) => `<li>${u}</li>`).join("")}
            </ul>
          </div>`
        : "";

    main.innerHTML = `
      <section class="hero">
        <div class="hero-kicker">Manual complet · pag. 1–168</div>
        <h1>${meta.title}</h1>
        <p class="lead">${meta.subtitle}. ${meta.scope}</p>
        <div class="journey">
          ${meta.method
            .map((m) => {
              const s = shortMethod(m);
              return `<div class="journey-step"><div class="n">${s.n}</div><p>${s.body}</p></div>`;
            })
            .join("")}
        </div>
      </section>

      <div class="section-head">
        <h2>Plan pe ${weekCount} săptămâni</h2>
        <span class="sub">${plan.title}</span>
      </div>
      <div class="grid-weeks">${weeks}</div>

      <div class="card rules-card" style="margin-bottom:2.25rem">
        <h3 style="font-family:var(--serif);font-weight:400;font-size:1.25rem;margin-bottom:0.65rem">Reguli anti-plictiseală</h3>
        <ul>${plan.rules.map((r) => `<li>${r}</li>`).join("")}</ul>
      </div>

      <div class="section-head">
        <h2>Capitole</h2>
        <span class="sub">${allThemeIds().length} teme · ${Object.keys(window.SIMULATORS || {}).length} simulatoare</span>
      </div>
      <div class="grid-chapters">${chapters}</div>
      ${upcoming}

      <p class="footer-note">Sursă: ${meta.source}. Conținutul e reformulat pe scurt pentru învățare activă — nu înlocuiește manualul la detalii de laborator/istoric, ci te ajută să înțelegi și să rezolvi.</p>
    `;

    main.querySelectorAll("[data-go]").forEach((btn) => {
      btn.onclick = () => navigate(btn.dataset.go);
    });
    setActiveNav("home");
    updateProgressBar();
  }

  function renderTheme(id) {
    cleanupSim();
    closeMobileNav();
    const content = window.CONTENT[id];
    const meta = findThemeMeta(id);
    if (!content) {
      document.getElementById("main").innerHTML = `<p class="empty-msg">Conținut lipsă pentru ${id}</p>`;
      return;
    }

    // keep active chapter open in sidebar
    if (meta?.chapterId) openChapters.add(meta.chapterId);
    buildSidebar();

    const main = document.getElementById("main");
    const prog = themeProgress(id);
    const { prev, next } = neighbors(id);

    main.innerHTML = `
      <div class="theme-header">
        <div class="crumbs">
          <button class="chip clickable" data-go="home">Acasă</button>
          <span class="crumb-sep">/</span>
          <span>Cap. ${meta?.chapter || "?"}</span>
          <span class="crumb-sep">·</span>
          <span>pag. ${meta?.pages || "?"}</span>
          <span class="crumb-sep">·</span>
          <span>~${meta?.timeMin || "?"} min</span>
          ${meta?.optional ? '<span class="pill opt">temă *</span>' : ""}
          ${meta?.hasSimulator ? '<span class="pill sim">are simulator</span>' : ""}
        </div>
        <h1>${content.id}. ${content.title}</h1>
        <div class="essence"><strong>Esența — </strong>${content.essence}</div>
        <div class="progress-bar" style="max-width:240px"><div style="width:${prog}%"></div></div>
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
            .join("") || "<p class='empty-msg'>Fără formule numerice — focus pe concepție și reguli.</p>"}
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
                <span style="color:var(--muted-2);font-size:0.72rem">${p.id}</span>
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
          .join("") || "<p class='empty-msg'>Nicio problemă încă.</p>"}
      </div>

      <div class="panel" id="panel-sim">
        <div id="sim-root"></div>
      </div>

      <div class="panel" id="panel-check">
        <div class="card checklist" style="margin-bottom:1rem">
          <h3 style="font-family:var(--serif);font-weight:400;font-size:1.2rem;margin-bottom:0.5rem">Checklist „știu să…”</h3>
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

      <div class="theme-nav">
        ${
          prev
            ? `<button class="btn ghost" data-go="${prev}">← ${prev}</button>`
            : `<span></span>`
        }
        ${
          next
            ? `<button class="btn primary" data-go="${next}">${next} →</button>`
            : `<span></span>`
        }
      </div>
    `;

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
          else root.innerHTML = "<p class='empty-msg'>Simulator în pregătire.</p>";
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
    main.querySelectorAll("[data-go]").forEach((btn) => {
      btn.onclick = () => navigate(btn.dataset.go);
    });

    setActiveNav(id);
    updateProgressBar();
  }

  function findThemeMeta(id) {
    for (const ch of window.CURRICULUM.chapters) {
      const t = ch.themes.find((x) => x.id === id);
      if (t) return { ...t, chapter: ch.number, chapterTitle: ch.title, chapterId: ch.id };
    }
    return null;
  }

  function navigate(target) {
    if (target === "home" || target === "plan") renderHome();
    else renderTheme(target);
    location.hash = target;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function setActiveNav(id) {
    document.querySelectorAll(".nav-home, .theme-link").forEach((el) => {
      el.classList.toggle(
        "active",
        el.dataset.go === id || (id === "home" && el.dataset.go === "home")
      );
    });
  }

  function buildSidebar() {
    const nav = document.getElementById("sidebar-nav");
    const avg = globalProgress();
    let html = `
      <button class="nav-home" data-go="home">
        <span class="ico">⌂</span>
        <span>Acasă & plan</span>
      </button>
      <div class="progress-card">
        <div class="label-row">
          <span class="label">Progres general</span>
          <span class="pct" id="global-progress-pct">${avg}%</span>
        </div>
        <div class="progress-bar"><div id="global-progress" style="width:${avg}%"></div></div>
      </div>`;

    window.CURRICULUM.chapters.forEach((ch) => {
      const isOpen = openChapters.has(ch.id);
      html += `<div class="nav-section${isOpen ? " open" : ""}" data-ch="${ch.id}">
        <button class="nav-chapter" type="button" data-toggle="${ch.id}" style="--ch-color:${ch.color}">
          <span class="dot"></span>
          <span class="txt">
            <div class="cap-num">Cap. ${ch.number}</div>
            <div class="cap-title">${ch.title}</div>
          </span>
          <span class="chev">›</span>
        </button>
        <div class="nav-themes">`;
      ch.themes.forEach((t) => {
        html += `<button class="theme-link" data-go="${t.id}">
          <span class="badge">${t.id}</span>
          <span class="t-title">${t.title}${t.optional ? " *" : ""}</span>
          ${t.hasSimulator ? '<span class="sim-dot" title="Are simulator"></span>' : ""}
        </button>`;
      });
      html += `</div></div>`;
    });

    nav.innerHTML = html;

    nav.querySelectorAll("[data-go]").forEach((btn) => {
      btn.onclick = () => navigate(btn.dataset.go);
    });
    nav.querySelectorAll("[data-toggle]").forEach((btn) => {
      btn.onclick = () => {
        const id = btn.dataset.toggle;
        if (openChapters.has(id)) openChapters.delete(id);
        else openChapters.add(id);
        const section = nav.querySelector(`[data-ch="${id}"]`);
        section?.classList.toggle("open");
      };
    });
  }

  function setupMobile() {
    const toggle = document.getElementById("nav-toggle");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    if (!toggle || !sidebar || !overlay) return;
    toggle.onclick = () => {
      sidebar.classList.toggle("open");
      overlay.classList.toggle("show", sidebar.classList.contains("open"));
      overlay.hidden = !sidebar.classList.contains("open");
    };
    overlay.onclick = closeMobileNav;
  }

  function init() {
    buildSidebar();
    setupMobile();
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
