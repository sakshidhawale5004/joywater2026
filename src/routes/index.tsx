import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ProductCard } from "@/components/site/ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { products } from "@/lib/catalog/data";
const hero = "/images/Black-Horizontal.jpg.jpeg";
const catFaucets = "/images/designer-faucets-new.jpg";
const catShowers = "/images/PDF1_P20_IMG2.png";
const catBasins = "/images/stone-basins-new.jpg";
const catToilets = "/images/PDF1_P40_IMG1.png";
const catAccessories = "/images/PDF1_P50_IMG1.png";
import { ArrowRight } from "lucide-react";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

const heroSlides = [
  {
    image: "/banner1.jpg",
    title: "The Art of Water",
    subtitle: "Discover our latest collection of premium bath fittings.",
    category: "Exclusives",
    link: "/products"
  },
  {
    image: "/banner2.jpg",
    title: "Striking a Chord",
    subtitle: "Experience luxury in every single drop.",
    category: "Showers",
    link: "/category/2-function-shower-rain-mist"
  },
  {
    image: "/banner3.png",
    title: "Refined Aesthetics",
    subtitle: "Transform your bathroom into a modern sanctuary.",
    category: "Basin Mixers",
    link: "/category/round-controller-basin-mixer"
  },
  {
    image: "/banner4.jpg",
    title: "Intelligent Design",
    subtitle: "Where cutting-edge technology meets ultimate comfort.",
    category: "Sanitaryware",
    link: "/category/sanitaryware-collections"
  },
  {
    image: "/banner5.png",
    title: "Timeless Craft",
    subtitle: "Handcrafted accessories for an elegant finish.",
    category: "Accessories",
    link: "/category/metal-led-mirrors"
  }
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Joy Water — Timeless Luxury Bath Fittings" },
      {
        name: "description",
        content:
          "Discover Joy Water: designer faucets, showers, basins and sanitaryware crafted in matt black, brushed gold, rose gold and stone.",
      },
      { property: "og:title", content: "Joy Water — Timeless Luxury" },
      { property: "og:description", content: "Handcrafted luxury bath fittings for lifetimes." },
    ],
  }),
});

const collections = [
  {
    title: "Rain & Cascade Showers",
    slug: "2-function-shower-rain-mist",
    image: "/HEROSECTIONIMAGES/3 Function ShowerHERO.jpg",
    tag: "Overhead Luxury",
  },
  {
    title: "Body Showers & Jets",
    slug: "body-jets-2-function",
    image: "/HEROSECTIONIMAGES/body-jets-2-function.jpg",
    tag: "Hydrotherapy",
  },
  {
    title: "Precision Diverters",
    slug: "5-function-diverter",
    image: "/HEROSECTIONIMAGES/Thermostatic Diverter.jpg",
    tag: "Thermostatic Control",
  },
  {
    title: "Luxury Basin Mixers",
    slug: "round-controller-basin-mixer",
    image: "/HEROSECTIONIMAGES/Round Controller Basin Mixer.png",
    tag: "Solid Brass Billet",
  },
  {
    title: "Sanitaryware Collections",
    slug: "sanitaryware-collections",
    image: "/HEROSECTIONIMAGES/Sanitaryware Collections.jpg",
    tag: "Ceramic Excellence",
  },
  {
    title: "Mirrors & Accessories",
    slug: "metal-led-mirrors",
    image: "/HEROSECTIONIMAGES/Metal LED Mirrors.jpg",
    tag: "Finishing Touches",
  },
];

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative w-full overflow-hidden bg-black group">
        <Carousel
          plugins={[
            Autoplay({
              delay: 6000,
              stopOnInteraction: false,
            }),
          ]}
          opts={{ loop: true, watchDrag: false }}
          className="w-full relative z-0"
        >
          <CarouselContent>
            {heroSlides.map((slide, i) => (
              <CarouselItem key={i} className="min-w-0 flex-[0_0_100%] relative">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-auto object-contain max-h-[92vh]"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

                <div className="absolute inset-0 z-10 max-w-7xl mx-auto px-8 flex flex-col justify-center sm:justify-end pb-8 sm:pb-20 md:pb-32">
                  <div className="animate-reveal">
                    <p className="text-[10px] sm:text-xs uppercase tracking-[0.4em] text-gold mb-2 sm:mb-6">
                      {slide.category}
                    </p>
                    <h2 className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-4xl text-white">
                      {slide.title}
                    </h2>
                    <p className="mt-4 sm:mt-8 text-sm sm:text-lg text-white/90 max-w-xl leading-relaxed">
                      {slide.subtitle}
                    </p>
                    <div className="mt-6 sm:mt-10 flex gap-4">
                      <Link
                        to={slide.link}
                        className="group/btn inline-flex items-center gap-2 sm:gap-3 bg-gold text-black px-6 sm:px-8 py-3 sm:py-4 text-[10px] sm:text-sm uppercase tracking-[0.2em] font-medium hover:bg-white hover:text-black transition-all"
                      >
                        Explore <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute bottom-6 sm:bottom-12 right-6 sm:right-12 flex gap-4 z-20">
            <CarouselPrevious className="static translate-y-0 h-10 w-10 sm:h-14 sm:w-14 border-white/20 hover:bg-white/10 hover:text-white bg-transparent text-white" />
            <CarouselNext className="static translate-y-0 h-10 w-10 sm:h-14 sm:w-14 border-white/20 hover:bg-white/10 hover:text-white bg-transparent text-white" />
          </div>
        </Carousel>
      </section>

      {/* COLLECTIONS */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Collections</p>
            <h2 className="font-serif text-4xl md:text-5xl max-w-2xl">
              Six worlds of water, shaped for you.
            </h2>
          </div>
          <Link
            to="/products"
            className="text-sm uppercase tracking-widest hover:text-gold transition-colors story-link self-start md:self-auto"
          >
            View all products
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[280px]">
          {collections.map((c, i) => (
            <Link
              key={c.slug}
              to="/category/$slug"
              params={{ slug: c.slug }}
              className={`group relative overflow-hidden bg-secondary card-3d hover:card-3d-hover ${
                i === 0
                  ? "md:col-span-3 md:row-span-2"
                  : i === 1
                    ? "md:col-span-3"
                    : "md:col-span-2"
              }`}
            >
              <img
                src={c.image}
                alt={c.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />
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
        <div className="max-w-7xl mx-auto px-8 relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Signature Pieces</p>
              <h2 className="font-serif text-4xl md:text-5xl max-w-2xl">Selected Works</h2>
            </div>
            <Link
              to="/products"
              className="text-sm uppercase tracking-widest hover:text-gold transition-colors story-link self-start md:self-auto"
            >
              View all products
            </Link>
          </div>
          <Carousel
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: true,
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-8">
              {products.map((p) => (
                <CarouselItem key={p.id} className="pl-4 md:pl-8 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <ProductCard product={p} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 md:-left-12" />
            <CarouselNext className="hidden md:flex -right-4 md:-right-12" />
          </Carousel>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-primary text-primary-foreground py-28">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-6">Philosophy</p>
          <h2 className="font-serif text-3xl md:text-5xl leading-tight">
            "We don't design fittings. <br /> We compose the way water meets your home."
          </h2>
          <p className="mt-8 text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Every faucet is machined from solid brass. Every finish is PVD-bonded for a lifetime of
            shine. Every basin is carved by hand. Joy Water is what happens when engineering studios
            and stone ateliers share a workbench.
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
                <div className="text-xs uppercase tracking-widest text-primary-foreground/60 mt-2">
                  {l}
                </div>
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
              {
                step: "01",
                title: "Precision Machining",
                desc: "Every solid brass billet is CNC-machined to tolerances of a fraction of a millimeter, ensuring flawless internal waterways and perfectly smooth lever action.",
              },
              {
                step: "02",
                title: "PVD Bonding",
                desc: "Unlike traditional electroplating, our Physical Vapor Deposition (PVD) process integrates the finish into the metal itself, preventing tarnishing, scratching, and fading.",
              },
              {
                step: "03",
                title: "Hand Assembled",
                desc: "Each fitting is hand-assembled, calibrated, and subjected to rigorous high-pressure testing before it ever leaves our studio in Pune.",
              },
            ].map((s) => (
              <div key={s.step} className="group relative">
                <div className="text-6xl font-serif text-muted/30 absolute -top-8 -left-4 z-0 group-hover:text-gold/20 transition-colors">
                  {s.step}
                </div>
                <div className="relative z-10 pt-4">
                  <h3 className="font-serif text-2xl mb-4">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOY WATER ENGINEERING & UNMATCHED ASSURANCE */}
      <section className="bg-secondary/40 py-20 border-b border-border/60">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Certified Quality</p>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">
              11 Years Unmatched Assurance
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              Every Joy Water creation represents a harmonious blend of Indian craftsmanship and European internal technology. We stand behind our fittings for over a decade.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-background border border-border/80 p-6 rounded-xl shadow-sm">
              <div className="font-serif text-2xl text-gold mb-2">11-Year Warranty</div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-2 text-foreground">10+1 Years Protection</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Comprehensive 10-year base warranty plus 1 additional year of extended assurance on all brass and stainless steel assemblies.
              </p>
            </div>
            <div className="bg-background border border-border/80 p-6 rounded-xl shadow-sm">
              <div className="font-serif text-2xl text-gold mb-2">Vernet France</div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-2 text-foreground">Thermostatic Precision</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Equipped with genuine French Vernet thermostatic wax elements for instant safety shut-off and exact temperature regulation.
              </p>
            </div>
            <div className="bg-background border border-border/80 p-6 rounded-xl shadow-sm">
              <div className="font-serif text-2xl text-gold mb-2">Neoperl Swiss</div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-2 text-foreground">Aerated Flow Control</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Swiss-engineered aerators enrich the water stream with micro-bubbles, saving up to 40% water while maintaining luxurious volume.
              </p>
            </div>
            <div className="bg-background border border-border/80 p-6 rounded-xl shadow-sm">
              <div className="font-serif text-2xl text-gold mb-2">PVD Bonded</div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-2 text-foreground">Corrosion Impervious</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Physical Vapor Deposition (PVD) coating bonds color at the atomic level, resisting harsh water chemistry and daily wear.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINISHES */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Finishes</p>
          <h2 className="font-serif text-4xl md:text-5xl">
            A palette engineered to age gracefully.
          </h2>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {[
              ["Matt Black", "from-neutral-900 to-neutral-700"],
              ["Brushed Gold", "from-amber-300 to-yellow-600"],
              ["Rose Gold", "from-rose-300 to-pink-500"],
              ["Venetian Gold", "from-yellow-400 to-amber-700"],
              ["Graphite Grey", "from-neutral-500 to-neutral-800"],
              ["Chrome", "from-slate-200 to-slate-500"],
            ].map(([n, g]) => (
              <CarouselItem key={n} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="group p-4">
                  <div
                    className={`aspect-square bg-gradient-to-br ${g} rounded-full transition-transform duration-500 group-hover:scale-105 shadow-[inset_0_2px_20px_rgba(255,255,255,0.35)]`}
                  />
                  <p className="text-xs uppercase tracking-widest text-center mt-6">{n}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-secondary py-24 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Testimonials</p>
            <h2 className="font-serif text-4xl md:text-5xl">
              Trusted by visionaries.
            </h2>
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {[
                { text: "Joy Water's faucets completely transformed our master bathroom. The quality is simply unmatched.", author: "Arun K.", role: "Architect" },
                { text: "We specified Joy Water for our luxury hotel project. The PVD finishes look brand new even after years of use.", author: "Priya S.", role: "Interior Designer" },
                { text: "The weight and feel of their solid brass fittings speak volumes about their commitment to craft.", author: "Rajesh M.", role: "Homeowner" },
                { text: "Unparalleled elegance and durability. Joy Water products are a staple in all our premium builds.", author: "Vikram R.", role: "Developer" },
              ].map((t, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-4 h-full">
                    <div className="bg-background p-8 rounded-xl h-full flex flex-col justify-between border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                      <p className="text-muted-foreground italic mb-6">"{t.text}"</p>
                      <div>
                        <p className="font-medium">{t.author}</p>
                        <p className="text-xs text-gold uppercase tracking-widest mt-1">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>

      {/* COMMITMENT */}
      <section className="bg-primary text-primary-foreground py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gold/5" />
        <div className="max-w-3xl mx-auto px-8 relative z-10">
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-6">Sustainable Luxury</p>
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            Water is finite. Elegance is not.
          </h2>
          <p className="text-primary-foreground/70 leading-relaxed text-lg">
            Our aerators are engineered to reduce water consumption by up to 40% without
            compromising the volumetric feel of the flow. We believe that true luxury must be
            responsible to the environment it draws from.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-secondary py-24">
        <div className="max-w-5xl mx-auto px-8 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Visit Us</p>
            <h2 className="font-serif text-4xl md:text-5xl">
              See it. Touch it. Feel the weight of craft.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              The Joy Water display centre in Pune features over 300 pieces on live water — the only
              way to truly understand a finish is under your fingertips.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 mt-8 bg-primary text-primary-foreground px-8 py-4 text-sm uppercase tracking-[0.2em] hover:bg-gold hover:text-primary transition-all"
            >
              Book a Visit <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div
              className="aspect-[3/4] bg-cover bg-center rounded-2xl shadow-xl border border-border/80 transition-transform duration-700 hover:scale-[1.03]"
              style={{ backgroundImage: `url('/images/PDF1_P20_IMG2.png')` }}
            />
            <div
              className="aspect-[3/4] bg-cover bg-center rounded-2xl shadow-xl border border-border/80 mt-8 transition-transform duration-700 hover:scale-[1.03]"
              style={{ backgroundImage: `url('/HEROSECTIONIMAGES/Round Controller Basin Mixer.png')` }}
            />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
