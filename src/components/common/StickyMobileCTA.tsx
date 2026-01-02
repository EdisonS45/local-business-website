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
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="flex h-14 border-t border-slate-200 bg-white">
        <button
          onClick={handleWhatsApp}
          className="flex-1 flex items-center justify-center gap-2 text-white bg-green-600"
        >
          <MessageCircle size={18} />
          WhatsApp
        </button>

        <a
          href={`tel:${siteConfig.contact.phone}`}
          className="flex-1 flex items-center justify-center gap-2 text-white bg-safety"
        >
          <Phone size={18} />
          Call Now
        </a>
      </div>
    </div>
  );
}
