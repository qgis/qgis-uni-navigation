# Internationalization (i18n) System

## Overview

The navigation component supports internationalization through JSON translation files. Languages are automatically detected from the URL path.

## Language Detection

- `/project/overview` → English (default)  
- `/de/project/overview` → German
- `/unknown/project/overview` → English (fallback)

## Link Localization

The component automatically adds language prefixes to internal links:

**English (default):**
- Config: `"href": "/project/features"`
- Result: `/project/features` (no prefix)

**Deutsch:**
- Config: `"href": "/project/features"`  
- Result: `/de/project/features` (with prefix)

**External links are not modified:**
- `"href": "https://blog.qgis.org"` → stays as-is

## Usage

### Basic Setup

```html
<!-- Auto-detect language from URL -->
<qg-top-nav config="url-to-json-conf"></qg-top-nav>
```

### Real Example

**Current URL:** `https://qgis.org/de/project/overview`

**Navigation links will be:**
- Features → `/de/project/features`
- Resources → `/de/resources/hub`  
- Download → `/de/download`

**But external links stay unchanged:**
- Blog → `https://blog.qgis.org` (no prefix)

### Translation Files Structure

```
public/i18n/
├── en.json      # Default language (source for Transifex)
└── de.json      # German translations
```

**Note**: All translation files are located directly in `public/i18n/` - no duplication!

### Translation Keys

Use translation keys instead of direct strings in configuration files:

```json
{
  "type": "link",
  "settings": {
    "name": "nav.about.features",  // Translation key
    "href": "/project/overview"
  }
}
```

### Backward Compatibility

The system supports both modes:
- **Legacy**: Direct strings like `"Features"` → displayed as-is
- **i18n**: Keys like `"nav.about.features"` → looked up in translations

## Development Workflow

### 1. Add New Translation

Edit `public/i18n/en.json` directly:
```json
{
  "nav": {
    "new_section": {
      "title": "New Section"
    }
  }
}
```

### 2. Update Configuration

Use the new key in your config files:
```json
{
  "name": "nav.new_section.title"
}
```

### 3. Send to Transifex

```bash
npm run i18n:extract  # Sends new keys to Transifex
```

### 4. Get Translations

```bash
npm run i18n:pull     # Downloads translations to public/i18n/
```

## Transifex Integration

### Setup

1. Install Transifex CLI: `npm install -g @transifex/cli`
2. Configure: `.tx/config` (already created)

### Commands

```bash
# Extract source strings to Transifex
npm run i18n:push

# Pull translations from Transifex (updates public/i18n/ directly)
npm run i18n:pull

# Check translation status
npm run i18n:status
```


## API Reference

### I18n Class Methods

- `detectLanguageFromPath()` - Detects language from URL
- `init(basePath)` - Initializes translation system
- `t(key, params?)` - Gets translation by key
- `getCurrentLanguage()` - Returns current language
- `isReady()` - Checks if translations are loaded

### Variable Interpolation

```json
{
  "welcome_message": "Welcome, {username}!"
}
```

```typescript
this.t('welcome_message', { username: 'John' })
// → "Welcome, John!"
``` 