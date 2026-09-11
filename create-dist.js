import { copyFileSync, mkdirSync, readdirSync, statSync, existsSync, rmSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const sourceDir = join(__dirname, '.output', 'public');
const distDir = join(__dirname, 'dist');

// Remove existing dist folder
if (existsSync(distDir)) {
  console.log('Removing existing dist folder...');
  rmSync(distDir, { recursive: true, force: true });
}

// Create dist folder
console.log('Creating dist folder...');
mkdirSync(distDir, { recursive: true });

// Copy files recursively
function copyRecursive(src, dest) {
  if (!existsSync(src)) {
    console.error(`Source directory does not exist: ${src}`);
    return;
  }

  const stat = statSync(src);

  if (stat.isDirectory()) {
    if (!existsSync(dest)) {
      mkdirSync(dest, { recursive: true });
    }
    const files = readdirSync(src);
    files.forEach(file => {
      copyRecursive(join(src, file), join(dest, file));
    });
  } else {
    const destDir = dirname(dest);
    if (!existsSync(destDir)) {
      mkdirSync(destDir, { recursive: true });
    }
    copyFileSync(src, dest);
    console.log(`Copied: ${src} -> ${dest}`);
  }
}

console.log('Copying files from .output/public to dist...');
copyRecursive(sourceDir, distDir);

// ─── Locate built assets ─────────────────────────────────────────────────────
const assetsDir = join(distDir, 'assets');
let indexJsFile = '';
let cssFile = '';
const allJsChunks = [];

if (existsSync(assetsDir)) {
  const files = readdirSync(assetsDir);

  // Main entry bundle  (index-<hash>.js)
  indexJsFile = files.find(f => f.startsWith('index-') && f.endsWith('.js')) || '';

  // Compiled CSS  (styles-<hash>.css)
  cssFile = files.find(f => f.startsWith('styles-') && f.endsWith('.css')) || '';

  // Every other JS chunk -> modulepreload
  files.forEach(f => {
    if (f.endsWith('.js') && !f.startsWith('index-')) {
      allJsChunks.push(f);
    }
  });
}

if (!indexJsFile) {
  console.error('Could not find main index JS file in dist/assets. Did the build succeed?');
  process.exit(1);
}

// ─── Modulepreload links ──────────────────────────────────────────────────────
// TanStack Start's <Scripts /> normally emits these server-side.
// Without them the router has to fetch each route chunk on demand (slow / broken).
const modulePreloadLinks = allJsChunks
  .map(f => `  <link rel="modulepreload" crossorigin href="/assets/${f}">`)
  .join('\n');

// ─── Build index.html ─────────────────────────────────────────────────────────
//
// KEY FACTS about TanStack Start client-side rendering:
//
//   • The framework calls ReactDOM.createRoot(document, ...) or
//     ReactDOM.hydrateRoot(document, ...) — it renders the *entire* document,
//     not just a component into a <div id="root">.
//
//   • Having a <div id="root"> in the body is WRONG and causes React to throw
//     hydration errors / fail to mount entirely.
//
//   • The <body> must be empty so React can take it over completely.
//
//   • All JS route chunks must be preloaded so the client router can resolve
//     the initial URL immediately without extra network round-trips.
//
const indexHtmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Joy Water \u2014 Timeless Luxury Bath Fittings</title>
  <meta name="description" content="Discover Joy Water: designer faucets, showers, basins and sanitaryware crafted in matt black, brushed gold, rose gold and stone.">
  <meta name="author" content="Joy Water">
  <meta property="og:title" content="Joy Water \u2014 Timeless Luxury">
  <meta property="og:description" content="Handcrafted luxury bath fittings for lifetimes.">
  <meta property="og:type" content="website">
  <meta name="twitter:card" content="summary_large_image">

  <link rel="icon" href="/favicon.png" type="image/png">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap">

  <!-- App stylesheet (load before JS to avoid FOUC) -->
  <link rel="stylesheet" href="/assets/${cssFile}">

  <!-- Preload main bundle -->
  <link rel="modulepreload" crossorigin href="/assets/${indexJsFile}">

  <!-- Preload all route + vendor chunks so the router never stalls -->
${modulePreloadLinks}
</head>
<body>
  <!--
    TanStack Start renders the FULL document via JavaScript.
    The body must stay EMPTY — do not add a <div id="root"> or any other
    container here or React will fail to mount.
  -->
  <script type="module" src="/assets/${indexJsFile}"></script>
</body>
</html>`;

const indexHtmlPath = join(distDir, 'index.html');
writeFileSync(indexHtmlPath, indexHtmlContent, 'utf-8');

console.log('\n\u2705 Created index.html');
console.log('   Main JS :', indexJsFile);
console.log('   CSS     :', cssFile);
console.log('   Chunks  :', allJsChunks.length, 'preloaded');

// ─── Copy .htaccess ───────────────────────────────────────────────────────────
const htaccessSource = join(__dirname, '.htaccess-hostinger');
const htaccessDest   = join(distDir, '.htaccess');
if (existsSync(htaccessSource)) {
  copyFileSync(htaccessSource, htaccessDest);
  console.log('\u2705 Copied .htaccess for Hostinger');
}

console.log('\n\u2705 Dist folder created successfully!');
console.log(`\uD83D\uDCC1 Location: ${distDir}`);
console.log('\n\uD83D\uDCDD To deploy to Hostinger:');
console.log('   1. Upload ALL files from the "dist" folder to public_html');
console.log('   2. The .htaccess redirects every URL back to index.html');
console.log('   3. TanStack Start client router handles all navigation\n');
