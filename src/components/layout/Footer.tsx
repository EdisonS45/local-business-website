// src/components/layout/Footer.tsx

import Link from "next/link";
import { siteConfig } from "@/config/site.config";
import CallButton from "@/components/common/CallButton";
import WhatsAppButton from "@/components/common/WhatsAppButton";

export default function Footer() {
  return (
    <footer className="border-t bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Business Info */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              {siteConfig.business.name}
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              {siteConfig.business.description}
            </p>

            <p className="mt-4 text-sm text-slate-600">
              Serving:{" "}
              <span className="font-medium">
                {siteConfig.location.serviceAreas.join(", ")}
              </span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
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
