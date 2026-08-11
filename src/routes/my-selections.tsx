import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { useCart } from "@/hooks/useCart";
import { Trash2, ShoppingBag } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/my-selections")({
  component: MySelectionsPage,
});

function MySelectionsPage() {
  const { items, removeItem, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      clearCart();
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <SiteLayout>
        <div className="max-w-3xl mx-auto px-8 py-32 text-center flex flex-col items-center">
          <div className="w-24 h-24 bg-green-950/30 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-900/50">
            <span className="text-gold font-serif text-4xl">✓</span>
          </div>
          <h1 className="font-serif text-4xl mb-4 text-foreground">Enquiry Submitted</h1>
          <p className="text-muted-foreground mb-8 text-sm max-w-md mx-auto leading-relaxed">
            Thank you for your interest in Joy Water. Our team has received your selections and will contact you shortly with a tailored quote and consultation details.
          </p>
          <Link
            to="/"
            className="inline-flex justify-center items-center bg-secondary text-foreground border border-border px-8 py-4 rounded-lg text-xs uppercase tracking-[0.25em] font-semibold hover:border-gold transition-all"
          >
            Return to Home
          </Link>
        </div>
      </SiteLayout>
    );
  }

  if (items.length === 0) {
    return (
      <SiteLayout>
        <div className="max-w-3xl mx-auto px-8 py-32 text-center flex flex-col items-center">
          <div className="w-24 h-24 bg-secondary/50 rounded-full flex items-center justify-center mx-auto mb-8 border border-border">
            <ShoppingBag className="w-10 h-10 text-muted-foreground" />
          </div>
          <h1 className="font-serif text-4xl mb-4 text-foreground">Your Selections is Empty</h1>
          <p className="text-muted-foreground mb-8 text-sm max-w-md mx-auto">
            You haven't added any products to your selections yet. Browse our collections to find pieces you love.
          </p>
          <Link
            to="/products"
            className="inline-flex justify-center items-center bg-primary text-primary-foreground px-8 py-4 rounded-lg text-xs uppercase tracking-[0.25em] font-semibold hover:bg-gold hover:text-primary transition-all shadow-lg"
          >
            Explore Collections
          </Link>
        </div>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <section className="bg-secondary/30 border-b border-border/60">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Your Wishlist</p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground">
            My Selections
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-16 grid lg:grid-cols-12 gap-16 items-start">
        {/* Left Side: Cart Items */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="flex items-center justify-between border-b border-border/60 pb-4">
            <h2 className="text-lg font-serif">Selected Pieces ({items.length})</h2>
            <button
              onClick={clearCart}
              className="text-xs uppercase tracking-widest text-muted-foreground hover:text-red-500 transition-colors"
            >
              Clear All
            </button>
          </div>

          <div className="flex flex-col gap-4">
            {items.map((item) => (
              <div key={item.id} className="flex gap-6 bg-secondary/20 border border-border/40 p-4 rounded-xl relative group">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-white/5 rounded-lg border border-border/50 flex items-center justify-center p-2 flex-shrink-0">
                  {item.image ? (
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                  ) : (
                    <div className="w-full h-full bg-neutral-800 rounded flex items-center justify-center">
                      <span className="text-[10px] text-muted-foreground uppercase tracking-widest text-center">No<br/>Image</span>
                    </div>
                  )}
                </div>
                
                <div className="flex-1 py-2 flex flex-col justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gold mb-1">{item.finish}</p>
                    <h3 className="font-serif text-lg md:text-xl text-foreground leading-tight mb-1">
                      <Link to="/product/$slug" params={{ slug: item.slug }} className="hover:underline">
                        {item.name}
                      </Link>
                    </h3>
                    <p className="text-xs text-muted-foreground font-mono">SKU: {item.code}</p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <p className="font-serif text-lg text-primary">₹ {item.price.toLocaleString("en-IN")}</p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-muted-foreground hover:text-red-500 transition-colors p-2"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Enquiry Form */}
        <div className="lg:col-span-5">
          <div className="bg-secondary/40 border border-border/60 rounded-2xl p-8 sticky top-32">
            <h2 className="font-serif text-2xl mb-2">Request a Quote</h2>
            <p className="text-sm text-muted-foreground mb-8">
              Submit your selections and our team will get back to you with pricing, availability, and consultation options.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs uppercase tracking-widest text-muted-foreground">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                  placeholder="Jane Doe"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-foreground">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                  placeholder="jane@example.com"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-xs uppercase tracking-widest text-muted-foreground">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground">Additional Details</label>
                <textarea
                  id="message"
                  rows={3}
                  className="bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-gold to-[#b3922c] text-white py-4 rounded-lg text-xs uppercase tracking-[0.25em] font-semibold hover:brightness-110 transition-all shadow-lg mt-2 disabled:opacity-70 flex justify-center items-center"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                ) : (
                  "Submit Enquiry"
                )}
              </button>
              
              <p className="text-[10px] text-center text-muted-foreground mt-2">
                Your data is secure. We never share your information.
              </p>
            </form>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
