import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export function AboutSection() {
  return (
    <section id="om-oss" className="bg-secondary py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-square overflow-hidden rounded-xl border border-black/10 bg-muted lg:aspect-[4/3]">
            <Image
              src="/images/about-image.jpg"
              alt="Östunaschakt medarbetare"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-primary">Om företaget</p>
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Varför välja Östunaschakt?</h2>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              Vi är mer än maskiner. Med erfaren personal och en bred fordonspark levererar vi trygghet,
              tydlighet och kvalitet i varje steg av projektet.
            </p>

            <ul className="space-y-4">
              {[
                "Kompetenta och erfarna yrkesförare",
                "Bred fordonspark för stora och små uppdrag",
                "Lokalt förankrade i Uppsala och Stockholm",
                "Tydlig kommunikation och fasta kontaktvägar",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
