# Hydrocare website · broncodeoverdracht

De originele, onderhoudbare broncode van het bestaande Studio V-websitevoorstel voor Hydrocare. Geen reconstructie van de publieke website en geen redesign.

**Bron:** ChatGPT Sites, opgeslagen versie 1, commit `062575d03a1c638634d84d6220d7d01206afa6ed`, gecontroleerd op 29 oktober 2026. Dit was de nieuwste opgeslagen versie op het moment van export. De bestaande publieke preview is niet aangepast of opnieuw gepubliceerd.

## Snel starten

Vereiste: Python 3.10 of nieuwer. Geen npm-installatie of externe Python-pakketten nodig. Node.js is alleen optioneel voor de JavaScript-syntaxcontrole.

Voer alles uit vanuit de uitgepakte projectmap:

```bash
python3 build.py
python3 scripts/check.py
python3 -m http.server 4173 --bind 127.0.0.1 --directory dist
```

Open daarna `http://127.0.0.1:4173/`. Op Windows kun je `py` gebruiken waar hierboven `python3` staat. Stop de server met Ctrl+C.

De website is statisch. De map `dist` bevat naast uitvoer ook de oorspronkelijke CSS-, JavaScript- en afbeeldingsbronnen. Het is dus **geen wegwerpmap**: verwijder `dist` niet vóór een build. `build.py` maakt de HTML-pagina’s, robots.txt en headers opnieuw aan, maar kopieert geen ontbrekende CSS of assets terug.

## Structuur en onderhoud

| Bestand/map | Functie |
| --- | --- |
| `build.py` | Oorspronkelijke HTML-generator; gedeelde navigatie, footer, pagina-inhoud en componentfuncties |
| `dist/style.css` | Oorspronkelijke stijlen en responsive regels |
| `dist/app.js` | Oorspronkelijke interacties, galerij en demonstratieformulier |
| `dist/assets/` | Alle bestaande geoptimaliseerde websiteafbeeldingen, logo, favicon en Open Graph-beeld |
| `dist/*/index.html` | Gegenereerde pagina’s; worden door `build.py` overschreven |
| `dist/_headers`, `dist/robots.txt` | Oorspronkelijke beveiligings- en noindexconfiguratie |
| `originals/` | De vier ongewijzigde originele JPEG-foto’s en beide aangeleverde PNG-logo’s |
| `.openai/hosting.json` | Oorspronkelijke Sites-projectconfiguratie, alleen bewaard voor herkomst; niet gebruiken om te publiceren |
| `docs/sites-readme-original.md` | Oorspronkelijke README, byte voor byte behouden |
| `SOURCE_PROVENANCE.json` | Bronversie, bestandslijst en SHA-256-controlewaarden |
| `scripts/check.py` | Lokale controle van routes, assets en previewinstellingen; optioneel oorspronkelijke baseline controleren |
| `CLAUDE.md` | Overdrachtsinformatie voor Claude Code |

Wijzig teksten en HTML-componenten in `build.py`, stijlen in `dist/style.css` en interacties in `dist/app.js`. Voer daarna de build opnieuw uit. De zes pagina’s zijn Home, Diensten, Realisaties, Over Hydrocare, Contact en Privacy. Er is ook een eigen 404-pagina.

## Controleren

```bash
python3 build.py
python3 scripts/check.py
# Optioneel als Node.js aanwezig is:
node --check dist/app.js
# Alleen om de originele exportbaseline te controleren, vóór latere wijzigingen:
python3 scripts/check.py --baseline
```

De export is in een aparte kopie gebouwd. Alle 25 oorspronkelijke bronbestanden zijn bewaard, waarbij alleen de oorspronkelijke README is verplaatst naar `docs/sites-readme-original.md`. De overige oorspronkelijke bronbestanden zijn niet gewijzigd. De zes originele uploadbestanden zijn extra toegevoegd. Ook de bijgeleverde HTML komt na een nieuwe build exact overeen met de oorspronkelijke uitvoer.

## Beperkingen die bewust behouden zijn

- Offerteformulier en foto’s werken uitsluitend lokaal in demonstratiemodus. Niets wordt verzonden of geüpload.
- WhatsApp en Messenger tonen een uitleg; er zijn nog geen bevestigde contactaccounts aangesloten.
- Diensten, contactgegevens en juridische bedrijfsgegevens moeten nog worden bevestigd.
- Noindex blijft ingeschakeld. Er zijn geen analytics of marketingcookies toegevoegd.
- De bestaande verwijzingen naar de klantenpreview in Open Graph-metadata zijn behouden om de export exact te houden. Pas ze pas aan als een nieuwe omgeving expliciet wordt ingericht.
- Geen wachtwoorden, API-sleutels of Git-inloggegevens nodig voor lokaal gebruik. Git-historie en sessieconfiguratie zijn niet geëxporteerd.

## Overzetten naar een nieuwe private GitHub-repository

Doelnaam: `StudioVWeb/hydrocare-website`. Tijdens deze overdracht kon die repository niet aangemaakt worden: de aangesloten GitHub-tool ondersteunt geen repositorycreatie, de browser is niet aangemeld en de gekoppelde computers zijn offline. Er is niets naar GitHub geschreven. Een 404 bij controle bewijst niet dat een ontoegankelijke private repository niet bestaat; maak daarom alleen een **nieuwe, lege private repository** aan als de naam beschikbaar is.

Na het aanmaken van de lege private repository, zonder README of automatische publicatie, vanuit deze map:

```bash
git init -b main
git add .
git commit -m "Import original Hydrocare Sites source"
git remote add origin https://github.com/StudioVWeb/hydrocare-website.git
git push -u origin main
```

Gebruik alleen deze nieuwe repository. Gebruik geen force-push als de repository al inhoud bevat. Voeg geen tokens toe aan bestanden of de remote-URL. Deze overdracht bevat geen automatische deployworkflow en geen publicatiecommando.

## Ontwerp, inhoud en projectcontext

Zie `docs/sites-readme-original.md` voor de oorspronkelijke ontwerpkeuzes, projectbronnen, onzekerheden, voorlopige diensten en productievoorwaarden. De beeldbestanden in `originals` zijn uitsluitend voor verdere ontwikkeling en behoren niet tot de publiek te hosten map `dist`.
