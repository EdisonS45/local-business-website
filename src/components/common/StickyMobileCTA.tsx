"use client";

import { siteConfig } from "@/config/site.config";
import { Phone, MessageCircle } from "lucide-react";
import { useToast } from "./Toast";

export default function StickyMobileCTA() {
  const { showToast } = useToast();

  const handleWhatsApp = () => {
    showToast("Our engineer is reviewing your request.");
    window.open(
      `https://wa.me/${siteConfig.contact.whatsapp}`,
      "_blank"
    );
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] md:hidden">
      <div className="flex h-16 border-t border-slate-100 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        {/* WhatsApp Button - Kept Green */}
        <button
          onClick={handleWhatsApp}
          className="flex-1 flex items-center justify-center gap-2 text-white bg-[#25D366] active:opacity-90 transition-opacity font-bold text-sm"
        >
          <MessageCircle size={18} fill="currentColor" />
          WhatsApp
        </button>

        {/* Vertical Divider Line */}
        <div className="w-[1px] bg-white/20 h-full" />

        {/* Call Now Button - Changed to Black for contrast */}
        <a
          href={`tel:${siteConfig.contact.phone}`}
          className="flex-1 flex items-center justify-center gap-2 text-white bg-slate-900 active:bg-slate-800 transition-colors font-bold text-sm"
        >
          <Phone size={18} fill="currentColor" />
          Call Now
        </a>
      </div>
    </div>
  );
}