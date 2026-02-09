import Link from "next/link";

const links = [
  { label: "Tjänster", href: "#tjanster" },
  { label: "Om oss", href: "#om-oss" },
  { label: "Fordonspark", href: "#fordonspark" },
  { label: "Kontakt", href: "#kontakt" },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#18181B] text-white">
      <div className="absolute inset-0 opacity-60 [background:radial-gradient(circle_at_20%_0%,rgba(211,47,47,0.22),transparent_35%),linear-gradient(to_bottom,transparent,rgba(255,255,255,0.03))]" />

      <div className="relative mx-auto max-w-6xl px-4 py-16">
        <div className="mb-12 flex flex-col justify-between gap-8 border-b border-white/10 pb-10 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.16em] text-white/60">
              Östunaschakt
            </p>
            <h2 className="max-w-xl text-3xl font-bold tracking-tight md:text-4xl">
              Markentreprenad med precision i Uppsala och Stockholm.
            </h2>
          </div>
          <Link
            href="#kontakt"
            className="inline-flex w-fit items-center rounded-xl border border-primary bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700"
          >
            Kontakta oss
          </Link>
        </div>

        <div className="grid gap-10 text-sm text-white/80 md:grid-cols-3">
          <div>
            <p className="mb-3 font-semibold text-white">Kontakt</p>
            <p>Telefon: 070-123 45 67</p>
            <p>E-post: kontakt@ostunaschakt.se</p>
            <p>Knivsta, Uppsala län</p>
          </div>

          <div>
            <p className="mb-3 font-semibold text-white">Snabblänkar</p>
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 font-semibold text-white">Tjänsteområden</p>
            <p>Schaktning och markarbeten</p>
            <p>Transporter och leveranser</p>
            <p>Containerhyra och material</p>
          </div>
        </div>

        <p className="mt-12 border-t border-white/10 pt-6 text-xs text-white/50">
          © {new Date().getFullYear()} Östunaschakt AB. Alla rättigheter förbehålls.
        </p>
      </div>
    </footer>
  );
}
