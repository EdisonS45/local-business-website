import { SurveyService, LandSizeRange } from "@/config/services.config";

export function calculateEffortScore(
  service: SurveyService,
  landSize: LandSizeRange
): number {
  const rawScore =
    service.baseEffort * service.landSizeMultiplier[landSize];

  // Clamp score between 20 and 100
  const normalized = Math.min(Math.max(Math.round(rawScore), 20), 100);

  return normalized;
}
