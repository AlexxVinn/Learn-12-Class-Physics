/**
 * Conținut Cap. 1 – Electromagnetismul
 * Format: teorie scurtă + formule + reguli + probleme + quiz
 */
window.CONTENT = window.CONTENT || {};

window.CONTENT["1.1"] = {
  id: "1.1",
  title: "Câmpul magnetic. Liniile câmpului magnetic",
  essence: "Magneții și curenții creează câmp magnetic. Liniile de câmp sunt închise (turbionare) și arată direcția acului magnetic.",

  theory: [
    {
      title: "Ce trebuie să știi în 60 de secunde",
      points: [
        "Polii N–N / S–S se resping; N–S se atrag. Polii nu se pot separa.",
        "La polul geografic Nord al Pământului e polul geomagnetic SUD.",
        "Câmpul magnetic se „vede” cu ace magnetice sau pilitură de fier.",
        "Liniile ies din N și intră în S (în exteriorul magnetului).",
        "Densitate mare de linii = câmp puternic.",
      ],
    },
    {
      title: "Descoperirea lui Oersted (1820)",
      points: [
        "Curentul electric creează câmp magnetic în jurul conductorului.",
        "Surse ale câmpului magnetic = sarcini electrice în mișcare.",
        "Sarcinile în repaus → doar câmp electric; în mișcare → și electric, și magnetic.",
      ],
    },
    {
      title: "Forma liniilor (memorizează vizual)",
      points: [
        "Conductor rectiliniu: cercuri în plane perpendiculare pe fir.",
        "Curent circular / solenoid: similar cu o bară magnetică.",
        "În interiorul solenoidului: câmp omogen (linii paralele, densitate constantă).",
        "Liniile magnetice sunt ÎNCHISE → câmp turbionar (nu există „sarcini magnetice”).",
      ],
    },
  ],

  rules: [
    {
      name: "Regula burghiului (conductor rectiliniu)",
      text: "Burghiul se „înșurubează” în sensul curentului → rotația mânerului = sensul liniilor B.",
    },
    {
      name: "Regula burghiului (inel / solenoid)",
      text: "Rotești mânerul în sensul curentului din spire → deplasarea burghiului = sensul B în interior.",
    },
  ],

  formulas: [],

  checklist: [
    "Știu să desenez spectrul barei magnetice și al firului cu curent",
    "Aplic corect regula burghiului",
    "Explic de ce liniile B sunt închise",
  ],

  problems: [
    {
      id: "p1.1.1",
      level: 1,
      type: "concept",
      q: "De ce acul busolei arată aproximativ nord-sud geografic?",
      hint: "Gândește-te la polii geomagnetici vs. geografici.",
      a: "Pământul e ca un magnet. Polul geomagnetic SUD e aproape de polul geografic NORD, deci polul N al acului e atras spre nordul geografic.",
    },
    {
      id: "p1.1.2",
      level: 1,
      type: "concept",
      q: "Un fir vertical e parcurs de curent în sus. Cum sunt liniile B privite de sus?",
      hint: "Regula burghiului cu filet de dreapta.",
      a: "În sens antiorar (contrar acelor de ceasornic) – cercuri concentrice în jurul firului.",
    },
    {
      id: "p1.1.3",
      level: 2,
      type: "concept",
      q: "Care e deosebirea esențială dintre liniile B și liniile câmpului electrostatic E?",
      hint: "Închise vs. deschise.",
      a: "Liniile B sunt închise (câmp turbionar). Liniile E sunt deschise: încep pe sarcini + și se termină pe sarcini − (sau la infinit).",
    },
    {
      id: "p1.1.4",
      level: 2,
      type: "aplicare",
      q: "Cum demonstrezi experimental că solenoidul se comportă ca o bară magnetică?",
      hint: "Ace magnetice / pilitură + poli N/S.",
      a: "Cu pilitură sau ace: liniile ies dintr-un capăt (N) și intră în celălalt (S). Capetele atrag/resping polii unei bare ca un magnet.",
    },
  ],

  quiz: [
    {
      q: "Sursele câmpului magnetic sunt:",
      options: ["Sarcini în repaus", "Sarcini în mișcare / curenți", "Doar magneți naturali", "Doar protoni"],
      correct: 1,
    },
    {
      q: "Câmpul din interiorul unui solenoid lung e:",
      options: ["Nul", "Omogen", "Radial", "Doar la capete"],
      correct: 1,
    },
  ],
};

window.CONTENT["1.2"] = {
  id: "1.2",
  title: "Inducția magnetică. Forța electromagnetică",
  essence: "B măsoară „puterea” câmpului magnetic. Forța pe un fir cu curent: Fm = IℓB sinα.",

  theory: [
    {
      title: "Ideea de bază",
      points: [
        "Ca la g și E: caracteristica de forță a câmpului magnetic e inducția B.",
        "Corp de probă: element de curent (porțiune de conductor) caracterizat prin Iℓ.",
        "Forța e maximă când firul ⊥ pe B; nulă când firul e paralel cu B.",
      ],
    },
    {
      title: "Ce e 1 tesla?",
      points: [
        "1 T = câmp omogen care acționează cu Fmax = 1 N pe 1 m de fir parcurs de 1 A.",
        "1 T = 1 N/(A·m) — câmp mare (magneții uzuali: militesla).",
      ],
    },
  ],

  formulas: [
    { name: "Definiția lui B", latex: "B = F_{max} / (Iℓ)", note: "modulul inducției" },
    { name: "Forța maximă", latex: "F_{max} = IℓB", note: "când α = 90°" },
    { name: "Forța generală (Ampère)", latex: "F_m = IℓB sin α", note: "α = unghiul dintre I și B" },
  ],

  rules: [
    {
      name: "Regula mâinii stângi (Fleming)",
      text: "Liniile B intră în palmă; 4 degete = sensul curentului I; degetul mare = sensul forței Fm.",
    },
  ],

  checklist: [
    "Calculez Fm = IℓB sinα fără ezitare",
    "Aplic regula mâinii stângi corect",
    "Știu unitatea [B] = T",
  ],

  problems: [
    {
      id: "p1.2.1",
      level: 1,
      type: "calcul",
      q: "Fir ℓ = 0,6 m, ⊥ pe B, I = 2,5 A, F = 0,15 N. Cât e B?",
      hint: "B = F/(Iℓ) când α = 90°.",
      a: "B = 0,15 / (2,5 · 0,6) = 0,1 T.",
    },
    {
      id: "p1.2.2",
      level: 2,
      type: "calcul",
      q: "La I = 2,4 A, F = 0,48 N. Ce forță e la I' = 3,6 A (aceeași poziție)?",
      hint: "F ~ I, deci F'/F = I'/I.",
      a: "F' = 0,48 · (3,6/2,4) = 0,72 N.",
    },
    {
      id: "p1.2.3",
      level: 2,
      type: "calcul",
      q: "I = 1,2 A, ℓ = 0,75 m, B = 0,8 T, α = 30°. Calculează Fm.",
      hint: "Fm = IℓB sinα; sin30° = 0,5.",
      a: "Fm = 1,2 · 0,75 · 0,8 · 0,5 = 0,36 N.",
    },
    {
      id: "p1.2.4",
      level: 3,
      type: "calcul",
      q: "Conductor m = 8 g, ℓ = 20 cm, suspendat de 2 fire, ⊥ pe B orizontal. I = 3 A, B = 0,05 T. Găsește tensiunea din fiecare fir (cazuri posibile).",
      hint: "Greutate mg vs. Fm; Fm poate fi în sus sau în jos după sensul lui I.",
      a: "mg = 0,008·10 = 0,08 N; Fm = IℓB = 3·0,2·0,05 = 0,03 N. Dacă Fm în sus: T_total = 0,05 N → T = 0,025 N/fir. Dacă Fm în jos: T_total = 0,11 N → T = 0,055 N/fir.",
    },
  ],

  quiz: [
    {
      q: "Fm e maximă când unghiul dintre I și B este:",
      options: ["0°", "30°", "90°", "180°"],
      correct: 2,
    },
    {
      q: "Unitatea inducției magnetice este:",
      options: ["Weber", "Henry", "Tesla", "Farad"],
      correct: 2,
    },
  ],
};

window.CONTENT["1.3"] = {
  id: "1.3",
  title: "Forța Lorentz",
  essence: "Câmpul magnetic acționează pe fiecare sarcină în mișcare: FL = qvB sinα. Lucrul forței Lorentz e ZERO → |v| rămâne constant.",

  theory: [
    {
      title: "De la Fm la FL",
      points: [
        "Curentul = mișcare ordonată a sarcinilor → Fm e rezultanta forțelor pe particule.",
        "FL = q v B sinα, unde α e unghiul dintre v și B.",
        "FL ⊥ pe v și pe B → nu schimbă energia cinetică, doar direcția vitezei.",
      ],
    },
    {
      title: "Semnul sarcinii",
      points: [
        "Pentru q > 0: regula mâinii stângi cu degetele în sensul lui v.",
        "Pentru q < 0: forța e opusă celei pentru sarcină pozitivă (sau orientezi degetele opus lui v).",
      ],
    },
  ],

  formulas: [
    { name: "Forța Lorentz (modul)", latex: "F_L = q v B sin α", note: "α = ∠(v, B)" },
    { name: "Lucrul", latex: "L_L = 0", note: "FL ⊥ v → ΔEc = 0" },
  ],

  rules: [
    {
      name: "Mâna stângă pentru FL (q > 0)",
      text: "B intră în palmă; 4 degete = v; degetul mare = FL.",
    },
  ],

  checklist: [
    "Știu FL = qvB sinα",
    "Explic de ce |v| e constant în câmp B pur",
    "Determin sensul FL pentru electron și proton",
  ],

  problems: [
    {
      id: "p1.3.1",
      level: 1,
      type: "concept",
      q: "De ce energia cinetică a unei sarcini nu se schimbă doar sub acțiunea lui FL?",
      hint: "Lucrul = F·s·cosθ.",
      a: "FL ⊥ v, deci cos90° = 0 → lucrul e nul → Ec (și |v|) rămân constante.",
    },
    {
      id: "p1.3.2",
      level: 2,
      type: "calcul",
      q: "Proton: v = 5·10⁶ m/s, B = 0,04 T. Calculează FLmax. (qp = 1,6·10⁻¹⁹ C)",
      hint: "FLmax = qvB (α = 90°).",
      a: "FLmax = 1,6e-19 · 5e6 · 0,04 = 3,2·10⁻¹⁴ N.",
    },
    {
      id: "p1.3.3",
      level: 2,
      type: "calcul",
      q: "Aceeași situație, dar α = 60°. Cât e FL?",
      hint: "sin60° = √3/2 ≈ 0,866.",
      a: "FL = FLmax · sin60° ≈ 3,2e-14 · 0,866 ≈ 2,77·10⁻¹⁴ N.",
    },
    {
      id: "p1.3.4",
      level: 3,
      type: "calcul",
      q: "Electron cu Ec = 4,55·10⁻¹⁹ J intră ⊥ în B = 0,3 T. Găsește accelerația. (me = 9,1·10⁻³¹ kg, |qe| = 1,6·10⁻¹⁹ C)",
      hint: "v din Ec = mv²/2; a = FL/m = qvB/m.",
      a: "v = √(2Ec/m) = √(2·4,55e-19/9,1e-31) = 10⁶ m/s. a = qvB/m = 1,6e-19·1e6·0,3 / 9,1e-31 ≈ 5,27·10¹⁶ m/s².",
    },
  ],

  quiz: [
    {
      q: "Forța Lorentz modifică:",
      options: ["Doar |v|", "Doar direcția lui v", "Și |v|, și direcția", "Niciuna"],
      correct: 1,
    },
  ],
};

window.CONTENT["1.4"] = {
  id: "1.4",
  title: "Mișcarea particulelor încărcate în câmp magnetic",
  essence: "v ∥ B → rectiliniu uniform. v ⊥ B → cerc. Raza r = mv/(qB), perioada T = 2πm/(qB) (independentă de v!).",

  theory: [
    {
      title: "Cazuri esențiale",
      points: [
        "α = 0° sau 180°: FL = 0 → mișcare rectilinie uniformă de-a lungul lui B.",
        "α = 90°: cerc în plan ⊥ pe B.",
        "α oarecare: elice (helix) — componenta ∥ e liberă, cea ⊥ dă rotație.",
      ],
    },
    {
      title: "Aplicații pe care trebuie să le recunoști",
      points: [
        "Ciclotron: accelerare pe spirală; T trebuie = perioada tensiunii pe duanți.",
        "Spectrograf de masă: m = qBr/v; filtrul de viteză: v = E/B.",
      ],
    },
  ],

  formulas: [
    { name: "Raza cercului", latex: "r = mv / (qB)", note: "v ⊥ B" },
    { name: "Perioada", latex: "T = 2πm / (qB)", note: "nu depinde de v (dacă v ≪ c)" },
    { name: "Masa (spectrograf)", latex: "m = qBr / v", note: "" },
    { name: "Filtru de viteză", latex: "v = E / B", note: "când FL = Fe" },
  ],

  rules: [],

  checklist: [
    "Calculez r și T",
    "Explic de ce T nu depinde de v",
    "Știu condiția ciclotronului și a filtrului de viteză",
  ],

  problems: [
    {
      id: "p1.4.1",
      level: 1,
      type: "concept",
      q: "Poate o sarcină să se miște rectiliniu uniform într-un B omogen? Când?",
      hint: "FL = 0.",
      a: "Da, dacă v e paralelă (sau antiparalelă) cu B → sinα = 0 → FL = 0.",
    },
    {
      id: "p1.4.2",
      level: 2,
      type: "calcul",
      q: "Electron: v = 2·10⁶ m/s ⊥ pe B, r = 4,55 mm. Găsește B. (me = 9,1·10⁻³¹, |qe| = 1,6·10⁻¹⁹)",
      hint: "B = mv/(qr).",
      a: "B = 9,1e-31 · 2e6 / (1,6e-19 · 4,55e-3) = 0,0025 T = 2,5 mT.",
    },
    {
      id: "p1.4.3",
      level: 3,
      type: "calcul",
      q: "Ciclotron, B = 0,26 T. Care e raza minimă a duanților ca protonii să ajungă la Ec = 8·10⁻¹³ J? (mp = 1,67·10⁻²⁷ kg)",
      hint: "v = √(2Ec/m); r = mv/(qB); qp = 1,6·10⁻¹⁹ C.",
      a: "v = √(2·8e-13/1,67e-27) ≈ 3,1·10⁷ m/s. r = mv/(qB) ≈ 1,67e-27·3,1e7/(1,6e-19·0,26) ≈ 1,24 m.",
    },
  ],

  quiz: [
    {
      q: "Perioada de rotație în B omogen (v ≪ c) depinde de:",
      options: ["Doar de v", "m, q și B", "Doar de r", "Doar de Ec"],
      correct: 1,
    },
  ],
};

window.CONTENT["1.5"] = {
  id: "1.5",
  title: "Proprietățile magnetice ale substanței",
  essence: "μr arată de câte ori B în substanță e mai mare decât în vid. Dia: μr < 1, para: μr ≳ 1, fero: μr ≫ 1.",

  theory: [
    {
      title: "Clasificare rapidă",
      points: [
        "Ampère: curenți moleculari în atomi ≈ mici magneți.",
        "Paramagnetici (Imol ≠ 0): amplifică slab câmpul (μr > 1, aproape 1).",
        "Diamagnetici (Imol = 0 fără câmp exterior): slăbesc slab câmpul (μr < 1).",
        "Feromagnetici (Fe, Co, Ni, Gd): μr până la mii → miezuri, electromagneți.",
      ],
    },
    {
      title: "Aplicații",
      points: [
        "Electromagnet = bobină + miez feromagnetic.",
        "Magnet remanent = rămâne magnetizat fără câmp exterior (magneți permanenți).",
        "Aparatul magnetoelectric: cadru cu curent în câmpul unui magnet permanent.",
      ],
    },
  ],

  formulas: [
    { name: "Permeabilitate relativă", latex: "μ_r = B / B_0", note: "adimensională" },
  ],

  rules: [],

  checklist: [
    "Diferențiez dia / para / fero",
    "Știu sensul lui μr",
    "Explic rolul miezului feromagnetic",
  ],

  problems: [
    {
      id: "p1.5.1",
      level: 1,
      type: "concept",
      q: "Ce valori are μr pentru dia-, para- și feromagnetici?",
      hint: "Compară cu 1.",
      a: "Dia: μr < 1; para: μr > 1 (aproape de 1); fero: μr ≫ 1 (până la mii).",
    },
    {
      id: "p1.5.2",
      level: 2,
      type: "concept",
      q: "Ce proprietate trebuie să aibă miezul unui electromagnet de la un releu?",
      hint: "Vrei să „se stingă” magnetismul când tai curentul.",
      a: "Remanență mică: după întreruperea curentului, atracția magnetică trebuie să dispară.",
    },
  ],

  quiz: [
    {
      q: "Fierul este:",
      options: ["Diamagnetic", "Paramagnetic", "Feromagnetic", "Nemagnetic"],
      correct: 2,
    },
  ],
};

window.CONTENT["1.6"] = {
  id: "1.6",
  title: "Inducția electromagnetică",
  essence: "Flux magnetic variabil → t.e.m. indusă. εi = −ΔΦ/Δt (Faraday + Lenz). Aplicații: generator, microfon, cuptor de inducție.",

  theory: [
    {
      title: "Experimentul-cheie (Faraday, 1831)",
      points: [
        "Curent indus apare DOAR când fluxul prin circuit VARIAZĂ.",
        "Apropiere/îndepărtare magnet–bobină, închidere/deschidere circuit vecin, mișcare relativă.",
        "Curenți Foucault (turbionari) în mase metalice → încălzire (cuptoare de inducție).",
      ],
    },
    {
      title: "Fluxul magnetic",
      points: [
        "Φ = B S cosα (α = unghiul dintre B și normala la suprafață).",
        "Pentru N spire: Φ = N B S cosα.",
        "1 Wb = 1 T·m² = 1 V·s.",
      ],
    },
  ],

  formulas: [
    { name: "Flux", latex: "Φ = B S cos α", note: "" },
    { name: "Flux prin bobină", latex: "Φ = N B S cos α", note: "" },
    { name: "Legea lui Faraday", latex: "ε_i = − ΔΦ / Δt", note: "semnul „−” = Lenz" },
    { name: "Bară mobilă", latex: "ε_i = B ℓ v sin α", note: "" },
    { name: "Sarcină trecută", latex: "Δq = |ΔΦ| / R", note: "independent de timp!" },
  ],

  rules: [
    {
      name: "Regula lui Lenz",
      text: "Curentul indus are sensul care se OPUNE variației fluxului inductor.",
    },
    {
      name: "Regula mâinii drepte (conductor mobil)",
      text: "B intră în palmă; degetul mare = v; cele 4 degete = sensul curentului indus.",
    },
  ],

  checklist: [
    "Calculez Φ și εi",
    "Aplic Lenz fără greșeală",
    "Știu ε = Bℓv și Δq = |ΔΦ|/R",
  ],

  problems: [
    {
      id: "p1.6.1",
      level: 1,
      type: "calcul",
      q: "S = 100 cm², B = 0,6 T, unghiul dintre B și suprafață = 30°. Cât e Φ? (Atenție: α din formulă e cu normala!)",
      hint: "Dacă B face 30° cu suprafața, face 60° cu normala → cosα = cos60° = 0,5. Sau Φ = B·(proiecție).",
      a: "S = 0,01 m². Dacă α(B, normală) = 60°, Φ = 0,6·0,01·0,5 = 0,003 Wb. (În manual: unghi cu suprafața 30° → același rezultat.)",
    },
    {
      id: "p1.6.2",
      level: 2,
      type: "calcul",
      q: "Bobină pătrată a = 10 cm, lungime conductor l = 100 m, R = 10 Ω. B_vertical = 50 μT ⊥ pe plan. Ce sarcină trece la rotație până când liniile sunt paralele cu planul?",
      hint: "Δq = |ΔΦ|/R; N = l/(4a); Φ₁ = NBa², Φ₂ = 0.",
      a: "N = 100/(0,4) = 250; Φ₁ = 250·5e-5·0,01 = 1,25·10⁻⁴ Wb; Δq = 1,25e-4/10 = 1,25·10⁻⁵ C = 12,5 μC.",
    },
    {
      id: "p1.6.3",
      level: 3,
      type: "calcul",
      q: "Spiră S = 50 cm², C = 200 μF, B ⊥ pe plan, dB/dt = 1000 T/s. Sarcina pe condensator?",
      hint: "ε = S·dB/dt; Q = C·ε (aprox. pentru variație constantă).",
      a: "ε = 50e-4 · 1000 = 5 V; Q = Cε = 200e-6 · 5 = 1·10⁻³ C = 1 mC.",
    },
  ],

  quiz: [
    {
      q: "Semnul minus din legea lui Faraday exprimă:",
      options: ["Conservarea energiei / Lenz", "Unitățile SI", "Doar convenție inutilă", "Legea lui Ohm"],
      correct: 0,
    },
  ],
};

window.CONTENT["1.7"] = {
  id: "1.7",
  title: "Autoinducția. Inductanța circuitului",
  essence: "Curentul variabil dintr-o bobină își induce sieși o t.e.m.: εa = −L ΔI/Δt. L e „inerția” electrică a circuitului.",

  theory: [
    {
      title: "Imagine mentală",
      points: [
        "Autoinducția = cazul particular al inducției când Φ e creat de propriul curent.",
        "La închidere: εa se opune creșterii lui I (becul de pe ramura cu L întârzie).",
        "La deschidere: εa încearcă să mențină I (becul mai „clipocește”).",
        "Analogie: L ↔ masă (inerție); I ↔ viteză.",
      ],
    },
  ],

  formulas: [
    { name: "Definiția inductanței", latex: "L = Φ / I", note: "1 H = 1 Wb/A" },
    { name: "T.e.m. de autoinducție", latex: "ε_a = − L (ΔI/Δt)", note: "1 H = 1 V·s/A" },
  ],

  rules: [
    {
      name: "Lenz la autoinducție",
      text: "εa se opune ORICĂREI variații a curentului propriu (creștere sau scădere).",
    },
  ],

  checklist: [
    "Știu L = Φ/I și εa = −L ΔI/Δt",
    "Explic experimentul cu două becuri (L vs R)",
    "Recunosc unitatea henry",
  ],

  problems: [
    {
      id: "p1.7.1",
      level: 1,
      type: "concept",
      q: "De ce becul de pe ramura cu bobină se aprinde mai greu la închiderea circuitului?",
      hint: "εa se opune creșterii lui I.",
      a: "La creșterea lui I, εa are polaritate opusă sursei → frânează creșterea curentului → aprindere întârziată.",
    },
    {
      id: "p1.7.2",
      level: 2,
      type: "calcul",
      q: "L = 50 mH, I = 2 A → 0 în Δt = 1 ms. Cât e |εa|?",
      hint: "|εa| = L ΔI/Δt.",
      a: "|εa| = 0,05 · (2/0,001) = 100 V.",
    },
  ],

  quiz: [
    {
      q: "Inductanța se măsoară în:",
      options: ["Tesla", "Weber", "Henry", "Ohm"],
      correct: 2,
    },
  ],
};

window.CONTENT["1.8"] = {
  id: "1.8",
  title: "Energia câmpului magnetic",
  essence: "Bobina stochează energie în câmpul ei magnetic: Wm = LI²/2 — analog cu Ec = mv²/2.",

  theory: [
    {
      title: "De unde vine energia?",
      points: [
        "La închiderea circuitului, o parte din energia sursei creează câmpul B din bobină.",
        "La deschidere, energia e restituită (ex.: becul mai luminează scurt).",
        "Analogie perfectă: L ↔ m, I ↔ v → Wm ↔ Ec.",
      ],
    },
  ],

  formulas: [
    { name: "Energia magnetică", latex: "W_m = L I² / 2", note: "" },
    { name: "Forme echivalente", latex: "W_m = Φ I / 2 = Φ² / (2L)", note: "cu Φ = LI" },
  ],

  rules: [],

  checklist: [
    "Aplic Wm = LI²/2",
    "Explic analogia cu energia cinetică",
  ],

  problems: [
    {
      id: "p1.8.1",
      level: 1,
      type: "calcul",
      q: "L = 80 mH, I = 0,5 A. Cât e Wm?",
      hint: "Wm = LI²/2.",
      a: "Wm = 0,08 · 0,25 / 2 = 0,01 J = 10 mJ.",
    },
    {
      id: "p1.8.2",
      level: 2,
      type: "calcul",
      q: "L = 8 mH, Wm = 1 mJ. Găsește I și Φ.",
      hint: "I = √(2Wm/L); Φ = LI.",
      a: "I = √(2·0,001/0,008) = √0,25 = 0,5 A; Φ = 0,008·0,5 = 0,004 Wb.",
    },
  ],

  quiz: [
    {
      q: "Dacă I se dublează (L fix), energia Wm:",
      options: ["Se dublează", "Se împartrește", "Devine de 4 ori mai mare", "Rămâne la fel"],
      correct: 2,
    },
  ],
};
