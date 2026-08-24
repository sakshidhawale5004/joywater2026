const fs = require('fs');

let indexCode = fs.readFileSync('src/routes/index.tsx', 'utf8');

// Replace in Inspiration Gallery
indexCode = indexCode.replace(
  /<img src="\/images\/PDF1_P20_IMG2\.png"/,
  `<img src="/3dmirrors/octaspectra.jpg"`
);

// Replace in Visit Us
indexCode = indexCode.replace(
  /url\('\/images\/PDF1_P20_IMG2\.png'\)/,
  `url('/premiumbasin/77.jpg')`
);

fs.writeFileSync('src/routes/index.tsx', indexCode);
console.log("Updated index.tsx images");
