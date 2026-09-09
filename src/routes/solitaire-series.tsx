import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { ProductCard } from "@/components/site/ProductCard";
import { SeriesHero } from "@/components/site/SeriesHero";
import { solitaireSeriesProducts } from "@/lib/catalog/solitaireSeriesProducts";

export const Route = createFileRoute("/solitaire-series")({
  component: SolitaireSeriesPage,
  head: () => ({
    meta: [
      { title: "Solitaire Series — Joy Water" },
      {
        name: "description",
        content:
          "Premium Solitaire Series bathroom accessories featuring timeless Chrome finish. Classic brass construction with elegant styling.",
      },
      { property: "og:title", content: "Solitaire Series — Joy Water" },
      { property: "og:description", content: "Solitaire Series Chrome bathroom accessories collection." },
    ],
  }),
});

function SolitaireSeriesPage() {
  const [visible, setVisible] = useState(48);

  return (
    <SiteLayout>
      <SeriesHero
        seriesName="Solitaire Series"
        subtitle="Chrome Finish"
        description="premium bathroom accessories featuring classic brass construction with timeless Chrome finish."
        tagline="Create a sophisticated bathroom with our Solitaire Series collection — where classic design stands alone in excellence."
        productCount={solitaireSeriesProducts.length}
        features={["Classic Brass", "Chrome Finish", "Timeless Design", "11 Years Warranty"]}
        imageUrl="/JOY WATER BATHROOM ACCESSORIES (1)/51.jpg"
      />

      <section className="max-w-7xl mx-auto px-8 py-12">
        <div className="mb-10 pb-6 border-b border-border">
          <p className="text-sm text-muted-foreground">
            Showing {Math.min(visible, solitaireSeriesProducts.length)} of {solitaireSeriesProducts.length} products
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {solitaireSeriesProducts.slice(0, visible).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {visible < solitaireSeriesProducts.length && (
          <div className="text-center mt-16">
            <button
              onClick={() => setVisible((v) => v + 48)}
              className="border border-primary px-10 py-4 text-xs uppercase tracking-[0.3em] hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Load More ({solitaireSeriesProducts.length - visible} remaining)
            </button>
          </div>
        )}
      </section>
    </SiteLayout>
  );
}
