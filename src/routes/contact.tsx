import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Joy Water" },
      {
        name: "description",
        content:
          "Visit the Joy Water display centre in Pune or reach Manoj Pandey and Swapnil Jain directly.",
      },
      { property: "og:title", content: "Contact Joy Water" },
      { property: "og:description", content: "Book a display-centre visit or enquire directly." },
    ],
  }),
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    inquiryType: "Book a Showroom Visit",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <SiteLayout>
      <section className="relative bg-primary text-primary-foreground py-24 overflow-hidden">
        <img src="/images/m5-01.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-8 z-10">
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">Get in touch</p>
          <h1 className="font-serif text-5xl md:text-7xl">Visit. Call. Enquire.</h1>
          <p className="mt-6 text-primary-foreground/70 max-w-2xl">
            Our design team is available seven days a week. Walk in, call, or send a note.
          </p>
        </div>
      </section>

      {/* DIRECT CONTACT CARDS */}
      <section className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-3 gap-8">
        {[
          {
            name: "Manoj Pandey",
            role: "Design & Sales",
            phone: "+91 93259 48289",
            tel: "+919325948289",
          },
          {
            name: "Swapnil Jain",
            role: "Design & Sales",
            phone: "+91 70838 45647",
            tel: "+917083845647",
          },
          {
            name: "Studio Enquiries",
            role: "General",
            phone: "hello@joywater.in",
            tel: "mailto:hello@joywater.in",
            email: true,
          },
        ].map((p) => (
          <div
            key={p.name}
            className="border border-border p-8 hover:border-gold transition-colors card-3d hover:card-3d-hover"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">{p.role}</p>
            <h3 className="font-serif text-2xl mb-4">{p.name}</h3>
            <a
              href={p.email ? p.tel : `tel:${p.tel}`}
              className="inline-flex items-center gap-2 text-sm hover:text-gold transition-colors"
            >
              {p.email ? <Mail className="h-4 w-4" /> : <Phone className="h-4 w-4" />}
              {p.phone}
            </a>
          </div>
        ))}
      </section>

      {/* LUXURY STUDIO VISIT & INQUIRY FORM */}
      <section className="max-w-7xl mx-auto px-8 py-16 border-t border-border/60">
        <div className="max-w-3xl mx-auto bg-secondary/40 border border-border/80 rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Online Inquiry</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              Request a Studio Consultation or Custom Quote
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Connect directly with our senior design consultants in Pune for architectural specifications, project pricing, or to book a private showroom tour.
            </p>
          </div>

          {submitted ? (
            <div className="bg-background border border-gold/40 rounded-xl p-8 text-center space-y-4">
              <CheckCircle2 className="h-12 w-12 text-gold mx-auto" />
              <h3 className="font-serif text-2xl text-foreground">Inquiry Received</h3>
              <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                Thank you for reaching out to Joy Water. Your inquiry has been forwarded directly to <strong className="text-foreground">Manoj Pandey</strong> and <strong className="text-foreground">Swapnil Jain</strong>. Our studio will contact you within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: "",
                    phone: "",
                    email: "",
                    inquiryType: "Book a Showroom Visit",
                    message: "",
                  });
                }}
                className="mt-4 inline-block text-xs uppercase tracking-widest text-gold hover:underline"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Arun Kumar"
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="arun@example.com"
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Inquiry Type
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-gold transition-colors"
                  >
                    <option value="Book a Showroom Visit">Book a Showroom Visit</option>
                    <option value="General Product Inquiry">General Product Inquiry</option>
                    <option value="Architect / Designer Collaboration">Architect / Designer Collaboration</option>
                    <option value="Project Quotation & Availability">Project Quotation & Availability</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Message / Project Requirements
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your project, preferred finishes, or collections of interest..."
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-gold transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-xs uppercase tracking-[0.25em] font-medium hover:bg-gold hover:text-primary transition-all shadow-sm"
              >
                Send Inquiry to Studio <Send className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* DISPLAY CENTRE & MAP */}
      <section className="max-w-7xl mx-auto px-8 pb-24 grid md:grid-cols-2 gap-12 items-start border-t border-border/60 pt-16">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Display Centre</p>
          <h2 className="font-serif text-4xl mb-6">Joy Water, Pune</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Experience 300+ pieces on live water. Our display centre is the only way to feel the
            weight, warmth and precision of a Joy Water fitting under your fingertips.
          </p>
          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-gold mt-0.5" />
              <span>
                Joy Water Display Centre
                <br />
                Pune, Maharashtra, India
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-gold mt-0.5" />
              <a href="tel:+919325948289" className="hover:text-gold">
                +91 93259 48289
              </a>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-gold mt-0.5" />
              <a href="mailto:hello@joywater.in" className="hover:text-gold">
                hello@joywater.in
              </a>
            </div>
          </div>
          <a
            href="https://www.google.com/maps/place/Joy+Water/@18.4539939,73.8797556,17z"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-8 bg-primary text-primary-foreground px-8 py-4 text-xs uppercase tracking-[0.3em] hover:bg-gold hover:text-primary transition-all rounded-lg"
          >
            Open in Google Maps
          </a>
        </div>
        <div className="aspect-[4/3] w-full overflow-hidden border border-border rounded-xl shadow-sm">
          <iframe
            title="Joy Water Pune"
            src="https://www.google.com/maps?q=Joy+Water,+Pune&z=17&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </SiteLayout>
  );
}
