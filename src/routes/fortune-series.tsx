import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { ProductCard } from "@/components/site/ProductCard";
import { SeriesHero } from "@/components/site/SeriesHero";
import { fortuneSeriesProducts } from "@/lib/catalog/fortuneSeriesProducts";

export const Route = createFileRoute("/fortune-series")({
  component: FortuneSeriesPage,
  head: () => ({
    meta: [
      { title: "Fortune Series — Joy Water" },
      {
        name: "description",
        content:
          "Premium Fortune Series bathroom accessories with elegant Chrome finish. Innovative brass construction with superior design.",
      },
      { property: "og:title", content: "Fortune Series — Joy Water" },
      { property: "og:description", content: "Fortune Series Chrome bathroom accessories collection." },
    ],
  }),
});

function FortuneSeriesPage() {
  const [visible, setVisible] = useState(48);

  return (
    <SiteLayout>
      <SeriesHero
        seriesName="Fortune Series"
        subtitle="Chrome Finish"
        description="premium bathroom accessories featuring innovative brass construction with elegant Chrome finish."
        tagline="Bring fortune and style to your bathroom with our Fortune Series collection — where innovation meets elegance."
        productCount={fortuneSeriesProducts.length}
        features={["Premium Brass", "Chrome Finish", "Innovative Design", "11 Years Warranty"]}
        imageUrl="/JOY WATER BATHROOM ACCESSORIES (1)/1.jpg"
      />

      <section className="max-w-7xl mx-auto px-8 py-12">
        <div className="mb-10 pb-6 border-b border-border">
          <p className="text-sm text-muted-foreground">
            Showing {Math.min(visible, fortuneSeriesProducts.length)} of {fortuneSeriesProducts.length} products
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {fortuneSeriesProducts.slice(0, visible).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {visible < fortuneSeriesProducts.length && (
          <div className="text-center mt-16">
            <button
              onClick={() => setVisible((v) => v + 48)}
              className="border border-primary px-10 py-4 text-xs uppercase tracking-[0.3em] hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Load More ({fortuneSeriesProducts.length - visible} remaining)
            </button>
          </div>
        )}
      </section>
    </SiteLayout>
  );
}
