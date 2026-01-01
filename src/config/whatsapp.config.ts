// src/config/whatsapp.config.ts

import { siteConfig } from "./site.config";

export const whatsappConfig = {
  defaultMessage: `Hi, I’m looking for ${siteConfig.business.tagline.toLowerCase()} in ${siteConfig.location.city}. Please contact me.`,
};
