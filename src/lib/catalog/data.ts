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
    slug: "led-mirrors",
    title: "LED Mirrors",
    group: "mirrors",
    description: "Frameless LED Vanity Mirrors featuring ambient halo illumination, adjustable color temperatures, and crystal-clear float glass.",
    bannerImage: "/ledmirroer/ganesh.jpg",
    features: ["Halo Illumination", "Adjustable CCT", "Anti-Fog Heating", "11 Years Unmatched Assurance"]
  },
  {
    slug: "3d-mirrors",
    title: "3D Mirrors",
    group: "mirrors",
    description: "Stunning 3D Infinity & Sculptural Mirrors that create deep architectural dimension and modern luxury lighting effects.",
    bannerImage: "/3dmirrors/bloomaura.jpg",
    features: ["3D Optical Depth", "LED Integrated", "Sculptural Form", "11 Years Unmatched Assurance"]
  },
  {
    slug: "metal-led-mirrors",
    title: "Metal LED Mirrors",
    group: "mirrors",
    description: "Architectural Metal LED Mirrors framed in solid metallic alloys with integrated touch-sensitive LED backlighting and anti-fog heating.",
    bannerImage: "/metalledmirror/GLEAMGUARDGOLD.jpg",
    features: ["LED Backlighting", "Metallic Frame", "Anti-Fog Heater", "11 Years Unmatched Assurance", "Touch Sensor"]
  },
  {
    slug: "metal-mirrors",
    title: "Metal Mirrors",
    group: "mirrors",
    description: "Elegant Metal Mirrors framed in sleek brushed and polished metallic profiles for a striking contemporary vanity statement.",
    bannerImage: "/metalmirror/artisiancircle.jpg",
    features: ["Metallic Profile", "Corrosion Resistant", "Precision Edge", "11 Years Unmatched Assurance"]
  },
  {
    slug: "classic-mirrors",
    title: "Classic Mirrors",
    group: "mirrors",
    description: "Timeless Classic Vanity Mirrors crafted with precision decorative borders and lead-free crystal float glass.",
    bannerImage: "/classicmirrors/externalecho.png",
    features: ["Beveled Edge", "Lead-Free Silver Glass", "Distortion Free", "11 Years Unmatched Assurance"]
  },
  {
    slug: "customized-mirrors",
    title: "Customized Mirrors",
    group: "mirrors",
    description: "Bespoke Luxury Mirrors custom-designed for architectural residences, boutique hotels, and personal spaces with tailored lighting and dimensions.",
    bannerImage: "/customizedmirrors/customizedmirrors (1).jpg",
    features: ["Bespoke Dimensions", "Tailored Illumination", "Smart Add-Ons", "11 Years Unmatched Assurance"]
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
import { mirrorProducts } from "./mirrorProducts";

// All products with authentic catalog prices and names from Catalog-Final-Doc-03 and Joy water merged PDFs
function createCategoryProducts(
  categorySlug: string,
  titlePrefix: string,
  codePrefix: string,
  basePrice: number,
  imagePaths: string[],
  customFinishes?: string[]
): Product[] {
  let finishes = customFinishes;
  
  if (!finishes) {
    if (imagePaths.length === 4) {
      finishes = ["Chrome", "Brushed Gold", "Graphite Grey", "Brushed Rose Gold"];
    } else if (imagePaths.length === 3) {
      finishes = ["Chrome", "Brushed Gold", "Graphite Grey"];
    } else if (imagePaths.length === 2) {
      finishes = ["Chrome", "Brushed Gold"];
    } else {
      const baseFinishes = [
        "Graphite Grey",
        "Rose Gold",
        "Matt Black",
        "Brushed Gold",
        "Brushed Rose Gold",
        "Chrome"
      ];
      finishes = baseFinishes.slice(0, imagePaths.length);
    }
  }

  
  const pdfCodes = [
    "JW-10011",
    "JW-10012",
    "JW-10013",
    "JW-10014",
    "JW-10015",
    "JW-10016",
    "JW-10017",
    "JW-10018",
  ];
  
  return finishes.map((finish, idx) => {
    const image = imagePaths[idx % imagePaths.length];
    const code = pdfCodes[idx % pdfCodes.length];
    const num = idx + 1;
    return {
      id: `${categorySlug}-${num}`,
      slug: `${categorySlug}-${num}`,
      name: `${titlePrefix} - ${finish}`,
      category: categorySlug,
      finish,
      price: basePrice,
      code,
      image,
    };
  });
}

const bodyJetsProducts: Product[] = [
  {
    id: "body-jets-2-function-1",
    slug: "body-jets-2-function-1",
    name: "Body Jet (2 Function - Rain & Mist) - Chrome Finish",
    category: "body-jets-2-function",
    finish: "Chrome",
    price: 3950,
    code: "JW-10038",
    image: "/Body Showers/Body Jets (2 Function) (1).png",
  },
  {
    id: "body-jets-2-function-2",
    slug: "body-jets-2-function-2",
    name: "Body Jet (2 Function - Rain & Mist) - Brushed Gold",
    category: "body-jets-2-function",
    finish: "Brushed Gold",
    price: 6600,
    code: "JW-10039",
    image: "/Body Showers/Body Jets (2 Function) (2).png",
  },
  {
    id: "body-jets-2-function-3",
    slug: "body-jets-2-function-3",
    name: "Body Jet (2 Function - Rain & Mist) - Graphite Grey",
    category: "body-jets-2-function",
    finish: "Graphite Grey",
    price: 6600,
    code: "JW-10041",
    image: "/Body Showers/Body Jets (2 Function) (3).png",
  },
  {
    id: "body-jets-2-function-4",
    slug: "body-jets-2-function-4",
    name: "Body Jet (2 Function - Rain & Mist) - Glossy Rose Gold",
    category: "body-jets-2-function",
    finish: "Rose Gold",
    price: 6600,
    code: "JW-10040",
    image: "/Body Showers/Body Jets (2 Function) (4).png",
  },
];

const ceilingMountedMixerProducts: Product[] = [
  {
    id: "ceiling-mounted-basin-mixer-1",
    slug: "ceiling-mounted-basin-mixer-1",
    name: "Ceiling Mounted Basin Mixer (Long) - Brushed Graphite Grey",
    category: "ceiling-mounted-basin-mixer",
    finish: "Brushed Graphite Grey",
    price: 22500,
    code: "JW-10103",
    image: "/basinmixer/Ceiling Mounted Basin Mixer (1).png",
  },
  {
    id: "ceiling-mounted-basin-mixer-2",
    slug: "ceiling-mounted-basin-mixer-2",
    name: "Table Mounted Basin Mixer (Medium) - Brushed Graphite Grey",
    category: "ceiling-mounted-basin-mixer",
    finish: "Brushed Graphite Grey",
    price: 14750,
    code: "JW-10104",
    image: "/basinmixer/Ceiling Mounted Basin Mixer (2).png",
  },
  {
    id: "ceiling-mounted-basin-mixer-3",
    slug: "ceiling-mounted-basin-mixer-3",
    name: "Ceiling Mounted Basin Mixer (Long) - Brushed Gold",
    category: "ceiling-mounted-basin-mixer",
    finish: "Brushed Gold",
    price: 22500,
    code: "JW-10099",
    image: "/basinmixer/Ceiling Mounted Basin Mixer (4).png",
  },
  {
    id: "ceiling-mounted-basin-mixer-4",
    slug: "ceiling-mounted-basin-mixer-4",
    name: "Table Mounted Basin Mixer (Medium) - Brushed Gold",
    category: "ceiling-mounted-basin-mixer",
    finish: "Brushed Gold",
    price: 14750,
    code: "JW-10100",
    image: "/basinmixer/Ceiling Mounted Basin Mixer (5).png",
  },
  {
    id: "ceiling-mounted-basin-mixer-5",
    slug: "ceiling-mounted-basin-mixer-5",
    name: "Ceiling Mounted Basin Mixer (Long) - Brushed Rose Gold",
    category: "ceiling-mounted-basin-mixer",
    finish: "Brushed Rose Gold",
    price: 22500,
    code: "JW-10101",
    image: "/basinmixer/Ceiling Mounted Basin Mixer (6).png",
  },
  {
    id: "ceiling-mounted-basin-mixer-6",
    slug: "ceiling-mounted-basin-mixer-6",
    name: "Table Mounted Basin Mixer (Medium) - Brushed Rose Gold",
    category: "ceiling-mounted-basin-mixer",
    finish: "Brushed Rose Gold",
    price: 14750,
    code: "JW-10102",
    image: "/basinmixer/Ceiling Mounted Basin Mixer (7).png",
  },
  {
    id: "ceiling-mounted-basin-mixer-7",
    slug: "ceiling-mounted-basin-mixer-7",
    name: "Ceiling Mounted Basin Mixer (Long) - Brushed Chrome",
    category: "ceiling-mounted-basin-mixer",
    finish: "Brushed Chrome",
    price: 18400,
    code: "JW-10097",
    image: "/basinmixer/Ceiling Mounted Basin Mixer (8).png",
  },
  {
    id: "ceiling-mounted-basin-mixer-8",
    slug: "ceiling-mounted-basin-mixer-8",
    name: "Table Mounted Basin Mixer (Medium) - Brushed Chrome",
    category: "ceiling-mounted-basin-mixer",
    finish: "Brushed Chrome",
    price: 13500,
    code: "JW-10098",
    image: "/basinmixer/Ceiling Mounted Basin Mixer (9).png",
  },
];

const realCategoryProducts: Product[] = [
  // Showers
  ...createCategoryProducts(
    "2-function-shower-rain-mist",
    "2 Function Shower (Rain & Mist)",
    "JW-100",
    48000,
    [
      "/showers/2 Function Shower (1).png",
      "/showers/2 Function Shower (2).png",
      "/showers/2 Function Shower (3).png",
      "/showers/2 Function Shower (4).png",
    ],
    ["Chrome", "Brushed Gold", "Graphite Grey", "Brushed Rose Gold"]
  ),
  ...createCategoryProducts(
    "3-function-shower-rain-mist-dual-waterfall",
    "3 Function Shower (Rain, Mist & Dual Waterfall)",
    "JW-100",
    48000,
    [
      "/showers/3 functionshower rain four mistspray&dualwaterfall (1).png",
      "/showers/3 functionshower rain four mistspray&dualwaterfall (2).png",
      "/showers/3 functionshower rain four mistspray&dualwaterfall (3).png",
      "/showers/3 Function Shower (1).png",
      "/showers/3 Function Shower (2).png",
      "/showers/3 Function Shower (3).png",
      "/showers/3 Function Shower (4).png",
    ],
    [
      "Graphite Grey",
      "Brushed Rose Gold",
      "Brushed Gold",
      "Chrome",
      "Rose Gold",
      "Brushed Chrome",
      "Polished Chrome",
      "Brushed Nickel",
    ]
  ),
  ...createCategoryProducts(
    "3-function-shower-rain-mist-large-single-waterfall",
    "3 Function Shower (Rain, Mist & Large Waterfall)",
    "JW-100",
    48000,
    [
      "/showers/3 Function Shower (Large Waterfall) (1).png",
      "/showers/3 Function Shower (Large Waterfall) (2).png",
      "/showers/3 Function Shower (Large Waterfall) (3).png",
      "/showers/3 Function Shower (Large Waterfall) (4).png",
    ],
    ["Graphite Grey", "Brushed Gold", "Brushed Rose Gold", "Chrome"]
  ),
  ...createCategoryProducts(
    "2-function-shower-rain-large-single-waterfall",
    "2 Function Shower (Rain & Large Waterfall)",
    "JW-100",
    48000,
    [
      "/showers/2 Function Shower (Large Waterfall).png",
      "/showers/2 Function Shower (Large Waterfall) (2).png",
    ]
  ),
  ...createCategoryProducts(
    "4-function-shower-chromotherapy",
    "4 Function Shower (Chromotherapy LED & Waterfall)",
    "JW-100",
    48000,
    [
      "/showers/4 Function Shower (1).png",
      "/showers/4 Function Shower (2).png",
      "/showers/4 Function Shower (3).png",
      "/showers/4 Function Shower (4).png",
    ],
    ["Graphite Grey", "Brushed Gold", "Brushed Rose Gold", "Chrome"]
  ),
  ...createCategoryProducts(
    "multifunctional-showers",
    "Multifunctional Shower System",
    "JW-100",
    48000,
    [
      "/showers/Multifunctional Showers (1).png",
      "/showers/Multifunctional Showers (2).png",
      "/showers/Multifunctional Showers (3).png",
      "/showers/Multifunctional Showers (4).png",
      "/showers/Multifunctional Showers (5).png",
      "/showers/Multifunctional Showers (6).png",
    ],
    [
      "Graphite Grey",
      "Brushed Rose Gold",
      "Brushed Gold",
      "Chrome",
      "Rose Gold",
      "Brushed Chrome",
    ]
  ),
  ...createCategoryProducts(
    "single-function-shower-rain",
    "Single Function Rain Shower",
    "JW-100",
    48000,
    [
      "/showers/Single Function Shower (1).png",
      "/showers/Single Function Shower (2).png",
      "/showers/Single Function Shower (3).png",
      "/showers/Single Function Shower (4).png",
    ]
  ),
  ...createCategoryProducts(
    "waterfall-showers",
    "Waterfall Shower System",
    "JW-100",
    48000,
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
    "JW-100",
    48000,
    [
      "/showers/2 Function Wall Mounted Shower with Shower Arm (1).png",
      "/showers/2 Function Wall Mounted Shower with Shower Arm (2).png",
      "/showers/2 Function Wall Mounted Shower with Shower Arm (3).png",
    ]
  ),
  ...createCategoryProducts(
    "multifunctional-wall-mounted-shower",
    "Multifunctional Wall Mounted Shower (2 Function)",
    "JW-100",
    48000,
    [
      "/showers/Multifunctional Wall Mounted Shower (2 Function) (1).png",
      "/showers/Multifunctional Wall Mounted Shower (2 Function) (2).png",
      "/showers/Multifunctional Wall Mounted Shower (2 Function) (3).png",
      "/showers/Multifunctional Wall Mounted Shower (2 Function) (4).png",
      "/showers/Multifunctional Wall Mounted Shower (2 Function) (5).png",
      "/showers/Multifunctional Wall Mounted Shower (2 Function) (6).png",
      "/showers/Multifunctional Wall Mounted Shower (2 Function) (7).png",
      "/showers/Multifunctional Wall Mounted Shower (2 Function) (8).png",
    ],
    [
      "Graphite Grey",
      "Matt Black",
      "Gunmetal",
      "Brushed Gold",
      "Chrome",
      "Gold",
      "Polished Chrome",
      "Brushed Nickel",
    ]
  ),

  // Multi-Functional Body Showers
  ...bodyJetsProducts,
  ...createCategoryProducts(
    "one-line-series",
    "One Line Series Body Shower",
    "JW-100",
    48000,
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
    "JW-100",
    48000,
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
    "JW-100",
    48000,
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
    "JW-100",
    48000,
    [
      "/diverters/6 Function Diverter (1).png",
      "/diverters/6 Function Diverter (2).png",
      "/diverters/6 Function Diverter (3).png",
      "/diverters/6 Function Diverter (4).png",
      "/diverters/6 Function Diverter (5).png",
      "/diverters/6 Function Diverter (6).png",
      "/diverters/6 Function Diverter (7).png",
      "/diverters/6 Function Diverter (8).png",
    ],
    [
      "Brushed Gold",
      "Graphite Grey",
      "Brushed Rose Gold",
      "Chrome",
      "Brushed Gold",
      "Graphite Grey",
      "Brushed Rose Gold",
      "Chrome",
    ]
  ),
  ...createCategoryProducts(
    "thermostatic-diverter-three-outlet",
    "Thermostatic Diverter (Three Outlet)",
    "JW-100",
    48000,
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
    "JW-100",
    48000,
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
    "JW-100",
    48000,
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
    "JW-100",
    48000,
    [
      "/basinmixer/Round Controller Basin Mixer (1).png",
      "/basinmixer/Round Controller Basin Mixer (2).png",
      "/basinmixer/Round Controller Basin Mixer (3).png",
    ],
    ["Brushed Rose Gold", "Brushed Gold", "Graphite Grey"]
  ),
  ...createCategoryProducts(
    "thermostatic-click-controller-basin-mixer",
    "Thermostatic Click Controller Basin Mixer",
    "JW-100",
    48000,
    [
      "/basinmixer/Thermostatic Click Controller Basin Mixer (1).png",
      "/basinmixer/Thermostatic Click Controller Basin Mixer (2).png",
      "/basinmixer/Thermostatic Click Controller Basin Mixer (3).png",
    ],
    ["Brushed Rose Gold", "Brushed Gold", "Graphite Grey"]
  ),
  ...createCategoryProducts(
    "lever-basin-mixer",
    "Lever Basin Mixer",
    "JW-100",
    48000,
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
    "JW-100",
    48000,
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
    "JW-100",
    48000,
    [
      "/basinmixer/Progressive Controller Waterfall Basin Mixer.png",
      "/basinmixer/Progressive Controller Waterfall Basin Mixer (1).png",
      "/basinmixer/Progressive Controller Waterfall Basin Mixer (2).png",
      "/basinmixer/Progressive Controller Waterfall Basin Mixer (3).png",
    ],
    ["Brushed Gold", "Chrome", "Graphite Grey", "Brushed Rose Gold"]
  ),
  ...ceilingMountedMixerProducts,

  // Sanitaryware
  ...sanitarywareProducts,

  // Others / Accessories
  ...createCategoryProducts(
    "bathroom-accessories-fittings",
    "Bathroom Accessories & Fittings",
    "JW-100",
    48000,
    [
      ...Array.from({ length: 28 }, (_, i) => `/OTHERS/Bathroom Accessories & Fittings (${i + 1}).png`),
      "/OTHERS/Bathroom Accessories & Fittings.png",
      "/OTHERS/Bathroom Accessories & Fittings (29).png",
      "/OTHERS/Bathroom Accessories & Fittings (30).png",
      "/OTHERS/Bathroom Accessories & Fittings (31).png",
      ...Array.from({ length: 8 }, (_, i) => `/OTHERS/Bathroom Accessories & Fittings (${i + 32}).png`),
    ],
    ["Brushed Gold", "Graphite Grey", "Brushed Rose Gold", "Chrome"]
  ),

  // Mirrors (62 authentic products from Joy water mirror.pdf across 6 collections)
  ...mirrorProducts,
];

export const products: Product[] = [
  ...realCategoryProducts,
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
  "Sanitaryware": {
    "Sanitaryware": [
      "sanitaryware-basins",
      "stone-is-the-king-of-luxury",
      "wall-hung-wc"
    ]
  },
  "Showering": {
    "Showers": [
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
    ],
    "Body Showers": [
      "body-jets-2-function",
      "one-line-series",
      "eminence-series"
    ],
    "Showers In PVD Finishes": [
      "graphite-grey",
      "rose-gold",
      "matt-black",
      "brushed-gold-shower",
      "brushed-rose-gold-shower"
    ]
  },
  "Diverters & Mixers": {
    "Diverters": [
      "5-function-diverter",
      "6-function-diverter",
      "thermostatic-diverter-three-outlet",
      "lever-diverter-three-outlet"
    ],
    "Drainers": [
      "tile-insert-drain"
    ],
    "Basin Mixers": [
      "round-controller-basin-mixer",
      "thermostatic-click-controller-basin-mixer",
      "lever-basin-mixer",
      "table-mounted-basin-mixer",
      "progressive-controller-waterfall-basin-mixer",
      "ceiling-mounted-basin-mixer"
    ]
  },
  "Bath Accessories": {
    "Accessories": [
      "bathroom-accessories-fittings"
    ]
  },
  "Mirrors": {
    "Bathroom Mirrors": [
      "led-mirrors",
      "3d-mirrors",
      "metal-led-mirrors",
      "metal-mirrors",
      "classic-mirrors",
      "customized-mirrors"
    ]
  }
} as const;
