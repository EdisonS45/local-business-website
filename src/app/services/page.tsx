import Link from "next/link";
import { servicesConfig } from "@/config/services.config";
// 1. Import Lucide Icons
import { 
  Map, 
  FileCheck, 
  Satellite, 
  Mountain, 
  Building2, 
  Compass, 
  Calculator, 
  FlaskConical, 
  Ruler, 
  LayoutTemplate, 
  GitBranch, 
  Globe 
} from "lucide-react";

// 2. Create a Map for dynamic rendering
const IconMap: Record<string, any> = {
  Map,
  FileCheck,
  Satellite,
  Mountain,
  Building2,
  Compass,
  Calculator,
  FlaskConical,
  Ruler,
  LayoutTemplate,
  GitBranch,
  Globe
};

export default function ServicesPage() {
  const categories = ["Legal & Boundary", "Construction & Engineering", "Planning & Design"] as const;

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-slate-900 leading-tight">
            Full Service <span className="text-emerald-600">Catalog</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            From individual plot verification to large-scale infrastructure planning, 
            we provide end-to-end spatial solutions.
          </p>
        </div>

        {/* Category-based Listing */}
        {categories.map((cat) => (
          <div key={cat} className="mb-20 last:mb-0">
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-2xl font-bold text-slate-900">{cat}</h2>
              <div className="h-px bg-slate-100 flex-grow" />
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {servicesConfig
                .filter((s) => s.category === cat)
                .map((service) => {
                  // 3. Resolve the Icon component
                  const IconComponent = IconMap[service.iconName] || Map;

                  return (
                    <Link
                      key={service.id}
                      href={`/services/${service.slug}`}
                      className="group p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-emerald-200 hover:shadow-xl transition-all flex flex-col h-full"
                    >
                      {/* 4. Render Icon Box */}
                      <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                        <IconComponent className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600">
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-500 flex-grow leading-relaxed mb-6">
                        {service.shortDescription}
                      </p>
                      <div className="text-[10px] font-black uppercase tracking-widest text-emerald-600">
                        View Service Details →
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}