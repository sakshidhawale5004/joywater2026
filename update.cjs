const fs = require('fs');

let data = fs.readFileSync('src/lib/catalog/data.ts', 'utf8');

// 1. Multifunctional Wall Mounted Prices
data = data.replace(
  /id: "multifunctional-wall-mounted-1"[\s\S]*?price: \d+,/g,
  (match) => match.replace(/price: \d+,/, "price: 23500,")
);
data = data.replace(
  /id: "multifunctional-wall-mounted-2"[\s\S]*?price: \d+,/g,
  (match) => match.replace(/price: \d+,/, "price: 23500,")
);

// 2. Overhead ABS Shower Prices
data = data.replace(
  /("overhead abs shower",\s*"JW-100",\s*\[)([\d,\s]+)(\])/g,
  `$1 6300, 6300, 6300 $3`
);

// 3. Tile drainer price
data = data.replace(
  /(id: "tiles-drainer-6"[\s\S]*?price: )\d+(,[\s\S]*?tile-drainers-marbles-side-hole-brushed-gold-finished-13500\.png")/g,
  `$1 15500$2`
);

// 4. Ceiling Mounted Basin Mixers prices
const cmPrices = {
  "Ceiling Mounted Basin Mixer (1).png": 15750,
  "Ceiling Mounted Basin Mixer (2).png": 24750,
  "Ceiling Mounted Basin Mixer (4).png": 15750,
  "Ceiling Mounted Basin Mixer (5).png": 24750,
  "Ceiling Mounted Basin Mixer (6).png": 15750,
  "Ceiling Mounted Basin Mixer (7).png": 24750,
  "Ceiling Mounted Basin Mixer (8).png": 13500,
  "Ceiling Mounted Basin Mixer (9).png": 19500
};

for (const [img, price] of Object.entries(cmPrices)) {
  const regex = new RegExp(`(id: "ceiling-mounted-basin-mixer-\\d+"[\\s\\S]*?price: )\\d+(,[\\s\\S]*?image: "/basinmixer/${img.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}")`, 'g');
  data = data.replace(regex, `$1${price}$2`);
}

// 5. Hand shower group
data = data.replace(
  /(slug: "hand-shower",[\s\S]*?group: ")"showers"/,
  `$1"multi-functional-body-showers"`
);
// Move in groups array
data = data.replace(
  /"Showers": \[\s*([\s\S]*?)\s*"hand-shower",\s*([\s\S]*?)\]/,
  `"Showers": [\n      $1\n      $2]`
);
data = data.replace(
  /"Body Showers": \[\s*/,
  `"Body Showers": [\n      "hand-shower",\n      `
);

// 6. Thermostatic Diverter
const tdReplacement = `
    ...createCategoryProducts(
      "thermostatic-diverter-three-outlet",
      "Thermostatic Diverter (Three Outlet)",
      "JW-100",
      [54000, 63000, 63000, 63000],
      [
        "/diverters/Thermostatic Diverter (1).png",
        "/diverters/Thermostatic Diverter (2).png",
        "/diverters/Thermostatic Diverter (3).png",
        "/diverters/Thermostatic Diverter (4).png",
      ],
      ["Chrome", "Gold", "Graphite Grey", "Rose Gold"]
    ),
`;
data = data.replace(
  /\.\.\.createCategoryProducts\(\s*"thermostatic-diverter-three-outlet"[\s\S]*?\]\s*\),/,
  tdReplacement.trim()
);

// 7. Add 4 Function Diverter Category
const newCat = `
  {
    slug: "4-function-diverter",
    title: "4 Function Joy Water Diverter",
    group: "diverters",
    description: "4 Function Joy Water Diverter.",
    features: ["4 Functions", "Vernet Cartridge", "11 Years Unmatched Assurance"]
  },
`;
data = data.replace(/(\/\/ Diverters\s*)/, `$1${newCat}`);

const newCatProducts = `
    ...createCategoryProducts(
      "4-function-diverter",
      "4 Function Joy Water Diverter",
      "JW-4FD",
      [35000, 35000, 35000, 35000],
      [
        "/diverters/6 Function Diverter (5).png",
        "/diverters/6 Function Diverter (6).png",
        "/diverters/6 Function Diverter (7).png",
        "/diverters/6 Function Diverter (8).png"
      ],
      ["Chrome", "Gold", "Graphite Grey", "Rose Gold"]
    ),
`;
data = data.replace(/(\/\/ Diverters\s*)/g, (match, p1, offset, string) => {
  // Only replace the second occurrence (the one in realCategoryProducts)
  if (offset > 5000) {
    return `${p1}${newCatProducts}`;
  }
  return p1;
});
// Add to megaMenu
data = data.replace(
  /"Diverters": \[\s*/,
  `"Diverters": [\n      "4-function-diverter",\n      `
);

fs.writeFileSync('src/lib/catalog/data.ts', data);
console.log("Updated data.ts");

// Update category.$slug.tsx
let catTsx = fs.readFileSync('src/routes/category.$slug.tsx', 'utf8');
catTsx = catTsx.replace(
  /const heroImg = cat\.bannerImage \|\| cat\.image \|\| "\/images\/w3-01\.png";/,
  `const heroImg = cat.bannerImage || cat.image || (products.length > 0 ? products[0].image : "/images/w3-01.png");`
);
catTsx = catTsx.replace(
  /src=\{encodeURI\(getHeroSectionImage\(cat\.slug\)\)\}/,
  `src={encodeURI(heroImg)}`
);
fs.writeFileSync('src/routes/category.$slug.tsx', catTsx);
console.log("Updated category.$slug.tsx");
