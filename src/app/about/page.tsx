import { siteConfig } from "@/config/site.config";

export default function AboutPage() {
  return (
    <section className="section">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="section-title">About Our Survey Practice</h1>

        <p className="mt-4 text-slate-600">
          We are a professional land surveying practice providing accurate,
          approval-ready survey services for individuals, builders, and
          developers across {siteConfig.location.city}.
        </p>

        {/* WHY WE EXIST */}
        <div className="mt-10">
          <h2 className="text-xl font-heading font-semibold">
            Why clients choose us
          </h2>

          <ul className="mt-4 space-y-3 text-slate-700">
            <li>• Government-approved and licensed surveyors</li>
            <li>• Field-first approach — measurements before assumptions</li>
            <li>• Clear documentation suitable for banks and authorities</li>
            <li>• Transparent communication and defined timelines</li>
          </ul>
        </div>

        {/* HOW WE WORK */}
        <div className="mt-10">
          <h2 className="text-xl font-heading font-semibold">
            How we work
          </h2>

          <p className="mt-3 text-slate-600">
            Every project begins with understanding the purpose of the survey.
            We then carry out on-site measurements using calibrated instruments,
            cross-check records, and prepare clear deliverables that meet
            regulatory and practical requirements.
          </p>
        </div>

        {/* WHO WE WORK WITH */}
        <div className="mt-10">
          <h2 className="text-xl font-heading font-semibold">
            Who we typically work with
          </h2>

          <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-slate-700">
            <li>• Individual landowners</li>
            <li>• Property buyers and investors</li>
            <li>• Builders and contractors</li>
            <li>• Architects and engineers</li>
            <li>• Real estate developers</li>
            <li>• Banks and legal teams</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-12 card p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="font-medium text-ink">
              Need professional survey support?
            </p>
            <p className="text-sm text-slate-600">
              Speak directly with our engineer to understand the right survey
              for your requirement.
            </p>
          </div>

          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="cta-primary"
          >
            Call Engineer
          </a>
        </div>
      </div>
    </section>
  );
}
