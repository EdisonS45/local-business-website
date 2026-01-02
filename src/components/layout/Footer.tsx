// src/components/layout/Footer.tsx

import Link from "next/link";
import { siteConfig } from "@/config/site.config";
import CallButton from "@/components/common/CallButton";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import ReviewCTA from "../common/ReviewCTA";

export default function Footer() {
  return (
    <footer className="border-t bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* Changed items-start to items-center to center them vertically if they have different heights */}
        <div className="grid gap-12 md:grid-cols-2 items-start">
          
          {/* Review Card - Centered in its column */}
          <div className="w-full max-w-sm mx-auto">
            <ReviewCTA />
          </div>

          {/* Contact CTA - Centered in its column */}
          <div className="w-full max-w-sm mx-auto">
            <h4 className="text-sm font-semibold text-slate-900">
              Get in Touch
            </h4>

            <div className="mt-4 flex flex-col gap-3">
              <CallButton />
              <WhatsAppButton />
            </div>

            <p className="mt-4 text-sm text-slate-600">
              {siteConfig.location.addressText}
            </p>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} {siteConfig.business.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}