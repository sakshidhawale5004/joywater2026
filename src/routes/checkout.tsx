import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { useCart } from "@/hooks/useCart";
import { useState } from "react";
import { CheckCircle2, CreditCard, Truck, ShieldCheck, ChevronLeft } from "lucide-react";

export const Route = createFileRoute("/checkout")({
  component: CheckoutPage,
});

function CheckoutPage() {
  const { items, clearCart } = useCart();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalAmount = items.reduce((sum, item) => sum + item.price, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      clearCart();
    }, 2000);
  };

  if (items.length === 0 && !isSubmitted) {
    navigate({ to: "/cart" });
    return null;
  }

  if (isSubmitted) {
    return (
      <SiteLayout>
        <div className="max-w-3xl mx-auto px-8 py-32 text-center flex flex-col items-center">
          <div className="w-24 h-24 bg-green-950/30 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-900/50 relative overflow-hidden">
             <div className="absolute inset-0 bg-green-500/20 animate-pulse"></div>
            <CheckCircle2 className="w-12 h-12 text-green-500 relative z-10" />
          </div>
          <h1 className="font-serif text-4xl mb-4 text-foreground">Order Confirmed!</h1>
          <p className="text-muted-foreground mb-8 text-sm max-w-md mx-auto leading-relaxed">
            Thank you for your purchase. Your order number is <strong>#JW{Math.floor(Math.random() * 100000)}</strong>. We've sent a confirmation email with your order details.
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

  return (
    <SiteLayout>
      <section className="bg-secondary/30 border-b border-border/60">
        <div className="max-w-7xl mx-auto px-8 py-10">
          <Link to="/cart" className="inline-flex items-center text-xs uppercase tracking-widest text-muted-foreground hover:text-gold transition-colors mb-6">
            <ChevronLeft className="w-4 h-4 mr-1" /> Back to Cart
          </Link>
          <h1 className="font-serif text-4xl text-foreground">
            Checkout
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-16 grid lg:grid-cols-12 gap-16 items-start">
        {/* Left Side: Checkout Form */}
        <div className="lg:col-span-7 flex flex-col gap-10">
          <form id="checkout-form" onSubmit={handleSubmit} className="flex flex-col gap-10">
            {/* Contact Information */}
            <div>
              <h2 className="text-xl font-serif mb-6 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-gold/20 text-gold flex items-center justify-center text-xs">1</span>
                Contact Information
              </h2>
              <div className="grid gap-5">
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
                  <label htmlFor="phone" className="text-xs uppercase tracking-widest text-muted-foreground">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>
            </div>

            <div className="h-px bg-border/60" />

            {/* Shipping Address */}
            <div>
              <h2 className="text-xl font-serif mb-6 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-gold/20 text-gold flex items-center justify-center text-xs">2</span>
                Shipping Address
              </h2>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2 sm:col-span-1">
                  <label htmlFor="firstName" className="text-xs uppercase tracking-widest text-muted-foreground">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    className="bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2 sm:col-span-1">
                  <label htmlFor="lastName" className="text-xs uppercase tracking-widest text-muted-foreground">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    className="bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label htmlFor="address" className="text-xs uppercase tracking-widest text-muted-foreground">Address *</label>
                  <input
                    type="text"
                    id="address"
                    required
                    className="bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2 sm:col-span-1">
                  <label htmlFor="city" className="text-xs uppercase tracking-widest text-muted-foreground">City *</label>
                  <input
                    type="text"
                    id="city"
                    required
                    className="bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2 sm:col-span-1">
                  <label htmlFor="pincode" className="text-xs uppercase tracking-widest text-muted-foreground">PIN Code *</label>
                  <input
                    type="text"
                    id="pincode"
                    required
                    className="bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
              </div>
            </div>

            <div className="h-px bg-border/60" />

            {/* Payment Method */}
            <div>
              <h2 className="text-xl font-serif mb-6 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-gold/20 text-gold flex items-center justify-center text-xs">3</span>
                Payment
              </h2>
              <div className="bg-background border border-border rounded-xl overflow-hidden">
                <div className="p-4 border-b border-border bg-secondary/30 flex items-center gap-3">
                  <input type="radio" id="card" name="payment" defaultChecked className="accent-gold w-4 h-4" />
                  <label htmlFor="card" className="font-medium flex-1 cursor-pointer">Credit / Debit Card</label>
                  <div className="flex gap-1">
                    <div className="w-8 h-5 bg-neutral-200 rounded text-[8px] flex items-center justify-center font-bold text-neutral-600">VISA</div>
                    <div className="w-8 h-5 bg-neutral-200 rounded text-[8px] flex items-center justify-center font-bold text-neutral-600">MC</div>
                  </div>
                </div>
                <div className="p-5 grid gap-4 bg-secondary/10">
                  <div className="flex flex-col gap-2">
                    <input
                      type="text"
                      placeholder="Card Number"
                      className="bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors font-mono"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <input
                        type="text"
                        placeholder="MM / YY"
                        className="bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors font-mono"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <input
                        type="text"
                        placeholder="CVC"
                        className="bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors font-mono"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border-t border-border flex items-center gap-3 opacity-60">
                  <input type="radio" id="upi" name="payment" className="accent-gold w-4 h-4" />
                  <label htmlFor="upi" className="font-medium flex-1 cursor-pointer">UPI (GPay, PhonePe, etc.)</label>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Right Side: Order Summary */}
        <div className="lg:col-span-5">
          <div className="bg-secondary/40 border border-border/60 rounded-2xl p-6 lg:p-8 sticky top-32">
            <h2 className="font-serif text-2xl mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
              {items.map(item => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-16 h-16 bg-white/5 rounded border border-border/50 flex-shrink-0 p-1 flex items-center justify-center">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                    ) : (
                      <div className="w-full h-full bg-neutral-800 rounded"></div>
                    )}
                  </div>
                  <div className="flex-1 text-sm">
                    <p className="font-medium text-foreground line-clamp-1">{item.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.finish}</p>
                  </div>
                  <div className="text-sm font-medium">
                    ₹{item.price.toLocaleString("en-IN")}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="space-y-3 pt-6 border-t border-border/60 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>₹ {totalAmount.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Taxes</span>
                <span>Calculated at checkout</span>
              </div>
              
              <div className="border-t border-border/60 pt-4 mt-4 flex justify-between items-center">
                <span className="font-serif text-lg">Total</span>
                <span className="font-serif text-2xl text-gold">₹ {totalAmount.toLocaleString("en-IN")}</span>
              </div>
            </div>

            <button
              form="checkout-form"
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-gold to-[#b3922c] text-white py-4 rounded-lg text-xs uppercase tracking-[0.25em] font-semibold hover:brightness-110 transition-all shadow-lg flex justify-center items-center gap-2"
            >
              {isSubmitting ? (
                <span className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              ) : (
                <>Pay ₹{totalAmount.toLocaleString("en-IN")}</>
              )}
            </button>
            
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center text-center gap-2 text-xs text-muted-foreground p-3 bg-background rounded-lg border border-border">
                <ShieldCheck className="w-5 h-5 text-gold" />
                <span>Secure 256-bit SSL Encryption</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2 text-xs text-muted-foreground p-3 bg-background rounded-lg border border-border">
                <Truck className="w-5 h-5 text-gold" />
                <span>Free Insured Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
