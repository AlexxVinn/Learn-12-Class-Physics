# Fizică XII – Învățare activă (MVP)

Platformă de învățare pentru **fizica clasei a XII-a** (Republica Moldova), construită pe baza manualului:

> Marinciuc, Rusu, Nacu, Tiron – *Fizică. Astronomie*, clasa a XII-a, Știința, 2017

## De ce există?

Manualul e lung și greu de digerat. Aici ai:

1. **Teorie scurtă** (esența în câteva puncte)
2. **Formule & reguli** clare
3. **Probleme** pe nivele (indiciu → rezolvare)
4. **Simulatoare** interactive ca să vezi fenomenul
5. **Checklist + quiz** pentru auto-verificare
6. **Plan pe 4 săptămâni** pentru Cap. 1–2

## Ce acoperă MVP-ul (paginile 1–40)

### Capitolul 1 – Electromagnetismul
| Temă | Conținut | Simulator |
|------|----------|-----------|
| 1.1 | Câmp magnetic, linii, Oersted, burghiu | ✅ |
| 1.2 | Inducție B, forța electromagnetică | ✅ |
| 1.3 | Forța Lorentz | ✅ |
| 1.4 | Mișcare în B (cerc, ciclotron, spectrograf) | ✅ |
| 1.5 | Dia / para / feromagnetici, μr | — |
| 1.6 | Inducție EM, Faraday, Lenz, flux | ✅ |
| 1.7 | Autoinducție, inductanță L | ✅ |
| 1.8 | Energia câmpului magnetic Wm | — |

### Capitolul 2 – Curent alternativ
| Temă | Conținut | Simulator |
|------|----------|-----------|
| 2.1 | Generarea t.e.m. alternative | ✅ |
| 2.2 | Valori efective I, U | — |
| 2.3 | Circuite R, L, C, RLC, rezonanță | ✅ |
| 2.4 | Puteri Pa, Pr, P, cosφ | — |
| 2.5 | Transport, transformator | ✅ |

## Cum folosești (metoda)

1. Citește teoria scurtă (2–5 min)
2. Memorează formulele/regulile
3. Rezolvă problemele (întâi indiciul, apoi soluția)
4. Joacă-te cu simulatorul – schimbă parametrii
5. Bifează checklist-ul și fă quiz-ul

**Nu citi tot capitolul din manual.** Folosește teoria de aici, apoi problemele.

## Pornire locală

Deschide `index.html` în browser **sau**:

```bash
cd fizica-xii
python3 -m http.server 8080
```

Apoi: http://localhost:8080

## Structura proiectului

```
fizica-xii/
├── index.html
├── css/style.css
├── js/app.js
├── js/simulators.js
├── data/curriculum.js      # plan + lista temelor
├── data/content-cap1.js    # teorie + probleme Cap.1
└── data/content-cap2.js    # teorie + probleme Cap.2
```

## Pașii următori (după MVP)

1. Cap. 3 – Oscilații și unde EM + optică
2. Cap. 4 – Relativitate
3. Cap. 5–7 – Cuantică, atom, nucleu
4. Cap. 8 – Astronomie
5. Simulatoare mai avansate (3D / WebGL) pe teme grele
6. Bank de probleme tip examen + timer

## Notă

Temele marcate cu `*` în manual sunt pentru profilul real. În MVP sunt incluse pentru că sunt esențiale la probleme.
