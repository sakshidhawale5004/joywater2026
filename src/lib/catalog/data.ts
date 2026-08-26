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

    image: "/showers/2 Function Shower (1).png",
    features: ["Rain Spray", "Mist Spray", "Anti-clog nozzles", "11 Years Unmatched Assurance", "PVD Bonded Finish"]
  },
    {
    slug: "multifunctional-ceiling-shower-3-function",
    title: "3 Function Ceiling Shower",
    group: "showers",
    description: "3 function ceiling mounted shower with installation kit.",
    bannerImage: "/HEROSECTIONIMAGES/3 Function ShowerHERO.jpg",
    image: "/showers/3 Function Shower (1).png",
    features: ["Rain Spray", "4 Mist Spray", "Dual Waterfall", "11 Years Unmatched Assurance", "Solid Brass Construction"]
  },
  {
    slug: "3-function-shower-rain-mist-2-waterfall-led",
    title: "3 Function Shower (LED)",
    group: "showers",
    description: "3 function shower rain + mist + 2 waterfall + led.",
    bannerImage: "/HEROSECTIONIMAGES/3 Function ShowerHERO.jpg",
    image: "/showers/3 functionshower rain four mistspray&dualwaterfall (1).png",
    features: ["Rain", "Mist", "2 Waterfall", "LED", "11 Years Unmatched Assurance"]
  },
  {
    slug: "3-function-shower-rain-mist-large-single-waterfall",
    title: "3 Function Shower (Large Waterfall)",
    group: "showers",
    description: "Rain, 4 Mist Spray & Large Single Waterfall. Designed for maximum water coverage and soothing cascade flow.",

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
    title: "4 Function Shower Rain, 6 Mist, 2 Waterfall and Water Column",
    group: "showers",
    description: "Chromotherapy LED Light, Rain, Six Mist Spray, Water Column & Dual Waterfall. Ultimate sensory indulgence.",

    image: "/showers/4 Function Shower (1).png",
    features: ["Chromotherapy LED Light", "Rain", "6 Mist Spray", "Water Column", "Dual Waterfall", "11 Years Unmatched Assurance"]
  },
  {
    slug: "4-functional-shower-rain-4-mist-4side-flap-rain-water-column",
    title: "4 functional shower rain +  4 mist  +4side flap rain + water column",
    group: "showers",
    description: "Rain, Water Column & Four Waterfall overhead shower systems for complete body immersion.",

    image: "/showers/Multifunctional Showers (1).png",
    features: ["Rain", "4 Mist", "4 Side Flap Rain", "Water Column", "11 Years Unmatched Assurance"]
  },
  {
    slug: "2-function-shower-soft-rain-waterfall",
    title: "2 function shower soft rain +waterfall",
    group: "showers",
    description: "2 function shower soft rain +waterfall.",

    image: "/showers/Multifunctional Showers (4).png",
    features: ["Soft Rain", "Waterfall", "11 Years Unmatched Assurance"]
  },
  {
    slug: "single-function-shower-rain",
    title: "Single Function Shower",
    group: "showers",
    description: "Classic Rain shower providing a natural rainfall sensation with low water consumption.",

    image: "/showers/Single Function Shower (1).png",
    features: ["Rain", "40% Water Saving Aerators", "11 Years Unmatched Assurance"]
  },
  {
    slug: "waterfall-showers",
    title: "Waterfall Showers",
    group: "showers",
    description: "Elegant Waterfall showers that mimic natural cascades with smooth laminar flow.",

    image: "/showers/Waterfall Showers (1).png",
    features: ["Cascade Flow", "Solid Brass Billet", "11 Years Unmatched Assurance"]
  },
  {
    slug: "2-function-wall-mounted-shower-arm",
    title: "2 Function Wall Mounted Shower with Shower Arm",
    group: "showers",
    description: "Rain & Mist wall mounted shower paired with a high-strength solid brass shower arm.",

    image: "/showers/2 Function Wall Mounted Shower with Shower Arm (1).png",
    features: ["Rain", "Mist", "Wall Mounted", "11 Years Unmatched Assurance"]
  },
    {
    slug: "4-function-hand-shower",
    title: "4 function hand shower",
    group: "showers",
    description: "Spot Foam, Spot Waterfall, Spot Rain. Compact wall-mounted luxury for modern bathrooms.",

    image: "/showers/Multifunctional Wall Mounted Shower (2 Function) (4).png",
    features: ["Spot Foam", "Spot Waterfall", "Spot Rain", "11 Years Unmatched Assurance"]
  },
  {
    slug: "2-function-shower-rain-mist-hexagon",
    title: "2 function shower rain mist hexagon",
    group: "showers",
    description: "2 function shower rain mist hexagon",
    bannerImage: "/shower category/2 function shower rain mist 4  in hexagon shape  image for hero section  (1).jpg",
    image: "/shower category/2 function shower rain mist 4  in hexagon shape  gold  45000.png",
    features: ["Rain", "Mist", "Hexagon Shape", "11 Years Unmatched Assurance"]
  },
  {
    slug: "single-function-shower-rain-ceiling-mounted",
    title: "single function shower rain celing mounted shower",
    group: "showers",
    description: "single function shower rain celing mounted shower",
    bannerImage: "/HEROSECTIONIMAGES/single-function-shower-rain.jpg",
    image: "/shower category/single function shower rain celing mounted shower with installation kit 48000.png",
    features: ["Rain", "Ceiling Mounted", "11 Years Unmatched Assurance"]
  },
  {
    slug: "overhead-abs-shower",
    title: "overhead abs shower",
    group: "showers",
    description: "overhead abs shower",
    bannerImage: "/HEROSECTIONIMAGES/waterfall-showers.jpg",
    image: "/shower category/overhead abs shower rain 9500 chrome.png",
    features: ["ABS", "Overhead", "11 Years Unmatched Assurance"]
  },
  {
    slug: "hand-shower",
    title: "hand shower",
    group: "showers",
    description: "hand shower",
    bannerImage: "/HEROSECTIONIMAGES/2-function-wall-mounted-shower-arm.jpg",
    image: "/shower category/hand shower chrome 2250 (2).png",
    features: ["Hand Shower", "11 Years Unmatched Assurance"]
  },
  {
    slug: "shower-set-with-hot-cold-controller",
    title: "shower set with hot & cold controller",
    group: "showers",
    description: "shower set with hot & cold controller",
    bannerImage: "/HEROSECTIONIMAGES/2-function-wall-mounted-shower-arm.jpg",
    image: "/shower category/shower set with hot & cold controller with  shower rail & hand shower  black finish  42000 (1).jpg",
    features: ["Hot & Cold Controller", "11 Years Unmatched Assurance"]
  },
  {
    slug: "joy-spot-wall-mounted-shower",
    title: "joy spot wall mounted shower",
    group: "showers",
    description: "joy spot wall mounted shower.",

    image: "/showers/Multifunctional Wall Mounted Shower (2 Function) (1).png",
    features: ["Spot Foam", "Spot Waterfall", "Spot Rain", "11 Years Unmatched Assurance"]
  },

    {
    slug: "multifunctional-wall-mounted",
    title: "Multifunctional Wall Mounted",
    group: "showers",
    description: "Multifunctional wall mounted showers.",
    bannerImage: "/HEROSECTIONIMAGES/2-function-wall-mounted-shower-arm.jpg",
    features: ["Rain", "Mist", "Waterfall", "11 Years Unmatched Assurance"]
  },
  // 2. MULTI-FUNCTIONAL BODY SHOWERS
  {
    slug: "body-jets-2-function",
    title: "Body Jets (2 Function)",
    group: "multi-functional-body-showers",
    description: "Rain & Mist body jets designed for recessed wall installation and targeted hydrotherapy.",

    image: "/Body Showers/Body Jets (2 Function) (1).png",
    features: ["Rain", "Mist", "Recessed Installation", "11 Years Unmatched Assurance"]
  },
  {
    slug: "one-line-series",
    title: "One Line Series",
    group: "multi-functional-body-showers",
    description: "One Line Series minimalist body showers featuring zero-radius architectural profiles.",

    image: "/Body Showers/One Line Series (1).png",
    features: ["Minimalist Design", "High Pressure", "11 Years Unmatched Assurance"]
  },
  {
    slug: "eminence-series",
    title: "Eminence Series",
    group: "multi-functional-body-showers",
    description: "Eminence Series luxury body shower arrays with adjustable angle nozzles.",

    image: "/Body Showers/Eminence Series (1).png",
    features: ["Luxury Finish", "Precision Sprays", "11 Years Unmatched Assurance"]
  },

  // 3. DIVERTERS
  {
    slug: "5-function-diverter",
    title: "5 Function Diverter",
    group: "diverters",
    description: "The JOY WATER 5-function diverter offers unmatched versatility with the ability to control up to five water outlets. Equipped with high-quality Vernet cartridges.",

    image: "/diverters/5 Function Diverter (1).png",
    features: ["5 Functions", "Vernet Cartridge (Precision & Durability)", "10+1 Years Warranty", "11 Years Unmatched Assurance", "Smooth Transitions"]
  },
  {
    slug: "6-function-diverter",
    title: "6 Function Diverter",
    group: "diverters",
    description: "6 Function Diverter for comprehensive bathroom systems. Features genuine Vernet cartridges for drip-free temperature control.",

    image: "/diverters/6 Function Diverter (1).png",
    features: ["6 Functions", "Vernet Cartridge (Precision & Durability)", "10+1 Years Warranty", "11 Years Unmatched Assurance"]
  },
  {
    slug: "thermostatic-diverter-three-outlet",
    title: "Thermostatic Diverter (Three Outlet)",
    group: "diverters",
    description: "Provides seamless control between three water outlets with safety thermostatic locking. Renowned Vernet cartridge inside.",

    image: "/diverters/Thermostatic Diverter (Three Outlet) (1).png",
    features: ["Thermostatic Control", "3 Outlets", "Safety Lock", "Vernet Cartridge", "10+1 Years Warranty"]
  },
  {
    slug: "lever-diverter-three-outlet",
    title: "Lever Diverter (Three Outlet)",
    group: "diverters",
    description: "Classic Lever Diverter with Three Outlets, solid brass body, and smooth operational action.",

    image: "/diverters/Lever Diverter Three Outlet (1).png",
    features: ["Lever Handle", "3 Outlets", "Vernet Cartridge", "10+1 Years Warranty"]
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

    features: ["Thermostatic", "Click Controller", "11 Years Unmatched Assurance", "PVD Bonded"]
  },
  {
    slug: "lever-basin-mixer",
    title: "Lever Basin Mixer",
    group: "basin-mixers",
    description: "Classic single lever Basin Mixer machined from solid brass with ceramic disc cartridge.",

    features: ["Single Lever", "Smooth Operation", "11 Years Unmatched Assurance", "10Y Warranty"]
  },
  {
    slug: "table-mounted-basin-mixer",
    title: "Table Mounted Basin Mixer",
    group: "basin-mixers",
    description: "Tall Table Mounted Basin Mixer designed for vessel sinks and marble countertops.",

    features: ["Table Mounted", "Tall Profile", "11 Years Unmatched Assurance", "Solid Brass"]
  },
  {
    slug: "progressive-controller-waterfall-basin-mixer",
    title: "Progressive Controller Waterfall Basin Mixer",
    group: "basin-mixers",
    description: "Progressive Controller with wide Waterfall flow, combining modern minimalism with natural water motion.",

    features: ["Progressive Controller", "Waterfall Spout", "11 Years Unmatched Assurance", "PVD Finishes"]
  },
  {
    slug: "ceiling-mounted-basin-mixer",
    title: "Ceiling Mounted Basin Mixer",
    group: "basin-mixers",
    description: "Dramatic Ceiling Mounted Basin Mixer that drops water gracefully from above. A stunning architectural centerpiece.",

    features: ["Ceiling Mounted", "Statement Piece", "11 Years Unmatched Assurance"]
  },

    {
    slug: "premium-basin-mixer",
    title: "Premium Basin Mixer",
  },
    {
    slug: "4-function-hand-shower",
    title: "4 function hand shower",
    group: "showers",
    description: "Spot Foam, Spot Waterfall, Spot Rain. Compact wall-mounted luxury for modern bathrooms.",

    image: "/showers/Multifunctional Wall Mounted Shower (2 Function) (4).png",
    features: ["Spot Foam", "Spot Waterfall", "Spot Rain", "11 Years Unmatched Assurance"]
  },
  {
    slug: "2-function-shower-rain-mist-hexagon",
    title: "2 function shower rain mist hexagon",
    group: "showers",
    description: "2 function shower rain mist hexagon",
    bannerImage: "/shower category/2 function shower rain mist 4  in hexagon shape  image for hero section  (1).jpg",
    image: "/shower category/2 function shower rain mist 4  in hexagon shape  gold  45000.png",
    features: ["Rain", "Mist", "Hexagon Shape", "11 Years Unmatched Assurance"]
  },
  {
    slug: "single-function-shower-rain-ceiling-mounted",
    title: "single function shower rain celing mounted shower",
    group: "showers",
    description: "single function shower rain celing mounted shower",
    bannerImage: "/HEROSECTIONIMAGES/single-function-shower-rain.jpg",
    image: "/shower category/single function shower rain celing mounted shower with installation kit 48000.png",
    features: ["Rain", "Ceiling Mounted", "11 Years Unmatched Assurance"]
  },
  {
    slug: "overhead-abs-shower",
    title: "overhead abs shower",
    group: "showers",
    description: "overhead abs shower",
    bannerImage: "/HEROSECTIONIMAGES/waterfall-showers.jpg",
    image: "/shower category/overhead abs shower rain 9500 chrome.png",
    features: ["ABS", "Overhead", "11 Years Unmatched Assurance"]
  },
  {
    slug: "hand-shower",
    title: "hand shower",
    group: "showers",
    description: "hand shower",
    bannerImage: "/HEROSECTIONIMAGES/2-function-wall-mounted-shower-arm.jpg",
    image: "/shower category/hand shower chrome 2250 (2).png",
    features: ["Hand Shower", "11 Years Unmatched Assurance"]
  },
  {
    slug: "shower-set-with-hot-cold-controller",
    title: "shower set with hot & cold controller",
    group: "showers",
    description: "shower set with hot & cold controller",
    bannerImage: "/HEROSECTIONIMAGES/2-function-wall-mounted-shower-arm.jpg",
    image: "/shower category/shower set with hot & cold controller with  shower rail & hand shower  black finish  42000 (1).jpg",
    features: ["Hot & Cold Controller", "11 Years Unmatched Assurance"]
  },
  {
    slug: "joy-spot-wall-mounted-shower",
    title: "joy spot wall mounted shower",
    group: "showers",
    description: "joy spot wall mounted shower.",

    image: "/showers/Multifunctional Wall Mounted Shower (2 Function) (1).png",
    features: ["Spot Foam", "Spot Waterfall", "Spot Rain", "11 Years Unmatched Assurance"]
  },

    {
    slug: "multifunctional-wall-mounted",
    title: "Multifunctional Wall Mounted",
    group: "showers",
    description: "Multifunctional wall mounted showers.",
    bannerImage: "/HEROSECTIONIMAGES/2-function-wall-mounted-shower-arm.jpg",
    features: ["Rain", "Mist", "Waterfall", "11 Years Unmatched Assurance"]
  },
  // 2. MULTI-FUNCTIONAL BODY SHOWERS
  {
    slug: "body-jets-2-function",
    title: "Body Jets (2 Function)",
    group: "multi-functional-body-showers",
    description: "Rain & Mist body jets designed for recessed wall installation and targeted hydrotherapy.",

    image: "/Body Showers/Body Jets (2 Function) (1).png",
    features: ["Rain", "Mist", "Recessed Installation", "11 Years Unmatched Assurance"]
  },
  {
    slug: "one-line-series",
    title: "One Line Series",
    group: "multi-functional-body-showers",
    description: "One Line Series minimalist body showers featuring zero-radius architectural profiles.",

    image: "/Body Showers/One Line Series (1).png",
    features: ["Minimalist Design", "High Pressure", "11 Years Unmatched Assurance"]
  },
  {
    slug: "eminence-series",
    title: "Eminence Series",
    group: "multi-functional-body-showers",
    description: "Eminence Series luxury body shower arrays with adjustable angle nozzles.",

    image: "/Body Showers/Eminence Series (1).png",
    features: ["Luxury Finish", "Precision Sprays", "11 Years Unmatched Assurance"]
  },

  // 3. DIVERTERS
  {
    slug: "5-function-diverter",
    title: "5 Function Diverter",
    group: "diverters",
    description: "The JOY WATER 5-function diverter offers unmatched versatility with the ability to control up to five water outlets. Equipped with high-quality Vernet cartridges.",

    image: "/diverters/5 Function Diverter (1).png",
    features: ["5 Functions", "Vernet Cartridge (Precision & Durability)", "10+1 Years Warranty", "11 Years Unmatched Assurance", "Smooth Transitions"]
  },
  {
    slug: "6-function-diverter",
    title: "6 Function Diverter",
    group: "diverters",
    description: "6 Function Diverter for comprehensive bathroom systems. Features genuine Vernet cartridges for drip-free temperature control.",

    image: "/diverters/6 Function Diverter (1).png",
    features: ["6 Functions", "Vernet Cartridge (Precision & Durability)", "10+1 Years Warranty", "11 Years Unmatched Assurance"]
  },
  {
    slug: "thermostatic-diverter-three-outlet",
    title: "Thermostatic Diverter (Three Outlet)",
    group: "diverters",
    description: "Provides seamless control between three water outlets with safety thermostatic locking. Renowned Vernet cartridge inside.",

    image: "/diverters/Thermostatic Diverter (Three Outlet) (1).png",
    features: ["Thermostatic Control", "3 Outlets", "Safety Lock", "Vernet Cartridge", "10+1 Years Warranty"]
  },
  {
    slug: "lever-diverter-three-outlet",
    title: "Lever Diverter (Three Outlet)",
    group: "diverters",
    description: "Classic Lever Diverter with Three Outlets, solid brass body, and smooth operational action.",

    image: "/diverters/Lever Diverter Three Outlet (1).png",
    features: ["Lever Handle", "3 Outlets", "Vernet Cartridge", "10+1 Years Warranty"]
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

    features: ["Thermostatic", "Click Controller", "11 Years Unmatched Assurance", "PVD Bonded"]
  },
  {
    slug: "lever-basin-mixer",
    title: "Lever Basin Mixer",
    group: "basin-mixers",
    description: "Classic single lever Basin Mixer machined from solid brass with ceramic disc cartridge.",

    features: ["Single Lever", "Smooth Operation", "11 Years Unmatched Assurance", "10Y Warranty"]
  },
  {
    slug: "table-mounted-basin-mixer",
    title: "Table Mounted Basin Mixer",
    group: "basin-mixers",
    description: "Tall Table Mounted Basin Mixer designed for vessel sinks and marble countertops.",

    features: ["Table Mounted", "Tall Profile", "11 Years Unmatched Assurance", "Solid Brass"]
  },
  {
    slug: "progressive-controller-waterfall-basin-mixer",
    title: "Progressive Controller Waterfall Basin Mixer",
    group: "basin-mixers",
    description: "Progressive Controller with wide Waterfall flow, combining modern minimalism with natural water motion.",

    features: ["Progressive Controller", "Waterfall Spout", "11 Years Unmatched Assurance", "PVD Finishes"]
  },
  {
    slug: "ceiling-mounted-basin-mixer",
    title: "Ceiling Mounted Basin Mixer",
    group: "basin-mixers",
    description: "Dramatic Ceiling Mounted Basin Mixer that drops water gracefully from above. A stunning architectural centerpiece.",

    features: ["Ceiling Mounted", "Statement Piece", "11 Years Unmatched Assurance"]
  },

    {
    slug: "premium-basin-mixer",
    title: "Premium Basin Mixer",
    group: "basin-mixers",
    description: "Premium basin mixers with exquisite finishes and contemporary designs.",
    bannerImage: "/premium basin mixer/brushed gold finish 19500.png",
    features: ["Premium Finishes", "11 Years Unmatched Assurance"]
  },
  // 6. SANITARYWARE
  
  {
    slug: "wall-hung-wc",
    title: "Wall Hung WC",
    group: "sanitaryware",
    description: "Rimless Wall Hung Water Closets with quiet flush engineering, ergonomic contours, and soft-close seats.",

    image: "/wallhungwc/25.jpg",
    features: [
      "Rimless Design – Eliminates hidden edges where dirt and deposits can accumulate, making the toilet easier to clean and maintain.",
      "Powerful Swirl Flush – Advanced swirling water flow helps provide effective bowl cleaning with every flush.",
      "Blind Installation – Hidden fixing points keep the exterior smooth and free from visible mounting holes.",
      "Slim UF Seat Cover – A sleek, durable seat design that complements the contemporary profile of the toilet and Comes With Soft Close Features",
      "Easy to Clean – The smooth exterior and floating design make cleaning around and underneath the WC effortless."
    ]
  },
  {
    slug: "ceramic-wash-basins",
    title: "Ceramic Wash Basins",
    group: "sanitaryware",
    description: "Timeless ceramic elegance with refined finishes for modern bathrooms.",
    image: "/images/PDF1_P24_IMG1.png",
    features: [
      "Smooth & Silky Finish – Provides an attractive, premium look and is easy to clean.",
      "Easy to Clean – Smooth surface allows quick and effortless cleaning.",
      "Elegant Design – Available in modern shapes and styles to complement different bathroom interiors.",
      "Low Maintenance – Requires minimal care and retains its appearance for a long time."
    ]
  },
  {
    slug: "glass-wash-basins",
    title: "Glass Wash Basins",
    group: "sanitaryware",
    description: "Contemporary glass designs that bring light, style, and sophistication.",
    features: [
      "Smooth & Silky Finish – Provides an attractive, premium look and is easy to clean.",
      "Easy to Clean – Smooth surface allows quick and effortless cleaning.",
      "Elegant Design – Available in modern shapes and styles to complement different bathroom interiors.",
      "Low Maintenance – Requires minimal care and retains its appearance for a long time."
    ]
  },
  {
    slug: "stainless-steel-wash-basins",
    title: "Stainless Steel Wash Basins",
    group: "sanitaryware",
    description: "Sleek stainless steel basins built for durability with a modern edge.",
    image: "/JOYWATER/JOYWATER (8).jpeg",
    features: [
      "Smooth & Silky Finish – Provides an attractive, premium look and is easy to clean.",
      "Easy to Clean – Smooth surface allows quick and effortless cleaning.",
      "Elegant Design – Available in modern shapes and styles to complement different bathroom interiors.",
      "Low Maintenance – Requires minimal care and retains its appearance for a long time."
    ]
  },
  {
    slug: "stone-basin",
    title: "Stone Basin",
    group: "sanitaryware",
    description: "Exclusive Stone Basin Collections crafted from natural marble, terrazzo, and luxury stone blocks.",
    image: "/images/PDF1_P76_IMG1.png",
    features: [
      "Smooth & Silky Finish - Provides an attractive, premium look and is easy to clean.",
      "Easy to Clean - Smooth surface allows quick and effortless cleaning."
    ]
  },
  {
    slug: "stone-pedestal",
    title: "Stone Pedestal",
    group: "sanitaryware",
    description: "Make a Statement with Standalone Design using our premium stone pedestal basins.",
    image: "/images/PDF1_P76_IMG1.png",
    features: [
      "Smooth & Silky Finish - Provides an attractive, premium look and is easy to clean.",
      "Easy to Clean - Smooth surface allows quick and effortless cleaning."
    ]
  },

  {
    slug: "free-standing-wash-basins",
    title: "Ceramic Pedestal",
    group: "sanitaryware",
    description: "Statement-making designs that elevate and define your bathroom space.",
    features: [
      "Smooth & Silky Finish – Provides an attractive, premium look and is easy to clean.",
      "Easy to Clean – Smooth surface allows quick and effortless cleaning.",
      "Elegant Design – Available in modern shapes and styles to complement different bathroom interiors.",
      "Low Maintenance – Requires minimal care and retains its appearance for a long time."
    ]
  },


  // 7. OTHERS / ACCESSORIES
  {
    slug: "abs-hook",
    title: "ABS Hook",
    group: "others-accessories",
    description: "Premium ABS hook accessories.",
    features: ["11 Years Unmatched Assurance"]
  },

    {
    slug: "button-spout",
    title: "Button Spout",
    group: "others-accessories",
    description: "Premium button spout accessories.",
    bannerImage: "/OTHERS/Bathroom Accessories & Fittings (9).png",
    features: ["11 Years Unmatched Assurance"]
  },
  {
    slug: "angle-valve",
    title: "Angle Valve",
    group: "others-accessories",
    description: "Premium angle valve accessories.",
    bannerImage: "/OTHERS/Bathroom Accessories & Fittings (13).png",
    features: ["11 Years Unmatched Assurance"]
  },
  {
    slug: "bib-cock",
    title: "Bib Cock",
    group: "others-accessories",
    description: "Premium bib cock accessories.",
    bannerImage: "/OTHERS/Bathroom Accessories & Fittings (5).png",
    features: ["11 Years Unmatched Assurance"]
  },
  {
    slug: "shower-arm",
    title: "Shower Arm",
    group: "others-accessories",
    description: "Premium shower arm accessories.",
    bannerImage: "/OTHERS/Bathroom Accessories & Fittings (25).png",
    features: ["11 Years Unmatched Assurance"]
  },
  {
    slug: "shower-holder",
    title: "Shower Holder",
    group: "others-accessories",
    description: "Premium shower holder accessories.",
    bannerImage: "/OTHERS/Bathroom Accessories & Fittings.png",
    features: ["11 Years Unmatched Assurance"]
  },
  {
    slug: "wall-outlet",
    title: "Wall Outlet",
    group: "others-accessories",
    description: "Premium wall outlet accessories.",
    bannerImage: "/OTHERS/Bathroom Accessories & Fittings (1).png",
    features: ["11 Years Unmatched Assurance"]
  },
  {
    slug: "pop-up-coupling",
    title: "Pop-up Coupling",
    group: "others-accessories",
    description: "Premium pop-up coupling accessories.",
    bannerImage: "/OTHERS/Bathroom Accessories & Fittings (36).png",
    features: ["11 Years Unmatched Assurance"]
  },
  {
    slug: "bottle-trap",
    title: "Bottle Trap",
    group: "others-accessories",
    description: "Premium bottle trap accessories.",
    bannerImage: "/OTHERS/Bathroom Accessories & Fittings (32).png",
    features: ["11 Years Unmatched Assurance"]
  },
  {
    slug: "shower-hose-tube",
    title: "Shower Hose Tube",
    group: "others-accessories",
    description: "Premium shower hose tube accessories.",
    bannerImage: "/OTHERS/Bathroom Accessories & Fittings (17).png",
    features: ["11 Years Unmatched Assurance"]
  },
  {
    slug: "health-faucet",
    title: "Health Faucet Full Set with Tube & Wall Hook",
    group: "others-accessories",
    description: "Premium health faucet full set.",
    bannerImage: "/OTHERS/Bathroom Accessories & Fittings (21).png",
    features: ["11 Years Unmatched Assurance"]
  },

    {
    slug: "shower-drainer",
    title: "Shower Drainer",
    group: "tile-insert-drainers",
    description: "Premium shower drainers.",
    bannerImage: "/tile drainers/Shower-Drainer-ss-matte-finish-11500-1.png",
    features: ["11 Years Unmatched Assurance"]
  },
  {
    slug: "tiles-drainers",
    title: "Tiles Drainers",
    group: "tile-insert-drainers",
    description: "Premium tiles drainers.",
    bannerImage: "/tile drainers/tile-drainer-ss-matte-finish-4250.png",
    features: ["11 Years Unmatched Assurance"]
  },
  {
    slug: "floor-drainer",
    title: "Floor Drainer",
    group: "tile-insert-drainers",
    description: "Premium floor drainers.",
    bannerImage: "/tile drainers/floor-drainer-ss-matte-finish-585.png",
    features: ["11 Years Unmatched Assurance"]
  },
  // 8. MIRRORS
  {
    slug: "led-mirrors",
    title: "LED Mirrors",
    group: "mirrors",
    description: "Frameless LED Vanity Mirrors featuring ambient halo illumination, adjustable color temperatures, and crystal-clear float glass.",
    bannerImage: "/HEROSECTIONIMAGES/LED Mirrors.jpg",
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
  originalPrice?: number;
  maxPrice?: number;
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
  basePrice: number | number[],
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
      price: Array.isArray(basePrice) ? basePrice[idx % basePrice.length] : basePrice,
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
    price: 4150,
    code: "JW-10038",
    image: "/Body Showers/Body Jets (2 Function) (1).png",
  },
  {
    id: "body-jets-2-function-2",
    slug: "body-jets-2-function-2",
    name: "Body Jet (2 Function - Rain & Mist) - Brushed Gold",
    category: "body-jets-2-function",
    finish: "Brushed Gold",
    price: 6950,
    code: "JW-10039",
    image: "/Body Showers/Body Jets (2 Function) (2).png",
  },
  {
    id: "body-jets-2-function-3",
    slug: "body-jets-2-function-3",
    name: "Body Jet (2 Function - Rain & Mist) - Graphite Grey",
    category: "body-jets-2-function",
    finish: "Graphite Grey",
    price: 6950,
    code: "JW-10041",
    image: "/Body Showers/Body Jets (2 Function) (3).png",
  },
  {
    id: "body-jets-2-function-4",
    slug: "body-jets-2-function-4",
    name: "Body Jet (2 Function - Rain & Mist) - Glossy Rose Gold",
    category: "body-jets-2-function",
    finish: "Rose Gold",
    price: 6950,
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
    finish: "Graphite Grey",
    price: 19500,
    code: "JW-10103",
    image: "/basinmixer/Ceiling Mounted Basin Mixer (1).png",
  },
  {
    id: "ceiling-mounted-basin-mixer-2",
    slug: "ceiling-mounted-basin-mixer-2",
    name: "Table Mounted Basin Mixer (Medium) - Brushed Graphite Grey",
    category: "ceiling-mounted-basin-mixer",
    finish: "Graphite Grey",
    price: 14750,
    code: "JW-10104",
    image: "/basinmixer/Ceiling Mounted Basin Mixer (2).png",
  },
  {
    id: "ceiling-mounted-basin-mixer-3",
    slug: "ceiling-mounted-basin-mixer-3",
    name: "Ceiling Mounted Basin Mixer (Long) - Brushed Gold",
    category: "ceiling-mounted-basin-mixer",
    finish: "Gold",
    price: 22500,
    code: "JW-10099",
    image: "/basinmixer/Ceiling Mounted Basin Mixer (4).png",
  },
  {
    id: "ceiling-mounted-basin-mixer-4",
    slug: "ceiling-mounted-basin-mixer-4",
    name: "Table Mounted Basin Mixer (Medium) - Brushed Gold",
    category: "ceiling-mounted-basin-mixer",
    finish: "Gold",
    price: 14750,
    code: "JW-10100",
    image: "/basinmixer/Ceiling Mounted Basin Mixer (5).png",
  },
  {
    id: "ceiling-mounted-basin-mixer-5",
    slug: "ceiling-mounted-basin-mixer-5",
    name: "Ceiling Mounted Basin Mixer (Long) - Brushed Rose Gold",
    category: "ceiling-mounted-basin-mixer",
    finish: "Rose Gold",
    price: 22500,
    code: "JW-10101",
    image: "/basinmixer/Ceiling Mounted Basin Mixer (6).png",
  },
  {
    id: "ceiling-mounted-basin-mixer-6",
    slug: "ceiling-mounted-basin-mixer-6",
    name: "Table Mounted Basin Mixer (Medium) - Brushed Rose Gold",
    category: "ceiling-mounted-basin-mixer",
    finish: "Rose Gold",
    price: 14750,
    code: "JW-10102",
    image: "/basinmixer/Ceiling Mounted Basin Mixer (7).png",
  },
  {
    id: "ceiling-mounted-basin-mixer-7",
    slug: "ceiling-mounted-basin-mixer-7",
    name: "Ceiling Mounted Basin Mixer (Long) - Brushed Chrome",
    category: "ceiling-mounted-basin-mixer",
    finish: "Chrome",
    price: 18400,
    code: "JW-10097",
    image: "/basinmixer/Ceiling Mounted Basin Mixer (8).png",
  },
  {
    id: "ceiling-mounted-basin-mixer-8",
    slug: "ceiling-mounted-basin-mixer-8",
    name: "Table Mounted Basin Mixer (Medium) - Brushed Chrome",
    category: "ceiling-mounted-basin-mixer",
    finish: "Chrome",
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
    [32500, 39000, 39000, 39000],
    [
      "/showers/2 Function Shower (1).png",
      "/showers/2 Function Shower (2).png",
      "/showers/2 Function Shower (3).png",
      "/showers/2 Function Shower (4).png",
    ],
    ["Chrome", "Brushed Gold", "Graphite Grey", "Rose Gold"]
  ),
    ...createCategoryProducts(
    "multifunctional-ceiling-shower-3-function",
    "3 Function Ceiling Shower",
    "JW-100",
    [63000, 75000, 75000, 75000],
    [
      "/showers/3 Function Shower (1).png",
      "/showers/3 Function Shower (2).png",
      "/showers/3 Function Shower (3).png",
      "/showers/3 Function Shower (4).png",
    ],
    ["Chrome", "Brushed Gold", "Graphite Grey", "Rose Gold"]
  ),
  ...createCategoryProducts(
    "3-function-shower-rain-mist-2-waterfall-led",
    "3 Function Shower (LED)",
    "JW-100",
    [98000, 98000, 98000],
    [
      "/showers/3 functionshower rain four mistspray&dualwaterfall (1).png",
      "/showers/3 functionshower rain four mistspray&dualwaterfall (2).png",
      "/showers/3 functionshower rain four mistspray&dualwaterfall (3).png",
    ],
    ["Graphite Grey", "Rose Gold", "Brushed Gold"]
  ),
  ...createCategoryProducts(
    "3-function-shower-rain-mist-large-single-waterfall",
    "3 Function Shower (Rain, Mist & Large Waterfall)",
    "JW-100",
    [59500, 59500, 59500, 46500],
    [
      "/showers/3 Function Shower (Large Waterfall) (1).png",
      "/showers/3 Function Shower (Large Waterfall) (2).png",
      "/showers/3 Function Shower (Large Waterfall) (3).png",
      "/showers/3 Function Shower (Large Waterfall) (4).png",
    ],
    ["Graphite Grey", "Brushed Gold", "Rose Gold", "Chrome"]
  ),
  ...createCategoryProducts(
    "2-function-shower-rain-large-single-waterfall",
    "2 Function Shower (Rain & Large Waterfall)",
    "JW-100",
    [49500, 36000],
    [
      "/showers/2 Function Shower (Large Waterfall).png",
      "/showers/2 Function Shower (Large Waterfall) (2).png",
    ],
    ["Rose Gold", "Chrome"]
  ),
    ...createCategoryProducts(
    "4-function-shower-chromotherapy",
    "4 Function Shower Rain, 6 Mist, 2 Waterfall and Water Column",
    "JW-100",
    [125000, 125000, 125000, 95000],
    [
      "/showers/4 Function Shower (1).png",
      "/showers/4 Function Shower (2).png",
      "/showers/4 Function Shower (3).png",
      "/showers/4 Function Shower (4).png",
    ],
    ["Graphite Grey", "Brushed Gold", "Rose Gold", "Chrome"]
  ),
  ...createCategoryProducts(
    "4-functional-shower-rain-4-mist-4side-flap-rain-water-column",
    "4 functional shower rain +  4 mist  +4side flap rain + water column",
    "JW-100",
    [160000, 160000, 160000],
    [
      "/showers/Multifunctional Showers (1).png",
      "/showers/Multifunctional Showers (2).png",
      "/showers/Multifunctional Showers (3).png",
    ],
    ["Graphite Grey", "Rose Gold", "Brushed Gold"]
  ),
  ...createCategoryProducts(
    "2-function-shower-soft-rain-waterfall",
    "2 function shower soft rain +waterfall",
    "JW-100",
    [54000, 54000, 54000],
    [
      "/showers/Multifunctional Showers (4).png",
      "/showers/Multifunctional Showers (5).png",
      "/showers/Multifunctional Showers (6).png",
    ],
    ["Chrome", "Rose Gold", "Brushed Gold"]
  ),
  ...createCategoryProducts(
    "single-function-shower-rain",
    "Single Function Rain Shower",
    "JW-100",
    [13500, 13500, 13500, 8500],
    [
      "/showers/Single Function Shower (1).png",
      "/showers/Single Function Shower (2).png",
      "/showers/Single Function Shower (3).png",
      "/showers/Single Function Shower (4).png",
    ],
    ["Brushed Gold", "Graphite Grey", "Rose Gold", "Chrome"]
  ),
  ...createCategoryProducts(
    "waterfall-showers",
    "Waterfall Shower System",
    "JW-100",
    [24500, 24500, 24500, 19500],
    [
      "/showers/Waterfall Showers (1).png",
      "/showers/Waterfall Showers (2).png",
      "/showers/Waterfall Showers (3).png",
      "/showers/Waterfall Showers (4).png",
    ],
    ["Brushed Gold", "Graphite Grey", "Rose Gold", "Chrome"]
  ),
  ...createCategoryProducts(
    "2-function-wall-mounted-shower-arm",
    "2 Function Wall Mounted Shower with Arm",
    "JW-100",
    [9500, 6300, 9500],
    [
      "/showers/2 Function Wall Mounted Shower with Shower Arm (1).png",
      "/showers/2 Function Wall Mounted Shower with Shower Arm (2).png",
      "/showers/2 Function Wall Mounted Shower with Shower Arm (3).png",
    ],
    ["Brushed Gold", "Graphite Grey", "Removed"]
  ),
    ...createCategoryProducts(
    "4-function-hand-shower",
    "4 function hand shower",
    "JW-100",
    [3550, 3550, 3550, 2950, 3550],
    [
      "/showers/Multifunctional Wall Mounted Shower (2 Function) (4).png",
      "/showers/Multifunctional Wall Mounted Shower (2 Function) (5).png",
      "/showers/Multifunctional Wall Mounted Shower (2 Function) (6).png",
      "/showers/Multifunctional Wall Mounted Shower (2 Function) (7).png",
      "/showers/Multifunctional Wall Mounted Shower (2 Function) (8).png",
    ],
    [
      "Brushed Gold",
      "Chrome",
      "Brushed Gold",
      "Chrome",
      "Chrome",
    ]
  ),
  ...createCategoryProducts(
    "2-function-shower-rain-mist-hexagon",
    "2 function shower rain mist hexagon",
    "JW-100",
    [45000, 45000, 45000],
    [
      "/shower category/2 function shower rain mist 4  in hexagon shape  gold  45000.png",
      "/shower category/2 function shower rain mist 4  in hexagon shape  graphite grey 45000.png",
      "/shower category/2 function shower rain mist 4  in hexagon shape  rosegold  45000.png",
    ],
    ["Brushed Gold", "Graphite Grey", "Rose Gold"]
  ),
  ...createCategoryProducts(
    "single-function-shower-rain-ceiling-mounted",
    "single function shower rain celing mounted shower",
    "JW-100",
    [48000, 13500],
    [
      "/shower category/single function shower rain celing mounted shower with installation kit 48000.png",
      "/shower category/single function shower round 13500.jpg",
    ],
    ["Chrome", "Chrome"]
  ),
  ...createCategoryProducts(
    "overhead-abs-shower",
    "overhead abs shower",
    "JW-100",
    [ 6300, 6300, 6300 ],
    [
      "/shower category/overhead abs shower rain 9500 chrome.png",
      "/shower category/overhead abs shower rain 9500 graphite grey.png",
      "/shower category/overhead abs shower rain gold 9500.png",
    ],
    ["Chrome", "Graphite Grey", "Brushed Gold"]
  ),
  ...createCategoryProducts(
    "hand-shower",
    "hand shower",
    "JW-100",
    [2250, 3250, 3250, 3250],
    [
      "/shower category/hand shower chrome 2250 (2).png",
      "/shower category/hand shower graphite grey   3250  (3).png",
      "/shower category/hand shower rose gold  3250  (1).png",
      "/shower category/hand shower rose gold  3250  (4).png",
    ],
    ["Chrome", "Graphite Grey", "Rose Gold", "Rose Gold"]
  ),
  ...createCategoryProducts(
    "shower-set-with-hot-cold-controller",
    "shower set with hot & cold controller",
    "JW-100",
    [42000, 42000],
    [
      "/shower category/shower set with hot & cold controller with  shower rail & hand shower  black finish  42000 (1).jpg",
      "/shower category/shower set with hot & cold controller with  shower rail & hand shower chrome   42000 (2).jpg",
    ],
    ["Graphite Grey", "Chrome"]
  ),
  ...createCategoryProducts(
    "joy-spot-wall-mounted-shower",
    "joy spot wall mounted shower",
    "JW-100",
    [16500, 16500, 16500],
    [
      "/showers/Multifunctional Wall Mounted Shower (2 Function) (1).png",
      "/showers/Multifunctional Wall Mounted Shower (2 Function) (2).png",
      "/showers/Multifunctional Wall Mounted Shower (2 Function) (3).png",
    ],
    [
      "Graphite Grey",
      "Removed",
      "Removed",
    ]
  ),

  // Multi-Functional Body Showers
  ...bodyJetsProducts,
  ...createCategoryProducts(
    "one-line-series",
    "One Line Series Body Shower",
    "JW-100",
    [8500, 8500, 8500, 5500],
    [
      "/Body Showers/One Line Series (1).png",
      "/Body Showers/One Line Series (2).png",
      "/Body Showers/One Line Series (3).png",
      "/Body Showers/One Line Series (4).png",
    ],
    ["Brushed Gold", "Graphite Grey", "Rose Gold", "Chrome"]
  ),
  ...createCategoryProducts(
    "eminence-series",
    "Eminence Series Body Shower",
    "JW-100",
    [12200, 14750, 14750, 14750],
    [
      "/Body Showers/Eminence Series (1).png",
      "/Body Showers/Eminence Series (2).png",
      "/Body Showers/Eminence Series (3).png",
      "/Body Showers/Eminence Series (4).png",
    ],
    ["Chrome", "Brushed Gold", "Graphite Grey", "Rose Gold"]
  ),

  // Diverters
  
  
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
{
    slug: "4-function-diverter",
    title: "4 Function Joy Water Diverter",
    group: "diverters",
    description: "4 Function Joy Water Diverter.",
    features: ["4 Functions", "Vernet Cartridge", "11 Years Unmatched Assurance"]
  },
...createCategoryProducts(
    "5-function-diverter",
    "5 Function Diverter",
    "JW-100",
    [108000, 126000, 126000, 126000],
    [
      "/diverters/5 Function Diverter (1).png",
      "/diverters/5 Function Diverter (2).png",
      "/diverters/5 Function Diverter (3).png",
      "/diverters/5 Function Diverter (4).png",
    ],
    ["Chrome", "Gold", "Graphite Grey", "Rose Gold"]
  ),
  ...createCategoryProducts(
    "6-function-diverter",
    "6 Function Diverter",
    "JW-100",
    [138000, 138000, 138000, 112000, 92000, 92000, 92000, 79000],
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
      "Gold",
      "Graphite Grey",
      "Rose Gold",
      "Chrome",
      "Gold",
      "Graphite Grey",
      "Rose Gold",
      "Chrome",
    ]
  ),
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
  ...createCategoryProducts(
    "lever-diverter-three-outlet",
    "Lever Diverter (Three Outlet)",
    "JW-100",
    [27000, 27000, 27000, 23000],
    [
      "/diverters/Lever Diverter Three Outlet (1).png",
      "/diverters/Lever Diverter Three Outlet (2).png",
      "/diverters/Lever Diverter Three Outlet (3).png",
      "/diverters/Lever Diverter Three Outlet (4).png",
    ],
    ["Gold", "Graphite Grey", "Rose Gold", "Chrome"]
  ),



  // Basin Mixers
  ...createCategoryProducts(
    "round-controller-basin-mixer",
    "Round Controller Basin Mixer",
    "JW-100",
    [20500, 20500, 20500],
    [
      "/basinmixer/Round Controller Basin Mixer (1).png",
      "/basinmixer/Round Controller Basin Mixer (2).png",
      "/basinmixer/Round Controller Basin Mixer (3).png",
    ],
    ["Gold", "Graphite Grey", "Rose Gold"]
  ),
  ...createCategoryProducts(
    "thermostatic-click-controller-basin-mixer",
    "Thermostatic Click Controller Basin Mixer",
    "JW-100",
    [36500, 36500, 36500],
    [
      "/basinmixer/Thermostatic Click Controller Basin Mixer (1).png",
      "/basinmixer/Thermostatic Click Controller Basin Mixer (2).png",
      "/basinmixer/Thermostatic Click Controller Basin Mixer (3).png",
    ],
    ["Rose Gold", "Gold", "Graphite Grey"]
  ),
  ...createCategoryProducts(
    "lever-basin-mixer",
    "Lever Basin Mixer",
    "JW-100",
    [19500, 23500, 23500, 23500],
    [
      "/basinmixer/Lever Basin Mixer (1).png",
      "/basinmixer/Lever Basin Mixer (2).png",
      "/basinmixer/Lever Basin Mixer (3).png",
      "/basinmixer/Lever Basin Mixer (4).png",
    ],
    ["Chrome", "Gold", "Graphite Grey", "Rose Gold"]
  ),
  ...createCategoryProducts(
    "table-mounted-basin-mixer",
    "Table Mounted Basin Mixer",
    "JW-100",
    [23500, 23500, 23500, 21500],
    [
      "/basinmixer/Table Mounted Basin Mixer (1).png",
      "/basinmixer/Table Mounted Basin Mixer (2).png",
      "/basinmixer/Table Mounted Basin Mixer (3).png",
      "/basinmixer/Table Mounted Basin Mixer (4).png",
    ],
    ["Gold", "Graphite Grey", "Rose Gold", "Chrome"]
  ),
  ...createCategoryProducts(
    "progressive-controller-waterfall-basin-mixer",
    "Progressive Controller Waterfall Basin Mixer",
    "JW-100",
    [27500, 22500, 27500, 27500],
    [
      "/basinmixer/Progressive Controller Waterfall Basin Mixer.png",
      "/basinmixer/Progressive Controller Waterfall Basin Mixer (1).png",
      "/basinmixer/Progressive Controller Waterfall Basin Mixer (2).png",
      "/basinmixer/Progressive Controller Waterfall Basin Mixer (3).png",
    ],
    ["Gold", "Chrome", "Graphite Grey", "Rose Gold"]
  ),
  ...ceilingMountedMixerProducts,

    {
    id: "multifunctional-wall-mounted-1",
    slug: "multifunctional-wall-mounted-1",
    name: "shower rain+mist 2 function wall mounted shower with shower arm",
    category: "multifunctional-wall-mounted",
    finish: "Chrome",
    price: 23500,
    code: "JW-10042",
    image: "/shower category/multifunctional-wall-mounted-1.jpg",
  },
  {
    id: "multifunctional-wall-mounted-2",
    slug: "multifunctional-wall-mounted-2",
    name: "shower waterfall + rain 2 function wall mounted shower with shower arm",
    category: "multifunctional-wall-mounted",
    finish: "Chrome",
    price: 23500,
    code: "JW-10043",
    image: "/shower category/multifunctional-wall-mounted-2.jpg",
  },
    {
    id: "premium-basin-mixer-1",
    slug: "premium-basin-mixer-1",
    name: "Premium Basin Mixer",
    category: "premium-basin-mixer",
    finish: "Brushed Gold",
    price: 19500,
    code: "JW-20001",
    image: "/premium basin mixer/brushed gold finish 19500.png",
  },
  {
    id: "premium-basin-mixer-2",
    slug: "premium-basin-mixer-2",
    name: "Premium Basin Mixer",
    category: "premium-basin-mixer",
    finish: "Chrome",
    price: 14500,
    code: "JW-20002",
    image: "/premium basin mixer/chrome finish 14500.png",
  },
  {
    id: "premium-basin-mixer-3",
    slug: "premium-basin-mixer-3",
    name: "Premium Basin Mixer",
    category: "premium-basin-mixer",
    finish: "Graphite Grey",
    price: 19500,
    code: "JW-20003",
    image: "/premium basin mixer/graphite grey finish 19500.png",
  },
  {
    id: "premium-basin-mixer-4",
    slug: "premium-basin-mixer-4",
    name: "Premium Basin Mixer",
    category: "premium-basin-mixer",
    finish: "Rose Gold",
    price: 19500,
    code: "JW-20004",
    image: "/premium basin mixer/rose gold finish 19500.png",
  },
  {
    id: "premium-basin-mixer-5",
    slug: "premium-basin-mixer-5",
    name: "Spout basin mixer with lever controlled",
    category: "premium-basin-mixer",
    finish: "Chrome",
    price: 16000,
    code: "JW-20005",
    image: "/premium basin mixer/spout basin mixer with lever controled 16000.png",
  },
  {
    id: "premium-basin-mixer-6",
    slug: "premium-basin-mixer-6",
    name: "Table body floor mounted basin mixer",
    category: "premium-basin-mixer",
    finish: "Chrome",
    price: 22500,
    code: "JW-20006",
    image: "/premium basin mixer/table body  floor mounted basin mixer 22500.png",
  },
  {
    id: "premium-basin-mixer-7",
    slug: "premium-basin-mixer-7",
    name: "Tall body floor mounted basin mixer",
    category: "premium-basin-mixer",
    finish: "Chrome",
    price: 20500,
    code: "JW-20007",
    image: "/premium basin mixer/tall body floor mounted basin mixer 20500.png",
  },
  // Sanitaryware
  ...sanitarywareProducts,

  // Others / Accessories
    ...createCategoryProducts("abs-hook", "ABS Hook", "JW-100", [1750, 1750, 990, 1750], [
      "/abs hook/abs hook (1) gold 1750.png",
      "/abs hook/abs hook (2) graphite grey 1750.png",
      "/abs hook/abs hook (3) chrome 990.png",
      "/abs hook/abs hook (4) rose gold 1750.png"
    ], ["Gold", "Graphite Grey", "Chrome", "Rose Gold"]),

    ...createCategoryProducts("button-spout", "Button Spout", "JW-100", [7500, 7500, 7500, 4500], [
    "/OTHERS/Bathroom Accessories & Fittings (9).png",
    "/OTHERS/Bathroom Accessories & Fittings (10).png",
    "/OTHERS/Bathroom Accessories & Fittings (11).png",
    "/OTHERS/Bathroom Accessories & Fittings (12).png",
  ], ["Brushed Gold", "Graphite Grey", "Brushed Rose Gold", "Chrome"]),
  ...createCategoryProducts("angle-valve", "Angle Valve", "JW-100", [1800, 1800, 1800, 650], [
    "/OTHERS/Bathroom Accessories & Fittings (13).png",
    "/OTHERS/Bathroom Accessories & Fittings (14).png",
    "/OTHERS/Bathroom Accessories & Fittings (15).png",
    "/OTHERS/Bathroom Accessories & Fittings (16).png",
  ], ["Brushed Gold", "Graphite Grey", "Brushed Rose Gold", "Chrome"]),
  ...createCategoryProducts("bib-cock", "Bib Cock", "JW-100", [7200, 7200, 7200, 6500], [
    "/OTHERS/Bathroom Accessories & Fittings (5).png",
    "/OTHERS/Bathroom Accessories & Fittings (6).png",
    "/OTHERS/Bathroom Accessories & Fittings (7).png",
    "/OTHERS/Bathroom Accessories & Fittings (8).png",
  ], ["Brushed Gold", "Graphite Grey", "Brushed Rose Gold", "Chrome"]),
  ...createCategoryProducts("shower-arm", "Shower Arm", "JW-100", [4850, 4850, 4850, 2700], [
    "/OTHERS/Bathroom Accessories & Fittings (25).png",
    "/OTHERS/Bathroom Accessories & Fittings (26).png",
    "/OTHERS/Bathroom Accessories & Fittings (27).png",
    "/OTHERS/Bathroom Accessories & Fittings (28).png",
  ], ["Brushed Gold", "Graphite Grey", "Brushed Rose Gold", "Chrome"]),
  ...createCategoryProducts("shower-holder", "Shower Holder", "JW-100", [645, 645, 645, 350], [
    "/OTHERS/Bathroom Accessories & Fittings.png",
    "/OTHERS/Bathroom Accessories & Fittings (29).png",
    "/OTHERS/Bathroom Accessories & Fittings (30).png",
    "/OTHERS/Bathroom Accessories & Fittings (31).png",
  ], ["Brushed Gold", "Graphite Grey", "Brushed Rose Gold", "Chrome"]),
  ...createCategoryProducts("wall-outlet", "Wall Outlet", "JW-100", [3500, 3500, 3500, 2250], [
    "/OTHERS/Bathroom Accessories & Fittings (1).png",
    "/OTHERS/Bathroom Accessories & Fittings (2).png",
    "/OTHERS/Bathroom Accessories & Fittings (3).png",
    "/OTHERS/Bathroom Accessories & Fittings (4).png",
  ], ["Brushed Gold", "Graphite Grey", "Brushed Rose Gold", "Chrome"]),
  ...createCategoryProducts("pop-up-coupling", "Pop-up Coupling", "JW-100", [2950, 2950, 2950, 1350], [
    "/OTHERS/Bathroom Accessories & Fittings (36).png",
    "/OTHERS/Bathroom Accessories & Fittings (37).png",
    "/OTHERS/Bathroom Accessories & Fittings (38).png",
    "/OTHERS/Bathroom Accessories & Fittings (39).png",
  ], ["Brushed Gold", "Graphite Grey", "Brushed Rose Gold", "Chrome"]),
  ...createCategoryProducts("bottle-trap", "Bottle Trap", "JW-100", [5700, 5700, 5700, 1450], [
    "/OTHERS/Bathroom Accessories & Fittings (32).png",
    "/OTHERS/Bathroom Accessories & Fittings (33).png",
    "/OTHERS/Bathroom Accessories & Fittings (34).png",
    "/OTHERS/Bathroom Accessories & Fittings (35).png",
  ], ["Brushed Gold", "Graphite Grey", "Brushed Rose Gold", "Chrome"]),
  ...createCategoryProducts("shower-hose-tube", "Shower Hose Tube", "JW-100", [1650, 1650, 1650, 750], [
    "/OTHERS/Bathroom Accessories & Fittings (17).png",
    "/OTHERS/Bathroom Accessories & Fittings (18).png",
    "/OTHERS/Bathroom Accessories & Fittings (19).png",
    "/OTHERS/Bathroom Accessories & Fittings (20).png",
  ], ["Brushed Gold", "Graphite Grey", "Brushed Rose Gold", "Chrome"]),
  ...createCategoryProducts("health-faucet", "Health Faucet Full Set", "JW-100", [3950, 3950, 3950, 2850], [
    "/OTHERS/Bathroom Accessories & Fittings (21).png",
    "/OTHERS/Bathroom Accessories & Fittings (22).png",
    "/OTHERS/Bathroom Accessories & Fittings (23).png",
    "/OTHERS/Bathroom Accessories & Fittings (24).png",
  ], ["Brushed Gold", "Graphite Grey", "Brushed Rose Gold", "Chrome"]),

  
  // Shower Drainer
  { id: "shower-drainer-1", slug: "shower-drainer-1", name: "Shower Drainer", category: "shower-drainer", finish: "SS Matte", price: 11500, code: "JW-SD-01", image: "/tile drainers/Shower-Drainer-ss-matte-finish-11500-1.png" },
  { id: "shower-drainer-2", slug: "shower-drainer-2", name: "Shower Drainer", category: "shower-drainer", finish: "Brushed Gold", price: 13500, code: "JW-SD-02", image: "/tile drainers/Shower-Drainer-brushed-gold-finish-13500-2.png" },
  { id: "shower-drainer-3", slug: "shower-drainer-3", name: "Shower Drainer", category: "shower-drainer", finish: "Graphite Grey", price: 13500, code: "JW-SD-03", image: "/tile drainers/Shower-Drainer-graphite-grey-finish-13500-3.png" },
  { id: "shower-drainer-4", slug: "shower-drainer-4", name: "Shower Drainer", category: "shower-drainer", finish: "Rose Gold", price: 13500, code: "JW-SD-04", image: "/tile drainers/Shower-Drainer-rose-gold-finish-13500-4.png" },
  { id: "shower-drainer-5", slug: "shower-drainer-5", name: "Shower Drainer", category: "shower-drainer", finish: "SS Matte", price: 4750, code: "JW-SD-05", image: "/tile drainers/shower-drainer-ss-matte-finish-4750.png" },
  { id: "shower-drainer-6", slug: "shower-drainer-6", name: "Shower Drainer", category: "shower-drainer", finish: "Black", price: 7200, code: "JW-SD-06", image: "/tile drainers/shower-drainer-black-finish-7200.png" },
  { id: "shower-drainer-7", slug: "shower-drainer-7", name: "Shower Drainer", category: "shower-drainer", finish: "Brushed Gold", price: 7200, code: "JW-SD-07", image: "/tile drainers/shower-drainer-brushed-gold-finish-7200.png" },
  { id: "shower-drainer-8", slug: "shower-drainer-8", name: "Shower Drainer", category: "shower-drainer", finish: "Rose Gold", price: 7200, code: "JW-SD-08", image: "/tile drainers/shower-drainer-rose-gold-finish-7200.png" },
  { id: "shower-drainer-9", slug: "shower-drainer-9", name: "SS 340 Shower Channel Wave Drainer", category: "shower-drainer", finish: "SS Matte", price: 3510, code: "JW-SD-09", image: "/tile drainers/ss-340-shower-channel-wave-shower-drainer-3510.png" },

  // Tiles Drainers
  { id: "tiles-drainer-1", slug: "tiles-drainer-1", name: "Tile Drainer", category: "tiles-drainers", finish: "SS Matte", price: 4250, code: "JW-TD-01", image: "/tile drainers/tile-drainer-ss-matte-finish-4250.png" },
  { id: "tiles-drainer-2", slug: "tiles-drainer-2", name: "Tile Drainer", category: "tiles-drainers", finish: "Brushed Gold", price: 5750, code: "JW-TD-02", image: "/tile drainers/tile-drainer-brushed-gold-finish-5750.png" },
  { id: "tiles-drainer-3", slug: "tiles-drainer-3", name: "Tile Drainer", category: "tiles-drainers", finish: "Graphite Grey", price: 5750, code: "JW-TD-03", image: "/tile drainers/tile-drainer-graphite-grey-finish-5750.png" },
  { id: "tiles-drainer-4", slug: "tiles-drainer-4", name: "Tile Drainer", category: "tiles-drainers", finish: "Rose Gold", price: 5750, code: "JW-TD-04", image: "/tile drainers/tile-drainer-rose-gold-finish-5750.png" },
  { id: "tiles-drainer-5", slug: "tiles-drainer-5", name: "Tile Drainers Marbles Side Hole", category: "tiles-drainers", finish: "SS Matte", price: 14500, code: "JW-TD-05", image: "/tile drainers/tile-drainers-marbles-side-hole-graphite-ss-matte-finish-14500.png" },
  { id: "tiles-drainer-6", slug: "tiles-drainer-6", name: "Tile Drainers Marbles Side Hole", category: "tiles-drainers", finish: "Brushed Gold", price:  15500, code: "JW-TD-06", image: "/tile drainers/tile-drainers-marbles-side-hole-brushed-gold-finished-13500.png" },
  { id: "tiles-drainer-7", slug: "tiles-drainer-7", name: "Tile Drainers Marbles Side Hole", category: "tiles-drainers", finish: "Graphite Grey", price: 15500, code: "JW-TD-07", image: "/tile drainers/tile-drainers-marbles-side-hole-graphite-grey-finish-15500-1.png" },
  { id: "tiles-drainer-8", slug: "tiles-drainer-8", name: "Tile Drainers Marbles Side Hole", category: "tiles-drainers", finish: "Rose Gold", price: 15500, code: "JW-TD-08", image: "/tile drainers/tile-drainers-marbles-side-hole-rose-gold-finish-15500-2.png" },
  { id: "tiles-drainer-9", slug: "tiles-drainer-9", name: "Tiles Drainers", category: "tiles-drainers", finish: "Gold", price: 2520, code: "JW-TD-09", image: "/tile drainers/tiles-drainers-gold-finish-2520.png" },
  { id: "tiles-drainer-10", slug: "tiles-drainer-10", name: "Tiles Drainers", category: "tiles-drainers", finish: "Rose Gold", price: 2520, code: "JW-TD-10", image: "/tile drainers/tiles-drainers-rose-gold-finish-2520.jpg" },
  { id: "tiles-drainer-11", slug: "tiles-drainer-11", name: "Tile Drainer JTD-506", category: "tiles-drainers", finish: "Chrome", price: 1630, code: "JW-TD-506", image: "/tile drainers/Code-JTD-506-1630.png" },

  // Floor Drainer
  { id: "floor-drainer-1", slug: "floor-drainer-1", name: "Floor Drainer", category: "floor-drainer", finish: "SS Matte", price: 585, code: "JW-FD-01", image: "/tile drainers/floor-drainer-ss-matte-finish-585.png" },
  { id: "floor-drainer-2", slug: "floor-drainer-2", name: "Floor Drainer", category: "floor-drainer", finish: "Black", price: 1650, code: "JW-FD-02", image: "/tile drainers/floor-drainer-black-finish-1650.png" },
  { id: "floor-drainer-3", slug: "floor-drainer-3", name: "Floor Drainer", category: "floor-drainer", finish: "Brushed Gold", price: 1650, code: "JW-FD-03", image: "/tile drainers/floor-drainer-brushed-gold-finish-1650.png" },
  { id: "floor-drainer-4", slug: "floor-drainer-4", name: "Floor Drainer", category: "floor-drainer", finish: "Rose Gold", price: 1650, code: "JW-FD-04", image: "/tile drainers/floor-drainer-rose-gold-finish-1650.png" },
  { id: "floor-drainer-5", slug: "floor-drainer-5", name: "Floor Drainer JGR-003", category: "floor-drainer", finish: "SS Matte", price: 585, code: "JW-FD-05", image: "/tile drainers/CODE-JGR--003-585.png" },

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
      "ceramic-wash-basins",
      "glass-wash-basins",
      "stainless-steel-wash-basins",
      "free-standing-wash-basins",
      "stone-basin",
      "stone-pedestal",
      "wall-hung-wc"
    ]
  },
  "Showering": {
    "Showers": [
      "2-function-shower-rain-mist",
      "2-function-shower-rain-large-single-waterfall",
      "2-function-shower-soft-rain-waterfall",
      "2-function-wall-mounted-shower-arm",
      "2-function-shower-rain-mist-hexagon",
      "multifunctional-ceiling-shower-3-function",
      "3-function-shower-rain-mist-2-waterfall-led",
      "3-function-shower-rain-mist-large-single-waterfall",
      "4-function-shower-chromotherapy",
      "4-functional-shower-rain-4-mist-4side-flap-rain-water-column",
      "4-function-hand-shower",
      "single-function-shower-rain",
      "single-function-shower-rain-ceiling-mounted",
      "waterfall-showers",
      "overhead-abs-shower",
      "shower-set-with-hot-cold-controller",
      "joy-spot-wall-mounted-shower",
      "multifunctional-wall-mounted"
    ],
    "Body Showers": [
      "hand-shower",
      "body-jets-2-function",
      "one-line-series",
      "eminence-series"
    ],
    "Showers In PVD Finishes": [
      "graphite-grey",
      "rose-gold",
      "chrome",
      "brushed-gold-shower"
    ]
  },
  "Diverters & Mixers": {
    "Diverters": [
      "4-function-diverter",
      "5-function-diverter",
      "6-function-diverter",
      "thermostatic-diverter-three-outlet",
      "lever-diverter-three-outlet"
    ],
    "Tile Drainers": [
        "shower-drainer",
        "tiles-drainers",
        "floor-drainer"
      ],
    "Basin Mixers": [
      "round-controller-basin-mixer",
      "thermostatic-click-controller-basin-mixer",
      "lever-basin-mixer",
      "table-mounted-basin-mixer",
      "progressive-controller-waterfall-basin-mixer",
      "ceiling-mounted-basin-mixer",
      "premium-basin-mixer"
    ],
    "Mixers In PVD Finishes": [
      "graphite-grey",
      "rose-gold",
      "gold",
      "chrome"
    ]
  },
  "Bath Accessories": {
    "Accessories": [
        "abs-hook",
        "button-spout",
      "angle-valve",
      "bib-cock",
      "shower-arm",
      "shower-holder",
      "wall-outlet",
      "pop-up-coupling",
      "bottle-trap",
      "shower-hose-tube",
      "health-faucet"
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
