import { siteConfig } from "@/config/site.config";
import CallButton from "@/components/common/CallButton";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import ReviewCTA from "@/components/common/ReviewCTA";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] pt-16 pb-8 text-slate-300 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-12">
          
          {/* Column 1: Brand & Review Integrated (Wide) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">RV Spatial Surveys</h3>
              <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-[0.2em] mt-1">Precision First</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-400 max-w-sm">
                Professional land survey services in Coimbatore & Tirupur offering licensed surveyors, boundary surveys, topographic surveys, GPS mapping, and approval-ready survey reports.
              </p>
            </div>
            
            
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-6 opacity-50">Sitemap</h4>
            <ul className="grid grid-cols-1 gap-4 text-sm font-medium">
              <li><Link href="/services" className="text-slate-400 hover:text-emerald-400 transition-colors">Our Services</Link></li>
              <li><Link href="/gallery" className="text-slate-400 hover:text-emerald-400 transition-colors">Project Gallery</Link></li>
              <li><Link href="/about" className="text-slate-400 hover:text-emerald-400 transition-colors">About Practice</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-emerald-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact & Hours */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-6 opacity-50">Direct Support</h4>
              <div className="flex flex-col gap-3">
                 <CallButton />
                 <WhatsAppButton />
              </div>
            </div>
            <div className="flex items-start gap-2 pt-6 border-t border-white/5">
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Office</p>
                <p className="text-xs text-slate-300 mt-1">R.s puram 1st Street, PN Rd, Pandian Nagar, Tiruppur, 641602</p>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Hours</p>
                <p className="text-xs text-slate-300 mt-1">Mon—Sun, 24hrs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Ultra Compact */}
        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em]">
            © 2026 RV SPATIAL SURVEYS • LICENSED SURVEYORS
          </p>
        </div>
      </div>
    </footer>
  );
}