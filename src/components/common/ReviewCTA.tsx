import { ctaConfig } from "@/config/cta.config";
import { siteConfig } from "@/config/site.config";

export default function ReviewCTA() {
  return (
    <div className="card p-6">
      <p className="font-medium text-ink">
        {ctaConfig.review.label}
      </p>
      <p className="mt-2 text-sm text-muted">
        {ctaConfig.review.description}
      </p>

      <a
        href={siteConfig.location.googleReviewUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="cta-outline mt-4 inline-block"
      >
        Leave a Review
      </a>
    </div>
  );
}
