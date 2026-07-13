/**
 * Conținut Cap. 2 – Curentul electric alternativ (pag. 24–40)
 */
window.CONTENT = window.CONTENT || {};

window.CONTENT["2.1"] = {
  id: "2.1",
  title: "Generarea tensiunii electromotoare alternative",
  essence: "Un cadru care se rotește în B omogen generează ε = εm sin(ωt). Principiul alternatorului.",

  theory: [
    {
      title: "Definiții rapide",
      points: [
        "Curent alternativ: i = Im sin(ωt + φ₀) — lege armonică, sensul se schimbă periodic.",
        "Perioada T = timp pentru o oscilație completă; ν = 1/T; ω = 2πν = 2π/T.",
        "Frecvența industrială: 50 Hz (în Moldova/Europa) → sensul se schimbă de 100 ori/s.",
      ],
    },
    {
      title: "Cum se generează",
      points: [
        "Rotești cadrul în B (sau B în jurul cadrului fix) → flux variabil → ε indusă.",
        "Laturile active „taie” liniile B; ε pe laturi se adună.",
        "ε e maximă când Φ = 0 (viteza de variație a fluxului e maximă).",
        "Cu N spire: εm se amplifică de N ori.",
      ],
    },
  ],

  formulas: [
    { name: "Curent alternativ", latex: "i = I_m sin(ωt + φ_0)", note: "" },
    { name: "Pulsație", latex: "ω = 2πν = 2π/T", note: "" },
    { name: "T.e.m. indusă", latex: "e = ε_m sin(ωt)", note: "ε_m = N B S ω" },
  ],

  rules: [],

  checklist: [
    "Știu relația ω–ν–T",
    "Explic de ce e ~ sinωt la rotație uniformă",
    "Știu că |e| e max când Φ = 0",
  ],

  problems: [
    {
      id: "p2.1.1",
      level: 1,
      type: "calcul",
      q: "ν = 50 Hz. De câte ori își schimbă sensul curentul într-o secundă?",
      hint: "Într-o perioadă sensul se schimbă de 2 ori.",
      a: "2 · 50 = 100 ori pe secundă.",
    },
    {
      id: "p2.1.2",
      level: 2,
      type: "concept",
      q: "De ce t.e.m. e maximă tocmai când fluxul prin cadru e zero?",
      hint: "ε = −dΦ/dt.",
      a: "Când Φ trece prin zero, panta dΦ/dt e maximă (laturile active taie cele mai multe linii/s).",
    },
    {
      id: "p2.1.3",
      level: 2,
      type: "concept",
      q: "Cum mărești εm fără să schimbi B sau viteza de rotație?",
      hint: "Privește εm = NBSω.",
      a: "Crești N (mai multe spire) sau aria S a cadrului.",
    },
  ],

  quiz: [
    {
      q: "La 50 Hz, perioada este:",
      options: ["50 s", "0,02 s", "0,5 s", "20 s"],
      correct: 1,
    },
  ],
};

window.CONTENT["2.2"] = {
  id: "2.2",
  title: "Valorile efective ale intensității și tensiunii",
  essence: "Aparatele arată valorile efective: I = Im/√2, U = Um/√2 — echivalent termic cu un curent continuu.",

  theory: [
    {
      title: "De ce „efectiv”?",
      points: [
        "Media pe o perioadă a lui i (sau u) e ZERO — deci nu e utilă.",
        "Efectul termic (Joule) depinde de i² → media pe perioadă ≠ 0.",
        "I efectiv = intensitatea CC care produce ACEEAȘI căldură în același timp.",
        "Voltmetrele/ampermetrele de CA arată valori EFECTIVE.",
      ],
    },
  ],

  formulas: [
    { name: "Intensitate efectivă", latex: "I = I_m / √2 ≈ 0,707 I_m", note: "" },
    { name: "Tensiune efectivă", latex: "U = U_m / √2", note: "" },
  ],

  rules: [],

  checklist: [
    "Convertesc Im ↔ I și Um ↔ U",
    "Știu că 220 V din priză e valoare EFECTIVĂ",
  ],

  problems: [
    {
      id: "p2.2.1",
      level: 1,
      type: "calcul",
      q: "Voltmetrul arată 220 V. Care e Um?",
      hint: "Um = U√2.",
      a: "Um = 220√2 ≈ 311 V.",
    },
    {
      id: "p2.2.2",
      level: 2,
      type: "calcul",
      q: "R = 400 Ω, ν = 50 Hz, pe o perioadă se degajă 16 J. Găsește I și Im.",
      hint: "Q = I² R T; T = 1/ν = 0,02 s.",
      a: "16 = I² · 400 · 0,02 → I² = 2 → I = √2 A ≈ 1,41 A; Im = I√2 = 2 A.",
    },
  ],

  quiz: [
    {
      q: "În priza de 220 V, amplitudinea tensiunii e aproximativ:",
      options: ["110 V", "220 V", "311 V", "440 V"],
      correct: 2,
    },
  ],
};

window.CONTENT["2.3"] = {
  id: "2.3",
  title: "Circuite în curent alternativ (R, L, C, RLC)",
  essence: "R: în fază. L: u înaintea lui i cu 90°. C: u în urma lui i cu 90°. Impedanță Z = √[R² + (XL − XC)²]. Rezonanță: XL = XC.",

  theory: [
    {
      title: "Elemente ideale – tabela de aur",
      points: [
        "Rezistor R: u și i în fază; U = IR.",
        "Bobină L: reactanță XL = ωL; u avansează i cu π/2.",
        "Condensator C: reactanță XC = 1/(ωC); u rămâne în urmă cu π/2 față de i.",
        "În CC: condensatorul întrerupe; bobina e doar un R. În CA: ambele „conduc” cu reactanțe.",
      ],
    },
    {
      title: "Circuit RLC serie",
      points: [
        "Aceeași I prin toate; tensiunile se adună VECTORIAL (fazori).",
        "Z = √[R² + (XL − XC)²]; U = IZ; tanφ = (XL − XC)/R.",
        "XL > XC → preponderent inductiv (φ > 0).",
        "XC > XL → preponderent capacitiv (φ < 0).",
      ],
    },
    {
      title: "Rezonanța tensiunilor",
      points: [
        "ωr = 1/√(LC); νr = 1/(2π√(LC)).",
        "La rezonanță: φ = 0, Imax = U/R, UL = UC = Q·U (Q = factor de calitate).",
        "Utilă la acordarea radiourilor; periculoasă (supratensiuni) în rețele.",
      ],
    },
  ],

  formulas: [
    { name: "Reactanță inductivă", latex: "X_L = ωL = 2πνL", note: "" },
    { name: "Reactanță capacitivă", latex: "X_C = 1/(ωC)", note: "" },
    { name: "Impedanță", latex: "Z = √[R² + (X_L − X_C)²]", note: "" },
    { name: "Legea lui Ohm CA", latex: "I = U / Z", note: "valori efective" },
    { name: "Defazaj", latex: "tan φ = (X_L − X_C) / R", note: "" },
    { name: "Frecvență de rezonanță", latex: "ν_r = 1 / (2π√(LC))", note: "" },
    { name: "Factor de calitate", latex: "Q = U_L / U = (1/R)√(L/C)", note: "la rezonanță" },
  ],

  rules: [
    {
      name: "Diagrama fazorială (serie)",
      text: "I pe axa de referință; UR ∥ I; UL la +90°; UC la −90°. Um = rezultanta.",
    },
  ],

  checklist: [
    "Calculez XL, XC, Z, I, φ",
    "Desenez diagrama fazorială RLC",
    "Găsesc νr și înțeleg Imax = U/R",
  ],

  problems: [
    {
      id: "p2.3.1",
      level: 1,
      type: "calcul",
      q: "U = 220 V pe R = 11 kΩ. Găsește I și Im.",
      hint: "Pe R pur: Z = R.",
      a: "I = 220/11000 = 0,02 A; Im = 0,02√2 ≈ 0,028 A.",
    },
    {
      id: "p2.3.2",
      level: 2,
      type: "calcul",
      q: "L = 20 mH, ν = 50 Hz. Cât e XL?",
      hint: "XL = 2πνL.",
      a: "XL = 2π·50·0,02 ≈ 6,28 Ω.",
    },
    {
      id: "p2.3.3",
      level: 2,
      type: "calcul",
      q: "C = 250 μF, XC = 40 Ω. Care e ν?",
      hint: "XC = 1/(2πνC) → ν = 1/(2π C XC).",
      a: "ν = 1/(2π · 250e-6 · 40) ≈ 15,9 Hz.",
    },
    {
      id: "p2.3.4",
      level: 3,
      type: "calcul",
      q: "RL serie: R = 10 Ω, U = 36 V, ν = 50 Hz, UR = 20 V. Găsește Z, L și φ.",
      hint: "I = UR/R; Z = U/I; XL = √(Z²−R²); L = XL/(2πν).",
      a: "I = 20/10 = 2 A; Z = 36/2 = 18 Ω; XL = √(324−100) = √224 ≈ 15 Ω; L ≈ 15/(2π·50) ≈ 47,7 mH; cosφ = R/Z = 10/18 → φ ≈ 56°.",
    },
    {
      id: "p2.3.5",
      level: 3,
      type: "calcul",
      q: "RLC: R = 100 Ω, L = 25 mH, C = 50 μF, U = 220 V, ν = 50 Hz. Cât e I?",
      hint: "Calculează XL, XC, Z, apoi I = U/Z.",
      a: "XL = 2π·50·0,025 ≈ 7,85 Ω; XC = 1/(2π·50·50e-6) ≈ 63,7 Ω; Z = √[100² + (7,85−63,7)²] ≈ 114,5 Ω; I ≈ 1,92 A.",
    },
  ],

  quiz: [
    {
      q: "La rezonanța tensiunilor în RLC serie:",
      options: ["I = 0", "φ = 90°", "XL = XC și φ = 0", "Z e maximă"],
      correct: 2,
    },
    {
      q: "Pe o bobină ideală, tensiunea față de curent:",
      options: ["E în fază", "Avansează cu 90°", "Rămâne în urmă cu 90°", "Avansează cu 180°"],
      correct: 1,
    },
  ],
};

window.CONTENT["2.4"] = {
  id: "2.4",
  title: "Puterea în circuit de curent alternativ",
  essence: "Pa = UI cosφ (activă, utilă). Pr = UI sinφ (reactivă). P = UI (aparentă). cosφ = factor de putere.",

  theory: [
    {
      title: "Cele 3 puteri",
      points: [
        "Putere activă Pa [W]: energia consumată efectiv (căldură, lucru util).",
        "Putere reactivă Pr [VAR]: energie schimbată oscilant între sursă și L/C.",
        "Putere aparentă P [VA]: UI — „capacitatea” aparentă a sursei.",
        "Triunghiul puterilor: P² = Pa² + Pr²; cosφ = Pa/P.",
      ],
    },
    {
      title: "Factorul de putere",
      points: [
        "cosφ ∈ (0, 1]; maxim (=1) la rezonanță sau pe R pur.",
        "Pe L sau C ideal: Pa = 0 (energia se întoarce la sursă).",
        "Vrei cosφ mare → mai puțină energie „pierdută” pe reactanțe.",
      ],
    },
  ],

  formulas: [
    { name: "Putere activă", latex: "P_a = U I cos φ", note: "W" },
    { name: "Putere reactivă", latex: "P_r = U I sin φ", note: "VAR" },
    { name: "Putere aparentă", latex: "P = U I", note: "VA" },
    { name: "Legătură", latex: "P = √(P_a² + P_r²)", note: "" },
  ],

  rules: [],

  checklist: [
    "Calculez Pa, Pr, P și cosφ",
    "Explic de ce Pa = 0 pe L/C ideal",
  ],

  problems: [
    {
      id: "p2.4.1",
      level: 2,
      type: "calcul",
      q: "Circuit serie: C = (5/9π)·10⁻³ F, L = (0,3/π) H, R = 16 Ω, U = 120 V, ν = 50 Hz. Găsește Z, I, cosφ, Pa, Pr, P.",
      hint: "XL = 2πνL; XC = 1/(2πνC); Z = √[R²+(XL−XC)²].",
      a: "XL = 30 Ω; XC = 18 Ω; Z = √[16² + 12²] = 20 Ω; I = 6 A; cosφ = 16/20 = 0,8; Pa = 576 W; Pr = 432 VAR; P = 720 VA.",
    },
  ],

  quiz: [
    {
      q: "Unitatea puterii reactive este:",
      options: ["W", "VA", "VAR", "J"],
      correct: 2,
    },
  ],
};

window.CONTENT["2.5"] = {
  id: "2.5",
  title: "Transportul energiei. Transformatorul",
  essence: "Transportăm la U mare și I mic ca să reducem pierderile I²R. Transformatorul schimbă U prin raportul de spire N₂/N₁.",

  theory: [
    {
      title: "Generatorul (alternatorul)",
      points: [
        "Inductor = sursa de B; indus = bobina unde se induce ε.",
        "Rotor = partea mobilă; stator = partea fixă.",
        "Miezurile din tole izolate → curenți Foucault mai mici.",
        "Mai mulți poli → turație mai mică pentru aceeași ν = 50 Hz.",
      ],
    },
    {
      title: "De ce tensiune înaltă?",
      points: [
        "Pierderi pe linie ~ I²R. Puterea P ≈ UI → la P fix, U↑ ⇒ I↓ ⇒ pierderi↓.",
        "Transformatoare: urcă U la centrală, coboară U la consumatori.",
      ],
    },
    {
      title: "Transformatorul",
      points: [
        "Două bobine pe același miez: primar (N₁) și secundar (N₂).",
        "În gol: U₂/U₁ ≈ N₂/N₁ (raportul de transformare).",
        "N₂ > N₁ → ridicător; N₂ < N₁ → coborâtor.",
        "Atenție: linii HT → poluare EM, zgomot, impact biologic (cercetări).",
      ],
    },
  ],

  formulas: [
    { name: "Raport de transformare", latex: "U_2 / U_1 ≈ N_2 / N_1", note: "funcționare în gol" },
    { name: "Pierderi pe linie (idee)", latex: "P_{pierderi} ∼ I² R", note: "deci vrem I mic" },
  ],

  rules: [],

  checklist: [
    "Explic de ce transportăm la U înaltă",
    "Aplic U₂/U₁ = N₂/N₁",
    "Diferențiez ridicător / coborâtor",
  ],

  problems: [
    {
      id: "p2.5.1",
      level: 1,
      type: "concept",
      q: "De ce nu transportăm energia electrică la 220 V pe sute de km?",
      hint: "Pierderi I²R.",
      a: "La P fix, U mic ⇒ I mare ⇒ pierderi termice uriașe pe linie. Trebuie U foarte mare.",
    },
    {
      id: "p2.5.2",
      level: 2,
      type: "calcul",
      q: "Transformator: N₁ = 500, N₂ = 50, U₁ = 220 V (în gol). Cât e U₂? E ridicător sau coborâtor?",
      hint: "U₂ = U₁ · N₂/N₁.",
      a: "U₂ = 220 · 50/500 = 22 V — coborâtor.",
    },
    {
      id: "p2.5.3",
      level: 2,
      type: "concept",
      q: "De ce miezul transformatorului e din tole, nu dintr-un bloc masiv?",
      hint: "Curenți Foucault.",
      a: "Tolele izolate întrerup drumurile curenților turbionari → pierderi și încălzire mai mici.",
    },
  ],

  quiz: [
    {
      q: "Dacă N₂/N₁ = 10, transformatorul:",
      options: ["Coboară U de 10 ori", "Ridică U de ~10 ori", "Nu schimbă U", "Inversează doar faza"],
      correct: 1,
    },
  ],
};
