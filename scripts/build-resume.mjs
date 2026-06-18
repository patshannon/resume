#!/usr/bin/env node
// Build the downloadable résumé PDF from scripts/resume/template.html.
//
// Pipeline: download the three variable fonts (cached locally), inline them as
// base64 @font-face sources, then render the HTML to PDF with headless Chrome.
// Chrome subsets the embedded fonts, so the output PDF stays small (~0.6 MB).
//
//   npm run build:resume
//
// Edit scripts/resume/template.html to change content, then re-run.
// Override the browser with CHROME_PATH=/path/to/chrome if auto-detection fails.

import { existsSync, mkdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const templatePath = join(__dirname, 'resume', 'template.html');
const fontDir = join(__dirname, 'resume', '.fonts');
const outPath = join(root, 'public', 'Patrick_Shannon_FullStack_Resume_2026.pdf');

// Variable fonts mirroring the site (Fraunces / Inter / JetBrains Mono).
const FONTS = [
  { token: '__FONT_INTER__', file: 'Inter.ttf',
    url: 'https://github.com/google/fonts/raw/main/ofl/inter/Inter%5Bopsz,wght%5D.ttf' },
  { token: '__FONT_FRAUNCES__', file: 'Fraunces.ttf',
    url: 'https://github.com/google/fonts/raw/main/ofl/fraunces/Fraunces%5BSOFT,WONK,opsz,wght%5D.ttf' },
  { token: '__FONT_JETBRAINS__', file: 'JetBrainsMono.ttf',
    url: 'https://github.com/google/fonts/raw/main/ofl/jetbrainsmono/JetBrainsMono%5Bwght%5D.ttf' },
];

function findChrome() {
  if (process.env.CHROME_PATH && existsSync(process.env.CHROME_PATH)) return process.env.CHROME_PATH;
  const candidates = [
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
  ];
  for (const c of candidates) if (existsSync(c)) return c;
  // Fall back to anything on PATH.
  for (const bin of ['google-chrome', 'chromium', 'chrome']) {
    const r = spawnSync('command', ['-v', bin], { shell: true, encoding: 'utf8' });
    if (r.status === 0 && r.stdout.trim()) return r.stdout.trim();
  }
  throw new Error('Could not find Chrome/Chromium. Set CHROME_PATH=/path/to/chrome and retry.');
}

async function ensureFont({ file, url }) {
  const dest = join(fontDir, file);
  if (existsSync(dest) && statSync(dest).size > 1000) return dest;
  process.stdout.write(`  ↓ ${file} … `);
  const res = await fetch(url); // follows redirects
  if (!res.ok) throw new Error(`failed to download ${file}: HTTP ${res.status}`);
  writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
  console.log(`${(statSync(dest).size / 1024).toFixed(0)} KB`);
  return dest;
}

async function main() {
  if (!existsSync(templatePath)) throw new Error(`missing template: ${templatePath}`);
  mkdirSync(fontDir, { recursive: true });

  console.log('Resolving fonts…');
  let html = readFileSync(templatePath, 'utf8');
  for (const font of FONTS) {
    const path = await ensureFont(font);
    const b64 = readFileSync(path).toString('base64');
    if (!html.includes(font.token)) throw new Error(`template is missing ${font.token}`);
    html = html.replace(font.token, `data:font/ttf;base64,${b64}`);
  }

  const finalHtml = join(tmpdir(), `resume-build-${process.pid}.html`);
  writeFileSync(finalHtml, html);

  const chrome = findChrome();
  console.log(`Rendering with: ${chrome}`);
  const r = spawnSync(chrome, [
    '--headless=new',
    '--disable-gpu',
    '--no-pdf-header-footer',
    '--virtual-time-budget=8000',
    '--run-all-compositor-stages-before-draw',
    `--print-to-pdf=${outPath}`,
    `file://${finalHtml}`,
  ], { encoding: 'utf8' });

  if (r.status !== 0 || !existsSync(outPath)) {
    throw new Error(`Chrome failed (exit ${r.status}).\n${r.stderr || ''}`);
  }
  console.log(`\n✔ ${outPath}`);
  console.log(`  ${(statSync(outPath).size / 1024).toFixed(0)} KB`);
}

main().catch((err) => { console.error(`\n✘ ${err.message}`); process.exit(1); });
