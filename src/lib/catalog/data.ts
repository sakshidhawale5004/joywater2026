export type Category = {
  slug: string;
  title: string;
  group: "faucets" | "showers" | "basins" | "toilets" | "components" | "resources";
  description: string;
  image?: string;
};

export const categories: Category[] = [
  // Faucets
  {
    slug: "graphite-grey",
    title: "Graphite Grey Faucets",
    group: "faucets",
    description: "Faucets finished in deep graphite grey PVD.",
  },
  {
    slug: "rose-gold",
    title: "Rose Gold Faucets",
    group: "faucets",
    description: "Warm rose gold PVD faucets.",
  },
  {
    slug: "rose-gold-chrome",
    title: "Rose Gold + Chrome",
    group: "faucets",
    description: "Dual-tone rose gold and chrome faucets.",
  },
  {
    slug: "matt-black",
    title: "Matt Black Faucets",
    group: "faucets",
    description: "Signature matte black bathroom faucets.",
  },
  {
    slug: "matt-black-rose-gold",
    title: "Matt Black + Rose Gold",
    group: "faucets",
    description: "Contrasting matt black with rose gold accents.",
  },
  {
    slug: "venetian-gold",
    title: "Venetian Gold",
    group: "faucets",
    description: "Rich venetian gold PVD faucets.",
  },
  {
    slug: "brushed-gold",
    title: "Brushed Gold Faucets",
    group: "faucets",
    description: "Softly brushed gold PVD faucets.",
  },
  {
    slug: "brushed-rose-gold",
    title: "Brushed Rose Gold Faucets",
    group: "faucets",
    description: "Brushed rose gold PVD faucets.",
  },
  {
    slug: "matt-white-rose-gold",
    title: "Matt White + Rose Gold",
    group: "faucets",
    description: "Matt white with rose gold detailing.",
  },
  {
    slug: "crystal-series",
    title: "Crystal Series",
    group: "faucets",
    description: "Crystal handle chrome faucets.",
  },
  {
    slug: "slender-series",
    title: "Slender Series",
    group: "faucets",
    description: "Slim silhouette chrome faucets.",
  },
  {
    slug: "cube-series",
    title: "Cube Series",
    group: "faucets",
    description: "Cubic architecture faucets.",
  },
  {
    slug: "zero-series",
    title: "Zero Series",
    group: "faucets",
    description: "Zero-radius modern faucets.",
  },
  {
    slug: "basin-faucets-exclusive",
    title: "Basin Faucets — Exclusive",
    group: "faucets",
    description: "Exclusive basin faucet collection.",
  },
  {
    slug: "basin-mixers",
    title: "Basin Mixers",
    group: "faucets",
    description: "Single and dual-lever basin mixers.",
  },
  {
    slug: "svelte-series",
    title: "Svelte Series",
    group: "faucets",
    description: "Svelte designer faucet series.",
  },
  {
    slug: "pebble-series",
    title: "Pebble Series",
    group: "faucets",
    description: "Pebble-inspired organic faucets.",
  },
  {
    slug: "shield-316-series",
    title: "Shield 316 Series",
    group: "faucets",
    description: "316 stainless steel corrosion-shield faucets.",
  },
  {
    slug: "oblikue-series",
    title: "Oblikue Series",
    group: "faucets",
    description: "Angular oblique-form faucets.",
  },
  {
    slug: "wave-series",
    title: "Wave Series",
    group: "faucets",
    description: "Fluid wave-form designer faucets.",
  },
  {
    slug: "click-select-series",
    title: "Click-Select Series",
    group: "faucets",
    description: "Click-select flow control faucets.",
  },
  {
    slug: "prestige-collection",
    title: "Prestige Collection",
    group: "faucets",
    description: "Prestige designer faucet collection.",
  },
  {
    slug: "heritage-series",
    title: "Heritage Series",
    group: "faucets",
    description: "Heritage classical faucet series.",
  },
  {
    slug: "regalia-series",
    title: "Regalia Series",
    group: "faucets",
    description: "Regalia luxury faucet series.",
  },
  {
    slug: "kitchen-faucets-ro",
    title: "Kitchen Faucets with RO Connection",
    group: "faucets",
    description: "Kitchen faucets with integrated RO outlet.",
  },
  {
    slug: "kitchen-sink-mixers",
    title: "Kitchen Sink-Mixers & Sink-Cocks",
    group: "faucets",
    description: "Kitchen sink mixers and sink cocks.",
  },

  // Showers
  {
    slug: "shower-graphite-grey",
    title: "Graphite Grey Showers",
    group: "showers",
    description: "Showers in graphite grey PVD.",
  },
  {
    slug: "shower-rose-gold",
    title: "Rose Gold Showers",
    group: "showers",
    description: "Rose gold PVD showers.",
  },
  {
    slug: "shower-matt-black",
    title: "Matt Black Showers",
    group: "showers",
    description: "Matt black shower systems.",
  },
  {
    slug: "brushed-gold-shower",
    title: "Brushed Gold Shower",
    group: "showers",
    description: "Brushed gold shower systems.",
  },
  {
    slug: "brushed-rose-gold-shower",
    title: "Brushed Rose Gold Shower",
    group: "showers",
    description: "Brushed rose gold shower systems.",
  },
  {
    slug: "shower-venetian-gold",
    title: "Venetian Gold Showers",
    group: "showers",
    description: "Venetian gold showers.",
  },
  {
    slug: "shower-panels",
    title: "Shower Panels",
    group: "showers",
    description: "Wall-mounted shower panels.",
  },
  {
    slug: "brass-shower",
    title: "Brass Shower",
    group: "showers",
    description: "Solid brass shower heads.",
  },
  {
    slug: "multi-function-showers",
    title: "Multi-Function Showers",
    group: "showers",
    description: "Multiple spray-pattern showers.",
  },
  {
    slug: "abs-showers",
    title: "ABS Showers",
    group: "showers",
    description: "Lightweight ABS showers.",
  },
  {
    slug: "cascade-flow-showers",
    title: "Cascade-Flow Showers",
    group: "showers",
    description: "Cascade waterfall showers.",
  },
  {
    slug: "hand-showers",
    title: "Hand Showers",
    group: "showers",
    description: "Hand-held showers.",
  },
  {
    slug: "rain-showers",
    title: "Rain Showers",
    group: "showers",
    description: "Overhead rain showers.",
  },
  {
    slug: "shower-arms",
    title: "Shower Arms",
    group: "showers",
    description: "Wall and ceiling shower arms.",
  },
  {
    slug: "shower-rails",
    title: "Shower Rails",
    group: "showers",
    description: "Adjustable shower rails.",
  },
  {
    slug: "body-showers",
    title: "Body Showers",
    group: "showers",
    description: "Recessed body showers.",
  },
  {
    slug: "body-sprays",
    title: "Body Sprays",
    group: "showers",
    description: "Adjustable body sprays.",
  },

  // Basins
  {
    slug: "stone-pedestal-basins",
    title: "Stone Pedestal Basins",
    group: "basins",
    description: "Hand-carved stone pedestal wash basins.",
  },
  {
    slug: "marble-table-top-basins",
    title: "Marble Table Top Basins",
    group: "basins",
    description: "Marble table-top wash basins.",
  },
  {
    slug: "onyx-table-mounted-basins",
    title: "Onyx Table Mounted Basins",
    group: "basins",
    description: "Translucent onyx table-mounted basins.",
  },
  {
    slug: "concrete-basins",
    title: "Concrete Basins",
    group: "basins",
    description: "Architectural concrete basins.",
  },
  {
    slug: "stainless-steel-basins",
    title: "Stainless Steel Basins",
    group: "basins",
    description: "Grade 304 stainless steel basins.",
  },
  {
    slug: "ceramic-special-finish-wash-basins",
    title: "Ceramic Special Finish Wash Basins",
    group: "basins",
    description: "Ceramic basins in special glazes.",
  },
  {
    slug: "ceramic-pedestal-wash-basins",
    title: "Ceramic Pedestal Wash Basins",
    group: "basins",
    description: "Classic ceramic pedestal basins.",
  },
  {
    slug: "regular-ceramic-washbasins",
    title: "Regular Ceramic Washbasins",
    group: "basins",
    description: "Everyday ceramic washbasins.",
  },

  // Toilets
  {
    slug: "intelligent-wc",
    title: "Intelligent WC",
    group: "toilets",
    description: "Smart heated-seat, self-cleaning intelligent toilets.",
  },
  {
    slug: "special-finish-toilets",
    title: "Special Finish Toilets",
    group: "toilets",
    description: "Toilets in bespoke matt and metallic finishes.",
  },
  {
    slug: "premium-white-toilets",
    title: "Premium White Toilets",
    group: "toilets",
    description: "Premium white ceramic toilets.",
  },
  {
    slug: "regular-white-toilets",
    title: "Regular White Toilets",
    group: "toilets",
    description: "Standard white ceramic toilets.",
  },
  {
    slug: "couple-suite-toilets",
    title: "Couple Suite Toilets",
    group: "toilets",
    description: "Coupled cistern suite toilets.",
  },
  {
    slug: "urinals",
    title: "Urinals",
    group: "toilets",
    description: "Wall-mounted ceramic urinals.",
  },

  // Bath components
  {
    slug: "shower-drains",
    title: "Shower Drains",
    group: "components",
    description: "Linear and square shower drains.",
  },
  {
    slug: "bath-chairs",
    title: "Bath Chairs",
    group: "components",
    description: "Bathroom-grade seating.",
  },
  {
    slug: "bath-spouts",
    title: "Bath Spouts",
    group: "components",
    description: "Wall and deck bath spouts.",
  },
  {
    slug: "cosmetic-mirrors",
    title: "Cosmetic Mirrors",
    group: "components",
    description: "Magnifying and LED mirrors.",
  },
  {
    slug: "health-faucets",
    title: "Health-Faucets",
    group: "components",
    description: "Health faucets and holders.",
  },
  {
    slug: "misc-components",
    title: "Misc. Components",
    group: "components",
    description: "Bathroom miscellaneous parts.",
  },
  {
    slug: "bath-accessories",
    title: "Bath Accessories",
    group: "components",
    description: "Towel rails, hooks, holders and more.",
  },

  // Bathroom Accessories & Faucet Series
  {
    slug: "folding-rack",
    title: "Folding Rack",
    group: "components",
    description: "Bathroom folding rack.",
  },
  {
    slug: "shelfs",
    title: "Shelfs",
    group: "components",
    description: "Bathroom shelfs.",
  },
  {
    slug: "khutti-accessories",
    title: "Khutti/Accessories",
    group: "components",
    description: "Khutti and other accessories.",
  },
  {
    slug: "mackup-magnifying-mirror",
    title: "Mackup Magnifying Mirror",
    group: "components",
    description: "Makeup magnifying mirror.",
  },
  {
    slug: "floor-accessories",
    title: "Floor Accessories",
    group: "components",
    description: "Floor accessories.",
  },
  {
    slug: "tile-shower-drainers",
    title: "Tile / Shower Drainers",
    group: "components",
    description: "Tile and shower drainers.",
  },
  {
    slug: "showers-allied",
    title: "Showers & Allied",
    group: "components",
    description: "Showers and allied products.",
  },
  {
    slug: "angle-valves",
    title: "Angle Valves",
    group: "components",
    description: "Angle valves.",
  },
  {
    slug: "couplings",
    title: "Couplings",
    group: "components",
    description: "Couplings.",
  },
  {
    slug: "allied-products",
    title: "Allied Products",
    group: "components",
    description: "Allied products.",
  },
  {
    slug: "gasket-tape",
    title: "Gasket & Tape",
    group: "components",
    description: "Gasket and tape.",
  },
  { slug: "pyramid-series", title: "Pyramid Series", group: "faucets", description: "Pyramid series." },
  { slug: "signature-series", title: "Signature Series", group: "faucets", description: "Signature series." },
  { slug: "fortune-series", title: "Fortune Series", group: "faucets", description: "Fortune series." },
  { slug: "solitaire-series", title: "Solitaire Series", group: "faucets", description: "Solitaire series." },
  { slug: "swatch-series", title: "Swatch Series", group: "faucets", description: "Swatch series." },
  { slug: "unity-series", title: "Unity Series", group: "faucets", description: "Unity series." },
  { slug: "supreme-series", title: "Supreme Series", group: "faucets", description: "Supreme series." },
  { slug: "sigma-series", title: "Sigma Series", group: "faucets", description: "Sigma series." },
  { slug: "iris-series", title: "Iris Series", group: "faucets", description: "Iris series." },
  { slug: "oyster-series", title: "Oyster Series", group: "faucets", description: "Oyster series." },
  { slug: "ovilio-series", title: "Ovilio Series", group: "faucets", description: "Ovilio series." },
  { slug: "grace-series", title: "Grace Series", group: "faucets", description: "Grace series." },
  { slug: "rectus-series", title: "Rectus Series", group: "faucets", description: "Rectus series." },
  { slug: "duluxe-series", title: "Duluxe Series", group: "faucets", description: "Duluxe series." },
  { slug: "swatch-gold", title: "Swatch Gold", group: "faucets", description: "Swatch gold." },
  { slug: "supreme-gold", title: "Supreme Gold", group: "faucets", description: "Supreme gold." },
  { slug: "sigma-gold", title: "Sigma Gold", group: "faucets", description: "Sigma gold." },
  { slug: "iris-gold", title: "Iris Gold", group: "faucets", description: "Iris gold." },
  { slug: "grace-gold", title: "Grace Gold", group: "faucets", description: "Grace gold." },
  { slug: "rectus-gold", title: "Rectus Gold", group: "faucets", description: "Rectus gold." },
  { slug: "swatch-rose-gold", title: "Swatch Rose Gold", group: "faucets", description: "Swatch rose gold." },
  { slug: "supreme-rose-gold", title: "Supreme Rose Gold", group: "faucets", description: "Supreme rose gold." },
  { slug: "sigma-rose-gold", title: "Sigma Rose Gold", group: "faucets", description: "Sigma rose gold." },
  { slug: "iris-rose-gold", title: "Iris Rose Gold", group: "faucets", description: "Iris rose gold." },
  { slug: "oyster-rose-gold", title: "Oyster Rose Gold", group: "faucets", description: "Oyster rose gold." },
  { slug: "grace-rose-gold", title: "Grace Rose Gold", group: "faucets", description: "Grace rose gold." },
  { slug: "rectus-rose-gold", title: "Rectus Rose Gold", group: "faucets", description: "Rectus rose gold." },
  { slug: "oyster-black", title: "Oyster Black", group: "faucets", description: "Oyster black." },
  { slug: "grace-black", title: "Grace Black", group: "faucets", description: "Grace black." },
  { slug: "rectus-black", title: "Rectus Black", group: "faucets", description: "Rectus black." },
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
    ["faucets", "showers", "basins", "toilets", "components"].includes(c.group),
  );
  const out: Product[] = [];

  // Filter out some specific images we might want for hero/categories so products get mostly typical product images
  const productImages = imageList.filter(
    (img) => !img.includes("favicon") && !img.includes("logo") && !img.includes("Black-Horizontal"),
  );

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
  Faucets: {
    "Designer Faucets": [
      "svelte-series",
      "pebble-series",
      "shield-316-series",
      "oblikue-series",
      "wave-series",
      "click-select-series",
      "prestige-collection",
      "heritage-series",
      "regalia-series",
    ],
    "Series": [
      "pyramid-series",
      "signature-series",
      "fortune-series",
      "solitaire-series",
      "swatch-series",
      "unity-series",
      "supreme-series",
      "sigma-series",
      "iris-series",
      "oyster-series",
      "ovilio-series",
      "grace-series",
      "rectus-series",
      "duluxe-series",
    ],
    "Gold Series": [
      "swatch-gold",
      "supreme-gold",
      "sigma-gold",
      "iris-gold",
      "grace-gold",
      "rectus-gold",
    ],
    "Rose Gold Series": [
      "swatch-rose-gold",
      "supreme-rose-gold",
      "sigma-rose-gold",
      "iris-rose-gold",
      "oyster-rose-gold",
      "grace-rose-gold",
      "rectus-rose-gold",
    ],
    "Black Series": [
      "oyster-black",
      "grace-black",
      "rectus-black",
    ],
    "Faucets in PVD Finishes": [
      "graphite-grey",
      "rose-gold",
      "rose-gold-chrome",
      "matt-black",
      "matt-black-rose-gold",
      "venetian-gold",
      "brushed-gold",
      "brushed-rose-gold",
      "matt-white-rose-gold",
    ],
    "Faucets in Chrome Finish": [
      "crystal-series",
      "slender-series",
      "cube-series",
      "zero-series",
      "basin-faucets-exclusive",
      "basin-mixers",
    ],
    "Kitchen Faucets": ["kitchen-faucets-ro", "kitchen-sink-mixers"],
  },
  Showers: {
    "Showers in PVD Finishes": [
      "shower-graphite-grey",
      "shower-rose-gold",
      "shower-matt-black",
      "brushed-gold-shower",
      "brushed-rose-gold-shower",
      "shower-venetian-gold",
      "shower-panels",
    ],
    "Shower Heads": [
      "brass-shower",
      "multi-function-showers",
      "abs-showers",
      "cascade-flow-showers",
      "hand-showers",
      "rain-showers",
      "shower-arms",
      "shower-rails",
    ],
    "Body Jets": ["body-showers", "body-sprays"],
    "Designer Showers": ["svelte-series", "pebble-series", "shield-316-series", "heritage-series"],
  },
  Basins: {
    "Designer Basins": [
      "stone-pedestal-basins",
      "marble-table-top-basins",
      "onyx-table-mounted-basins",
      "concrete-basins",
      "stainless-steel-basins",
    ],
    "Ceramic Basins": [
      "ceramic-special-finish-wash-basins",
      "ceramic-pedestal-wash-basins",
      "regular-ceramic-washbasins",
    ],
  },
  Sanitaryware: {
    Toilets: [
      "intelligent-wc",
      "special-finish-toilets",
      "premium-white-toilets",
      "regular-white-toilets",
      "couple-suite-toilets",
    ],
    Urinals: ["urinals"],
  },
  "Bath Components": {
    "All Bath Components": [
      "shower-drains",
      "bath-chairs",
      "bath-spouts",
      "cosmetic-mirrors",
      "health-faucets",
      "misc-components",
      "bath-accessories",
    ],
  },
  "Bathroom Accessories": {
    "Accessories": [
      "folding-rack",
      "shelfs",
      "khutti-accessories",
      "mackup-magnifying-mirror",
      "floor-accessories",
      "tile-shower-drainers",
      "showers-allied",
      "angle-valves",
      "couplings",
      "allied-products",
      "gasket-tape",
    ],
    "All Bath Components": [
      "shower-drains",
      "bath-chairs",
      "bath-spouts",
      "cosmetic-mirrors",
      "health-faucets",
      "misc-components",
      "bath-accessories",
    ],
  },
} as const;
