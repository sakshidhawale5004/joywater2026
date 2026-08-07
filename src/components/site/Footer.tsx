import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <div className="mb-4 inline-block bg-background rounded-lg p-2">
            <img src={logo} alt="Joy Water" className="h-12 w-auto" />
          </div>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Timeless luxury bath fittings, sanitaryware and designer basins — crafted for lifetimes.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li>
              <Link to="/" className="hover:text-gold">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gold">
                About Joy Water
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-gold">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-gold">
                All Products
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gold">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/warranty" className="hover:text-gold">
                Warranty
              </Link>
            </li>
            <li>
              <Link to="/care" className="hover:text-gold">
                Care & Maintenance
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Visit</h4>
          <p className="text-sm text-primary-foreground/80 leading-relaxed">
            Joy Water Display Centre
            <br />
            Pune, Maharashtra, India
          </p>
          <a
            href="https://maps.google.com/?q=Joy+Water+Pune"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-3 text-sm text-gold hover:underline"
          >
            <MapPin className="h-4 w-4" /> Directions
          </a>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Reach Us</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-gold" />{" "}
              <span>
                Manoj Pandey
                <br />
                <a href="tel:+919325948289" className="hover:text-gold">
                  +91 93259 48289
                </a>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-gold" />{" "}
              <span>
                Swapnil Jain
                <br />
                <a href="tel:+917083845647" className="hover:text-gold">
                  +91 70838 45647
                </a>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 text-gold" />{" "}
              <a href="mailto:hello@joywater.in" className="hover:text-gold">
                hello@joywater.in
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-6 px-8 text-xs text-primary-foreground/50 flex flex-wrap items-center justify-between gap-3">
        <span>© {new Date().getFullYear()} Joy Water. All rights reserved.</span>
        <span className="tracking-[0.3em] uppercase">Timeless · Luxury · Handcrafted</span>
      </div>
    </footer>
  );
}
