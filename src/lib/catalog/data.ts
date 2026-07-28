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
    description: "Rain & Mist Spray shower engineered for a refreshing volumetric flow experience. Featuring precision nozzles and solid brass construction.",
    bannerImage: "/images/PDF1_P7_IMG1.png",
    image: "/showers/2 Function Shower (1).png",
    features: ["Rain Spray", "Mist Spray", "Anti-clog nozzles", "11 Years Unmatched Assurance", "PVD Bonded Finish"]
  },
  {
    slug: "3-function-shower-rain-mist-dual-waterfall",
    title: "3 Function Shower",
    group: "showers",
    description: "Rain, 4 Mist Spray & Dual Waterfall shower. Delivers a luxurious spa-like experience with multiple spray patterns.",
    bannerImage: "/images/PDF1_P20_IMG2.png",
    image: "/showers/3 functionshower rain four mistspray&dualwaterfall (1).png",
    features: ["Rain Spray", "4 Mist Spray", "Dual Waterfall", "11 Years Unmatched Assurance", "Solid Brass Construction"]
  },
  {
    slug: "3-function-shower-rain-mist-large-single-waterfall",
    title: "3 Function Shower (Large Waterfall)",
    group: "showers",
    description: "Rain, 4 Mist Spray & Large Single Waterfall. Designed for maximum water coverage and soothing cascade flow.",
    bannerImage: "/images/PDF1_P10_IMG1.png",
    image: "/showers/3 Function Shower (Large Waterfall) (1).png",
    features: ["Rain Spray", "4 Mist Spray", "Large Single Waterfall", "11 Years Unmatched Assurance"]
  },
  {
    slug: "2-function-shower-rain-large-single-waterfall",
    title: "2 Function Shower (Large Waterfall)",
    group: "showers",
    description: "Rain & Large Single Waterfall shower system with flawless internal waterways.",
    bannerImage: "/images/banner4.jpg",
    image: "/showers/2 Function Shower (Large Waterfall).png",
    features: ["Rain Spray", "Large Single Waterfall", "11 Years Unmatched Assurance"]
  },
  {
    slug: "4-function-shower-chromotherapy",
    title: "4 Function Shower",
    group: "showers",
    description: "Chromotherapy LED Light, Rain, Six Mist Spray, Water Column & Dual Waterfall. Ultimate sensory indulgence.",
    bannerImage: "/images/PDF1_P13_IMG1.png",
    image: "/showers/4 Function Shower (1).png",
    features: ["Chromotherapy LED Light", "Rain", "6 Mist Spray", "Water Column", "Dual Waterfall", "11 Years Unmatched Assurance"]
  },
  {
    slug: "multifunctional-showers",
    title: "Multifunctional Showers",
    group: "showers",
    description: "Rain, Water Column & Four Waterfall overhead shower systems for complete body immersion.",
    bannerImage: "/images/PDF1_P20_IMG2.png",
    image: "/showers/Multifunctional Showers (1).png",
    features: ["Rain", "Water Column", "4 Waterfall", "11 Years Unmatched Assurance"]
  },
  {
    slug: "single-function-shower-rain",
    title: "Single Function Shower",
    group: "showers",
    description: "Classic Rain shower providing a natural rainfall sensation with low water consumption.",
    bannerImage: "/images/PDF1_P18_IMG1.png",
    image: "/showers/Single Function Shower (1).png",
    features: ["Rain", "40% Water Saving Aerators", "11 Years Unmatched Assurance"]
  },
  {
    slug: "waterfall-showers",
    title: "Waterfall Showers",
    group: "showers",
    description: "Elegant Waterfall showers that mimic natural cascades with smooth laminar flow.",
    bannerImage: "/images/PDF1_P17_IMG1.png",
    image: "/showers/Waterfall Showers (1).png",
    features: ["Cascade Flow", "Solid Brass Billet", "11 Years Unmatched Assurance"]
  },
  {
    slug: "2-function-wall-mounted-shower-arm",
    title: "2 Function Wall Mounted Shower with Shower Arm",
    group: "showers",
    description: "Rain & Mist wall mounted shower paired with a high-strength solid brass shower arm.",
    bannerImage: "/images/PDF1_P23_IMG1.png",
    image: "/showers/2 Function Wall Mounted Shower with Shower Arm (1).png",
    features: ["Rain", "Mist", "Wall Mounted", "11 Years Unmatched Assurance"]
  },
  {
    slug: "multifunctional-wall-mounted-shower",
    title: "Multifunctional Wall Mounted Shower (2 Function)",
    group: "showers",
    description: "Spot Foam, Spot Waterfall, Spot Rain. Compact wall-mounted luxury for modern bathrooms.",
    bannerImage: "/images/PDF1_P24_IMG1.png",
    image: "/showers/Multifunctional Wall Mounted Shower (2 Function) (1).png",
    features: ["Spot Foam", "Spot Waterfall", "Spot Rain", "11 Years Unmatched Assurance"]
  },

  // 2. MULTI-FUNCTIONAL BODY SHOWERS
  {
    slug: "body-jets-2-function",
    title: "Body Jets (2 Function)",
    group: "multi-functional-body-showers",
    description: "Rain & Mist body jets designed for recessed wall installation and targeted hydrotherapy.",
    bannerImage: "/images/PDF1_P21_IMG1.png",
    image: "/Body Showers/Body Jets (2 Function) (1).png",
    features: ["Rain", "Mist", "Recessed Installation", "11 Years Unmatched Assurance"]
  },
  {
    slug: "one-line-series",
    title: "One Line Series",
    group: "multi-functional-body-showers",
    description: "One Line Series minimalist body showers featuring zero-radius architectural profiles.",
    bannerImage: "/images/PDF1_P22_IMG2.png",
    image: "/Body Showers/One Line Series (1).png",
    features: ["Minimalist Design", "High Pressure", "11 Years Unmatched Assurance"]
  },
  {
    slug: "eminence-series",
    title: "Eminence Series",
    group: "multi-functional-body-showers",
    description: "Eminence Series luxury body shower arrays with adjustable angle nozzles.",
    bannerImage: "/images/PDF1_P25_IMG1.png",
    image: "/Body Showers/Eminence Series (1).png",
    features: ["Luxury Finish", "Precision Sprays", "11 Years Unmatched Assurance"]
  },

  // 3. DIVERTERS
  {
    slug: "5-function-diverter",
    title: "5 Function Diverter",
    group: "diverters",
    description: "The JOY WATER 5-function diverter offers unmatched versatility with the ability to control up to five water outlets. Equipped with high-quality Vernet cartridges.",
    bannerImage: "/images/PDF1_P26_IMG1.png",
    image: "/diverters/5 Function Diverter (1).png",
    features: ["5 Functions", "Vernet Cartridge (Precision & Durability)", "10+1 Years Warranty", "11 Years Unmatched Assurance", "Smooth Transitions"]
  },
  {
    slug: "6-function-diverter",
    title: "6 Function Diverter",
    group: "diverters",
    description: "6 Function Diverter for comprehensive bathroom systems. Features genuine Vernet cartridges for drip-free temperature control.",
    bannerImage: "/images/PDF1_P28_IMG1.png",
    image: "/diverters/6 Function Diverter (1).png",
    features: ["6 Functions", "Vernet Cartridge (Precision & Durability)", "10+1 Years Warranty", "11 Years Unmatched Assurance"]
  },
  {
    slug: "thermostatic-diverter-three-outlet",
    title: "Thermostatic Diverter (Three Outlet)",
    group: "diverters",
    description: "Provides seamless control between three water outlets with safety thermostatic locking. Renowned Vernet cartridge inside.",
    bannerImage: "/images/PDF1_P27_IMG1.png",
    image: "/diverters/Thermostatic Diverter (Three Outlet) (1).png",
    features: ["Thermostatic Control", "3 Outlets", "Safety Lock", "Vernet Cartridge", "10+1 Years Warranty"]
  },
  {
    slug: "lever-diverter-three-outlet",
    title: "Lever Diverter (Three Outlet)",
    group: "diverters",
    description: "Classic Lever Diverter with Three Outlets, solid brass body, and smooth operational action.",
    bannerImage: "/images/PDF1_P29_IMG1.png",
    image: "/diverters/Lever Diverter Three Outlet (1).png",
    features: ["Lever Handle", "3 Outlets", "Vernet Cartridge", "10+1 Years Warranty"]
  },

  // 4. TILE INSERT DRAINERS
  {
    slug: "tile-insert-drain",
    title: "Tile Insert Drain",
    group: "tile-insert-drainers",
    description: "Seamless Tile Insert Drain made of grade 304 stainless steel with high-flow drainage channels.",
    bannerImage: "/images/PDF1_P30_IMG1.png",
    image: "/Tile Insert Drain/Tile Insert Drain (1).png",
    features: ["Seamless Look", "Easy to Clean", "Grade 304 Stainless Steel", "11 Years Unmatched Assurance"]
  },
  {
    slug: "tile-insert-125x125",
    title: "Tile Insert (125 x 125 MM)",
    group: "tile-insert-drainers",
    description: "125 x 125 MM compact Tile Insert Drain with anti-odor trap and hair strainer.",
    bannerImage: "/images/PDF1_P31_IMG1.png",
    image: "/Tile Insert Drain/Tile Insert (125 x 125 MM) (1).png",
    features: ["125x125 MM size", "Stainless Steel", "Anti-odor Trap", "11 Years Unmatched Assurance"]
  },

  // 5. BASIN MIXERS
  {
    slug: "round-controller-basin-mixer",
    title: "Round Controller Basin Mixer",
    group: "basin-mixers",
    description: "Round Controller Basin Mixer with Swiss Neoperl aerator for soft, volumetric flow without splashing.",
    bannerImage: "/images/designer-faucets-new.jpg",
    features: ["Round Controller", "Aerated Flow", "Solid Brass Billet", "11 Years Unmatched Assurance"]
  },
  {
    slug: "thermostatic-click-controller-basin-mixer",
    title: "Thermostatic Click Controller Basin Mixer",
    group: "basin-mixers",
    description: "Thermostatic Click Controller Basin Mixer featuring push-button activation and precise temperature selection.",
    bannerImage: "/images/PDF1_P34_IMG1.png",
    features: ["Thermostatic", "Click Controller", "11 Years Unmatched Assurance", "PVD Bonded"]
  },
  {
    slug: "lever-basin-mixer",
    title: "Lever Basin Mixer",
    group: "basin-mixers",
    description: "Classic single lever Basin Mixer machined from solid brass with ceramic disc cartridge.",
    bannerImage: "/images/PDF1_P35_IMG1.png",
    features: ["Single Lever", "Smooth Operation", "11 Years Unmatched Assurance", "10Y Warranty"]
  },
  {
    slug: "table-mounted-basin-mixer",
    title: "Table Mounted Basin Mixer",
    group: "basin-mixers",
    description: "Tall Table Mounted Basin Mixer designed for vessel sinks and marble countertops.",
    bannerImage: "/images/PDF1_P36_IMG1.png",
    features: ["Table Mounted", "Tall Profile", "11 Years Unmatched Assurance", "Solid Brass"]
  },
  {
    slug: "progressive-controller-waterfall-basin-mixer",
    title: "Progressive Controller Waterfall Basin Mixer",
    group: "basin-mixers",
    description: "Progressive Controller with wide Waterfall flow, combining modern minimalism with natural water motion.",
    bannerImage: "/images/PDF1_P37_IMG1.png",
    features: ["Progressive Controller", "Waterfall Spout", "11 Years Unmatched Assurance", "PVD Finishes"]
  },
  {
    slug: "ceiling-mounted-basin-mixer",
    title: "Ceiling Mounted Basin Mixer",
    group: "basin-mixers",
    description: "Dramatic Ceiling Mounted Basin Mixer that drops water gracefully from above. A stunning architectural centerpiece.",
    bannerImage: "/images/PDF1_P38_IMG2.png",
    features: ["Ceiling Mounted", "Statement Piece", "11 Years Unmatched Assurance"]
  },

  // 6. SANITARYWARE
  {
    slug: "premium-sanitaryware-collections",
    title: "Premium Sanitaryware Collections",
    group: "sanitaryware",
    description: "Premium Sanitaryware Collections finished in custom metallic PVD and matte glazes. Rimless hygiene and soft-close seating.",
    bannerImage: "/images/PDF1_P40_IMG1.png",
    features: ["Premium Glaze", "Rimless Design", "Soft Close Seat", "11 Years Unmatched Assurance", "Special Finish"]
  },

  // 7. OTHERS / ACCESSORIES
  {
    slug: "bathroom-accessories-fittings",
    title: "Bathroom Accessories & Fittings",
    group: "others-accessories",
    description: "Bathroom Accessories & Fittings crafted from solid brass with matching PVD finishes for a cohesive bathroom design.",
    bannerImage: "/images/PDF1_P50_IMG1.png",
    features: ["Solid Brass Construction", "Matching Finishes", "11 Years Unmatched Assurance", "Corrosion Resistant"]
  },
  {
    slug: "mirrors",
    title: "Mirrors",
    group: "others-accessories",
    description: "Bathroom Mirrors & Vanity Mirrors featuring LED backlit illumination, anti-fog heating, and magnifying options.",
    bannerImage: "/images/PDF1_P51_IMG1.png",
    features: ["LED Backlit options", "Magnifying options", "Anti-fog", "11 Years Unmatched Assurance"]
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

const special2FunctionShowerProducts: Product[] = [
  {
    id: "jw-10011-graphite",
    slug: "2-function-shower-jw-10011",
    name: "2 Function Shower JW-10011",
    category: "2-function-shower-rain-mist",
    finish: "Graphite Grey",
    price: 48000,
    code: "JW-10011",
    image: "/images/PDF1_P7_IMG3.png",
  },
  {
    id: "jw-10012-gold",
    slug: "2-function-shower-jw-10012-gold",
    name: "2 Function Shower JW-10012",
    category: "2-function-shower-rain-mist",
    finish: "Brushed Gold",
    price: 48000,
    code: "JW-10012",
    image: "/images/PDF1_P7_IMG4.png",
  },
  {
    id: "jw-10013-rosegold",
    slug: "2-function-shower-jw-10013",
    name: "2 Function Shower JW-10013",
    category: "2-function-shower-rain-mist",
    finish: "Rose Gold",
    price: 48000,
    code: "JW-10013",
    image: "/images/PDF1_P7_IMG7.png",
  },
  {
    id: "jw-10012-brushed-2",
    slug: "2-function-shower-jw-10012-brushed-2",
    name: "2 Function Shower JW-10012 (Brushed)",
    category: "2-function-shower-rain-mist",
    finish: "Brushed Gold",
    price: 48000,
    code: "JW-10012",
    image: "/images/PDF1_P7_IMG9.png",
  },
];

export const products: Product[] = [
  ...special2FunctionShowerProducts,
  ...generateProducts(400),
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getProductsByCategory(slug: string) {
  if (slug === "2-function-shower-rain-mist") {
    return special2FunctionShowerProducts;
  }
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
