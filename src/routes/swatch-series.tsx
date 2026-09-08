import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { ProductCard } from "@/components/site/ProductCard";
import { swatchSeriesProducts } from "@/lib/catalog/swatchSeriesProducts";

export const Route = createFileRoute("/swatch-series")({
  component: SwatchSeriesPage,
  head: () => ({
    meta: [
      { title: "Swatch Series — Joy Water" },
      {
        name: "description",
        content:
          "Premium Swatch Series bathroom accessories in Chrome, PVD Gold, and PVD Rose Gold finishes. Solid brass construction with superior quality.",
      },
      { property: "og:title", content: "Swatch Series — Joy Water" },
      { property: "og:description", content: "Complete Swatch Series bathroom accessories collection." },
    ],
  }),
});

function SwatchSeriesPage() {
  const [finish, setFinish] = useState<string>("all");
  const [visible, setVisible] = useState(48);

  const finishes = ["all", "Chrome", "PVD Gold", "PVD Rose Gold"];

  const filtered = useMemo(() => {
    if (finish === "all") {
      return swatchSeriesProducts;
    }
    return swatchSeriesProducts.filter((p) => p.finish === finish);
  }, [finish]);

  return (
    <SiteLayout>
      <section className="relative bg-primary text-primary-foreground py-20 overflow-hidden">
        <img src="/JOY WATER BATHROOM ACCESSORIES (1)/64.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-8 z-10">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Complete Collection</p>
          <h1 className="font-serif text-5xl md:text-6xl">Swatch Series</h1>
          <p className="mt-4 text-primary-foreground/70 max-w-2xl">
            {swatchSeriesProducts.length} premium bathroom accessories featuring solid brass construction in three luxurious finishes.
            Explore our complete Swatch Series collection - Chrome, PVD Gold, and PVD Rose Gold.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-gold">✓</span>
              <span>Solid Brass Construction</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold">✓</span>
              <span>Multiple Finishes</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold">✓</span>
              <span>Premium Quality</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold">✓</span>
              <span>11 Years Warranty</span>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-12">
        <div className="mb-10 pb-6 border-b border-border">
          <div className="flex flex-wrap gap-2 mb-4">
            {finishes.map((f) => (
              <button
                key={f}
                onClick={() => {
                  setFinish(f);
                  setVisible(48);
                }}
                className={`px-4 py-2 text-xs uppercase tracking-widest border transition-colors ${finish === f ? "bg-primary text-primary-foreground border-primary font-semibold shadow-sm" : "border-border hover:border-gold hover:text-gold"}`}
              >
                {f === "all" ? "ALL FINISHES" : f}
              </button>
            ))}
          </div>
          
          <p className="text-sm text-muted-foreground">
            Showing {Math.min(visible, filtered.length)} of {filtered.length} products
          </p>
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
      </section>
    </SiteLayout>
  );
}
