/**
 * Simulatoare MVP – vizualizare interactivă pentru temele Cap. 1–2
 */
window.SIMULATORS = {
  "camp-magnetic"(root) {
    root.innerHTML = `
      <div class="sim-wrap">
        <canvas width="640" height="360" id="sim-canvas"></canvas>
        <div class="sim-controls">
          <div>
            <label>Tip sursă</label>
            <select id="src">
              <option value="bar">Bară magnetică</option>
              <option value="wire">Fir cu curent</option>
              <option value="loop">Curent circular</option>
              <option value="solenoid">Solenoid</option>
            </select>
          </div>
          <div>
            <label>Intensitate / putere câmp</label>
            <input type="range" id="pow" min="1" max="10" value="5">
          </div>
        </div>
        <div class="sim-readout" id="readout">Liniile ies din N și intră în S. Densitate mare = câmp puternic.</div>
      </div>`;
    const canvas = root.querySelector("#sim-canvas");
    const ctx = canvas.getContext("2d");
    const src = root.querySelector("#src");
    const pow = root.querySelector("#pow");
    const readout = root.querySelector("#readout");

    function draw() {
      const w = canvas.width, h = canvas.height;
      ctx.fillStyle = "#0a0f18";
      ctx.fillRect(0, 0, w, h);
      const p = +pow.value;
      const type = src.value;

      if (type === "bar") {
        // bar magnet
        ctx.fillStyle = "#ef4444";
        ctx.fillRect(w / 2 - 70, h / 2 - 18, 70, 36);
        ctx.fillStyle = "#3b82f6";
        ctx.fillRect(w / 2, h / 2 - 18, 70, 36);
        ctx.fillStyle = "#fff";
        ctx.font = "16px sans-serif";
        ctx.fillText("N", w / 2 - 45, h / 2 + 6);
        ctx.fillText("S", w / 2 + 30, h / 2 + 6);
        // field lines (schematic)
        ctx.strokeStyle = "#60a5fa";
        ctx.lineWidth = 1.5;
        for (let i = 1; i <= p; i++) {
          const yoff = (i - (p + 1) / 2) * 14;
          ctx.beginPath();
          ctx.moveTo(w / 2 - 70, h / 2 + yoff);
          ctx.bezierCurveTo(w / 2 - 160, h / 2 + yoff * 3, w / 2 + 160, h / 2 + yoff * 3, w / 2 + 70, h / 2 + yoff);
          ctx.stroke();
        }
        readout.textContent = "Bară: linii din N → S (exterior). În interior se închid.";
      } else if (type === "wire") {
        // wire cross-section
        ctx.beginPath();
        ctx.arc(w / 2, h / 2, 14, 0, Math.PI * 2);
        ctx.fillStyle = "#f59e0b";
        ctx.fill();
        ctx.fillStyle = "#111";
        ctx.font = "14px sans-serif";
        ctx.fillText("I⊙", w / 2 - 10, h / 2 + 5);
        ctx.strokeStyle = "#34d399";
        for (let i = 1; i <= p; i++) {
          ctx.beginPath();
          ctx.arc(w / 2, h / 2, 30 + i * 18, 0, Math.PI * 2);
          ctx.stroke();
          // arrow hint
          const r = 30 + i * 18;
          ctx.beginPath();
          ctx.arc(w / 2, h / 2, r, -0.3, 0.3);
          ctx.stroke();
        }
        readout.textContent = "Fir rectiliniu (curent spre tine ⊙): linii = cercuri. Regula burghiului.";
      } else if (type === "loop") {
        ctx.strokeStyle = "#f59e0b";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.ellipse(w / 2, h / 2, 80, 30, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.strokeStyle = "#60a5fa";
        ctx.lineWidth = 1.5;
        for (let i = 1; i <= Math.min(p, 7); i++) {
          const s = 20 + i * 12;
          ctx.beginPath();
          ctx.ellipse(w / 2, h / 2, s * 0.4, s, 0, 0, Math.PI * 2);
          ctx.stroke();
        }
        ctx.fillStyle = "#fff";
        ctx.fillText("I", w / 2 + 90, h / 2);
        readout.textContent = "Curent circular ≈ bară magnetică scurtă. Poli pe axă.";
      } else {
        // solenoid
        ctx.strokeStyle = "#f59e0b";
        ctx.lineWidth = 2;
        for (let i = 0; i < 10; i++) {
          ctx.beginPath();
          ctx.ellipse(140 + i * 40, h / 2, 12, 50, 0, 0, Math.PI * 2);
          ctx.stroke();
        }
        ctx.strokeStyle = "#60a5fa";
        ctx.lineWidth = 1.5;
        for (let i = 0; i < p; i++) {
          const y = h / 2 - 35 + i * (70 / Math.max(p - 1, 1));
          ctx.beginPath();
          ctx.moveTo(150, y);
          ctx.lineTo(500, y);
          ctx.stroke();
        }
        readout.textContent = "Solenoid: în interior câmp OMOGEN (linii paralele, densitate constantă).";
      }
    }
    src.onchange = pow.oninput = draw;
    draw();
  },

  "forta-electromagnetica"(root) {
    root.innerHTML = `
      <div class="sim-wrap">
        <canvas width="640" height="340" id="sim-canvas"></canvas>
        <div class="sim-controls">
          <div><label>I (A): <span id="Iv">2.0</span></label><input type="range" id="I" min="0.5" max="5" step="0.1" value="2"></div>
          <div><label>ℓ (m): <span id="Lv">0.60</span></label><input type="range" id="L" min="0.2" max="1" step="0.05" value="0.6"></div>
          <div><label>B (T): <span id="Bv">0.50</span></label><input type="range" id="B" min="0.1" max="1.5" step="0.05" value="0.5"></div>
          <div><label>α (°): <span id="Av">90</span></label><input type="range" id="A" min="0" max="180" step="5" value="90"></div>
        </div>
        <div class="sim-readout" id="readout"></div>
      </div>`;
    const canvas = root.querySelector("#sim-canvas");
    const ctx = canvas.getContext("2d");
    const els = ["I", "L", "B", "A"].map((id) => root.querySelector("#" + id));

    function draw() {
      const I = +els[0].value, L = +els[1].value, B = +els[2].value, A = +els[3].value;
      root.querySelector("#Iv").textContent = I.toFixed(1);
      root.querySelector("#Lv").textContent = L.toFixed(2);
      root.querySelector("#Bv").textContent = B.toFixed(2);
      root.querySelector("#Av").textContent = A;
      const Fm = I * L * B * Math.sin((A * Math.PI) / 180);
      root.querySelector("#readout").textContent =
        `Fm = IℓB sinα = ${I}·${L}·${B}·sin(${A}°) = ${Fm.toFixed(3)} N`;

      const w = canvas.width, h = canvas.height;
      ctx.fillStyle = "#0a0f18";
      ctx.fillRect(0, 0, w, h);

      // B field (× into page)
      ctx.fillStyle = "#64748b";
      for (let x = 40; x < w - 40; x += 40)
        for (let y = 40; y < h - 40; y += 40) {
          ctx.beginPath();
          ctx.arc(x, y, 3, 0, Math.PI * 2);
          ctx.fill();
          ctx.beginPath();
          ctx.moveTo(x - 5, y - 5); ctx.lineTo(x + 5, y + 5);
          ctx.moveTo(x + 5, y - 5); ctx.lineTo(x - 5, y + 5);
          ctx.strokeStyle = "#475569";
          ctx.stroke();
        }
      ctx.fillStyle = "#94a3b8";
      ctx.font = "12px sans-serif";
      ctx.fillText("B ⊗ (în pagină)", 20, 24);

      // wire
      const ang = ((90 - A) * Math.PI) / 180;
      ctx.save();
      ctx.translate(w / 2, h / 2);
      ctx.rotate(ang);
      ctx.strokeStyle = "#f59e0b";
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.moveTo(-120, 0);
      ctx.lineTo(120, 0);
      ctx.stroke();
      ctx.fillStyle = "#fbbf24";
      ctx.fillText("I →", 80, -10);
      ctx.restore();

      // force arrow (up when α=90)
      const forceScale = Math.min(Fm * 80, 120);
      if (forceScale > 2) {
        ctx.strokeStyle = "#22c55e";
        ctx.fillStyle = "#22c55e";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(w / 2, h / 2);
        ctx.lineTo(w / 2, h / 2 - forceScale);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(w / 2, h / 2 - forceScale);
        ctx.lineTo(w / 2 - 8, h / 2 - forceScale + 14);
        ctx.lineTo(w / 2 + 8, h / 2 - forceScale + 14);
        ctx.fill();
        ctx.fillText("Fm", w / 2 + 12, h / 2 - forceScale / 2);
      }
    }
    els.forEach((el) => (el.oninput = draw));
    draw();
  },

  "forta-lorentz"(root) {
    root.innerHTML = `
      <div class="sim-wrap">
        <canvas width="640" height="340" id="sim-canvas"></canvas>
        <div class="sim-controls">
          <div><label>Sarcină</label>
            <select id="q"><option value="1">Proton (+)</option><option value="-1">Electron (−)</option></select>
          </div>
          <div><label>v (×10⁶ m/s): <span id="vv">3.0</span></label><input type="range" id="v" min="0.5" max="8" step="0.1" value="3"></div>
          <div><label>B (T): <span id="Bv">0.40</span></label><input type="range" id="B" min="0.05" max="1" step="0.05" value="0.4"></div>
          <div><label>α (°): <span id="Av">90</span></label><input type="range" id="A" min="0" max="180" step="5" value="90"></div>
        </div>
        <div class="sim-readout" id="readout"></div>
      </div>`;
    const canvas = root.querySelector("#sim-canvas");
    const ctx = canvas.getContext("2d");
    let t = 0, anim;

    function frame() {
      const qSign = +root.querySelector("#q").value;
      const v = +root.querySelector("#v").value;
      const B = +root.querySelector("#B").value;
      const A = +root.querySelector("#A").value;
      root.querySelector("#vv").textContent = v.toFixed(1);
      root.querySelector("#Bv").textContent = B.toFixed(2);
      root.querySelector("#Av").textContent = A;

      const q = 1.6e-19;
      const m = qSign > 0 ? 1.67e-27 : 9.1e-31;
      const vv = v * 1e6;
      const FL = Math.abs(q) * vv * B * Math.sin((A * Math.PI) / 180);
      const r = (A === 0 || A === 180) ? Infinity : (m * vv) / (Math.abs(q) * B);
      root.querySelector("#readout").textContent =
        `FL = ${FL.toExponential(2)} N | r ≈ ${r === Infinity ? "∞ (rectiliniu)" : (r * 1000).toFixed(2) + " mm (pt. α=90°, approx.)"} | Lucrul FL = 0 ⇒ |v| constant`;

      const w = canvas.width, h = canvas.height;
      ctx.fillStyle = "#0a0f18";
      ctx.fillRect(0, 0, w, h);

      // B dots
      ctx.fillStyle = "#334155";
      for (let x = 30; x < w; x += 35)
        for (let y = 30; y < h; y += 35) {
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fill();
        }

      const cx = w / 2, cy = h / 2;
      const rr = Math.min(110, 40 + (v / B) * 8);
      t += (qSign > 0 ? 1 : -1) * (0.03 + B * 0.02);
      const alpha = (A * Math.PI) / 180;
      if (Math.sin(alpha) < 0.01) {
        const x = ((t * 40) % (w + 40)) - 20;
        ctx.fillStyle = qSign > 0 ? "#f87171" : "#60a5fa";
        ctx.beginPath();
        ctx.arc(x, cy, 8, 0, Math.PI * 2);
        ctx.fill();
      } else {
        const x = cx + rr * Math.cos(t);
        const y = cy + rr * Math.sin(t) * Math.sin(alpha);
        ctx.strokeStyle = "#1e293b";
        ctx.beginPath();
        ctx.ellipse(cx, cy, rr, rr * Math.sin(alpha) || 1, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fillStyle = qSign > 0 ? "#f87171" : "#60a5fa";
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fill();
      }
      anim = requestAnimationFrame(frame);
    }
    root.querySelectorAll("input,select").forEach((el) => {
      el.oninput = () => {};
    });
    cancelAnimationFrame(anim);
    frame();
    root._cleanup = () => cancelAnimationFrame(anim);
  },

  "miscarea-particulelor"(root) {
    // reuse lorentz-like circular motion with readout of r,T
    root.innerHTML = `
      <div class="sim-wrap">
        <canvas width="640" height="340" id="sim-canvas"></canvas>
        <div class="sim-controls">
          <div><label>v (×10⁶ m/s): <span id="vv">2.0</span></label><input type="range" id="v" min="0.5" max="6" step="0.1" value="2"></div>
          <div><label>B (mT): <span id="Bv">2.5</span></label><input type="range" id="B" min="0.5" max="10" step="0.1" value="2.5"></div>
          <div><label>Particulă</label>
            <select id="p"><option value="e">Electron</option><option value="p">Proton</option></select>
          </div>
        </div>
        <div class="sim-readout" id="readout"></div>
      </div>`;
    const canvas = root.querySelector("#sim-canvas");
    const ctx = canvas.getContext("2d");
    let t = 0, anim;

    function frame() {
      const v = +root.querySelector("#v").value * 1e6;
      const B = +root.querySelector("#B").value * 1e-3;
      const isE = root.querySelector("#p").value === "e";
      root.querySelector("#vv").textContent = (v / 1e6).toFixed(1);
      root.querySelector("#Bv").textContent = (B * 1e3).toFixed(1);
      const q = 1.6e-19;
      const m = isE ? 9.1e-31 : 1.67e-27;
      const r = (m * v) / (q * B);
      const T = (2 * Math.PI * m) / (q * B);
      root.querySelector("#readout").textContent =
        `r = mv/(qB) = ${(r * 1000).toFixed(2)} mm | T = 2πm/(qB) = ${T.toExponential(2)} s | Observă: T NU depinde de v!`;

      const w = canvas.width, h = canvas.height;
      ctx.fillStyle = "#0a0f18";
      ctx.fillRect(0, 0, w, h);
      const scale = Math.min(120, Math.max(20, r * 20000));
      t += isE ? 0.08 : 0.03;
      ctx.strokeStyle = "#334155";
      ctx.beginPath();
      ctx.arc(w / 2, h / 2, scale, 0, Math.PI * 2);
      ctx.stroke();
      ctx.fillStyle = isE ? "#60a5fa" : "#f87171";
      ctx.beginPath();
      ctx.arc(w / 2 + scale * Math.cos(t), h / 2 + scale * Math.sin(t), 7, 0, Math.PI * 2);
      ctx.fill();
      anim = requestAnimationFrame(frame);
    }
    frame();
    root._cleanup = () => cancelAnimationFrame(anim);
  },

  "inductie-em"(root) {
    root.innerHTML = `
      <div class="sim-wrap">
        <canvas width="640" height="320" id="sim-canvas"></canvas>
        <div class="sim-controls">
          <div><label>Poziție magnet: <span id="xv">0</span></label><input type="range" id="x" min="-120" max="120" value="0"></div>
          <div><label>Viteza mișcării (auto)</label><input type="range" id="spd" min="0" max="5" value="2"></div>
          <div><button class="btn primary" id="auto">▶ Auto</button> <button class="btn" id="stop">⏹ Stop</button></div>
        </div>
        <div class="sim-readout" id="readout">Curentul indus apare doar când Φ VARIAZĂ (Lenz: se opune variației).</div>
      </div>`;
    const canvas = root.querySelector("#sim-canvas");
    const ctx = canvas.getContext("2d");
    const xEl = root.querySelector("#x");
    let auto = false, dir = 1, lastX = 0, anim;

    function draw() {
      let x = +xEl.value;
      if (auto) {
        const spd = +root.querySelector("#spd").value;
        x += dir * spd;
        if (x > 120 || x < -120) dir *= -1;
        xEl.value = x;
      }
      root.querySelector("#xv").textContent = x;
      const vx = x - lastX;
      lastX = x;
      const emf = -vx * 0.8; // schematic

      const w = canvas.width, h = canvas.height;
      ctx.fillStyle = "#0a0f18";
      ctx.fillRect(0, 0, w, h);

      // coil
      ctx.strokeStyle = "#f59e0b";
      ctx.lineWidth = 3;
      for (let i = 0; i < 8; i++) {
        ctx.beginPath();
        ctx.ellipse(w / 2 - 60 + i * 18, h / 2, 10, 45, 0, 0, Math.PI * 2);
        ctx.stroke();
      }
      // galvanometer
      ctx.strokeStyle = "#64748b";
      ctx.strokeRect(w / 2 + 100, h / 2 - 40, 80, 80);
      ctx.fillStyle = "#94a3b8";
      ctx.fillText("G", w / 2 + 132, h / 2 + 5);
      const needle = Math.max(-1, Math.min(1, emf)) * 40;
      ctx.strokeStyle = "#22c55e";
      ctx.beginPath();
      ctx.moveTo(w / 2 + 140, h / 2 + 30);
      ctx.lineTo(w / 2 + 140 + needle, h / 2 - 20);
      ctx.stroke();

      // magnet
      const mx = w / 2 - 160 + x;
      ctx.fillStyle = "#ef4444";
      ctx.fillRect(mx, h / 2 - 15, 35, 30);
      ctx.fillStyle = "#3b82f6";
      ctx.fillRect(mx + 35, h / 2 - 15, 35, 30);
      ctx.fillStyle = "#fff";
      ctx.fillText("N", mx + 10, h / 2 + 5);
      ctx.fillText("S", mx + 45, h / 2 + 5);

      root.querySelector("#readout").textContent =
        vx === 0
          ? "Magnet oprit → Φ constant → εi = 0 (acul la zero)."
          : `Magnet în mișcare (v≈${vx.toFixed(1)}) → ΔΦ/Δt ≠ 0 → εi ≈ ${emf.toFixed(2)} (u.a.). Sensul respectă Lenz.`;

      anim = requestAnimationFrame(draw);
    }
    root.querySelector("#auto").onclick = () => (auto = true);
    root.querySelector("#stop").onclick = () => (auto = false);
    draw();
    root._cleanup = () => cancelAnimationFrame(anim);
  },

  "autoinductie"(root) {
    root.innerHTML = `
      <div class="sim-wrap">
        <canvas width="640" height="280" id="sim-canvas"></canvas>
        <div class="sim-controls">
          <div><label>L (mH): <span id="Lv">50</span></label><input type="range" id="L" min="5" max="200" value="50"></div>
          <div><label>Δt întrerupere (ms): <span id="Tv">1</span></label><input type="range" id="T" min="0.2" max="10" step="0.2" value="1"></div>
          <div><label>I inițial (A): <span id="Iv">2</span></label><input type="range" id="I" min="0.5" max="5" step="0.1" value="2"></div>
        </div>
        <div class="sim-readout" id="readout"></div>
      </div>`;
    const canvas = root.querySelector("#sim-canvas");
    const ctx = canvas.getContext("2d");

    function draw() {
      const L = +root.querySelector("#L").value / 1000;
      const dt = +root.querySelector("#T").value / 1000;
      const I = +root.querySelector("#I").value;
      root.querySelector("#Lv").textContent = (L * 1000).toFixed(0);
      root.querySelector("#Tv").textContent = (dt * 1000).toFixed(1);
      root.querySelector("#Iv").textContent = I.toFixed(1);
      const ea = (L * I) / dt;
      const Wm = 0.5 * L * I * I;
      root.querySelector("#readout").textContent =
        `|εa| = L ΔI/Δt = ${ea.toFixed(1)} V | Wm = LI²/2 = ${(Wm * 1000).toFixed(2)} mJ — „inerție” electrică`;

      const w = canvas.width, h = canvas.height;
      ctx.fillStyle = "#0a0f18";
      ctx.fillRect(0, 0, w, h);
      // I(t) graph schematic
      ctx.strokeStyle = "#334155";
      ctx.beginPath();
      ctx.moveTo(60, h - 40);
      ctx.lineTo(w - 40, h - 40);
      ctx.moveTo(60, h - 40);
      ctx.lineTo(60, 40);
      ctx.stroke();
      ctx.strokeStyle = "#60a5fa";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(60, 80);
      ctx.lineTo(200, 80);
      const fall = Math.min(250, 40 + dt * 8000);
      ctx.lineTo(200 + fall, h - 40);
      ctx.stroke();
      ctx.fillStyle = "#94a3b8";
      ctx.font = "12px sans-serif";
      ctx.fillText("I", 40, 50);
      ctx.fillText("t", w - 30, h - 20);
      ctx.fillText("închidere", 70, 70);
      ctx.fillText("deschidere", 210, 70);
      ctx.fillStyle = "#fbbf24";
      ctx.fillText(`εa mare dacă Δt mic sau L mare`, 300, 60);
    }
    root.querySelectorAll("input").forEach((el) => (el.oninput = draw));
    draw();
  },

  "generator-ca"(root) {
    root.innerHTML = `
      <div class="sim-wrap">
        <canvas width="640" height="340" id="sim-canvas"></canvas>
        <div class="sim-controls">
          <div><label>ω (rad/s vizual): <span id="wv">2.0</span></label><input type="range" id="w" min="0.5" max="6" step="0.1" value="2"></div>
          <div><label>N · B · S (u.a.): <span id="Av">1.0</span></label><input type="range" id="amp" min="0.3" max="2" step="0.1" value="1"></div>
        </div>
        <div class="sim-readout" id="readout">e = εm sin(ωt). Observă: ε maximă când Φ = 0!</div>
      </div>`;
    const canvas = root.querySelector("#sim-canvas");
    const ctx = canvas.getContext("2d");
    let t = 0, anim;

    function frame() {
      const wSpd = +root.querySelector("#w").value;
      const amp = +root.querySelector("#amp").value;
      root.querySelector("#wv").textContent = wSpd.toFixed(1);
      root.querySelector("#Av").textContent = amp.toFixed(1);
      t += 0.04 * wSpd;
      const emf = amp * Math.sin(t);
      const flux = amp * Math.cos(t);

      const w = canvas.width, h = canvas.height;
      ctx.fillStyle = "#0a0f18";
      ctx.fillRect(0, 0, w, h);

      // rotating frame
      ctx.save();
      ctx.translate(160, h / 2);
      ctx.rotate(t);
      ctx.strokeStyle = "#f59e0b";
      ctx.lineWidth = 3;
      ctx.strokeRect(-40, -25, 80, 50);
      ctx.restore();
      ctx.fillStyle = "#ef4444";
      ctx.fillRect(40, h / 2 - 70, 20, 40);
      ctx.fillStyle = "#3b82f6";
      ctx.fillRect(40, h / 2 + 30, 20, 40);
      ctx.fillStyle = "#fff";
      ctx.fillText("N", 44, h / 2 - 45);
      ctx.fillText("S", 44, h / 2 + 55);

      // graphs
      const gx = 280, gy = 40, gw = 320, gh = 120;
      ctx.strokeStyle = "#334155";
      ctx.strokeRect(gx, gy, gw, gh);
      ctx.strokeRect(gx, gy + 150, gw, gh);
      ctx.fillStyle = "#94a3b8";
      ctx.fillText("e(t)", gx + 8, gy + 14);
      ctx.fillText("Φ(t)", gx + 8, gy + 164);

      ctx.beginPath();
      ctx.strokeStyle = "#22c55e";
      for (let i = 0; i < gw; i++) {
        const tt = t - (gw - i) * 0.03;
        const y = gy + gh / 2 - amp * Math.sin(tt) * 40;
        i === 0 ? ctx.moveTo(gx + i, y) : ctx.lineTo(gx + i, y);
      }
      ctx.stroke();
      ctx.beginPath();
      ctx.strokeStyle = "#60a5fa";
      for (let i = 0; i < gw; i++) {
        const tt = t - (gw - i) * 0.03;
        const y = gy + 150 + gh / 2 - amp * Math.cos(tt) * 40;
        i === 0 ? ctx.moveTo(gx + i, y) : ctx.lineTo(gx + i, y);
      }
      ctx.stroke();

      root.querySelector("#readout").textContent =
        `e = ${emf.toFixed(2)} | Φ ~ ${flux.toFixed(2)} | Când Φ≈0, |e| e maxim (${Math.abs(emf) > 0.9 * amp ? "ACUM!" : "..."})`;
      anim = requestAnimationFrame(frame);
    }
    frame();
    root._cleanup = () => cancelAnimationFrame(anim);
  },

  "circuite-rlc"(root) {
    root.innerHTML = `
      <div class="sim-wrap">
        <canvas width="640" height="360" id="sim-canvas"></canvas>
        <div class="sim-controls">
          <div><label>R (Ω): <span id="Rv">100</span></label><input type="range" id="R" min="10" max="300" value="100"></div>
          <div><label>L (mH): <span id="Lv">25</span></label><input type="range" id="L" min="1" max="200" value="25"></div>
          <div><label>C (μF): <span id="Cv">50</span></label><input type="range" id="C" min="5" max="200" value="50"></div>
          <div><label>ν (Hz): <span id="Nv">50</span></label><input type="range" id="N" min="10" max="200" value="50"></div>
          <div><label>U (V): <span id="Uv">220</span></label><input type="range" id="U" min="50" max="400" step="10" value="220"></div>
        </div>
        <div class="sim-readout" id="readout"></div>
      </div>`;
    const canvas = root.querySelector("#sim-canvas");
    const ctx = canvas.getContext("2d");

    function draw() {
      const R = +root.querySelector("#R").value;
      const L = +root.querySelector("#L").value / 1000;
      const C = +root.querySelector("#C").value / 1e6;
      const nu = +root.querySelector("#N").value;
      const U = +root.querySelector("#U").value;
      root.querySelector("#Rv").textContent = R;
      root.querySelector("#Lv").textContent = (L * 1000).toFixed(0);
      root.querySelector("#Cv").textContent = (C * 1e6).toFixed(0);
      root.querySelector("#Nv").textContent = nu;
      root.querySelector("#Uv").textContent = U;

      const w_ = 2 * Math.PI * nu;
      const XL = w_ * L;
      const XC = 1 / (w_ * C);
      const Z = Math.sqrt(R * R + (XL - XC) ** 2);
      const I = U / Z;
      const phi = (Math.atan2(XL - XC, R) * 180) / Math.PI;
      const nur = 1 / (2 * Math.PI * Math.sqrt(L * C));

      root.querySelector("#readout").textContent =
        `XL=${XL.toFixed(1)}Ω XC=${XC.toFixed(1)}Ω Z=${Z.toFixed(1)}Ω | I=${I.toFixed(3)}A | φ=${phi.toFixed(1)}° | νr=${nur.toFixed(1)}Hz ${Math.abs(nu - nur) < 2 ? "← APROAPE DE REZONANȚĂ!" : ""}`;

      const w = canvas.width, h = canvas.height;
      ctx.fillStyle = "#0a0f18";
      ctx.fillRect(0, 0, w, h);

      // phasor diagram
      const cx = 180, cy = 180, scale = 1.2;
      const ur = I * R * scale, ul = I * XL * scale, uc = I * XC * scale;
      ctx.strokeStyle = "#334155";
      ctx.beginPath();
      ctx.moveTo(40, cy); ctx.lineTo(320, cy);
      ctx.moveTo(cx, 40); ctx.lineTo(cx, 320);
      ctx.stroke();
      function arrow(x1, y1, x2, y2, color, label) {
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.fillText(label, x2 + 6, y2);
      }
      arrow(cx, cy, cx + ur, cy, "#22c55e", "UR");
      arrow(cx, cy, cx, cy - ul, "#f59e0b", "UL");
      arrow(cx, cy, cx, cy + uc, "#60a5fa", "UC");
      const ux = ur, uy = -(ul - uc);
      arrow(cx, cy, cx + ux, cy + uy, "#f472b6", "U");

      // resonance curve I(ν)
      ctx.fillStyle = "#94a3b8";
      ctx.fillText("I(ν) – curba de rezonanță", 360, 40);
      ctx.strokeStyle = "#334155";
      ctx.strokeRect(360, 50, 250, 200);
      ctx.beginPath();
      ctx.strokeStyle = "#a78bfa";
      for (let i = 0; i < 250; i++) {
        const n = 10 + (i / 250) * 190;
        const ww = 2 * Math.PI * n;
        const xl = ww * L, xc = 1 / (ww * C);
        const z = Math.sqrt(R * R + (xl - xc) ** 2);
        const ii = U / z;
        const y = 250 - Math.min(ii * 40, 195);
        i === 0 ? ctx.moveTo(360 + i, y) : ctx.lineTo(360 + i, y);
      }
      ctx.stroke();
      // current nu marker
      const mx = 360 + ((nu - 10) / 190) * 250;
      ctx.strokeStyle = "#f43f5e";
      ctx.beginPath();
      ctx.moveTo(mx, 50);
      ctx.lineTo(mx, 250);
      ctx.stroke();
    }
    root.querySelectorAll("input").forEach((el) => (el.oninput = draw));
    draw();
  },

  "transformator"(root) {
    root.innerHTML = `
      <div class="sim-wrap">
        <canvas width="640" height="300" id="sim-canvas"></canvas>
        <div class="sim-controls">
          <div><label>N₁ (primar): <span id="n1v">500</span></label><input type="range" id="n1" min="50" max="1000" step="10" value="500"></div>
          <div><label>N₂ (secundar): <span id="n2v">50</span></label><input type="range" id="n2" min="10" max="2000" step="10" value="50"></div>
          <div><label>U₁ (V): <span id="u1v">220</span></label><input type="range" id="u1" min="50" max="400" step="10" value="220"></div>
        </div>
        <div class="sim-readout" id="readout"></div>
      </div>`;
    const canvas = root.querySelector("#sim-canvas");
    const ctx = canvas.getContext("2d");

    function draw() {
      const n1 = +root.querySelector("#n1").value;
      const n2 = +root.querySelector("#n2").value;
      const u1 = +root.querySelector("#u1").value;
      root.querySelector("#n1v").textContent = n1;
      root.querySelector("#n2v").textContent = n2;
      root.querySelector("#u1v").textContent = u1;
      const u2 = u1 * (n2 / n1);
      const k = n2 / n1;
      root.querySelector("#readout").textContent =
        `U₂/U₁ ≈ N₂/N₁ = ${k.toFixed(3)} → U₂ ≈ ${u2.toFixed(1)} V | ${k > 1 ? "RIDICĂTOR" : k < 1 ? "COBORÂTOR" : "1:1"}`;

      const w = canvas.width, h = canvas.height;
      ctx.fillStyle = "#0a0f18";
      ctx.fillRect(0, 0, w, h);
      // core
      ctx.strokeStyle = "#64748b";
      ctx.lineWidth = 14;
      ctx.strokeRect(180, 70, 280, 160);
      // windings
      const turns1 = Math.min(12, Math.max(3, Math.round(n1 / 80)));
      const turns2 = Math.min(12, Math.max(3, Math.round(n2 / 80)));
      ctx.strokeStyle = "#f59e0b";
      ctx.lineWidth = 2;
      for (let i = 0; i < turns1; i++) {
        ctx.beginPath();
        ctx.ellipse(200, 100 + i * 10, 18, 8, 0, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.strokeStyle = "#60a5fa";
      for (let i = 0; i < turns2; i++) {
        ctx.beginPath();
        ctx.ellipse(440, 100 + i * 10, 18, 8, 0, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.fillStyle = "#fbbf24";
      ctx.font = "14px sans-serif";
      ctx.fillText(`Primar N₁=${n1}`, 150, 50);
      ctx.fillText(`U₁=${u1} V`, 150, 260);
      ctx.fillStyle = "#93c5fd";
      ctx.fillText(`Secundar N₂=${n2}`, 400, 50);
      ctx.fillText(`U₂≈${u2.toFixed(1)} V`, 400, 260);
    }
    root.querySelectorAll("input").forEach((el) => (el.oninput = draw));
    draw();
  },
};
