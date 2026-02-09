import { MapPin } from "lucide-react";

export function ServiceArea() {
  return (
    <section
      id="omrade"
      className="relative overflow-hidden border-y border-white/10 bg-[#18181B] py-24 text-white md:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 80% 0%, rgba(211,47,47,0.16), transparent 36%)",
        }}
      />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-primary">Verksamhetsområde</p>
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Vi jobbar i hela regionen</h2>
            <p className="mb-8 text-lg text-white/75">
              Vi utgår från Knivsta och tar uppdrag i Uppsala, norra Stockholm och närliggande kommuner.
            </p>

            <div className="space-y-6">
              {[
                { city: "Uppsala", desc: "Hela kommunen med omnejd" },
                { city: "Knivsta", desc: "Vår hemmabas och närområde" },
                { city: "Norra Stockholm", desc: "Sigtuna, Märsta, Vallentuna, Upplands Väsby" },
              ].map((loc, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/5 text-primary">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{loc.city}</h3>
                    <p className="text-white/70">{loc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[400px] w-full overflow-hidden rounded-xl border border-white/15 bg-[#1f1f22]">
            <iframe
              title="Karta över Uppsala, Knivsta och Stockholm"
              src="https://www.openstreetmap.org/export/embed.html?bbox=17.3%2C59.2%2C18.4%2C59.95&layer=mapnik"
              className="pointer-events-none absolute inset-0 h-full w-full select-none grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute inset-0 bg-black/35" />

            <div className="pointer-events-none absolute left-[43%] top-[23%]">
              <div className="h-3 w-3 rounded-full bg-primary shadow-[0_0_18px_rgba(211,47,47,0.95)]" />
              <span className="absolute left-4 top-[-10px] inline-block rounded-xl bg-black/65 px-2 py-1 text-xs font-semibold text-white">
                Uppsala
              </span>
            </div>

            <div className="pointer-events-none absolute left-[44.5%] top-[32.5%]">
              <div className="h-3 w-3 rounded-full bg-primary shadow-[0_0_18px_rgba(211,47,47,0.95)]" />
              <span className="absolute left-4 top-[-10px] inline-block rounded-xl bg-black/65 px-2 py-1 text-xs font-semibold text-white">
                Knivsta
              </span>
            </div>

            <div className="pointer-events-none absolute left-[56.5%] top-[72.5%]">
              <div className="h-3 w-3 rounded-full bg-primary shadow-[0_0_18px_rgba(211,47,47,0.95)]" />
              <span className="absolute left-4 top-[-10px] inline-block rounded-xl bg-black/65 px-2 py-1 text-xs font-semibold text-white">
                Stockholm
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
