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
├── lib/
│   └── posts.ts                  # Blog-Posts Daten und Funktionen
├── next.config.js                # Next.js Konfiguration
├── package.json
├── tsconfig.json                 # TypeScript Konfiguration
└── README.md
```

## Blog-Posts hinzufügen

Um neue Blog-Posts hinzuzufügen, bearbeiten Sie die `posts` Array in `lib/posts.ts`:

```typescript
{
  slug: 'mein-neuer-post',
  title: 'Mein neuer Post',
  excerpt: 'Eine kurze Beschreibung...',
  content: '<p>Der vollständige Inhalt...</p>',
  date: '2024-01-30',
  author: 'Ihr Name',
}
```

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

