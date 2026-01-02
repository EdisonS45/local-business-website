import { ctaConfig } from "@/config/cta.config";
import { siteConfig } from "@/config/site.config";

export default function ReviewCTA() {
  return (
    <div className="card p-6">
      <p className="font-medium text-ink">
        {ctaConfig.review.label}
      </p>
      <p className="mt-2 text-sm text-slate-600">
        {ctaConfig.review.description}
      </p>

      <a
        href={siteConfig.location.googleReviewUrl}
        target="_blank"
        className="cta-outline mt-4 inline-block"
      >
        Leave Review
      </a>
    </div>
  );
}
