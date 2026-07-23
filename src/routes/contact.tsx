import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Phone, Mail, MapPin } from "lucide-react";

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
  return (
    <SiteLayout>
      <section className="bg-primary text-primary-foreground py-24">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">Get in touch</p>
          <h1 className="font-serif text-5xl md:text-7xl">Visit. Call. Enquire.</h1>
          <p className="mt-6 text-primary-foreground/70 max-w-2xl">
            Our design team is available seven days a week. Walk in, call, or send a note.
          </p>
        </div>
      </section>

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

      <section className="max-w-7xl mx-auto px-8 pb-24 grid md:grid-cols-2 gap-12 items-start">
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
            className="inline-block mt-8 bg-primary text-primary-foreground px-8 py-4 text-xs uppercase tracking-[0.3em] hover:bg-gold hover:text-primary transition-all"
          >
            Open in Google Maps
          </a>
        </div>
        <div className="aspect-[4/3] w-full overflow-hidden border border-border">
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
