import Image from "next/image";
import { projects } from "@/config/projects.config";

export default function ProjectsPage() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-heading font-extrabold text-slate-900">Project Experience</h1>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Real survey work carried out on-site. No stock visuals — only actual field processes.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500">
              <div className="relative h-64 w-full">
                <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-emerald-700">
                  {project.location}
                </div>
              </div>
              <div className="p-8">
                <p className="text-emerald-600 font-bold text-xs uppercase tracking-widest mb-2">{project.serviceType}</p>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}