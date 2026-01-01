// src/app/about/page.tsx

import { siteConfig } from "@/config/site.config";

export default function AboutPage() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-4xl px-4 py-20">
        <h1 className="text-3xl font-bold text-slate-900">
          About {siteConfig.business.name}
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          {siteConfig.business.description}
        </p>

        <p className="mt-4 text-slate-600">
          Based in {siteConfig.location.city}, we serve{" "}
          {siteConfig.location.serviceAreas.join(", ")} with reliable and
          accurate survey solutions.
        </p>

        <p className="mt-4 text-slate-600">
          Our team focuses on professionalism, precision, and clear
          communication to ensure complete customer satisfaction.
        </p>
      </div>
    </section>
  );
}
