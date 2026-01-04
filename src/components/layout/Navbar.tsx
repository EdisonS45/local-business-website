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

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello, I would like to enquire about a land survey.");
    window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`, "_blank");
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto h-16 md:h-20 max-w-7xl flex items-center justify-between px-4 md:px-6">
        
        {/* 1. Logo Section - Scaled for Mobile */}
        <div className="flex justify-start shrink-0">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="h-7 w-7 md:h-9 md:w-9 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-xs md:text-sm transition-transform group-hover:rotate-3">
              RV
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-sm md:text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap">
                Spatial Surveys
              </span>
              <span className="text-[7px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Precision First
              </span>
            </div>
          </Link>
        </div>

        {/* 2. Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-sm font-bold text-slate-600 hover:text-emerald-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* 3. Action Buttons & Mobile Toggle */}
        <div className="flex items-center gap-2 md:gap-3">
          <div className="hidden lg:flex items-center gap-3">
            <button 
              onClick={handleWhatsAppClick}
              className="flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-2 text-sm font-bold text-slate-900 hover:bg-slate-50 transition-all hover:border-emerald-500 hover:text-emerald-600"
            >
              WhatsApp
            </button>
            <a 
              href={`tel:${siteConfig.contact.phone}`} 
              className="rounded-xl bg-emerald-600 px-5 py-2 text-sm font-bold text-white hover:bg-emerald-700 transition-all shadow-md"
            >
              Call Engineer
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-600 active:scale-90 transition-transform"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-16 z-40 h-[calc(100vh-64px)] w-full bg-white px-6 py-10 lg:hidden animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Navigation</p>
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-black text-slate-900 active:text-emerald-600"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-auto flex flex-col gap-4 pb-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Quick Contact</p>
              <button 
                onClick={() => {
                  handleWhatsAppClick();
                  setIsOpen(false);
                }}
                className="flex items-center justify-center gap-3 rounded-2xl bg-emerald-50 py-4 text-lg font-bold text-emerald-700 border border-emerald-100"
              >
                Message on WhatsApp
              </button>
              <a 
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center justify-center gap-3 rounded-2xl bg-slate-900 py-4 text-lg font-bold text-white shadow-xl shadow-slate-200"
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