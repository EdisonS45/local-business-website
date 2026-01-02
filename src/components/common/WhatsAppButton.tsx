"use client";

import { siteConfig } from "@/config/site.config";
import { useToast } from "./Toast";

interface WhatsAppButtonProps {
  label?: string;
  message?: string;
  className?: string;
}

export default function WhatsAppButton({
  label = "WhatsApp",
  message = "Hello, I would like to enquire about a land survey.",
  className = "cta-outline",
}: WhatsAppButtonProps) {
  const { showToast } = useToast();

  const handleClick = () => {
    showToast("Our engineer is reviewing your request.");
    window.open(
      `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  };

  return (
    <button onClick={handleClick} className={className}>
      {label}
    </button>
  );
}
