# Hydrocare · Studio V · overdracht aan Claude Code

Dit project is de originele broncode-export van de bestaande Hydrocare Sites-preview. Bron: opgeslagen versie 1, commit 062575d03a1c638634d84d6220d7d01206afa6ed. Geen nagemaakte scrape of gereconstrueerde website.

Lees eerst README.md en docs/sites-readme-original.md.

## Werkwijze
- Start lokaal met Python; geen framework, npm of externe pakketten vereist.
- `python3 build.py` genereert HTML, robots en headers.
- `python3 scripts/check.py` controleert de statische website.
- `python3 -m http.server 4173 --bind 127.0.0.1 --directory dist` start lokaal.
- `dist` bevat óók CSS-, JS- en assetbronnen. Verwijder deze map niet.
- Bewerk HTML en teksten in build.py. Bewerk stijlen en interacties in dist/style.css en dist/app.js.
- SOURCE_PROVENANCE.json documenteert de oorspronkelijke baseline. --baseline is alleen voor exportintegriteit; die controle zal na bewuste wijzigingen terecht afwijken.

## Opdrachtgrenzen voor de overdracht
Behoud ontwerp, teksten, alle pagina’s, foto’s en interacties totdat de gebruiker wijzigingen vraagt. Voer geen redesign, deployment of domeinwijzigingen uit op basis van alleen deze overdracht. De bestaande chatgpt.site-preview moet intact blijven. Gebruik de historische .openai/hosting.json niet om die live site te wijzigen.

Werk alleen in de voor Hydrocare bestemde nieuwe repository. Geen andere Studio V-repositories aanpassen. Nooit secrets, tokens of wachtwoorden committen. Geen force-push over bestaande inhoud.

Het formulier blijft demo totdat de gebruiker een operationele koppeling opdraagt. Verzin geen diensten, contactgegevens, reviews of bedrijfsclaims. De precieze diensten en contactaccounts zijn nog niet bevestigd. Houd noindex actief tot expliciet toestemming voor productie wordt gegeven.

## Redesign (branch `claude/hydrocare-premium-redesign-lgvcn8`)
Op uitdrukkelijk verzoek van de gebruiker is het ontwerp vernieuwd; inhoud, foto’s, logo en functionaliteit zijn behouden. Zie `docs/redesign/` voor screenshots.
- Ontwerpsysteem staat bovenaan `dist/style.css` (tokens: kleur, type, ruimte, beweging). Typografie: Instrument Serif + Geist, zelf gehost in `dist/assets/fonts/` (SIL OFL, licenties erbij) omdat de CSP externe fonts blokkeert.
- Merkelementen: `mark.webp` / `mark-white.webp` (druppel, uit het aangeleverde logo gefreesd met transparantie), `drop.svg` (venstervorm voor de hero-foto), `drop-outline.svg`.
- Geen inline `style`-attributen of inline scripts: de CSP in `dist/_headers` staat dat niet toe. `scripts/check.py` controleert nu ook `url()`-verwijzingen in de CSS.
- Voor/na-beelden blijven naast elkaar met de oorspronkelijke eerlijke bijschriften; er is bewust geen overlappende schuifvergelijking (camerahoek verschilt).
- Nog steeds van kracht: demo-formulier, noindex, geen verzonnen diensten/contactgegevens/reviews, geen productiepublicatie.
