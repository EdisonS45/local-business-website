// src/components/layout/Navbar.tsx

"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import CallButton from "@/components/common/CallButton";
import WhatsAppButton from "@/components/common/WhatsAppButton";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Brand */}
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-lg font-bold text-slate-900">
            {siteConfig.business.name}
          </span>
          <span className="text-xs text-slate-500">
            {siteConfig.location.city}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-700 hover:text-slate-900"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <CallButton size="sm" variant="outline" />
          <WhatsAppButton size="sm" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t bg-white md:hidden">
          <nav className="flex flex-col px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-slate-700 hover:text-slate-900"
              >
                {link.name}
              </Link>
            ))}

            <div className="mt-4 flex gap-3">
              <CallButton size="md" />
              <WhatsAppButton size="md" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
