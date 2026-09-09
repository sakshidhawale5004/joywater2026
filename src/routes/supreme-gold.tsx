import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { ProductCard } from "@/components/site/ProductCard";
import { SeriesHero } from "@/components/site/SeriesHero";
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
      <SeriesHero
        seriesName="Supreme Series"
        subtitle="PVD Gold Finish"
        description="luxury bathroom accessories featuring premium brass construction with PVD Gold finish."
        tagline="Experience luxury with our Supreme Series gold collection — where golden excellence defines your bathroom's character."
        productCount={goldProducts.length}
        features={["Premium Brass", "PVD Gold Finish", "Luxury Design", "11 Years Warranty"]}
        imageUrl="/JOY WATER BATHROOM ACCESSORIES (1)/66.jpg"
      />

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
