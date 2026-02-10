import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import heroImage from "../../../assets/893ea67d-97df-480a-80c8-ee1e7f5f5cb1.jpeg";

export function Hero() {
  return (
    <section
      id="start"
      className="relative flex w-full min-h-screen items-center justify-center overflow-hidden bg-background pt-28 md:pt-32"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Heavy Excavator Digging"
          fill
          priority
          sizes="100vw"
          className="hero-parallax-bg h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/20 to-black/35" />
        <div className="hero-light-sweep absolute inset-0" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="mb-6 text-5xl font-bold tracking-tighter text-white drop-shadow-md md:text-7xl">
          Komplett markleverantör <br />
          <span className="text-primary drop-shadow-md">i Uppsala</span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-xl font-medium text-white/90 drop-shadow-md md:text-2xl">
          Schaktning, transport och material med precision.
          Vi har maskinerna och kompetensen för ditt projekt.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="cta-beam flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-semibold text-white shadow-lg transition-colors hover:bg-red-700">
            Få offert <ArrowRight className="h-5 w-5" />
          </button>

          <button className="flex items-center gap-2 rounded-xl border border-white/40 bg-white/20 px-8 py-4 font-bold text-white shadow-lg backdrop-blur-md transition-colors hover:bg-white/30">
            <Phone className="h-5 w-5" /> Ring oss: 070-123 45 67
          </button>
        </div>

        <div className="mx-auto mt-12 max-w-4xl rounded-xl border border-white/25 bg-black/35 p-4 backdrop-blur-md md:p-5">
          <div className="grid grid-cols-1 gap-4 text-left sm:grid-cols-3 sm:gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/65">Svarstid</p>
              <p className="mt-1 text-base font-semibold text-white">Snabb återkoppling</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/65">Verksamhetsområde</p>
              <p className="mt-1 text-base font-semibold text-white">Uppsala, Knivsta, Stockholm</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/65">Maskiner i drift</p>
              <p className="mt-1 text-base font-semibold text-white">Grävmaskiner, lastväxlare, kranbil</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
