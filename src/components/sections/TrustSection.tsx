// src/components/sections/TrustSection.tsx

import { siteConfig } from "@/config/site.config";

export default function TrustSection() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Why Choose {siteConfig.business.name}?
            </h2>

            <p className="mt-4 text-slate-600">
              We focus on accuracy, reliability, and clear communication to
              ensure our clients get the best surveying solutions.
            </p>

            <ul className="mt-6 space-y-3 text-slate-700">
              <li>✔ Experienced professionals</li>
              <li>✔ Modern survey equipment</li>
              <li>✔ Accurate and reliable reports</li>
              <li>✔ Local expertise and support</li>
            </ul>
          </div>

          <div className="rounded-xl bg-white p-8 shadow-sm">
            <p className="text-lg font-medium text-slate-900">
              Serving {siteConfig.location.city} and surrounding areas
            </p>
            <p className="mt-3 text-slate-600">
              Trusted by land owners, builders, and developers for precise
              surveying services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
