# AGENTS.md

Website der Mikrobrauerei Hannesbräu (www.hannesbru.de). Statische Seite mit Hugo, gehostet auf Netlify, Quelle auf GitHub.

## Arbeitsweise

- Änderungen immer auf einem eigenen Branch und per Pull Request. Nie direkt auf `main` (durch Ruleset `main-schutz` ohnehin blockiert).
- Vor dem Merge die Deploy Preview von Netlify prüfen (`deploy-preview-<nr>--hannesbru.netlify.app`). Gemergt wird nur nach Freigabe durch den Eigentümer.
- Kleine, thematisch getrennte PRs. Beschreibung auf Deutsch, was sich ändert und warum.

## Aufbau

- `content/artikel/` Beiträge und Events als Markdown mit YAML-Frontmatter, Dateiname `JJJJ-MM-TT-titel.md`
- `content/events/`, `content/impressum/` Seiten
- `static/` Bilder und feste Dateien
- `assets/` Stylesheets und Ressourcen
- `config.toml` Hugo-Konfiguration
- `netlify.toml` Build und Deploy Previews

## Darf geändert werden

- `content/**`, `static/**`

## Nur nach ausdrücklicher Anweisung ändern

- `config.toml`, `netlify.toml`, `assets/**`

## Nicht ändern

- `themes/` (Kopie des Themes Ananke, Anpassungen gehören in `layouts/` oder `assets/`)
- `public/` (Build-Ausgabe, wird von Netlify erzeugt)
- `archive/`, `google, DSVGO/` (Archiv, rechtliche Unterlagen)

## Regeln für Inhalte

- Sprache der Seite: Deutsch. Datumsformat `TT.MM.JJJJ` im Text, im Frontmatter ISO `JJJJ-MM-TT`.
- Bilder vor dem Einchecken verkleinern (Breite max. 1600 px), sprechende Dateinamen ohne Leerzeichen und Umlaute.
- Keine personenbezogenen Daten Dritter, keine Tracking-Skripte oder externen Einbindungen ohne Rücksprache (DSGVO).
- Der eingebettete Google-Kalender (Agenda) bleibt unverändert.

## Build

- Hugo `0.125.6` (siehe `netlify.toml`), Produktion `hugo`, Previews `hugo -F -b $DEPLOY_PRIME_URL`.
- Kein R und kein blogdown nötig. Frühere R-Hilfsdateien wurden entfernt.
