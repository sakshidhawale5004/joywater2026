const fs = require('fs');

let data = fs.readFileSync('src/lib/catalog/data.ts', 'utf8');

// 1. Add abs-hook to categories
const newCat = `
  {
    slug: "abs-hook",
    title: "ABS Hook",
    group: "others-accessories",
    description: "Premium ABS hook accessories.",
    features: ["11 Years Unmatched Assurance"]
  },
`;
data = data.replace(/(\/\/ 7\. OTHERS \/ ACCESSORIES)/, `$1${newCat}`);

// 2. Add abs-hook to megaMenu
data = data.replace(
  /"Accessories": \[\s*/,
  `"Accessories": [\n        "abs-hook",\n        `
);

// 3. Add products to realCategoryProducts
const newCatProducts = `
    ...createCategoryProducts("abs-hook", "ABS Hook", "JW-100", [1750, 1750, 990, 1750], [
      "/abs hook/abs hook (1) gold 1750.png",
      "/abs hook/abs hook (2) graphite grey 1750.png",
      "/abs hook/abs hook (3) chrome 990.png",
      "/abs hook/abs hook (4) rose gold 1750.png"
    ], ["Gold", "Graphite Grey", "Chrome", "Rose Gold"]),
`;
data = data.replace(/(\/\/ Others \/ Accessories)/, `$1${newCatProducts}`);

fs.writeFileSync('src/lib/catalog/data.ts', data);
console.log("Updated data.ts");
