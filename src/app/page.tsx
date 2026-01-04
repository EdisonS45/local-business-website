import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site.config";
import { Star, MapPin, CheckCircle2, Quote, ExternalLink, Phone, ArrowRight } from "lucide-react";
import WhatsAppButton from "@/components/common/WhatsAppButton"; 
import ClientLogos from "@/components/sections/ClientLogos";

export default function HomePage() {
  const reviews = [
    { name: "Anuvarshini", stats: "2 reviews", text: "Professional, polite, and finished on time. Everything was explained clearly, and the survey report was very accurate.", image: "/images/profiles/user6.png" },
    { name: "isai nila", stats: "2 reviews", text: "Arrived on time, very professional. The final report helped move my project forward smoothly. Highly recommended!", image: "/images/profiles/user2.png" },
    { name: "arul Viswa", stats: "1 review", text: "Service marked by efficiency and punctuality. Working with them streamlined our processes and boosted productivity.", image: "/images/profiles/user3.png" },
    { name: "Edwin s", stats: "7 reviews", text: "Highest recommendation for land survey work. Timely production of a reasonable bid and certified survey.", image: "/images/profiles/user4.png" },
    { name: "Vineeth M", stats: "3 reviews", text: "Excellent service! Detailed, accurate, and completed on time — highly recommended for reliable results.", image: "/images/profiles/user5.png" },
    { name: "Roja", stats: "1 review", text: "Surveyed my land today, they completed on short time. One of the best surveys in palladam.", image: "/images/profiles/user1.png" },
  ];

  return (
    <>
      <section className="relative pt-6 pb-20 overflow-hidden bg-white">
        <div className="container px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-[1.2] space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-100 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                  Government Approved License
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight leading-[1.1] text-slate-900">
                Digital Land Surveyors <br className="hidden md:block" />
                in{" "}
                <span 
                  className="relative inline-block translate-y-[1px] text-transparent bg-clip-text bg-emerald-600/90 select-none"
                  style={{ WebkitBackgroundClip: 'text' }}
                >
                  {siteConfig.location.city}
                </span>
              </h1>

              <p className="max-w-lg text-base md:text-lg text-slate-600 leading-relaxed">
                RV Spatial Surveys provides digital <span className="text-slate-900 font-semibold"> land surveying services</span> delivering accurate boundary, topographic, and site survey reports for landowners, builders, and developers.
              </p>

              {/* BUTTON SECTION: Changed Call to Black on mobile to contrast with sticky footer */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <a 
                  href={`tel:${siteConfig.contact.phone}`} 
                  className="flex items-center justify-center gap-2 w-full sm:w-auto rounded-full bg-slate-900 sm:bg-emerald-600 px-8 py-4 text-white font-bold transition-all hover:bg-slate-800 active:scale-95 shadow-lg"
                >
                  <Phone size={18} />
                  Call Engineer
                </a>
                <div className="w-full sm:w-auto sm:min-w-[180px]">
                  <WhatsAppButton 
                    label="WhatsApp Us" 
                    variant="outline" 
                    size="lg"
                  />
                </div>
              </div>
            </div>

            {/* IMAGE SECTION: Fixed mobile visibility */}
            <div className="flex-1 relative w-full h-[300px] sm:h-auto">
              <div className="relative h-full aspect-[16/12] rounded-[2.5rem] overflow-hidden border-[8px] md:border-[12px] border-slate-50 shadow-2xl">
                <Image 
                  src="/images/hero-surveyor4.jpg" 
                  alt="Professional Surveying" 
                  fill 
                  className="object-cover scale-105" 
                  priority 
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 border-y border-slate-50 bg-white">
        <div className="container px-6">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/4 text-center lg:text-left">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                Trusted Partners
              </p>
              <h3 className="text-xl font-extrabold text-slate-900">
                Industry Leaders
              </h3>
            </div>
            <div className="w-full lg:w-3/4">
              <ClientLogos />
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER SECTION */}
      <section className="py-24 bg-white">
        <div className="container px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            
            {/* IMAGE CONTAINER: Fixed height for mobile (h-[450px]) and desktop (md:h-[550px]) */}
            <div className="relative w-full max-w-md h-[450px] md:h-[550px]">
              <div className="relative h-full w-full rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-slate-50">
                <Image 
                  src="/images/owner.JPG" 
                  alt="R. Vishnu" 
                  fill 
                  className="object-cover" 
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority // Ensures the image loads immediately
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-2 md:-right-6 bg-slate-900 text-white p-6 rounded-[2rem] shadow-xl border border-white/10 z-10">
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

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-8">
                <Link href="/services" className="w-full sm:w-auto px-8 py-4 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-700 transition-all shadow-lg text-center whitespace-nowrap">
                  Our Services
                </Link>
                <Link 
                  href={`tel:${siteConfig.contact.phone}`} 
                  className="group flex items-center gap-2 text-sm font-bold text-slate-900 border-b-2 border-emerald-500 pb-1 whitespace-nowrap"
                >
                  Speak with Vishnu <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION remains same as requested */}
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
              href={siteConfig.business.name || "#"} 
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-full text-sm font-bold text-slate-600 hover:border-emerald-500 hover:text-emerald-600 transition-all shadow-sm"
            >
              Verify on Google Maps <ExternalLink size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((item, i) => (
              <div key={i} className="group p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-2xl overflow-hidden bg-slate-100 border border-slate-50">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm leading-tight">{item.name}</h4>
                      <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-tighter">{item.stats}</p>
                    </div>
                  </div>
                  <Quote className="w-5 h-5 text-slate-100 group-hover:text-emerald-100 transition-colors" />
                </div>
                <p className="text-slate-600 text-sm leading-relaxed italic mb-6">"{item.text}"</p>
                <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="#fbbf24" className="text-amber-400" />)}
                  </div>
                  <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Verified Review</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}