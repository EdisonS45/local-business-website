export type LandSizeRange = "<1-acre" | "1-5-acres" | "5-10-acres" | "10+-acres";

export interface SurveyService {
  id: string;
  iconName: string; // New Property
  title: string;
  slug: string;
  shortDescription: string;
  category: "Legal & Boundary" | "Construction & Engineering" | "Planning & Design";
  bestFor: string;
  phase: "A" | "specialized";
  baseEffort: number;
  landSizeMultiplier: Record<LandSizeRange, number>;
  details: {
    definition: string;
    whoNeedsThis: string[];
    deliverables: string[];
    typicalTurnaround: string;
  };
}

export const servicesConfig: SurveyService[] = [
  // --- CATEGORY: Legal & Boundary ---
  {
    id: "boundary-survey",
    iconName: "Map",
    title: "Boundary Survey",
    slug: "boundary-survey",
    category: "Legal & Boundary",
    shortDescription: "Define exact legal property boundaries using government records.",
    bestFor: "Fencing, disputes, bank loans",
    phase: "A",
    baseEffort: 45,
    landSizeMultiplier: { "<1-acre": 0.9, "1-5-acres": 1.0, "5-10-acres": 1.2, "10+-acres": 1.4 },
    details: {
      definition: "Determines exact legal limits based on FMB and physical measurements.",
      whoNeedsThis: ["Property owners installing fencing", "Buyers verifying land extent"],
      deliverables: ["Laminated boundary map", "Signed certificate"],
      typicalTurnaround: "2–3 working days"
    }
  },
  {
    id: "document-verification",
    iconName: "FileCheck",
    title: "Document Verification",
    slug: "document-verification",
    category: "Legal & Boundary",
    shortDescription: "Cross-verify land documents against physical ground reality.",
    bestFor: "Safe property purchase & due diligence",
    phase: "A",
    baseEffort: 40,
    landSizeMultiplier: { "<1-acre": 0.9, "1-5-acres": 1.0, "5-10-acres": 1.1, "10+-acres": 1.2 },
    details: {
      definition: "Identifies discrepancies between revenue records and actual field measurements.",
      whoNeedsThis: ["Property buyers", "Investors", "Legal teams"],
      deliverables: ["Verification report", "Comparison sheet"],
      typicalTurnaround: "1–2 working days"
    }
  },
  {
    id: "control-network",
    iconName: "Satellite",
    title: "Control Network Establishment",
    slug: "control-network",
    category: "Legal & Boundary",
    shortDescription: "High-precision GPS/DGPS coordinate points for large sites.",
    bestFor: "Large scale mapping & reference",
    phase: "specialized",
    baseEffort: 80,
    landSizeMultiplier: { "<1-acre": 1.0, "1-5-acres": 1.3, "5-10-acres": 1.6, "10+-acres": 2.0 },
    details: {
      definition: "Establishing permanent reference markers using satellite-based positioning.",
      whoNeedsThis: ["Govt agencies", "Industrial developers"],
      deliverables: ["Coordinate report", "Permanent markers"],
      typicalTurnaround: "4–6 working days"
    }
  },

  // --- CATEGORY: Construction & Engineering ---
  {
    id: "topographic-survey",
    iconName: "Mountain",
    title: "Topographic Survey",
    slug: "topographic-survey",
    category: "Construction & Engineering",
    shortDescription: "Detailed mapping of land features, contours, and elevations.",
    bestFor: "Construction planning & approvals",
    phase: "A",
    baseEffort: 55,
    landSizeMultiplier: { "<1-acre": 0.8, "1-5-acres": 1.0, "5-10-acres": 1.3, "10+-acres": 1.6 },
    details: {
      definition: "Maps natural and man-made features including height data.",
      whoNeedsThis: ["Architects", "Engineers", "Developers"],
      deliverables: ["Contour drawings", "3D CAD files"],
      typicalTurnaround: "3–5 working days"
    }
  },
  {
    id: "as-built-survey",
    iconName: "Building2",
    title: "As-Built Survey",
    slug: "as-built-survey",
    category: "Construction & Engineering",
    shortDescription: "Verify finished construction against original design plans.",
    bestFor: "Completion certificates & compliance",
    phase: "A",
    baseEffort: 50,
    landSizeMultiplier: { "<1-acre": 1.0, "1-5-acres": 1.1, "5-10-acres": 1.3, "10+-acres": 1.5 },
    details: {
      definition: "Documents actual positions of structures for legal compliance.",
      whoNeedsThis: ["Builders", "Government inspectors"],
      deliverables: ["Deviation report", "As-built drawings"],
      typicalTurnaround: "2–4 working days"
    }
  },
  {
    id: "setting-out",
    iconName: "Compass",
    title: "Setting-out Survey",
    slug: "setting-out",
    category: "Construction & Engineering",
    shortDescription: "Precisely marking design points on the ground for construction.",
    bestFor: "Foundations & structural alignment",
    phase: "specialized",
    baseEffort: 65,
    landSizeMultiplier: { "<1-acre": 1.0, "1-5-acres": 1.2, "5-10-acres": 1.4, "10+-acres": 1.6 },
    details: {
      definition: "Transferring architectural plans accurately to the physical site.",
      whoNeedsThis: ["Civil contractors", "Foundation crews"],
      deliverables: ["Ground pegs", "Setting-out certificate"],
      typicalTurnaround: "1–2 working days"
    }
  },
  {
    id: "earthwork-calc",
    iconName: "Calculator",
    title: "Earth Work Calculation",
    slug: "earth-work-calculation",
    category: "Construction & Engineering",
    shortDescription: "Precise volume calculation for cut and fill operations.",
    bestFor: "Contractor billing & land leveling",
    phase: "specialized",
    baseEffort: 50,
    landSizeMultiplier: { "<1-acre": 1.0, "1-5-acres": 1.2, "5-10-acres": 1.4, "10+-acres": 1.8 },
    details: {
      definition: "Calculating volume of soil to be moved for construction grading.",
      whoNeedsThis: ["Earthwork contractors", "Civil engineers"],
      deliverables: ["Volume report", "Cross-section drawings"],
      typicalTurnaround: "2–3 working days"
    }
  },
  {
    id: "geotechnical",
    iconName: "FlaskConical",
    title: "Geotechnical Investigation",
    slug: "geotechnical-investigation",
    category: "Construction & Engineering",
    shortDescription: "Soil testing and analysis for foundation safety.",
    bestFor: "Structural design & load bearing",
    phase: "specialized",
    baseEffort: 90,
    landSizeMultiplier: { "<1-acre": 1.0, "1-5-acres": 1.1, "5-10-acres": 1.2, "10+-acres": 1.4 },
    details: {
      definition: "Sub-surface investigation to determine soil properties.",
      whoNeedsThis: ["Structural engineers", "Commercial builders"],
      deliverables: ["Soil test report", "Borehole logs"],
      typicalTurnaround: "7–10 working days"
    }
  },
  {
    id: "leveling-survey",
    iconName: "Ruler",
    title: "Leveling Survey",
    slug: "leveling-survey",
    category: "Construction & Engineering",
    shortDescription: "Determining precise elevation differences across a site.",
    bestFor: "Drainage planning & road work",
    phase: "specialized",
    baseEffort: 40,
    landSizeMultiplier: { "<1-acre": 0.8, "1-5-acres": 1.0, "5-10-acres": 1.3, "10+-acres": 1.6 },
    details: {
      definition: "Using levels to establish bench marks and vertical control.",
      whoNeedsThis: ["Planners", "Road engineers"],
      deliverables: ["Reduced level sheet", "Elevation map"],
      typicalTurnaround: "1–2 working days"
    }
  },

  // --- CATEGORY: Planning & Design ---
  {
    id: "subdivision",
    iconName: "LayoutTemplate",
    title: "Subdivision & Layout Design",
    slug: "subdivision-layout",
    category: "Planning & Design",
    shortDescription: "Professional division of land into residential or commercial plots.",
    bestFor: "Real estate developers",
    phase: "A",
    baseEffort: 70,
    landSizeMultiplier: { "<1-acre": 1.2, "1-5-acres": 1.4, "5-10-acres": 1.6, "10+-acres": 1.9 },
    details: {
      definition: "Designing road networks and plot layouts based on DTCP/Local rules.",
      whoNeedsThis: ["Land promoters", "Developers"],
      deliverables: ["Layout plan", "Area calculations"],
      typicalTurnaround: "5–7 working days"
    }
  },
  {
    id: "alignment-planning",
    iconName: "GitBranch",
    title: "Alignment Planning Survey",
    slug: "alignment-planning",
    category: "Planning & Design",
    shortDescription: "Route planning for roads, pipelines, and corridors.",
    bestFor: "Infrastructure & linear projects",
    phase: "specialized",
    baseEffort: 75,
    landSizeMultiplier: { "<1-acre": 1.0, "1-5-acres": 1.3, "5-10-acres": 1.6, "10+-acres": 2.0 },
    details: {
      definition: "Surveying a long narrow strip of land for infrastructure pathing.",
      whoNeedsThis: ["Government", "Utility companies"],
      deliverables: ["L-Section", "Cross-sections"],
      typicalTurnaround: "5–10 working days"
    }
  },
  {
    id: "master-planning",
    iconName: "Globe",
    title: "Master Planning Support",
    slug: "master-planning-support",
    category: "Planning & Design",
    shortDescription: "Comprehensive data support for large-scale urban planning.",
    bestFor: "Townships & institutional campuses",
    phase: "specialized",
    baseEffort: 100,
    landSizeMultiplier: { "<1-acre": 1.0, "1-5-acres": 1.4, "5-10-acres": 1.8, "10+-acres": 2.5 },
    details: {
      definition: "Providing 360-degree spatial data for master plan development.",
      whoNeedsThis: ["Urban planners", "Campus architects"],
      deliverables: ["Comprehensive base map", "GIS ready data"],
      typicalTurnaround: "10–15 working days"
    }
  }
];