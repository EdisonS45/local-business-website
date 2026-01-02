import Image from "next/image";
import { projects } from "@/config/projects.config";

export default function ProjectsPage() {
  return (
    <section className="section">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="section-title">Project Experience</h1>
        <p className="section-subtitle">
          Real survey work carried out on-site. No stock visuals — only
          actual field processes and outputs.
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="card overflow-hidden">
              <div className="relative h-48 w-full bg-slate-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4">
                <p className="text-sm text-slate-500">
                  {project.serviceType} · {project.location}
                </p>

                <h3 className="mt-1 font-heading font-semibold text-lg">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm text-slate-600">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
