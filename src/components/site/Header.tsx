import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import bgImage from "@/assets/hero-faucet.jpg";
import { megaMenu } from "@/lib/catalog/data";
import { cn } from "@/lib/utils";

type MenuKey = keyof typeof megaMenu;
const NAV = Object.keys(megaMenu) as MenuKey[];

export function Header() {
  const [open, setOpen] = useState<MenuKey | null>(null);
  const [mobile, setMobile] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-background/85 backdrop-blur-xl" />

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
          <span className="text-2xl font-light tracking-[0.3em] uppercase text-foreground transition-colors group-hover:text-gold">
            Joy Water
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-4" onMouseLeave={() => setOpen(null)}>
          <Link
            to="/"
            className="px-4 py-3 text-xs uppercase tracking-[0.15em] font-medium hover:text-gold transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="px-4 py-3 text-xs uppercase tracking-[0.15em] font-medium hover:text-gold transition-colors"
          >
            About
          </Link>
          <Link
            to="/gallery"
            className="px-4 py-3 text-xs uppercase tracking-[0.15em] font-medium hover:text-gold transition-colors"
          >
            Gallery
          </Link>
          {NAV.map((label) => (
            <div key={label} onMouseEnter={() => setOpen(label)} className="relative">
              <button
                className={cn(
                  "px-4 py-3 text-xs uppercase tracking-[0.15em] font-medium transition-colors",
                  open === label ? "text-gold" : "text-foreground hover:text-gold",
                )}
              >
                {label}
              </button>
            </div>
          ))}
          <Link
            to="/contact"
            className="px-4 py-3 text-xs uppercase tracking-[0.15em] font-medium hover:text-gold transition-colors"
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
              <div className="px-6 pb-4 space-y-2">
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
