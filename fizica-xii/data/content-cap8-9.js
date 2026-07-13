/**
 * Cap. 7.8 + Cap. 8 (Astronomie) + Cap. 9 – pag. 121–168
 */
window.CONTENT = window.CONTENT || {};

/* ========== 7.8 ========== */
window.CONTENT["7.8"] = {
  id: "7.8",
  title: "Interacțiuni fundamentale. Clasificarea particulelor",
  essence: "4 interacțiuni: tare, EM, slabă, gravitațională. Particule: fotoni / leptoni / hadroni (mezoni+barioni). Hadronii = quarci.",

  theory: [
    {
      title: "Cele 4 interacțiuni",
      points: [
        "Tare (nucleară): leagă nucleonii; rază ~10⁻¹⁵ m; cea mai puternică; ~10⁻²² s.",
        "Electromagnetică: între sarcini; fotonul e purtătorul; atomi, lumină, forțe elastice…",
        "Slabă: dezintegrări (β, viață >10⁻¹⁰ s); rază ~10⁻¹⁸ m; neutrino participă.",
        "Gravitațională: universală (Newton); pe particule e neglijabilă; purtător prezis: gravitonul.",
      ],
    },
    {
      title: "Clasificare",
      points: [
        "Toate sunt „de schimb” (exchange particles).",
        "Fotoni | Leptoni (e, μ, τ + neutrini; 3 generații; fără structură) | Hadroni (interacțiune tare).",
        "Hadroni → mezoni (ex. pioni) + barioni (nucleoni + hiperoni).",
        "Quarkuri: constituenți ai hadronilor; sarcină fracționară; nu se văd liberi.",
      ],
    },
  ],

  formulas: [],

  rules: [
    {
      name: "Purtători (memorizează)",
      text: "EM → foton | tare → gluoni / (istoric: pioni între nucleoni) | slabă → W±, Z⁰ | gravitație → graviton (nedetectat).",
    },
  ],

  checklist: [
    "Enumăr cele 4 interacțiuni cu rază/intensitate",
    "Clasific o particulă: lepton vs hadron",
  ],

  problems: [
    {
      id: "p7.8.1",
      level: 1,
      type: "concept",
      q: "De ce gravitația e irelevantă în fizica particulelor, dar domină astronomia?",
      hint: "Masele.",
      a: "Particulele au mase minuscule → Fg neglijabilă. Stele/planete au mase uriașe → gravitația organizează Universul.",
    },
    {
      id: "p7.8.2",
      level: 2,
      type: "concept",
      q: "Electronul e lepton sau hadron? De ce?",
      hint: "Interacțiunea tare.",
      a: "Lepton — nu participă la interacțiunea tare (spre deosebire de proton/neutron).",
    },
  ],

  quiz: [
    {
      q: "Interacțiunea responsabilă de dezintegrarea β este:",
      options: ["Tare", "EM", "Slabă", "Gravitațională"],
      correct: 2,
    },
  ],
};

/* ========== CAP 8 ========== */
window.CONTENT["8.1"] = {
  id: "8.1",
  title: "Astronomia în cadrul științelor fizice",
  essence: "Astronomia studiază Universul prin observație (optică, radio, raze X…). Nu e astrologie.",

  theory: [
    {
      title: "Ce e astronomia",
      points: [
        "Știință veche: orientare, calendar, agricultură (Babilon, Egipt, China…).",
        "Probleme: poziții/mișcări, natură fizică a corpurilor, origine/evoluție (astrofizică, cosmologie).",
        "Metode: telescop optic, radioastronomie, sateliți (ex. Hubble), radiolocație planetară.",
        "Astronomie ≠ astrologie (asta din urmă nu e știință).",
      ],
    },
  ],

  formulas: [],
  rules: [],
  checklist: ["Diferențiez astronomie / astrologie", "Dau 3 metode de observație"],
  problems: [
    {
      id: "p8.1.1",
      level: 1,
      type: "concept",
      q: "Ce avantaj are radioastronomia față de observația vizibilă?",
      hint: "Atmosferă / nori / zi.",
      a: "Undele radio trec prin nori și pot fi recepționate și ziua; descoperă obiecte „invizibile” optic (pulsari, radio-galaxii).",
    },
  ],
  quiz: [
    {
      q: "Astronomia modernă se bazează pe:",
      options: ["Doar mituri", "Observații și legi fizice", "Doar astrologie", "Doar calendar lunar"],
      correct: 1,
    },
  ],
};

window.CONTENT["8.2"] = {
  id: "8.2",
  title: "Astronomie practică: cerul, timp, eclipse",
  essence: "Sfera cerească, ecliptică, echinocții/solstiții. Luna: faze, sideral vs sinodic. Eclipse Soare/Lună. Fusuri orare + calendar.",

  theory: [
    {
      title: "Sfera cerească (minim necesar)",
      points: [
        "Poli cerești, ecuator ceresc, zenit, orizont, meridian.",
        "Ecliptica = drumul aparent anual al Soarelui.",
        "Echinocții (≈21 mar / 23 sep): zi ≈ noapte. Solstiții (≈21 iun / 21 dec): zi maximă/minimă.",
        "Coordonate: declinație δ + unghi orar / ascensie dreaptă.",
      ],
    },
    {
      title: "Lună & eclipse & timp",
      points: [
        "Lună siderală ≈ 27,3 zile; sinodică (faze) ≈ 29,5 zile.",
        "Aceeași față a Lunii spre Pământ (rotație sincronă).",
        "Eclipsă de Soare: Lună între Pământ–Soare. Eclipsă de Lună: Pământ între Soare–Lună.",
        "Timp local / fus orar / UTC. Calendar gregorian (eroare mică).",
      ],
    },
  ],

  formulas: [
    { name: "Idee unghi / timp", latex: "360° ↔ 24 h  ⇒  15° ↔ 1 h", note: "rotație diurnă" },
  ],

  rules: [],

  checklist: [
    "Explic echinocțiu vs solstițiu",
    "Diferențiez lună siderală / sinodică",
    "Descriu condițiile unei eclipse",
  ],

  problems: [
    {
      id: "p8.2.1",
      level: 1,
      type: "concept",
      q: "De ce eclipsa de Lună se vede de pe toată emisfera nocturnă, iar cea de Soare doar pe o bandă îngustă?",
      hint: "Umbra.",
      a: "Umbra Pământului pe Lună e mare → vizibilă larg. Umbra Lunii pe Pământ e mică (~250 km) → bandă îngustă.",
    },
    {
      id: "p8.2.2",
      level: 2,
      type: "concept",
      q: "De ce luna sinodică e mai lungă decât cea siderală?",
      hint: "Pământul se mișcă pe orbită.",
      a: "În ~27 zile Luna revine față de stele, dar Pământul a avansat pe orbită → mai trebuie ~2 zile ca Luna să revină la aceeași fază față de Soare.",
    },
  ],

  quiz: [
    {
      q: "La echinocțiu:",
      options: ["Ziua e maximă", "Zi ≈ noapte", "Luna e plină mereu", "Soarele e la zenit peste tot"],
      correct: 1,
    },
  ],
};

window.CONTENT["8.3"] = {
  id: "8.3",
  title: "Sistemul Solar",
  essence: "Planete terestre vs gigante, sateliți, asteroizi, comete, Kuiper. Pământul: structură, atmosferă, magnetosferă, maree.",

  theory: [
    {
      title: "Harta rapidă",
      points: [
        "Terestru: Mercur, Venus, Pământ, Marte — stâncoase, aproape de Soare.",
        "Gigante: Jupiter, Saturn, Uranus, Neptun — gaze/gheață, multe luni, inele.",
        "Pitice: Pluto etc. Corpuri mici: asteroizi (centură), comete, meteoroizi.",
        "1 UA = 149,6·10⁶ km (Pământ–Soare mediu).",
        "Pământ: crustă–manta–nucleu; atmosferă; magnetosferă; maree (Lună+Soare).",
        "Luna: regolit, crateri, fără atmosferă densă; influențează mareele.",
      ],
    },
  ],

  formulas: [
    { name: "Unitate astronomică", latex: "1 UA = 1,496 · 10^8 km", note: "" },
  ],

  rules: [],

  checklist: [
    "Clasific planetele în terestre / gigante",
    "Știu ce e 1 UA",
  ],

  problems: [
    {
      id: "p8.3.1",
      level: 1,
      type: "concept",
      q: "De ce Jupiter e mai rece pe „suprafață” decât Pământul, deși e uriaș?",
      hint: "Distanța la Soare.",
      a: "E ~5 UA de Soare → primește mult mai puțină energie solară pe unitatea de arie (~1/25).",
    },
    {
      id: "p8.3.2",
      level: 2,
      type: "concept",
      q: "Ce deosebește o cometă de un asteroid tipic?",
      hint: "Compoziție + coadă.",
      a: "Cometa: gheață+praf; aproape de Soare formează coadă (vânt solar + radiație). Asteroidul: stâncă/metal, fără coadă tipică.",
    },
  ],

  quiz: [
    {
      q: "1 UA reprezintă:",
      options: ["Raza Soarelui", "Distanța medie Pământ–Soare", "An-lumină", "Raza Pământului"],
      correct: 1,
    },
  ],
};

window.CONTENT["8.4"] = {
  id: "8.4",
  title: "Mecanică cerească. Legile lui Kepler",
  essence: "Heliocentrism (Copernic). Kepler: elipse, arii egale, T²∝a³. Sideral vs sinodic.",

  theory: [
    {
      title: "De la Ptolemeu la Kepler",
      points: [
        "Geocentric (Ptolemeu) → heliocentric (Copernic); Galilei confirmă cu telescopul.",
        "Planete inferioare (Mercur, Venus): elongație maximă limitată; faze.",
        "Superioare: opoziție = cele mai bune observații.",
        "Mişcare aparentă: directă / retrogradă (bucle) din cauza mișcării Pământului.",
      ],
    },
    {
      title: "Kepler – cele 3 legi",
      points: [
        "I: orbită eliptică, Soarele într-un focar (periheliu / afeliu).",
        "II: arii egale în timp egal → mai rapid la periheliu.",
        "III: T² / a³ = const (pentru Soare). Cu a în UA și T în ani: T² = a³.",
        "Newton explică Kepler prin gravitație; generalizează legea a III-a.",
      ],
    },
  ],

  formulas: [
    { name: "Kepler III (UA, ani)", latex: "T² = a³", note: "a în UA, T în ani" },
    { name: "Periheliu / afeliu", latex: "R_p = a(1−e),  R_a = a(1+e)", note: "" },
    { name: "Sinodic (superioară, idee)", latex: "1/T = 1/T_⊕ − 1/S", note: "formă uzuală; verifică caz inferior/superior" },
  ],

  rules: [],

  checklist: [
    "Enunț cele 3 legi Kepler",
    "Calculez a sau T cu T²=a³",
    "Explic mișcarea retrogradă aparentă",
  ],

  problems: [
    {
      id: "p8.4.1",
      level: 2,
      type: "calcul",
      q: "O planetă are a = 4 UA. Care e perioada siderală T?",
      hint: "T² = a³ = 64 → T = 8 ani.",
      a: "T = 8 ani.",
    },
    {
      id: "p8.4.2",
      level: 2,
      type: "concept",
      q: "De ce Pământul e mai rapid pe orbită în ianuarie (periheliu) decât în iulie?",
      hint: "Kepler II.",
      a: "La periheliu raza vectoare e mai scurtă → pentru arii egale/timp, viteza pe orbită e mai mare.",
    },
    {
      id: "p8.4.3",
      level: 1,
      type: "concept",
      q: "Venus seara e văzută la vest pe cer. Poate fi „Luceafăr de dimineață” în același timp?",
      hint: "Elongație estică vs vestică.",
      a: "Nu simultan: elongație estică → seară; elongație vestică → dimineață.",
    },
  ],

  quiz: [
    {
      q: "Legea a III-a a lui Kepler leagă:",
      options: ["Masă și rază", "T și a", "Doar excentricitatea", "Doar faza Lunii"],
      correct: 1,
    },
  ],
};

window.CONTENT["8.5"] = {
  id: "8.5",
  title: "Soarele",
  essence: "Nucleu (fuziune) → zonă radiativă/convectivă → fotosferă (~5800 K), cromosferă, coronă. Activitate solară afectează Pământul.",

  theory: [
    {
      title: "Structură & activitate",
      points: [
        "Energie: fuziune H→He în nucleu; energia „urcă” spre suprafață.",
        "Fotosfera: „suprafața” vizibilă ~6000 K; pete solare.",
        "Cromosferă + coronă (foarte fierbinte, rarefiată).",
        "Vânt solar + erupții → aurore, perturbații radio/rețele electrice.",
        "Ciclu de activitate ~11 ani.",
      ],
    },
  ],

  formulas: [],
  rules: [],
  checklist: ["Descriu pe scurt straturile Soarelui", "Leg activitatea solară de efecte pe Pământ"],
  problems: [
    {
      id: "p8.5.1",
      level: 1,
      type: "concept",
      q: "De ce energia produsă în nucleu nu „apare” imediat ca lumină la suprafață?",
      hint: "Transport.",
      a: "Fotonii sunt absorbiți/reemiși de nenumărate ori în zona radiativă (timp foarte lung); apoi transport convective.",
    },
  ],
  quiz: [
    {
      q: "Sursa principală de energie a Soarelui este:",
      options: ["Fisiunea uraniului", "Fuziunea termonucleară", "Ardere chimică", "Contracție gravitațională singură"],
      correct: 1,
    },
  ],
};

window.CONTENT["8.6"] = {
  id: "8.6",
  title: "Stelele",
  essence: "Clasificare spectrală OBAFGKM. Diagrama Hertzsprung–Russell: secvență principală, giganți, pitici albe. Evoluție după masă.",

  theory: [
    {
      title: "Ce trebuie să știi",
      points: [
        "Stelele = sfere de gaz cu fuziune (sau resturi: pitică albă, neutron, gaură neagră).",
        "Tip spectral: O-B-A-F-G-K-M (Soarele = G2).",
        "HR: temperatură (spectral) vs luminozitate — majoritatea pe secvența principală.",
        "Evoluție: nebuloasă → stea → (după masă) pitică albă / supernovă → stea neutron / GN.",
        "Stele variabile, nove, supernove.",
      ],
    },
  ],

  formulas: [],
  rules: [
    {
      name: "Mnemonic tip spectral",
      text: "„O Be A Fine Girl/Guy, Kiss Me” = OBAFGKM (de la fierbinte la rece).",
    },
  ],
  checklist: ["Plasez Soarele pe HR", "Leg masa stelei de soarta finală"],
  problems: [
    {
      id: "p8.6.1",
      level: 1,
      type: "concept",
      q: "Unde se află Soarele pe diagrama HR?",
      hint: "Secvența principală, tip G.",
      a: "Pe secvența principală, tip spectral G, stea pitică galbenă de masă intermediară.",
    },
    {
      id: "p8.6.2",
      level: 2,
      type: "concept",
      q: "De ce stelele foarte masive „trăiesc” mai puțin decât Soarele?",
      hint: "Consum de combustibil.",
      a: "Ard combustibilul nuclear mult mai rapid (luminozitate enormă) → viață mai scurtă, deși au mai mult H.",
    },
  ],
  quiz: [
    {
      q: "Tipul spectral al Soarelui este aproximativ:",
      options: ["O5", "B0", "G2", "M8"],
      correct: 2,
    },
  ],
};

window.CONTENT["8.7"] = {
  id: "8.7",
  title: "Noțiuni de cosmologie",
  essence: "Galaxia (Calea Lactee), alte galaxii, quasari. Expansiune (Hubble) → Big Bang. Materie întunecată (ipoteză).",

  theory: [
    {
      title: "Universul pe scurt",
      points: [
        "Calea Lactee: spirală; Soarele într-un braț; stelele au mișcare proprie.",
        "Galaxii: eliptice / spirale / neregulate; nuclee active; quasari = nuclee foarte luminoase.",
        "Legea Hubble: galaxii se îndepărtează; v = H₀ · d → Univers în expansiune.",
        "Modelul Big Bang: Universul a început dintr-o stare extrem de densă/fierbinte.",
        "Materie întunecată: masă „invizibilă” sugerată de curbele de rotație ale galaxiilor.",
      ],
    },
  ],

  formulas: [
    { name: "Hubble (idee)", latex: "v = H_0 · d", note: "viteză de recesiune" },
  ],

  rules: [],

  checklist: [
    "Explic ce spune legea Hubble",
    "Leg expansiunea de Big Bang",
  ],

  problems: [
    {
      id: "p8.7.1",
      level: 2,
      type: "concept",
      q: "Dacă o galaxie e de 2 ori mai departe, cum e viteza ei de îndepărtare (Hubble)?",
      hint: "v ∝ d.",
      a: "De aproximativ 2 ori mai mare.",
    },
  ],

  quiz: [
    {
      q: "Legea Hubble sugerează că Universul:",
      options: ["E static", "Se contractă obligatoriu acum", "Se află în expansiune", "Are centrul în Soare"],
      correct: 2,
    },
  ],
};

/* ========== CAP 9 ========== */
window.CONTENT["9.1"] = {
  id: "9.1",
  title: "Etapele tabloului fizic al lumii",
  essence: "Mecanicist (Newton) → electromagnetic (Maxwell) → relativist + cuantic (sec. XX). Fiecare etapă lărgește, nu „anulează” total pe cea veche.",

  theory: [
    {
      title: "Trei tablouri",
      points: [
        "Clasic-mecanic: spațiu/timp absolute, determinism, gravitație Newton.",
        "Electromagnetic: câmpuri, unde EM, lumină = undă EM (Maxwell).",
        "Modern: relativitate (spațiu-timp) + cuantă (discret, dualism, probabilități).",
        "Limite: clasicul rămâne bun pentru v≪c și acțiuni ≫ℏ.",
      ],
    },
  ],

  formulas: [],
  rules: [],
  checklist: ["Ordinez cele 3 etape și dau câte o idee-cheie"],
  problems: [
    {
      id: "p9.1.1",
      level: 1,
      type: "concept",
      q: "De ce nu „aruncăm” mecanica lui Newton după Einstein?",
      hint: "Limită.",
      a: "La viteze mici e o aproximație excelentă a relativității — suficientă pentru inginerie cotidiană.",
    },
  ],
  quiz: [
    {
      q: "Tabloul electromagnetic e legat în special de:",
      options: ["Kepler", "Maxwell", "Dalton", "Ptolemeu"],
      correct: 1,
    },
  ],
};

window.CONTENT["9.2"] = {
  id: "9.2",
  title: "Astronomia și concepția științifică despre lume",
  essence: "De la geocentrism la heliocentrism și Univers în expansiune — astronomia schimbă viziunea despre locul omului în Cosmos.",

  theory: [
    {
      title: "Revoluții de perspectivă",
      points: [
        "1) Copernic/Galilei/Kepler/Newton: Pământul nu e centrul.",
        "2) Sec. XX: galaxii, expansiune, Big Bang — Univers dinamic, pe scară uriașă.",
        "Știința: modele testabile, corectabile; nu dogme imuabile.",
        "Fizica + astronomia împreună construiesc tabloul coerent al lumii.",
      ],
    },
  ],

  formulas: [],
  rules: [],
  checklist: ["Rezum pe scurt cele 2 revoluții astronomice"],
  problems: [
    {
      id: "p9.2.1",
      level: 1,
      type: "concept",
      q: "Ce descoperiri ale lui Galilei au sprijinit heliocentrismul?",
      hint: "Telescop.",
      a: "Fazele Venerei, sateliții lui Jupiter, munți pe Lună, pete solare, Calea Lactee = stele — arată că nu totul „se învârte obligatoriu în jurul Pământului”.",
    },
  ],
  quiz: [
    {
      q: "Heliocentrismul plasează în centru:",
      options: ["Pământul", "Luna", "Soarele", "Jupiter"],
      correct: 2,
    },
  ],
};

/* ========== TEST FINAL (sumativ scurt) ========== */
window.CONTENT["TEST"] = {
  id: "TEST",
  title: "Test sumativ rapid ( Cap. 1–9 )",
  essence: "Antrenament tip evaluare: amestec de formule și concepte. Nu înlocuiește testele din manual, dar te încălzește.",

  theory: [
    {
      title: "Cum folosești testul",
      points: [
        "Rezolvă fără formule la vedere, apoi verifică.",
        "Notează temele greșite și revino la ele.",
        "Profil real: pune accent pe 2.3, 3.7, 4.x, 5.2, 6.3, 7.3.",
      ],
    },
  ],

  formulas: [],
  rules: [],
  checklist: [
    "Am revizuit temele greșite din quiz",
    "Pot explica Faraday, Bohr, Kepler și fotoelectricul fără manual",
  ],

  problems: [
    {
      id: "t1",
      level: 2,
      type: "calcul",
      q: "Fm pe un fir: I=2 A, ℓ=0,5 m, B=0,4 T, α=90°. Cât e Fm?",
      hint: "Fm=IℓBsinα.",
      a: "Fm=0,4 N.",
    },
    {
      id: "t2",
      level: 2,
      type: "calcul",
      q: "Circuit LC: L=10 mH, C=40 μF. T?",
      hint: "T=2π√(LC).",
      a: "T=2π√(4·10⁻⁷)≈4 ms.",
    },
    {
      id: "t3",
      level: 2,
      type: "calcul",
      q: "Fotoelectric: λ₀=300 nm. Lucrul de extracție Le? (hc≈1240 eV·nm)",
      hint: "Le=hc/λ₀.",
      a: "Le≈4,13 eV.",
    },
    {
      id: "t4",
      level: 2,
      type: "calcul",
      q: "Kepler: planeta cu T=8 ani. a=?",
      hint: "T²=a³.",
      a: "a=4 UA.",
    },
    {
      id: "t5",
      level: 2,
      type: "calcul",
      q: "Radioactiv: după 3 T½ ce fracțiune rămâne?",
      hint: "(1/2)³.",
      a: "1/8 = 12,5%.",
    },
  ],

  quiz: [
    {
      q: "Semnul „−” din legea lui Faraday exprimă:",
      options: ["Lenz", "Ohm", "Ampère", "Hubble"],
      correct: 0,
    },
    {
      q: "hν = En−Em este:",
      options: ["Kepler II", "Postulatul frecvențelor (Bohr)", "Hubble", "Thomson"],
      correct: 1,
    },
    {
      q: "Dezintegrarea α scade A cu:",
      options: ["1", "2", "4", "0"],
      correct: 2,
    },
    {
      q: "Soarele e pe diagrama HR pe:",
      options: ["Supergigantă albastră", "Secvența principală", "Pitică albă imediat", "Nebuloasă planetară"],
      correct: 1,
    },
  ],
};
