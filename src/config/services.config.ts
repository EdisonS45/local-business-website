export type LandSizeRange =
  | "<1-acre"
  | "1-5-acres"
  | "5-10-acres"
  | "10+-acres";

export interface SurveyService {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;

  // UI / Conversion
  bestFor: string;
  phase: "A" | "later";

  // Estimator logic
  baseEffort: number; // 0–100 baseline
  landSizeMultiplier: Record<LandSizeRange, number>;

  // Service detail content
  details: {
    definition: string;
    whoNeedsThis: string[];
    deliverables: string[];
    typicalTurnaround: string;
  };
}

export const servicesConfig: SurveyService[] = [
  {
    id: "boundary-survey",
    title: "Boundary Survey",
    slug: "boundary-survey",
    shortDescription: "Define exact legal property boundaries.",
    bestFor: "Fencing, property disputes, bank loans",
    phase: "A",

    baseEffort: 45,
    landSizeMultiplier: {
      "<1-acre": 0.9,
      "1-5-acres": 1.0,
      "5-10-acres": 1.2,
      "10+-acres": 1.4,
    },

    details: {
      definition:
        "A Boundary Survey determines the exact legal limits of a property based on government records and physical measurements.",
      whoNeedsThis: [
        "Property owners installing fencing",
        "Buyers verifying land extent",
        "Owners resolving boundary disputes",
      ],
      deliverables: [
        "Laminated boundary map",
        "Surveyor-signed certificate",
        "Digital CAD drawing",
      ],
      typicalTurnaround: "2–3 working days",
    },
  },

  {
    id: "topographic-survey",
    title: "Topographic Survey",
    slug: "topographic-survey",
    shortDescription: "Map land features, contours, and elevations.",
    bestFor: "Construction planning & approvals",
    phase: "A",

    baseEffort: 55,
    landSizeMultiplier: {
      "<1-acre": 0.8,
      "1-5-acres": 1.0,
      "5-10-acres": 1.3,
      "10+-acres": 1.6,
    },

    details: {
      definition:
        "A Topographic Survey maps the natural and man-made features of land, including elevations, contours, and structures.",
      whoNeedsThis: [
        "Architects & engineers",
        "Developers planning construction",
        "Landowners seeking layout approvals",
      ],
      deliverables: [
        "Topographic map",
        "Contour drawings",
        "AutoCAD digital files",
      ],
      typicalTurnaround: "3–5 working days",
    },
  },

  {
    id: "as-built-survey",
    title: "As-Built Survey",
    slug: "as-built-survey",
    shortDescription: "Verify constructed structures against plans.",
    bestFor: "Completion certificates & compliance",
    phase: "A",

    baseEffort: 50,
    landSizeMultiplier: {
      "<1-acre": 1.0,
      "1-5-acres": 1.1,
      "5-10-acres": 1.3,
      "10+-acres": 1.5,
    },

    details: {
      definition:
        "An As-Built Survey documents the actual position and dimensions of completed structures for compliance verification.",
      whoNeedsThis: [
        "Builders completing projects",
        "Owners applying for completion approvals",
      ],
      deliverables: [
        "As-built drawings",
        "Deviation report (if any)",
        "Signed survey documentation",
      ],
      typicalTurnaround: "2–4 working days",
    },
  },

  {
    id: "setting-out-survey",
    title: "Setting-Out Survey",
    slug: "setting-out-survey",
    shortDescription: "Mark construction points accurately on site.",
    bestFor: "Foundations & structural work",
    phase: "A",

    baseEffort: 60,
    landSizeMultiplier: {
      "<1-acre": 1.0,
      "1-5-acres": 1.2,
      "5-10-acres": 1.4,
      "10+-acres": 1.6,
    },

    details: {
      definition:
        "A Setting-Out Survey transfers approved construction plans onto the ground with precise reference points.",
      whoNeedsThis: [
        "Builders & contractors",
        "Engineers supervising construction",
      ],
      deliverables: [
        "Ground reference markings",
        "Setting-out report",
      ],
      typicalTurnaround: "1–2 working days",
    },
  },

  {
    id: "subdivision-layout",
    title: "Subdivision & Layout Design Survey",
    slug: "subdivision-layout",
    shortDescription: "Plan and divide land into approved plots.",
    bestFor: "Layouts & real estate development",
    phase: "A",

    baseEffort: 70,
    landSizeMultiplier: {
      "<1-acre": 1.2,
      "1-5-acres": 1.4,
      "5-10-acres": 1.6,
      "10+-acres": 1.9,
    },

    details: {
      definition:
        "This survey supports planning and approval of land subdivision into plots, roads, and common areas.",
      whoNeedsThis: [
        "Developers",
        "Landowners planning layouts",
      ],
      deliverables: [
        "Approved layout drawings",
        "Area calculation statements",
        "Digital CAD files",
      ],
      typicalTurnaround: "5–7 working days",
    },
  },

  {
    id: "document-verification",
    title: "Document Verification Survey",
    slug: "document-verification",
    shortDescription: "Verify land documents against ground reality.",
    bestFor: "Safe property purchase",
    phase: "A",

    baseEffort: 40,
    landSizeMultiplier: {
      "<1-acre": 0.9,
      "1-5-acres": 1.0,
      "5-10-acres": 1.1,
      "10+-acres": 1.2,
    },

    details: {
      definition:
        "This survey verifies land records, extents, and boundaries to identify discrepancies before transactions.",
      whoNeedsThis: [
        "Property buyers",
        "Investors",
        "Banks & legal teams",
      ],
      deliverables: [
        "Verification report",
        "Field measurement comparison",
        "Surveyor confirmation",
      ],
      typicalTurnaround: "1–2 working days",
    },
  },
];
