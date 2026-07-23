import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/care")({
  component: CarePage,
  head: () => ({
    meta: [
      { title: "Care & Maintenance — Joy Water" },
      {
        name: "description",
        content:
          "How to care for PVD, matt black, brushed gold and chrome Joy Water bath fittings.",
      },
      { property: "og:title", content: "Care & Maintenance" },
      { property: "og:description", content: "Keep every finish looking new." },
    ],
  }),
});

function CarePage() {
  return (
    <SiteLayout>
      <section className="bg-primary text-primary-foreground py-24">
        <div className="max-w-4xl mx-auto px-8">
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">Guide</p>
          <h1 className="font-serif text-5xl md:text-6xl">Care & Maintenance</h1>
        </div>
      </section>
      <section className="max-w-3xl mx-auto px-8 py-16 space-y-8 text-foreground/80 leading-relaxed">
        <div>
          <h3 className="font-serif text-2xl mb-3">Daily care</h3>
          <p>
            Wipe fittings dry with a soft microfibre cloth after use. Standing water is the primary
            cause of watermarks on all finishes.
          </p>
        </div>
        <div>
          <h3 className="font-serif text-2xl mb-3">Weekly cleaning</h3>
          <p>
            Use warm water with a small amount of mild pH-neutral soap. Rinse and dry immediately
            with a soft cloth.
          </p>
        </div>
        <div>
          <h3 className="font-serif text-2xl mb-3">Never use</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Acidic or ammonia-based cleaners</li>
            <li>Abrasive scouring pads or powders</li>
            <li>Bleach or chlorine-based products</li>
          </ul>
        </div>
        <div>
          <h3 className="font-serif text-2xl mb-3">Stone basins</h3>
          <p>
            Reseal natural stone basins every 12 months with a food-safe stone sealer. Blot spills
            immediately — do not wipe.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
