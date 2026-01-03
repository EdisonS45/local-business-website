// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site.config";
import { servicesConfig } from "@/config/services.config";
import EstimatorTrigger from "@/components/common/EstimatorTrigger";
import ClientLogos from "@/components/sections/ClientLogos";

export default function HomePage() {
  const phaseAServices = servicesConfig.filter((s) => s.phase === "A");

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-6 pb-20 overflow-hidden bg-white">
        <div className="container px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* LEFT CONTENT */}
            <div className="flex-[1.2] space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-100 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                  Government Approved License #12345
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight leading-[1.1] text-slate-900">
                Precision Spatial Data <br className="hidden md:block" />
                for <span className="relative inline-block overflow-hidden px-2 text-emerald-600">
                  {/* Glossy Animation Overlay */}
                  <span className="absolute inset-0 z-0 translate-x-[-150%] bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shimmer" />
                  <span className="relative z-10">{siteConfig.location.city}</span>
                </span>
              </h1>

              <p className="max-w-lg text-base md:text-lg text-slate-600 leading-relaxed">
                Delivering <span className="text-slate-900 font-semibold">approval-ready</span> survey reports. Accurate data for landowners and developers with zero legal friction.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a href={`tel:${siteConfig.contact.phone}`}
                   className="rounded-full bg-emerald-600 px-8 py-3.5 text-white font-bold transition-all hover:bg-emerald-700 hover:shadow-lg active:scale-95">
                   Call Engineer
                </a>
                <EstimatorTrigger />
              </div>
            </div>

            {/* RIGHT CONTENT: Triple Proof Image */}
            <div className="flex-1 relative w-full">
              <div className="relative aspect-[16/12] rounded-[2.5rem] overflow-hidden border-[12px] border-slate-50 shadow-2xl">
                <Image
                  src="/images/hero-surveyor4.jpg"
                  alt="Professional Surveying"
                  fill
                  className="object-cover scale-105"
                  priority
                />
              </div>

              {/* TRIPLE PROOF BADGES */}
              {/* Badge 1: Top Left */}
              <div className="absolute -top-4 -left-4 bg-white/90 backdrop-blur px-4 py-3 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3">
                 <div className="bg-emerald-500 p-1.5 rounded-lg text-white">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                 </div>
                 <span className="text-[10px] font-bold uppercase text-slate-700">ISO Certified</span>
              </div>

              {/* Badge 2: Middle Right */}
              <div className="absolute top-1/2 -right-6 -translate-y-1/2 bg-slate-900 text-white p-5 rounded-3xl shadow-2xl border border-white/10 hidden md:block">
                 <p className="text-3xl font-black text-emerald-400 leading-none">500+</p>
                 <p className="text-[8px] font-bold uppercase tracking-widest mt-1 opacity-70">Projects Done</p>
              </div>

              {/* Badge 3: Bottom Left */}
              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-[2rem] shadow-xl border border-slate-100 hidden md:block">
                 <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-slate-900">100%</span>
                    <span className="text-emerald-500 font-bold">↑</span>
                 </div>
                 <p className="text-[9px] font-bold uppercase tracking-tighter text-slate-500">Legal Accuracy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CLIENT LOGOS ================= */}
      <section className="py-12 bg-slate-50 border-y border-slate-100/50">
        <div className="container px-6">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-8">Trusted by Industry Leaders</p>
          <ClientLogos />
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="py-24 bg-white">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
              Our Specialized Surveying Services
            </h2>
            <div className="flex justify-center">
                <span className="h-1 w-12 bg-emerald-500 rounded-full" />
            </div>
            <p className="text-slate-600 text-sm md:text-base">
              Detailed reports including FMB tracking, contour mapping, and legal boundary verification.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {phaseAServices.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group relative p-8 rounded-[2.5rem] bg-slate-50/50 border border-slate-100 hover:bg-white hover:border-emerald-200 hover:shadow-[0_20px_50px_-12px_rgba(16,185,129,0.12)] transition-all duration-500"
              >
                {/* Visual Icon Box */}
                <div className="h-14 w-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-emerald-600 mb-8 group-hover:bg-emerald-600 group-hover:text-white group-hover:rotate-6 transition-all duration-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  {service.shortDescription}
                </p>
                
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-emerald-600">
                  EXPLORE DETAILS <span className="group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}