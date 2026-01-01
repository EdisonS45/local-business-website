// src/app/contact/page.tsx

import { siteConfig } from "@/config/site.config";
import CallButton from "@/components/common/CallButton";
import WhatsAppButton from "@/components/common/WhatsAppButton";

export default function ContactPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-4 py-20">
        <h1 className="text-3xl font-bold text-slate-900">
          Contact Us
        </h1>

        <p className="mt-4 text-slate-600">
          Get in touch with us for professional survey services.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <CallButton size="lg" />
          <WhatsAppButton size="lg" />
        </div>

        <div className="mt-12 overflow-hidden rounded-xl border">
          <iframe
            src={siteConfig.location.googleMapEmbedUrl}
            width="100%"
            height="350"
            loading="lazy"
            className="border-0"
          />
        </div>

        <p className="mt-6 text-slate-600">
          {siteConfig.location.addressText}
        </p>
      </div>
    </section>
  );
}
