"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["Alla", "Grävmaskiner", "Lastväxlare", "Kranbil", "Hjullastare"];

const fleetItems = [
  { id: 1, category: "Grävmaskiner", title: "Bandgrävare 25 ton", image: "/images/fleet-excavator.jpg" },
  { id: 2, category: "Lastväxlare", title: "Scania R580", image: "/images/fleet-dump-rubble.jpg" },
  { id: 3, category: "Hjullastare", title: "L60H", image: "/images/fleet-empty-truck.jpg" },
  { id: 4, category: "Kranbil", title: "Hiab X-HiPro", image: "/images/fleet-large-truck.jpg" },
  { id: 5, category: "Grävmaskiner", title: "Hjulgrävare 16 ton", image: "/images/fleet-hjul.jpg" },
  { id: 6, category: "Lastväxlare", title: "Volvo FH16", image: "/images/fleet-mining.jpg" },
];

export function FleetShowcase() {
  const [activeCategory, setActiveCategory] = useState("Alla");

  const filteredItems = fleetItems.filter(
    (item) => activeCategory === "Alla" || item.category === activeCategory,
  );

  return (
    <section id="fordonspark" className="bg-background py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-primary">Maskiner</p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Vår fordonspark</h2>
            <p className="max-w-xl text-muted-foreground">
              Maskiner och fordon för markarbete, logistik och entreprenad med hög driftsäkerhet.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-xl border px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "border-primary bg-primary text-white"
                    : "border-border bg-transparent text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="group relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-muted"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-70 transition-opacity group-hover:opacity-55" />

                <div className="absolute bottom-0 left-0 p-6">
                  <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-primary">{item.category}</span>
                  <h3 className="text-xl font-bold text-white transition-colors group-hover:text-primary">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
