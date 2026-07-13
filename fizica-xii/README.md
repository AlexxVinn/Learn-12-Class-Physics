# Fizică XII – Învățare activă

Platformă pentru învățarea fizicii de clasa a XII-a (RM): **teorie scurtă → probleme → simulatoare**.

## Acoperire actuală (pag. 1–90)

| Cap. | Temă | Status |
|------|------|--------|
| 1 | Electromagnetism | ✅ complet |
| 2 | Curent alternativ | ✅ complet |
| 3 | Oscilații / unde / optică ondulatorie | ✅ complet |
| 4 | Relativitate restrânsă | ✅ complet |
| 5 | Fizică cuantică (început: 5.1–5.4) | ✅ |

## Cum pornești

```bash
cd fizica-xii
python3 -m http.server 8080
```

Deschide http://localhost:8080

## Metodă

1. Teorie scurtă (2–5 min)  
2. Formule & reguli  
3. Probleme pe nivele (indiciu → soluție)  
4. Simulator  
5. Checklist + quiz  

Planul pe **8 săptămâni** e pe pagina Acasă și în `PLAN_INVATARE.md`.

## Simulatoare noi (batch 41–90)

- Circuit LC (Thomson)  
- Undă EM (E⊥B)  
- Radar (r = cΔt/2)  
- Interferență Young  
- Rețea de difracție  
- Dilatare/contracție relativistă  
- Efect fotoelectric  
- Undă de Broglie  

## Structură

```
fizica-xii/
├── index.html
├── css/style.css
├── js/app.js
├── js/simulators.js
├── data/curriculum.js
├── data/content-cap1.js … content-cap5.js
├── PLAN_INVATARE.md
└── README.md
```

## Urmează

Cap. 5 (final) + Cap. 6 (atom) + Cap. 7 (nucleu) + Astronomie.
