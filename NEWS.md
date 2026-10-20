# NEWS

Änderungen an der Website, neueste oben.

## Neugestaltung 2026 (Entwurf, PR #4)

Stand 17.10.2026. Noch nicht live, nur in der Deploy Preview
(https://deploy-preview-4--hannesbru.netlify.app/).

### Aufbau und Inhalt

- Unsere Biere (20.10.2026): Das Vernemmer Pils (Pilsener Malz, Saazer und Hallertauer Perle, kalt gehopft, „Erfrischend & angenehm herb“) ist kein
  Sonderbier mehr und steht jetzt unter Über uns, Unsere Biere (Foto noch Platzhalter). Jedes Bier hat eine kurze
  Sommelier-Beschreibung und einen Knopf „Charakterprofil“: ein Fenster mit Netzdiagrammen der Malz- und Hopfensorten
  (eigene Darstellung nach Weyermann® Malz Aroma Rad und BarthHaas Hop Harvest Guide 2021, mit Quellenangabe) und den
  Besonderheiten der Rohstoffe. Startseite zeigt fünf Biere nebeneinander.
- Neue, schlankere Struktur mit vier Menüpunkten: Über uns, Veranstaltungen, Sonderbiere, Buchen & Mieten
  (früher „Leistungen“; die alten Adressen /leistungen/ und /angebote/ leiten weiter).
- Buchen & Mieten: oben der Hinweis, dass Anfragen per E-Mail oder Telefon willkommen sind, mit zwei Knöpfen
  (Nummer und Adresse leicht verschleiert). Die E-Mail-Links im Fließtext sind entfallen.
  Unten „Mehr im Online-Shop“ (SumUp) mit Verweis auf Gutscheine, Gläser mit Logo, Party-Kegs.
- Bierseminare: Kurzfassung mit Dauer (4 Stunden), Kosten (29 bis 39 € pro Person), Teilnehmerzahl (15 bis 30) und Termin
  direkt auf der Seite. Die ausführliche Beschreibung (Seminar und Frauen-Seminar mit Carola Humpe) steht hinter dem Knopf
  „Weitere Informationen“ in einem Fenster, dort wörtlich wie im Word-Dokument.
  Neu: Kühl-Anhänger mit Zeichnung (Seiten- und Rückansicht, Klick vergrößert; Maße und Leistung sind in der Zeichnung noch Platzhalter, weitere Details fehlen noch). Party-Kegs stehen nicht mehr als eigener Abschnitt auf der Seite.
- Bier-Gondel (einheitlich so geschrieben wie auf der Zeichnung): technische Zeichnung (Maße, Anschlüsse) als kleines Bild, vergrößert sich beim Anklicken.
  Darunter drei Live-Bilder als Vorschaubilder („Live Bilder. Zum Vergrößern anklicken.“); ein Klick öffnet eine Diashow mit Pfeilen, Tastatur und Wischen. Bilder bearbeitet (Tonwert, Rauschen, Schärfe), Kennzeichen unkenntlich gemacht.
- Kühl-Anhänger (überall mit Bindestrich geschrieben): ein Live-Bild als Vorschau mit Vergrößerung unter der Zeichnung.
  Der alte Bereich „Naies“ (Artikel) ist ausgeblendet, die Beiträge bleiben im Repo.
- Startseite: Bannerfoto mit den drei Gläsern (enger auf die Gläser geschnitten), Claim, Piktogramme,
  darunter „Unsere Biere“ mit Fotos.
- Biere und Sonderbiere kommen aus `data/biere.yaml` und `data/sonderbiere.yaml`.
- Malz- und Hopfensorten aller Biere nach der Liste vom 18.10.2026, bei den Sonderbieren neu angezeigt (Urbock wie Urstoff).
- „Bierbrau-Seminar“ heißt jetzt „Bierseminare“.
- Sprachumschalter Hochdeutsch / Kurpälzisch. Die kurpfälzischen Texte sind ein Entwurf und müssen von Uwe geprüft werden.

### Gestaltung

- Neues Design mit eigenen Farben (Holz, Lamelle, Amber) und selbst gehosteten Schriften (Alegreya).
- Quadratisches Logo ohne „Verne“-Schriftzug oben links. Der große Schriftzug „HannesBräu Frischbier“
  steht nur auf großen Bildschirmen links über dem Claim, auf dem Handy nicht.
- Ausklappbares Menü (Burger-Menü) auf dem Handy.
- Piktogramme etwas kleiner und einheitlich: alle gefüllt und rund (Facebook, Instagram, Maps-Pin, Shop, Merch). Das Shop-Piktogramm (SumUp-Shop) ist jetzt eine Ladenfront statt einer Flasche.

### Veranstaltungen

- Eigene Terminliste statt des alten Kalender-Widgets. Die Termine kommen weiter aus dem öffentlichen
  Google-Kalender (dort pflegen), werden aber über eine Netlify-Funktion geladen. Besucher verbinden sich
  dabei nicht mit Google.
- Pro Termin ein Knopf „In meinen Kalender“, dazu „Kalender abonnieren“.
- Die festen Abschnitte „Ausschank“ und „Live-Musik“ sind entfallen. Es gelten nur die Kalendertermine.
- Die Newsletter-Anmeldung ist vom Impressum hierher gewandert. Sie ist jetzt ein schlichtes eigenes Formular,
  Mailchimp bekommt die Daten erst beim Absenden.

### Kontakt und Datenschutz

- Die Handynummer steht nirgends mehr auf der Website.
- Im Impressum stehen die Festnetznummer 06204 611206 und info@hannesbräu.de, beide leicht verschleiert
  (im Quelltext nur kodiert, damit Adress-Sammler sie schwerer finden).
- Im Footer stehen nur noch die Adresse und der Link zum Impressum.
- Das alte Kontaktformular (Formspree) ist entfernt.
- Neue Seite Datenschutz (geprüft: Text abgeglichen, Mailchimp-Double-Opt-in und AV-Vertrag ok, Netlify-AVV gilt über die Nutzungsbedingungen), im Footer neben dem Impressum verlinkt.
- Google Analytics, Mailchimp-Popup und Cookie-Banner (Netlify-Snippets) entfernt, auch live (17.10.2026).
  Die Seite setzt keine Cookies mehr. Die Google-Verifizierungscodes stehen jetzt im Repo.
- Die eingebettete Google-Maps-Karte ist durch die Knöpfe „Route planen“ (Google Maps) und OpenStreetMap ersetzt.
  Google wird erst auf Klick geladen.

### Offen

- Kurpfälzische Texte und Menünamen prüfen (Uwe).
- Sonderbiere: Tony, Dunkles Geheimnis und Noigeblaggder sind mit Beschreibung und Zutaten von den Etiketten übernommen.
  Urbock ist als Urstoff mit mehr Schüttung beschrieben. Offen: Zutaten von Urstoff, Pils, Urbock, Fotos für alle, Auswahl prüfen.
- Eigenes Foto für das Weehze.
- Aktuelle Bierdaten (Art, Malz, Hopfen). Die Stammwürze steht bewusst nicht auf der Website.
- Bier-Gondel unter „Buchen & Mieten“ so richtig? Kühl-Anhänger: Größe, Preis, Abholung. Party-Kegs im SumUp-Shop anlegen.
- Ausschank-Termine als Serie im Google-Kalender eintragen.
- Nach dem Livegang die beiden Verifizierungs-Snippets in Netlify löschen.
