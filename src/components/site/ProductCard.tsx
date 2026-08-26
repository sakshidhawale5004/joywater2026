import { Link } from "@tanstack/react-router";
import type { Product } from "@/lib/catalog/data";

const FINISH_STYLES: Record<string, string> = {
  "Matt Black": "from-neutral-900 to-neutral-700",
  Chrome: "from-slate-300 to-slate-500",
  "Brushed Gold": "from-amber-300 to-yellow-600",
  "Rose Gold": "from-rose-300 to-pink-500",
  "Venetian Gold": "from-yellow-400 to-amber-700",
  "Graphite Grey": "from-neutral-600 to-neutral-800",
  "Brushed Rose Gold": "from-rose-200 to-rose-500",
  "Matt White": "from-neutral-100 to-neutral-300",
  "PVD Gold": "from-amber-200 to-amber-600",
};

export function ProductCard({ product }: { product: Product }) {
  const gradient = FINISH_STYLES[product.finish] ?? "from-neutral-200 to-neutral-400";
  return (
    <Link to="/product/$slug" params={{ slug: product.slug }} className="group block">
      <div className="relative aspect-square overflow-hidden bg-white border border-border/60 rounded-lg flex items-center justify-center transition-all duration-500 group-hover:border-gold/60 group-hover:shadow-md">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <>
            <div
              className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-90 transition-transform duration-700 group-hover:scale-110`}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_60%)]" />
            <svg
              viewBox="0 0 200 200"
              className="absolute inset-0 w-full h-full text-white/80 mix-blend-overlay p-10"
            >
              <path
                d="M60 40 v40 a20 20 0 0 0 40 0 v-40"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              />
              <rect
                x="70"
                y="80"
                width="60"
                height="90"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                rx="4"
              />
              <circle cx="100" cy="130" r="10" fill="currentColor" opacity="0.4" />
            </svg>
          </>
        )}
      </div>
      <div className="pt-3 space-y-1">
        <div className="text-xs font-semibold tracking-wider text-gold mb-1">
          {product.code}
        </div>
        <h3 className="text-sm font-medium text-foreground group-hover:text-gold transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-muted-foreground">{product.finish}</p>
        {product.maxPrice ? (
          <p className="text-sm font-serif text-primary">₹ {product.price.toLocaleString("en-IN")} - ₹ {product.maxPrice.toLocaleString("en-IN")}</p>
        ) : product.originalPrice ? (
          <p className="text-sm font-serif text-primary">
            <span className="line-through text-muted-foreground mr-2">₹ {product.originalPrice.toLocaleString("en-IN")}</span>
            ₹ {product.price.toLocaleString("en-IN")}
          </p>
        ) : (
          <p className="text-sm font-serif text-primary">₹ {product.price.toLocaleString("en-IN")}</p>
        )}
      </div>
    </Link>
  );
}
