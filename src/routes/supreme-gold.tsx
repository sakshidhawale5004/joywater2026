import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { ProductCard } from "@/components/site/ProductCard";
import { supremeSeriesProducts } from "@/lib/catalog/supremeSeriesProducts";

export const Route = createFileRoute("/supreme-gold")({
  component: SupremeGoldPage,
  head: () => ({
    meta: [
      { title: "Supreme Series PVD Gold — Joy Water" },
      {
        name: "description",
        content:
          "Luxury Supreme Series bathroom accessories with PVD Gold finish. Premium brass with gold coating.",
      },
      { property: "og:title", content: "Supreme Series PVD Gold — Joy Water" },
      { property: "og:description", content: "Supreme Series PVD Gold bathroom accessories collection." },
    ],
  }),
});

function SupremeGoldPage() {
  const [visible, setVisible] = useState(48);

  const goldProducts = supremeSeriesProducts.filter((p) => p.category === "supreme-gold");

  return (
    <SiteLayout>
      <section className="relative bg-primary text-primary-foreground py-20 overflow-hidden">
        <img src="/JOY WATER BATHROOM ACCESSORIES (1)/66.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-8 z-10">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Supreme Series</p>
          <h1 className="font-serif text-5xl md:text-6xl">PVD Gold Finish</h1>
          <p className="mt-4 text-primary-foreground/70 max-w-2xl">
            {goldProducts.length} luxury bathroom accessories featuring premium brass construction with PVD Gold finish.
            Experience luxury with our Supreme Series gold collection.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-gold">✓</span>
              <span>Premium Brass Construction</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold">✓</span>
              <span>PVD Gold Finish</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold">✓</span>
              <span>Luxury Design</span>
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
          <p className="text-sm text-muted-foreground">
            Showing {Math.min(visible, goldProducts.length)} of {goldProducts.length} products
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {goldProducts.slice(0, visible).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {visible < goldProducts.length && (
          <div className="text-center mt-16">
            <button
              onClick={() => setVisible((v) => v + 48)}
              className="border border-primary px-10 py-4 text-xs uppercase tracking-[0.3em] hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Load More ({goldProducts.length - visible} remaining)
            </button>
          </div>
        )}
      </section>
    </SiteLayout>
  );
}
