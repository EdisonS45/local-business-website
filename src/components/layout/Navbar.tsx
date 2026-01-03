"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site.config";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto grid h-20 max-w-7xl grid-cols-2 lg:grid-cols-3 items-center px-6">
        
        {/* 1. Left: Logo Section */}
        <div className="flex justify-start">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-sm">RV</div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-bold tracking-tight text-slate-900">Spatial Surveys</span>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.1em]">Precision First</span>
            </div>
          </Link>
        </div>

        {/* 2. Center: Navigation Links (Desktop Only) */}
        <div className="hidden lg:flex justify-center items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-sm font-semibold text-slate-600 hover:text-emerald-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* 3. Right: Action Buttons (Desktop) + Mobile Toggle */}
        <div className="flex justify-end items-center gap-3">
          {/* Buttons hidden on mobile, visible on lg */}
          <div className="hidden lg:flex items-center gap-3">
            <Link 
              href="/quote" 
              className="rounded-xl border border-slate-200 px-6 py-2.5 text-sm font-bold text-slate-900 hover:bg-slate-50 transition-all"
            >
              New Quote
            </Link>
            <a 
              href={`tel:${siteConfig.contact.phone}`} 
              className="rounded-xl bg-emerald-600 px-6 py-2.5 text-sm font-bold text-white hover:bg-emerald-700 transition-all shadow-md shadow-emerald-100"
            >
              Call Engineer
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden flex items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-slate-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-20 z-40 h-[calc(100vh-80px)] w-full bg-white px-6 py-8 lg:hidden animate-in fade-in slide-in-from-top-5">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-xl font-bold text-slate-900 border-b border-slate-50 pb-4"
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-4">
              <Link 
                href="/quote" 
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center rounded-2xl bg-slate-100 py-4 text-lg font-bold text-slate-900"
              >
                New Quote
              </Link>
              <a 
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center justify-center gap-3 rounded-2xl bg-emerald-600 py-4 text-lg font-bold text-white shadow-lg shadow-emerald-200"
              >
                <Phone size={20} />
                Call Engineer
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}