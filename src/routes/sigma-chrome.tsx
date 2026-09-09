import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { ProductCard } from "@/components/site/ProductCard";
import { SeriesHero } from "@/components/site/SeriesHero";
import { sigmaSeriesProducts } from "@/lib/catalog/sigmaSeriesProducts";

export const Route = createFileRoute("/sigma-chrome")({
  component: SigmaChromePage,
  head: () => ({
    meta: [
      { title: "Sigma Series Chrome — Joy Water" },
      {
        name: "description",
        content:
          "Premium Sigma Series bathroom accessories in elegant Chrome finish. High-quality brass construction.",
      },
      { property: "og:title", content: "Sigma Series Chrome — Joy Water" },
      { property: "og:description", content: "Sigma Series Chrome bathroom accessories collection." },
    ],
  }),
});

function SigmaChromePage() {
  const [visible, setVisible] = useState(48);

  const chromeProducts = sigmaSeriesProducts.filter((p) => p.category === "sigma-chrome");

  return (
    <SiteLayout>
      <SeriesHero
        seriesName="Sigma Series"
        subtitle="Chrome Finish"
        description="premium bathroom accessories featuring high-quality brass construction with elegant Chrome finish."
        tagline="Elevate your bathroom with our Sigma Series collection — where modern design meets superior craftsmanship in Chrome."
        productCount={chromeProducts.length}
        features={["Premium Brass", "Chrome Finish", "Modern Design", "11 Years Warranty"]}
        imageUrl="/JOY WATER BATHROOM ACCESSORIES (1)/127.jpg"
      />

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
