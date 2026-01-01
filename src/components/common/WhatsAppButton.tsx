// src/components/common/WhatsAppButton.tsx

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { whatsappConfig } from "@/config/whatsapp.config";
import { generateWhatsAppUrl } from "@/lib/whatsapp";

type WhatsAppButtonProps = {
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
};

export default function WhatsAppButton({
  variant = "primary",
  size = "md",
}: WhatsAppButtonProps) {
  const url = generateWhatsAppUrl(
    siteConfig.contact.whatsapp,
    whatsappConfig.defaultMessage
  );

  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-green-600 text-white hover:bg-green-500 focus:ring-green-600",
    outline:
      "border border-green-600 text-green-700 hover:bg-green-50 focus:ring-green-600",
  };

  const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-5 text-sm",
    lg: "h-12 px-6 text-base",
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${sizes[size]}`}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-4 w-4" />
      <span>WhatsApp Us</span>
    </a>
  );
}
