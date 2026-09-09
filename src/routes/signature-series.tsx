import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { ProductCard } from "@/components/site/ProductCard";
import { SeriesHero } from "@/components/site/SeriesHero";
import { signatureSeriesProducts } from "@/lib/catalog/signatureSeriesProducts";

export const Route = createFileRoute("/signature-series")({
  component: SignatureSeriesPage,
  head: () => ({
    meta: [
      { title: "Signature Series — Joy Water" },
      {
        name: "description",
        content:
          "Premium Signature Series bathroom accessories featuring elegant Chrome finish. High-end brass construction with exceptional design.",
      },
      { property: "og:title", content: "Signature Series — Joy Water" },
      { property: "og:description", content: "Signature Series Chrome bathroom accessories collection." },
    ],
  }),
});

function SignatureSeriesPage() {
  const [visible, setVisible] = useState(48);

  return (
    <SiteLayout>
      <SeriesHero
        seriesName="Signature Series"
        subtitle="Chrome Finish"
        description="premium bathroom accessories featuring high-end brass construction with elegant Chrome finish."
        tagline="Elevate your bathroom with our Signature Series collection — a testament to exceptional design and superior craftsmanship."
        productCount={signatureSeriesProducts.length}
        features={["High-End Brass", "Chrome Finish", "Designer Collection", "11 Years Warranty"]}
        imageUrl="/JOY WATER BATHROOM ACCESSORIES (1)/32.jpg"
      />

      <section className="max-w-7xl mx-auto px-8 py-12">
        <div className="mb-10 pb-6 border-b border-border">
          <p className="text-sm text-muted-foreground">
            Showing {Math.min(visible, signatureSeriesProducts.length)} of {signatureSeriesProducts.length} products
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {signatureSeriesProducts.slice(0, visible).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {visible < signatureSeriesProducts.length && (
          <div className="text-center mt-16">
            <button
              onClick={() => setVisible((v) => v + 48)}
              className="border border-primary px-10 py-4 text-xs uppercase tracking-[0.3em] hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Load More ({signatureSeriesProducts.length - visible} remaining)
            </button>
          </div>
        )}
      </section>
    </SiteLayout>
  );
}
