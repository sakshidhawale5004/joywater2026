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

function CategoryPage() {
  const { cat, products } = Route.useLoaderData();
  const related = categories
    .filter((c) => c.group === cat.group && c.slug !== cat.slug)
    .slice(0, 6);

  // If a specific bannerImage is provided, use it, otherwise use default
  const heroImg = cat.bannerImage || cat.image || "/images/w3-01.png";

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
