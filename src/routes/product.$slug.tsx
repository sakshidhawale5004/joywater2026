import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { products, getCategory, type Product } from "@/lib/catalog/data";
import { ProductCard } from "@/components/site/ProductCard";
import { useCart } from "@/hooks/useCart";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = products.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    const cat = getCategory(product.category);
    const related = products
      .filter((p) => p.category === product.category && p.id !== product.id)
      .slice(0, 4);
    return { product, cat, related };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} — Joy Water` },
          {
            name: "description",
            content: `${loaderData.product.name} in ${loaderData.product.finish}. Handcrafted by Joy Water.`,
          },
          { property: "og:title", content: `${loaderData.product.name} — Joy Water` },
          {
            property: "og:description",
            content: `Handcrafted ${loaderData.product.finish} finish.`,
          },
        ]
      : [],
  }),
  component: ProductPage,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="max-w-3xl mx-auto px-8 py-32 text-center">
        <h1 className="font-serif text-4xl mb-4">Product not found</h1>
        <Link to="/products" className="text-gold underline">
          All products
        </Link>
      </div>
    </SiteLayout>
  ),
});

const FINISH_STYLES: Record<string, string> = {
  "Matt Black": "from-neutral-900 to-neutral-700",
  Chrome: "from-slate-300 to-slate-500",
  "Brushed Gold": "from-amber-300 to-yellow-600",
  "Rose Gold": "from-rose-300 to-pink-500",
  "Venetian Gold": "from-yellow-400 to-amber-700",
  "Graphite Grey": "from-neutral-600 to-neutral-800",
  "Brushed Rose Gold": "from-rose-200 to-rose-500",
  "Matt White": "from-neutral-100 to-neutral-300",
  "PVD Gold": "from-amber-200 to-amber-600",
};

function ProductPage() {
  const { product, cat, related } = Route.useLoaderData();
  const gradient = FINISH_STYLES[product.finish] ?? "from-neutral-200 to-neutral-400";
  const { items, addItem, removeItem, isInCart } = useCart();
  const inCart = isInCart(product.id);

  return (
    <SiteLayout>
      {/* Breadcrumb Header */}
      <div className="max-w-7xl mx-auto px-8 pt-8 pb-4 border-b border-border/50 flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
        <Link to="/products" className="hover:text-gold transition-colors">
          All Collections
        </Link>
        <span>/</span>
        {cat && (
          <>
            <Link
              to="/category/$slug"
              params={{ slug: cat.slug }}
              className="hover:text-gold transition-colors"
            >
              {cat.title}
            </Link>
            <span>/</span>
          </>
        )}
        <span className="text-foreground font-medium">{product.name}</span>
      </div>

      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto px-8 py-12 grid md:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left Side: Product Showcase Image with Proper Margin & Padding */}
        <div className="md:col-span-6 lg:col-span-7">
          <div className="relative aspect-square bg-secondary/30 rounded-2xl overflow-hidden border border-border/80 shadow-2xl flex items-center justify-center p-8 md:p-12 transition-all group">
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain object-center transition-transform duration-700 hover:scale-105"
              />
            ) : (
              <>
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-90`}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.4),transparent_60%)]" />
                <svg
                  viewBox="0 0 200 200"
                  className="w-full h-full text-white/70 mix-blend-overlay p-16"
                >
                  <path
                    d="M60 40 v40 a20 20 0 0 0 40 0 v-40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <rect
                    x="70"
                    y="80"
                    width="60"
                    height="90"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    rx="4"
                  />
                </svg>
              </>
            )}
            <div className="absolute bottom-4 left-4 text-xs uppercase tracking-widest bg-black/70 text-gold border border-gold/30 px-3.5 py-1.5 rounded-full backdrop-blur-md">
              Reference: {product.code}
            </div>
            <div className="absolute top-4 right-4 text-[10px] uppercase tracking-widest bg-secondary/80 text-foreground border border-border/60 px-3 py-1 rounded-full">
              Joy Water Craft
            </div>
          </div>
        </div>

        {/* Right Side: Product Details & Rich Information */}
        <div className="md:col-span-6 lg:col-span-5 flex flex-col justify-center">
          {cat && (
            <Link
              to="/category/$slug"
              params={{ slug: cat.slug }}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold hover:underline font-medium mb-2"
            >
              <span className="h-2 w-2 rounded-full bg-gold inline-block" />
              {cat.title}
            </Link>
          )}
          <h1 className="font-serif text-3xl md:text-5xl mt-2 text-foreground leading-tight">
            {product.name}
          </h1>
          <p className="text-sm text-muted-foreground mt-3 font-mono">
            SKU: {product.code} · Handcrafted Edition
          </p>
          <div className="h-1 w-16 bg-gold my-6 rounded-full" />

          <p className="font-serif text-3xl md:text-4xl text-primary font-medium">
            ₹ {product.price.toLocaleString("en-IN")}
          </p>

          <p className="text-muted-foreground text-sm md:text-base leading-relaxed mt-6">
            Handcrafted by Joy Water in India, the {product.name} is engineered from lead-free solid brass billet and coated with a PVD-bonded {product.finish} finish. Designed for superior laminar flow and enduring reliability over decades of daily use.
          </p>

          {/* Extended Specifications Grid */}
          <dl className="grid grid-cols-2 gap-x-4 gap-y-6 mt-8 pt-6 border-t border-border/60 text-sm">
            <div className="bg-secondary/40 p-3 rounded-lg border border-border/40">
              <dt className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Finish</dt>
              <dd className="mt-1 font-medium text-foreground flex items-center gap-2">
                <span className={`h-2.5 w-2.5 rounded-full bg-gradient-to-br ${gradient} inline-block border border-border`} />
                {product.finish}
              </dd>
            </div>
            <div className="bg-secondary/40 p-3 rounded-lg border border-border/40">
              <dt className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Material</dt>
              <dd className="mt-1 font-medium text-foreground">Solid Brass Grade 304 SS</dd>
            </div>
            <div className="bg-secondary/40 p-3 rounded-lg border border-border/40">
              <dt className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Warranty</dt>
              <dd className="mt-1 font-medium text-gold">11 Years Assurance</dd>
            </div>
            <div className="bg-secondary/40 p-3 rounded-lg border border-border/40">
              <dt className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Cartridge</dt>
              <dd className="mt-1 font-medium text-foreground">French Vernet / Neoperl</dd>
            </div>
            <div className="bg-secondary/40 p-3 rounded-lg border border-border/40 col-span-2">
              <dt className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Quality Certification</dt>
              <dd className="mt-1 font-medium text-foreground">10+1 Years Extended Protection · Corrosion Resistant PVD</dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-col gap-3">
            <button
              onClick={() => {
                if (inCart) {
                  removeItem(product.id);
                } else {
                  addItem(product);
                }
              }}
              className={`w-full inline-flex justify-center items-center py-4 rounded-lg text-xs uppercase tracking-[0.25em] font-semibold transition-all shadow-lg ${
                inCart
                  ? "bg-secondary text-foreground hover:bg-red-500/10 hover:text-red-500 border border-border"
                  : "bg-gradient-to-r from-gold to-[#b3922c] text-white hover:brightness-110"
              }`}
            >
              {inCart ? "Remove from Cart" : "Add to Cart"}
            </button>
            <Link
              to="/contact"
              className="w-full inline-flex justify-center items-center bg-primary text-primary-foreground py-4 rounded-lg text-xs uppercase tracking-[0.25em] font-semibold hover:bg-gold hover:text-primary transition-all shadow-lg"
            >
              Enquire About This Piece
            </Link>
          </div>

          <div className="mt-6 pt-6 border-t border-border/60 grid grid-cols-2 gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-gold font-bold">✓</span> 100% Solid Brass Billet
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold font-bold">✓</span> 11 Years Unmatched Assurance
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold font-bold">✓</span> Free Studio Consultation
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold font-bold">✓</span> PVD Lifetime Lustre
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Joy Water - Product Craftsmanship Section */}
      <section className="bg-secondary/30 border-y border-border/60 py-16 mt-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-2">Excellence in Engineering</p>
            <h2 className="font-serif text-2xl md:text-4xl text-foreground">Why This Piece Stands Apart</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background/80 border border-border/60 p-6 rounded-xl">
              <h3 className="font-serif text-lg text-foreground mb-2">11 Years Unmatched Assurance</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Backed by our signature 11-Year comprehensive warranty (10+1 years extended protection) against manufacturing and finish defects.
              </p>
            </div>
            <div className="bg-background/80 border border-border/60 p-6 rounded-xl">
              <h3 className="font-serif text-lg text-foreground mb-2">French Vernet & Swiss Neoperl</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Integrated with world-class thermostatic cartridges from Vernet (France) and aerated flow regulators from Neoperl (Switzerland).
              </p>
            </div>
            <div className="bg-background/80 border border-border/60 p-6 rounded-xl">
              <h3 className="font-serif text-lg text-foreground mb-2">PVD Bonded Finish</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Physical Vapor Deposition bonds color at the molecular level, making the surface impervious to tarnishing, scratching, or fading over decades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="max-w-7xl mx-auto px-8 py-16">
          <h2 className="font-serif text-3xl mb-8">You may also like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
            {related.map((p: Product) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </SiteLayout>
  );
}
