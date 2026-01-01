// src/config/seo.config.ts

import { siteConfig } from "./site.config";

export const seoConfig = {
  title: `${siteConfig.business.name} | ${siteConfig.business.tagline} in ${siteConfig.location.city}`,
  description: siteConfig.business.description,
  keywords: [
    "land surveyor",
    "building survey",
    "survey services",
    siteConfig.location.city,
  ],
};
