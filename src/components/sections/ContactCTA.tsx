import { ArrowRight } from "lucide-react";

export function ContactCTA() {
  return (
    <section id="kontakt" className="bg-background py-24 md:py-28">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-xl border border-border bg-secondary px-6 py-14 md:px-10">
          <div className="absolute inset-0 opacity-60 [background:radial-gradient(circle_at_0%_0%,rgba(211,47,47,0.16),transparent_35%)]" />

          <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-primary">Nästa steg</p>
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">Redo att starta ditt projekt?</h2>
              <p className="text-lg text-muted-foreground">
                Få en snabb bedömning av omfattning, tidplan och kostnadsbild för ditt markarbete.
              </p>
            </div>

            <button className="inline-flex w-fit items-center gap-3 rounded-xl bg-primary px-8 py-4 text-base font-bold text-white transition-all hover:bg-red-700 hover:shadow-[0_16px_35px_-18px_rgba(211,47,47,0.9)]">
              Kontakta oss nu <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
