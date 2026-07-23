import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import imageList from "@/lib/imageList.json";

export const Route = createFileRoute("/gallery")({
  component: Gallery,
  head: () => ({
    meta: [
      { title: "Gallery — Joy Water" },
      { name: "description", content: "Explore our collection of timeless luxury bath fittings in our visual gallery." },
    ],
  }),
});

function Gallery() {
  // Filter out tiny icons or favicons if we want, but let's show most
  const galleryImages = imageList.filter(img => !img.includes("favicon") && !img.includes("logo") && !img.endsWith(".svg"));

  return (
    <SiteLayout>
      <section className="pt-32 pb-24 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-reveal">
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">Visual Atelier</p>
          <h1 className="font-serif text-5xl md:text-6xl text-foreground">The Gallery</h1>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg">
            A visual exploration of our designs, finishes, and craftsmanship.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
          {galleryImages.map((img, i) => (
            <div key={img} className="break-inside-avoid relative group overflow-hidden rounded-sm bg-secondary">
              <img
                src={`/images/${img}`}
                alt={`Gallery image ${i + 1}`}
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
