import { bathroomAccessoriesProducts } from "./bathroomAccessoriesProducts.ts";
import { swatchSeriesProducts } from "./swatchSeriesProducts.ts";
import { pyramidSeriesProducts } from "./pyramidSeriesProducts.ts";
import { signatureSeriesProducts } from "./signatureSeriesProducts.ts";
import { fortuneSeriesProducts } from "./fortuneSeriesProducts.ts";
import { solitaireSeriesProducts } from "./solitaireSeriesProducts.ts";
import { unitySeriesProducts } from "./unitySeriesProducts.ts";
import { supremeSeriesProducts } from "./supremeSeriesProducts.ts";
import { sigmaSeriesProducts } from "./sigmaSeriesProducts.ts";
import { irisSeriesProducts } from "./irisSeriesProducts.ts";
import { oysterSeriesProducts } from "./oysterSeriesProducts.ts";
import { ovilioSeriesProducts } from "./ovilioSeriesProducts.ts";
import { graceChromeSeriesProducts } from "./graceChromeSeriesProducts.ts";

export type CategoryGroup =
  | "ceiling-mounted-showers"
  | "wall-mounted-showers"
  | "body-showers"
  | "hand-showers"
  | "diverters"
  | "tile-insert-drainers"
  | "basin-mixers"
  | "sanitaryware"
  | "others-accessories"
  | "mirrors"
  | "bathroom-accessories"
  | "swatch-series"
  | "pyramid-series"
  | "signature-series"
  | "fortune-series"
  | "solitaire-series"
  | "unity-series"
  | "supreme-series"
  | "sigma-series";

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
    {
      slug: "diverters",
      title: "Diverters",
      group: "diverters",
      description: "Explore our full range of JOY WATER Diverters — from 4-Function to 6-Function, Thermostatic and Lever types. Built with premium Vernet cartridges for lasting performance.",
      bannerImage: "/HEROSECTIONIMAGES/5 Function Diverter.png",
      image: "/diverters/5 Function Diverter (1).png",
      features: ["4-6 Functions", "Vernet Cartridge", "10+1 Years Warranty", "11 Years Unmatched Assurance"]
    },
    // Diverter Subcategories by Function
    {
      slug: "6-function-diverters",
      title: "6 Function Diverters",
      group: "diverters",
      description: "6 Function Individual Flow Diverters with premium Vernet cartridges for precise water control.",
      bannerImage: "/HEROSECTIONIMAGES/6 Function Diverter.png",
      image: "/diverters/6 Function Diverter (1).png",
      features: ["6 Functions", "Individual Flow", "Vernet Cartridge", "11 Years Unmatched Assurance"]
    },
    {
      slug: "5-function-diverters",
      title: "5 Function Diverters",
      group: "diverters",
      description: "5 Function Click Select Diverters combining style with superior functionality.",
      bannerImage: "/HEROSECTIONIMAGES/5 Function Diverter.png",
      image: "/diverters/5 Function Diverter (1).png",
      features: ["5 Functions", "Click Select", "Vernet Cartridge", "11 Years Unmatched Assurance"]
    },
    {
      slug: "4-function-diverters",
      title: "4 Function Diverters",
      group: "diverters",
      description: "4 Function Individual Flow Diverters for efficient water management and control.",
      bannerImage: "/HEROSECTIONIMAGES/4 Function Diverter.png",
      image: "/diverters/4 Function Diverter (5).png",
      features: ["4 Functions", "Individual Flow", "Vernet Cartridge", "11 Years Unmatched Assurance"]
    },
    {
      slug: "3-function-click-diverters",
      title: "3 Function Click Select Diverters",
      group: "diverters",
      description: "3 Function Click Select Diverters with intuitive control and elegant design.",
      bannerImage: "/HEROSECTIONIMAGES/3 Function Click Select.png",
      image: "/diverters/3 Function Click Select (1).png",
      features: ["3 Functions", "Click Select", "Vernet Cartridge", "11 Years Unmatched Assurance"]
    },
    {
      slug: "3-function-lever-diverters",
      title: "3 Function Lever Click Diverters",
      group: "diverters",
      description: "3 Function Lever Click Diverters offering smooth operation and precision control.",
      bannerImage: "/HEROSECTIONIMAGES/3 Function Lever Click.png",
      image: "/diverters/3 Function Liver Click (1).png",
      features: ["3 Functions", "Lever Click", "Vernet Cartridge", "11 Years Unmatched Assurance"]
    },
    {
      slug: "tile-drainers",
      title: "Tile Drainers",
      group: "tile-insert-drainers",
      description: "Premium tile insert drainers for seamless bathroom aesthetics.",
      bannerImage: "/HEROSECTIONIMAGES/Tile Insert Drain.jpg",
      image: "/tile drainers/tile-drainer-ss-matte-finish-4250.png",
      features: ["Tile Insert", "Concealed Drain", "11 Years Unmatched Assurance"]
    },
    {
      slug: "basin-mixers",
      title: "Basin Mixers",
      group: "basin-mixers",
      description: "Explore our full range of JOY WATER Basin Mixers — Round Controller, Thermostatic, Lever, Waterfall, Ceiling Mounted, and more.",
      bannerImage: "/HEROSECTIONIMAGES/Round Controller Basin Mixer.png",
      image: "/basinmixer/Round Controller Basin Mixer (1).png",
      features: ["Multiple Styles", "Solid Brass", "Swiss Aerator", "11 Years Unmatched Assurance"]
    },
    {
      slug: "ceiling-mounted-shower",
      title: "Ceiling Mounted Showers",
      group: "ceiling-mounted-showers",
      description: "Explore our collection of premium Ceiling Mounted Showers. Engineered for a refreshing volumetric flow experience.",
      bannerImage: "/HEROSECTIONIMAGES/2 Function ShowerHERO.jpg",
      image: "/showers/2 Function Shower (1).png",
      features: ["Spot Foam", "Spot Waterfall", "Spot Rain", "11 Years Unmatched Assurance"]
    },
    // Ceiling-Mounted Shower Subcategories by Function
    {
      slug: "2-function-ceiling-showers",
      title: "2 Function Ceiling Showers",
      group: "ceiling-mounted-showers",
      description: "2 Function ceiling mounted showers featuring Rain & Mist combinations for an invigorating shower experience.",
      bannerImage: "/HEROSECTIONIMAGES/2 Function ShowerHERO.jpg",
      image: "/showers/2 Function Shower (1).png",
      features: ["Rain & Mist", "2 Functions", "Anti-clog nozzles", "11 Years Unmatched Assurance"]
    },
    {
      slug: "3-function-ceiling-showers",
      title: "3 Function Ceiling Showers",
      group: "ceiling-mounted-showers",
      description: "3 Function ceiling showers with Rain, Mist & Waterfall combinations for ultimate luxury.",
      bannerImage: "/HEROSECTIONIMAGES/3 Function ShowerHERO.jpg",
      image: "/showers/3 Function Shower (1).png",
      features: ["Rain", "Mist", "Waterfall", "11 Years Unmatched Assurance"]
    },
    {
      slug: "4-function-ceiling-showers",
      title: "4 Function Ceiling Showers",
      group: "ceiling-mounted-showers",
      description: "4 Function ceiling showers with advanced chromotherapy and multi-spray patterns.",
      bannerImage: "/HEROSECTIONIMAGES/4FUNCTIONSHOWER.png",
      image: "/showers/4 Function Shower (1).png",
      features: ["Chromotherapy", "4+ Functions", "LED Lighting", "11 Years Unmatched Assurance"]
    },
    {
      slug: "single-function-ceiling-showers",
      title: "Single Function Ceiling Showers",
      group: "ceiling-mounted-showers",
      description: "Single function ceiling mounted showers providing classic rain experience.",
      bannerImage: "/herosection/single function shower rain celing mounted showerhero.png",
      image: "/shower category/single function shower rain celing mounted shower with installation kit 48000.png",
      features: ["Pure Rain", "Single Function", "Classic Design", "11 Years Unmatched Assurance"]
    },
    {
      slug: "wall-mounted-shower",
      title: "Wall Mounted Showers",
      group: "wall-mounted-showers",
      description: "Explore our collection of Wall Mounted Showers.",
      bannerImage: "/HEROSECTIONIMAGES/2-function-wall-mounted-shower-arm.jpg",
      image: "/showers/2 Function Wall Mounted Shower Arm (1).png",
      features: ["Sleek Design", "Precision Flow", "11 Years Unmatched Assurance"]
    },
    // Wall-Mounted Shower Subcategories by Function
    {
      slug: "2-function-wall-showers",
      title: "2 Function Wall Showers",
      group: "wall-mounted-showers",
      description: "2 Function wall mounted showers with Rain & Mist or Rain & Waterfall combinations.",
      bannerImage: "/HEROSECTIONIMAGES/2-function-wall-mounted-shower-arm.jpg",
      image: "/showers/2 Function Wall Mounted Shower Arm (1).png",
      features: ["2 Functions", "Wall Mounted", "Space Saving", "11 Years Unmatched Assurance"]
    },
    {
      slug: "single-function-wall-showers",
      title: "Single Function Wall Showers",
      group: "wall-mounted-showers",
      description: "Single function wall mounted showers including rain and waterfall options.",
      bannerImage: "/HEROSECTIONIMAGES/single-function-shower-rain.jpg",
      image: "/showers/Single Function Shower (1).png",
      features: ["Single Function", "Classic Design", "Easy Installation", "11 Years Unmatched Assurance"]
    },
    {
      slug: "spot-wall-showers",
      title: "Spot Wall Showers",
      group: "wall-mounted-showers",
      description: "Spot function wall showers featuring Rain, Cascade & Bubble spray patterns.",
      bannerImage: "/herosection/joy spot wall mounted showerhero.jpg",
      image: "/showers/Multifunctional Wall Mounted Shower (2 Function) (1).png",
      features: ["Spot Rain", "Spot Cascade", "Spot Bubble", "11 Years Unmatched Assurance"]
    },
    {
      slug: "waterfall-wall-showers",
      title: "Waterfall Wall Showers",
      group: "wall-mounted-showers",
      description: "Elegant waterfall wall mounted showers for cascading water flow.",
      bannerImage: "/HEROSECTIONIMAGES/waterfall-showers.jpg",
      image: "/showers/Waterfall Showers (1).png",
      features: ["Waterfall Flow", "Cascade Design", "Laminar Flow", "11 Years Unmatched Assurance"]
    },
    {
      slug: "body-jets-body-showers",
      title: "Body Jets & Body Showers",
      group: "body-showers",
      description: "Invigorating body jets for a spa-like experience.",
      bannerImage: "/HEROSECTIONIMAGES/body-jets-2-function.jpg",
      image: "/showers/Body Jets 2 Function (1).png",
      features: ["Adjustable Flow", "Massage Effect", "11 Years Unmatched Assurance"]
    },
    // Body Jets & Showers Subcategories by Function
    {
      slug: "2-function-body-jets",
      title: "2 Function Body Jets",
      group: "body-showers",
      description: "2 Function body jets with Rain & Mist for targeted hydrotherapy.",
      bannerImage: "/HEROSECTIONIMAGES/body-jets-2-function.jpg",
      image: "/Body Showers/Body Jets (2 Function) (1).png",
      features: ["2 Function", "Rain & Mist", "Hydrotherapy", "11 Years Unmatched Assurance"]
    },
    {
      slug: "single-function-body-showers",
      title: "Single Function Body Showers",
      group: "body-showers",
      description: "Single function body showers including One Line Series and Eminence Series.",
      bannerImage: "/HEROSECTIONIMAGES/One Line Series.jpg",
      image: "/Body Showers/One Line Series (1).png",
      features: ["Single Function", "Minimalist Design", "High Pressure", "11 Years Unmatched Assurance"]
    },
    {
      slug: "hand-showers",
      title: "Hand Showers",
      group: "hand-showers",
      description: "Hand showers in various function types.",
      bannerImage: "/herosection/4 function hand showerhero.png",
      image: "/shower category/hand shower chrome 2250 (2).png",
      features: ["Portable", "Multi-Function", "11 Years Unmatched Assurance"]
    },
    // Hand Shower Subcategories by Function
    {
      slug: "4-function-hand-showers",
      title: "4 Function Hand Showers",
      group: "hand-showers",
      description: "4 Function hand showers with multiple spray patterns.",
      bannerImage: "/herosection/4 function hand showerhero.png",
      image: "/showers/Multifunctional Wall Mounted Shower (2 Function) (7).png",
      features: ["4 Functions", "Multiple Sprays", "Portable", "11 Years Unmatched Assurance"]
    },
    {
      slug: "2-function-hand-showers",
      title: "2 Function Hand Showers",
      group: "hand-showers",
      description: "2 Function hand showers for versatile showering experience.",
      bannerImage: "/shower category/hand shower chrome 2250 (2).png",
      image: "/shower category/hand shower chrome 2250 (2).png",
      features: ["2 Functions", "Compact", "Easy Grip", "11 Years Unmatched Assurance"]
    },
    {
      slug: "single-function-hand-showers",
      title: "Single Function Hand Showers",
      group: "hand-showers",
      description: "Single function hand showers for classic showering experience.",
      bannerImage: "/shower category/hand shower chrome 2250 (2).png",
      image: "/shower category/hand shower chrome 2250 (2).png",
      features: ["Single Function", "Classic Design", "Lightweight", "11 Years Unmatched Assurance"]
    },

  // 1. SHOWERS
  {
    slug: "2-function-shower-rain-mist",
    title: "2 Function Shower",
    group: "ceiling-mounted-showers",
    description: "Rain & Mist Spray shower engineered for a refreshing volumetric flow experience. Featuring precision nozzles and solid brass construction.",
    bannerImage: "/HEROSECTIONIMAGES/2 Function ShowerHERO.jpg",
    image: "/showers/2 Function Shower (1).png",
    features: ["Rain Spray", "Mist Spray", "Anti-clog nozzles", "11 Years Unmatched Assurance", "PVD Bonded Finish"]
  },
    {
    slug: "multifunctional-ceiling-shower-3-function",
    title: "3 Function Ceiling Shower",
    group: "ceiling-mounted-showers",
    description: "3 function ceiling mounted shower with installation kit.",
    bannerImage: "/HEROSECTIONIMAGES/3 Function ShowerHERO.jpg",
    image: "/showers/3 Function Shower (1).png",
    features: ["Rain Spray", "4 Mist Spray", "Dual Waterfall", "11 Years Unmatched Assurance", "Solid Brass Construction"]
  },
  {
    slug: "3-function-shower-rain-mist-2-waterfall-led",
    title: "3 Function Shower (LED)",
    group: "ceiling-mounted-showers",
    description: "3 function shower rain + mist + 2 waterfall + led.",
    bannerImage: "/herosection/3 Function Shower (LED)hero.jpg",
    image: "/showers/3 functionshower rain four mistspray&dualwaterfall (1).png",
    features: ["Rain", "Mist", "2 Waterfall", "LED", "11 Years Unmatched Assurance"]
  },
  {
    slug: "3-function-shower-rain-mist-large-single-waterfall",
    title: "3 Function Shower (Large Waterfall)",
    group: "ceiling-mounted-showers",
    description: "Rain, 4 Mist Spray & Large Single Waterfall. Designed for maximum water coverage and soothing cascade flow.",
    bannerImage: "/HEROSECTIONIMAGES/3 Function Shower (Large Waterfall).png",
    image: "/showers/3 Function Shower (Large Waterfall) (1).png",
    features: ["Rain Spray", "4 Mist Spray", "Large Single Waterfall", "11 Years Unmatched Assurance"]
  },
  {
    slug: "2-function-shower-rain-large-single-waterfall",
    title: "2 Function Shower (Large Waterfall)",
    group: "ceiling-mounted-showers",
    description: "Rain & Large Single Waterfall shower system with flawless internal waterways.",
    bannerImage: "/herosection/2 Function Shower (Large Waterfall)hero.jpg",
    image: "/showers/2 Function Shower (Large Waterfall).png",
    features: ["Rain Spray", "Large Single Waterfall", "11 Years Unmatched Assurance"]
  },
    {
    slug: "4-function-shower-chromotherapy",
    title: "4 Function Shower Rain, 6 Mist, 2 Waterfall and Water Column",
    group: "ceiling-mounted-showers",
    description: "Chromotherapy LED Light, Rain, Six Mist Spray, Water Column & Dual Waterfall. Ultimate sensory indulgence.",
    bannerImage: "/HEROSECTIONIMAGES/4FUNCTIONSHOWER.png",
    image: "/showers/4 Function Shower (1).png",
    features: ["Chromotherapy LED Light", "Rain", "6 Mist Spray", "Water Column", "Dual Waterfall", "11 Years Unmatched Assurance"]
  },
  {
    slug: "4-functional-shower-rain-4-mist-4side-flap-rain-water-column",
    title: "4 functional shower rain +  4 mist  +4side flap rain + water column",
    group: "ceiling-mounted-showers",
    description: "Rain, Water Column & Four Waterfall overhead shower systems for complete body immersion.",
    bannerImage: "/HEROSECTIONIMAGES/MULTIFUNCTIONALSHOWER.png",
    image: "/showers/Multifunctional Showers (1).png",
    features: ["Rain", "4 Mist", "4 Side Flap Rain", "Water Column", "11 Years Unmatched Assurance"]
  },

  {
    slug: "single-function-shower-rain",
    title: "Single Function Shower",
    group: "wall-mounted-showers",
    description: "Classic Rain shower providing a natural rainfall sensation with low water consumption.",
    bannerImage: "/HEROSECTIONIMAGES/single-function-shower-rain.jpg",
    image: "/showers/Single Function Shower (1).png",
    features: ["Rain", "40% Water Saving Aerators", "11 Years Unmatched Assurance"]
  },
  {
    slug: "waterfall-showers",
    title: "Waterfall Showers",
    group: "wall-mounted-showers",
    description: "Elegant Waterfall showers that mimic natural cascades with smooth laminar flow.",
    bannerImage: "/HEROSECTIONIMAGES/waterfall-showers.jpg",
    image: "/showers/Waterfall Showers (1).png",
    features: ["Cascade Flow", "Solid Brass Billet", "11 Years Unmatched Assurance"]
  },
    {
    slug: "4-function-hand-shower",
    title: "4 function hand shower",
    group: "hand-showers",
    description: "Spot Foam, Spot Waterfall, Spot Rain. Compact wall-mounted luxury for modern bathrooms.",
    bannerImage: "/herosection/4 function hand showerhero.png",
    image: "/showers/Multifunctional Wall Mounted Shower (2 Function) (4).png",
    features: ["Spot Foam", "Spot Waterfall", "Spot Rain", "11 Years Unmatched Assurance"]
  },
  {
    slug: "2-function-shower-rain-mist-hexagon",
    title: "2 function shower rain mist hexagon",
    group: "ceiling-mounted-showers",
    description: "2 function shower rain mist hexagon",
    bannerImage: "/shower category/2 function shower rain mist 4  in hexagon shape  image for hero section  (1).jpg",
    image: "/shower category/2 function shower rain mist 4  in hexagon shape  gold  45000.png",
    features: ["Rain", "Mist", "Hexagon Shape", "11 Years Unmatched Assurance"]
  },
  {
    slug: "single-function-shower-rain-ceiling-mounted",
    title: "single function shower rain celing mounted shower",
    group: "ceiling-mounted-showers",
    description: "single function shower rain celing mounted shower",
    bannerImage: "/herosection/single function shower rain celing mounted showerhero.png",
    image: "/shower category/single function shower rain celing mounted shower with installation kit 48000.png",
    features: ["Rain", "Ceiling Mounted", "11 Years Unmatched Assurance"]
  },

  {
    slug: "hand-shower",
    title: "hand shower",
    group: "hand-showers",
    description: "hand shower",
    bannerImage: "/HEROSECTIONIMAGES/2-function-wall-mounted-shower-arm.jpg",
    image: "/shower category/hand shower chrome 2250 (2).png",
    features: ["Hand Shower", "11 Years Unmatched Assurance"]
  },
  {
    slug: "shower-set-with-hot-cold-controller",
    title: "shower set with hot & cold controller",
    group: "wall-mounted-showers",
    description: "shower set with hot & cold controller",
    bannerImage: "/herosection/shower set with hot & cold controllerhero.jpg",
    image: "/shower category/shower set with hot & cold controller with  shower rail & hand shower  black finish  42000 (1).jpg",
    features: ["Hot & Cold Controller", "11 Years Unmatched Assurance"]
  },
  {
    slug: "joy-spot-wall-mounted-shower",
    title: "joy spot wall mounted shower",
    group: "wall-mounted-showers",
    description: "joy spot wall mounted shower.",
    bannerImage: "/herosection/joy spot wall mounted showerhero.jpg",
    image: "/showers/Multifunctional Wall Mounted Shower (2 Function) (1).png",
    features: ["Spot Foam", "Spot Waterfall", "Spot Rain", "11 Years Unmatched Assurance"]
  },

    {
    slug: "multifunctional-wall-mounted",
    title: "Multifunctional Wall Mounted",
    group: "wall-mounted-showers",
    description: "Multifunctional wall mounted showers.",
    bannerImage: "/herosection/Multifunctional Wall Mountedhero.png",
    features: ["Rain", "Mist", "Waterfall", "11 Years Unmatched Assurance"]
  },

  // 2. MULTI-FUNCTIONAL BODY SHOWERS
  {
    slug: "body-jets-2-function",
    title: "Body Jets (2 Function)",
    group: "body-showers",
    description: "Rain & Mist body jets designed for recessed wall installation and targeted hydrotherapy.",
    bannerImage: "/HEROSECTIONIMAGES/body-jets-2-function.jpg",
    image: "/Body Showers/Body Jets (2 Function) (1).png",
    features: ["Rain", "Mist", "Recessed Installation", "11 Years Unmatched Assurance"]
  },
  {
    slug: "one-line-series",
    title: "One Line Series",
    group: "body-showers",
    description: "One Line Series minimalist body showers featuring zero-radius architectural profiles.",
    bannerImage: "/HEROSECTIONIMAGES/One Line Series.jpg",
    image: "/Body Showers/One Line Series (1).png",
    features: ["Minimalist Design", "High Pressure", "11 Years Unmatched Assurance"]
  },
  {
    slug: "eminence-series",
    title: "Eminence Series",
    group: "body-showers",
    description: "Eminence Series luxury body shower arrays with adjustable angle nozzles.",
    bannerImage: "/HEROSECTIONIMAGES/Eminence Series.jpg",
    image: "/Body Showers/Eminence Series (1).png",
    features: ["Luxury Finish", "Precision Sprays", "11 Years Unmatched Assurance"]
  },

  // 3. DIVERTERS
  {
    slug: "5-function-diverter",
    title: "5 Function Diverter",
    group: "diverters",
    description: "The JOY WATER 5-function diverter offers unmatched versatility with the ability to control up to five water outlets. Equipped with high-quality Vernet cartridges.",
    bannerImage: "/HEROSECTIONIMAGES/5 Function Diverter.png",
    image: "/diverters/5 Function Diverter (1).png",
    features: ["5 Functions", "Vernet Cartridge (Precision & Durability)", "10+1 Years Warranty", "11 Years Unmatched Assurance", "Smooth Transitions"]
  },
  {
    slug: "6-function-diverter",
    title: "6 Function Diverter",
    group: "diverters",
    description: "6 Function Diverter for comprehensive bathroom systems. Features genuine Vernet cartridges for drip-free temperature control.",
    bannerImage: "/HEROSECTIONIMAGES/6 Function Diverter.png",
    image: "/diverters/6 Function Diverter (1).png",
    features: ["6 Functions", "Vernet Cartridge (Precision & Durability)", "10+1 Years Warranty", "11 Years Unmatched Assurance"]
  },
  {
    slug: "thermostatic-diverter-three-outlet",
    title: "Thermostatic Diverter (Three Outlet)",
    group: "diverters",
    description: "Provides seamless control between three water outlets with safety thermostatic locking. Renowned Vernet cartridge inside.",
    bannerImage: "/HEROSECTIONIMAGES/Thermostatic Diverter.jpg",
    image: "/diverters/Thermostatic Diverter (Three Outlet) (1).png",
    features: ["Thermostatic Control", "3 Outlets", "Safety Lock", "Vernet Cartridge", "10+1 Years Warranty"]
  },
  {
    slug: "lever-diverter-three-outlet",
    title: "Lever Diverter (Three Outlet)",
    group: "diverters",
    description: "Classic Lever Diverter with Three Outlets, solid brass body, and smooth operational action.",
    bannerImage: "/HEROSECTIONIMAGES/Lever Diverter.jpg",
    image: "/diverters/Lever Diverter Three Outlet (1).png",
    features: ["Lever Handle", "3 Outlets", "Vernet Cartridge", "10+1 Years Warranty"]
  },
  {
    slug: "4-function-diverter",
    title: "4 Function Diverter",
    group: "diverters",
    description: "The JOY WATER 4-function diverter provides precise control over four water outlets with smooth, drip-free operation. Built with premium Vernet cartridges for lasting performance.",
    bannerImage: "/HEROSECTIONIMAGES/5 Function Diverter.png",
    image: "/diverters/6 Function Diverter (5).png",
    features: ["4 Functions", "Vernet Cartridge (Precision & Durability)", "10+1 Years Warranty", "11 Years Unmatched Assurance", "Smooth Transitions"]
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
    title: "Waterfall Flow Basin Mixer",
    group: "basin-mixers",
    description: "Waterfall Flow Table Mounted Basin Mixer designed for vessel sinks and marble countertops.",

    features: ["Table Mounted", "Waterfall Flow", "11 Years Unmatched Assurance", "Solid Brass"]
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
    title: "Tall Body Basin Mixer",
    group: "basin-mixers",
    description: "Tall Body basin mixers with exquisite finishes and contemporary designs.",
    bannerImage: "/premium basin mixer/brushed gold finish 19500.png",
    features: ["Premium Finishes", "11 Years Unmatched Assurance"]
  },
  // 6. SANITARYWARE
  
  {
    slug: "wall-hung-wc",
    title: "Wall Hung WC",
    group: "sanitaryware",
    description: "Rimless Wall Hung Water Closets with quiet flush engineering, ergonomic contours, and soft-close seats.",
    bannerImage: "/Wall Hung WC heroimage1.jpeg",
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
    bannerImage: "/Ceramic Wash Basinsheroimage.jpeg",
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
    bannerImage: "/glass basin.jpg",
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
    bannerImage: "/Stone Pedestalheroimage.jpeg",
    image: "/images/PDF1_P76_IMG1.png",
    features: [
      "Smooth & Silky Finish - Provides an attractive, premium look and is easy to clean.",
      "Easy to Clean - Smooth surface allows quick and effortless cleaning."
    ]
  },

  {
    slug: "soap-dispenser",
    title: "Soap Dispenser",
    group: "others-accessories",
    description: "Elegant natural stone soap dispensers and tumbler holders to complete your luxury bathroom.",
    features: [
      "Natural Stone Finish – Adds a luxurious, premium look to your bathroom.",
      "Durable & Long-Lasting – Made from high-quality natural stone for longevity.",
      "Easy to Clean – Smooth surface allows effortless maintenance.",
      "Elegant Design – Complements modern bathroom interiors perfectly."
    ]
  },

  {
    slug: "ceramic-pedestal",
    title: "Ceramic Pedestal",
    group: "sanitaryware",
    description: "Statement-making designs that elevate and define your bathroom space.",
    bannerImage: "/Ceramic Pedestalheroimage.jpeg",
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

  // Swatch Series - Premium Bathroom Accessories
  {
    slug: "swatch-chrome",
    title: "Swatch Series - Chrome",
    group: "swatch-series",
    description: "Premium Swatch Series bathroom accessories in elegant Chrome finish. Solid brass construction with superior quality.",
    bannerImage: "/JOY WATER BATHROOM ACCESSORIES (1)/64.jpg",
    features: ["Brass Construction", "Chrome Finish", "Premium Quality", "11 Years Unmatched Assurance"]
  },
  {
    slug: "swatch-gold",
    title: "Swatch Series - PVD Gold",
    group: "swatch-series",
    description: "Luxury Swatch Series bathroom accessories with PVD Gold finish. Durable brass with premium gold coating.",
    bannerImage: "/JOY WATER BATHROOM ACCESSORIES (1)/76.jpg",
    features: ["Brass Construction", "PVD Gold Finish", "Premium Quality", "11 Years Unmatched Assurance"]
  },
  {
    slug: "swatch-rose-gold",
    title: "Swatch Series - PVD Rose Gold",
    group: "swatch-series",
    description: "Elegant Swatch Series bathroom accessories with PVD Rose Gold finish. Premium brass with luxurious rose gold coating.",
    bannerImage: "/JOY WATER BATHROOM ACCESSORIES (1)/87.jpg",
    features: ["Brass Construction", "PVD Rose Gold Finish", "Premium Quality", "11 Years Unmatched Assurance"]
  },

  // Pyramid Series - Premium Bathroom Accessories
  {
    slug: "pyramid-series",
    title: "Pyramid Series - Chrome",
    group: "pyramid-series",
    description: "Pyramid Series bathroom accessories featuring elegant Chrome finish. Premium brass construction with superior quality.",
    bannerImage: "/JOY WATER BATHROOM ACCESSORIES (1)/22.jpg",
    features: ["Brass Construction", "Chrome Finish", "Glass Accents", "11 Years Unmatched Assurance"]
  },

  // Signature Series - Premium Bathroom Accessories
  {
    slug: "signature-series",
    title: "Signature Series - Chrome",
    group: "signature-series",
    description: "Signature Series bathroom accessories featuring premium Chrome finish. High-end brass construction with exceptional design.",
    bannerImage: "/JOY WATER BATHROOM ACCESSORIES (1)/32.jpg",
    features: ["Brass Construction", "Chrome Finish", "Designer Collection", "11 Years Unmatched Assurance"]
  },

  // Fortune Series - Premium Bathroom Accessories
  {
    slug: "fortune-series",
    title: "Fortune Series - Chrome",
    group: "fortune-series",
    description: "Fortune Series bathroom accessories with elegant Chrome finish. Premium brass construction with innovative designs.",
    bannerImage: "/JOY WATER BATHROOM ACCESSORIES (1)/1.jpg",
    features: ["Brass Construction", "Chrome Finish", "Innovative Design", "11 Years Unmatched Assurance"]
  },

  // Solitaire Series - Premium Bathroom Accessories
  {
    slug: "solitaire-series",
    title: "Solitaire Series - Chrome",
    group: "solitaire-series",
    description: "Solitaire Series bathroom accessories featuring timeless Chrome finish. Classic brass construction with elegant styling.",
    bannerImage: "/JOY WATER BATHROOM ACCESSORIES (1)/51.jpg",
    features: ["Brass Construction", "Chrome Finish", "Classic Design", "11 Years Unmatched Assurance"]
  },

  // Unity Series - Premium Bathroom Accessories
  {
    slug: "unity-series",
    title: "Unity Series - Black Gold",
    group: "unity-series",
    description: "Unity Series bathroom accessories featuring unique Black Gold finish. Premium brass construction with contemporary styling.",
    bannerImage: "/JOY WATER BATHROOM ACCESSORIES (1)/97.jpg",
    features: ["Brass Construction", "Black Gold Finish", "Contemporary Design", "11 Years Unmatched Assurance"]
  },

  // Supreme Series - Premium Bathroom Accessories
  {
    slug: "supreme-chrome",
    title: "Supreme Series - Chrome",
    group: "supreme-series",
    description: "Supreme Series bathroom accessories in elegant Chrome finish. High-quality brass construction with superior design.",
    bannerImage: "/JOY WATER BATHROOM ACCESSORIES (1)/120.jpg",
    features: ["Brass Construction", "Chrome Finish", "Premium Quality", "11 Years Unmatched Assurance"]
  },
  {
    slug: "supreme-gold",
    title: "Supreme Series - PVD Gold",
    group: "supreme-series",
    description: "Supreme Series bathroom accessories with luxurious PVD Gold finish. Premium brass with gold coating.",
    bannerImage: "/JOY WATER BATHROOM ACCESSORIES (1)/66.jpg",
    features: ["Brass Construction", "PVD Gold Finish", "Luxury Design", "11 Years Unmatched Assurance"]
  },
  {
    slug: "supreme-rose-gold",
    title: "Supreme Series - PVD Rose Gold",
    group: "supreme-series",
    description: "Supreme Series bathroom accessories with elegant PVD Rose Gold finish. Premium brass with rose gold coating.",
    bannerImage: "/JOY WATER BATHROOM ACCESSORIES (1)/113.jpg",
    features: ["Brass Construction", "PVD Rose Gold Finish", "Elegant Design", "11 Years Unmatched Assurance"]
  },


  // Iris Series - Premium Bathroom Accessories
  {
    slug: "iris-chrome",
    title: "Iris Series - Chrome",
    group: "iris-series",
    description: "Iris Series bathroom accessories in elegant Chrome finish. Premium brass construction.",
    bannerImage: "/JOY WATER BATHROOM ACCESSORIES (1)/157.jpg",
    features: ["Brass Construction", "Chrome Finish", "Modern Design", "11 Years Unmatched Assurance"]
  },
  {
    slug: "iris-gold",
    title: "Iris Series - PVD Gold",
    group: "iris-series",
    description: "Iris Series bathroom accessories with luxurious PVD Gold finish. Premium brass with gold coating.",
    bannerImage: "/JOY WATER BATHROOM ACCESSORIES (1)/167.jpg",
    features: ["Brass Construction", "PVD Gold Finish", "Luxury Design", "11 Years Unmatched Assurance"]
  },

  // Oyster Series - Premium Bathroom Accessories
  {
    slug: "oyster-chrome",
    title: "Oyster Series - Chrome",
    group: "oyster-series",
    description: "Oyster Series bathroom accessories in elegant Chrome finish. Premium brass construction with modern design.",
    bannerImage: "/JOY WATER BATHROOM ACCESSORIES (1)/184.jpg",
    features: ["Brass Construction", "Chrome Finish", "Modern Design", "11 Years Unmatched Assurance"]
  },
  {
    slug: "oyster-rose-gold",
    title: "Oyster Series - PVD Rose Gold",
    group: "oyster-series",
    description: "Oyster Series bathroom accessories with elegant PVD Rose Gold finish. Premium brass with rose gold coating.",
    bannerImage: "/JOY WATER BATHROOM ACCESSORIES (1)/194.jpg",
    features: ["Brass Construction", "PVD Rose Gold Finish", "Elegant Design", "11 Years Unmatched Assurance"]
  },
  {
    slug: "oyster-black",
    title: "Oyster Series - Matte Black",
    group: "oyster-series",
    description: "Oyster Series bathroom accessories in sophisticated Matte Black finish. Premium brass with black coating.",
    bannerImage: "/JOY WATER BATHROOM ACCESSORIES (1)/205.jpg",
    features: ["Brass Construction", "Matte Black Finish", "Contemporary Design", "11 Years Unmatched Assurance"]
  },
  {
    slug: "oyster-series",
    title: "Oyster Series - All Finishes",
    group: "oyster-series",
    description: "Complete Oyster Series bathroom accessories collection in Chrome, PVD Rose Gold, and Matte Black finishes.",
    bannerImage: "/JOY WATER BATHROOM ACCESSORIES (1)/184.jpg",
    features: ["Brass Construction", "Multiple Finishes", "Contemporary Design", "11 Years Unmatched Assurance"]
  },

  // Ovilio Series - Premium Bathroom Accessories
  {
    slug: "ovilio-chrome",
    title: "Ovilio Series - Chrome",
    group: "ovilio-series",
    description: "Ovilio Series bathroom accessories in elegant Chrome finish. Premium brass construction with sophisticated design.",
    bannerImage: "/JOY WATER BATHROOM ACCESSORIES (1)/215.jpg",
    features: ["Brass Construction", "Chrome Finish", "Elegant Design", "11 Years Unmatched Assurance"]
  },

  // Grace Chrome Series - Premium Bathroom Accessories
  {
    slug: "grace-chrome",
    title: "Grace Chrome Series",
    group: "grace-chrome-series",
    description: "Grace Chrome Series bathroom accessories in premium SS Chrome finish. High-quality stainless steel construction.",
    bannerImage: "/JOY WATER BATHROOM ACCESSORIES (1)/226.jpg",
    features: ["SS Construction", "Chrome Finish", "Premium Quality", "11 Years Unmatched Assurance"]
  },
  {
    slug: "grace-gold",
    title: "Grace Gold Series",
    group: "grace-gold-series",
    description: "Grace Gold Series bathroom accessories with luxurious PVD Gold finish. Premium stainless steel construction.",
    bannerImage: "/JOY WATER BATHROOM ACCESSORIES (1)/236.jpg",
    features: ["SS Construction", "PVD Gold Finish", "Luxury Design", "11 Years Unmatched Assurance"]
  },
  {
    slug: "grace-rose-gold",
    title: "Grace Rose Gold Series",
    group: "grace-rose-gold-series",
    description: "Grace Rose Gold Series bathroom accessories with elegant PVD Rose Gold finish. Premium stainless steel construction.",
    bannerImage: "/JOY WATER BATHROOM ACCESSORIES (1)/246.jpg",
    features: ["SS Construction", "PVD Rose Gold Finish", "Elegant Design", "11 Years Unmatched Assurance"]
  },
  {
    slug: "grace-black",
    title: "Grace Black Series",
    group: "grace-black-series",
    description: "Grace Black Series bathroom accessories with modern PVD Black finish. Premium stainless steel construction.",
    bannerImage: "/JOY WATER BATHROOM ACCESSORIES (1)/256.jpg",
    features: ["SS Construction", "PVD Black Finish", "Modern Design", "11 Years Unmatched Assurance"]
  },
  {
    slug: "rectus-chrome",
    title: "Rectus Chrome Series",
    group: "rectus-chrome-series",
    description: "Rectus Chrome Series bathroom accessories in contemporary chrome finish. Premium stainless steel construction.",
    bannerImage: "/JOY WATER BATHROOM ACCESSORIES (1)/265.png",
    features: ["SS Construction", "Chrome Finish", "Contemporary Design", "11 Years Unmatched Assurance"]
  },
  {
    slug: "rectus-gold",
    title: "Rectus Gold Series",
    group: "rectus-gold-series",
    description: "Rectus Gold Series bathroom accessories with luxurious PVD Gold finish. Premium stainless steel construction.",
    bannerImage: "/JOY WATER BATHROOM ACCESSORIES (1)/278.png",
    features: ["SS Construction", "PVD Gold Finish", "Contemporary Design", "11 Years Unmatched Assurance"]
  },
  {
    slug: "rectus-rose-gold",
    title: "Rectus Rose Gold Series",
    group: "rectus-rose-gold-series",
    description: "Rectus Rose Gold Series bathroom accessories with elegant PVD Rose Gold finish. Premium stainless steel construction.",
    bannerImage: "/JOY WATER BATHROOM ACCESSORIES (1)/289.jpg",
    features: ["SS Construction", "PVD Rose Gold Finish", "Contemporary Design", "11 Years Unmatched Assurance"]
  },
  {
    slug: "rectus-black",
    title: "Rectus Black Series",
    group: "rectus-black-series",
    description: "Rectus Black Series bathroom accessories with bold PVD Black finish. Premium stainless steel construction.",
    bannerImage: "/JOY WATER BATHROOM ACCESSORIES (1)/299.jpg",
    features: ["SS Construction", "PVD Black Finish", "Contemporary Design", "11 Years Unmatched Assurance"]
  },
  {
    slug: "folding-rack",
    title: "Folding Rack & Handicap Bars",
    group: "folding-rack-series",
    description: "Functional towel racks, grab bars and accessibility accessories. Premium stainless steel construction for safety and durability.",
    bannerImage: "/JOY WATER BATHROOM ACCESSORIES (1)/316.jpg",
    features: ["SS-304 Construction", "Handicap Accessibility", "Multiple Sizes", "11 Years Unmatched Assurance"]
  },
  {
    slug: "toilet-brush-holder",
    title: "Toilet Brush Holder",
    group: "toilet-brush-holder-series",
    description: "Elegant toilet brush holders in square and round designs. Premium stainless steel construction with chrome finish.",
    bannerImage: "/JOY WATER BATHROOM ACCESSORIES (1)/320.jpg",
    features: ["SS Construction", "Chrome Finish", "Square & Round Designs", "11 Years Unmatched Assurance"]
  },
  {
    slug: "shelf",
    title: "Glass Shelves Collection",
    group: "shelf-series",
    description: "Premium glass shelves in multiple sizes and finishes. Available in chrome, gold, rose gold, and matte black finishes.",
    bannerImage: "/JOY WATER BATHROOM ACCESSORIES (1)/324.jpg",
    features: ["Multiple Sizes", "Corner & Flat Options", "Premium Finishes", "11 Years Unmatched Assurance"]
  },
  {
    slug: "khutti-accessories",
    title: "Khutti Accessories",
    group: "khutti-accessories-series",
    description: "Traditional brass khutti hooks and wall-mounted accessories. Premium brass construction with classic designs.",
    bannerImage: "/JOY WATER BATHROOM ACCESSORIES (1)/333.png",
    features: ["Brass Construction", "Traditional Design", "Wall Mounted", "11 Years Unmatched Assurance"]
  },
  {
    slug: "makeup-mirror",
    title: "Makeup & Shaving Mirrors",
    group: "makeup-mirror-series",
    description: "3x zoom magnification mirrors in multiple finishes. Available in chrome, gold, black, and rose gold finishes.",
    bannerImage: "/JOY WATER BATHROOM ACCESSORIES (1)/341.jpg",
    features: ["3x Zoom", "Brass Construction", "Multiple Finishes", "11 Years Unmatched Assurance"]
  },

  // Sigma Series - Premium Bathroom Accessories
  {
    slug: "sigma-chrome",
    title: "Sigma Series - Chrome",
    group: "sigma-series",
    description: "Sigma Series bathroom accessories in elegant Chrome finish. High-quality brass construction with modern design.",
    bannerImage: "/JOY WATER BATHROOM ACCESSORIES (1)/127.jpg",
    features: ["Brass Construction", "Chrome Finish", "Modern Design", "11 Years Unmatched Assurance"]
  },
  {
    slug: "sigma-gold",
    title: "Sigma Series - PVD Gold",
    group: "sigma-series",
    description: "Sigma Series bathroom accessories with luxurious PVD Gold finish. Premium brass with gold coating.",
    bannerImage: "/JOY WATER BATHROOM ACCESSORIES (1)/137.jpg",
    features: ["Brass Construction", "PVD Gold Finish", "Luxury Design", "11 Years Unmatched Assurance"]
  },
  {
    slug: "sigma-rose-gold",
    title: "Sigma Series - PVD Rose Gold",
    group: "sigma-series",
    description: "Sigma Series bathroom accessories with elegant PVD Rose Gold finish. Premium brass with rose gold coating.",
    bannerImage: "/JOY WATER BATHROOM ACCESSORIES (1)/137.jpg",
    features: ["Brass Construction", "PVD Rose Gold Finish", "Elegant Design", "11 Years Unmatched Assurance"]
  },
  {
    slug: "sigma-series",
    title: "Sigma Series - All Finishes",
    group: "sigma-series",
    description: "Complete Sigma Series bathroom accessories collection in Chrome, PVD Gold, and PVD Rose Gold finishes.",
    bannerImage: "/JOY WATER BATHROOM ACCESSORIES (1)/127.jpg",
    features: ["Brass Construction", "Multiple Finishes", "Modern Design", "11 Years Unmatched Assurance"]
  },

  // New Bathroom Accessories - 428 products
  {
    slug: "towel-rod",
    title: "Towel Rod",
    group: "bathroom-accessories",
    description: "Premium towel rods in various finishes.",
    features: ["11 Years Unmatched Assurance"]
  },
  {
    slug: "glass-shelf",
    title: "Glass Shelf",
    group: "bathroom-accessories",
    description: "Premium glass shelves for bathroom storage.",
    features: ["11 Years Unmatched Assurance"]
  },
  {
    slug: "paper-holder",
    title: "Paper Holder",
    group: "bathroom-accessories",
    description: "Premium paper holders in multiple finishes.",
    features: ["11 Years Unmatched Assurance"]
  },
  {
    slug: "robe-hook",
    title: "Robe Hook",
    group: "bathroom-accessories",
    description: "Premium robe hooks for towels and robes.",
    features: ["11 Years Unmatched Assurance"]
  },
  {
    slug: "towel-ring",
    title: "Towel Ring",
    group: "bathroom-accessories",
    description: "Premium towel rings in various finishes.",
    features: ["11 Years Unmatched Assurance"]
  },
  {
    slug: "tumbler-holder",
    title: "Tumbler Holder",
    group: "bathroom-accessories",
    description: "Premium tumbler holders for bathroom essentials.",
    features: ["11 Years Unmatched Assurance"]
  },
  {
    slug: "toothbrush-holder",
    title: "Toothbrush Holder",
    group: "bathroom-accessories",
    description: "Premium toothbrush holders in elegant designs.",
    features: ["11 Years Unmatched Assurance"]
  },
  {
    slug: "toilet-brush-holder",
    title: "Toilet Brush Holder",
    group: "bathroom-accessories",
    description: "Premium toilet brush holders with modern styling.",
    features: ["11 Years Unmatched Assurance"]
  },
  {
    slug: "bathroom-shelf",
    title: "Bathroom Shelf",
    group: "bathroom-accessories",
    description: "Premium bathroom shelves for storage.",
    features: ["11 Years Unmatched Assurance"]
  },
  {
    slug: "corner-shelf",
    title: "Corner Shelf",
    group: "bathroom-accessories",
    description: "Premium corner shelves for efficient space utilization.",
    features: ["11 Years Unmatched Assurance"]
  },
  {
    slug: "double-robe-hook",
    title: "Double Robe Hook",
    group: "bathroom-accessories",
    description: "Premium double robe hooks for added convenience.",
    features: ["11 Years Unmatched Assurance"]
  },
  {
    slug: "towel-bar",
    title: "Towel Bar",
    group: "bathroom-accessories",
    description: "Premium towel bars in various sizes.",
    features: ["11 Years Unmatched Assurance"]
  },
  {
    slug: "bathroom-rack",
    title: "Bathroom Rack",
    group: "bathroom-accessories",
    description: "Premium bathroom racks for organized storage.",
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
import { graceGoldSeriesProducts } from "./graceGoldSeriesProducts";
import { graceRoseGoldSeriesProducts } from "./graceRoseGoldSeriesProducts";
import { graceBlackSeriesProducts } from "./graceBlackSeriesProducts";
import { rectusSeriesProducts } from "./rectusSeriesProducts";
import { rectusGoldSeriesProducts } from "./rectusGoldSeriesProducts";
import { rectusRoseGoldSeriesProducts } from "./rectusRoseGoldSeriesProducts";
import { rectusBlackSeriesProducts } from "./rectusBlackSeriesProducts";
import { foldingRackSeriesProducts } from "./foldingRackSeriesProducts";
import { toiletBrushHolderProducts } from "./toiletBrushHolderProducts";
import { shelfSeriesProducts } from "./shelfSeriesProducts";
import { khuttiAccessoriesProducts } from "./khuttiAccessoriesProducts";
import { makeupMirrorProducts } from "./makeupMirrorProducts";

// All products with authentic catalog prices and names from Catalog-Final-Doc-03 and Joy water merged PDFs
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function createCategoryProducts(
  categorySlug: string,
  titlePrefix: string,
  codePrefix: string,
  basePrice: number | number[],
  imagePaths: string[],
  customFinishes?: string[],
  customCodes?: string[]
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
    const code = customCodes ? customCodes[idx % customCodes.length] : pdfCodes[idx % pdfCodes.length];
    const baseSlug = `${slugify(titlePrefix)}-${slugify(finish)}`;
    const duplicateCountBefore = finishes.slice(0, idx).filter((f) => f === finish).length;
    const finalSlug = duplicateCountBefore > 0 ? `${baseSlug}-${duplicateCountBefore + 1}` : baseSlug;
    return {
      id: finalSlug,
      slug: finalSlug,
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
    category: "2-function-body-jets",
    finish: "Chrome",
    price: 4150,
    code: "JW-10038",
    image: "/Body Showers/Body Jets (2 Function) (1).png",
  },
  {
    id: "body-jets-2-function-2",
    slug: "body-jets-2-function-2",
    name: "Body Jet (2 Function - Rain & Mist) - Brushed Gold",
    category: "2-function-body-jets",
    finish: "Brushed Gold",
    price: 6950,
    code: "JW-10039",
    image: "/Body Showers/Body Jets (2 Function) (2).png",
  },
  {
    id: "body-jets-2-function-3",
    slug: "body-jets-2-function-3",
    name: "Body Jet (2 Function - Rain & Mist) - Graphite Grey",
    category: "2-function-body-jets",
    finish: "Graphite Grey",
    price: 6950,
    code: "JW-10041",
    image: "/Body Showers/Body Jets (2 Function) (3).png",
  },
  {
    id: "body-jets-2-function-4",
    slug: "body-jets-2-function-4",
    name: "Body Jet (2 Function - Rain & Mist) - Glossy Rose Gold",
    category: "2-function-body-jets",
    finish: "Rose Gold",
    price: 6950,
    code: "JW-10040",
    image: "/Body Showers/Body Jets (2 Function) (4).png",
  },
  {
    id: "body-jets-2-function-5",
    slug: "body-jets-2-function-5",
    name: "Body Jet (2 Function - Rain & Mist) - Brushed Rose Gold",
    category: "2-function-body-jets",
    finish: "Brushed Rose Gold",
    price: 6950,
    code: "JW-10194",
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
    price: 24750,
    code: "JW-10103",
    image: "/basinmixer/Ceiling Mounted Basin Mixer (1).png",
  },
  {
    id: "ceiling-mounted-basin-mixer-2",
    slug: "ceiling-mounted-basin-mixer-2",
    name: "Table Mounted Basin Mixer (Medium) - Brushed Graphite Grey",
    category: "ceiling-mounted-basin-mixer",
    finish: "Graphite Grey",
    price: 15750,
    code: "JW-10104",
    image: "/basinmixer/Ceiling Mounted Basin Mixer (2).png",
  },
  {
    id: "ceiling-mounted-basin-mixer-3",
    slug: "ceiling-mounted-basin-mixer-3",
    name: "Ceiling Mounted Basin Mixer (Long) - Brushed Gold",
    category: "ceiling-mounted-basin-mixer",
    finish: "Gold",
    price: 24750,
    code: "JW-10099",
    image: "/basinmixer/Ceiling Mounted Basin Mixer (4).png",
  },
  {
    id: "ceiling-mounted-basin-mixer-4",
    slug: "ceiling-mounted-basin-mixer-4",
    name: "Table Mounted Basin Mixer (Medium) - Brushed Gold",
    category: "ceiling-mounted-basin-mixer",
    finish: "Gold",
    price: 15750,
    code: "JW-10100",
    image: "/basinmixer/Ceiling Mounted Basin Mixer (5).png",
  },
  {
    id: "ceiling-mounted-basin-mixer-5",
    slug: "ceiling-mounted-basin-mixer-5",
    name: "Ceiling Mounted Basin Mixer (Long) - Brushed Rose Gold",
    category: "ceiling-mounted-basin-mixer",
    finish: "Rose Gold",
    price: 24750,
    code: "JW-10101",
    image: "/basinmixer/Ceiling Mounted Basin Mixer (6).png",
  },
  {
    id: "ceiling-mounted-basin-mixer-6",
    slug: "ceiling-mounted-basin-mixer-6",
    name: "Table Mounted Basin Mixer (Medium) - Brushed Rose Gold",
    category: "ceiling-mounted-basin-mixer",
    finish: "Rose Gold",
    price: 15750,
    code: "JW-10102",
    image: "/basinmixer/Ceiling Mounted Basin Mixer (7).png",
  },
  {
    id: "ceiling-mounted-basin-mixer-7",
    slug: "ceiling-mounted-basin-mixer-7",
    name: "Ceiling Mounted Basin Mixer (Long) - Brushed Chrome",
    category: "ceiling-mounted-basin-mixer",
    finish: "Chrome",
    price: 19500,
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

  // 2 Function Ceiling Showers
  ...createCategoryProducts(
    "2-function-ceiling-showers",
    "2 Function Shower (Rain & Mist)",
    "JW-100",
    [32500, 39000, 39000, 39000],
    [
      "/showers/2 Function Shower (1).png",
      "/showers/2 Function Shower (2).png",
      "/showers/2 Function Shower (3).png",
      "/showers/2 Function Shower (4).png",
    ],
    ["Chrome", "Brushed Gold", "Graphite Grey", "Rose Gold"],
    ["JW-10146", "JW-10147", "JW-10148", "JW-10149"]
  ),
    ...createCategoryProducts(
    "3-function-ceiling-showers",
    "3 Function Ceiling Shower",
    "JW-100",
    [63000, 75000, 75000, 75000],
    [
      "/showers/3 Function Shower (1).png",
      "/showers/3 Function Shower (2).png",
      "/showers/3 Function Shower (3).png",
      "/showers/3 Function Shower (4).png",
    ],
    ["Chrome", "Brushed Gold", "Graphite Grey", "Rose Gold"],
    ["JW-10165", "JW-10167", "JW-10168", "JW-10166"]
  ),
  ...createCategoryProducts(
    "3-function-ceiling-showers",
    "3 Function Shower (LED)",
    "JW-100",
    [98000, 98000, 98000],
    [
      "/showers/3 functionshower rain four mistspray&dualwaterfall (1).png",
      "/showers/3 functionshower rain four mistspray&dualwaterfall (2).png",
      "/showers/3 functionshower rain four mistspray&dualwaterfall (3).png",
    ],
    ["Graphite Grey", "Rose Gold", "Brushed Gold"],
    ["JW-10151", "JW-10150", "JW-10152"]
  ),
  ...createCategoryProducts(
    "3-function-ceiling-showers",
    "3 Function Shower (Rain, Mist & Large Waterfall)",
    "JW-100",
    [59500, 59500, 59500, 46500],
    [
      "/showers/3 Function Shower (Large Waterfall) (1).png",
      "/showers/3 Function Shower (Large Waterfall) (2).png",
      "/showers/3 Function Shower (Large Waterfall) (3).png",
      "/showers/3 Function Shower (Large Waterfall) (4).png",
    ],
    ["Graphite Grey", "Brushed Gold", "Rose Gold", "Chrome"],
    ["JW-10058", "JW-10056", "JW-10057", "JW-10055"]
  ),
  ...createCategoryProducts(
    "2-function-ceiling-showers",
    "2 Function Shower (Rain & Large Waterfall)",
    "JW-100",
    [49500, 36000],
    [
      "/showers/2 Function Shower (Large Waterfall).png",
      "/showers/2 Function Shower (Large Waterfall) (2).png",
    ],
    ["Rose Gold", "Chrome"],
    ["JW-10059", "JW-10060"]
  ),
    ...createCategoryProducts(
    "4-function-ceiling-showers",
    "4 Function Shower Rain, 6 Mist, 2 Waterfall and Water Column",
    "JW-100",
    [125000, 125000, 125000, 95000],
    [
      "/showers/4 Function Shower (1).png",
      "/showers/4 Function Shower (2).png",
      "/showers/4 Function Shower (3).png",
      "/showers/4 Function Shower (4).png",
    ],
    ["Graphite Grey", "Brushed Gold", "Rose Gold", "Chrome"],
    ["JW-10198", "JW-10012", "JW-10143", "JW-10142"]
  ),
  ...createCategoryProducts(
    "4-function-ceiling-showers",
    "4 functional shower rain +  4 mist  +4side flap rain + water column",
    "JW-100",
    [160000, 160000, 160000],
    [
      "/showers/Multifunctional Showers (1).png",
      "/showers/Multifunctional Showers (2).png",
      "/showers/Multifunctional Showers (3).png",
    ],
    ["Graphite Grey", "Rose Gold", "Brushed Gold"],
    ["JW-10153", "JW-10145", "JW-10144"]
  ),

  ...createCategoryProducts(
    "single-function-wall-showers",
    "Single Function Rain Shower",
    "JW-100",
    [13500, 13500, 13500],
    [
      "/showers/Single Function Shower (1).png",
      "/showers/Single Function Shower (2).png",
      "/showers/Single Function Shower (3).png",
    ],
    ["Brushed Gold", "Graphite Grey", "Rose Gold"],
    ["JW-10014", "JW-10016", "JW-10015"]
  ),
  ...createCategoryProducts(
    "single-function-wall-showers",
    "2 Function Wall Mounted Shower with Shower Arm",
    "JW-100",
    [9500, 6300, 9500],
    [
      "/showers/2 Function Wall Mounted Shower with Shower Arm (1).png",
      "/showers/2 Function Wall Mounted Shower with Shower Arm (2).png",
      "/showers/2 Function Wall Mounted Shower with Shower Arm (3).png",
    ],
    ["Brushed Gold", "Chrome", "Graphite Grey"],
    ["JW-10066", "JW-10065", "JW-10066"]
  ),

  ...createCategoryProducts(
    "single-function-wall-showers",
    "Single Function Round Shower 300x300mm",
    "JW-100",
    [13500],
    [
      "/shower category/single function shower round 13500.jpg",
    ],
    ["Chrome"],
    ["JW-10062"]
  ),
  ...createCategoryProducts(
    "single-function-wall-showers",
    "Single Function Round Shower 250x250mm",
    "JW-100",
    [8500],
    [
      "/shower category/single function shower round 13500.jpg",
    ],
    ["Chrome"],
    ["JW-10063"]
  ),
  ...createCategoryProducts(
    "waterfall-wall-showers",
    "Waterfall Shower System",
    "JW-100",
    [24500, 24500, 24500, 19500],
    [
      "/showers/Waterfall Showers (1).png",
      "/showers/Waterfall Showers (2).png",
      "/showers/Waterfall Showers (3).png",
      "/showers/Waterfall Showers (4).png",
    ],
    ["Brushed Gold", "Graphite Grey", "Rose Gold", "Chrome"],
    ["JW-10052", "JW-10054", "JW-10053", "JW-10051"]
  ),
  ...createCategoryProducts(
    "2-function-wall-showers",
    "2 function shower soft rain +waterfall",
    "JW-100",
    [54000, 54000, 54000],
    [
      "/showers/Multifunctional Showers (4).png",
      "/showers/Multifunctional Showers (5).png",
      "/showers/Multifunctional Showers (6).png",
    ],
    ["Graphite Grey", "Rose Gold", "Brushed Gold"],
    ["JW-10011", "JW-10094", "JW-10012"]
  ),
  ...createCategoryProducts(
    "2-function-wall-showers",
    "2 Function Wall Mounted Shower With Shower Arm",
    "JW-100",
    [23500, 23500],
    [
      "/shower category/multifunctional-wall-mounted-1.jpg",
      "/shower category/multifunctional-wall-mounted-2.jpg",
    ],
    ["Chrome", "Chrome"],
    ["JW-10068", "JW-10069"]
  ),
    ...createCategoryProducts(
    "4-function-hand-showers",
    "4 function hand shower",
    "JW-100",
    [2950],
    [
      "/showers/Multifunctional Wall Mounted Shower (2 Function) (7).png",
    ],
    [
      "Chrome",
    ],
    ["JW-10070"]
  ),

  ...createCategoryProducts(
    "2-function-hand-showers",
    "2 function hand shower",
    "JW-100",
    [3550],
    [
      "/4-function-handshower.png",
    ],
    ["Graphite Grey"],
    ["JW-10155"]
  ),
  ...createCategoryProducts(
    "2-function-hand-showers",
    "2 function hand shower",
    "JW-100",
    [2350],
    [
      "/4-function-handshower-2.png",
    ],
    ["Chrome"],
    ["JW-10156"]
  ),
  ...createCategoryProducts(
    "2-function-ceiling-showers",
    "2 function shower rain mist hexagon",
    "JW-100",
    [45000, 45000, 45000],
    [
      "/shower category/2 function shower rain mist 4  in hexagon shape  gold  45000.png",
      "/shower category/2 function shower rain mist 4  in hexagon shape  graphite grey 45000.png",
      "/shower category/2 function shower rain mist 4  in hexagon shape  rosegold  45000.png",
    ],
    ["Brushed Gold", "Graphite Grey", "Rose Gold"],
    ["JW-10213", "JW-10214", "JW-10212"]
  ),
  ...createCategoryProducts(
    "single-function-ceiling-showers",
    "single function shower rain celing mounted shower",
    "JW-100",
    [48000],
    [
      "/shower category/single function shower rain celing mounted shower with installation kit 48000.png",
    ],
    ["Chrome"],
    ["JW-10061"]
  ),

  ...createCategoryProducts(
    "single-function-hand-showers",
    "hand shower",
    "JW-100",
    [2250, 3250, 3250, 3250],
    [
      "/shower category/hand shower chrome 2250 (2).png",
      "/shower category/hand shower graphite grey   3250  (3).png",
      "/shower category/hand shower rose gold  3250  (1).png",
      "/shower category/hand shower rose gold  3250  (4).png",
    ],
    ["Chrome", "Graphite Grey", "Rose Gold", "Brushed Gold"],
    ["JW-10042", "JW-10115", "JW-10114", "JW-10113"]
  ),
  ...createCategoryProducts(
    "shower-set-with-hot-cold-controller",
    "shower set with hot & cold controller",
    "JW-100",
    [42000, 42000],
    [
      "/shower set with hot & cold controller.jpg",
      "/shower set with hot & cold controller1.jpg",
    ],
    ["Matte Black", "Chrome"],
    ["JW-10071", "JW-10072"]
  ),
  ...createCategoryProducts(
    "spot-wall-showers",
    "joy spot wall mounted shower (Rain)",
    "JW-100",
    [16500],
    [
      "/showers/Multifunctional Wall Mounted Shower (2 Function) (1).png",
    ],
    [
      "Graphite Grey",
    ],
    ["JW-10178"]
  ),
  ...createCategoryProducts(
    "spot-wall-showers",
    "joy spot wall mounted shower (Cascade)",
    "JW-100",
    [16500],
    [
      "/showers/Multifunctional Wall Mounted Shower (2 Function) (2).png",
    ],
    [
      "Graphite Grey",
    ],
    ["JW-10177"]
  ),
  ...createCategoryProducts(
    "spot-wall-showers",
    "joy spot wall mounted shower (Bubble)",
    "JW-100",
    [16500],
    [
      "/showers/Multifunctional Wall Mounted Shower (2 Function) (3).png",
    ],
    [
      "Graphite Grey",
    ],
    ["JW-10179"]
  ),

  // Multi-Functional Body Showers
  ...bodyJetsProducts,
  ...createCategoryProducts(
    "single-function-body-showers",
    "One Line Series Body Shower",
    "JW-100",
    [8500, 8500, 8500, 5500, 8500],
    [
      "/Body Showers/One Line Series (1).png",
      "/Body Showers/One Line Series (2).png",
      "/Body Showers/One Line Series (3).png",
      "/Body Showers/One Line Series (4).png",
      "/Body Showers/One Line Series (3).png",
    ],
    ["Brushed Gold", "Graphite Grey", "Rose Gold", "Chrome", "Brushed Rose Gold"],
    ["JW-10191", "JW-10182", "JW-10190", "JW-10189", "JW-10193"]
  ),
  ...createCategoryProducts(
    "single-function-body-showers",
    "Eminence Series Body Shower",
    "JW-100",
    [12200, 14750, 14750, 14750],
    [
      "/Body Showers/Eminence Series (1).png",
      "/Body Showers/Eminence Series (2).png",
      "/Body Showers/Eminence Series (3).png",
      "/Body Showers/Eminence Series (4).png",
    ],
    ["Chrome", "Brushed Gold", "Graphite Grey", "Rose Gold"],
    ["JW-10185", "JW-10187", "JW-10188", "JW-10186"]
  ),

  // Diverters
  
  
    ...createCategoryProducts(
      "4-function-diverters",
      "4 Function Joy Water Diverter",
      "JW-4FD",
      [79000, 92000, 92000, 92000],
      [
        "/diverters/6 Function Diverter (8).png",
        "/diverters/6 Function Diverter (5).png",
        "/diverters/6 Function Diverter (6).png",
        "/diverters/6 Function Diverter (7).png"
      ],
      ["Chrome", "Brushed Gold", "Graphite Grey", "Rose Gold"],
      ["JW-10169", "JW-10171", "JW-10170", "JW-10172"]
    ),
  ...createCategoryProducts(
    "5-function-diverters",
    "5 Function Diverter",
    "JW-100",
    [108000, 126000, 126000, 126000],
    [
      "/diverters/5 Function Diverter (1).png",
      "/diverters/5 Function Diverter (4).png",
      "/diverters/5 Function Diverter (2).png",
      "/diverters/5 Function Diverter (3).png",
    ],
    ["Chrome", "Rose Gold", "Brushed Gold", "Graphite Grey"],
    ["JW-10001", "JW-10003", "JW-10002", "JW-10004"]
  ),
  ...createCategoryProducts(
    "6-function-diverters",
    "6 Function Diverter",
    "JW-100",
    [112000, 138000, 138000, 138000, 138000],
    [
      "/diverters/6 Function Diverter (4).png",
      "/diverters/6 Function Diverter (3).png",
      "/diverters/6 Function Diverter (1).png",
      "/diverters/6 Function Diverter (2).png",
      "/diverters/6 Function Diverter (3).png",
    ],
    ["Chrome", "Rose Gold", "Brushed Gold", "Graphite Grey", "Brushed Rose Gold"],
    ["JW-10173", "JW-10176", "JW-10175", "JW-10174", "JW-10201"]
  ),
  ...createCategoryProducts(
      "3-function-click-diverters",
      "Thermostatic Diverter (Three Outlet)",
      "JW-100",
      [54000, 63000, 63000, 63000],
      [
        "/diverters/Thermostatic Diverter (1).png",
        "/diverters/Thermostatic Diverter (2).png",
        "/diverters/Thermostatic Diverter (3).png",
        "/diverters/Thermostatic Diverter (4).png",
      ],
      ["Chrome", "Rose Gold", "Brushed Gold", "Graphite Grey"],
      ["JW-10007", "JW-10009", "JW-10008", "JW-10010"]
    ),
  ...createCategoryProducts(
    "3-function-lever-diverters",
    "Lever Diverter (Three Outlet)",
    "JW-100",
    [23000, 27000, 27000],
    [
      "/diverters/Lever Diverter Three Outlet (1).png",
      "/diverters/Lever Diverter Three Outlet (2).png",
      "/diverters/Lever Diverter Three Outlet (3).png",
    ],
    ["Chrome", "Rose Gold", "Brushed Gold"],
    ["JW-10037", "JW-10036", "JW-10035"]
  ),



  // Basin Mixers
  ...createCategoryProducts(
    "round-controller-basin-mixer",
    "Round Controller Basin Mixer",
    "JW-100",
    [20500, 20500, 20500],
    [
      "/basinmixer/Round Controller Basin Mixer (3).png",
      "/basinmixer/Round Controller Basin Mixer (1).png",
      "/basinmixer/Round Controller Basin Mixer (2).png",
    ],
    ["Rose Gold", "Brushed Gold", "Graphite Grey"],
    ["JW-10158", "JW-10159", "JW-10160"]
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
    ["Rose Gold", "Brushed Gold", "Graphite Grey"],
    ["JW-10158", "JW-10159", "JW-10160"]
  ),
  ...createCategoryProducts(
    "lever-basin-mixer",
    "Lever Basin Mixer",
    "JW-100",
    [19500, 23500, 23500, 23500, 23500],
    [
      "/basinmixer/Lever Basin Mixer (1).png",
      "/basinmixer/Lever Basin Mixer (4).png",
      "/basinmixer/Lever Basin Mixer (2).png",
      "/basinmixer/Lever Basin Mixer (3).png",
      "/basinmixer/Lever Basin Mixer (4).png",
    ],
    ["Chrome", "Rose Gold", "Brushed Gold", "Graphite Grey", "Brushed Rose Gold"],
    ["JW-10079", "JW-10082", "JW-10080", "JW-10081", "JW-10203"]
  ),
  ...createCategoryProducts(
    "table-mounted-basin-mixer",
    "Waterfall Flow Basin Mixer",
    "JW-100",
    [21000, 23500, 23500, 23500],
    [
      "/basinmixer/Table Mounted Basin Mixer (4).png",
      "/basinmixer/Table Mounted Basin Mixer (3).png",
      "/basinmixer/Table Mounted Basin Mixer (1).png",
      "/basinmixer/Table Mounted Basin Mixer (2).png",
    ],
    ["Chrome", "Rose Gold", "Brushed Gold", "Graphite Grey"],
    ["JW-10075", "JW-10077", "JW-10076", "JW-10078"]
  ),
  ...createCategoryProducts(
    "progressive-controller-waterfall-basin-mixer",
    "Progressive Controller Waterfall Basin Mixer",
    "JW-100",
    [22500, 27500, 27500, 27500],
    [
      "/basinmixer/Progressive Controller Waterfall Basin Mixer.png",
      "/basinmixer/Progressive Controller Waterfall Basin Mixer (1).png",
      "/basinmixer/Progressive Controller Waterfall Basin Mixer (2).png",
      "/basinmixer/Progressive Controller Waterfall Basin Mixer (3).png",
    ],
    ["Chrome", "Rose Gold", "Brushed Gold", "Graphite Grey"],
    ["JW-10018", "JW-10020", "JW-10019", "JW-10021"]
  ),
  ...ceilingMountedMixerProducts,

    {
    id: "multifunctional-wall-mounted-1",
    slug: "multifunctional-wall-mounted-1",
    name: "shower rain+mist 2 function wall mounted shower with shower arm",
    category: "wall-mounted-shower",
    finish: "Chrome",
    price: 23500,
    code: "JW-10042",
    image: "/shower category/multifunctional-wall-mounted-1.jpg",
  },
  {
    id: "multifunctional-wall-mounted-2",
    slug: "multifunctional-wall-mounted-2",
    name: "shower waterfall + rain 2 function wall mounted shower with shower arm",
    category: "wall-mounted-shower",
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
    name: "Wall Mounted Liver Pointed",
    category: "premium-basin-mixer",
    finish: "Rose Gold",
    price: 16000,
    code: "JW-10161",
    image: "/premium basin mixer/spout basin mixer with lever controled 16000.png",
  },
  {
    id: "premium-basin-mixer-6",
    slug: "premium-basin-mixer-6",
    name: "Tall Body Basin Mixer",
    category: "premium-basin-mixer",
    finish: "Rose Gold",
    price: 22500,
    code: "JW-10157",
    image: "/premium basin mixer/table body  floor mounted basin mixer 22500.png",
  },
  {
    id: "premium-basin-mixer-7",
    slug: "premium-basin-mixer-7",
    name: "Tall Body Basin Mixer",
    category: "premium-basin-mixer",
    finish: "Chrome",
    price: 20500,
    code: "JW-10074",
    image: "/premium basin mixer/tall body floor mounted basin mixer 20500.png",
  },
  
    // Bathroom Accessories Series
    {
      slug: "pyramid-series",
      title: "Pyramid Series",
      group: "bathroom-accessories",
      description: "Premium Pyramid Series bathroom accessories in various finishes.",
      features: ["11 Years Unmatched Assurance"]
    },
    {
      slug: "signature-series",
      title: "Signature Series",
      group: "bathroom-accessories",
      description: "Premium Signature Series bathroom accessories.",
      features: ["11 Years Unmatched Assurance"]
    },
    {
      slug: "fortune-series",
      title: "Fortune Series",
      group: "bathroom-accessories",
      description: "Premium Fortune Series bathroom accessories.",
      features: ["11 Years Unmatched Assurance"]
    },
    {
      slug: "solitaire-series",
      title: "Solitaire Series",
      group: "bathroom-accessories",
      description: "Premium Solitaire Series bathroom accessories.",
      features: ["11 Years Unmatched Assurance"]
    },

    // Sanitaryware
  ...sanitarywareProducts,

  // Others / Accessories
    ...createCategoryProducts("abs-hook", "ABS Hook", "JW-100", [1750, 1750, 990, 1750], [
      "/abs hook/abs hook (1) gold 1750.png",
      "/abs hook/abs hook (2) graphite grey 1750.png",
      "/abs hook/abs hook (3) chrome 990.png",
      "/abs hook/abs hook (4) rose gold 1750.png"
    ], ["Brushed Gold", "Graphite Grey", "Chrome", "Rose Gold"],
    ["JW-10182", "JW-10181", "JW-10180", "JW-10183"]),

    ...createCategoryProducts("button-spout", "Button Spout", "JW-100", [7500, 7500, 4500, 7500], [
    "/OTHERS/Bathroom Accessories & Fittings (9).png",
    "/OTHERS/Bathroom Accessories & Fittings (10).png",
    "/OTHERS/Bathroom Accessories & Fittings (12).png",
    "/OTHERS/Bathroom Accessories & Fittings (11).png",
  ], ["Brushed Gold", "Graphite Grey", "Chrome", "Rose Gold"],
  ["JW-10048", "JW-10050", "JW-10047", "JW-10049"]),
  ...createCategoryProducts("angle-valve", "Angle Valve", "JW-100", [1800, 1800, 650, 1800], [
    "/OTHERS/Bathroom Accessories & Fittings (13).png",
    "/OTHERS/Bathroom Accessories & Fittings (14).png",
    "/OTHERS/Bathroom Accessories & Fittings (16).png",
    "/OTHERS/Bathroom Accessories & Fittings (15).png",
  ], ["Brushed Gold", "Graphite Grey", "Chrome", "Rose Gold"],
  ["JW-10022", "JW-10024", "JW-10083", "JW-10023"]),
  ...createCategoryProducts("bib-cock", "Bib Cock", "JW-100", [7200, 7200, 6500, 7200], [
    "/OTHERS/Bathroom Accessories & Fittings (5).png",
    "/OTHERS/Bathroom Accessories & Fittings (6).png",
    "/OTHERS/Bathroom Accessories & Fittings (8).png",
    "/OTHERS/Bathroom Accessories & Fittings (7).png",
  ], ["Brushed Gold", "Graphite Grey", "Chrome", "Rose Gold"],
  ["JW-10209", "JW-10211", "JW-10210", "JW-10208"]),
  ...createCategoryProducts("shower-arm", "Shower Arm", "JW-100", [4850, 4850, 2700, 4850], [
    "/OTHERS/Bathroom Accessories & Fittings (25).png",
    "/OTHERS/Bathroom Accessories & Fittings (26).png",
    "/OTHERS/Bathroom Accessories & Fittings (27).png",
    "/OTHERS/Bathroom Accessories & Fittings (28).png",
  ], ["Brushed Gold", "Graphite Grey", "Chrome", "Rose Gold"],
  ["JW-10106", "JW-10108", "JW-10105", "JW-10107"]),
  ...createCategoryProducts("shower-holder", "Shower Holder", "JW-100", [645, 645, 350, 645], [
    "/OTHERS/Bathroom Accessories & Fittings.png",
    "/OTHERS/Bathroom Accessories & Fittings (29).png",
    "/OTHERS/Bathroom Accessories & Fittings (31).png",
    "/OTHERS/Bathroom Accessories & Fittings (30).png",
  ], ["Brushed Gold", "Graphite Grey", "Chrome", "Rose Gold"],
  ["JW-10116", "JW-10118", "JW-10073", "JW-10117"]),
  ...createCategoryProducts("wall-outlet", "Wall Outlet", "JW-100", [3500, 3500, 2250, 3500], [
    "/OTHERS/Bathroom Accessories & Fittings (1).png",
    "/OTHERS/Bathroom Accessories & Fittings (2).png",
    "/OTHERS/Bathroom Accessories & Fittings (4).png",
    "/OTHERS/Bathroom Accessories & Fittings (3).png",
  ], ["Brushed Gold", "Graphite Grey", "Chrome", "Rose Gold"],
  ["JW-10030", "JW-10032", "JW-10029", "JW-10031"]),
  ...createCategoryProducts("pop-up-coupling", "Pop-up Coupling", "JW-100", [2950, 2950, 1350, 2950], [
    "/OTHERS/Bathroom Accessories & Fittings (36).png",
    "/OTHERS/Bathroom Accessories & Fittings (37).png",
    "/OTHERS/Bathroom Accessories & Fittings (39).png",
    "/OTHERS/Bathroom Accessories & Fittings (38).png",
  ], ["Brushed Gold", "Graphite Grey", "Chrome", "Rose Gold"],
  ["JW-10085", "JW-10087", "JW-10084", "JW-10086"]),
  ...createCategoryProducts("bottle-trap", "Bottle Trap", "JW-100", [5700, 5700, 1450, 5700], [
    "/OTHERS/Bathroom Accessories & Fittings (32).png",
    "/OTHERS/Bathroom Accessories & Fittings (33).png",
    "/OTHERS/Bathroom Accessories & Fittings (35).png",
    "/OTHERS/Bathroom Accessories & Fittings (34).png",
  ], ["Brushed Gold", "Graphite Grey", "Chrome", "Rose Gold"],
  ["JW-10110", "JW-10112", "JW-10109", "JW-10111"]),
  ...createCategoryProducts("shower-hose-tube", "Shower Hose Tube", "JW-100", [1650, 1650, 750, 1650], [
    "/OTHERS/Bathroom Accessories & Fittings (17).png",
    "/OTHERS/Bathroom Accessories & Fittings (18).png",
    "/OTHERS/Bathroom Accessories & Fittings (20).png",
    "/OTHERS/Bathroom Accessories & Fittings (19).png",
  ], ["Brushed Gold", "Graphite Grey", "Chrome", "Rose Gold"],
  ["JW-10120", "JW-10122", "JW-10119", "JW-10121"]),
  ...createCategoryProducts("health-faucet", "Health Faucet Full Set", "JW-100", [3950, 3950, 2850, 3950], [
    "/OTHERS/Bathroom Accessories & Fittings (21).png",
    "/OTHERS/Bathroom Accessories & Fittings (22).png",
    "/OTHERS/Bathroom Accessories & Fittings (24).png",
    "/OTHERS/Bathroom Accessories & Fittings (23).png",
  ], ["Brushed Gold", "Graphite Grey", "Chrome", "Rose Gold"],
  ["JW-10026", "JW-10028", "JW-10025", "JW-10027"]),

  
  // Shower Drainer - 750 x 80mm
  { id: "shower-drainer-1", slug: "shower-drainer-1", name: "Shower Drainer", category: "tile-drainers", finish: "SS Matte Finish", price: 11500, code: "JW-10130", image: "/tile drainers/Shower-Drainer-ss-matte-finish-11500-1.png", size: "750 x 80mm" },
  { id: "shower-drainer-2", slug: "shower-drainer-2", name: "Shower Drainer", category: "tile-drainers", finish: "Brushed Gold Finish", price: 13500, code: "JW-10132", image: "/tile drainers/Shower-Drainer-brushed-gold-finish-13500-2.png", size: "750 x 80mm" },
  { id: "shower-drainer-3", slug: "shower-drainer-3", name: "Shower Drainer", category: "tile-drainers", finish: "Graphite Grey Finish", price: 13500, code: "JW-10133", image: "/tile drainers/Shower-Drainer-graphite-grey-finish-13500-3.png", size: "750 x 80mm" },
  { id: "shower-drainer-4", slug: "shower-drainer-4", name: "Shower Drainer", category: "tile-drainers", finish: "Rose Gold Finish", price: 13500, code: "JW-10131", image: "/tile drainers/Shower-Drainer-rose-gold-finish-13500-4.png", size: "750 x 80mm" },
  
  // Shower Drainer - 600 x 100mm
  { id: "shower-drainer-5", slug: "shower-drainer-5", name: "Shower Drainer", category: "tile-drainers", finish: "SS Matte Finish", price: 4750, code: "JSC-602", image: "/tile drainers/shower-drainer-ss-matte-finish-4750.png", size: "600 x 100mm" },
  { id: "shower-drainer-6", slug: "shower-drainer-6", name: "Shower Drainer", category: "tile-drainers", finish: "Black Finish", price: 7200, code: "JW-BL-602", image: "/tile drainers/shower-drainer-black-finish-7200.png", size: "600 x 100mm" },
  { id: "shower-drainer-7", slug: "shower-drainer-7", name: "Shower Drainer", category: "tile-drainers", finish: "Brushed Gold Finish", price: 7200, code: "JSC-G-602", image: "/tile drainers/shower-drainer-brushed-gold-finish-7200.png", size: "600 x 100mm" },
  { id: "shower-drainer-8", slug: "shower-drainer-8", name: "Shower Drainer", category: "tile-drainers", finish: "Rose Gold Finish", price: 7200, code: "JW-RG-602", image: "/tile drainers/shower-drainer-rose-gold-finish-7200.png", size: "600 x 100mm" },
  
  // SS 304 Shower Channel
  { id: "shower-drainer-9", slug: "shower-drainer-9", name: "SS 304 Shower Channel", category: "tile-drainers", finish: "SS 304", price: 3510, code: "JSC-401", image: "/tile drainers/ss-340-shower-channel-wave-shower-drainer-3510.png", size: "450 x 100 x 20mm" },
  { id: "shower-drainer-10", slug: "shower-drainer-10", name: "SS 304 Shower Channel", category: "tile-drainers", finish: "SS 304", price: 4320, code: "JSC-402", image: "/tile drainers/ss-340-shower-channel-wave-shower-drainer-3510.png", size: "600 x 100 x 20mm" },
  { id: "shower-drainer-11", slug: "shower-drainer-11", name: "SS 304 Shower Channel", category: "tile-drainers", finish: "SS 304", price: 6750, code: "JSC-403", image: "/tile drainers/ss-340-shower-channel-wave-shower-drainer-3510.png", size: "900 x 100 x 20mm" },
  { id: "shower-drainer-12", slug: "shower-drainer-12", name: "SS 304 Shower Channel", category: "tile-drainers", finish: "SS 304", price: 9900, code: "JSC-404", image: "/tile drainers/ss-340-shower-channel-wave-shower-drainer-3510.png", size: "1200 x 100 x 20mm" },
  { id: "shower-drainer-13", slug: "shower-drainer-13", name: "SS 304 Shower Channel", category: "tile-drainers", finish: "SS 304", price: 5580, code: "JSC-405", image: "/tile drainers/ss-340-shower-channel-wave-shower-drainer-3510.png", size: "750 x 100 x 20mm" },

  // Tile Drainer - 150 x 150mm (JW-10134 to JW-10141 series)
  { id: "tiles-drainer-1", slug: "tiles-drainer-1", name: "Tile Drainer", category: "tile-drainers", finish: "SS Matte Finish", price: 4250, code: "JW-10134", image: "/tile drainers/tile-drainer-ss-matte-finish-4250.png", size: "150 x 150mm" },
  { id: "tiles-drainer-2", slug: "tiles-drainer-2", name: "Tile Drainer", category: "tile-drainers", finish: "Brushed Gold Finish", price: 5750, code: "JW-10135", image: "/tile drainers/tile-drainer-brushed-gold-finish-5750.png", size: "150 x 150mm" },
  { id: "tiles-drainer-3", slug: "tiles-drainer-3", name: "Tile Drainer", category: "tile-drainers", finish: "Graphite Grey Finish", price: 5750, code: "JW-10137", image: "/tile drainers/tile-drainer-graphite-grey-finish-5750.png", size: "150 x 150mm" },
  { id: "tiles-drainer-4", slug: "tiles-drainer-4", name: "Tile Drainer", category: "tile-drainers", finish: "Rose Gold Finish", price: 5750, code: "JW-10136", image: "/tile drainers/tile-drainer-rose-gold-finish-5750.png", size: "150 x 150mm" },
  
  // Tile Drainers Marbles Side Hole - 600 x 80mm (JW-10122 to JW-10125 series)
  { id: "tiles-drainer-5", slug: "tiles-drainer-5", name: "Tile Drainers Marbles Side Hole", category: "tile-drainers", finish: "SS Matte Finish", price: 8800, code: "JW-10122", image: "/tile drainers/tile-drainers-marbles-side-hole-graphite-ss-matte-finish-14500.png", size: "600 x 80mm" },
  { id: "tiles-drainer-6", slug: "tiles-drainer-6", name: "Tile Drainers Marbles Side Hole", category: "tile-drainers", finish: "Brushed Gold Finish", price: 10800, code: "JW-10123", image: "/tile drainers/tile-drainers-marbles-side-hole-brushed-gold-finished-13500.png", size: "600 x 80mm" },
  { id: "tiles-drainer-7", slug: "tiles-drainer-7", name: "Tile Drainers Marbles Side Hole", category: "tile-drainers", finish: "Graphite Grey Finish", price: 10800, code: "JW-10125", image: "/tile drainers/tile-drainers-marbles-side-hole-graphite-grey-finish-15500-1.png", size: "600 x 80mm" },
  { id: "tiles-drainer-8", slug: "tiles-drainer-8", name: "Tile Drainers Marbles Side Hole", category: "tile-drainers", finish: "Rose Gold Finish", price: 10800, code: "JW-10124", image: "/tile drainers/tile-drainers-marbles-side-hole-rose-gold-finish-15500-2.png", size: "600 x 80mm" },
  
  // Tile Drainer - 150 x 150mm (Additional variants)
  { id: "tiles-drainer-12", slug: "tiles-drainer-12", name: "Tile Drainer", category: "tile-drainers", finish: "Brushed Gold Finish", price: 5350, code: "JW-10140", image: "/tile drainers/tile-drainer-brushed-gold-finish-5750.png", size: "150 x 150mm" },
  { id: "tiles-drainer-13", slug: "tiles-drainer-13", name: "Tile Drainer", category: "tile-drainers", finish: "Rose Gold Finish", price: 5350, code: "JW-10139", image: "/tile drainers/tile-drainer-rose-gold-finish-5750.png", size: "150 x 150mm" },
  { id: "tiles-drainer-14", slug: "tiles-drainer-14", name: "Tile Drainer", category: "tile-drainers", finish: "Graphite Grey Finish", price: 5350, code: "JW-10141", image: "/tile drainers/tile-drainer-ss-matte-finish-4250.png", size: "150 x 150mm" },
  
  // Tiles Drainers - 150 x 150mm (JTD series)
  { id: "tiles-drainer-9", slug: "tiles-drainer-9", name: "Tiles Drainers", category: "tile-drainers", finish: "Gold Finish", price: 2520, code: "JTD-G-506", image: "/tile drainers/tiles-drainers-gold-finish-2520.png", size: "150 x 150mm" },
  { id: "tiles-drainer-10", slug: "tiles-drainer-10", name: "Tiles Drainers", category: "tile-drainers", finish: "Rose Gold Finish", price: 2520, code: "JTD-RG-506", image: "/tile drainers/tiles-drainers-rose-gold-finish-2520.jpg", size: "150 x 150mm" },
  { id: "tiles-drainer-11", slug: "tiles-drainer-11", name: "Tiles Drainers", category: "tile-drainers", finish: "Chrome Finish", price: 1630, code: "JTD-506", image: "/tile drainers/Code-JTD-506-1630.png", size: "150 x 150mm" },

  // Floor Drainer - 150 x 150mm (JGR series)
  { id: "floor-drainer-1", slug: "floor-drainer-1", name: "Floor Drainer", category: "tile-drainers", finish: "SS Matte Finish", price: 585, code: "JGR-003", image: "/tile drainers/CODE-JGR--003-585.png", size: "150 x 150mm" },
  { id: "floor-drainer-2", slug: "floor-drainer-2", name: "Floor Drainer", category: "tile-drainers", finish: "SS Matte Finish", price: 585, code: "JGR-002", image: "/tile drainers/floor-drainer-ss-matte-finish-585.png", size: "150 x 150mm" },
  { id: "floor-drainer-3", slug: "floor-drainer-3", name: "Floor Drainer", category: "tile-drainers", finish: "Black Finish", price: 1650, code: "JGR-BL-002", image: "/tile drainers/floor-drainer-black-finish-1650.png", size: "150 x 150mm" },
  { id: "floor-drainer-4", slug: "floor-drainer-4", name: "Floor Drainer", category: "tile-drainers", finish: "Brushed Gold Finish", price: 1650, code: "JGR-G-002", image: "/tile drainers/floor-drainer-brushed-gold-finish-1650.png", size: "150 x 150mm" },
  { id: "floor-drainer-5", slug: "floor-drainer-5", name: "Floor Drainer", category: "tile-drainers", finish: "Rose Gold Finish", price: 1650, code: "JGR-RG-002", image: "/tile drainers/floor-drainer-rose-gold-finish-1650.png", size: "150 x 150mm" },

  // Mirrors (62 authentic products from Joy water mirror.pdf across 6 collections)
  ...mirrorProducts,
  ...bathroomAccessoriesProducts,
  ...swatchSeriesProducts,
  ...pyramidSeriesProducts,
  ...signatureSeriesProducts,
  ...fortuneSeriesProducts,
  ...solitaireSeriesProducts,
  ...unitySeriesProducts,
  ...supremeSeriesProducts,
  ...sigmaSeriesProducts,
  ...irisSeriesProducts,
  ...oysterSeriesProducts,
  ...ovilioSeriesProducts,
  ...graceChromeSeriesProducts,
  ...graceGoldSeriesProducts,
  ...graceRoseGoldSeriesProducts,
  ...graceBlackSeriesProducts,
  ...rectusSeriesProducts,
  ...rectusGoldSeriesProducts,
  ...rectusRoseGoldSeriesProducts,
  ...rectusBlackSeriesProducts,
  ...foldingRackSeriesProducts,
  ...toiletBrushHolderProducts,
  ...shelfSeriesProducts,
  ...khuttiAccessoriesProducts,
  ...makeupMirrorProducts,
];

export const products: Product[] = [
  ...realCategoryProducts,
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getProductsByCategory(slug: string) {
  // First try exact match
  const exact = realCategoryProducts.filter((p) => p.category === slug);
  if (exact.length > 0) {
    return exact;
  }
  
  // If no exact match, check if this is a parent category and get all subcategory products
  const category = getCategory(slug);
  if (category) {
    const group = category.group;
    
    // Define parent-to-subcategory mapping
    const subcategoryMap: Record<string, string[]> = {
      "ceiling-mounted-shower": ["2-function-ceiling-showers", "3-function-ceiling-showers", "4-function-ceiling-showers", "single-function-ceiling-showers"],
      "wall-mounted-shower": ["2-function-wall-showers", "single-function-wall-showers", "spot-wall-showers", "waterfall-wall-showers"],
      "body-jets-body-showers": ["2-function-body-jets", "single-function-body-showers"],
      "hand-showers": ["4-function-hand-showers", "2-function-hand-showers", "single-function-hand-showers"],
      "diverters": ["6-function-diverters", "5-function-diverters", "4-function-diverters", "3-function-click-diverters", "3-function-lever-diverters"],
      "basin-mixers": ["round-controller-basin-mixer", "thermostatic-click-controller-basin-mixer", "lever-basin-mixer", "table-mounted-basin-mixer", "ceiling-mounted-basin-mixer", "premium-basin-mixer"],
    };
    
    // If this is a parent category, include all subcategory products
    if (subcategoryMap[slug]) {
      const allProducts = realCategoryProducts.filter((p) => 
        p.category === slug || subcategoryMap[slug].includes(p.category)
      );
      if (allProducts.length > 0) {
        return allProducts;
      }
    }
  }
  
  return products.filter((p) => p.category === slug);
}



export const megaMenu = {
  "Sanitaryware": {
    "Sanitaryware": [
      "ceramic-wash-basins",
      "glass-wash-basins",
      "stainless-steel-wash-basins",
      "ceramic-pedestal",
      "stone-basin",
      "stone-pedestal",
      "wall-hung-wc"
    ]
  },
  "Showering": {
    "Ceiling Mounted Showers": [
      "2-function-ceiling-showers",
      "3-function-ceiling-showers",
      "4-function-ceiling-showers",
      "single-function-ceiling-showers"
    ],
    "Wall Mounted Showers": [
      "2-function-wall-showers",
      "single-function-wall-showers",
      "spot-wall-showers",
      "waterfall-wall-showers"
    ],
    "Body Jets & Body Showers": [
      "2-function-body-jets",
      "single-function-body-showers"
    ],
    "Hand Showers": [
      "4-function-hand-showers",
      "2-function-hand-showers",
      "single-function-hand-showers"
    ]
  },
  "Diverters & Mixers": {
    "Diverters": [
      "6-function-diverters",
      "5-function-diverters",
      "4-function-diverters",
      "3-function-click-diverters",
      "3-function-lever-diverters"
    ],
    "Basin Mixers": [
      "round-controller-basin-mixer",
      "thermostatic-click-controller-basin-mixer",
      "lever-basin-mixer",
      "table-mounted-basin-mixer",
      "ceiling-mounted-basin-mixer",
      "premium-basin-mixer"
    ],
    "Drainers": [
      "tile-drainers"
    ],
    "Accessories": [
      "abs-hook",
      "button-spout",
      "angle-valve",
      "bib-cock",
      "shower-arm",
      "shower-holder"
    ],
    "Fittings": [
      "wall-outlet",
      "pop-up-coupling",
      "bottle-trap",
      "shower-hose-tube",
      "health-faucet"
    ]
  },
  "Bath Accessories": {
    "Premium Series": [
      "pyramid-series",
      "signature-series",
      "fortune-series",
      "solitaire-series",
      "unity-series",
      "supreme-chrome",
      "supreme-gold",
      "supreme-rose-gold"
    ],
    "Designer Collections": [
      "swatch-chrome",
      "swatch-gold",
      "swatch-rose-gold",
      "sigma-gold",
      "sigma-rose-gold",
      "iris-chrome",
      "iris-gold"
    ],
    "Exclusive Ranges": [
      "oyster-chrome",
      "oyster-rose-gold",
      "oyster-black",
      "ovilio-chrome",
      "grace-chrome",
      "grace-gold",
      "grace-rose-gold",
      "grace-black",
      "rectus-chrome",
      "rectus-gold",
      "rectus-rose-gold",
      "rectus-black",
      "folding-rack",
      "toilet-brush-holder",
      "shelf",
      "khutti-accessories",
      "makeup-mirror",
      "soap-dispenser"
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
