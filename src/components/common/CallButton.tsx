// src/components/common/CallButton.tsx

import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { formatPhoneForDisplay } from "@/lib/format";

type CallButtonProps = {
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
};

export default function CallButton({
  variant = "primary",
  size = "md",
}: CallButtonProps) {
  const phone = siteConfig.contact.phone;
  const displayPhone = formatPhoneForDisplay(phone);

  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-900",
    outline:
      "border border-slate-300 text-slate-900 hover:bg-slate-100 focus:ring-slate-400",
  };

  const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-5 text-sm",
    lg: "h-12 px-6 text-base",
  };

  return (
    <a
      href={`tel:${phone}`}
      className={`${base} ${variants[variant]} ${sizes[size]}`}
      aria-label={`Call ${displayPhone}`}
    >
      <Phone className="h-4 w-4" />
      <span>{displayPhone}</span>
    </a>
  );
}
