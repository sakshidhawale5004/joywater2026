import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/lib/catalog/data";
const hero = "/images/Black-Horizontal.jpg.jpeg";
const catFaucets = "/images/five-01.png";
const catShowers = "/images/shower-01-1.jpg.jpeg";
const catBasins = "/images/basin-01-1.jpg.jpeg";
const catToilets = "/images/p-tb-01.jpg.jpeg";
const catAccessories = "/images/A4-RoundMaster-8007-Square.jpg.jpeg";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Joy Water — Timeless Luxury Bath Fittings" },
      { name: "description", content: "Discover Joy Water: designer faucets, showers, basins and sanitaryware crafted in matt black, brushed gold, rose gold and stone." },
      { property: "og:title", content: "Joy Water — Timeless Luxury" },
      { property: "og:description", content: "Handcrafted luxury bath fittings for lifetimes." },
    ],
  }),
});

const collections = [
  { title: "Designer Faucets", slug: "svelte-series", image: catFaucets, tag: "PVD & Chrome" },
  { title: "Rain & Cascade Showers", slug: "rain-showers", image: catShowers, tag: "Overhead" },
  { title: "Stone & Marble Basins", slug: "stone-pedestal-basins", image: catBasins, tag: "Handcrafted" },
  { title: "Intelligent WC", slug: "intelligent-wc", image: catToilets, tag: "Smart" },
  { title: "Bath Accessories", slug: "bath-accessories", image: catAccessories, tag: "Complete Sets" },
];

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-primary">
        <img
          src={hero}
          alt="Luxury matt black faucet"
          className="absolute inset-0 h-full w-full object-cover opacity-70 scale-110 animate-drift"
          width={1600}
          height={1200}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-primary/30" />
        <div className="relative max-w-7xl mx-auto px-8 py-24 text-primary-foreground animate-reveal">
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-6">Timeless · Handcrafted · Since 1998</p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-4xl">
            Bath fittings, <br/>reimagined as <span className="text-shimmer italic">quiet luxury</span>.
          </h1>
          <p className="mt-8 text-lg text-primary-foreground/70 max-w-xl leading-relaxed">
            From matt-black minimalism to hand-carved stone basins, every Joy Water piece is engineered
            to outlast trends and elevate the everyday ritual of water.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/products" className="group inline-flex items-center gap-3 bg-gold text-primary px-8 py-4 text-sm uppercase tracking-[0.2em] font-medium hover:bg-primary hover:text-gold border border-gold transition-all">
              Explore the Collection <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-3 border border-primary-foreground/40 px-8 py-4 text-sm uppercase tracking-[0.2em] font-medium hover:bg-primary-foreground hover:text-primary transition-all">
              Visit Display Centre
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/50 text-[10px] uppercase tracking-[0.4em] animate-drift">
          Scroll to discover
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Collections</p>
            <h2 className="font-serif text-4xl md:text-5xl max-w-2xl">Six worlds of water, shaped for you.</h2>
          </div>
          <Link to="/products" className="text-sm uppercase tracking-widest hover:text-gold transition-colors story-link self-start md:self-auto">View all products</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[280px]">
          {collections.map((c, i) => (
            <Link
              key={c.slug}
              to="/category/$slug"
              params={{ slug: c.slug }}
              className={`group relative overflow-hidden bg-secondary card-3d hover:card-3d-hover ${
                i === 0 ? "md:col-span-3 md:row-span-2" : i === 1 ? "md:col-span-3" : "md:col-span-2"
              }`}
            >
              <img src={c.image} alt={c.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
              <div className="absolute bottom-0 p-6 text-primary-foreground">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">{c.tag}</p>
                <h3 className="font-serif text-2xl md:text-3xl">{c.title}</h3>
                <span className="inline-flex items-center gap-2 mt-3 text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED SERIES */}
      <section className="bg-background py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Signature Pieces</p>
              <h2 className="font-serif text-4xl md:text-5xl max-w-2xl">Selected Works</h2>
            </div>
            <Link to="/products" className="text-sm uppercase tracking-widest hover:text-gold transition-colors story-link self-start md:self-auto">View all products</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {products.slice(0, 4).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-primary text-primary-foreground py-28">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-6">Philosophy</p>
          <h2 className="font-serif text-3xl md:text-5xl leading-tight">
            "We don't design fittings. <br/> We compose the way water meets your home."
          </h2>
          <p className="mt-8 text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Every faucet is machined from solid brass. Every finish is PVD-bonded for a lifetime of shine.
            Every basin is carved by hand. Joy Water is what happens when engineering studios and stone
            ateliers share a workbench.
          </p>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-8 text-left">
            {[
              ["25+", "Years of craft"],
              ["400+", "Curated SKUs"],
              ["18", "PVD finishes"],
              ["10Y", "Warranty"],
            ].map(([n, l]) => (
              <div key={l} className="border-l border-gold/40 pl-4">
                <div className="font-serif text-4xl text-gold">{n}</div>
                <div className="text-xs uppercase tracking-widest text-primary-foreground/60 mt-2">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE ATELIER PROCESS */}
      <section className="py-24 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3 text-center">Our Craft</p>
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-16">The Atelier Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Precision Machining", desc: "Every solid brass billet is CNC-machined to tolerances of a fraction of a millimeter, ensuring flawless internal waterways and perfectly smooth lever action." },
              { step: "02", title: "PVD Bonding", desc: "Unlike traditional electroplating, our Physical Vapor Deposition (PVD) process integrates the finish into the metal itself, preventing tarnishing, scratching, and fading." },
              { step: "03", title: "Hand Assembled", desc: "Each fitting is hand-assembled, calibrated, and subjected to rigorous high-pressure testing before it ever leaves our studio in Pune." }
            ].map((s) => (
              <div key={s.step} className="group relative">
                <div className="text-6xl font-serif text-muted/30 absolute -top-8 -left-4 z-0 group-hover:text-gold/20 transition-colors">{s.step}</div>
                <div className="relative z-10 pt-4">
                  <h3 className="font-serif text-2xl mb-4">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINISHES */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Finishes</p>
          <h2 className="font-serif text-4xl md:text-5xl">A palette engineered to age gracefully.</h2>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {[
            ["Matt Black","from-neutral-900 to-neutral-700"],
            ["Brushed Gold","from-amber-300 to-yellow-600"],
            ["Rose Gold","from-rose-300 to-pink-500"],
            ["Venetian Gold","from-yellow-400 to-amber-700"],
            ["Graphite Grey","from-neutral-500 to-neutral-800"],
            ["Chrome","from-slate-200 to-slate-500"],
          ].map(([n, g]) => (
            <div key={n} className="group">
              <div className={`aspect-square bg-gradient-to-br ${g} rounded-full transition-transform duration-500 group-hover:scale-105 shadow-[inset_0_2px_20px_rgba(255,255,255,0.35)]`} />
              <p className="text-xs uppercase tracking-widest text-center mt-3">{n}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMMITMENT */}
      <section className="bg-primary text-primary-foreground py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gold/5" />
        <div className="max-w-3xl mx-auto px-8 relative z-10">
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-6">Sustainable Luxury</p>
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Water is finite. Elegance is not.</h2>
          <p className="text-primary-foreground/70 leading-relaxed text-lg">
            Our aerators are engineered to reduce water consumption by up to 40% without compromising the volumetric feel of the flow. We believe that true luxury must be responsible to the environment it draws from.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-secondary py-24">
        <div className="max-w-5xl mx-auto px-8 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Visit Us</p>
            <h2 className="font-serif text-4xl md:text-5xl">See it. Touch it. Feel the weight of craft.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              The Joy Water display centre in Pune features over 300 pieces on live water — the only way
              to truly understand a finish is under your fingertips.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-3 mt-8 bg-primary text-primary-foreground px-8 py-4 text-sm uppercase tracking-[0.2em] hover:bg-gold hover:text-primary transition-all">
              Book a Visit <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="aspect-[3/4] bg-cover bg-center" style={{backgroundImage:`url(${catBasins})`}} />
            <div className="aspect-[3/4] bg-cover bg-center mt-8" style={{backgroundImage:`url(${catAccessories})`}} />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
