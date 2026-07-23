import { Link } from "@tanstack/react-router";
import type { Product } from "@/lib/catalog/data";

const FINISH_STYLES: Record<string, string> = {
  "Matt Black": "from-neutral-900 to-neutral-700",
  "Chrome": "from-slate-300 to-slate-500",
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
    <Link
      to="/product/$slug"
      params={{ slug: product.slug }}
      className="group block"
    >
      <div className="relative aspect-square overflow-hidden bg-secondary rounded-sm">
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-90 transition-transform duration-700 group-hover:scale-110`} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_60%)]" />
        <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full text-white/80 mix-blend-overlay p-10">
          <path d="M60 40 v40 a20 20 0 0 0 40 0 v-40" fill="none" stroke="currentColor" strokeWidth="3"/>
          <rect x="70" y="80" width="60" height="90" fill="none" stroke="currentColor" strokeWidth="3" rx="4"/>
          <circle cx="100" cy="130" r="10" fill="currentColor" opacity="0.4"/>
        </svg>
        <div className="absolute bottom-3 left-3 text-[10px] uppercase tracking-widest text-white/90 bg-black/30 backdrop-blur px-2 py-1 rounded-sm">
          {product.code}
        </div>
      </div>
      <div className="pt-3 space-y-1">
        <h3 className="text-sm font-medium text-foreground group-hover:text-gold transition-colors">{product.name}</h3>
        <p className="text-xs text-muted-foreground">{product.finish}</p>
        <p className="text-sm font-serif text-primary">₹ {product.price.toLocaleString("en-IN")}</p>
      </div>
    </Link>
  );
}