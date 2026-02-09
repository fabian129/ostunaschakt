"use client";

import { motion } from "framer-motion";

const timelineSteps = [
  {
    title: "Förfrågan mottagen",
    meta: "Steg 1 · Inom 1 arbetsdag",
    description: "Vi bekräftar uppdraget och samlar in underlag.",
    status: "done",
  },
  {
    title: "Planering och upplägg",
    meta: "Steg 2 · Tidsplan sätts",
    description: "Maskiner, logistik och arbetsordning planeras.",
    status: "done",
  },
  {
    title: "Utförande på plats",
    meta: "Steg 3 · Pågående",
    description: "Arbetet genomförs säkert, effektivt och enligt plan.",
    status: "active",
  },
  {
    title: "Slutleverans",
    meta: "Steg 4 · Slutkontroll",
    description: "Genomgång, återkoppling och tydlig överlämning.",
    status: "upcoming",
  },
] as const;

export function ProjectTimeline() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            Arbetsprocess
          </p>
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Från första kontakt till färdigt resultat
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            En tydlig tidslinje för hur vi driver projekt från start till leverans.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="relative">
            <div className="absolute left-[13px] top-3 h-[calc(100%-1.4rem)] w-px bg-border" />

            <div className="space-y-10 md:space-y-12">
              {timelineSteps.map((step) => {
                const isActive = step.status === "active";
                const isDone = step.status === "done";

                return (
                  <article key={step.title} className="relative flex gap-5 md:gap-6">
                    <span
                      className={`relative z-10 mt-1 h-[26px] w-[26px] rounded-full border ${
                        isDone || isActive ? "border-primary bg-primary" : "border-border bg-white"
                      }`}
                    />

                    {isActive && (
                      <motion.span
                        aria-hidden="true"
                        className="pointer-events-none absolute left-0 top-1 h-[26px] w-[26px] rounded-full border border-primary"
                        animate={{ scale: [1, 1.55, 1], opacity: [0.7, 0, 0.7] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                      />
                    )}

                    <div className="max-w-2xl">
                      <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                      <p
                        className={`mb-2 text-base ${
                          isActive ? "font-semibold text-primary" : "text-muted-foreground"
                        }`}
                      >
                        {step.meta}
                      </p>
                      <p className="text-base text-muted-foreground">{step.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
