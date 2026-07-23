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
        <Link to="/products" className="text-gold underline">View all products</Link>
      </div>
    </SiteLayout>
  ),
});

function CategoryPage() {
  const { cat, products } = Route.useLoaderData();
  const related = categories.filter(c => c.group === cat.group && c.slug !== cat.slug).slice(0, 6);

  return (
    <SiteLayout>
      <section className="bg-primary text-primary-foreground py-24">
        <div className="max-w-7xl mx-auto px-8">
          <Link to="/products" className="text-xs uppercase tracking-[0.3em] text-gold hover:underline">← All products</Link>
          <p className="text-xs uppercase tracking-[0.3em] text-gold/70 mt-6">{cat.group}</p>
          <h1 className="font-serif text-5xl md:text-7xl mt-3">{cat.title}</h1>
          <p className="mt-6 text-primary-foreground/70 max-w-2xl leading-relaxed">{cat.description}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-16">
        {products.length > 0 ? (
          <>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-8">{products.length} pieces in this collection</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
              {products.map((p: Product) => <ProductCard key={p.id} product={p} />)}
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground mb-6">Pieces from this collection are curated on request. Please contact our design team.</p>
            <Link to="/contact" className="inline-block bg-primary text-primary-foreground px-8 py-4 text-xs uppercase tracking-[0.3em]">Enquire</Link>
          </div>
        )}
      </section>

      {related.length > 0 && (
        <section className="bg-secondary py-16">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="font-serif text-3xl mb-8">Related collections</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {related.map(r => (
                <Link key={r.slug} to="/category/$slug" params={{ slug: r.slug }} className="block bg-background p-6 hover:bg-primary hover:text-primary-foreground transition-colors group">
                  <p className="text-xs uppercase tracking-widest text-gold mb-2">{r.group}</p>
                  <p className="font-serif text-lg group-hover:text-gold transition-colors">{r.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </SiteLayout>
  );
}