"use client";

import { siteConfig } from "@/config/site.config";
import WhatsAppButton from "@/components/common/WhatsAppButton";

export default function StickyHeader() {
  return (
    <div className="hidden md:block fixed top-0 inset-x-0 z-50 bg-surface border-b border-border">
      <div className="container h-10 flex items-center justify-end gap-4 text-sm">
        <span className="text-muted">
          {siteConfig.contact.phone}
        </span>

        <WhatsAppButton className="cta-outline px-4 py-1.5 text-sm" />

        <a
          href={`tel:${siteConfig.contact.phone}`}
          className="cta-primary px-4 py-1.5 text-sm"
        >
          Call Now
        </a>
      </div>
    </div>
  );
}
