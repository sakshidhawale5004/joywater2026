import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { ProductCard } from "@/components/site/ProductCard";
import { SeriesHero } from "@/components/site/SeriesHero";
import { pyramidSeriesProducts } from "@/lib/catalog/pyramidSeriesProducts";

export const Route = createFileRoute("/pyramid-series")({
  component: PyramidSeriesPage,
  head: () => ({
    meta: [
      { title: "Pyramid Series — Joy Water" },
      {
        name: "description",
        content:
          "Premium Pyramid Series bathroom accessories in elegant Chrome finish. Solid brass construction with superior quality.",
      },
      { property: "og:title", content: "Pyramid Series — Joy Water" },
      { property: "og:description", content: "Pyramid Series Chrome bathroom accessories collection." },
    ],
  }),
});

function PyramidSeriesPage() {
  const [visible, setVisible] = useState(48);

  return (
    <SiteLayout>
      <SeriesHero
        seriesName="Pyramid Series"
        subtitle="Chrome Finish"
        description="premium bathroom accessories featuring solid brass construction with elegant Chrome finish."
        tagline="Transform your bathroom with our Pyramid Series collection — where geometric precision meets timeless elegance."
        productCount={pyramidSeriesProducts.length}
        features={["Solid Brass", "Chrome Finish", "Glass Accents", "11 Years Warranty"]}
        imageUrl="/JOY WATER BATHROOM ACCESSORIES (1)/22.jpg"
      />

      <section className="max-w-7xl mx-auto px-8 py-12">
        <div className="mb-10 pb-6 border-b border-border">
          <p className="text-sm text-muted-foreground">
            Showing {Math.min(visible, pyramidSeriesProducts.length)} of {pyramidSeriesProducts.length} products
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {pyramidSeriesProducts.slice(0, visible).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {visible < pyramidSeriesProducts.length && (
          <div className="text-center mt-16">
            <button
              onClick={() => setVisible((v) => v + 48)}
              className="border border-primary px-10 py-4 text-xs uppercase tracking-[0.3em] hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Load More ({pyramidSeriesProducts.length - visible} remaining)
            </button>
          </div>
        )}
      </section>
    </SiteLayout>
  );
}
