import { siteConfig } from "@/config/site.config";
import WhatsAppButton from "@/components/common/WhatsAppButton";

export default function ContactPage() {
  return (
    <section className="section">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="section-title">Contact & Enquiries</h1>

        <p className="mt-4 text-slate-600">
          For accurate guidance, quotations, and scheduling, we recommend
          speaking directly with our engineer. This helps avoid delays and
          misunderstandings.
        </p>

        {/* CONTACT OPTIONS */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {/* CALL */}
          <div className="card p-6">
            <h3 className="font-heading font-semibold text-lg">
              Call Engineer
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Best for urgent requirements, clarifications, and scheduling.
            </p>

            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="cta-primary mt-4 inline-block"
            >
              {siteConfig.contact.phone}
            </a>
          </div>

          {/* WHATSAPP */}
          <div className="card p-6">
            <h3 className="font-heading font-semibold text-lg">
              WhatsApp Enquiry
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Share details, documents, or site location conveniently.
            </p>

            <div className="mt-4">
              <WhatsAppButton
                label="Chat on WhatsApp"
                className="cta-outline"
              />
            </div>
          </div>
        </div>

        {/* NOTE */}
        <div className="mt-10 text-sm text-slate-500">
          Office visits are by prior appointment only to ensure availability
          of the concerned survey engineer.
        </div>
      </div>
    </section>
  );
}
