import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ProductCard } from "@/components/site/ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { products } from "@/lib/catalog/data";
const hero = "/images/Black-Horizontal.jpg.jpeg";
const catFaucets = "/images/designer-faucets-new.jpg";
const catShowers = "/images/PDF1_P20_IMG2.png";
const catBasins = "/images/stone-basins-new.jpg";
const catToilets = "/images/PDF1_P40_IMG1.png";
const catAccessories = "/images/PDF1_P50_IMG1.png";
import { ArrowRight, Star } from "lucide-react";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const heroSlides = [
  {
    image: "/hero/banner-final-1.png",
    title: "Premium Hand Showers",
    subtitle: "Engineered for an unmatched experience.",
    category: "Showers",
    link: "/category/hand-shower"
  },
  {
    image: "/hero/banner-final-2.png",
    title: "Joy Spot Showers",
    subtitle: "Immerse yourself in pure overhead luxury.",
    category: "Showers",
    link: "/category/joy-spot-wall-mounted-shower"
  },
  {
    image: "/hero/banner-final-3.png",
    title: "Waterfall Showers",
    subtitle: "Sculptured elegance for timeless grandeur.",
    category: "Showers",
    link: "/category/waterfall-showers"
  },
  {
    image: "/hero/banner-final-4.png",
    title: "Wall Mounted Showers",
    subtitle: "Innovative design for a refreshing rain.",
    category: "Showers",
    link: "/category/2-function-wall-mounted-shower-arm"
  },
  {
    image: "/hero/banner-final-5.png",
    title: "Designer Mirrors",
    subtitle: "Reflecting elegance and modern luxury.",
    category: "Mirrors",
    link: "/category/led-mirrors"
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
    title: "Sanitaryware Basins",
    slug: "sanitaryware-basins",
    image: "/HEROSECTIONIMAGES/Sanitaryware Collections.jpg",
    tag: "Ceramic Excellence",
  },
  {
    title: "Mirrors & Accessories",
    slug: "led-mirrors",
    image: "/HEROSECTIONIMAGES/Metal LED Mirrors.jpg",
    tag: "Finishing Touches",
  },
];

function Index() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative w-full overflow-hidden bg-black group h-[90vh] min-h-[600px]">
        <Carousel
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: 6000,
              stopOnInteraction: false,
            }),
          ]}
          opts={{ loop: true, watchDrag: false }}
          className="w-full relative z-0 h-full"
        >
          <CarouselContent className="h-full">
            {heroSlides.map((slide, i) => (
              <CarouselItem key={i} className="min-w-0 flex-[0_0_100%] relative h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute top-[35%] md:top-[40%] z-10 max-w-7xl mx-auto px-16 md:px-24 lg:px-32 w-full">
                  <div className="animate-reveal max-w-2xl flex flex-col items-start text-left">
                    <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-gold mb-3 drop-shadow-md font-normal">
                      {slide.subtitle}
                    </p>
                    <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white font-light mb-6 drop-shadow-xl leading-tight">
                      {slide.title}
                    </h2>
                    
                    <Link
                      to={slide.link}
                      className="inline-flex items-center justify-center bg-white text-black px-10 py-4 font-semibold text-sm hover:bg-gold hover:text-black transition-colors rounded-sm uppercase tracking-widest"
                    >
                      Explore {slide.category}
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Pagination indicators */}
          <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                className={`h-1.5 transition-all duration-500 rounded-full ${
                  current === index ? "w-12 bg-gold" : "w-6 bg-white/40 hover:bg-white/80"
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 h-14 w-14 rounded-full bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 backdrop-blur-md z-20 transition-all hidden md:flex opacity-0 group-hover:opacity-100" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 h-14 w-14 rounded-full bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 backdrop-blur-md z-20 transition-all hidden md:flex opacity-0 group-hover:opacity-100" />
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((c) => (
            <Link
              key={c.slug}
              to="/category/$slug"
              params={{ slug: c.slug }}
              className="group relative overflow-hidden bg-secondary rounded-2xl border border-border/60 shadow-md hover:shadow-xl transition-all duration-500 h-[380px] sm:h-[420px] flex flex-col justify-end p-8 md:p-10"
            >
              <img
                src={c.image}
                alt={c.title}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-95" />
              <div className="relative z-10">
                <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3 font-semibold">{c.tag}</p>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-4 leading-snug font-normal">{c.title}</h3>
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/90 group-hover:text-gold transition-colors font-medium">
                  Explore <ArrowRight className="h-3.5 w-3.5" />
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
              {products
                .filter((p) => [
                  "stone-is-the-king-of-luxury-26",
                  "customized-mirrors-6",
                  "premium-basin-mixer-6",
                  "sanitaryware-basins-2",
                  "joy-spot-wall-mounted-shower-1"
                ].includes(p.slug))
                .map((p) => (
                <CarouselItem key={p.id} className="pl-4 md:pl-8 sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
                  <ProductCard product={p} />
                </CarouselItem>
              ))}
            </CarouselContent>
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
                { text: "Had a fantastic experience shopping at Joy Water! Their selection of mirrors and bathroom accessories is truly stylish and high quality. From modern minimalist designs to more classic looks, they have something for every taste.", author: "Vicky Kothari", role: "Local Guide" },
                { text: "We are selling Joy water products since 5 years. The quality of these products are excellent. I personally use the products for my clients they have wide range of products for Luxurious bathroom...", author: "Pratik Choudhary", role: "Business Partner" },
                { text: "Recently visited the Joy Water It's Elegant Bathroom Accessories Showroom and had an amazing experience. ❤️ The quality of products is top notch. You can easily find both stainless steel and brass fittings.", author: "Siddharam Daprabad", role: "Customer" },
                { text: "I just visited JOY WATER display center Near ISKCON temple, Good collection of showering system they have. They have premium diverter collection than Big brands in very reasonable Cost with 11 year warranty.", author: "Sourve Khalge", role: "Customer" },
                { text: "I bought three bunglow Material for me and my cousin brother. Smooth selection done at display centre. Very Good Quality of diverter and Showers.", author: "Vikrant Takale", role: "Customer" },
                { text: "We experienced this products from so many years ago. good showering systems and fittings. Check Joy water once.", author: "Yogesh Jagtap", role: "Customer" },
              ].map((t, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-4 h-full">
                    <div className="bg-background p-8 rounded-xl h-full flex flex-col justify-between border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                      <div>
                        <div className="flex gap-1 mb-4 text-gold">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                        <p className="text-muted-foreground italic mb-6 leading-relaxed">"{t.text}"</p>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{t.author}</p>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">{t.role}</p>
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

      {/* INSPIRATION GALLERY */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Project Gallery</p>
            <h2 className="font-serif text-4xl md:text-5xl">
              Spaces defined by water.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
            <div className="col-span-2 row-span-2 overflow-hidden rounded-2xl group relative">
              <img src="/homepagebannerforslider/banner 8.jpg" alt="Gallery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <div className="col-span-2 md:col-span-1 overflow-hidden rounded-2xl group relative">
              <img src="/images/PDF1_P20_IMG2.png" alt="Gallery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <div className="col-span-2 md:col-span-1 overflow-hidden rounded-2xl group relative">
              <img src="/images/designer-faucets-new.jpg" alt="Gallery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <div className="col-span-2 overflow-hidden rounded-2xl group relative">
              <img src="/homepagebannerforslider/banner 9.jpg" alt="Gallery" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/40 py-24 border-y border-border/60">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Support</p>
            <h2 className="font-serif text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-border/60">
              <AccordionTrigger className="text-lg hover:text-gold transition-colors font-medium">What does the 11-year warranty cover?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                Our comprehensive 10-year base warranty plus 1 additional year covers all brass and stainless steel assemblies against manufacturing defects. Internal ceramic cartridges and thermostatic elements are also fully supported.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-border/60">
              <AccordionTrigger className="text-lg hover:text-gold transition-colors font-medium">How do I maintain PVD finishes?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                PVD finishes are highly durable and integrated into the metal. We recommend cleaning with a soft microfibre cloth and mild soap. Avoid abrasive cleaners and scouring pads to maintain the brilliant shine for lifetimes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-border/60">
              <AccordionTrigger className="text-lg hover:text-gold transition-colors font-medium">Are your products suitable for hard water?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                Yes, our Neoperl Swiss aerators and Vernet thermostatic cartridges are designed to perform exceptionally well even in hard water conditions. We recommend periodic descaling of the aerators for optimal flow.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-border/60 border-b-0">
              <AccordionTrigger className="text-lg hover:text-gold transition-colors font-medium">Can I customize the finish or dimensions?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                Yes, we offer over 18 PVD finishes. Our architectural mirrors and natural stone basins can also be tailored to match your specific interior design requirements.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-primary text-primary-foreground py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gold/5" />
        <div className="max-w-3xl mx-auto px-8 relative z-10 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-6">Stay Inspired</p>
          <h2 className="font-serif text-3xl md:text-5xl mb-6 leading-tight">
            Join the inner circle of architectural luxury.
          </h2>
          <p className="text-primary-foreground/70 leading-relaxed text-lg mb-10">
            Subscribe to receive our latest digital catalogs, architectural insights, and exclusive invitations to design events.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <Input 
              type="email" 
              placeholder="Enter your email address" 
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-gold h-12"
            />
            <Button className="bg-gold text-primary hover:bg-white hover:text-primary h-12 px-8 uppercase tracking-[0.2em] text-xs transition-all">
              Subscribe
            </Button>
          </form>
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
