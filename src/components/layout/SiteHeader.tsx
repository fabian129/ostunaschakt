import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import ostunaLogo from "../../../assets/ostuna-schakt-logo-transparent.webp";

const navItems = [
  { label: "Tjänster", href: "#tjanster" },
  { label: "Om oss", href: "#om-oss" },
  { label: "Fordonspark", href: "#fordonspark" },
  { label: "Område", href: "#omrade" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 pt-4">
        <div className="header-shell header-border-beam rounded-xl border border-black/10 bg-white/92 backdrop-blur supports-[backdrop-filter]:bg-white/80">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <Link href="#start" className="inline-flex items-center">
              <span className="inline-flex h-11 items-center px-1">
                <Image
                  src={ostunaLogo}
                  alt="Östuna Schakt logga"
                  priority
                  className="h-9 w-auto md:h-10"
                />
              </span>
            </Link>

            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link
              href="#kontakt"
              className="cta-beam inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-700"
            >
              <Phone className="h-4 w-4" />
              Få offert
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
