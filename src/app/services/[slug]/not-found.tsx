import Link from "next/link";

export default function ServiceNotFound() {
  return (
    <section className="section">
      <div className="max-w-xl mx-auto px-4 text-center">
        <h1 className="section-title">Service Not Found</h1>
        <p className="mt-4 text-slate-600">
          The service you are looking for does not exist or is no longer
          available.
        </p>

        <Link
          href="/services"
          className="inline-block mt-6 cta-primary"
        >
          View All Services
        </Link>
      </div>
    </section>
  );
}
