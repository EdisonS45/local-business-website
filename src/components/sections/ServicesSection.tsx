// src/components/sections/ServicesSection.tsx

import { servicesConfig } from "@/config/services.config";

export default function ServicesSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Our Services
          </h2>
          <p className="mt-4 text-slate-600">
            Reliable surveying solutions tailored to your needs
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {servicesConfig.map((service) => (
            <div
              key={service.id}
              className="rounded-xl border border-slate-200 p-6 transition hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                {service.shortDescription}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
