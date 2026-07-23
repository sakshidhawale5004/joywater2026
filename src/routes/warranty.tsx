import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/warranty")({
  component: WarrantyPage,
  head: () => ({
    meta: [
      { title: "Warranty — Joy Water" },
      {
        name: "description",
        content:
          "Joy Water offers a 10-year warranty on all faucets and showers, and lifetime service support.",
      },
      { property: "og:title", content: "Warranty — Joy Water" },
      { property: "og:description", content: "10-year product warranty and lifetime service." },
    ],
  }),
});

function WarrantyPage() {
  return (
    <SiteLayout>
      <section className="bg-primary text-primary-foreground py-24">
        <div className="max-w-4xl mx-auto px-8">
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">Assurance</p>
          <h1 className="font-serif text-5xl md:text-6xl">Product Warranty</h1>
        </div>
      </section>
      <section className="max-w-3xl mx-auto px-8 py-16 space-y-6 text-foreground/80 leading-relaxed">
        <p>
          Every Joy Water faucet and shower is covered by a{" "}
          <strong>10-year manufacturing warranty</strong> on the brass body and a{" "}
          <strong>7-year warranty</strong> on the PVD finish, from the date of installation.
        </p>
        <p>
          Ceramic sanitaryware and stone basins carry a <strong>5-year structural warranty</strong>{" "}
          against manufacturing defects.
        </p>
        <h3 className="font-serif text-2xl pt-6">What is covered</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Defects in materials and workmanship under normal use.</li>
          <li>Cartridge and internal mechanism failure.</li>
          <li>PVD finish delamination or discolouration under normal conditions.</li>
        </ul>
        <h3 className="font-serif text-2xl pt-6">What is not covered</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Damage from harsh chemical cleaners, acids or abrasives.</li>
          <li>Improper installation by non-certified plumbers.</li>
          <li>Wear on consumable parts such as aerators and washers.</li>
        </ul>
        <p className="pt-6">
          To register a warranty claim, please contact our team at{" "}
          <a className="text-gold underline" href="tel:+919325948289">
            +91 93259 48289
          </a>{" "}
          with the product reference code and your date of purchase.
        </p>
      </section>
    </SiteLayout>
  );
}
