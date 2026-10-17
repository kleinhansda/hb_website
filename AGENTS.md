# AGENTS.md

Website der Mikrobrauerei Hannesbräu (www.hannesbru.de). Statische Seite mit Hugo, gehostet auf Netlify, Quelle auf GitHub.

## Arbeitsweise

- Änderungen immer auf einem eigenen Branch und per Pull Request. Nie direkt auf `main` (durch Ruleset `main-schutz` ohnehin blockiert).
- Vor dem Merge die Deploy Preview von Netlify prüfen (`deploy-preview-<nr>--hannesbru.netlify.app`). Gemergt wird nur nach Freigabe durch den Eigentümer.
- Kleine, thematisch getrennte PRs. Beschreibung auf Deutsch, was sich ändert und warum.

## Aufbau

- `content/ueber-uns/`, `content/veranstaltungen/`, `content/sonderbiere/`, `content/leistungen/`, `content/impressum/` Seiten (`_index.md` Hochdeutsch, `_index.pfl.md` Kurpfälzisch)
- `content/artikel/` alte Beiträge, ausgeblendet (werden nicht gebaut)
- `data/biere.yaml` die klassischen Biere, `data/sonderbiere.yaml` Sonderbiere. Bier ändern = nur diese Dateien bearbeiten.
- `layouts/` eigene Vorlagen (Gestaltung 2026), überschreiben das Theme
- `static/css/main.css` Gestaltung, `static/images/neu/` Banner und Wortmarke, `static/fonts/` selbst gehostete Schriften (kein Google Fonts, DSGVO)
- `config.toml` Hugo-Konfiguration inkl. Menüs je Sprache
- `netlify.toml` Build und Deploy Previews

## Darf geändert werden

- `content/**`, `data/**`, `static/images/**`

## Nur nach ausdrücklicher Anweisung ändern

- `config.toml`, `netlify.toml`, `assets/**`, `layouts/**`, `static/css/**`

## Nicht ändern

- `themes/` (Kopie des Themes Ananke, Anpassungen gehören in `layouts/` oder `assets/`)
- `public/` (Build-Ausgabe, wird von Netlify erzeugt)
- `archive/`, `google, DSVGO/` (Archiv, rechtliche Unterlagen)

## Regeln für Inhalte

- Sprache der Seite: Deutsch. Datumsformat `TT.MM.JJJJ` im Text, im Frontmatter ISO `JJJJ-MM-TT`.
- Bilder vor dem Einchecken verkleinern (Breite max. 1600 px), sprechende Dateinamen ohne Leerzeichen und Umlaute.
- Keine personenbezogenen Daten Dritter, keine Tracking-Skripte oder externen Einbindungen ohne Rücksprache (DSGVO).
- Termine kommen aus dem öffentlichen Google-Kalender (dort pflegen, nicht im Repo). Die Seite Veranstaltungen zeigt sie über `netlify/functions/termine.mjs` und den Shortcode `{{< termine >}}`.
- Zwei Sprachen: Hochdeutsch und Kurpfälzisch. Kurpfälzische Texte nur von Uwe oder David, nicht selbst erfinden.
- Hinweise für Entwürfe mit `{{< platzhalter >}}…{{< /platzhalter >}}`. Sie erscheinen nur in Deploy Previews, nie live.

## Build

- Hugo `0.125.6` (siehe `netlify.toml`), Produktion `hugo`, Previews `hugo -F -b $DEPLOY_PRIME_URL`.
- Kein R und kein blogdown nötig. Frühere R-Hilfsdateien wurden entfernt.
