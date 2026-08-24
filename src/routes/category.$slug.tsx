import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ProductCard } from "@/components/site/ProductCard";
import { getCategory, getProductsByCategory, categories, type Product } from "@/lib/catalog/data";

export const Route = createFileRoute("/category/$slug")({
  loader: ({ params }) => {
    const cat = getCategory(params.slug);
    if (!cat) throw notFound();
    return { cat, products: getProductsByCategory(params.slug) };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.cat.title} — Joy Water` },
          { name: "description", content: loaderData.cat.description },
          { property: "og:title", content: `${loaderData.cat.title} — Joy Water` },
          { property: "og:description", content: loaderData.cat.description },
        ]
      : [],
  }),
  component: CategoryPage,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="max-w-3xl mx-auto px-8 py-32 text-center">
        <h1 className="font-serif text-4xl mb-4">Category not found</h1>
        <Link to="/products" className="text-gold underline">
          View all products
        </Link>
      </div>
    </SiteLayout>
  ),
});

function getHeroSectionImage(slug: string): string {
  const map: Record<string, string> = {
    // Showers
    "2-function-shower-rain-mist": "/HEROSECTIONIMAGES/2 Function ShowerHERO.jpg",
    "3-function-shower-rain-mist-dual-waterfall": "/HEROSECTIONIMAGES/3 Function ShowerHERO.jpg",
    "multifunctional-ceiling-shower-3-function": "/HEROSECTIONIMAGES/3 Function ShowerHERO.jpg",
    "3-function-shower-rain-mist-2-waterfall-led": "/HEROSECTIONIMAGES/3 Function ShowerHERO.jpg",
    "3-function-shower-rain-mist-large-single-waterfall": "/HEROSECTIONIMAGES/3 Function Shower (Large Waterfall).png",
    "2-function-shower-rain-large-single-waterfall": "/HEROSECTIONIMAGES/2 Function Shower (Large Waterfall).jpg",
    "4-function-shower-chromotherapy": "/HEROSECTIONIMAGES/4FUNCTIONSHOWER.png",
    "single-function-shower-rain": "/HEROSECTIONIMAGES/single-function-shower-rain.jpg",
    "waterfall-showers": "/HEROSECTIONIMAGES/waterfall-showers.jpg",
    "2-function-wall-mounted-shower-arm": "/HEROSECTIONIMAGES/2-function-wall-mounted-shower-arm.jpg",
    "body-jets-2-function": "/HEROSECTIONIMAGES/body-jets-2-function.jpg",
    "one-line-series": "/HEROSECTIONIMAGES/One Line Series.jpg",
    "eminence-series": "/HEROSECTIONIMAGES/Eminence Series.jpg",
    "4-function-hand-shower": "/HEROSECTIONIMAGES/MULTIFUNCTIONALSHOWER.png",
    "4-functional-shower-rain-4-mist-4side-flap-rain-water-column": "/HEROSECTIONIMAGES/MULTIFUNCTIONALSHOWER.png",
    "2-function-shower-soft-rain-waterfall": "/HEROSECTIONIMAGES/MULTIFUNCTIONALSHOWER.png",
    "2-function-shower-rain-mist-hexagon": "/shower category/2 function shower rain mist 4  in hexagon shape  image for hero section  (1).jpg",
    "single-function-shower-rain-ceiling-mounted": "/HEROSECTIONIMAGES/single-function-shower-rain.jpg",
    "overhead-abs-shower": "/HEROSECTIONIMAGES/waterfall-showers.jpg",
    "hand-shower": "/HEROSECTIONIMAGES/2-function-wall-mounted-shower-arm.jpg",
    "shower-set-with-hot-cold-controller": "/HEROSECTIONIMAGES/2-function-wall-mounted-shower-arm.jpg",
    "joy-spot-wall-mounted-shower": "/HEROSECTIONIMAGES/MULTIFUNCTIONALSHOWER.png",
    "multifunctional-showers": "/HEROSECTIONIMAGES/MULTIFUNCTIONALSHOWER.png",

    // Diverters
    "5-function-diverter": "/HEROSECTIONIMAGES/5 Function Diverter.png",
    "6-function-diverter": "/HEROSECTIONIMAGES/6 Function Diverter.png",
    "thermostatic-diverter-three-outlet": "/HEROSECTIONIMAGES/Thermostatic Diverter.jpg",
    "lever-diverter-three-outlet": "/HEROSECTIONIMAGES/Lever Diverter.jpg",

    // Tile Insert Drainers
    "tile-insert-drain": "/HEROSECTIONIMAGES/Tile Insert Drain.jpg",
    "tile-insert-125x125": "/HEROSECTIONIMAGES/Tile Insert Drain.jpg",

    // Basin Mixers
    "round-controller-basin-mixer": "/HEROSECTIONIMAGES/Round Controller Basin Mixer.png",
    "thermostatic-click-controller-basin-mixer": "/HEROSECTIONIMAGES/thermostatic-click-controller-basin-mixer.png",
    "lever-basin-mixer": "/HEROSECTIONIMAGES/Lever Basin Mixer.png",
    "table-mounted-basin-mixer": "/HEROSECTIONIMAGES/Table Mounted Basin Mixer.png",
    "progressive-controller-waterfall-basin-mixer": "/HEROSECTIONIMAGES/Progressive Controller Waterfall Basin Mixer.jpg",
    "ceiling-mounted-basin-mixer": "/HEROSECTIONIMAGES/Ceiling Mounted Basin Mixer.png",

    // Sanitaryware
    "sanitaryware-basins": "/HEROSECTIONIMAGES/Sanitaryware Collections.jpg",
    "stone-is-the-king-of-luxury": "/HEROSECTIONIMAGES/PREMIUMSANITARYWARE.jpg",
    "wall-hung-wc": "/wallhungwc/wallhungwc.jpg",
    "sanitaryware-collections": "/HEROSECTIONIMAGES/Sanitaryware Collections.jpg",
    "premium-sanitaryware-collections": "/HEROSECTIONIMAGES/PREMIUMSANITARYWARE.jpg",

    // Accessories
    "bathroom-accessories-fittings": "/HEROSECTIONIMAGES/Bathroom Accessories & Fittings.jpg",
    "others": "/OTHERS/Bathroom Accessories & Fittings.png",

    // Mirrors
    "led-mirrors": "/HEROSECTIONIMAGES/LED Mirrors.jpg",
    "3d-mirrors": "/HEROSECTIONIMAGES/3D Mirrors.jpg",
    "metal-led-mirrors": "/HEROSECTIONIMAGES/Metal LED Mirrors.jpg",
    "metal-mirrors": "/HEROSECTIONIMAGES/Metal Mirrors.webp",
    "classic-mirrors": "/classicmirrors/externalecho.png",
    "customized-mirrors": "/customizedmirrors/customizedmirrors (1).jpg",
    "plain-mirrors": "/HEROSECTIONIMAGES/Plain Mirrors.jpg",
  };

  return map[slug] || "/HEROSECTIONIMAGES/2 Function ShowerHERO.jpg";
}

function CategoryPage() {
  const { cat, products } = Route.useLoaderData();
  const related = categories
    .filter((c) => c.group === cat.group && c.slug !== cat.slug)
    .slice(0, 6);

  // If a specific bannerImage is provided, use it, otherwise use default
  const heroImg = cat.bannerImage || cat.image || (products.length > 0 ? products[0].image : "/images/w3-01.png");

  return (
    <SiteLayout>
      <section className="relative bg-primary text-primary-foreground py-24 md:py-32 overflow-hidden">
        <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-8 z-10">
          <Link
            to="/products"
            className="text-xs uppercase tracking-[0.3em] text-gold hover:underline"
          >
            ← All products
          </Link>
          <div className="flex flex-col md:flex-row gap-10 md:items-end justify-between mt-10">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold/70">{cat.group.replace(/-/g, " ")}</p>
              <h1 className="font-serif text-5xl md:text-7xl mt-3">{cat.title}</h1>
              <p className="mt-6 text-primary-foreground/70 max-w-2xl leading-relaxed text-lg">
                {cat.description}
              </p>
            </div>
            
            {cat.features && cat.features.length > 0 && (
              <div className="bg-background/10 p-6 backdrop-blur-sm border border-white/10 rounded-lg min-w-[250px]">
                <h3 className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {cat.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* PDF Assurance Info Section */}
      <section className="bg-secondary/50 border-y border-border/50 py-10">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4">
            <p className="font-serif text-2xl md:text-3xl text-gold">11 Years</p>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Unmatched Assurance</p>
          </div>
          <div className="p-4 border-l border-border/50">
            <p className="font-serif text-2xl md:text-3xl text-gold">10+1 Years</p>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Extended Warranty</p>
          </div>
          <div className="p-4 border-l border-border/50">
            <p className="font-serif text-2xl md:text-3xl text-gold">Vernet Inside</p>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">French Thermostatic Cartridge</p>
          </div>
          <div className="p-4 border-l border-border/50">
            <p className="font-serif text-2xl md:text-3xl text-gold">PVD Bonded</p>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Corrosion Resistant Finish</p>
          </div>
        </div>
      </section>

      {/* Category Hero Showcase Section from HEROSECTIONIMAGES (Above Product Images) */}
      <section className="max-w-7xl mx-auto px-8 py-16 border-b border-border/60">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Side - Hero Section Image */}
          <div className="lg:col-span-6">
            <div className="relative group rounded-2xl overflow-hidden border border-border/80 shadow-2xl bg-secondary/30">
              <img
                src={encodeURI(heroImg)}
                alt={cat.title}
                className="w-full h-[380px] md:h-[480px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <span className="inline-block bg-black/70 backdrop-blur-md text-gold border border-gold/40 px-4 py-1.5 rounded-full text-xs uppercase tracking-widest font-medium">
                  Joy Water · Handcrafted
                </span>
                <span className="text-white/80 text-xs tracking-wider uppercase font-light">
                  {cat.group.replace(/-/g, " ")}
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Content About That Page */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-gold text-xs uppercase tracking-[0.25em] font-medium mb-3">
              <span className="h-2 w-2 rounded-full bg-gold inline-block" />
              {cat.group.replace(/-/g, " ")} · Featured Collection
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground leading-tight">
              {cat.title}
            </h2>
            <div className="h-1 w-20 bg-gold my-6 rounded-full" />
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              {cat.description}
            </p>

            {cat.features && cat.features.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xs uppercase tracking-[0.2em] text-foreground font-semibold mb-4">
                  Collection Highlights & Engineering
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cat.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-secondary/60 border border-border/50 rounded-lg px-4 py-3 text-sm text-foreground/90"
                    >
                      <span className="flex-shrink-0 h-2 w-2 rounded-full bg-gold" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-10 pt-8 border-t border-border/60 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <span className="text-gold font-semibold">✓</span> 100% Solid Brass / Grade 304 SS
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gold font-semibold">✓</span> 11 Years Unmatched Assurance
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gold font-semibold">✓</span> PVD Finish
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-16">
        {products.length > 0 ? (
          <>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-8">
              {products.length} pieces in this collection
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
              {products.map((p: Product) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground mb-6">
              Pieces from this collection are curated on request. Please contact our design team.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 text-xs uppercase tracking-[0.3em]"
            >
              Enquire
            </Link>
          </div>
        )}
      </section>

      {related.length > 0 && (
        <section className="bg-secondary py-16">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="font-serif text-3xl mb-8">Related collections</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to="/category/$slug"
                  params={{ slug: r.slug }}
                  className="block bg-background p-6 hover:bg-primary hover:text-primary-foreground transition-colors group"
                >
                  <p className="text-xs uppercase tracking-widest text-gold mb-2">{r.group.replace(/-/g, " ")}</p>
                  <p className="font-serif text-lg group-hover:text-gold transition-colors">
                    {r.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </SiteLayout>
  );
}
