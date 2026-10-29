# Hydrocare — huidig ontwerp voor Impeccable pilot

Dit document beschrijft de bestaande premium redesign, geen mandaat tot een nieuw redesign.

## Positioning and visual language
Redactioneel, technisch verzorgd, betrouwbaar. Water, precisie en zichtbaar vakwerk. De druppelvorm uit het aangeleverde logo is het onderscheidend beeldmerk. Echte werffoto's, geen gegenereerde fotografie.

## Typography
- Instrument Serif (self-hosted) voor expressieve koppen en italic accenten.
- Geist (self-hosted) voor lopende tekst en interface.
- Fluid typography en sterke teksthiërarchie.
- Geen externe fonts vanwege CSP.

## Tokens from dist/style.css
- deep #06224a, navy #092f66, blue #0c70ad, blue-ink #0a5a8d
- sky #5abfef, ink #0b2036, paper #f6f8f9, mist #e7eff3
- Strakke randradius 4px, ruime marges, 8pt spacing, contentmax 1360px.

## Preserve signature design
- Donkerblauwe hero met grote serifkop en echte dakfoto achter de logo-druppel.
- Diensten in redactionele rijen, zonder generieke kaartgrids.
- Dakbeelden eerlijk naast elkaar: géén before/after-slider door andere camerahoeken.
- Galerij met filter en toegankelijk lightboxgedrag.
- Donker contactpaneel, demomodus van het formulier.
- Mobiel volledig scherm menu en gerichte sticky offerteknop.
- Beperkte purpose-driven motion; respecteer prefers-reduced-motion.

## Quality floor
- Verbeter alleen concrete fouten in ritme, hiërarchie, leesbaarheid, touch targets en breakpoints.
- Geen 'AI slop' zoals decoratieve cards, willekeurige gradients of icon tiles.
- Contrasten en focus zichtbaar en WCAG 2.1 AA, toetsenbordbediening en semantische headings.
- Test minstens 320, 375, 390, 768, 1024, 1440 en 1920px.
- Behoud bestaande CSP; geen inline script of stijl.
- Geen 3D, CDN- of build-afhankelijkheden voor louter decoratie.

## Controlled experiment
Baseline is redesignbranch claude/hydrocare-premium-redesign-lgvcn8. Eerst audit en screenshot, dan één gerichte Impeccable polish-pass op de homepage/hero, dan hetzelfde testpakket op alle pagina's. Andere delen alleen bij reproduceerbaar defect. Rapporteer voor/na en keuze: beter, gelijk of slechter.
