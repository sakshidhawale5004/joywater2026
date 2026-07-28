import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import { megaMenu, getCategory } from "@/lib/catalog/data";
import { cn } from "@/lib/utils";

type MenuKey = keyof typeof megaMenu;
const NAV = Object.keys(megaMenu) as MenuKey[];

export function Header() {
  const [open, setOpen] = useState<MenuKey | null>(null);
  const [mobile, setMobile] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border/60" onMouseLeave={() => setOpen(null)}>
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
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          <Link
            to="/"
            className="px-1.5 xl:px-2 py-3 text-[10px] uppercase tracking-[0.1em] font-medium hover:text-gold transition-colors whitespace-nowrap"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="px-1.5 xl:px-2 py-3 text-[10px] uppercase tracking-[0.1em] font-medium hover:text-gold transition-colors whitespace-nowrap"
          >
            About
          </Link>
          <Link
            to="/gallery"
            className="px-1.5 xl:px-2 py-3 text-[10px] uppercase tracking-[0.1em] font-medium hover:text-gold transition-colors whitespace-nowrap"
          >
            Gallery
          </Link>
          {NAV.map((label) => (
            <div key={label} onMouseEnter={() => setOpen(label)} className="relative">
              <button
                className={cn(
                  "px-1.5 xl:px-2 py-3 text-[10px] uppercase tracking-[0.1em] font-medium transition-colors whitespace-nowrap",
                  open === label ? "text-gold" : "text-foreground hover:text-gold",
                )}
              >
                {label}
              </button>
            </div>
          ))}
          <Link
            to="/contact"
            className="px-1.5 xl:px-2 py-3 text-[10px] uppercase tracking-[0.1em] font-medium hover:text-gold transition-colors whitespace-nowrap"
          >
            Contact
          </Link>
        </nav>
        <button className="lg:hidden p-2" onClick={() => setMobile(!mobile)} aria-label="Menu">
          {mobile ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div
          className="hidden lg:block absolute left-0 right-0 top-full bg-background border-t border-border shadow-[0_20px_50px_-20px_rgba(0,0,0,0.2)]"
          onMouseEnter={() => setOpen(open)}
          onMouseLeave={() => setOpen(null)}
        >
          {(() => {
            const allSlugs = Object.values(megaMenu[open]).flat();
            const hasImages = allSlugs.some((s) => Boolean(getCategory(s)?.image));
            return hasImages ? (
              <div className="max-w-7xl mx-auto px-10 py-8">
                {Object.entries(megaMenu[open]).map(([section, slugs]) => (
                  <div key={section} className="mb-6 last:mb-0">
                    <h4 className="text-xs uppercase tracking-[0.2em] font-semibold mb-6 text-primary">
                      {section}
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
                      {(slugs as readonly string[]).map((slug) => {
                        const cat = getCategory(slug);
                        return (
                          <Link
                            key={slug}
                            to="/category/$slug"
                            params={{ slug }}
                            onClick={() => setOpen(null)}
                            className="group flex flex-col rounded-lg border border-border/60 bg-card/40 hover:bg-card hover:border-gold/60 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md p-3"
                          >
                            <div className="w-full h-28 flex items-center justify-center bg-muted/20 rounded-md mb-3 overflow-hidden">
                              {cat?.image ? (
                                <img
                                  src={cat.image}
                                  alt={cat.title || formatSlug(slug)}
                                  className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                                />
                              ) : null}
                            </div>
                            <span className="text-[11px] font-medium text-foreground group-hover:text-gold transition-colors text-center line-clamp-2 leading-snug">
                              {cat?.title || formatSlug(slug)}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
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
            );
          })()}
        </div>
      )}

      {mobile && (
        <div className="lg:hidden border-t border-border bg-background max-h-[70vh] overflow-y-auto">
          <Link
            to="/"
            onClick={() => setMobile(false)}
            className="block px-6 py-4 border-b border-border text-xs uppercase tracking-widest"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setMobile(false)}
            className="block px-6 py-4 border-b border-border text-xs uppercase tracking-widest"
          >
            About
          </Link>
          <Link
            to="/gallery"
            onClick={() => setMobile(false)}
            className="block px-6 py-4 border-b border-border text-xs uppercase tracking-widest"
          >
            Gallery
          </Link>
          {NAV.map((label) => (
            <details key={label} className="border-b border-border">
              <summary className="px-6 py-4 text-xs uppercase tracking-widest cursor-pointer">
                {label}
              </summary>
              <div className="px-6 pb-4">
                {(() => {
                  const labelSlugs = Object.values(megaMenu[label]).flat();
                  const showImages = labelSlugs.some((s) => Boolean(getCategory(s)?.image));
                  return showImages ? (
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      {labelSlugs.map((slug) => {
                        const cat = getCategory(slug);
                        return (
                          <Link
                            key={slug}
                            to="/category/$slug"
                            params={{ slug }}
                            onClick={() => setMobile(false)}
                            className="flex flex-col items-center rounded-md border border-border/50 bg-card/30 p-2.5 text-center hover:border-gold/50 transition-colors"
                          >
                            <div className="h-20 w-full flex items-center justify-center mb-1.5">
                              {cat?.image ? (
                                <img
                                  src={cat.image}
                                  alt={cat.title || formatSlug(slug)}
                                  className="max-h-full max-w-full object-contain"
                                />
                              ) : null}
                            </div>
                            <span className="text-[10px] leading-tight text-muted-foreground font-medium">
                              {cat?.title || formatSlug(slug)}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
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
                  );
                })()}
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
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
