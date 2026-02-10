import Link from "next/link";
import { Truck, Shovel, Box, Layers, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Schaktning & Markarbeten",
    description: "Grundläggning, dräneringsarbeten och finplanering med hög precision.",
    icon: Shovel,
  },
  {
    title: "Transporter & Leveranser",
    description: "Snabba leveranser av grus, jord och maskiner med egen fordonspark.",
    icon: Truck,
  },
  {
    title: "Containerhyra",
    description: "Smidig avfallshantering för privatpersoner, BRF och entreprenörer.",
    icon: Box,
  },
  {
    title: "Material",
    description: "Vi levererar matjord, grus, bergkross och fyllnadsmassor.",
    icon: Layers,
  },
];

export function ServicesGrid() {
  return (
    <section id="tjanster" className="border-t border-border bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-primary">Tjänster</p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Heltäckande markentreprenad</h2>
          <p className="mx-auto max-w-xl text-muted-foreground">
            Lösningar för byggare, fastighetsägare och privatkunder i Uppsala och Stockholm.
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group flex h-full flex-col rounded-xl border border-border bg-secondary p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-foreground text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
              <div className="mt-auto pt-8">
                <Link
                  href="#kontakt"
                  className="cta-beam inline-flex w-fit items-center gap-2 self-start rounded-xl border border-border bg-white px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  Läs mer
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
