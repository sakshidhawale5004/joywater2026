import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { products, getCategory, type Product } from "@/lib/catalog/data";
import { ProductCard } from "@/components/site/ProductCard";

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

  return (
    <SiteLayout>
      <div className="max-w-7xl mx-auto px-8 py-12 grid md:grid-cols-2 gap-12">
        <div className={`aspect-square bg-gradient-to-br ${gradient} relative overflow-hidden`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.4),transparent_60%)]" />
          <svg viewBox="0 0 200 200" className="w-full h-full text-white/70 mix-blend-overlay p-16">
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
        </div>
        <div className="flex flex-col justify-center">
          {cat && (
            <Link
              to="/category/$slug"
              params={{ slug: cat.slug }}
              className="text-xs uppercase tracking-[0.3em] text-gold hover:underline"
            >
              {cat.title}
            </Link>
          )}
          <h1 className="font-serif text-4xl md:text-5xl mt-4">{product.name}</h1>
          <p className="text-sm text-muted-foreground mt-3">Reference: {product.code}</p>
          <p className="font-serif text-3xl text-primary mt-8">
            ₹ {product.price.toLocaleString("en-IN")}
          </p>
          <dl className="grid grid-cols-2 gap-4 mt-10 pt-8 border-t border-border">
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">Finish</dt>
              <dd className="mt-1">{product.finish}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">Material</dt>
              <dd className="mt-1">Solid Brass</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">Warranty</dt>
              <dd className="mt-1">10 Years</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">Origin</dt>
              <dd className="mt-1">India</dd>
            </div>
          </dl>
          <Link
            to="/contact"
            className="mt-10 inline-flex justify-center bg-primary text-primary-foreground py-4 text-xs uppercase tracking-[0.3em] hover:bg-gold hover:text-primary transition-all"
          >
            Enquire About This Piece
          </Link>
        </div>
      </div>

      {related.length > 0 && (
        <section className="max-w-7xl mx-auto px-8 py-16 border-t border-border">
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
