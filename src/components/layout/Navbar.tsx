import Link from "next/link";
import EstimatorTrigger from "@/components/common/EstimatorTrigger";
import { siteConfig } from "@/config/site.config";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-surface border-b border-border">
      <div className="container h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-heading text-lg font-semibold tracking-tight"
        >
          {siteConfig.business.name}
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted">
          <Link href="/services" className="hover:text-ink">
            Services
          </Link>
          <Link href="/projects" className="hover:text-ink">
            Projects
          </Link>
          <Link href="/about" className="hover:text-ink">
            About
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <EstimatorTrigger />

          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="cta-primary hidden md:inline-flex"
          >
            Call Engineer
          </a>
        </div>
      </div>
    </header>
  );
}
