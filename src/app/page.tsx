import Image from "next/image";
import Link from "next/link";

import { servicesConfig } from "@/config/services.config";
import { siteConfig } from "@/config/site.config";
import EstimatorTrigger from "@/components/common/EstimatorTrigger";

export default function HomePage() {
  const phaseAServices = servicesConfig.filter((s) => s.phase === "A");

  return (
    <>
      {/* HERO */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold">
              Precision Land Surveying in {siteConfig.location.city}
            </h1>

            <p className="mt-4 text-lg text-slate-600 max-w-xl">
              Government-approved licensed surveyors delivering accurate,
              approval-ready reports with speed and clarity.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <EstimatorTrigger />

              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="cta-primary"
              >
                Call Engineer
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="relative h-[360px] w-full bg-slate-100 rounded-lg overflow-hidden">
            <Image
              src="/images/hero-surveyor.jpg"
              alt="Land surveyor using total station"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-slate-100 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm">
          <div>
            <p className="font-semibold text-ink">Govt Licensed</p>
            <p className="text-slate-600">Authorized survey practice</p>
          </div>
          <div>
            <p className="font-semibold text-ink">15+ Years</p>
            <p className="text-slate-600">Field experience</p>
          </div>
          <div>
            <p className="font-semibold text-ink">Modern Equipment</p>
            <p className="text-slate-600">GPS & digital tools</p>
          </div>
          <div>
            <p className="font-semibold text-ink">Fast Turnaround</p>
            <p className="text-slate-600">Clear timelines</p>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">
            Survey Services We Specialize In
          </h2>
          <p className="section-subtitle">
            Choose the service that matches your requirement. Each service
            page explains when it is needed and what you receive.
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

          <div className="mt-12 text-center">
            <Link href="/services" className="cta-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
