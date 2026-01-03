import { siteConfig } from "@/config/site.config";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* 1. Header Section */}
      <section className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-emerald-600 font-bold text-sm uppercase tracking-widest">Our Story</span>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-slate-900 mt-4 leading-tight">
              Bridging the gap between <br />
              <span className="text-emerald-600">Land Records & Reality</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Based in {siteConfig.location.city}, we provide technical surveying expertise 
              that ensures landowners and developers move forward with absolute confidence.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Content & Stats */}
      <section className="py-16 border-y border-slate-100 bg-slate-50/30">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
          
          {/* Left: Detailed Text */}
          <div className="lg:col-span-7 space-y-8">
            <div className="prose prose-slate">
              <h2 className="text-2xl font-bold text-slate-900">Precision is our only standard.</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                In the surveying industry, a difference of a few centimeters can lead to years of legal friction. 
                That's why we've invested in the latest Electronic Total Stations and DGPS technology. 
                Our approach combines traditional field measurement values with modern digital output.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {["Government Licensed", "FMB Tracking Specialist", "CAD Certified Drafting", "Site-First Mentality"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-bold text-slate-800 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Focused Stats Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden h-full flex flex-col justify-center">
              <div className="space-y-10 relative z-10">
                <div>
                  <div className="text-4xl font-black text-emerald-400">500+</div>
                  <div className="text-slate-400 text-sm font-medium mt-1 uppercase tracking-wider">Successful Surveys</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-emerald-400">100%</div>
                  <div className="text-slate-400 text-sm font-medium mt-1 uppercase tracking-wider">Legal Compliance</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-emerald-400">15+</div>
                  <div className="text-slate-400 text-sm font-medium mt-1 uppercase tracking-wider">Years Experience</div>
                </div>
              </div>
              {/* Subtle background decoration */}
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Operational Philosophy */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-video rounded-[2.5rem] overflow-hidden bg-slate-100 border-8 border-slate-50 shadow-xl">
               <Image 
                  src="/images/hero-surveyor4.jpg" 
                  alt="Surveying team at work" 
                  fill 
                  className="object-cover"
               />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Methodology</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                We don't just measure; we verify. Every project undergoes a three-step verification 
                process: Field Data Collection, Record Cross-Checking, and Quality Approval. 
              </p>
              <p className="text-slate-600 leading-relaxed">
                This ensures that the maps and certificates you receive are ready for bank 
                loans, government approvals, or legal transfers without any back-and-forth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Contact Footer CTA */}
      {/* 4. Contact Footer CTA - Clean & High Contrast */}
<section className="pb-24 px-6">
  <div className="max-w-7xl mx-auto bg-slate-900 rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden">
    
    {/* Subtle Background Glow - Prevents it from feeling like a "flat" black box */}
    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]" />
    <div className="absolute -top-24 -left-24 w-72 h-72 bg-emerald-500/5 rounded-full blur-[80px]" />

    <div className="relative z-10">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
        Direct Access to <span className="text-emerald-400">Expertise</span>
      </h2>
      
      <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
        Skip the middleman. Talk directly to our lead engineer for a technical 
        consultation regarding your land survey requirements.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {/* Primary Action - Bright & Bold */}
        <a 
          href={`tel:${siteConfig.contact.phone}`} 
          className="flex items-center gap-3 bg-emerald-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-emerald-500 hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.5)] transition-all active:scale-95"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          Call Engineer Now
        </a>

        {/* Secondary Action - Subtle & Clean */}
        <a 
          href="/contact" 
          className="px-10 py-5 border-2 border-slate-700 text-white rounded-full font-bold text-lg hover:bg-slate-800 hover:border-slate-600 transition-all"
        >
          Get an Estimate
        </a>
      </div>

      {/* Trust Badge */}
      <p className="mt-8 text-slate-500 text-xs font-bold uppercase tracking-[0.2em]">
        Available Mon — Sat: 9:00 AM - 6:00 PM
      </p>
    </div>
  </div>
</section>
    </div>
  );
}