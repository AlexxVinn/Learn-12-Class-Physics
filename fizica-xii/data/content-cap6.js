/**
 * Cap. 6 – Elemente de fizică a atomului (pag. ~91–101)
 */
window.CONTENT = window.CONTENT || {};

window.CONTENT["6.1"] = {
  id: "6.1",
  title: "Fenomene care arată structura compusă a atomului",
  essence: "Spectre de linii = amprentă a atomilor. Emisie/absorbție + legea Kirchhoff. Electronul (1897) → atomul are structură internă.",

  theory: [
    {
      title: "Spectre – tipuri",
      points: [
        "Spectroscop = dispersie prin prismă → vezi lungimile de undă.",
        "Emisie continuă: corpuri incandescente solide/lichide.",
        "Emisie de linii: atomi gazoși excitați (fiecare element = set unic de linii).",
        "Emisie de bandă: molecule.",
        "Absorbție: linii întunecate pe fond continuu (Fraunhofer la Soare).",
      ],
    },
    {
      title: "Legea lui Kirchhoff (inversia spectrului)",
      points: [
        "Un gaz absoarbe aceleași λ pe care le emite.",
        "Analiza spectrală → identifici elemente (ex.: heliu descoperit pe Soare).",
        "Raze catodice = electroni (Thomson, 1897) → electronul e în atom.",
      ],
    },
  ],

  formulas: [],

  rules: [
    {
      name: "Kirchhoff",
      text: "Emisie și absorbție ale aceluiași element: aceleași lungimi de undă.",
    },
  ],

  checklist: [
    "Diferențiez spectre continue / linii / bandă / absorbție",
    "Explic de ce spectre de linii ⇒ structură atomică",
  ],

  problems: [
    {
      id: "p6.1.1",
      level: 1,
      type: "concept",
      q: "De ce liniile Fraunhofer apar în spectrul Soarelui?",
      hint: "Atmosfera solară rece + emisie continuă din interior.",
      a: "Fotosphere emite continuu; gazele mai reci din atmosferă absorb anumite λ → linii întunecate pe fond continuu.",
    },
    {
      id: "p6.1.2",
      level: 1,
      type: "concept",
      q: "Ce e comun între spectrul de emisie și cel de absorbție al aceluiași element?",
      hint: "Kirchhoff.",
      a: "Aceleași lungimi de undă (linii în aceleași poziții).",
    },
  ],

  quiz: [
    {
      q: "Spectrele de linii sunt tipice pentru:",
      options: ["Solide incandescente", "Atomi gazoși excitați", "Orice lichid", "Doar molecule"],
      correct: 1,
    },
  ],
};

window.CONTENT["6.2"] = {
  id: "6.2",
  title: "Experimentul Rutherford. Modelul planetar",
  essence: "α pe foiță de Au: majoritatea trec; rareori θ≈180°. ⇒ nucleu mic, greu, +; electroni în jur. Model planetar — dar instabil clasic.",

  theory: [
    {
      title: "Ce a arătat experimentul",
      points: [
        "Thomson („puding cu stafide”) nu explica împrăștierea mare.",
        "Majoritatea α: θ mic. Puține: θ > 90°, chiar ~180°.",
        "Concluzie: masa și sarcina + concentrate în nucleu (~10⁻¹⁵ m).",
        "Atom ~10⁻¹⁰ m → nucleul e infim ca volum.",
        "Electronii orbitează (analogie cu Sistemul Solar).",
      ],
    },
    {
      title: "Probleme nerezolvate",
      points: [
        "Nu explică spectrele de linii.",
        "Conform Maxwell: electronul accelerat ar radia, pierde energie și cade pe nucleu în ~10⁻⁸ s — dar atomii sunt stabili!",
      ],
    },
  ],

  formulas: [],

  rules: [],

  checklist: [
    "Explic de ce împrăștierea la 180° cere nucleu",
    "Enunț contradicția cu electrodinamica clasică",
  ],

  problems: [
    {
      id: "p6.2.1",
      level: 1,
      type: "concept",
      q: "Pot electronii să devieze semnificativ particulele α? De ce?",
      hint: "Compară masele.",
      a: "Nu. mα ≈ 7300 me — electronul e prea ușor ca să schimbe traiectoria α ca o ciocnire frontală cu nucleul.",
    },
    {
      id: "p6.2.2",
      level: 2,
      type: "concept",
      q: "De ce modelul planetar e „imposibil” în fizica clasică?",
      hint: "Radiație a sarcinii accelerate.",
      a: "Electronul pe orbită are accelerație → ar emite EM, pierde energie și cade pe nucleu. Realitatea: atomii sunt stabili → trebuie cuantificare (Bohr).",
    },
  ],

  quiz: [
    {
      q: "Diametrul nucleului e de ordinul:",
      options: ["10⁻¹⁰ m", "10⁻¹⁵ m", "10⁻⁸ m", "1 mm"],
      correct: 1,
    },
  ],
};

window.CONTENT["6.3"] = {
  id: "6.3",
  title: "Modelul atomului după Bohr",
  essence: "Stări staționare (fără radiație) + hν = En−Em. Pentru H: orbite cuantificate, En∝−1/n², serii Lyman/Balmer/…",

  theory: [
    {
      title: "Postulatele",
      points: [
        "1) Atomul există doar în stări staționare En (n = 1,2,…) — nu radiază pe orbită.",
        "2) La tranziție: hν = |En − Em| (emisie dacă n→m cu En>Em; absorbție invers).",
        "n=1: stare fundamentală (stabilă); n>1: stări excitate.",
      ],
    },
    {
      title: "Hidrogen – rezultate de reținut",
      points: [
        "Cuantificare: me v r = n ħ (ħ = h/2π) ↔ orbită = n·λ_B.",
        "rn = n² r₁ (r₁ = raza Bohr).",
        "En = −13,6 eV / n² (aprox. 13,5 eV în manual).",
        "Eion = 13,6 eV pentru H.",
        "Serii: Lyman (→1, UV), Balmer (→2, vizibil), Paschen (→3, IR)…",
      ],
    },
  ],

  formulas: [
    { name: "Regula frecvențelor", latex: "hν = E_n − E_m", note: "" },
    { name: "Energii H", latex: "E_n = −13,6 eV / n²", note: "n = 1,2,3,…" },
    { name: "Balmer generalizat", latex: "ν = R (1/m² − 1/n²)", note: "n > m" },
    { name: "Rază orbită", latex: "r_n = n² r_1", note: "" },
  ],

  rules: [],

  checklist: [
    "Aplic hν = ΔE pe niveluri",
    "Calculez λ pentru o tranziție H",
    "Recunosc seriile spectrale",
  ],

  problems: [
    {
      id: "p6.3.1",
      level: 2,
      type: "calcul",
      q: "Atom trece din E = −1,51 eV în E = −3,40 eV. Găsește ν și λ ale fotonului emis.",
      hint: "ΔE = 1,89 eV; ν = ΔE/h; λ = c/ν. (1 eV = 1,6·10⁻¹⁹ J)",
      a: "ΔE = 1,89 eV = 3,024·10⁻¹⁹ J; ν = ΔE/h ≈ 4,56·10¹⁴ Hz; λ = c/ν ≈ 658 nm (roșu, Balmer Hα).",
    },
    {
      id: "p6.3.2",
      level: 2,
      type: "calcul",
      q: "Tranziție n=4 → m=2 în H. Frecvența și λ?",
      hint: "ν = R(1/4 − 1/16); R ≈ 3,29·10¹⁵ s⁻¹.",
      a: "1/4 − 1/16 = 3/16; ν = R·3/16 ≈ 6,17·10¹⁴ Hz; λ ≈ 486 nm ( Balmer Hβ, albastru-verde).",
    },
    {
      id: "p6.3.3",
      level: 1,
      type: "concept",
      q: "De ce teoria lui Bohr e „semicuantică”?",
      hint: "Amestecă clasic + cuantă.",
      a: "Folosește orbite clasice + forța Coulomb, dar impune cuantificare. Nu explică intensitățile liniilor nici atomii cu mai mulți electroni → mecanica cuantică modernă o înlocuiește.",
    },
  ],

  quiz: [
    {
      q: "Seria Balmer corespunde tranzițiilor spre:",
      options: ["n=1", "n=2", "n=3", "n=∞"],
      correct: 1,
    },
  ],
};

window.CONTENT["6.4"] = {
  id: "6.4",
  title: "Emisia stimulată. Laserul",
  essence: "Fotonul „clonă”: același ν, fază, direcție. Inversie de populație + rezonator → fascicul monocromatic, coerent, direcțional, intens.",

  theory: [
    {
      title: "Trei procese",
      points: [
        "Absorbție: E1 + hν → E2.",
        "Emisie spontană: E2 → E1 + foton (haotic, necoerent).",
        "Emisie stimulată (Einstein, 1917): foton incident pe atom excitat → încă un foton identic.",
      ],
    },
    {
      title: "Laser cu rubin – schemă",
      points: [
        "3 niveluri: E1 (fund.), E2 (metastabilă), E3 (pompaj).",
        "Pompaj optic (lampă Xe) → E3 → relaxare la E2 (metastabilă, viață ~ms).",
        "Inversie de populație pe E2 → avalanșă stimulată.",
        "Rezonator: oglindă + oglindă semitransparentă.",
        "Proprietăți: monocromatic, coerent, direcțional, intensitate enormă.",
      ],
    },
  ],

  formulas: [
    { name: "Fotonul de lucru", latex: "hν_{21} = E_2 − E_1", note: "" },
  ],

  rules: [],

  checklist: [
    "Diferențiez emisie spontană / stimulată",
    "Explic rolul stării metastabile și al rezonatorului",
  ],

  problems: [
    {
      id: "p6.4.1",
      level: 1,
      type: "concept",
      q: "De ce e importantă starea metastabilă pentru laser?",
      hint: "Timp de viață.",
      a: "Ține atomii excitați destul (~10⁻³ s vs 10⁻⁸ s) ca să se acumuleze inversia de populație și emisia stimulată să domine.",
    },
    {
      id: "p6.4.2",
      level: 2,
      type: "concept",
      q: "Ce proprietate a laserului e esențială în geodezie / măsurarea distanțelor?",
      hint: "Paralelism.",
      a: "Direcționalitatea (fascicul foarte paralel) → spot mic pe distanțe mari, măsurători precise.",
    },
  ],

  quiz: [
    {
      q: "Emisia stimulată produce fotoni:",
      options: ["Cu faze aleatoare", "Identici cu cel incident", "Doar UV", "Cu m₀ ≠ 0"],
      correct: 1,
    },
  ],
};
