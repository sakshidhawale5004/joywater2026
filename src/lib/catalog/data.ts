export type CategoryGroup =
  | "showers"
  | "multi-functional-body-showers"
  | "diverters"
  | "tile-insert-drainers"
  | "basin-mixers"
  | "sanitaryware"
  | "others-accessories";

export type Category = {
  slug: string;
  title: string;
  group: CategoryGroup;
  description: string;
  image?: string;
  bannerImage?: string;
  features?: string[];
};

export const categories: Category[] = [
  // 1. SHOWERS
  {
    slug: "2-function-shower-rain-mist",
    title: "2 Function Shower",
    group: "showers",
    description: "Rain & Mist Spray shower for a refreshing experience.",
    features: ["Rain Spray", "Mist Spray", "Anti-clog nozzles"]
  },
  {
    slug: "3-function-shower-rain-mist-dual-waterfall",
    title: "3 Function Shower",
    group: "showers",
    description: "Rain, 4 Mist Spray & Dual Waterfall shower.",
    features: ["Rain Spray", "4 Mist Spray", "Dual Waterfall"]
  },
  {
    slug: "3-function-shower-rain-mist-large-single-waterfall",
    title: "3 Function Shower (Large Waterfall)",
    group: "showers",
    description: "Rain, 4 Mist Spray & Large Single Waterfall.",
    features: ["Rain Spray", "4 Mist Spray", "Large Single Waterfall"]
  },
  {
    slug: "2-function-shower-rain-large-single-waterfall",
    title: "2 Function Shower (Large Waterfall)",
    group: "showers",
    description: "Rain & Large Single Waterfall.",
    features: ["Rain Spray", "Large Single Waterfall"]
  },
  {
    slug: "4-function-shower-chromotherapy",
    title: "4 Function Shower",
    group: "showers",
    description: "Chromotherapy LED Light, Rain, Six Mist Spray, Water Column & Dual Waterfall.",
    features: ["Chromotherapy LED Light", "Rain", "6 Mist Spray", "Water Column", "Dual Waterfall"]
  },
  {
    slug: "multifunctional-showers",
    title: "Multifunctional Showers",
    group: "showers",
    description: "Rain, Water Column & Four Waterfall.",
    features: ["Rain", "Water Column", "4 Waterfall"]
  },
  {
    slug: "single-function-shower-rain",
    title: "Single Function Shower",
    group: "showers",
    description: "Classic Rain shower.",
    features: ["Rain"]
  },
  {
    slug: "waterfall-showers",
    title: "Waterfall Showers",
    group: "showers",
    description: "Elegant Waterfall showers.",
    features: ["Cascade Flow"]
  },
  {
    slug: "2-function-wall-mounted-shower-arm",
    title: "2 Function Wall Mounted Shower with Shower Arm",
    group: "showers",
    description: "Rain & Mist wall mounted shower.",
    features: ["Rain", "Mist", "Wall Mounted"]
  },
  {
    slug: "multifunctional-wall-mounted-shower",
    title: "Multifunctional Wall Mounted Shower (2 Function)",
    group: "showers",
    description: "Spot Foam, Spot Waterfall, Spot Rain.",
    features: ["Spot Foam", "Spot Waterfall", "Spot Rain"]
  },

  // 2. MULTI-FUNCTIONAL BODY SHOWERS
  {
    slug: "body-jets-2-function",
    title: "Body Jets (2 Function)",
    group: "multi-functional-body-showers",
    description: "Rain & Mist body jets.",
    features: ["Rain", "Mist", "Recessed Installation"]
  },
  {
    slug: "one-line-series",
    title: "One Line Series",
    group: "multi-functional-body-showers",
    description: "One Line Series body showers.",
    features: ["Minimalist Design", "High Pressure"]
  },
  {
    slug: "eminence-series",
    title: "Eminence Series",
    group: "multi-functional-body-showers",
    description: "Eminence Series body showers.",
    features: ["Luxury Finish", "Precision Sprays"]
  },

  // 3. DIVERTERS
  {
    slug: "5-function-diverter",
    title: "5 Function Diverter",
    group: "diverters",
    description: "5 Function Diverter for complex shower systems.",
    features: ["5 Functions", "Smooth Rotation"]
  },
  {
    slug: "6-function-diverter",
    title: "6 Function Diverter",
    group: "diverters",
    description: "6 Function Diverter.",
    features: ["6 Functions", "Durable Brass Core"]
  },
  {
    slug: "thermostatic-diverter-three-outlet",
    title: "Thermostatic Diverter (Three Outlet)",
    group: "diverters",
    description: "Thermostatic Diverter with Three Outlets.",
    features: ["Thermostatic Control", "3 Outlets", "Safety Lock"]
  },
  {
    slug: "lever-diverter-three-outlet",
    title: "Lever Diverter (Three Outlet)",
    group: "diverters",
    description: "Lever Diverter with Three Outlets.",
    features: ["Lever Handle", "3 Outlets"]
  },

  // 4. TILE INSERT DRAINERS
  {
    slug: "tile-insert-drain",
    title: "Tile Insert Drain",
    group: "tile-insert-drainers",
    description: "Seamless Tile Insert Drain.",
    features: ["Seamless Look", "Easy to Clean"]
  },
  {
    slug: "tile-insert-125x125",
    title: "Tile Insert (125 x 125 MM)",
    group: "tile-insert-drainers",
    description: "125 x 125 MM Tile Insert Drain.",
    features: ["125x125 MM size", "Stainless Steel"]
  },

  // 5. BASIN MIXERS
  {
    slug: "round-controller-basin-mixer",
    title: "Round Controller Basin Mixer",
    group: "basin-mixers",
    description: "Round Controller Basin Mixer.",
    features: ["Round Controller", "Aerated Flow"]
  },
  {
    slug: "thermostatic-click-controller-basin-mixer",
    title: "Thermostatic Click Controller Basin Mixer",
    group: "basin-mixers",
    description: "Thermostatic Click Controller Basin Mixer.",
    features: ["Thermostatic", "Click Controller"]
  },
  {
    slug: "lever-basin-mixer",
    title: "Lever Basin Mixer",
    group: "basin-mixers",
    description: "Classic Lever Basin Mixer.",
    features: ["Single Lever", "Smooth Operation"]
  },
  {
    slug: "table-mounted-basin-mixer",
    title: "Table Mounted Basin Mixer",
    group: "basin-mixers",
    description: "Tall Table Mounted Basin Mixer.",
    features: ["Table Mounted", "Tall Profile"]
  },
  {
    slug: "progressive-controller-waterfall-basin-mixer",
    title: "Progressive Controller Waterfall Basin Mixer",
    group: "basin-mixers",
    description: "Progressive Controller with Waterfall flow.",
    features: ["Progressive Controller", "Waterfall Spout"]
  },
  {
    slug: "ceiling-mounted-basin-mixer",
    title: "Ceiling Mounted Basin Mixer",
    group: "basin-mixers",
    description: "Dramatic Ceiling Mounted Basin Mixer.",
    features: ["Ceiling Mounted", "Statement Piece"]
  },

  // 6. SANITARYWARE
  {
    slug: "premium-sanitaryware-collections",
    title: "Premium Sanitaryware Collections",
    group: "sanitaryware",
    description: "Premium Sanitaryware Collections.",
    features: ["Premium Glaze", "Rimless Design", "Soft Close Seat"]
  },

  // 7. OTHERS / ACCESSORIES
  {
    slug: "bathroom-accessories-fittings",
    title: "Bathroom Accessories & Fittings",
    group: "others-accessories",
    description: "Bathroom Accessories & Fittings.",
    features: ["Solid Brass Construction", "Matching Finishes"]
  },
  {
    slug: "mirrors",
    title: "Mirrors",
    group: "others-accessories",
    description: "Bathroom Mirrors & Vanity Mirrors.",
    features: ["LED Backlit options", "Magnifying options", "Anti-fog"]
  }
];

export type Product = {
  id: string;
  name: string;
  slug: string;
  category: string; // category slug
  finish: string;
  price: number;
  code: string;
  image?: string;
};

const FINISHES = [
  "Chrome",
  "Matt Black",
  "Brushed Gold",
  "Rose Gold",
  "Venetian Gold",
  "Graphite Grey",
  "Brushed Rose Gold",
  "Matt White",
  "PVD Gold",
];
const SERIES = [
  "Svelte",
  "Pebble",
  "Shield",
  "Oblikue",
  "Wave",
  "Crystal",
  "Slender",
  "Cube",
  "Zero",
  "Heritage",
  "Regalia",
  "Prestige",
];

import imageList from "../imageList.json";

// Deterministic PRNG so product list is stable across renders.
function mulberry32(a: number) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function generateProducts(count: number): Product[] {
  const rand = mulberry32(20260723);
  const productable = categories.filter((c) =>
    ["showers", "multi-functional-body-showers", "diverters", "tile-insert-drainers", "basin-mixers", "sanitaryware", "others-accessories"].includes(c.group),
  );
  const out: Product[] = [];

  // Since we have explicitly copied only product images to the new imageList,
  // we can use all of them.
  const productImages = imageList;

  for (let i = 1; i <= count; i++) {
    const cat = productable[Math.floor(rand() * productable.length)];
    const finish = FINISHES[Math.floor(rand() * FINISHES.length)];
    const series = SERIES[Math.floor(rand() * SERIES.length)];
    const num = 100 + Math.floor(rand() * 900);
    const price = 2400 + Math.floor(rand() * 78) * 250;
    const code = `JW-${cat.slug.slice(0, 3).toUpperCase()}-${num}`;
    const name = `${series} ${cat.title.split(" ")[0]} ${num}`;
    const image = `/images/${productImages[Math.floor(rand() * productImages.length)]}`;

    out.push({
      id: `p${i}`,
      slug: `jw-${i}`,
      name,
      category: cat.slug,
      finish,
      price,
      code,
      image,
    });
  }
  return out;
}

export const products: Product[] = generateProducts(400);

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getProductsByCategory(slug: string) {
  return products.filter((p) => p.category === slug);
}


export const megaMenu = {
  "Showers": {
    "All Showers": [
      "2-function-shower-rain-mist",
      "3-function-shower-rain-mist-dual-waterfall",
      "3-function-shower-rain-mist-large-single-waterfall",
      "2-function-shower-rain-large-single-waterfall",
      "4-function-shower-chromotherapy",
      "multifunctional-showers",
      "single-function-shower-rain",
      "waterfall-showers",
      "2-function-wall-mounted-shower-arm",
      "multifunctional-wall-mounted-shower"
    ]
  },
  "Multi-Functional Body Showers": {
    "Body Showers": [
      "body-jets-2-function",
      "one-line-series",
      "eminence-series"
    ]
  },
  "Diverters": {
    "All Diverters": [
      "5-function-diverter",
      "6-function-diverter",
      "thermostatic-diverter-three-outlet",
      "lever-diverter-three-outlet"
    ]
  },
  "Tile Insert Drainers": {
    "Drainers": [
      "tile-insert-drain",
      "tile-insert-125x125"
    ]
  },
  "Basin Mixers": {
    "All Basin Mixers": [
      "round-controller-basin-mixer",
      "thermostatic-click-controller-basin-mixer",
      "lever-basin-mixer",
      "table-mounted-basin-mixer",
      "progressive-controller-waterfall-basin-mixer",
      "ceiling-mounted-basin-mixer"
    ]
  },
  "Sanitaryware": {
    "Collections": [
      "premium-sanitaryware-collections"
    ]
  },
  "Others / Accessories": {
    "Accessories & Mirrors": [
      "bathroom-accessories-fittings",
      "mirrors"
    ]
  }
} as const;
