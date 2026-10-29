# Hydrocare Immersive V2 · Studio V

**Klantenpreview:** https://hydrocare-preview.pages.dev/  
**Repository:** `StudioVWeb/hydrocare-website`  
**Branch:** `feature/hydrocare-immersive-v2-20261029`  
**Basis:** `experiment/impeccable-hydrocare-20261029`, gebaseerd op de premium redesignbranch.  
**Publicatie:** Alleen het afzonderlijke Cloudflare Pages-previewproject `hydrocare-preview`; geen productiedomein.

## Creatieve implementatie
- Full-height donkere hero, echte dakfoto als achtergrond, gereinigde dakfoto in Hydrocare-druppelvorm.
- Doorlopende editorial scrollvertelling met scène-/fotoverdieping en leesscrollindicator, met reduced-motion-afhandeling.
- Echte foto's als grote voor/na-bewijssectie (onderscheid in camerahoek expliciet vermeld; **geen misleidende split-slider**).
- Nieuw scroll-storyblok over het proces van aanvraag tot afspraken.
- Meer art-directed contact-CTA met echt projectbeeld.
- Geoptimaliseerde mobiele compositie en behouden bruikbare navigatie, galerie, toegankelijkheidsfocus.
- Geen nieuwe services, ervaringen, prijzen, garanties of andere ongeverifieerde bedrijfsclaims.

## Technische implementatie
- Bewerken van pagina's / componenten: `build.py`.
- Vormgeving / responsive: `dist/style.css`.
- Interacties / bewegingslogica: `dist/app.js`.
- Vereiste bronassets: `dist/assets/` (nooit verwijderen voor build).
- Geen externe JS-/fontbibliotheken toegevoegd; bestaande CSP behouden.
- Formulier blijft expliciet demo en verstuurt of bewaart geen aanvragen.
- De preview heeft `noindex,nofollow,noarchive` en correcte Open Graph-basis-URL.

## Validatie
Op BSBO lokaal gecontroleerd:
- `py build.py` PASS
- `py scripts/check.py`: 7 HTML-pagina's, 0 issues
- `node --check dist/app.js` PASS
- `git diff --check` PASS
- Browsercaptures op 320, 390, 768, 1440 en 1920 px. Aanwezig in de voormalige lokale uitvoeromgeving; niet in deze repository gebundeld vanwege omvang. De 320-/390-/768-/1440-viewportbeelden van Home, Contact en Realisaties zijn ook door de uitvoerder visueel beoordeeld.
- Cloudflare upload: 34 bestanden, deployment geslaagd.
- Extern gecontroleerd: Home, Diensten, Realisaties en Contact bereikbaar; metadata bevat correcte URL en `noindex,nofollow,noarchive`.
- GitHub Actions op deze branch genereert en controleert het bijgewerkte HTML opnieuw.

## Nog te bevestigen
- Definitieve aangeboden diensten, werkmethodes, contactaccounts en juridische gegevens door Daan.
- Echte formulierverwerking / gekoppelde contactkanalen vóór enige productieactivatie.
- Laatste interactie-/consolecontrole op de publieke Cloudflare-deployment, indien de QA-machine opnieuw online komt.
- Klantfeedback op de nieuwe creatieve richting.

**Status:** publiek toegankelijke, niet-geïndexeerde klantenpreview voor beoordeling. **Geen toestemming voor productie/merge.**
