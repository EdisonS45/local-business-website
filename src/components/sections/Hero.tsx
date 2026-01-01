// src/components/sections/Hero.tsx

import { siteConfig } from "@/config/site.config";
import CallButton from "@/components/common/CallButton";
import WhatsAppButton from "@/components/common/WhatsAppButton";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
          {siteConfig.business.tagline}
          <span className="block text-blue-600">
            in {siteConfig.location.city}
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
          {siteConfig.business.description}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CallButton size="lg" />
          <WhatsAppButton size="lg" />
        </div>

        <p className="mt-6 text-sm text-slate-500">
          Serving {siteConfig.location.serviceAreas.join(", ")}
        </p>
      </div>
    </section>
  );
}
