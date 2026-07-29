export type CategoryGroup =
  | "showers"
  | "multi-functional-body-showers"
  | "diverters"
  | "tile-insert-drainers"
  | "basin-mixers"
  | "sanitaryware"
  | "others-accessories"
  | "mirrors";

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
    title: "Tile Insert 125x125",
    group: "tile-insert-drainers",
    description: "Architectural 125x125 mm Tile Insert Drain engineered from Grade 304 Stainless Steel for flush floor integration.",
    bannerImage: "/images/PDF1_P30_IMG1.png",
    image: "/Tile Insert Drain/Tile Insert Drain (1).png",
    features: ["125x125 mm Profile", "Seamless Look", "Grade 304 Stainless Steel", "11 Years Unmatched Assurance"]
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
    slug: "sanitaryware-basins",
    title: "Basins",
    group: "sanitaryware",
    description: "Handcrafted Luxury Designer Basins in ceramic, glass, stainless steel, and statement silhouettes.",
    bannerImage: "/images/PDF1_P40_IMG1.png",
    image: "/premiumbasin/71.jpg",
    features: ["Ceramic Excellence", "Timeless Luxury", "11 Years Unmatched Assurance"]
  },
  {
    slug: "stone-is-the-king-of-luxury",
    title: "Stone is the King of Luxury",
    group: "sanitaryware",
    description: "Exclusive Stone Basin Collections crafted from natural marble, terrazzo, and luxury stone blocks. Unapologetic luxury and sculptural beauty.",
    bannerImage: "/images/PDF1_P40_IMG1.png",
    image: "/stoneisthekingofluxury/200.jpg",
    features: ["Natural Stone", "Sculptural Masterpieces", "11 Years Unmatched Assurance"]
  },
  {
    slug: "wall-hung-wc",
    title: "Wall Hung WC",
    group: "sanitaryware",
    description: "Rimless Wall Hung Water Closets with quiet flush engineering, ergonomic contours, and soft-close seats.",
    bannerImage: "/images/PDF1_P40_IMG1.png",
    image: "/wallhungwc/25.jpg",
    features: ["Rimless Hygiene", "Soft Close Seat", "11 Years Unmatched Assurance"]
  },
  {
    slug: "sanitaryware-collections",
    title: "Sanitaryware Collections",
    group: "sanitaryware",
    description: "Sanitaryware Collections featuring timeless porcelain ceramics, high-efficiency flushing technology, and ergonomic contours.",
    bannerImage: "/images/PDF1_P40_IMG1.png",
    features: ["Rimless Design", "High Efficiency Flush", "Soft Close Seat", "11 Years Unmatched Assurance"]
  },
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

  // 8. MIRRORS
  {
    slug: "metal-led-mirrors",
    title: "Metal LED Mirrors",
    group: "mirrors",
    description: "Architectural Metal LED Mirrors framed in solid metallic alloys with integrated touch-sensitive LED backlighting and anti-fog heating.",
    bannerImage: "/MIRRORS/METAL LED MIRRORS (1).jpg",
    features: ["LED Backlighting", "Metallic Frame", "Anti-Fog Heater", "11 Years Unmatched Assurance", "Touch Sensor"]
  },
  {
    slug: "metal-mirrors",
    title: "Metal Mirrors",
    group: "mirrors",
    description: "Elegant Metal Mirrors framed in sleek brushed and polished metallic profiles for a striking contemporary vanity statement.",
    bannerImage: "/MIRRORS/METAL MIRRORS (1).jpg",
    features: ["Metallic Profile", "Corrosion Resistant", "Precision Edge", "11 Years Unmatched Assurance"]
  },
  {
    slug: "led-mirrors",
    title: "LED Mirrors",
    group: "mirrors",
    description: "Frameless LED Vanity Mirrors featuring ambient halo illumination, adjustable color temperatures, and crystal-clear float glass.",
    bannerImage: "/MIRRORS/LED MIRRORS (1).png",
    features: ["Halo Illumination", "Adjustable CCT", "Anti-Fog Heating", "11 Years Unmatched Assurance"]
  },
  {
    slug: "3d-mirrors",
    title: "3D Mirrors",
    group: "mirrors",
    description: "Stunning 3D Infinity & Sculptural Mirrors that create deep architectural dimension and modern luxury lighting effects.",
    bannerImage: "/MIRRORS/3D MIRRORS (1).png",
    features: ["3D Optical Depth", "LED Integrated", "Sculptural Form", "11 Years Unmatched Assurance"]
  },
  {
    slug: "plain-mirrors",
    title: "Plain Mirrors",
    group: "mirrors",
    description: "Minimalist High-Definition Plain Vanity Mirrors crafted from distortion-free silver float glass with polished safety edges.",
    bannerImage: "/MIRRORS/plain MIRRORS (1).png",
    features: ["HD Silver Glass", "Distortion Free", "Polished Safety Edge", "11 Years Unmatched Assurance"]
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
import { sanitarywareProducts } from "./sanitarywareProducts";

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
    ["showers", "multi-functional-body-showers", "diverters", "tile-insert-drainers", "basin-mixers", "others-accessories"].includes(c.group),
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

function createCategoryProducts(
  categorySlug: string,
  titlePrefix: string,
  codePrefix: string,
  basePrice: number,
  imagePaths: string[]
): Product[] {
  const finishes = [
    "PVD Chrome",
    "Brushed Gold",
    "Rose Gold",
    "Matte Black",
    "Graphite Grey",
    "Polished Chrome",
    "Gunmetal",
    "Brushed Nickel",
  ];
  return imagePaths.map((image, idx) => {
    const finish = finishes[idx % finishes.length];
    const num = idx + 1;
    return {
      id: `${categorySlug}-${num}`,
      slug: `${categorySlug}-${num}`,
      name: `${titlePrefix} (${finish})`,
      category: categorySlug,
      finish,
      price: basePrice + (idx % 3) * 2000,
      code: `${codePrefix}-100${num}`,
      image,
    };
  });
}

const realCategoryProducts: Product[] = [
  // Showers
  ...createCategoryProducts(
    "2-function-shower-rain-mist",
    "2 Function Shower",
    "JW-2FS",
    48000,
    [
      "/showers/2 Function Shower (1).png",
      "/showers/2 Function Shower (2).png",
      "/showers/2 Function Shower (3).png",
      "/showers/2 Function Shower (4).png",
    ]
  ),
  ...createCategoryProducts(
    "3-function-shower-rain-mist-dual-waterfall",
    "3 Function Shower (Rain, Mist & Dual Waterfall)",
    "JW-3FSW",
    58000,
    [
      "/showers/3 functionshower rain four mistspray&dualwaterfall (1).png",
      "/showers/3 functionshower rain four mistspray&dualwaterfall (2).png",
      "/showers/3 functionshower rain four mistspray&dualwaterfall (3).png",
      "/showers/3 Function Shower (1).png",
      "/showers/3 Function Shower (2).png",
      "/showers/3 Function Shower (3).png",
      "/showers/3 Function Shower (4).png",
    ]
  ),
  ...createCategoryProducts(
    "3-function-shower-rain-mist-large-single-waterfall",
    "3 Function Shower (Large Waterfall)",
    "JW-3FSL",
    62000,
    [
      "/showers/3 Function Shower (Large Waterfall) (1).png",
      "/showers/3 Function Shower (Large Waterfall) (2).png",
      "/showers/3 Function Shower (Large Waterfall) (3).png",
      "/showers/3 Function Shower (Large Waterfall) (4).png",
    ]
  ),
  ...createCategoryProducts(
    "2-function-shower-rain-large-single-waterfall",
    "2 Function Shower (Large Waterfall)",
    "JW-2FSL",
    52000,
    [
      "/showers/2 Function Shower (Large Waterfall).png",
      "/showers/2 Function Shower (Large Waterfall) (2).png",
    ]
  ),
  ...createCategoryProducts(
    "4-function-shower-chromotherapy",
    "4 Function Shower (Chromotherapy)",
    "JW-4FS",
    78000,
    [
      "/showers/4 Function Shower (1).png",
      "/showers/4 Function Shower (2).png",
      "/showers/4 Function Shower (3).png",
      "/showers/4 Function Shower (4).png",
    ]
  ),
  ...createCategoryProducts(
    "multifunctional-showers",
    "Multifunctional Shower System",
    "JW-MFS",
    84000,
    [
      "/showers/Multifunctional Showers (1).png",
      "/showers/Multifunctional Showers (2).png",
      "/showers/Multifunctional Showers (3).png",
      "/showers/Multifunctional Showers (4).png",
      "/showers/Multifunctional Showers (5).png",
      "/showers/Multifunctional Showers (6).png",
    ]
  ),
  ...createCategoryProducts(
    "single-function-shower-rain",
    "Single Function Rain Shower",
    "JW-1FS",
    28000,
    [
      "/showers/Single Function Shower (1).png",
      "/showers/Single Function Shower (2).png",
      "/showers/Single Function Shower (3).png",
      "/showers/Single Function Shower (4).png",
    ]
  ),
  ...createCategoryProducts(
    "waterfall-showers",
    "Waterfall Shower",
    "JW-WFS",
    34000,
    [
      "/showers/Waterfall Showers (1).png",
      "/showers/Waterfall Showers (2).png",
      "/showers/Waterfall Showers (3).png",
      "/showers/Waterfall Showers (4).png",
    ]
  ),
  ...createCategoryProducts(
    "2-function-wall-mounted-shower-arm",
    "2 Function Wall Mounted Shower with Arm",
    "JW-2FWM",
    44000,
    [
      "/showers/2 Function Wall Mounted Shower with Shower Arm (1).png",
      "/showers/2 Function Wall Mounted Shower with Shower Arm (2).png",
      "/showers/2 Function Wall Mounted Shower with Shower Arm (3).png",
    ]
  ),
  ...createCategoryProducts(
    "multifunctional-wall-mounted-shower",
    "Multifunctional Wall Mounted Shower (2 Function)",
    "JW-MFWM",
    64000,
    [
      "/showers/Multifunctional Wall Mounted Shower (2 Function) (1).png",
      "/showers/Multifunctional Wall Mounted Shower (2 Function) (2).png",
      "/showers/Multifunctional Wall Mounted Shower (2 Function) (3).png",
      "/showers/Multifunctional Wall Mounted Shower (2 Function) (4).png",
      "/showers/Multifunctional Wall Mounted Shower (2 Function) (5).png",
      "/showers/Multifunctional Wall Mounted Shower (2 Function) (6).png",
      "/showers/Multifunctional Wall Mounted Shower (2 Function) (7).png",
      "/showers/Multifunctional Wall Mounted Shower (2 Function) (8).png",
    ]
  ),

  // Multi-Functional Body Showers
  ...createCategoryProducts(
    "body-jets-2-function",
    "Body Jets (2 Function)",
    "JW-BJ2",
    26000,
    [
      "/Body Showers/Body Jets (2 Function) (1).png",
      "/Body Showers/Body Jets (2 Function) (2).png",
      "/Body Showers/Body Jets (2 Function) (3).png",
      "/Body Showers/Body Jets (2 Function) (4).png",
    ]
  ),
  ...createCategoryProducts(
    "one-line-series",
    "One Line Series Body Shower",
    "JW-OLS",
    29000,
    [
      "/Body Showers/One Line Series (1).png",
      "/Body Showers/One Line Series (2).png",
      "/Body Showers/One Line Series (3).png",
      "/Body Showers/One Line Series (4).png",
    ]
  ),
  ...createCategoryProducts(
    "eminence-series",
    "Eminence Series Body Shower",
    "JW-EMS",
    32000,
    [
      "/Body Showers/Eminence Series (1).png",
      "/Body Showers/Eminence Series (2).png",
      "/Body Showers/Eminence Series (3).png",
      "/Body Showers/Eminence Series (4).png",
    ]
  ),

  // Diverters
  ...createCategoryProducts(
    "5-function-diverter",
    "5 Function Diverter",
    "JW-5FD",
    38000,
    [
      "/diverters/5 Function Diverter (1).png",
      "/diverters/5 Function Diverter (2).png",
      "/diverters/5 Function Diverter (3).png",
      "/diverters/5 Function Diverter (4).png",
    ]
  ),
  ...createCategoryProducts(
    "6-function-diverter",
    "6 Function Diverter",
    "JW-6FD",
    45000,
    [
      "/diverters/6 Function Diverter (1).png",
      "/diverters/6 Function Diverter (2).png",
      "/diverters/6 Function Diverter (3).png",
      "/diverters/6 Function Diverter (4).png",
      "/diverters/6 Function Diverter (5).png",
      "/diverters/6 Function Diverter (6).png",
      "/diverters/6 Function Diverter (7).png",
      "/diverters/6 Function Diverter (8).png",
    ]
  ),
  ...createCategoryProducts(
    "thermostatic-diverter-three-outlet",
    "Thermostatic Diverter (Three Outlet)",
    "JW-THD",
    52000,
    [
      "/diverters/Thermostatic Diverter (1).png",
      "/diverters/Thermostatic Diverter (2).png",
      "/diverters/Thermostatic Diverter (3).png",
      "/diverters/Thermostatic Diverter (4).png",
      "/diverters/Thermostatic Diverter (Three Outlet) (1).png",
      "/diverters/Thermostatic Diverter (Three Outlet) (2).png",
      "/diverters/Thermostatic Diverter (Three Outlet) (3).png",
    ]
  ),
  ...createCategoryProducts(
    "lever-diverter-three-outlet",
    "Lever Diverter (Three Outlet)",
    "JW-LVD",
    34000,
    [
      "/diverters/Lever Diverter Three Outlet (1).png",
      "/diverters/Lever Diverter Three Outlet (2).png",
      "/diverters/Lever Diverter Three Outlet (3).png",
      "/diverters/Lever Diverter Three Outlet (4).png",
    ]
  ),

  // Tile Insert Drainers
  ...createCategoryProducts(
    "tile-insert-drain",
    "Tile Insert Drain",
    "JW-TID",
    18000,
    [
      "/Tile Insert Drain/Tile Insert Drain (1).png",
      "/Tile Insert Drain/Tile Insert Drain (2).png",
      "/Tile Insert Drain/Tile Insert Drain (3).png",
      "/Tile Insert Drain/Tile Insert Drain (4).png",
      "/Tile Insert Drain/Tile Insert (125 x 125 MM) (1).png",
      "/Tile Insert Drain/Tile Insert (125 x 125 MM) (2).png",
      "/Tile Insert Drain/Tile Insert (125 x 125 MM) (3).png",
      "/Tile Insert Drain/Tile Insert (125 x 125 MM) (4).png",
      "/Tile Insert Drain/Tile Insert (125 x 125 MM) (5).png",
      "/Tile Insert Drain/Tile Insert (125 x 125 MM) (6).png",
      "/Tile Insert Drain/Tile Insert (125 x 125 MM) (7).png",
      "/Tile Insert Drain/Tile Insert (125 x 125 MM) (8).png",
    ]
  ),

  // Basin Mixers
  ...createCategoryProducts(
    "round-controller-basin-mixer",
    "Round Controller Basin Mixer",
    "JW-RCB",
    24000,
    [
      "/basinmixer/Round Controller Basin Mixer (1).png",
      "/basinmixer/Round Controller Basin Mixer (2).png",
      "/basinmixer/Round Controller Basin Mixer (3).png",
    ]
  ),
  ...createCategoryProducts(
    "thermostatic-click-controller-basin-mixer",
    "Thermostatic Click Controller Basin Mixer",
    "JW-THB",
    32000,
    [
      "/basinmixer/Thermostatic Click Controller Basin Mixer (1).png",
      "/basinmixer/Thermostatic Click Controller Basin Mixer (2).png",
      "/basinmixer/Thermostatic Click Controller Basin Mixer (3).png",
    ]
  ),
  ...createCategoryProducts(
    "lever-basin-mixer",
    "Lever Basin Mixer",
    "JW-LVB",
    18000,
    [
      "/basinmixer/Lever Basin Mixer (1).png",
      "/basinmixer/Lever Basin Mixer (2).png",
      "/basinmixer/Lever Basin Mixer (3).png",
      "/basinmixer/Lever Basin Mixer (4).png",
    ]
  ),
  ...createCategoryProducts(
    "table-mounted-basin-mixer",
    "Table Mounted Basin Mixer",
    "JW-TMB",
    26000,
    [
      "/basinmixer/Table Mounted Basin Mixer (1).png",
      "/basinmixer/Table Mounted Basin Mixer (2).png",
      "/basinmixer/Table Mounted Basin Mixer (3).png",
      "/basinmixer/Table Mounted Basin Mixer (4).png",
    ]
  ),
  ...createCategoryProducts(
    "progressive-controller-waterfall-basin-mixer",
    "Progressive Controller Waterfall Basin Mixer",
    "JW-PWB",
    34000,
    [
      "/basinmixer/Progressive Controller Waterfall Basin Mixer.png",
      "/basinmixer/Progressive Controller Waterfall Basin Mixer (1).png",
      "/basinmixer/Progressive Controller Waterfall Basin Mixer (2).png",
      "/basinmixer/Progressive Controller Waterfall Basin Mixer (3).png",
    ]
  ),
  ...createCategoryProducts(
    "ceiling-mounted-basin-mixer",
    "Ceiling Mounted Basin Mixer",
    "JW-CMB",
    42000,
    [
      "/basinmixer/Ceiling Mounted Basin Mixer (1).png",
      "/basinmixer/Ceiling Mounted Basin Mixer (2).png",
      "/basinmixer/Ceiling Mounted Basin Mixer (4).png",
      "/basinmixer/Ceiling Mounted Basin Mixer (5).png",
      "/basinmixer/Ceiling Mounted Basin Mixer (6).png",
      "/basinmixer/Ceiling Mounted Basin Mixer (7).png",
      "/basinmixer/Ceiling Mounted Basin Mixer (8).png",
      "/basinmixer/Ceiling Mounted Basin Mixer (9).png",
    ]
  ),

  // Sanitaryware
  ...sanitarywareProducts,

  // Others / Accessories
  ...createCategoryProducts(
    "bathroom-accessories-fittings",
    "Bathroom Accessories & Fittings",
    "JW-BAF",
    8000,
    [
      "/OTHERS/Bathroom Accessories & Fittings.png",
      ...Array.from({ length: 39 }, (_, i) => `/OTHERS/Bathroom Accessories & Fittings (${i + 1}).png`),
    ]
  ),

  // Mirrors - 1. Metal LED Mirrors (Exact names & prices from joywater.in/bathroom-mirrors/metal-led-mirrors/)
  {
    id: "metal-led-mirrors-1",
    slug: "metal-led-mirrors-1",
    name: "Metal Aura",
    category: "metal-led-mirrors",
    finish: "Brushed Gold",
    price: 36000,
    code: "JW-MLM-101",
    image: "/MIRRORS/METAL LED MIRRORS (1).jpg",
  },
  {
    id: "metal-led-mirrors-2",
    slug: "metal-led-mirrors-2",
    name: "Metal Majesty",
    category: "metal-led-mirrors",
    finish: "Rose Gold",
    price: 12600,
    code: "JW-MLM-102",
    image: "/MIRRORS/METAL LED MIRRORS (2).jpg",
  },
  {
    id: "metal-led-mirrors-3",
    slug: "metal-led-mirrors-3",
    name: "Metal Mystique",
    category: "metal-led-mirrors",
    finish: "Matte Black",
    price: 12600,
    code: "JW-MLM-103",
    image: "/MIRRORS/METAL LED MIRRORS (3).jpg",
  },
  {
    id: "metal-led-mirrors-4",
    slug: "metal-led-mirrors-4",
    name: "Metal Eclipse",
    category: "metal-led-mirrors",
    finish: "Gunmetal",
    price: 12600,
    code: "JW-MLM-104",
    image: "/MIRRORS/METAL LED MIRRORS (4).jpg",
  },
  {
    id: "metal-led-mirrors-5",
    slug: "metal-led-mirrors-5",
    name: "Gleam Guard",
    category: "metal-led-mirrors",
    finish: "PVD Chrome",
    price: 16500,
    code: "JW-MLM-105",
    image: "/MIRRORS/METAL LED MIRRORS (5).jpg",
  },
  {
    id: "metal-led-mirrors-6",
    slug: "metal-led-mirrors-6",
    name: "Metallic Vision",
    category: "metal-led-mirrors",
    finish: "Brushed Nickel",
    price: 17310,
    code: "JW-MLM-106",
    image: "/MIRRORS/METAL LED MIRRORS (6).jpg",
  },
  {
    id: "metal-led-mirrors-7",
    slug: "metal-led-mirrors-7",
    name: "Lumina Metallica",
    category: "metal-led-mirrors",
    finish: "Graphite Grey",
    price: 22500,
    code: "JW-MLM-107",
    image: "/MIRRORS/METAL LED MIRRORS (7).jpg",
  },

  // Mirrors - 2. Metal Mirrors (Exact names & prices from joywater.in/bathroom-mirrors/metal-mirrors/)
  {
    id: "metal-mirrors-1",
    slug: "metal-mirrors-1",
    name: "Ovaluxe",
    category: "metal-mirrors",
    finish: "Brushed Gold",
    price: 18000,
    code: "JW-MM-101",
    image: "/MIRRORS/METAL MIRRORS.jpg",
  },
  {
    id: "metal-mirrors-2",
    slug: "metal-mirrors-2",
    name: "Metal Edge",
    category: "metal-mirrors",
    finish: "Matte Black",
    price: 14400,
    code: "JW-MM-102",
    image: "/MIRRORS/METAL MIRRORS (1).jpg",
  },
  {
    id: "metal-mirrors-3",
    slug: "metal-mirrors-3",
    name: "Lustra Oval",
    category: "metal-mirrors",
    finish: "Rose Gold",
    price: 10800,
    code: "JW-MM-103",
    image: "/MIRRORS/METAL MIRRORS (2).jpg",
  },
  {
    id: "metal-mirrors-4",
    slug: "metal-mirrors-4",
    name: "Metal Mingle",
    category: "metal-mirrors",
    finish: "Gunmetal",
    price: 8100,
    code: "JW-MM-104",
    image: "/MIRRORS/METAL MIRRORS (3).jpg",
  },
  {
    id: "metal-mirrors-5",
    slug: "metal-mirrors-5",
    name: "Radiant Ring",
    category: "metal-mirrors",
    finish: "PVD Chrome",
    price: 8100,
    code: "JW-MM-105",
    image: "/MIRRORS/METAL MIRRORS (4).jpg",
  },
  {
    id: "metal-mirrors-6",
    slug: "metal-mirrors-6",
    name: "Miragique",
    category: "metal-mirrors",
    finish: "Brushed Nickel",
    price: 8100,
    code: "JW-MM-106",
    image: "/MIRRORS/METAL MIRRORS (5).jpg",
  },
  {
    id: "metal-mirrors-7",
    slug: "metal-mirrors-7",
    name: "Artisan Circle",
    category: "metal-mirrors",
    finish: "Graphite Grey",
    price: 18000,
    code: "JW-MM-107",
    image: "/MIRRORS/METAL MIRRORS (6).jpg",
  },
  {
    id: "metal-mirrors-8",
    slug: "metal-mirrors-8",
    name: "Metal Arc",
    category: "metal-mirrors",
    finish: "Polished Chrome",
    price: 14400,
    code: "JW-MM-108",
    image: "/MIRRORS/METAL MIRRORS (7).jpg",
  },

  // Mirrors - 3. LED Mirrors
  ...createCategoryProducts(
    "led-mirrors",
    "LED Vanity Mirror",
    "JW-LED",
    16800,
    Array.from({ length: 25 }, (_, i) => `/MIRRORS/LED MIRRORS (${i + 1}).png`)
  ),

  // Mirrors - 4. 3D Mirrors
  ...createCategoryProducts(
    "3d-mirrors",
    "3D Infinity Mirror",
    "JW-3DM",
    24000,
    [
      "/MIRRORS/3D MIRRORS.png",
      ...Array.from({ length: 6 }, (_, i) => `/MIRRORS/3D MIRRORS (${i + 1}).png`),
    ]
  ),

  // Mirrors - 5. Plain Mirrors
  ...createCategoryProducts(
    "plain-mirrors",
    "HD Plain Mirror",
    "JW-PLM",
    7200,
    [
      ...Array.from({ length: 11 }, (_, i) => `/MIRRORS/plain MIRRORS (${i + 1}).png`),
      "/MIRRORS/Artboard-1_9.png",
    ]
  ),
];

export const products: Product[] = [
  ...realCategoryProducts,
  ...generateProducts(100),
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getProductsByCategory(slug: string) {
  const exact = realCategoryProducts.filter((p) => p.category === slug);
  if (exact.length > 0) {
    return exact;
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
      "tile-insert-drain"
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
    "Sanitaryware": [
      "sanitaryware-basins",
      "stone-is-the-king-of-luxury",
      "wall-hung-wc"
    ]
  },
  "Accessories": {
    "Accessories": [
      "bathroom-accessories-fittings"
    ]
  },
  "Mirrors": {
    "Bathroom Mirrors": [
      "metal-led-mirrors",
      "metal-mirrors",
      "led-mirrors",
      "3d-mirrors",
      "plain-mirrors"
    ]
  }
} as const;
