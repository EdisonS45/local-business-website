// src/app/page.tsx

import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import TrustSection from "@/components/sections/TrustSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <TrustSection />
      <CTASection />
    </>
  );
}
