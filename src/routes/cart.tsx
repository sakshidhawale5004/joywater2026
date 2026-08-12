import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { useCart } from "@/hooks/useCart";
import { Trash2, ShoppingBag, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/cart")({
  component: CartPage,
});

function CartPage() {
  const { items, removeItem, clearCart } = useCart();

  const totalAmount = items.reduce((sum, item) => sum + item.price, 0);

  if (items.length === 0) {
    return (
      <SiteLayout>
        <div className="max-w-3xl mx-auto px-8 py-32 text-center flex flex-col items-center">
          <div className="w-24 h-24 bg-secondary/50 rounded-full flex items-center justify-center mx-auto mb-8 border border-border">
            <ShoppingBag className="w-10 h-10 text-muted-foreground" />
          </div>
          <h1 className="font-serif text-4xl mb-4 text-foreground">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-8 text-sm max-w-md mx-auto">
            You haven't added any products to your cart yet. Browse our collections to find pieces you love.
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
          <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Shopping Cart</p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground">
            Your Cart
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-16 grid lg:grid-cols-12 gap-16 items-start">
        {/* Left Side: Cart Items */}
        <div className="lg:col-span-8 flex flex-col gap-6">
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

        {/* Right Side: Order Summary */}
        <div className="lg:col-span-4">
          <div className="bg-secondary/40 border border-border/60 rounded-2xl p-8 sticky top-32">
            <h2 className="font-serif text-2xl mb-6 border-b border-border/60 pb-4">Order Summary</h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">₹ {totalAmount.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Tax</span>
                <span className="font-medium">Calculated at checkout</span>
              </div>
              
              <div className="border-t border-border/60 pt-4 mt-4 flex justify-between items-center">
                <span className="font-serif text-lg">Total</span>
                <span className="font-serif text-2xl text-gold">₹ {totalAmount.toLocaleString("en-IN")}</span>
              </div>
            </div>

            <Link
              to="/checkout"
              className="w-full bg-gradient-to-r from-gold to-[#b3922c] text-white py-4 rounded-lg text-xs uppercase tracking-[0.25em] font-semibold hover:brightness-110 transition-all shadow-lg flex justify-center items-center gap-2 group"
            >
              Proceed to Checkout
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <div className="w-8 h-8 rounded bg-background border border-border flex items-center justify-center">🔒</div>
                <p>Secure checkout powered by Stripe</p>
              </div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <div className="w-8 h-8 rounded bg-background border border-border flex items-center justify-center">📦</div>
                <p>Free express shipping on all orders</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
