import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import hero from "@/assets/cat-basins.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Joy Water" },
      {
        name: "description",
        content:
          "Joy Water crafts timeless luxury bath fittings from a Pune atelier — engineered in solid brass and finished by hand.",
      },
      { property: "og:title", content: "About Joy Water" },
      { property: "og:description", content: "A quarter-century of quiet craft." },
    ],
  }),
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="relative h-[60vh] flex items-end bg-primary overflow-hidden">
        <img src={hero} alt="" className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-8 pb-16 text-primary-foreground">
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">Our Story</p>
          <h1 className="font-serif text-5xl md:text-7xl max-w-3xl">
            A quarter-century of quiet craft.
          </h1>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-8 py-24 space-y-8 text-lg leading-relaxed text-foreground/80">
        <p>
          Joy Water began in a small Pune workshop with a single conviction: that the objects
          touching water in a home deserve the same reverence as the architecture around them.
        </p>
        <p>
          Twenty-five years later, that conviction still guides every piece we release. We machine
          our faucets from solid brass. We bond finishes with a PVD process that outlasts most
          bathrooms. And we still hand-carve every stone basin — because a machine cannot feel the
          grain of Italian marble the way a stonemason can.
        </p>
        <p>
          What we make is quiet. Restrained. Built for the long haul. It is not a statement. It is a
          foundation.
        </p>
      </section>
      <section className="bg-secondary py-24">
        <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-3 gap-10">
          {[
            [
              "Solid Brass Core",
              "Every faucet body is CNC-machined from a single billet of lead-free brass.",
            ],
            ["Lifetime PVD", "18-finish PVD process bonds colour to the metal, not on top of it."],
            ["Hand-carved Stone", "Basins carved and honed by third-generation stonemasons."],
          ].map(([t, d]) => (
            <div key={t} className="bg-background p-8 border border-border">
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Craft</p>
              <h3 className="font-serif text-2xl mb-3">{t}</h3>
              <p className="text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
