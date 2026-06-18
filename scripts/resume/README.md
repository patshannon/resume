# Résumé build

The downloadable résumé (`public/Patrick_Shannon_FullStack_Resume_2026.pdf`) is
generated from `template.html`, not hand-edited as a PDF.

## Regenerate

```bash
npm run build:resume
```

This downloads the three variable fonts (Inter, Fraunces, JetBrains Mono) into
`.fonts/` the first time (cached, git-ignored), inlines them into the HTML as
base64, and renders to PDF with headless Chrome. Chrome subsets the embedded
fonts, so the output stays ~0.6 MB.

## Edit content

Edit `template.html` — it mirrors the site's "Systems Specimen" design tokens
(warm graphite, amber signal, Fraunces / Inter / JetBrains Mono). The
`__FONT_*__` placeholders are replaced at build time; leave them in place.

## Requirements

- Node ≥ 22 (uses global `fetch`)
- Google Chrome or Chromium. Auto-detected on macOS/Linux; override with
  `CHROME_PATH=/path/to/chrome npm run build:resume` if needed.
