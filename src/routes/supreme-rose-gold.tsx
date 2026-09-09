import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { ProductCard } from "@/components/site/ProductCard";
import { SeriesHero } from "@/components/site/SeriesHero";
import { supremeSeriesProducts } from "@/lib/catalog/supremeSeriesProducts";

export const Route = createFileRoute("/supreme-rose-gold")({
  component: SupremeRoseGoldPage,
  head: () => ({
    meta: [
      { title: "Supreme Series PVD Rose Gold — Joy Water" },
      {
        name: "description",
        content:
          "Elegant Supreme Series bathroom accessories with PVD Rose Gold finish. Premium brass with rose gold coating.",
      },
      { property: "og:title", content: "Supreme Series PVD Rose Gold — Joy Water" },
      { property: "og:description", content: "Supreme Series PVD Rose Gold bathroom accessories collection." },
    ],
  }),
});

function SupremeRoseGoldPage() {
  const [visible, setVisible] = useState(48);

  const roseGoldProducts = supremeSeriesProducts.filter((p) => p.category === "supreme-rose-gold");

  return (
    <SiteLayout>
      <SeriesHero
        seriesName="Supreme Series"
        subtitle="PVD Rose Gold Finish"
        description="elegant bathroom accessories featuring premium brass construction with PVD Rose Gold finish."
        tagline="Create elegance with our Supreme Series rose gold collection — where warmth and sophistication converge in perfect harmony."
        productCount={roseGoldProducts.length}
        features={["Premium Brass", "PVD Rose Gold Finish", "Elegant Design", "11 Years Warranty"]}
        imageUrl="/JOY WATER BATHROOM ACCESSORIES (1)/113.jpg"
      />

      <section className="max-w-7xl mx-auto px-8 py-12">
        <div className="mb-10 pb-6 border-b border-border">
          <p className="text-sm text-muted-foreground">
            Showing {Math.min(visible, roseGoldProducts.length)} of {roseGoldProducts.length} products
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {roseGoldProducts.slice(0, visible).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {visible < roseGoldProducts.length && (
          <div className="text-center mt-16">
            <button
              onClick={() => setVisible((v) => v + 48)}
              className="border border-primary px-10 py-4 text-xs uppercase tracking-[0.3em] hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Load More ({roseGoldProducts.length - visible} remaining)
            </button>
          </div>
        )}
      </section>
    </SiteLayout>
  );
}
