"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { ctaConfig } from "@/config/cta.config";
import { useToast } from "./Toast";

export default function FloatingChat() {
  const { showToast } = useToast();

  const handleClick = () => {
    showToast("Connection established. Our engineer is reviewing your request.");
    window.open(
      `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
        ctaConfig.defaultWhatsAppMessage
      )}`,
      "_blank"
    );
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Chat on WhatsApp"
      className="
        hidden md:flex
        fixed bottom-6 right-6 z-50
        h-14 w-14
        items-center justify-center
        rounded-full
        bg-primary text-white
        shadow-hover
        transition-transform
        hover:scale-105
      "
    >
      <MessageCircle size={22} />
    </button>
  );
}
