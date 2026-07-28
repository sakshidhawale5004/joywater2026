import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { ProductCard } from "@/components/site/ProductCard";
import { products, categories } from "@/lib/catalog/data";

export const Route = createFileRoute("/products")({
  component: ProductsPage,
  head: () => ({
    meta: [
      { title: "All Products — Joy Water" },
      {
        name: "description",
        content:
          "Browse 400+ Joy Water luxury faucets, showers, basins and sanitaryware across every finish and series.",
      },
      { property: "og:title", content: "All Products — Joy Water" },
      { property: "og:description", content: "The complete Joy Water catalogue." },
    ],
  }),
});

function ProductsPage() {
  const [group, setGroup] = useState<string>("all");
  const [finish, setFinish] = useState<string>("all");
  const [visible, setVisible] = useState(48);

  const groupTabs = [
    { id: "all", label: "ALL" },
    { id: "showers", label: "SHOWERS" },
    { id: "multi-functional-body-showers", label: "BODY SHOWERS" },
    { id: "diverters", label: "DIVERTERS" },
    { id: "tile-insert-drainers", label: "DRAINERS" },
    { id: "basin-mixers", label: "BASIN MIXERS" },
    { id: "sanitaryware", label: "SANITARYWARE" },
    { id: "mirrors", label: "MIRRORS" },
    { id: "accessories", label: "ACCESSORIES" },
  ];
  const finishes = useMemo(
    () => ["all", ...Array.from(new Set(products.map((p) => p.finish)))],
    [],
  );

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const cat = categories.find((c) => c.slug === p.category);
      const okGroup = group === "all" || cat?.group === group;
      const okFinish = finish === "all" || p.finish === finish;
      return okGroup && okFinish;
    });
  }, [group, finish]);

  return (
    <SiteLayout>
      <section className="relative bg-primary text-primary-foreground py-20 overflow-hidden">
        <img src="/images/five-01.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-8 z-10">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Catalogue</p>
          <h1 className="font-serif text-5xl md:text-6xl">All Products</h1>
          <p className="mt-4 text-primary-foreground/70 max-w-2xl">
            {products.length} curated luxury pieces across showers, body showers, diverters, drainers, basin mixers, sanitaryware, mirrors and accessories.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-12">
        <div className="flex flex-wrap gap-6 items-center justify-between mb-10 pb-6 border-b border-border">
          <div className="flex flex-wrap gap-2">
            {groupTabs.map((g) => (
              <button
                key={g.id}
                onClick={() => {
                  setGroup(g.id);
                  setVisible(48);
                }}
                className={`px-4 py-2 text-xs uppercase tracking-widest border transition-colors ${group === g.id ? "bg-primary text-primary-foreground border-primary font-semibold shadow-sm" : "border-border hover:border-gold hover:text-gold"}`}
              >
                {g.label}
              </button>
            ))}
          </div>
          <select
            value={finish}
            onChange={(e) => {
              setFinish(e.target.value);
              setVisible(48);
            }}
            className="border border-border px-4 py-2 text-xs uppercase tracking-widest bg-background"
          >
            {finishes.map((f) => (
              <option key={f} value={f}>
                {f === "all" ? "All Finishes" : f}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {filtered.slice(0, visible).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {visible < filtered.length && (
          <div className="text-center mt-16">
            <button
              onClick={() => setVisible((v) => v + 48)}
              className="border border-primary px-10 py-4 text-xs uppercase tracking-[0.3em] hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Load More ({filtered.length - visible} remaining)
            </button>
          </div>
        )}
        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-20">
            No products match these filters.
          </p>
        )}
      </section>
    </SiteLayout>
  );
}
