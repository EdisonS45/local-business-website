import { notFound } from "next/navigation";
import { servicesConfig } from "@/config/services.config";
import EstimatorTrigger from "@/components/common/EstimatorTrigger";

interface ServicePageProps {
  params: { slug: string };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = servicesConfig.find((s) => s.slug === params.slug);

  if (!service) notFound();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <span className="text-emerald-600 font-bold text-sm uppercase tracking-widest">Professional Service</span>
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-slate-900 mt-2 mb-6">{service.title}</h1>
        
        <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-emerald-500 pl-6 mb-12">
          {service.details.definition}
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4">When you need this</h2>
            <ul className="space-y-3">
              {service.details.whoNeedsThis.map((item, idx) => (
                <li key={idx} className="flex gap-3 text-slate-700 items-start">
                  <div className="mt-1 bg-emerald-100 p-1 rounded-md">
                    <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-slate-50 p-8 rounded-[2rem]">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Deliverables</h2>
            <ul className="list-disc list-inside text-sm text-slate-600 space-y-2">
              {service.details.deliverables.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-slate-200">
               <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Typical Turnaround</p>
               <p className="text-slate-900 font-bold">{service.details.typicalTurnaround}</p>
            </div>
          </div>
        </div>

        {/* Synced Estimator Trigger */}
        <div className="mt-16 bg-emerald-50 p-10 rounded-[2.5rem] border border-emerald-100 flex flex-col md:flex-row items-center justify-between">
           <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-xl font-bold text-emerald-900">Get a Detailed Quote</h3>
              <p className="text-emerald-700 text-sm">Our estimator is pre-filled for this specific service.</p>
           </div>
           <EstimatorTrigger 
             prefillServiceId={service.id} 
             className="h-14 px-10 rounded-full bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition-all shadow-lg"
           />
        </div>
      </div>
    </section>
  );
}

