import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { ProductCard } from "@/components/site/ProductCard";
import { bathroomAccessoriesProducts } from "@/lib/catalog/bathroomAccessoriesProducts";

export const Route = createFileRoute("/bathroom-accessories")({
  component: BathroomAccessoriesPage,
  head: () => ({
    meta: [
      { title: "Bathroom Accessories — Joy Water" },
      {
        name: "description",
        content:
          "Browse 428 premium bathroom accessories from Joy Water including towel rods, glass shelves, soap dispensers, paper holders, and more.",
      },
      { property: "og:title", content: "Bathroom Accessories — Joy Water" },
      { property: "og:description", content: "Complete collection of 428 bathroom accessories." },
    ],
  }),
});

function BathroomAccessoriesPage() {
  const [category, setCategory] = useState<string>("all");
  const [finish, setFinish] = useState<string>("all");
  const [visible, setVisible] = useState(48);

  // Extract unique categories from products
  const categories = useMemo(() => {
    const cats = Array.from(new Set(bathroomAccessoriesProducts.map((p) => p.category)));
    return ["all", ...cats.sort()];
  }, []);

  // Extract unique finishes from products
  const finishes = useMemo(() => {
    const fins = Array.from(new Set(bathroomAccessoriesProducts.map((p) => p.finish)));
    return ["all", ...fins.sort()];
  }, []);

  // Category labels mapping
  const categoryLabels: Record<string, string> = {
    "all": "ALL",
    "towel-rod": "TOWEL ROD",
    "glass-shelf": "GLASS SHELF",
    "soap-dispenser": "SOAP DISPENSER",
    "paper-holder": "PAPER HOLDER",
    "robe-hook": "ROBE HOOK",
    "towel-ring": "TOWEL RING",
    "tumbler-holder": "TUMBLER HOLDER",
    "toothbrush-holder": "TOOTHBRUSH HOLDER",
    "toilet-brush-holder": "TOILET BRUSH HOLDER",
    "bathroom-shelf": "BATHROOM SHELF",
    "corner-shelf": "CORNER SHELF",
    "double-robe-hook": "DOUBLE ROBE HOOK",
    "towel-bar": "TOWEL BAR",
    "bathroom-rack": "BATHROOM RACK",
  };

  const filtered = useMemo(() => {
    return bathroomAccessoriesProducts.filter((p) => {
      const okCategory = category === "all" || p.category === category;
      const okFinish = finish === "all" || p.finish === finish;
      return okCategory && okFinish;
    });
  }, [category, finish]);

  return (
    <SiteLayout>
      <section className="relative bg-primary text-primary-foreground py-20 overflow-hidden">
        <img src="/images/five-01.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-8 z-10">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Complete Collection</p>
          <h1 className="font-serif text-5xl md:text-6xl">Bathroom Accessories</h1>
          <p className="mt-4 text-primary-foreground/70 max-w-2xl">
            {bathroomAccessoriesProducts.length} premium bathroom accessories in various finishes and styles. 
            Browse towel rods, glass shelves, soap dispensers, paper holders, robe hooks, and more.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-12">
        <div className="mb-10 pb-6 border-b border-border">
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setCategory(cat);
                  setVisible(48);
                }}
                className={`px-4 py-2 text-xs uppercase tracking-widest border transition-colors ${category === cat ? "bg-primary text-primary-foreground border-primary font-semibold shadow-sm" : "border-border hover:border-gold hover:text-gold"}`}
              >
                {categoryLabels[cat] || cat.replace(/-/g, " ").toUpperCase()}
              </button>
            ))}
          </div>
          
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing {Math.min(visible, filtered.length)} of {filtered.length} products
            </p>
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
