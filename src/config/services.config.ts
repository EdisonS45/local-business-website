// src/config/services.config.ts

export type Service = {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  targetCustomers: string[];
};

export const servicesConfig: Service[] = [
  {
    id: "land-survey",
    title: "Land Survey",
    shortDescription:
      "Precise land measurement and boundary identification.",
    detailedDescription:
      "We provide accurate land survey services to identify boundaries, measure land extent, and prepare legal survey documents for residential and commercial properties.",
    targetCustomers: ["Land Owners", "Property Buyers", "Builders"],
  },
  {
    id: "building-survey",
    title: "Building Survey",
    shortDescription:
      "Detailed building measurements for planning and approval.",
    detailedDescription:
      "Our building survey services include measurement, documentation, and reporting required for approvals, renovations, and construction planning.",
    targetCustomers: ["Construction Companies", "Architects"],
  },
  {
    id: "boundary-survey",
    title: "Boundary Survey",
    shortDescription:
      "Clear boundary marking to avoid disputes.",
    detailedDescription:
      "Boundary surveys help clearly define property limits and avoid future legal disputes by accurately marking land boundaries.",
    targetCustomers: ["Land Owners", "Developers"],
  },
  {
    id: "layout-survey",
    title: "Layout Survey",
    shortDescription:
      "Survey solutions for layouts and subdivisions.",
    detailedDescription:
      "We assist promoters and developers with layout surveys required for subdivision planning and government approvals.",
    targetCustomers: ["Promoters", "Developers"],
  },
];
