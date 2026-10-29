# Hydrocare · Studio V · Klantenpreview V1

Tijdelijk websitevoorstel, 29 oktober 2026. Geen vervanging van een bestaande website. Geen gekoppeld bedrijfsdomein. Openbare preview zonder login, met noindex en demoformulier.

## Website
Zes pagina’s: Home, Diensten, Realisaties, Over Hydrocare, Contact en Privacy. Frameworkvrije statische HTML, gedeelde CSS en JavaScript. Geschikt voor Cloudflare Pages: publiceer de map `dist`, zonder buildcommando. `python3 build.py` genereert de HTML. CSS en JavaScript worden rechtstreeks onderhouden in `dist`. Geen externe lettertypen, scripts of dependencies.

## Bronnen en zekerheid
- Opdracht van Studio V: Daan, Antwerpen en Limburg, voorkeur schriftelijk contact, vier originele werkfoto’s en bestaand logo.
- ZIP bevat zes bestanden en geen e-mailtekst. Beide logo’s zijn visueel identiek. Het originele logo bleef behouden; alleen de witte buitenmarge is bijgesneden. Geen AI-nagetekende of onnauwkeurig transparant gemaakte variant.
- IMG_6250: pannendak met mos. IMG_6251: hetzelfde herkenbare dak zonder het zichtbare mos. Zelfde gevel, aansluitingen en pannenstructuur; camerahoeken verschillen. Naast elkaar geplaatst, geen overlaid slider of geretoucheerd resultaat.
- IMG_6277 en IMG_6278: dakgootbeelden, afzonderlijk getoond. Geen bewezen voor-en-napaar.
- Dakreiniging, ontmossing en dakgootreiniging blijven een voorstel op basis van beeldmateriaal. Geen exacte uitvoeringsmethode, tarieven, garanties, termijnen, certificering of reviews toegevoegd.
- Zoekonderzoek gaf geen betrouwbare match voor deze Hydrocare van Daan. Gegevens van de gelijknamige Nederlandse hydrauliekfirma zijn uitgesloten.

## Ontwerp
Marineblauw, helderblauw en cyaan ontleend aan het logo. Representatieve logo-kleuren: #092F66, #0C5291, #107DC1, #2AA1DF, #5ABFEF. Interface gebruikt #092F66, een donkerder #0C70AD voor beter leesbare knoppen, en #5ABFEF. Grote echte projectbeelden, duidelijke typografie, ruime secties en een korte aanvraagroute. Op mobiel staat het offerteformulier vóór de overige contactuitleg.

## Interacties
Mobiel menu met Escape, projectfilters met aria-pressed, native modale beeldvergroting met toetsenbordsluiting, FAQ-accordions. Formulier met verplichte velden, e-mailcontrole, optioneel telefoonnummer, lokale fotoselectie met maximaal vijf afbeeldingen van 10 MB, bestandsverwijdering en demosamenvatting. Geen verzending, uploads, database, localStorage, analytics of marketingcookies. Alle onbekende contactroutes tonen uitleg.

## Validatie
- JS syntaxcontrole geslaagd.
- Browser: desktop-home, galerijfilter, fotomodal, Escape, ingevuld demoformulier en demosamenvatting gecontroleerd.
- Alle zes pagina’s bij iframebreedtes 320, 390 en 768 px gemeten: geen horizontale overflow na herstel van regiosectie.
- Mobiel menu geopend en aria-expanded gecontroleerd. Logohoogte en volgorde contactformulier gecorrigeerd na visuele controle.
- Lokale bestandsselectie heeft limietcontrole in code; de bestandskiezer is niet end-to-end getest op een fysiek mobiel toestel. Geen Lighthouse-score of volledige toegankelijkheidscertificering geclaimd.

## Nog nodig vóór productie
1. Definitieve diensten en uitvoeringsmethode, inclusief welke dakmaterialen behandeld mogen worden.
2. Ontvangend e-mailadres, WhatsApp-nummer, Facebook Messenger-profiel en secundair telefoonnummer.
3. Juridische handelsnaam, ondernemingsnummer, adres, verantwoordelijke en privacycontact.
4. Persoonlijke introductie en eventueel portret van Daan; toestemming voor definitief publiek fotogebruik bevestigen.
5. Productieformulier: servervalidatie, spambeveiliging, mailbezorging, veilige uploads, bewaartermijnen en privacydocument afronden en testen.
6. Definitieve hosting, domein en SEO-metadata na expliciete productieopdracht. Noindex blijft actief tot die opdracht.

## Onderzoek
Concurrentiepatronen en zoekintenties bekeken, zonder hun bedrijfsclaims over te nemen:
- https://www.dedakgootreiniger.be/ — dakgootreiniging en lokale bereikbaarheid.
- https://reco.be/reinigingswerken/ — concrete diensten en beeldmateriaal.
- https://toiturewash.be/nl/offerte/ — schriftelijke aanvraag met foto’s.
- https://dsp-cleaning.be/voor-particulieren/dakgoten-reinigen/ — aanvraaginformatie en lokale context.
Geen zoekvolumes gemeten. Voorwaardelijke intenties na dienstenbevestiging: dakreiniging / dak ontmossen / dakgoot reinigen + Antwerpen of Limburg, en offerte + dienst. Geen verzonnen gemeentevestigingen of LocalBusiness-data.

## Presentatie aan Daan
“Dit voorstel vertrekt van je eigen logo en foto’s. Bezoekers zien meteen je werkgebied en de uitgevoerde werken en kunnen zonder te bellen hun vraag en foto’s doorgeven. Je kunt alle pagina’s op je smartphone bekijken. Het formulier is voorlopig een demo; je definitieve diensten en contactgegevens vullen we samen aan.”

## Wijzigingslog
V1: volledige eerste bouw; logo behouden, vier foto’s geoptimaliseerd; zes pagina’s; galerij en demoformulier; responsive correcties; openbare tijdelijke preview via Sites omdat beide Cloudflare-geautoriseerde computers offline waren. Cloudflare Pages-deployment is niet uitgevoerd.
