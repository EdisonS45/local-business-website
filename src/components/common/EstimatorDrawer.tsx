"use client";

import { useEffect, useState } from "react";
import { servicesConfig, LandSizeRange, SurveyService } from "@/config/services.config";
import { calculateEffortScore } from "@/lib/effortCalculator";
import { siteConfig } from "@/config/site.config";

interface EstimatorDrawerProps {
  open: boolean;
  onClose: () => void;
  prefillServiceId?: string;
}

const landSizeOptions: { label: string; value: LandSizeRange }[] = [
  { label: "< 1 Acre", value: "<1-acre" },
  { label: "1 – 5 Acres", value: "1-5-acres" },
  { label: "5 – 10 Acres", value: "5-10-acres" },
  { label: "10+ Acres", value: "10+-acres" },
];

export default function EstimatorDrawer({
  open,
  onClose,
  prefillServiceId,
}: EstimatorDrawerProps) {
  const phaseAServices = servicesConfig.filter((s) => s.phase === "A");

  const [service, setService] = useState<SurveyService | null>(null);
  const [landSize, setLandSize] = useState<LandSizeRange | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (open) {
      setMounted(true);
      if (prefillServiceId) {
        const pre = phaseAServices.find((s) => s.id === prefillServiceId);
        if (pre) setService(pre);
      }
    } else {
      const t = setTimeout(() => setMounted(false), 200);
      return () => clearTimeout(t);
    }
  }, [open, prefillServiceId]);

  const effortScore =
    service && landSize
      ? calculateEffortScore(service, landSize)
      : null;

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        className={`flex-1 bg-black/30 transition-opacity duration-200 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
        aria-hidden
      />

      {/* Drawer */}
      <aside
        className={`w-full max-w-md bg-white border-l border-slate-200 p-6 flex flex-col
        transform transition-transform duration-200 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="mb-6">
          <h2 className="text-xl font-heading font-semibold">
            New Survey Quote
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Estimate technical effort before final quotation.
          </p>
        </header>

        {/* Form */}
        <div className="flex-1 space-y-6">
          {/* Service */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Select Service
            </label>
            <select
              className="w-full border border-slate-300 rounded-md px-3 py-2"
              value={service?.id ?? ""}
              onChange={(e) => {
                const selected = phaseAServices.find(
                  (s) => s.id === e.target.value
                );
                setService(selected ?? null);
              }}
            >
              <option value="">Choose a service</option>
              {phaseAServices.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>

          {/* Land Size */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Approximate Land Size
            </label>
            <div className="grid grid-cols-2 gap-3">
              {landSizeOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setLandSize(opt.value)}
                  className={`border rounded-md px-3 py-2 text-sm transition
                    ${
                      landSize === opt.value
                        ? "border-safety bg-orange-50 text-ink"
                        : "border-slate-300 hover:bg-slate-50"
                    }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Result */}
          {effortScore !== null && service && (
            <div className="card p-4 ring-1 ring-orange-200">
              <p className="text-sm text-slate-600">
                {siteConfig.estimator.effortLabel}
              </p>
              <p className="text-3xl font-heading font-bold mt-1">
                {effortScore} / 100
              </p>
              <p className="text-xs text-slate-500 mt-2">
                {siteConfig.estimator.disclaimer}
              </p>
            </div>
          )}
        </div>

        {/* CTA */}
        <footer className="mt-6 space-y-3">
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="cta-primary w-full block text-center"
          >
            Call Engineer
          </a>

          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
              `Hello, I need a quote for ${service?.title ?? "a survey"}.
Estimated Effort Score: ${effortScore ?? "N/A"}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-outline w-full block text-center"
          >
            WhatsApp for Final Quote
          </a>

          <button
            onClick={onClose}
            className="w-full text-sm text-slate-500 hover:text-slate-700"
          >
            Close
          </button>
        </footer>
      </aside>
    </div>
  );
}
