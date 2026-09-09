import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { ProductCard } from "@/components/site/ProductCard";
import { SeriesHero } from "@/components/site/SeriesHero";
import { swatchSeriesProducts } from "@/lib/catalog/swatchSeriesProducts";

export const Route = createFileRoute("/swatch-rose-gold")({
  component: SwatchRoseGoldPage,
  head: () => ({
    meta: [
      { title: "Swatch Series PVD Rose Gold — Joy Water" },
      {
        name: "description",
        content:
          "Elegant Swatch Series bathroom accessories with PVD Rose Gold finish. Premium brass with luxurious rose gold coating.",
      },
      { property: "og:title", content: "Swatch Series PVD Rose Gold — Joy Water" },
      { property: "og:description", content: "Swatch Series PVD Rose Gold bathroom accessories collection." },
    ],
  }),
});

function SwatchRoseGoldPage() {
  const [visible, setVisible] = useState(48);

  const roseGoldProducts = swatchSeriesProducts.filter((p) => p.category === "swatch-rose-gold");

  return (
    <SiteLayout>
      <SeriesHero
        seriesName="Swatch Series"
        subtitle="PVD Rose Gold Finish"
        description="elegant bathroom accessories featuring solid brass construction with luxurious PVD Rose Gold finish."
        tagline="Create a sophisticated bathroom with our exclusive Swatch Series rose gold collection — where warm elegance embraces modern luxury."
        productCount={roseGoldProducts.length}
        features={["Solid Brass", "PVD Rose Gold Finish", "Luxurious Coating", "11 Years Warranty"]}
        imageUrl="/JOY WATER BATHROOM ACCESSORIES (1)/87.jpg"
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
