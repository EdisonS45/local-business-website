import { siteConfig } from "./site.config";

export const ctaConfig = {
  phoneLabel: "Call Now",
  whatsappLabel: "WhatsApp",

  defaultWhatsAppMessage: `Hello, I need assistance with a land survey in ${siteConfig.location.city}. Please guide me.`,

  serviceMessage: (serviceName: string, effort?: number) =>
    `Hello, I need a ${serviceName}.
${effort ? `Estimated Effort Score: ${effort}/100\n` : ""}
Location: ${siteConfig.location.city}
Please guide me on next steps.`,

  review: {
    label: "Leave a Google Review",
    description:
      "Your review helps others find a reliable survey engineer and improves our Google visibility.",
  },
};
