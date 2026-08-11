import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ProductCard } from "@/components/site/ProductCard";
import { products, categories, type Product } from "@/lib/catalog/data";

const finishesMap: Record<string, string> = {
  "graphite-grey": "Graphite Grey",
  "rose-gold": "Rose Gold",
  "gold": "Gold",
  "chrome": "Chrome",
};

export const Route = createFileRoute("/diverters-mixers-in-finish/$slug")({
  loader: ({ params }) => {
    const finishName = finishesMap[params.slug];
    if (!finishName) throw notFound();

    const allowedGroups = ["diverters-mixers"];

    const validCategorySlugs = new Set(
      categories
        .filter((c) => allowedGroups.includes(c.group || ""))
        .map((c) => c.slug)
    );

    const finishProducts = products.filter(
      (p) => validCategorySlugs.has(p.category) && p.finish === finishName
    );

    return { finishName, finishSlug: params.slug, products: finishProducts };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.finishName} Diverters & Mixers — Joy Water` },
          { name: "description", content: `Explore our premium diverters, drainers and basin mixers in ${loaderData.finishName} finish.` },
        ]
      : [],
  }),
  component: DivertersMixersInFinishPage,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="max-w-3xl mx-auto px-8 py-32 text-center">
        <h1 className="font-serif text-4xl mb-4">Finish not found</h1>
        <Link to="/products" className="text-gold underline">
          View all products
        </Link>
      </div>
    </SiteLayout>
  ),
});

function DivertersMixersInFinishPage() {
  const { finishName, finishSlug, products } = Route.useLoaderData();

  const sidebarLinks = [
    { label: "Graphite Grey", slug: "graphite-grey" },
    { label: "Rose Gold", slug: "rose-gold" },
    { label: "Gold", slug: "gold" },
    { label: "Chrome", slug: "chrome" },
  ];

  return (
    <SiteLayout>
      <section className="bg-secondary/30 border-b border-border/60">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Mixers In PVD Finishes</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
            {finishName}
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-16 flex flex-col md:flex-row gap-12">
        {/* Sidebar Navigation */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <h3 className="font-semibold text-sm uppercase tracking-wider mb-6 text-foreground">
            Mixers In PVD Finishes
          </h3>
          <ul className="flex flex-col">
            {sidebarLinks.map((link) => (
              <li key={link.slug} className="border-b border-border/50 last:border-0">
                <Link
                  to="/diverters-mixers-in-finish/$slug"
                  params={{ slug: link.slug }}
                  className={`block py-4 text-sm transition-colors ${
                    finishSlug === link.slug
                      ? "text-gold font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* Products Grid */}
        <div className="flex-1">
          {products.length > 0 ? (
            <>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-8">
                {products.length} products available
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                {products.map((p: Product) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20 border border-dashed border-border rounded-xl">
              <p className="text-muted-foreground mb-6">
                No products found for this finish currently online.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-primary text-primary-foreground px-8 py-4 text-xs uppercase tracking-[0.3em]"
              >
                Enquire
              </Link>
            </div>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
