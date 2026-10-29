# Hydrocare × Impeccable — polishronde 1

**Project:** Studio V / Hydrocare  
**Branch:** `experiment/impeccable-hydrocare-20261029`  
**Basis:** `claude/hydrocare-premium-redesign-lgvcn8`  
**Skill/CLI:** Impeccable 4.8.0 in Claude Code 2.1.312  
**Status:** verbeteringen op experimentbranch; geen merge en geen publicatie.

## Uitgevoerde wijzigingen

De eerste Claude-audit signaleerde onder meer contrast- en typografieproblemen. Eén berekening bleek fout: `#4a6073` op `#f6f8f9` geeft volgens de WCAG-formule **6,14:1**, niet 4,3:1; op `#e7eff3` circa **5,62:1**. Het correcte merkkleurtoken is daarom behouden.

In `dist/style.css` zijn 14 gerichte regels aangepast:

1. Placeholder: `#7a8fa0` → `#5a7486`, circa **3,15:1 → 4,61:1**.
2. Invoerveld- en onderwerpranden: `#bdcdd8` → `#7a92a3`, circa **1,53:1 → 3,05:1**.
3. Zes kleine interface-elementen opgehoogd van circa 10–11 px naar **12 px**; previewbalk-tracking verminderd.
4. Mobiele dock met `visibility:hidden` niet langer focusbaar wanneer verborgen of overruled door open menu/contactpagina.
5. Bestandslijstknop voor verwijderen heeft minimaal **44×44 px** aanraakoppervlak.
6. `text-wrap:pretty` op alinea’s tegen losse eenwoordige laatste regels (progressive enhancement).

Geen nieuwe diensten, tarieven, beloften, reviews, contactaccounts, echte foto's, fonts of merkkleuren; alle routes, privacyregels, noindex, CSP en demonstratieformulier zijn behouden.

## Technische validatie

Op BSBO werkelijk uitgevoerd:
- `python build.py` — PASS.
- `python scripts/check.py` — **7 HTML-pagina's, 0 issues**.
- `node --check dist/app.js` — PASS.
- Impeccable 4.8.0 detector: bronmeldingen **90 → 70**, exitstatus 2 (bevindingen, geen scanfout).

**Onafhankelijke GitHub Actions-nameting bevestigd na commit `7530da6`**:
- Bron: **70** meldingen, waarvan **56 warnings** en **14 advisories**.
- Categorie: 53 `slop`, 17 `quality`.
- Home: 17; diensten: 11; contact: 6; over: 7; privacy: 7; realisaties: 6.
- Regeltypes: 16 `overused-font`, 14 `italic-serif-display`, 12 `low-contrast`, 7 `hero-eyebrow-chip`, 7 `dark-glow`, 7 `radial-halo`, 5 `cramped-padding`, 2 `numbered-section-labels`.

De 20 weggevallen meldingen zijn geen op zichzelf staand bewijs van betere UX: semantiek, visuele kwaliteit en toegankelijkheid moeten in een echte browser worden beoordeeld. De font- en serif-waarschuwingen zijn deels bewust gekozen merktaal en zijn niet blind weggewerkt.

De Windows-specifieke UTF-8-fout in `build.py` is eerder afzonderlijk opgelost en op BSBO getest (commit `0aa8b69`).

## Niet afgerond / resterende controles

**Geen verifieerbare browser-screenshots** op 320/390/768/1440 px. De lokale server gaf HTTP 200, maar tijdens de Playwright-screenshotcapture verloor Desktop Commander de verbinding met de BSBO-computer. Daarom zijn responsive rendering, de dock-overgang en visuele impact van donkerdere formulierranden **nog niet visueel afgetekend**.

Ook moeten de resterende 12 `low-contrast`-meldingen nog individueel op echte zichtbare elementen worden gecontroleerd. Pas daarna kan de pilot als visueel goedgekeurd worden beschouwd.

## Veiligheid

Alle wijzigingen staan alleen in een draft-PR richting de bestaande redesignbranch. `main`, Cloudflare, productiedomeinen en andere Studio V-projecten zijn niet gewijzigd. Geen merge of deploy.
