import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site.config";
import { servicesConfig } from "@/config/services.config";
import EstimatorTrigger from "@/components/common/EstimatorTrigger";
import ClientLogos from "@/components/sections/ClientLogos";

export default function HomePage() {
  const phaseAServices = servicesConfig.filter(
    (service) => service.phase === "A"
  );

  return (
    <>
      {/* HERO */}
      <section className="bg-surface">
        <div className="container grid lg:grid-cols-2 gap-12 py-6 items-center">
          {/* LEFT */}
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-heading font-medium leading-[1.15] tracking-tight">
              Precision Land Surveying in{" "}
              <span className="text-primary">
                {siteConfig.location.city}
              </span>
            </h1>

            <p className="mt-4 text-base text-muted-foreground">
              Government-approved licensed surveyors delivering
              approval-ready reports with accuracy, clarity,
              and predictable timelines.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="cta-primary"
              >
                Call Engineer
              </a>

              <EstimatorTrigger />
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg ">
            <Image
              src="/images/hero-surveyor3.png"
              alt="Survey engineer using total station"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* CLIENT LOGOS */}
      <section className="border-t border-border bg-background">
        <div className="container py-10">
          <ClientLogos />
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-background">
        <div className="container py-16">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-heading font-medium">
              Survey Services We Specialize In
            </h2>

            <p className="mt-3 text-sm text-muted-foreground">
              Each service clearly explains when it is required,
              what documents are needed, and what you will receive.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {phaseAServices.map((service) => (
              <div
                key={service.id}
                className="card p-5 flex flex-col transition-shadow hover:shadow-md"
              >
                <h3 className="text-base font-heading font-semibold">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  {service.shortDescription}
                </p>

                <p className="mt-3 text-xs">
                  <span className="font-medium text-ink">
                    Best for:
                  </span>{" "}
                  {service.bestFor}
                </p>

                <Link
                  href={`/services/${service.slug}`}
                  className="mt-4 text-sm text-primary font-medium"
                >
                  View Details →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
