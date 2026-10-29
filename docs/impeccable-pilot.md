# Studio V — Hydrocare × Impeccable pilot

**Repository:** `StudioVWeb/hydrocare-website` (privé)
**Pilotbranch:** `experiment/impeccable-hydrocare-20261029`
**Basis:** `claude/hydrocare-premium-redesign-lgvcn8`
**Geen productiepublicatie.** Bestaande PR naar main ongemoeid laten.

## Technische basis
Dit is een statische site zonder npm-project; de HTML wordt gegenereerd door `build.py`, styles staan in `dist/style.css` en gedrag in `dist/app.js`. **Verwijder `dist` nooit**; het bevat bronassets. Routes: home, diensten, realisaties, over, contact, privacy, 404.

## Installatie voor Claude Code

Bevestig dat je in de Hydrocare-projectmap op de *pilotbranch* staat:

```bash
git branch --show-current
git status --short
npx --yes impeccable@4.8.0 install -y --providers=claude --scope=project
```

Accepteer de lokale Claude Code design hook als Claude/installer dat vraagt. Sluit Claude Code af en heropen zodat de skill beschikbaar is. De CI-installatie gebruikt `--no-hooks`, omdat CI geen interactieve agent is; de hook blijft een machine-lokale instelling.

Gebruik in Claude Code:
```text
/impeccable init
/impeccable audit
/impeccable critique
/impeccable polish
/impeccable distill
```

Eerst analyseren, dan prioritair de grootste 3-5 aantoonbare tekortkomingen aanpakken. Leg alle keuzes kort vast onder `docs/impeccable/` met voor/na screenshots (desktop 1440, tablet 768, mobiel 390 én 320). Laat Claude de oorspronkelijke merkidentiteit respecteren; herschrijven van diensten/claims is niet toegestaan.

## Objectieve nulmeting en regressiechecks

```bash
python3 build.py
python3 scripts/check.py
node --check dist/app.js
npx --yes impeccable@4.8.0 detect --json dist > impeccable-source.json
python3 -m http.server 4173 --bind 127.0.0.1 --directory dist
# Vanuit een tweede terminal:
npx --yes impeccable@4.8.0 detect --json http://127.0.0.1:4173/ > impeccable-rendered.json
```

**Detector-exitcodes:** 0 = geen bevindingen, 2 = kwaliteitsbevindingen (gewoon rapporteren), 1 = scan mislukt (niet als "pass" tellen). Gebruik exact dezelfde scanconfiguratie voor de voor- en nameting. CI archiveert rapporten in GitHub Actions.

## Acceptatie
- CI-bouw + bestaande statische controles PASS.
- Impeccable geïnstalleerd in `.claude/skills/impeccable` en onder Git-versiebeheer op de pilotbranch.
- Detector draait echt tegen bron én gerenderde pagina, met ruwe bevindingen in artifacts.
- Claude Code gebruikt de Impeccable-skill voor een geïnformeerde audit en verbeteringen.
- Aantoonbare verbetering van severity/impact zonder nieuwe a11y-, performance- of UX-regressies.
- Alle pagina's op mobiel en desktop handmatig gecontroleerd. Geen verzonnen gegevens. Demoform/noindex intact.
- Alleen pilotbranch en concept-PR; geen merge naar main, geen productiepublicatie.

## Voorlopige grenzen
De GitHub Actions test voert de detector en skillinstallatie uit, **niet** de Claude Code-agent. Een menselijke/Claude sessie op de repo is nodig voor echte redesign-iteraties. Meld dit expliciet; noem een detectorrapport niet een afgeronde UX-review.
