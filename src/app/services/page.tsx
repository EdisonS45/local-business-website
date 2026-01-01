// src/app/services/page.tsx

import { servicesConfig } from "@/config/services.config";

export default function ServicesPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <h1 className="text-3xl font-bold text-slate-900">
          Our Services
        </h1>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {servicesConfig.map((service) => (
            <div key={service.id}>
              <h2 className="text-xl font-semibold text-slate-900">
                {service.title}
              </h2>
              <p className="mt-3 text-slate-600">
                {service.detailedDescription}
              </p>

              <p className="mt-4 text-sm text-slate-500">
                Ideal for: {service.targetCustomers.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
