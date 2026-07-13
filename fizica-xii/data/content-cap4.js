/**
 * Conținut Cap. 4 – Relativitate restrânsă (pag. ~69–78)
 */
window.CONTENT = window.CONTENT || {};

window.CONTENT["4.1"] = {
  id: "4.1",
  title: "Principiul relativității. Postulatele lui Einstein",
  essence: "1) Legile fizicii sunt aceleași în toate SRI. 2) c e aceeași în toate SRI, independent de mișcarea sursei. Michelson–Morley: nu există eter.",

  theory: [
    {
      title: "De la Galilei la Einstein",
      points: [
        "Galilei/Newton: legile mecanicii identice în SRI; x = x' + ut, t = t' (timp absolut).",
        "Problemă: ecuațiile lui Maxwell NU sunt invariante la Galilei.",
        "Michelson–Morley: viteza luminii nu depinde de „vântul de eter”.",
        "Einstein (1905): reformulează relativitatea pentru TOATĂ fizica.",
      ],
    },
    {
      title: "Postulatele",
      points: [
        "Postulatul I: legile fizicii se formulează la fel în toate sistemele de referință inerțiale.",
        "Postulatul II: viteza luminii în vid c e aceeași în toate SRI și nu depinde de mișcarea sursei.",
        "Consecință: c e viteza LIMITĂ în natură.",
      ],
    },
  ],

  formulas: [
    { name: "Galilei (clasic)", latex: "x = x′ + u t′,  t = t′", note: "valabil doar dacă u ≪ c" },
  ],

  rules: [],

  checklist: [
    "Enunț cele 2 postulate",
    "Explic de ce experimentul Michelson–Morley e important",
  ],

  problems: [
    {
      id: "p4.1.1",
      level: 1,
      type: "concept",
      q: "De ce mecanica clasică „nu se potrivește” cu electrodinamica lui Maxwell?",
      hint: "Invarianța la transformări.",
      a: "Legile mecanicii sunt invariante la Galilei; ecuațiile Maxwell – nu. Einstein unifică: ambele trebuie să respecte aceleași SRI, cu Lorentz + c constant.",
    },
  ],

  quiz: [
    {
      q: "Al doilea postulat al lui Einstein spune că:",
      options: ["c depinde de sursă", "c e aceeași în toate SRI", "timpul e absolut", "masa e infinită"],
      correct: 1,
    },
  ],
};

window.CONTENT["4.2"] = {
  id: "4.2",
  title: "Spațiul și timpul în relativitatea restrânsă",
  essence: "Simultaneitatea e relativă. Dilatarea timpului: τ = τ'/√(1−u²/c²). Contracția lungimilor: l = l'√(1−u²/c²).",

  theory: [
    {
      title: "Trei idei de lovitură",
      points: [
        "Simultaneitatea: două evenimente simultane într-un SRI pot să NU fie în altul.",
        "Timpul propriu τ' = minim: măsurat unde evenimentele apar în ACELAȘI punct.",
        "Lungimea proprie l' = maximă: măsurată în sistemul unde rigla e în REPAUS.",
        "Dimensiunile transversale (⊥ pe u) NU se schimbă.",
        "La u ≪ c → efectele dispar (fizică newtoniană).",
      ],
    },
  ],

  formulas: [
    { name: "Dilatarea timpului", latex: "τ = τ′ / √(1 − u²/c²)", note: "τ' = timp propriu" },
    { name: "Contracția lungimilor", latex: "l = l′ √(1 − u²/c²)", note: "l' = lungime proprie" },
    { name: "Factor Lorentz", latex: "γ = 1 / √(1 − u²/c²)", note: "τ = γ τ′,  l = l′/γ" },
  ],

  rules: [
    {
      name: "Cine vede ce?",
      text: "Ceasul în mișcare „merge mai rar”. Rigla în mișcare e „mai scurtă” pe direcția vitezei.",
    },
  ],

  checklist: [
    "Aplic dilatarea timpului",
    "Aplic contracția lungimilor",
    "Știu ce e timp/lungime proprie",
  ],

  problems: [
    {
      id: "p4.2.1",
      level: 2,
      type: "calcul",
      q: "Tija în repaus: l' = 25 cm. Se mișcă cu u = 0,6c de-a lungul ei. Care e l?",
      hint: "l = l'√(1−u²/c²); √(1−0,36)=√0,64=0,8.",
      a: "l = 25 · 0,8 = 20 cm.",
    },
    {
      id: "p4.2.2",
      level: 2,
      type: "concept",
      q: "De ce miuonii din atmosferă ajung la sol, deși „timpul lor de viață” pare prea scurt?",
      hint: "Dilatarea timpului / contracția atmosferei.",
      a: "În sistemul Pământului, timpul de viață al miuonului rapid e dilatat (τ = γτ'). Echivalent: în sistemul miuonului, atmosfera e contractată.",
    },
    {
      id: "p4.2.3",
      level: 3,
      type: "calcul",
      q: "Romb în repaus: diagonale 15 cm și 9 cm. În ce direcție și cu ce u trebuie să se miște ca să pară pătrat?",
      hint: "Contracție doar pe direcția mișcării: diagonală mare se scurtează până egalează pe cea mică.",
      a: "Se mișcă de-a lungul diagonalei de 15 cm: 15√(1−β²) = 9 → √(1−β²) = 0,6 → β = 0,8 → u = 0,8c.",
    },
  ],

  quiz: [
    {
      q: "Lungimea proprie este:",
      options: ["Cea mai mică posibilă", "Măsurată în sistemul unde obiectul e în repaus", "Întotdeauna contractată", "Independentă de sistem"],
      correct: 1,
    },
  ],
};

window.CONTENT["4.3"] = {
  id: "4.3",
  title: "Transformările lui Lorentz și compunerea vitezelor",
  essence: "Lorentz leagă (x,t) ↔ (x',t'). Compunere: υx = (υx' + u)/(1 + u υx'/c²) — niciodată peste c.",

  theory: [
    {
      title: "Ce înlocuiește Galilei",
      points: [
        "y = y', z = z' (transversal neschimbat).",
        "x și t se amestecă: spațiu-timpul e legat.",
        "La u ≪ c, Lorentz → Galilei.",
        "Maxwell e invariant la Lorentz (nu la Galilei).",
      ],
    },
  ],

  formulas: [
    { name: "Lorentz", latex: "x′ = γ(x − u t),  t′ = γ(t − u x/c²)", note: "γ = 1/√(1−u²/c²)" },
    { name: "Invers", latex: "x = γ(x′ + u t′),  t = γ(t′ + u x′/c²)", note: "" },
    { name: "Compunerea vitezelor", latex: "υ_x = (υ_x′ + u) / (1 + u υ_x′ / c²)", note: "" },
  ],

  rules: [],

  checklist: [
    "Scriu transformările Lorentz",
    "Compun două viteze relativist",
    "Verific că lumina rămâne c",
  ],

  problems: [
    {
      id: "p4.3.1",
      level: 2,
      type: "calcul",
      q: "Navă u = 0,6c față de radar. Electroni lansați înainte cu 0,9c față de navă. Viteza față de radar?",
      hint: "υ = (0,9c + 0,6c)/(1 + 0,9·0,6).",
      a: "υ = 1,5c / (1 + 0,54) = 1,5c/1,54 ≈ 0,974c. (Clasic greșit: 1,5c!)",
    },
    {
      id: "p4.3.2",
      level: 3,
      type: "calcul",
      q: "Eveniment în S': x' = 3·10⁴ m, y' = 2·10⁴ m, z' = 0, t' = 7·10⁻⁵ s. u = 0,8c. Găsește x, t în S.",
      hint: "γ = 1/√(1−0,64) = 1/0,6 ≈ 1,667; x = γ(x'+ut'), t = γ(t'+ux'/c²).",
      a: "ut' = 0,8·3e8·7e-5 = 1,68e4 m; x = 1,667·(3e4+1,68e4) ≈ 7,8·10⁴ m. t = 1,667·(7e-5 + 0,8·3e4/3e8) ≈ 1,67·(7e-5+8e-5) ≈ 2,5·10⁻⁴ s.",
    },
  ],

  quiz: [
    {
      q: "Dacă aduni 0,9c + 0,8c relativist, obții:",
      options: ["1,7c", "c", "o valoare < c", "0"],
      correct: 2,
    },
  ],
};

window.CONTENT["4.4"] = {
  id: "4.4",
  title: "Noțiune de dinamică relativistă",
  essence: "Masa crește cu viteza: m = γ m₀. Energia: E = mc². Nu poți atinge c cu m₀ > 0.",

  theory: [
    {
      title: "Idei esențiale",
      points: [
        "m₀ = masa de repaus (invariantă).",
        "m = m₀ / √(1−v²/c²) crește când v → c.",
        "F = dp/dt cu p = mv (relativist) — nu poți accelera la c.",
        "E = mc²; energia de repaus E₀ = m₀c².",
        "La v ≪ c: se recuperează dinamica clasică + Ec ≈ m₀v²/2.",
      ],
    },
  ],

  formulas: [
    { name: "Masă relativistă", latex: "m = m_0 / √(1 − v²/c²)", note: "" },
    { name: "Energie–masă", latex: "E = m c²", note: "E_0 = m_0 c²" },
    { name: "Energie cinetică relativistă", latex: "E_c = (m − m_0)c²", note: "" },
  ],

  rules: [],

  checklist: [
    "Explic de ce v nu poate atinge c pentru m₀ > 0",
    "Folosesc E = mc² corect (nu ca slogan)",
  ],

  problems: [
    {
      id: "p4.4.1",
      level: 1,
      type: "concept",
      q: "De ce o forță constantă nu poate accelera o particulă până la c?",
      hint: "m = γm₀.",
      a: "Pe măsură ce v → c, masa (inerția) crește nelimitat; accelerația scade. Energia investită mărește m, nu „depășește” c.",
    },
    {
      id: "p4.4.2",
      level: 2,
      type: "calcul",
      q: "Electron cu v = 0,6c. Raportul m/m₀?",
      hint: "γ = 1/√(1−0,36) = 1/0,8 = 1,25.",
      a: "m/m₀ = 1,25.",
    },
  ],

  quiz: [
    {
      q: "E = mc² spune că:",
      options: ["Doar fotonii au energie", "Energia și masa sunt echivalente / legate", "Masa clasică e falsă mereu", "c depinde de masă"],
      correct: 1,
    },
  ],
};
