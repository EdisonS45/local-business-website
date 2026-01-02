import Link from "next/link";
import { servicesConfig } from "@/config/services.config";

export default function ServicesPage() {
  const phaseAServices = servicesConfig.filter((s) => s.phase === "A");

  return (
    <section className="section">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="section-title">Survey Services</h1>
        <p className="section-subtitle">
          Select the service that matches your requirement. Each service page
          explains when it is needed and what you receive.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {phaseAServices.map((service) => (
            <div key={service.id} className="card p-6 flex flex-col">
              <h3 className="text-lg font-heading font-semibold">
                {service.title}
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                {service.shortDescription}
              </p>

              <p className="mt-3 text-sm">
                <span className="font-medium text-ink">Best for:</span>{" "}
                {service.bestFor}
              </p>

              <div className="mt-auto pt-6">
                <Link
                  href={`/services/${service.slug}`}
                  className="text-safety font-medium hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
