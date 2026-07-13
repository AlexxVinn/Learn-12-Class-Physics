/**
 * Cap. 7 – Nucleul atomic & particule (pag. ~102–120, până la 7.7 început)
 */
window.CONTENT = window.CONTENT || {};

window.CONTENT["7.1"] = {
  id: "7.1",
  title: "Nucleul atomic: caracteristici și structură",
  essence: "Z = protoni, A = nucleoni, N = A−Z neutroni. Izotopi: același Z, A diferit. R ≈ R₀ A^{1/3}.",

  theory: [
    {
      title: "Numerele care contează",
      points: [
        "Număr atomic Z = sarcina nucleului în unități e = numărul de protoni.",
        "Număr de masă A ≈ masa în u = numărul de nucleoni.",
        "Neutroni: N = A − Z.",
        "Notație: ᴬ_Z X (ex.: ²³⁸₉₂U).",
        "Izotopi: același Z, A diferit (aceeași chimie, nuclee diferite).",
      ],
    },
    {
      title: "Descoperiri-cheie",
      points: [
        "Protonul (Rutherford, 1919) + prima reacție nucleară artificială.",
        "Neutronul (Chadwick, 1932) → model proton–neutron.",
        "Densitate nucleară ≈ constantă ⇒ V ∝ A ⇒ R = R₀ A^{1/3}, R₀ ≈ 1,2·10⁻¹⁵ m.",
      ],
    },
  ],

  formulas: [
    { name: "Compoziție", latex: "N = A − Z", note: "Z protoni, N neutroni" },
    { name: "Raza nucleului", latex: "R ≈ R_0 A^{1/3}", note: "R₀ ~ 1,2 fm" },
  ],

  rules: [],

  checklist: [
    "Citesc Z, A, N din notația ᴬZX",
    "Estimez R cu A^{1/3}",
  ],

  problems: [
    {
      id: "p7.1.1",
      level: 1,
      type: "calcul",
      q: "Câți protoni și neutroni are ²³²₉₀Th?",
      hint: "Z=90, A=232.",
      a: "Z = 90 protoni; N = 232 − 90 = 142 neutroni.",
    },
    {
      id: "p7.1.2",
      level: 2,
      type: "calcul",
      q: "Estimează R pentru ¹²⁷₅₃I (R₀ = 1,2·10⁻¹⁵ m).",
      hint: "R = R₀ A^{1/3}; 127^{1/3} ≈ 5,02.",
      a: "R ≈ 1,2e-15 · 5,02 ≈ 6,0·10⁻¹⁵ m.",
    },
  ],

  quiz: [
    {
      q: "Izotopii unui element au:",
      options: ["Același A", "Același Z, A diferit", "Același N", "Z și A egale"],
      correct: 1,
    },
  ],
};

window.CONTENT["7.2"] = {
  id: "7.2",
  title: "Forțe nucleare. Energia de legătură",
  essence: "Forțe tari, rază scurtă, saturație. Δm = defect de masă; Eleg = Δm c². 1 u·c² ≈ 931,5 MeV.",

  theory: [
    {
      title: "Forțele nucleare",
      points: [
        "Atracție puternică între nucleoni (>> Coulomb).",
        "Independente de sarcină (pp ≈ pn ≈ nn).",
        "Rază scurtă (~1,4 fm); dincolo → neglijabile.",
        "Saturație: fiecare nucleon interacționează doar cu vecinii.",
      ],
    },
    {
      title: "Defect de masă & legătură",
      points: [
        "m_nucleu < sumă mase nucleoni liberi.",
        "Δm = Z m_H + (A−Z) m_n − m_atom (formă practică).",
        "Eleg = Δm c²; pe nucleon ε = Eleg/A → stabilitate.",
        "Maximul ε e la nuclee medii (Fe etc.) → fisiune/fuziune degajă energie.",
      ],
    },
  ],

  formulas: [
    { name: "Defect de masă", latex: "Δm = Z m_H + (A−Z) m_n − m_at", note: "" },
    { name: "Energie de legătură", latex: "E_{leg} = Δm · c²", note: "1 u·c² ≈ 931,5 MeV" },
    { name: "Pe nucleon", latex: "ε = E_{leg} / A", note: "" },
  ],

  rules: [],

  checklist: [
    "Calculez Δm și Eleg",
    "Explic de ce ε(A) are maxim la nuclee medii",
  ],

  problems: [
    {
      id: "p7.2.1",
      level: 2,
      type: "calcul",
      q: "Pentru un izotop, Δm = 0,28154 u. Cât e Eleg?",
      hint: "Eleg = Δm · 931,5 MeV.",
      a: "Eleg ≈ 0,28154 · 931,5 ≈ 262,2 MeV.",
    },
    {
      id: "p7.2.2",
      level: 2,
      type: "calcul",
      q: "ε = 8,795 MeV/nucleon, A = 4 (He). Defectul de masă?",
      hint: "Eleg = εA; Δm = Eleg/931,5.",
      a: "Eleg = 35,18 MeV; Δm ≈ 35,18/931,5 ≈ 0,0378 u.",
    },
  ],

  quiz: [
    {
      q: "1 u·c² corespunde aproximativ:",
      options: ["1 eV", "931,5 MeV", "13,6 eV", "1 J"],
      correct: 1,
    },
  ],
};

window.CONTENT["7.3"] = {
  id: "7.3",
  title: "Radioactivitatea",
  essence: "Dezintegrare spontană α/β/γ. Reguli de deplasare. N = N₀ e^{−λt} = N₀ (1/2)^{t/T_{1/2}}.",

  theory: [
    {
      title: "Tipuri",
      points: [
        "α: emisie ⁴₂He → Z↓2, A↓4 (2 căsuțe la stânga în tabel).",
        "β⁻: electron din n→p+e(+ν̄) → Z↑1, A neschimbat (1 căsuță la dreapta).",
        "γ: foton de la nucleu excitat → fundamental (după α sau β).",
        "α: energii discrete; β: spectru continuu → neutrino (Pauli).",
      ],
    },
    {
      title: "Legea statistică",
      points: [
        "Nu știi CARE nucleu, știi CÂTE: dN = −λ N dt.",
        "N(t) = N₀ e^{−λt}.",
        "T₁/₂: timp în care N → N/2; λ = ln2 / T₁/₂.",
        "N = N₀ / 2^{t/T₁/₂}.",
        "Datarea cu ¹⁴C: după tăiere, ¹⁴C scade cu T₁/₂ ≈ 5700 ani.",
      ],
    },
  ],

  formulas: [
    { name: "α", latex: "ᴬ_Z X → ᴬ⁻⁴_{Z−2} Y + ⁴₂He", note: "" },
    { name: "β⁻", latex: "ᴬ_Z X → ᴬ_{Z+1} Y + e⁻ + ν̄", note: "" },
    { name: "Legea dezintegrării", latex: "N = N_0 e^{−λ t} = N_0 (1/2)^{t/T_{1/2}}", note: "λ = ln2 / T_{1/2}" },
  ],

  rules: [
    {
      name: "Număr de dezintegrări pe un lanț",
      text: "n_α = (A₁−A₂)/4; n_β = 2 n_α − (Z₁−Z₂).",
    },
  ],

  checklist: [
    "Aplic regulile α/β pe Z și A",
    "Calculez N(t) cu T₁/₂",
    "Rezolv o problemă tip datare ¹⁴C",
  ],

  problems: [
    {
      id: "p7.3.1",
      level: 2,
      type: "calcul",
      q: "²³⁸₉₂U → ²²²₈₆Rn. Câte α și câte β⁻?",
      hint: "nα=(238−222)/4; nβ=2nα−(92−86).",
      a: "nα = 4; nβ = 8 − 6 = 2.",
    },
    {
      id: "p7.3.2",
      level: 2,
      type: "calcul",
      q: "Iod radioactiv: cantitatea scade de 16 ori în 32 zile. T₁/₂?",
      hint: "16 = 2⁴ → 4 perioade în 32 zile.",
      a: "T₁/₂ = 32/4 = 8 zile.",
    },
    {
      id: "p7.3.3",
      level: 2,
      type: "calcul",
      q: "Obiect arheologic: 25% din ¹⁴C rămas. T₁/₂ = 5700 ani. Vârsta?",
      hint: "25% = 1/4 = 2 perioade.",
      a: "t = 2 · 5700 = 11 400 ani.",
    },
    {
      id: "p7.3.4",
      level: 2,
      type: "calcul",
      q: "După 3 T₁/₂, ce % din nuclee s-au dezintegrat?",
      hint: "Rămân 1/8 = 12,5%.",
      a: "Dezintegrat: 87,5%.",
    },
  ],

  quiz: [
    {
      q: "La dezintegrarea α, numărul de masă:",
      options: ["Crește cu 4", "Scade cu 4", "Rămâne egal", "Scade cu 2"],
      correct: 1,
    },
  ],
};

window.CONTENT["7.4"] = {
  id: "7.4",
  title: "Reacții nucleare. Fisiune și fuziune",
  essence: "X+a→Y+b; Q=(Σm_in−Σm_out)c². Fisiune U + n → fragmente + 2–3 n + ~200 MeV. Fuziune ușoare → energie (Soare).",

  theory: [
    {
      title: "Generalități",
      points: [
        "Proiectilul trebuie să ajungă în raza forțelor nucleare (~fm).",
        "Neutronii intră ușor (fără Coulomb); protonii/α au nevoie de energie.",
        "Se conservă: Z total, A total, energie, impuls…",
        "Q > 0 exoenergetică; Q < 0 endoenergetică.",
      ],
    },
    {
      title: "Fisiune & lanț",
      points: [
        "²³⁵U + n lent → nucleu excitat → se rupe în 2 fragmente + 2–3 n.",
        "~210 MeV / fisiune — enorm vs chimie.",
        "Reacție în lanț: neutronii noi fisionează alte nuclee.",
        "Reactor: zonă activă, moderator, bare de control, răcire.",
        "Fuziune: nuclee ușoare (H/D/T) → He + energie; cere T foarte mari (Soarele).",
      ],
    },
  ],

  formulas: [
    { name: "Reacție", latex: "X + a → Y + b", note: "" },
    { name: "Energie de reacție", latex: "Q = (m_X + m_a − m_Y − m_b) c²", note: "" },
  ],

  rules: [],

  checklist: [
    "Echilibrez Z și A într-o reacție",
    "Explic lanțul de fisiune și rolul moderatorului",
    "Diferențiez fisiune / fuziune energetic",
  ],

  problems: [
    {
      id: "p7.4.1",
      level: 1,
      type: "concept",
      q: "De ce neutronii sunt proiectile excelente pentru reacții nucleare?",
      hint: "Sarcină.",
      a: "Sunt neutri → nu sunt respinși de nucleu; pot pătrunde chiar la energii mici (n lenți).",
    },
    {
      id: "p7.4.2",
      level: 2,
      type: "concept",
      q: "De ce fisiunea și fuziunea degajă energie, privind graficul ε(A)?",
      hint: "Maxim la A medii.",
      a: "Fisiune: A mare → A medii (ε crește). Fuziune: A mici → A medii (ε crește). Diferența de legătură se eliberează.",
    },
  ],

  quiz: [
    {
      q: "O reacție cu Q > 0 este:",
      options: ["Endoenergetică", "Exoenergetică", "Imposibilă", "Doar chimică"],
      correct: 1,
    },
  ],
};

window.CONTENT["7.5"] = {
  id: "7.5",
  title: "Detectoare de radiații ionizante",
  essence: "Particulele ionizează / excită mediul → semnal: scintilații, urme în ceață/bule, impulsuri în contoare.",

  theory: [
    {
      title: "Tipuri de reținut",
      points: [
        "Ecran ZnS / scintilator: scintilații (ca la Rutherford).",
        "Cameră cu ceață (Wilson): vapori suprasaturați → picături pe ioni = urmă vizibilă.",
        "Cameră cu bule: lichid supraîncălzit → lanț de bule pe traiectorie.",
        "În B: traiectorii curbe → se măsoară impulsul (r = p/(qB)).",
        "Contoare Geiger-Müller, semiconductoare: impulsuri electrice numărate.",
      ],
    },
  ],

  formulas: [
    { name: "În câmp B", latex: "r = p / (q B)", note: "din urmări fotografiate" },
  ],

  rules: [],

  checklist: [
    "Asociez detectorul cu principiul lui",
    "Explic de ce B ajută la identificarea particulelor",
  ],

  problems: [
    {
      id: "p7.5.1",
      level: 1,
      type: "concept",
      q: "Ce avantaj are camera cu ceață față de un simplu contor?",
      hint: "Urme.",
      a: "Vezi traiectoria (direcție, lungime, curbură în B) — nu doar „a trecut o particulă”.",
    },
  ],

  quiz: [
    {
      q: "Camera Wilson detectează particulele prin:",
      options: ["Sunet", "Picături pe ioni în vapori", "Doar căldură", "Magnetizare"],
      correct: 1,
    },
  ],
};

window.CONTENT["7.6"] = {
  id: "7.6",
  title: "Efectul biologic al radiațiilor nucleare",
  essence: "Ionizarea dăunează celulelor/ADN. Doza absorbită (Gy), echivalentă (Sv) țin cont de tipul radiației.",

  theory: [
    {
      title: "Pe scurt și practic",
      points: [
        "α, β, γ, n ionizează → leziuni biologice (acute / pe termen lung).",
        "Doza absorbită D = energie / masă; unitate: gray (Gy) = J/kg.",
        "Efectul biologic depinde și de tipul radiației → doza echivalentă (sievert, Sv).",
        "Protecție: timp ↓, distanță ↑, ecranare (Pb pentru γ, materiale ușoare pentru n).",
        "Aplicații utile: sterilizare, diagnostic, radioterapie — cu control strict al dozei.",
      ],
    },
  ],

  formulas: [
    { name: "Doza absorbită", latex: "D = E / m", note: "[D] = Gy" },
  ],

  rules: [
    {
      name: "ALARA",
      text: "As Low As Reasonably Achievable — doza cât mai mică rezonabil posibil.",
    },
  ],

  checklist: [
    "Diferențiez Gy și Sv conceptual",
    "Enumăr cele 3 principii de protecție",
  ],

  problems: [
    {
      id: "p7.6.1",
      level: 1,
      type: "concept",
      q: "De ce α e foarte periculoasă dacă e ingerată/inhalată, dar ușor de ecranat din exterior?",
      hint: "Pătrundere vs. ionizare.",
      a: "α ionizează intens pe distanțe mici (oprită de hârtie/piele), dar în interior depozitează energia local, distructiv.",
    },
  ],

  quiz: [
    {
      q: "Unitatea SI a dozei absorbite este:",
      options: ["Bq", "Sv", "Gy", "Ci"],
      correct: 2,
    },
  ],
};

window.CONTENT["7.7"] = {
  id: "7.7",
  title: "Particule elementare (introducere)",
  essence: "De la electron, proton, neutron → sute de particule. Antiparticule (ex.: pozitron). (Continuă în paginile următoare.)",

  theory: [
    {
      title: "Ce știi deja + ce urmează",
      points: [
        "Electron (1897), proton (1919), neutron (1932), foton, neutrino…",
        "Pozitronul e⁺ = antiparticula electronului (Anderson, 1932).",
        "Miuonul: ~207 me, nestabil — legat de dilatarea timpului în atmosferă.",
        "Multe particule sunt rezonanțe (viață foarte scurtă).",
        "Clasificarea completă + interacțiuni fundamentale: tema 7.8 (pagini următoare).",
      ],
    },
  ],

  formulas: [],

  rules: [],

  checklist: [
    "Enumăr particulele „istorice” de bază",
    "Știu ce e o antiparticulă (ex.: e⁺)",
  ],

  problems: [
    {
      id: "p7.7.1",
      level: 1,
      type: "concept",
      q: "Ce este comun și ce diferă între electron și pozitron?",
      hint: "Masă vs. sarcină.",
      a: "Aceeași masă; sarcini opuse (−e vs +e). La întâlnire pot anihila → fotoni γ.",
    },
  ],

  quiz: [
    {
      q: "Pozitronul este:",
      options: ["Un proton ușor", "Antiparticula electronului", "Un neutron încărcat", "Un tip de neutrino"],
      correct: 1,
    },
  ],
};
