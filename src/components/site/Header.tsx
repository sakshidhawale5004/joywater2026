import { Link } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { Menu, X, Phone, MapPin, ChevronDown, Search, ClipboardList } from "lucide-react";
import logo from "@/assets/logo.png";
import { megaMenu, getCategory } from "@/lib/catalog/data";
import { cn } from "@/lib/utils";

type MenuKey = keyof typeof megaMenu;
const NAV = Object.keys(megaMenu) as MenuKey[];

export function Header() {
  const [open, setOpen] = useState<MenuKey | null>(null);
  const [mobile, setMobile] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
      className="sticky top-0 z-50 bg-background border-b border-border/60"
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
          <Link to="/contact" className="flex items-center gap-2 hover:text-gold transition-colors">
            <MapPin className="h-3 w-3" /> Pune, India
          </Link>
        </div>
      </div>
      <div className="relative z-10 flex items-center justify-between px-6 md:px-10 py-4">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/FINAL-LOGO.png"
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
          <Link
            to="/contact"
            className="px-2 xl:px-3 py-3 text-sm uppercase tracking-wider font-medium hover:text-gold transition-colors whitespace-nowrap"
          >
            Contact
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <button className="hidden lg:flex items-center justify-center p-2 text-muted-foreground hover:text-gold transition-colors">
            <Search className="h-5 w-5" />
          </button>
          <button className="hidden lg:flex items-center gap-2 bg-[#4BCFBD] text-white px-5 py-2.5 hover:bg-[#3eb5a4] transition-colors rounded-sm uppercase tracking-wider text-xs font-semibold shadow-sm">
            <ClipboardList className="h-4 w-4" />
            My Selections
          </button>
          
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
          <div className="max-w-7xl mx-auto grid grid-cols-4 gap-10 px-10 py-10">
            {Object.entries(megaMenu[open]).map(([section, slugs]) => (
              <div key={section}>
                <h4 className="text-xs uppercase tracking-[0.2em] font-semibold mb-4 text-primary">
                  {section}
                </h4>
                <ul className="space-y-3">
                  {(slugs as readonly string[]).map((slug) => (
                    <li key={slug}>
                      <Link
                        to="/category/$slug"
                        params={{ slug }}
                        onClick={() => setOpen(null)}
                        className="text-xs text-muted-foreground hover:text-gold transition-colors story-link"
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
                  {Object.entries(megaMenu[label]).flatMap(([, slugs]) =>
                    (slugs as readonly string[]).map((slug) => (
                      <Link
                        key={slug}
                        to="/category/$slug"
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
            to="/contact"
            onClick={() => setMobile(false)}
            className="block px-6 py-4 text-xs uppercase tracking-widest"
          >
            Contact
          </Link>
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
