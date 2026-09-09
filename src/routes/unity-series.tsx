import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { ProductCard } from "@/components/site/ProductCard";
import { SeriesHero } from "@/components/site/SeriesHero";
import { unitySeriesProducts } from "@/lib/catalog/unitySeriesProducts";

export const Route = createFileRoute("/unity-series")({
  component: UnitySeriesPage,
  head: () => ({
    meta: [
      { title: "Unity Series — Joy Water" },
      {
        name: "description",
        content:
          "Premium Unity Series bathroom accessories featuring unique Black Gold finish. Contemporary brass construction.",
      },
      { property: "og:title", content: "Unity Series — Joy Water" },
      { property: "og:description", content: "Unity Series Black Gold bathroom accessories collection." },
    ],
  }),
});

function UnitySeriesPage() {
  const [visible, setVisible] = useState(48);

  return (
    <SiteLayout>
      <SeriesHero
        seriesName="Unity Series"
        subtitle="Black Gold Finish"
        description="premium bathroom accessories featuring unique Black Gold finish with premium brass construction."
        tagline="Create a bold, contemporary bathroom with our exclusive Unity Series collection — where dark elegance meets modern sophistication."
        productCount={unitySeriesProducts.length}
        features={["Premium Brass", "Black Gold Finish", "Contemporary Design", "11 Years Warranty"]}
        imageUrl="/JOY WATER BATHROOM ACCESSORIES (1)/100.jpg"
      />

      <section className="max-w-7xl mx-auto px-8 py-12">
        <div className="mb-10 pb-6 border-b border-border">
          <p className="text-sm text-muted-foreground">
            Showing {Math.min(visible, unitySeriesProducts.length)} of {unitySeriesProducts.length} products
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {unitySeriesProducts.slice(0, visible).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {visible < unitySeriesProducts.length && (
          <div className="text-center mt-16">
            <button
              onClick={() => setVisible((v) => v + 48)}
              className="border border-primary px-10 py-4 text-xs uppercase tracking-[0.3em] hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Load More ({unitySeriesProducts.length - visible} remaining)
            </button>
          </div>
        )}
      </section>
    </SiteLayout>
  );
}
