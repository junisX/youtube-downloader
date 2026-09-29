# YouTube Downloader – Download-Seite

Offizielle Download-Seite der Windows-Anwendung **YouTube Downloader v1.0.0**.
Die Seite ist statisch (HTML/CSS/JS), benötigt keinen Build-Schritt und wird über
**GitHub Pages** ausgeliefert:

**https://junisx.github.io/youtube-downloader/**

## Download-Buttons

Die Schaltflächen verweisen auf die Dateien im Release **v1.0.0** dieses Repos:

| Datei | Größe | SHA-256 |
|---|---|---|
| `YouTube.Downloader-Setup-1.0.0.exe` | 64,8 MB | `5E4238F7CA2223F1681FF20557902714EF02BCB4BBCD280033C1A1A9758E89F9` |
| `YouTube.Downloader.Portable.exe` | 86 MB | `711DDDAA09D5E0C4F4C7434742AA35E36297BEDF2B7C46C9FBFC2E04E460B94C` |

GitHub ersetzt Leerzeichen in Release-Asset-Namen durch Punkte – die Links in
`index.html` verwenden daher genau diese Schreibweise.

## Aufbau

```
index.html          Struktur, Inhalte, SEO/og-Metadaten, Download-Links
assets/style.css    Design (dunkelblau, flach, ohne Verläufe) + Responsive-Regeln
assets/app.js       Mobiles Menü, Bildansicht (Lightbox), aktiver Menüpunkt
assets/shot-*.jpg   Screenshots der Anwendung (1240 px breit, JPEG q74)
assets/logo-512.png, favicon-32.png, apple-touch-icon.png   Symbole
.nojekyll           GitHub Pages überspringt die Jekyll-Verarbeitung
```

Die Quelldateien liegen im Projekt der Anwendung unter
`YouTube Downloader/website/` und werden von dort in dieses Repository gespiegelt.

## Aktualisieren

1. Dateien in `website/` ändern (Quellordner der Anwendung).
2. In den download-links die neue Version/Tag-URL anpassen.
3. In diesen Ordner kopieren und pushen:

```powershell
Copy-Item .\website\* <site-repo>\ -Recurse -Force
git add -A && git commit -m "Seite aktualisieren" && git push
```

GitHub Pages baut innerhalb weniger Minuten neu.

## Hinweis

Die Seite bewirbt ausschließlich den **eigenen Gebrauch bei berechtigten Inhalten**;
der rechtliche Hinweis auf der Seite ist Bestandteil des Angebots.
