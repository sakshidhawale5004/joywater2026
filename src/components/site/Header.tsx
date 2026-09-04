import { Link, useNavigate } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { Menu, X, Phone, MapPin, ChevronDown, Search, ShoppingBag } from "lucide-react";
import logo from "@/assets/logo.png";
import { megaMenu, getCategory, products } from "@/lib/catalog/data";
import { cn } from "@/lib/utils";
import { useCart } from "@/hooks/useCart";

type MenuKey = keyof typeof megaMenu;
const NAV = Object.keys(megaMenu) as MenuKey[];

export function Header() {
  const [open, setOpen] = useState<MenuKey | null>(null);
  const [mobile, setMobile] = useState(false);
  
  // Search State
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cartItems = useCart((state) => state.items);

  // Focus input when search opens
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  // Derived Search Results
  const searchResults = searchQuery.trim().length > 1 
    ? products.filter(p => {
        const query = searchQuery.toLowerCase();
        return (
          p.name.toLowerCase().includes(query) ||
          p.code.toLowerCase().includes(query) ||
          p.finish.toLowerCase().includes(query)
        );
      }).slice(0, 6)
    : [];

  const handleMouseEnter = (label: MenuKey) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpen(label);
  };

  const handleDropdownMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setOpen(null);
    }, 300);
  };

  return (
    <header
      className="sticky top-0 z-50 bg-white border-b border-border/60"
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleDropdownMouseEnter}
    >
      <div className="relative z-10 hidden md:flex items-center justify-between px-8 py-2 text-xs tracking-widest uppercase text-muted-foreground bg-primary/90 text-primary-foreground/80">
        <span>Timeless Luxury · Handcrafted Bath Fittings</span>
        <div className="flex gap-6">
          <a
            href="tel:+919325948289"
            className="flex items-center gap-2 hover:text-gold transition-colors"
          >
            <Phone className="h-3 w-3" /> +91 93259 48289
          </a>
          <a href="https://www.google.com/maps/place/Joy+Water/@18.4539939,73.8797556,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2eb8c71b642c3:0xa5df08549d70bca3!8m2!3d18.4539939!4d73.8797556!16s%2Fg%2F11h0h1hjbs?entry=tts&g_ep=EgoyMDI0MDkyNS4wKgBIAVAD" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold transition-colors">
            <MapPin className="h-3 w-3" /> Pune, India
          </a>
        </div>
      </div>
      <div className="relative z-10 flex items-center justify-between px-6 md:px-10 py-4">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Joy Water"
            className="h-28 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        <nav className="hidden lg:flex items-center gap-2 xl:gap-4">
          {NAV.map((label) => (
            <div
              key={label}
              onMouseEnter={() => handleMouseEnter(label)}
              className="relative py-3 -my-3 flex items-center"
            >
              <button
                onClick={() => setOpen(open === label ? null : label)}
                className={cn(
                  "px-2 xl:px-3 py-3 text-sm uppercase tracking-wider font-medium transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5",
                  open === label ? "text-gold" : "text-foreground hover:text-gold",
                )}
              >
                {label}
                <ChevronDown className={cn("h-4 w-4 transition-transform duration-300 opacity-60", open === label ? "rotate-180" : "")} />
              </button>
            </div>
          ))}

        </nav>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={() => {
              setSearchOpen(!searchOpen);
              setOpen(null);
            }}
            className="hidden lg:flex items-center justify-center p-2 text-muted-foreground hover:text-gold transition-colors"
          >
            {searchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
          </button>
          <Link to="/cart" className="hidden lg:flex items-center gap-2 bg-gradient-to-b from-[#d4af37] to-[#b3922c] text-white shadow-[0_6px_0_#886f21,0_10px_15px_-3px_rgba(0,0,0,0.3)] hover:shadow-[0_4px_0_#886f21,0_6px_10px_-2px_rgba(0,0,0,0.3)] hover:translate-y-[2px] active:shadow-none active:translate-y-[6px] transition-all px-6 py-2 rounded-md uppercase tracking-widest text-xs font-bold border-t border-[#f5de93]/40">
            <div className="relative">
              <ShoppingBag className="h-4 w-4" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full border border-[#886f21]">
                  {cartItems.length}
                </span>
              )}
            </div>
            Cart
          </Link>


          <button className="lg:hidden p-2" onClick={() => setMobile(!mobile)} aria-label="Menu">
            {mobile ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div
          className="hidden lg:block absolute left-0 right-0 top-full bg-background border-t border-border shadow-[0_20px_50px_-20px_rgba(0,0,0,0.2)] z-50"
          onMouseEnter={handleDropdownMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-7xl mx-auto grid grid-cols-5 gap-10 px-10 py-10">
            {Object.entries(megaMenu[open]).map(([section, slugs]) => (
              <div key={section}>
                <h4 className="text-xs uppercase tracking-[0.2em] font-semibold mb-4 text-primary">
                  {section}
                </h4>
                <ul className="flex flex-col gap-y-3">
                  {(slugs as readonly string[]).map((slug) => (
                    <li key={slug} className="break-inside-avoid">
                      <Link
                        to={section === "Showers In PVD Finishes" ? "/showers-in-finish/$slug" : section === "Mixers In PVD Finishes" ? "/diverters-mixers-in-finish/$slug" : "/category/$slug"}
                        params={{ slug }}
                        onClick={() => setOpen(null)}
                        className="text-xs text-muted-foreground hover:text-gold transition-colors story-link inline-block"
                      >
                        {formatSlug(slug)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {mobile && (
        <div className="lg:hidden border-t border-border bg-background max-h-[70vh] overflow-y-auto">
          {NAV.map((label) => (
            <details key={label} className="border-b border-border">
              <summary className="px-6 py-4 text-xs uppercase tracking-widest cursor-pointer">
                {label}
              </summary>
              <div className="px-6 pb-4">
                <div className="space-y-2">
                  {Object.entries(megaMenu[label]).flatMap(([section, slugs]) =>
                    (slugs as readonly string[]).map((slug) => (
                      <Link
                        key={slug}
                        to={section === "Showers In PVD Finishes" ? "/showers-in-finish/$slug" : section === "Mixers In PVD Finishes" ? "/diverters-mixers-in-finish/$slug" : "/category/$slug"}
                        params={{ slug }}
                        onClick={() => setMobile(false)}
                        className="block text-xs text-muted-foreground py-1"
                      >
                        {formatSlug(slug)}
                      </Link>
                    )),
                  )}
                </div>
              </div>
            </details>
          ))}
          <Link
            to="/cart"
            onClick={() => setMobile(false)}
            className="flex items-center gap-2 px-6 py-4 text-xs uppercase tracking-widest"
          >
            <ShoppingBag className="w-4 h-4" /> Cart
            {cartItems.length > 0 && (
              <span className="bg-gold text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      )}

      {/* Search Overlay Dropdown */}
      {searchOpen && (
        <div className="hidden lg:block absolute left-0 right-0 top-full bg-white border-t border-border shadow-[0_20px_50px_-20px_rgba(0,0,0,0.2)] z-50">
          <div className="max-w-7xl mx-auto px-8 py-8">
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products by name, code (e.g. JW-100), or finish..."
                className="w-full bg-secondary/30 border-2 border-border/80 rounded-xl pl-14 pr-4 py-4 text-lg focus:outline-none focus:border-gold transition-colors"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>

            {searchQuery.trim().length > 1 && (
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 font-semibold">
                  {searchResults.length > 0 ? "Top Results" : "No results found"}
                </p>
                {searchResults.length > 0 ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {searchResults.map((product) => (
                      <Link 
                        key={product.id}
                        to="/product/$slug"
                        params={{ slug: product.slug }}
                        onClick={() => {
                          setSearchOpen(false);
                          setSearchQuery("");
                        }}
                        className="flex gap-4 p-4 border border-border/50 rounded-lg hover:border-gold/50 hover:bg-secondary/20 transition-all group"
                      >
                        <div className="w-16 h-16 bg-secondary/50 rounded flex-shrink-0 flex items-center justify-center p-1">
                          {product.image ? (
                            <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                          ) : (
                            <div className="w-full h-full bg-neutral-200" />
                          )}
                        </div>
                        <div className="flex-1 flex flex-col justify-center">
                          <p className="text-[10px] uppercase tracking-widest text-gold mb-1">{product.finish}</p>
                          <h4 className="font-serif text-sm text-foreground group-hover:text-gold transition-colors line-clamp-2 leading-snug">
                            {product.name}
                          </h4>
                          <p className="text-[10px] text-muted-foreground mt-1">SKU: {product.code}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="py-12 text-center text-muted-foreground">
                    No products found matching "{searchQuery}". Try a different term or finish color.
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

function formatSlug(slug: string) {
  return slug
    .replace(/-/g, " ")
    .replace(/\bpvd\b/gi, "PVD")
    .replace(/\babs\b/gi, "ABS")
    .replace(/\bro\b/gi, "RO")
    .replace(/\bwc\b/gi, "WC")
    .replace(/\bled\b/gi, "LED")
    .replace(/\b3d\b/gi, "3D")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
