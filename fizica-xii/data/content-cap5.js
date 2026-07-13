/**
 * Conținut Cap. 5 – Elemente de fizică cuantică (pag. ~79–90)
 */
window.CONTENT = window.CONTENT || {};

window.CONTENT["5.1"] = {
  id: "5.1",
  title: "Radiația termică. Ipoteza cuantelor",
  essence: "Corpurile emit/absorb energie în porțiuni discrete: ε = hν (Planck, 1900). Nașterea fizicii cuantice.",

  theory: [
    {
      title: "Radiație termică",
      points: [
        "Emisie datorită agitației termice; diapazonul și intensitatea cresc cu T.",
        "Corp absolut negru = absoarbe tot ce cade pe el (idealizare).",
        "Legea Kirchhoff: bun radiator ↔ bun absorbant (la echilibru).",
        "Densitatea spectrală rv(ν,T) are un maxim (curba experimentală).",
      ],
    },
    {
      title: "Ipoteza lui Planck",
      points: [
        "Energia NU se emite/absoarbe continuu, ci în cuante.",
        "ε = hν, h = 6,625·10⁻³⁴ J·s.",
        "14 decembrie 1900 = „ziua de naștere” a fizicii cuantice.",
      ],
    },
  ],

  formulas: [
    { name: "Cuanta de energie", latex: "ε = h ν", note: "h ≈ 6,63·10⁻³⁴ J·s" },
    { name: "Prin lungime de undă", latex: "ε = h c / λ", note: "" },
  ],

  rules: [],

  checklist: [
    "Știu ε = hν",
    "Explic ce e corp absolut negru",
  ],

  problems: [
    {
      id: "p5.1.1",
      level: 1,
      type: "calcul",
      q: "λ = 693 nm. Energia cuantei?",
      hint: "ε = hc/λ.",
      a: "ε = 6,63e-34 · 3e8 / 6,93e-7 ≈ 2,87·10⁻¹⁹ J ≈ 1,79 eV.",
    },
    {
      id: "p5.1.2",
      level: 2,
      type: "concept",
      q: "De ce formula clasică eșuează la frecvențe mari (catastrofa ultravioletă)?",
      hint: "Curba 2 vs. curba experimentală.",
      a: "Fizica clasică prezice emisie excesivă la ν mari; Planck, cu ε=hν, taie această catastrofă — cuantele UV sunt scumpe energetic.",
    },
  ],

  quiz: [
    {
      q: "Constanta lui Planck are unitatea:",
      options: ["J", "J/s", "J·s", "eV"],
      correct: 2,
    },
  ],
};

window.CONTENT["5.2"] = {
  id: "5.2",
  title: "Efectul fotoelectric extern",
  essence: "Lumina smulge electroni. Einstein: hν = Le + Ec,max. Există prag ν₀. Explică legile pe care clasicul nu le poate.",

  theory: [
    {
      title: "Legile (învață-le pe dinafară)",
      points: [
        "1) Is ~ Φ (flux) la ν constant — mai mulți fotoni → mai mulți electroni.",
        "2) Ec,max depinde liniar de ν, NU de Φ.",
        "3) Există prag ν₀ (prag roșu): sub ν₀ → zero efect.",
        "4) Fără inerție: electronul pleacă imediat.",
      ],
    },
    {
      title: "Fotonul",
      points: [
        "ε = hν, υ = c, m₀ = 0, q = 0, p = h/λ = hν/c.",
        "Un foton absorbit de un electron → toată energia deodată.",
      ],
    },
    {
      title: "Aplicații",
      points: [
        "Celule cu vid / cu gaz, fotorezistoare (efect intern), celule fotovoltaice / baterii solare.",
      ],
    },
  ],

  formulas: [
    { name: "Ecuația lui Einstein", latex: "hν = L_e + E_{c,max}", note: "E_{c,max} = e U_f" },
    { name: "Prag roșu", latex: "ν_0 = L_e / h", note: "λ_0 = h c / L_e" },
    { name: "Energie foton", latex: "ε = hν = hc/λ", note: "" },
    { name: "Impuls foton", latex: "p = h/λ = hν/c", note: "" },
  ],

  rules: [],

  checklist: [
    "Scriu cele 4 legi",
    "Rezolv probleme cu hν = Le + Ec",
    "Calculez pragul roșu",
  ],

  problems: [
    {
      id: "p5.2.1",
      level: 1,
      type: "calcul",
      q: "Lumină verde λ = 550 nm. Energia fotonului?",
      hint: "ε = hc/λ.",
      a: "ε ≈ 3,61·10⁻¹⁹ J ≈ 2,25 eV.",
    },
    {
      id: "p5.2.2",
      level: 2,
      type: "calcul",
      q: "Potasiu, ν = 6,3·10¹⁴ Hz, Le = 2,2 eV. Ec,max?",
      hint: "Ec = hν − Le (convertește unitățile!).",
      a: "hν = 6,63e-34·6,3e14 / 1,6e-19 ≈ 2,61 eV; Ec,max ≈ 2,61 − 2,2 = 0,41 eV.",
    },
    {
      id: "p5.2.3",
      level: 2,
      type: "calcul",
      q: "λ = 0,475 μm, λ₀ = 0,566 μm. Viteza maximă a fotoelectronilor?",
      hint: "Ec = hc(1/λ − 1/λ₀) = mv²/2.",
      a: "1/λ − 1/λ₀ ≈ 2,105e6 − 1,767e6 = 3,38e5 m⁻¹; Ec = 6,63e-34·3e8·3,38e5 ≈ 6,7e-20 J; v = √(2Ec/m) ≈ 3,8·10⁵ m/s.",
    },
    {
      id: "p5.2.4",
      level: 2,
      type: "calcul",
      q: "Argint, Le ≈ 4,3 eV. Care e λ₀ (prag roșu)?",
      hint: "λ₀ = hc/Le.",
      a: "λ₀ = 6,63e-34·3e8 / (4,3·1,6e-19) ≈ 2,89·10⁻⁷ m ≈ 289 nm (UV).",
    },
  ],

  quiz: [
    {
      q: "Dacă mărești doar intensitatea (Φ) la ν > ν₀:",
      options: ["Crește Ec,max", "Crește Is", "Scade ν₀", "Dispare efectul"],
      correct: 1,
    },
  ],
};

window.CONTENT["5.3"] = {
  id: "5.3",
  title: "Presiunea luminii",
  essence: "Lumina apasă: p = (1+R)w. Oglindă (R=1) → presiune dublă față de negru (R=0). Maxwell + Lebedev + fotoni.",

  theory: [
    {
      title: "Două explicații, același rezultat",
      points: [
        "Ondulatoriu (Maxwell): E face curent în suprafață; B apasă cu Fm spre interior.",
        "Corpuscular: fotonii transferă impuls; la reflexie Δp e ~2× față de absorbție.",
        "Lebedev (1900): măsurare experimentală pe aripioare negre/strălucitoare.",
        "Concluzie mare: lumina e duală — unele fenomene cer undă, altele foton.",
      ],
    },
  ],

  formulas: [
    { name: "Presiunea luminii", latex: "p = (1 + R) w", note: "w = densitate volumică de energie" },
  ],

  rules: [],

  checklist: [
    "Explic p pe negru vs. oglindă",
    "Leg presiunea de dualismul luminii",
  ],

  problems: [
    {
      id: "p5.3.1",
      level: 1,
      type: "concept",
      q: "De ce aripioarele strălucitoare primesc presiune ~2× față de cele negre?",
      hint: "R și Δp al fotonului.",
      a: "La reflexie, variația impulsului fotonului e ~2p; la absorbție e doar p. Echivalent: p = (1+R)w cu R≈1 vs R≈0.",
    },
  ],

  quiz: [
    {
      q: "Pentru corpul absolut negru, presiunea luminii este:",
      options: ["2w", "w", "0", "w/2"],
      correct: 1,
    },
  ],
};

window.CONTENT["5.4"] = {
  id: "5.4",
  title: "Dualism undă–corpuscul. Unde de Broglie",
  essence: "Nu doar lumina: și microparticulele au proprietăți de undă. λ_B = h/p. Difracția electronilor o confirmă.",

  theory: [
    {
      title: "Ideea lui de Broglie",
      points: [
        "Orice particulă cu impuls p are o undă asociată: λ = h/p.",
        "Electroni accelerați (~100 V) → λ ~ 0,1 nm → difracție pe cristale.",
        "Microscopul electronic: rezoluție mult mai bună decât cel optic (λ mică).",
        "Dualismul e general: undă ↔ corpuscul, după experiment.",
      ],
    },
  ],

  formulas: [
    { name: "de Broglie", latex: "λ = h / p = h / (mv)", note: "non-relativist" },
    { name: "Electron accelerat (idee)", latex: "λ = h / √(2 m e U)", note: "din eU = mv²/2" },
  ],

  rules: [],

  checklist: [
    "Calculez λ_B pentru un electron",
    "Explic de ce microscopul electronic „vede” mai fin",
  ],

  problems: [
    {
      id: "p5.4.1",
      level: 2,
      type: "calcul",
      q: "Electron accelerat la U = 100 V. Estimează λ_B.",
      hint: "λ = h/√(2meU). Manualul dă ≈ 1,2·10⁻¹⁰ m.",
      a: "λ_B ≈ 1,2·10⁻¹⁰ m (de ~5000 ori mai mică decât lumina vizibilă).",
    },
    {
      id: "p5.4.2",
      level: 1,
      type: "concept",
      q: "Ce experiment dovedește natura ondulatorie a electronilor?",
      hint: "Difracție.",
      a: "Difracția electronilor pe cristale / rețele atomice (Davisson–Germer și altele) — maxime tipice undelor.",
    },
  ],

  quiz: [
    {
      q: "Lungimea de undă de Broglie este:",
      options: ["λ = hν", "λ = h/p", "λ = p/h", "λ = mc²"],
      correct: 1,
    },
  ],
};
