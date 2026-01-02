import Link from "next/link";
import EstimatorTrigger from "@/components/common/EstimatorTrigger";
import { siteConfig } from "@/config/site.config";

export default function Navbar() {
  return (
    <header className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-heading font-bold text-lg">
          {siteConfig.business.name}
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}`}
            target="_blank"
            className="cta-outline hidden md:block"
          >
            WhatsApp
          </a>

          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="cta-primary hidden md:block"
          >
            +91 9597052681
          </a>

          {/* Estimator */}
          {/* <EstimatorTrigger /> */}
        </div>
      </div>
    </header>
  );
}
