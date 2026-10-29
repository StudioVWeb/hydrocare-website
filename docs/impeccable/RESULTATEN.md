# Hydrocare Impeccable pilot — gemeten resultaat (29 oktober 2026)

## Uitvoering
GitHub Actions workflow: Hydrocare Impeccable pilot (isolated).
- Baseline-run: https://github.com/StudioVWeb/hydrocare-website/actions/runs/40861340324
- Herhaalde run na CSS-correcties: https://github.com/StudioVWeb/hydrocare-website/actions/runs/40861593479
- Officiële installer: impeccable@4.8.0; onderliggende engine op runner: v0.1.18.
- Installer heeft projectscoped de skill geïnstalleerd onder .claude/skills/impeccable/SKILL.md (in tijdelijke GitHub checkout), met hooks uit in CI.
- Tests: Python HTML generator, 7 statische pagina's, statische checker, JS syntax, Impeccable detector op dist, home, contact en realisaties.
- Beide CI-runs geslaagd. Detector-exitcode 2 betekent bevindingen, dus géén technische runtimefout.

## Voor- en nameting: detector-aantallen

| Scan | Baseline | Na CSS-fix | Verschil |
| --- | ---: | ---: | ---: |
| Alle bronbestanden (bron/gegenereerde HTML) | 90 | 58 | -32 |
| Gerenderde homepage | 20 | 17 | -3 |
| Gerenderde contactpagina | 13 | 6 | -7 |
| Gerenderde realisaties | 8 | 6 | -2 |

Deze aantallen zijn **niet optelbaar**: meldingen in de broncontrole herhalen bevindingen over verschillende pagina's. Het is ook geen percentage-score of formele WCAG-conformiteitsverklaring.

## Aangepast
In dist/style.css, uitsluitend op de geïsoleerde pilotbranch:
1. Formulierplaceholders van #7a8fa0 naar de bestaande --muted (#4a6073) voor leesbaarheid.
2. CTA-teksten op blauw verduidelijkt naar #f4fbff, zonder de merkachtergrond te veranderen.
3. Letterafstand van kleine previewbalktekst van .06em naar .03em.
4. Functionele hero-labeltekst van 10 naar 12px en tracking van .18 naar .12em.

De daaropvolgende source-detectie meldde:
- low-contrast: 17 -> 0
- wide-tracking: 14 -> 0
- undersized-ui-text: 1 -> 0

De vijf contrastmeldingen voor contact-placeholders verdwenen ook uit de daadwerkelijke URL-scan (5 -> 0).

## Bewust behouden / vergt visuele beoordeling
- Instrument Serif en Geist: huidige expliciete merkkeuze; 'overused-font' is niet automatisch een defect.
- De redactionele serif-italic koppen, eyebrowlabels en druppelhero: eerst beoordelen in beeld en toetsen aan de klantbrief, niet blind verwijderen.
- Bronmeldingen over radial glow, shadow, ingesloten kaarten en schijnbaar krappe secties kunnen door generieke patroonregels worden veroorzaakt; alleen na screenshotinspectie aanpassen.
- Geen niet-gecontroleerde nieuwe informatie, foto's, diensten of interacties toegevoegd.

## Nog niet voltooid
Deze technische audit werd in GitHub Actions uitgevoerd en een beperkte CSS-correctie is direct op basis van detectorbevindingen doorgevoerd. **Claude Code is nog niet interactief gestart met de Impeccable-skill of hooks**. Nog nodig: in Claude de projectcheckout openen, officiële installatie lokaal activeren, /impeccable init / critique / audit / polish uitvoeren, screenshots 390/1440px en keyboard/WCAG regressie vergelijken en de visuele conclusie documenteren.

## Grenzen en volgende beslissing
Geen deployment, geen merge en geen aanpassing aan main, Cloudflare of de Hydrocare-productie. Alleen als de volledige Claude-designproef de oorspronkelijke premium uitstraling verbetert én functies/inhoud bewaart, Impeccable vervolgens op Babo overwegen.
