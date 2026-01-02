import { notFound } from "next/navigation";
import { servicesConfig } from "@/config/services.config";
import EstimatorTrigger from "@/components/common/EstimatorTrigger";

interface ServicePageProps {
  params: { slug: string };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = servicesConfig.find((s) => s.slug === params.slug);

  if (!service) notFound();

  return (
    <section className="section">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="section-title">{service.title}</h1>

        <p className="mt-4 text-slate-600">
          {service.details.definition}
        </p>

        {/* WHEN */}
        <div className="mt-10">
          <h2 className="text-xl font-heading font-semibold">
            When do you need this service?
          </h2>
          <ul className="mt-4 space-y-2">
            {service.details.whoNeedsThis.map((item, idx) => (
              <li key={idx} className="flex gap-2 text-slate-700">
                <span className="text-green-600">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* DELIVERABLES */}
        <div className="mt-10">
          <h2 className="text-xl font-heading font-semibold">
            What you will receive
          </h2>
          <ul className="mt-4 list-disc list-inside text-slate-700">
            {service.details.deliverables.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-slate-500">
            Typical turnaround: {service.details.typicalTurnaround}
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 card p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="font-medium text-ink">
              Need an estimate or final quotation?
            </p>
            <p className="text-sm text-slate-600">
              The estimator opens pre-filled for this service.
            </p>
          </div>

          <EstimatorTrigger prefillServiceId={service.id} />
        </div>
      </div>
    </section>
  );
}
