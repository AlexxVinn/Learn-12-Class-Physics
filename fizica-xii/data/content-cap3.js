/**
 * Conținut Cap. 3 – Oscilații și unde electromagnetice (+ optică ondulatorie)
 * Pagini ~42–68 din manual
 */
window.CONTENT = window.CONTENT || {};

window.CONTENT["3.1"] = {
  id: "3.1",
  title: "Oscilații electromagnetice",
  essence: "Circuit LC = pendul electromagnetic. Energia oscilează între C (electric) și L (magnetic). T = 2π√(LC) — Thomson.",

  theory: [
    {
      title: "Circuitul oscilant ideal (în 60 s)",
      points: [
        "Circuit oscilant = condensator C + bobină L (R ≈ 0).",
        "La t=0: C încărcat → energia e în câmpul electric q²/(2C).",
        "C se descarcă → I crește în L → energia trece în LI²/2.",
        "La T/2: C reîncărcat cu polaritate opusă. Apoi se repetă.",
        "q, u, i variază armonic (sin/cos).",
      ],
    },
    {
      title: "Analogia mecanică (memorizează!)",
      points: [
        "x ↔ q | v ↔ i | m ↔ L | k ↔ 1/C",
        "Ep = kx²/2 ↔ We = q²/(2C)",
        "Ec = mv²/2 ↔ Wm = Li²/2",
      ],
    },
    {
      title: "Amortizate vs. forțate",
      points: [
        "Real: există R → energie se pierde (Joule) → oscilații amortizate.",
        "Forțate: alimentezi periodic din exterior → amplitudine constantă, frecvența = a sursei.",
      ],
    },
  ],

  formulas: [
    { name: "Conservarea energiei (ideal)", latex: "q_m²/(2C) = L I_m²/2 = q²/(2C) + L i²/2", note: "" },
    { name: "Pulsație proprie", latex: "ω = 1/√(LC)", note: "" },
    { name: "Formula lui Thomson", latex: "T = 2π√(LC)", note: "ν = 1/T = 1/(2π√(LC))" },
  ],

  rules: [],

  checklist: [
    "Descriu ciclul energetic C↔L pe o perioadă",
    "Aplic T = 2π√(LC)",
    "Diferențiez oscilații proprii / amortizate / forțate",
  ],

  problems: [
    {
      id: "p3.1.1",
      level: 1,
      type: "calcul",
      q: "i = 0,1 sin(100π t) A, L = 10 H. Găsește T, C și energiile maxime We = Wm.",
      hint: "ω = 100π → ν = 50 Hz; C = 1/(ω²L); Wm = LI_m²/2.",
      a: "T = 0,02 s; C = 1/( (100π)² · 10 ) ≈ 1 μF; Wm = We = 0,05 J.",
    },
    {
      id: "p3.1.2",
      level: 2,
      type: "calcul",
      q: "L = 10 mH, T = 4 ms. Cât e C?",
      hint: "C = T²/(4π²L).",
      a: "C = (0,004)² / (4π² · 0,01) ≈ 40,5 μF.",
    },
    {
      id: "p3.1.3",
      level: 2,
      type: "concept",
      q: "L se înlocuiește cu una de 16 ori mai mare. Cum se schimbă ν?",
      hint: "ν ~ 1/√L.",
      a: "ν' = ν/4 (scade de 4 ori).",
    },
  ],

  quiz: [
    {
      q: "Formula lui Thomson este:",
      options: ["T = 2π√(LC)", "T = 2π√(L/C)", "T = 2π L C", "ν = 2π√(LC)"],
      correct: 0,
    },
  ],
};

window.CONTENT["3.2"] = {
  id: "3.2",
  title: "Câmpul electromagnetic",
  essence: "Maxwell: B variabil → E turbionar; E variabil → B turbionar. Împreună = câmp electromagnetic unic.",

  theory: [
    {
      title: "Cele 2 ipoteze (tot ce trebuie)",
      points: [
        "Orice câmp magnetic VARIABIL generează câmp electric TURBIONAR (linii închise).",
        "Orice câmp electric VARIABIL generează câmp magnetic TURBIONAR.",
        "Ele nu pot fi separate când variază → formează câmpul electromagnetic.",
        "E și B variază simultan în plane reciproc perpendiculare.",
        "Câmpurile staționare E sau B sunt cazuri particulare.",
      ],
    },
  ],

  formulas: [],

  rules: [
    {
      name: "Sensuri",
      text: "Sensul lui E indus de ΔB → regula lui Lenz. Sensul lui B indus de ΔE → regula burghiului.",
    },
  ],

  checklist: [
    "Enunț cele 2 ipoteze Maxwell",
    "Explic de ce E și B variabile sunt inseparabile",
  ],

  problems: [
    {
      id: "p3.2.1",
      level: 1,
      type: "concept",
      q: "De ce între armăturile unui condensator în CA există și câmp magnetic?",
      hint: "A doua ipoteză Maxwell.",
      a: "Câmpul electric dintre armături variază → generează câmp magnetic turbionar (chiar fără curent de conducție acolo).",
    },
    {
      id: "p3.2.2",
      level: 2,
      type: "concept",
      q: "Ce legătură există între inducția electromagnetică și prima ipoteză Maxwell?",
      hint: "Faraday → generalizare.",
      a: "Faraday: ΔB → curent indus (deci E în fir). Maxwell: ΔB creează E turbionar CHIAR FĂRĂ fir.",
    },
  ],

  quiz: [
    {
      q: "Câmpul electromagnetic este caracterizat de:",
      options: ["Doar E", "Doar B", "E și B variabili, inseparabili", "Doar potențial electric"],
      correct: 2,
    },
  ],
};

window.CONTENT["3.3"] = {
  id: "3.3",
  title: "Undele electromagnetice",
  essence: "Perturbația EM se propagă: E ⊥ B ⊥ v. În vid υ = c. λ = c/ν. Hertz a confirmat experimental (1888).",

  theory: [
    {
      title: "Proprietăți-cheie",
      points: [
        "Unde transversale: E ⊥ B și ambele ⊥ pe direcția de propagare.",
        "Sensul propagării: burghiu de la E spre B.",
        "În vid: υ = c ≈ 3·10⁸ m/s → Maxwell: lumina e undă EM!",
        "Transportă energie.",
        "Circuit închis LC: câmpurile sunt localizate. Dipol/antenă = circuit DESCHIS → radiază.",
      ],
    },
  ],

  formulas: [
    { name: "Viteza în mediu", latex: "υ = c / √(ε_r μ_r)", note: "c = 1/√(ε₀μ₀)" },
    { name: "Lungime de undă", latex: "λ = υ T = υ / ν", note: "în aer/vid: λ = c/ν" },
  ],

  rules: [],

  checklist: [
    "Știu λ = c/ν",
    "Explic de ce dipolul radiază, iar LC închis nu",
    "Descriu pe scurt experiența Hertz",
  ],

  problems: [
    {
      id: "p3.3.1",
      level: 2,
      type: "calcul",
      q: "Dipol: C = 5 nF, L = 0,2 mH. Ce λ emite (în aer)?",
      hint: "ν = 1/(2π√(LC)); λ = c/ν.",
      a: "√(LC) = √(5e-9·2e-4) = √1e-12 = 1e-6; T = 2π·1e-6; ν ≈ 1,59·10⁵ Hz; λ = c/ν ≈ 1,89 km.",
    },
  ],

  quiz: [
    {
      q: "Undele EM sunt:",
      options: ["Longitudinale", "Transversale", "Doar în conductoare", "Staționare mereu"],
      correct: 1,
    },
  ],
};

window.CONTENT["3.4"] = {
  id: "3.4",
  title: "Clasificarea undelor electromagnetice",
  essence: "Același tip de undă, diapazoane diferite: radio → microonde → IR → vizibil → UV → X → γ.",

  theory: [
    {
      title: "Spectrul (de la λ lungi la scurte)",
      points: [
        "Unde radio / TV – comunicații, radiolocație.",
        "Microonde – radar, cuptoare, telecomunicații.",
        "Infraroșu (IR) – căldură, termografie, telecomenzi.",
        "Vizibil – ~380–760 nm (violet → roșu).",
        "Ultraviolet (UV) – bronz, sterilizare; poate dăuna.",
        "Raze X – radiografie; γ – nuclee, medicină, foarte penetrante.",
      ],
    },
  ],

  formulas: [
    { name: "Legătură universală", latex: "λ · ν = c", note: "în vid/aer" },
  ],

  rules: [],

  checklist: [
    "Ordinez spectrul EM după frecvență",
    "Asociez fiecare domeniu cu o aplicație",
  ],

  problems: [
    {
      id: "p3.4.1",
      level: 1,
      type: "calcul",
      q: "Lumină verde λ = 550 nm. Ce frecvență are?",
      hint: "ν = c/λ.",
      a: "ν = 3e8 / 5,5e-7 ≈ 5,45·10¹⁴ Hz.",
    },
    {
      id: "p3.4.2",
      level: 1,
      type: "concept",
      q: "De ce IR e util în medicină (termograf)?",
      hint: "Intensitate ↔ temperatură.",
      a: "Țesuturile mai calde (bolnave) emit mai intens IR → pot fi localizate.",
    },
  ],

  quiz: [
    {
      q: "Cea mai mare frecvență o au, tipic:",
      options: ["Undele radio", "IR", "Vizibilul", "Razele γ"],
      correct: 3,
    },
  ],
};

window.CONTENT["3.5"] = {
  id: "3.5",
  title: "Comunicații prin unde electromagnetice",
  essence: "Emisie: oscilații HF modulate cu semnal. Recepție: acordare (rezonanță) + demodulare. Radar: ecou EM → distanță.",

  theory: [
    {
      title: "Radiocomunicație – pașii",
      points: [
        "Generator HF + modulator (voce/imagine pe purtătoare).",
        "Antenă de emisie → unde EM.",
        "Antenă de recepție + circuit acordat (rezonanță pe stația dorită).",
        "Demodulare/detecție → semnal de joasă frecvență → difuzor/ecran.",
      ],
    },
    {
      title: "Radiolocație (radar)",
      points: [
        "Trimite impulsuri scurte; măsoară timpul dus-întors Δt.",
        "Distanța: r = c·Δt / 2.",
        "Aplicații: aviație, marină, meteorologie, viteză auto.",
      ],
    },
  ],

  formulas: [
    { name: "Distanță radar", latex: "r = c Δt / 2", note: "" },
  ],

  rules: [],

  checklist: [
    "Explic lanțul emisie–recepție",
    "Calculez distanța cu radarul",
  ],

  problems: [
    {
      id: "p3.5.1",
      level: 2,
      type: "calcul",
      q: "Radar: ecoul revine după Δt = 200 μs. La ce distanță e ținta?",
      hint: "r = cΔt/2.",
      a: "r = 3e8 · 2e-4 / 2 = 30 km.",
    },
  ],

  quiz: [
    {
      q: "Demodularea înseamnă:",
      options: ["Creșterea frecvenței", "Extracția semnalului util din unda modulată", "Doar amplificare", "Emisia undei"],
      correct: 1,
    },
  ],
};

window.CONTENT["3.6"] = {
  id: "3.6",
  title: "Evoluția concepțiilor despre natura luminii",
  essence: "Corpusculară (Newton) vs. ondulatorie (Huygens/Young/Fresnel) → Maxwell: lumină = undă EM. Apoi dualismul undă–corpuscul.",

  theory: [
    {
      title: "Firul istoric (rapid)",
      points: [
        "Newton: lumină = particule.",
        "Huygens: lumină = undă.",
        "Young & Fresnel: interferență/difracție → undă.",
        "Maxwell: lumină = undă electromagnetică.",
        "Sec. XX: și fotoni → dualism (vezi Cap. 5).",
      ],
    },
  ],

  formulas: [],
  rules: [],
  checklist: ["Asociez fiecare etapă cu un argument experimental"],
  problems: [
    {
      id: "p3.6.1",
      level: 1,
      type: "concept",
      q: "Ce experiment a înclinat balanța spre teoria ondulatorie la începutul sec. XIX?",
      hint: "Young.",
      a: "Interferența luminii (dispozitivul Young) — explicabilă doar ondulatoriu.",
    },
  ],
  quiz: [
    {
      q: "Maxwell a concluzionat că lumina este:",
      options: ["Flux de atomi", "Undă EM", "Doar căldură", "Curent electric"],
      correct: 1,
    },
  ],
};

window.CONTENT["3.7"] = {
  id: "3.7",
  title: "Interferența luminii",
  essence: "Unde coerente → maxime/minime. Cond: Δ = mλ (max), Δ = (2m+1)λ/2 (min). Young: i = λD/d.",

  theory: [
    {
      title: "Condiții",
      points: [
        "Coerență: aceeași ν + diferență de fază constantă.",
        "La lumină: împarte fasciculul de la ACEEAȘI sursă (nu două becuri!).",
        "Drum optic: L = n·x. Contează diferența de drum optic Δ.",
        "Reflexie pe mediu mai dens optic → salt de fază π (echivalent λ/2).",
      ],
    },
    {
      title: "Dispozitive",
      points: [
        "Young: 2 fante → franje nelocalizate; interfranjă i = λD/d.",
        "Lamă plan-paralelă / pană: franje de egală înclinare / grosime.",
        "Inelele lui Newton: lentilă pe sticlă → inele; rm² ≈ mλR (în reflexie, cu atenție la λ/2).",
        "Aplicații: măsurători precise, straturi antireflex.",
      ],
    },
  ],

  formulas: [
    { name: "Maxim", latex: "Δ = m λ", note: "m = 0,1,2,…" },
    { name: "Minim", latex: "Δ = (2m+1) λ/2", note: "" },
    { name: "Young – poziție maxim", latex: "y_m = m λ D / d", note: "" },
    { name: "Interfranjă", latex: "i = λ D / d", note: "λ = i d / D" },
  ],

  rules: [
    {
      name: "Salt de fază",
      text: "La reflexie pe mediu optic mai dens se adaugă λ/2 la diferența de drum.",
    },
  ],

  checklist: [
    "Scriu condițiile de max/min",
    "Calculez interfranja Young",
    "Explic de ce trebuie aceeași sursă",
  ],

  problems: [
    {
      id: "p3.7.1",
      level: 2,
      type: "calcul",
      q: "Young, λ = 0,6 μm. Se introduce o lamă care mută tabloul cu 4,5 franje. Ce Δ optic a introdus lama?",
      hint: "Δ = Δm · λ.",
      a: "Δ = 4,5 · 0,6 μm = 2,7 μm.",
    },
    {
      id: "p3.7.2",
      level: 2,
      type: "calcul",
      q: "Young: d = 0,5 mm, D = 1,2 m, i = 1,2 mm. Găsește λ.",
      hint: "λ = i d / D.",
      a: "λ = 1,2e-3 · 0,5e-3 / 1,2 = 5·10⁻⁷ m = 500 nm.",
    },
    {
      id: "p3.7.3",
      level: 3,
      type: "calcul",
      q: "Inele Newton (reflexie), λ = 0,5 μm, r₂ = 2 mm (inel luminos). Estimează R (raza de curbură) folosind r_m² ≈ m λ R (ajustat pentru tipul de inel).",
      hint: "Pentru inele luminoase în reflexie, ordinea e legată de (m+1/2); folosește forma din manual r² = mλR pentru minime/maxime conform convenției.",
      a: "Cu r² = mλR și m=2: R = r²/(mλ) = (4e-6)/(2·5e-7) = 4 m. (Verifică în problemă tipul exact de inel!)",
    },
  ],

  quiz: [
    {
      q: "Interfranja crește dacă:",
      options: ["d crește", "D scade", "λ crește", "Intensitatea crește"],
      correct: 2,
    },
  ],
};

window.CONTENT["3.8"] = {
  id: "3.8",
  title: "Difracția luminii",
  essence: "Ocolirea obstacolelor + interferența undelor secundare. Rețea: d sinφ = mλ.",

  theory: [
    {
      title: "Ideea",
      points: [
        "Difracție = abatere de la propagarea rectilinie la obstacole/fante comparabile cu λ.",
        "Huygens–Fresnel: fiecare punct al frontului = sursă secundară; ele interferează.",
        "Rețeaua de difracție: multe fante egale → maxime ascuțite, spectre clare.",
        "Perioada rețelei d = a + b; N = 1/d (trăsături/m).",
      ],
    },
  ],

  formulas: [
    { name: "Formula rețelei", latex: "d sin φ = m λ", note: "maxime principale, incidență normală" },
    { name: "Pentru unghiuri mici", latex: "λ ≈ d · (l / L)", note: "lucrare de laborator" },
  ],

  rules: [],

  checklist: [
    "Aplic d sinφ = mλ",
    "Explic de ce rețeaua dă maxime mai nete decât o fantă",
  ],

  problems: [
    {
      id: "p3.8.1",
      level: 2,
      type: "calcul",
      q: "Rețea cu 100 trăsături/mm, λ = 0,6 μm, maximul de ordinul 1. Găsește φ.",
      hint: "d = 1/N = 10⁻⁵ m; sinφ = λ/d.",
      a: "sinφ = 0,6·10⁻⁶ / 10⁻⁵ = 0,06 → φ ≈ 3,4°.",
    },
    {
      id: "p3.8.2",
      level: 2,
      type: "calcul",
      q: "Aceeași rețea: care e ordinul maxim posibil m_max? Câte maxime principale vezi în total?",
      hint: "sinφ ≤ 1 ⇒ m ≤ d/λ; total ≈ 2 m_max + 1.",
      a: "m_max = floor(10⁻⁵ / 0,6·10⁻⁶) = floor(16,67) = 16. Total ≈ 2·16 + 1 = 33 maxime.",
    },
  ],

  quiz: [
    {
      q: "Formula rețelei de difracție (maxime):",
      options: ["d sinφ = mλ", "d cosφ = mλ", "d = mλ sinφ", "λ = m d φ"],
      correct: 0,
    },
  ],
};

window.CONTENT["3.9"] = {
  id: "3.9",
  title: "Polarizarea luminii",
  essence: "Lumina naturală: E oscilează haotic în planul ⊥ pe v. Polarizată: E are direcție preferată. Dovedește transversalitatea.",

  theory: [
    {
      title: "Ce trebuie să reții",
      points: [
        "Plan de polarizare = planul oscilațiilor vectorului E (convenție uzuală în manual).",
        "Polarizator + analizor: când axele ⊥ → intensitate minimă (idee: lege Malus I = I₀ cos²α).",
        "Polarizare prin reflexie (Brewster) – lumină parțial/total polarizată.",
        "Interferența/difracția arată caracter ondulatoriu; polarizarea arată că unda e TRANSVERSALĂ.",
      ],
    },
  ],

  formulas: [
    { name: "Grad de polarizare (idee)", latex: "P = (I_max − I_min)/(I_max + I_min)", note: "P=1 → polarizare totală" },
  ],

  rules: [],

  checklist: [
    "Explic ce e lumină polarizată",
    "Leg polarizarea de transversalitatea undelor",
  ],

  problems: [
    {
      id: "p3.9.1",
      level: 1,
      type: "concept",
      q: "De ce polarizarea dovedește că undele de lumină sunt transversale?",
      hint: "Undele longitudinale n-au direcție de vibrație de „filtrat”.",
      a: "Doar undele transversale au o direcție de vibrație care poate fi selectată de polarizator. Longitudinalele ar trece la fel indiferent de orientare.",
    },
  ],

  quiz: [
    {
      q: "Polarizarea luminii demonstrează în special:",
      options: ["Că e corpuscul", "Că unda e transversală", "Că ν e mică", "Că nu există fotoni"],
      correct: 1,
    },
  ],
};

window.CONTENT["3.10"] = {
  id: "3.10",
  title: "Împrăștierea luminii",
  essence: "Particulele mediului reemit lumină în toate direcțiile. Cerul albastru: împrăștiere mai puternică la λ scurte (~1/λ⁴, Rayleigh).",

  theory: [
    {
      title: "Pe scurt",
      points: [
        "Lumina face să oscileze sarcinile din molecule → centre de unde secundare.",
        "Împrăștierea Rayleigh: intensitate ~ 1/λ⁴ → violet/albastru se împrăștie mai tare.",
        "De aceea cerul e albastru; la apus vedem roșu (albastrul s-a pierdut pe drum).",
      ],
    },
  ],

  formulas: [
    { name: "Rayleigh (idee)", latex: "I ∼ 1/λ⁴", note: "pentru particule ≪ λ" },
  ],

  rules: [],

  checklist: ["Explic culoarea cerului cu împrăștierea"],

  problems: [
    {
      id: "p3.10.1",
      level: 1,
      type: "concept",
      q: "De ce apusul e roșiatic?",
      hint: "Drumul prin atmosferă e mai lung.",
      a: "Componenta albastră se împrăștie pe drumul lung; rămâne predominant roșu-oranj care ajunge la ochi.",
    },
  ],

  quiz: [
    {
      q: "Împrăștierea Rayleigh e mai intensă pentru:",
      options: ["Roșu", "Verde", "Albastru/violet", "IR"],
      correct: 2,
    },
  ],
};
