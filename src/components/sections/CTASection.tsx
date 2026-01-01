// src/components/sections/CTASection.tsx

import CallButton from "@/components/common/CallButton";
import WhatsAppButton from "@/components/common/WhatsAppButton";

export default function CTASection() {
  return (
    <section className="bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">
        <h2 className="text-3xl font-bold text-white">
          Need Reliable Survey Services?
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-slate-300">
          Contact us today for accurate, professional, and timely surveying
          solutions.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CallButton size="lg" />
          <WhatsAppButton size="lg" />
        </div>
      </div>
    </section>
  );
}
