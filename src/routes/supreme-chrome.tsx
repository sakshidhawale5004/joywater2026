import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { ProductCard } from "@/components/site/ProductCard";
import { supremeSeriesProducts } from "@/lib/catalog/supremeSeriesProducts";

export const Route = createFileRoute("/supreme-chrome")({
  component: SupremeChromePage,
  head: () => ({
    meta: [
      { title: "Supreme Series Chrome — Joy Water" },
      {
        name: "description",
        content:
          "Premium Supreme Series bathroom accessories in elegant Chrome finish. High-quality brass construction.",
      },
      { property: "og:title", content: "Supreme Series Chrome — Joy Water" },
      { property: "og:description", content: "Supreme Series Chrome bathroom accessories collection." },
    ],
  }),
});

function SupremeChromePage() {
  const [visible, setVisible] = useState(48);

  const chromeProducts = supremeSeriesProducts.filter((p) => p.category === "supreme-chrome");

  return (
    <SiteLayout>
      <section className="relative bg-primary text-primary-foreground py-20 overflow-hidden">
        <img src="/JOY WATER BATHROOM ACCESSORIES (1)/120.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-8 z-10">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Supreme Series</p>
          <h1 className="font-serif text-5xl md:text-6xl">Chrome Finish</h1>
          <p className="mt-4 text-primary-foreground/70 max-w-2xl">
            {chromeProducts.length} premium bathroom accessories featuring high-quality brass construction with elegant Chrome finish.
            Elevate your bathroom with our Supreme Series collection.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-gold">✓</span>
              <span>High-Quality Brass Construction</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold">✓</span>
              <span>Chrome Finish</span>
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
          <p className="text-sm text-muted-foreground">
            Showing {Math.min(visible, chromeProducts.length)} of {chromeProducts.length} products
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {chromeProducts.slice(0, visible).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {visible < chromeProducts.length && (
          <div className="text-center mt-16">
            <button
              onClick={() => setVisible((v) => v + 48)}
              className="border border-primary px-10 py-4 text-xs uppercase tracking-[0.3em] hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Load More ({chromeProducts.length - visible} remaining)
            </button>
          </div>
        )}
      </section>
    </SiteLayout>
  );
}
