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


## Hydrocare Impeccable pilot (alleen branch pilot/impeccable-hydrocare-20261029)
De gebruiker wil **Impeccable met Claude Code evalueren**, met Hydrocare als testobject voordat toepassing op Babo wordt overwogen. Lees eerst PRODUCT.md, DESIGN.md en docs/impeccable/HYDROCARE_PILOT.md. Die documenten zijn de product- en ontwerpwaarheid; overschrijf ze niet met speculatieve AI-tekst.

Installeer de officiële projectskill van pbakaus/impeccable@4.8.0 in Claude Code, activeer na inspectie de officiële ontwerp-hook, verifieer de installatie, maak een voor/na-audit, en voer alleen een gecontroleerde kleine polish-pass uit op bestaande Hydrocare-webpagina's. Gebruik Impeccable met de juiste Claude-slashcommands (/impeccable init, document, critique, audit, polish). Geen willekeurige restyling of vervanging van echte assets.

Werk alleen op deze pilotbranch of een daarop gebaseerde testbranch. Houd beide bestaande PR's, main, domeinen, productie, Cloudflare, demoformulier, robots/noindex en CSP onaangeroerd. Geen deploy zonder expliciete opdracht. Run python3 build.py, python3 scripts/check.py en node --check dist/app.js, verifieer desktop/mobiel/toegankelijkheid en rapporteer concrete voor/na-bewijzen. Een CI-detectorrapport alleen betekent niet dat de Claude-test afgerond is.
