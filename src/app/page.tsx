import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site.config";
import { Star, ArrowRight, MapPin, CheckCircle2, Quote, ExternalLink } from "lucide-react";
import EstimatorTrigger from "@/components/common/EstimatorTrigger";

export default function HomePage() {
  const reviews = [
    { name: "Anuvarshini", stats: "2 reviews", text: "Professional, polite, and finished on time. Everything was explained clearly, and the survey report was very accurate.", image: "/images/profiles/user1.png" },
    { name: "isai nila", stats: "2 reviews", text: "Arrived on time, very professional. The final report helped move my project forward smoothly. Highly recommended!", image: "/images/profiles/user2.png" },
    { name: "arul Viswa", stats: "1 review", text: "Service marked by efficiency and punctuality. Working with them streamlined our processes and boosted productivity.", image: "/images/profiles/user3.png" },
    { name: "Edwin s", stats: "7 reviews", text: "Highest recommendation for land survey work. Timely production of a reasonable bid and certified survey.", image: "/images/profiles/user4.png" },
    { name: "Vivetha M", stats: "3 reviews", text: "Excellent service! Detailed, accurate, and completed on time — highly recommended for reliable results.", image: "/images/profiles/user5.png" },
    { name: "Roja", stats: "1 review", text: "Surveyed my land today, they completed on short time. One of the best surveys in palladam.", image: "/images/profiles/user6.png" },
  ];

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      {/* ... (Hero remains exactly as you have it) ... */}
<section className="relative pt-6 pb-20 overflow-hidden bg-white">
        <div className="container px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
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
                  <span className="absolute inset-0 z-0 translate-x-[-150%] bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shimmer" />
                  <span className="relative z-10">{siteConfig.location.city}</span>
                </span>
              </h1>

              <p className="max-w-lg text-base md:text-lg text-slate-600 leading-relaxed">
                Delivering <span className="text-slate-900 font-semibold">approval-ready</span> survey reports. Accurate data for landowners and developers with zero legal friction.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a href={`tel:${siteConfig.contact.phone}`} className="rounded-full bg-emerald-600 px-8 py-3.5 text-white font-bold transition-all hover:bg-emerald-700 hover:shadow-lg active:scale-95">
                  Call Engineer
                </a>
                <EstimatorTrigger />
              </div>
            </div>

            <div className="flex-1 relative w-full">
              <div className="relative aspect-[16/12] rounded-[2.5rem] overflow-hidden border-[12px] border-slate-50 shadow-2xl">
                <Image src="/images/hero-surveyor4.jpg" alt="Professional Surveying" fill className="object-cover scale-105" priority />
              </div>
              <div className="absolute -top-4 -left-4 bg-white/90 backdrop-blur px-4 py-3 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3">
                <div className="bg-emerald-500 p-1.5 rounded-lg text-white">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-[10px] font-bold uppercase text-slate-700">ISO Certified</span>
              </div>
              <div className="absolute top-1/2 -right-6 -translate-y-1/2 bg-slate-900 text-white p-5 rounded-3xl shadow-2xl border border-white/10 hidden md:block">
                <p className="text-3xl font-black text-emerald-400 leading-none">500+</p>
                <p className="text-[8px] font-bold uppercase tracking-widest mt-1 opacity-70">Projects Done</p>
              </div>
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
      {/* ================= FOUNDER AUTHORITY SECTION ================= */}
      <section className="py-24 bg-white">
        <div className="container px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="relative w-full max-w-md">
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-slate-50">
                <Image src="/images/owner.jpg" alt="R. Vishnu" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-6 rounded-[2rem] shadow-xl border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">Chief Surveyor</span>
                </div>
                <p className="text-lg font-bold">R. Vishnu</p>
                <p className="text-[10px] text-slate-400 uppercase font-medium">Licensed Land Surveyor</p>
              </div>
            </div>

            <div className="flex-1 space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-slate-900 leading-[1.1]">
                  Direct Expertise. <br />
                  <span className="text-emerald-600 italic">No Middlemen.</span>
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
                  When you hire RV Spatial Survey, you're working directly with licensed professionals. I personally oversee every boundary line and FMB track to ensure 100% legal compliance.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Legal Precision</h4>
                    <p className="text-xs text-slate-500">Reports ready for government approval.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50">
                  <MapPin className="w-6 h-6 text-emerald-600 shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Local Coverage</h4>
                    <p className="text-xs text-slate-500">Expertise in Palladam & Tirupur regions.</p>
                  </div>
                </div>
              </div>
              <div className="pt-4 flex items-center gap-6">
                <Link href="/services" className="px-8 py-4 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100">
                  Our Services
                </Link>
                <Link href={`tel:${siteConfig.contact.phone}`} className="text-sm font-bold text-slate-900 border-b-2 border-emerald-500 pb-1">
                  Speak with Vishnu →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= REFINED GOOGLE PROOF SECTION (LIGHT BG) ================= */}
      <section className="py-24 bg-slate-50/50">
        <div className="container px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#fbbf24" className="text-amber-400" />)}
                </div>
                <span className="text-sm font-bold text-slate-900">5.0 Rating</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tight text-slate-900">
                Verified Customer <span className="text-emerald-600 italic">Experiences</span>
              </h2>
            </div>
            
            <Link 
              href={siteConfig.links?.googleBusiness || "#"} 
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-full text-sm font-bold text-slate-600 hover:border-emerald-500 hover:text-emerald-600 transition-all shadow-sm"
            >
              Verify on Google Maps
              <ExternalLink size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((item, i) => (
              <div key={i} className="group p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-2xl overflow-hidden bg-slate-100 border border-slate-50">
                      <Image 
                        src={item.image} 
                        alt={item.name} 
                        fill 
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm leading-tight">{item.name}</h4>
                      <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-tighter">{item.stats}</p>
                    </div>
                  </div>
                  <Quote className="w-5 h-5 text-slate-100 group-hover:text-emerald-100 transition-colors" />
                </div>

                <p className="text-slate-600 text-sm leading-relaxed italic mb-6">
                  "{item.text}"
                </p>

                <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="#fbbf24" className="text-amber-400" />)}
                  </div>
                  <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Verified Stay</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}



//
