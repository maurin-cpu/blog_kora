# Next.js Blog

Ein moderner, vollständig funktionsfähiger Blog, erstellt mit Next.js 14, TypeScript und modernen Web-Technologien.

## Features

- ✨ Moderne, responsive UI mit schönem Design
- 🚀 Statische Seiten-Generierung für maximale Performance
- 📱 Vollständig responsive für alle Geräte
- 🎨 Gradient-Hintergrund und moderne Card-Layouts
- 📝 Beispiel-Blog-Posts enthalten
- 🔍 TypeScript für bessere Code-Qualität

## Installation

1. Installieren Sie die Abhängigkeiten:

```bash
npm install
```

oder

```bash
yarn install
```

## Entwicklung

Starten Sie den Entwicklungsserver:

```bash
npm run dev
```

oder

```bash
yarn dev
```

Öffnen Sie [http://localhost:3000](http://localhost:3000) in Ihrem Browser, um die Anwendung zu sehen.

## Projektstruktur

```
.
├── app/
│   ├── blog/
│   │   └── [slug]/
│   │       └── page.tsx          # Dynamische Blog-Detail-Seite
│   ├── globals.css               # Globale Styles
│   ├── layout.tsx                # Root Layout
│   └── page.tsx                  # Startseite mit Blog-Übersicht
├── content/
│   └── posts/                    # Blog-Beiträge als Markdown (von Pages CMS verwaltet)
├── lib/
│   └── posts.ts                  # Markdown-Loader (gray-matter + remark)
├── .pages.yml                    # Pages-CMS-Konfiguration
├── next.config.js                # Next.js Konfiguration
├── package.json
├── tsconfig.json                 # TypeScript Konfiguration
└── README.md
```

## Blog-Posts hinzufügen

Blog-Beiträge liegen als Markdown-Dateien im Ordner `content/posts/`. Jede Datei hat
einen YAML-Frontmatter-Kopf und einen Markdown-Body. Der Dateiname ist der Slug der URL
(`/blog/<dateiname-ohne-md>`).

```markdown
---
title: Mein neuer Post
date: 2025-01-30
author: Kora Schild
excerpt: Eine kurze Beschreibung...
---

## Überschrift

Der vollständige Inhalt als **Markdown**.
```

### Pages CMS

Das Projekt ist für [Pages CMS](https://pagescms.org/) vorkonfiguriert. Die Konfiguration
liegt in `.pages.yml` im Repo-Root.

So gehst du vor:

1. Repository auf GitHub pushen.
2. Auf [app.pagescms.org](https://app.pagescms.org/) mit GitHub einloggen und Zugriff
   auf das Repo gewähren.
3. Im Dashboard das Repo öffnen — die Sammlung „Blog-Beiträge" erscheint automatisch.
4. Beiträge im Editor erstellen/bearbeiten — Pages CMS committet die Änderungen direkt
   in den gewählten Branch.

Nach jedem Commit muss die Seite neu gebaut werden (z. B. via Vercel-Deploy-Hook oder
Next.js ISR), damit die Änderungen live gehen.

## Build für Produktion

Erstellen Sie eine Produktions-Version:

```bash
npm run build
```

Starten Sie den Produktions-Server:

```bash
npm start
```

## Technologien

- **Next.js 14** - React Framework
- **TypeScript** - Typ-sichere Entwicklung
- **CSS Modules** - Scoped Styling
- **React 18** - UI Library

## Anpassungen

### Styling ändern

- Globale Styles: `app/globals.css`
- Startseite Styles: `app/page.module.css`
- Blog-Detail Styles: `app/blog/[slug]/page.module.css`

### Farben anpassen

Die Hauptfarben können in den CSS-Modulen geändert werden. Der Gradient-Hintergrund wird in `app/globals.css` definiert.

## Lizenz

MIT

