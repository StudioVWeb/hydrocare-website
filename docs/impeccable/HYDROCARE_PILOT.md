# Studio V — Impeccable × Claude Code pilot voor Hydrocare

## Status
Deze tak is uitsluitend bedoeld om Impeccable gecontroleerd te testen op de bestaande Hydrocare-premiumredesign. De site is al gebouwd; dit is GEEN nieuw websiteproject. Baseline: branch claude/hydrocare-premium-redesign-lgvcn8, PR #1 blijft open. De pilot heeft een eigen branch en PR.

## Waarom Hydrocare
De bestaande site heeft een sterk merkgebonden ontwerp, echte foto's, meerdere routes, een gallery/lightbox, een complex formulier in demomodus en geteste mobile UX. Een goede pilot moet onderscheid maken tussen echte ontwerpverbeteringen en overbodige AI-redesigns.

## Automatische test: GitHub Actions
Workflow: .github/workflows/impeccable-pilot.yml.

Op de GitHub Actions-runner:
1. Statische Python-build, projectcheck en JS-syntax controleren.
2. Officiële Impeccable CLI versie 4.8.0 in een tijdelijke checkout projectscoped voor Claude installeren, zonder hooks in CI.
3. Impeccable detector uitvoeren op dist/, gerenderde homepage, contact en realisaties op localhost.
4. JSON- en foutlograpporten 14 dagen als artifact bewaren.

Een detector-exitcode 2 betekent gevonden designproblemen en is een **geslaagde detector-test**, niet noodzakelijk een gebroken build. Exitcode 1 of timeout is een scanprobleem. Een groene Actions-run bewijst niet dat Claude Code lokaal is gestart of dat het design verbeterd is.

## Handmatige uitvoering in Claude Code (bestaande pilotbranch)
Voer opdrachten uit vanuit de projectroot, met Node.js >= 18.19 en Python 3.10+:

    git checkout pilot/impeccable-hydrocare-20261029
    npx --yes impeccable@4.8.0 install --providers=claude --scope=project
    python3 build.py
    python3 scripts/check.py
    python3 -m http.server 4173 --bind 127.0.0.1 --directory dist

Herstart Claude Code zodat de Impeccable-skill geladen wordt. Controleer dat de officieel geïnstalleerde skill/launcher beschikbaar is. In Claude:

    /impeccable init
    /impeccable document
    /impeccable critique de Hydrocare homepage
    /impeccable audit de homepage, contactpagina en realisaties
    /impeccable polish de homepage hero, ritme, typografie en CTA

PRODUCT.md en DESIGN.md bestaan al met brongetrouwe informatie. De init/documentstappen moeten die feiten controleren en verfijnen, NIET blind overschrijven of een nieuwe identiteit verzinnen.

## Controleerbaarheid: vóór- en nameting
Leg vóór een codewijziging vast:
- Git commit-SHA van de baseline.
- Screenshots bij 390 en 1440px van homepage; noteer eventueel contact/realisaties.
- Top 5 concrete bevindingen van audit, met bewijs en prioriteit.
- Detector-uitvoer voor bron en gerenderde homepage.

Voer vervolgens maximaal één gerichte polish-pass uit, niet een volledige restyling. Bij elke wijziging: file + reden + visueel effect. Leg daarna dezelfde screenshots en checks vast en beoordeel: beter / gelijk / slechter.

## Verplichte regressietesten
- python3 build.py
- python3 scripts/check.py
- node --check dist/app.js
- Acht aandachtspunten: hero-tekst leesbaar; druppelpositie op tablet; menu en sticky CTA mobiel; formuliervalidatie én duidelijk DEMO; galerie-filter en lightbox; toetsenbord/focus; reduced motion; geen overflow of mislukte request.
- Browser-QA op 320, 375, 390, 768, 1024, 1440, 1920px.
- Noindex, CSP, afbeeldingen, gebruikersclaims, originele assets ongewijzigd.

## Wat verboden is
Niet mergen naar main of naar de bestaande redesignbranch; geen productie-, DNS- of Cloudflarewijzigingen. Geen formulier live zetten, geen niet-bevestigde contactlinks, geen AI-fotografie, geen verzonnen commerciële claims. Geen andere klantensites wijzigen.

## Eindverslag
1. Impeccable-versie en installatie gecontroleerd? Ja/nee.
2. Claude Code skill/hook actief? Gecontroleerd / niet gecontroleerd.
3. Detector geslaagd? Bron ja/nee; gerenderde site ja/nee; aantallen bevindingen.
4. Topproblemen vóór/na, met screenshots en links naar commit.
5. Is de nieuwe Hydrocare-versie daadwerkelijk beter?
6. Welke Impeccable-commands zijn effectief voor Studio V, en welke creëren ruis?
7. Beslissing: alleen doorgaan naar Babo wanneer de Hydrocare-test visueel én technisch overtuigt.

## Externe bron
Officiële documentatie: https://github.com/pbakaus/impeccable ; https://impeccable.style/docs/
